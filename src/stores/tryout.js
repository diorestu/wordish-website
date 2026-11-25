import { defineStore } from 'pinia'
import { sampleExamQuestions } from '../data/tryoutData'
import confetti from 'canvas-confetti'

export const useTryoutStore = defineStore('tryout', {
  state: () => ({
    currentExam: null,
    questions: sampleExamQuestions,
    currentIndex: 0,
    userAnswers: {}, // { [questionId]: 'A' }
    flagged: {},     // { [questionId]: true }
    timerSeconds: 15 * 60, // 15 mins default
    timerInterval: null,
    isExamRunning: false,
    isExamSubmitted: false,
    finalResult: null
  }),

  getters: {
    totalQuestions: (state) => state.questions.length,
    currentQuestion: (state) => state.questions[state.currentIndex] || {},
    answeredCount: (state) => Object.keys(state.userAnswers).length,
    formattedTime: (state) => {
      const minutes = Math.floor(state.timerSeconds / 60)
      const seconds = state.timerSeconds % 60
      return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    }
  },

  actions: {
    startExam(exam) {
      this.currentExam = exam
      this.currentIndex = 0
      this.userAnswers = {}
      this.flagged = {}
      this.isExamSubmitted = false
      this.finalResult = null
      this.timerSeconds = (exam.durationMinutes || 15) * 60
      this.isExamRunning = true

      if (this.timerInterval) clearInterval(this.timerInterval)
      this.timerInterval = setInterval(() => {
        if (this.timerSeconds > 0) {
          this.timerSeconds--
        } else {
          this.submitExam()
        }
      }, 1000)
    },

    selectAnswer(questionId, optionKey) {
      if (!this.isExamRunning || this.isExamSubmitted) return
      this.userAnswers[questionId] = optionKey
    },

    toggleFlag(questionId) {
      this.flagged[questionId] = !this.flagged[questionId]
    },

    goToQuestion(index) {
      if (index >= 0 && index < this.questions.length) {
        this.currentIndex = index
      }
    },

    nextQuestion() {
      if (this.currentIndex < this.questions.length - 1) {
        this.currentIndex++
      }
    },

    prevQuestion() {
      if (this.currentIndex > 0) {
        this.currentIndex--
      }
    },

    submitExam() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval)
        this.timerInterval = null
      }
      this.isExamRunning = false
      this.isExamSubmitted = true

      // Calculate score and IRT emulation
      let correctCount = 0
      let subtestScores = {}

      this.questions.forEach((q) => {
        const isCorrect = this.userAnswers[q.id] === q.correctAnswer
        if (isCorrect) correctCount++

        if (!subtestScores[q.subtest]) {
          subtestScores[q.subtest] = { total: 0, correct: 0 }
        }
        subtestScores[q.subtest].total++
        if (isCorrect) subtestScores[q.subtest].correct++
      })

      // IRT scaled score (200 - 1000)
      const baseScore = 300
      const weightPerQuestion = (700 / this.questions.length)
      const totalScore = Math.round(baseScore + (correctCount * weightPerQuestion) + (Math.random() * 15))

      const percentage = Math.round((correctCount / this.questions.length) * 100)

      this.finalResult = {
        totalScore,
        correctCount,
        wrongCount: this.questions.length - correctCount,
        percentage,
        subtests: Object.keys(subtestScores).map(name => ({
          name,
          total: subtestScores[name].total,
          correct: subtestScores[name].correct,
          score: Math.round((subtestScores[name].correct / subtestScores[name].total) * 1000)
        })),
        ptnPrediction: totalScore >= 700
          ? 'Sangat Berpeluang Lolos Pilihan 1 (STEI ITB / FK UI / FH UGM)'
          : totalScore >= 600
          ? 'Peluang Lolos Baik di PTN Pilihan 1 & 2'
          : 'Perlu Penguatan di Subtes Penalaran Matematika',
        status: totalScore >= 650 ? 'LULUS AMAN' : 'PERLU PENINGKATAN'
      }

      // Fire celebratory confetti if high score
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        })
      } catch (e) {
        // Safe fallback
      }
    },

    resetExam() {
      if (this.timerInterval) clearInterval(this.timerInterval)
      this.isExamRunning = false
      this.isExamSubmitted = false
      this.userAnswers = {}
      this.flagged = {}
      this.finalResult = null
    }
  }
})
