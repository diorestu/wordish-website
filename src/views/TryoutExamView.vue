<template>
  <div class="py-6 bg-grey-lighten-4 min-vh-100">
    <v-container class="max-width-xl px-4">
      <!-- EXAM IN PROGRESS VIEW -->
      <template v-if="!tryoutStore.isExamSubmitted">
        <!-- Top Sticky Control Bar -->
        <v-card class="pa-4 rounded-2xl border mb-6 bg-white shadow-sm d-flex flex-wrap align-center justify-space-between ga-3 sticky-exam-bar">
          <div class="d-flex align-center">
            <v-chip size="small" color="primary" class="font-weight-bold mr-3">
              {{ tryoutStore.currentExam?.title || 'Simulasi UTBK SNBT 2026' }}
            </v-chip>
            <span class="text-caption text-grey font-weight-medium">
              Soal <strong>{{ tryoutStore.currentIndex + 1 }}</strong> dari <strong>{{ tryoutStore.totalQuestions }}</strong>
            </span>
          </div>

          <!-- Countdown Timer -->
          <div class="d-flex align-center bg-red-lighten-5 px-4 py-2 rounded-pill border border-red-lighten-3">
            <v-icon icon="mdi-timer-outline" color="error" class="mr-2"></v-icon>
            <span class="text-subtitle-2 font-weight-extrabold text-error font-mono">
              Sisa Waktu: {{ tryoutStore.formattedTime }}
            </span>
          </div>

          <!-- Finish Button -->
          <v-btn
            color="error"
            class="text-none font-weight-bold text-white shadow-sm"
            @click="confirmSubmitDialog = true"
          >
            Kumpulkan Jawaban
          </v-btn>
        </v-card>

        <v-row>
          <!-- Main Question Box (Left 8 cols) -->
          <v-col cols="12" md="8">
            <v-card class="pa-6 rounded-2xl border bg-white shadow-sm mb-4">
              <!-- Subtest & Difficulty -->
              <div class="d-flex justify-space-between align-center pb-3 border-b mb-4">
                <div class="d-flex align-center ga-2">
                  <v-chip size="small" color="secondary" variant="flat" class="font-weight-bold">
                    {{ currentQ.subtest }}
                  </v-chip>
                  <v-chip size="small" :color="currentQ.difficulty === 'HOTS' ? 'error' : 'warning'" variant="tonal" class="font-weight-bold">
                    {{ currentQ.difficulty }}
                  </v-chip>
                </div>

                <!-- Flag Ragu-ragu -->
                <v-btn
                  size="small"
                  :variant="isCurrentFlagged ? 'flat' : 'outlined'"
                  :color="isCurrentFlagged ? 'warning' : 'grey'"
                  class="text-none font-weight-bold"
                  prepend-icon="mdi-flag"
                  @click="tryoutStore.toggleFlag(currentQ.id)"
                >
                  {{ isCurrentFlagged ? 'Ragu-ragu (Ditandai)' : 'Tandai Ragu-ragu' }}
                </v-btn>
              </div>

              <!-- Question Text -->
              <div class="text-body-1 font-weight-medium text-secondary mb-6 whitespace-pre-line" style="line-height: 1.7; white-space: pre-line;">
                {{ currentQ.question }}
              </div>

              <!-- Options Radio List -->
              <div class="d-flex flex-column ga-3 mb-6">
                <div
                  v-for="opt in currentQ.options"
                  :key="opt.key"
                  class="option-item border rounded-xl pa-3 cursor-pointer d-flex align-center transition-all"
                  :class="{
                    'bg-blue-lighten-5 border-primary font-weight-bold': currentSelectedAnswer === opt.key,
                    'hover-bg-grey': currentSelectedAnswer !== opt.key
                  }"
                  @click="tryoutStore.selectAnswer(currentQ.id, opt.key)"
                >
                  <div
                    class="option-badge mr-3 d-flex align-center justify-center font-weight-bold text-body-2"
                    :class="currentSelectedAnswer === opt.key ? 'bg-primary text-white' : 'bg-grey-lighten-3 text-secondary'"
                  >
                    {{ opt.key }}
                  </div>
                  <div class="text-body-2 text-secondary flex-grow-1">
                    {{ opt.text }}
                  </div>
                </div>
              </div>

              <!-- Question Navigation Buttons -->
              <div class="d-flex justify-space-between align-center pt-4 border-t">
                <v-btn
                  variant="outlined"
                  class="text-none font-weight-bold"
                  :disabled="tryoutStore.currentIndex === 0"
                  prepend-icon="mdi-chevron-left"
                  @click="tryoutStore.prevQuestion()"
                >
                  Sebelumnya
                </v-btn>

                <div class="text-caption text-grey">
                  Terjawab: {{ tryoutStore.answeredCount }} / {{ tryoutStore.totalQuestions }}
                </div>

                <v-btn
                  v-if="tryoutStore.currentIndex < tryoutStore.totalQuestions - 1"
                  color="primary"
                  class="text-none font-weight-bold text-white"
                  append-icon="mdi-chevron-right"
                  @click="tryoutStore.nextQuestion()"
                >
                  Selanjutnya
                </v-btn>
                <v-btn
                  v-else
                  color="accent"
                  class="text-none font-weight-bold text-white"
                  @click="confirmSubmitDialog = true"
                >
                  Selesai & Kumpulkan
                </v-btn>
              </div>
            </v-card>
          </v-col>

          <!-- Number Matrix (Right 4 cols) -->
          <v-col cols="12" md="4">
            <v-card class="pa-5 rounded-2xl border bg-white shadow-sm">
              <div class="text-subtitle-2 font-weight-bold text-secondary mb-3">
                Nomor Soal
              </div>

              <div class="grid-numbers mb-4">
                <div
                  v-for="(q, idx) in tryoutStore.questions"
                  :key="q.id"
                  class="number-cell d-flex align-center justify-center font-weight-bold cursor-pointer"
                  :class="getNumberCellClass(q.id, idx)"
                  @click="tryoutStore.goToQuestion(idx)"
                >
                  {{ idx + 1 }}
                </div>
              </div>

              <!-- Legend -->
              <div class="d-flex flex-column ga-2 text-caption pt-3 border-t">
                <div class="d-flex align-center">
                  <div class="legend-box bg-primary mr-2"></div>
                  <span>Sudah Terjawab</span>
                </div>
                <div class="d-flex align-center">
                  <div class="legend-box bg-warning mr-2"></div>
                  <span>Ragu-ragu</span>
                </div>
                <div class="d-flex align-center">
                  <div class="legend-box bg-grey-lighten-2 mr-2"></div>
                  <span>Belum Dijawab</span>
                </div>
                <div class="d-flex align-center">
                  <div class="legend-box border-2 border-primary mr-2"></div>
                  <span>Sedang Dibuka</span>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <!-- RESULTS & ANALYTICS VIEW (AFTER SUBMIT) -->
      <template v-else>
        <!-- Result Hero Score Card -->
        <v-card class="pa-8 rounded-3xl border bg-white shadow-lg text-center mb-8">
          <v-chip size="small" color="success" class="font-weight-bold mb-3">
            HASIL TRYOUT NASIONAL TELAH KELUAR
          </v-chip>
          <h2 class="text-h4 font-weight-bold text-secondary mb-2">
            Selamat, Kamu Telah Menyelesaikan Ujian!
          </h2>
          <p class="text-caption text-grey mb-6">
            Hasil dihitung menggunakan pemodelan Item Response Theory (IRT) SNPMB BPPP
          </p>

          <v-row justify="center" align="center" class="mb-6">
            <v-col cols="12" sm="4">
              <div class="score-circle-box mx-auto mb-2 d-flex flex-column align-center justify-center">
                <span class="text-h3 font-weight-extrabold text-primary font-mono">
                  {{ tryoutStore.finalResult?.totalScore }}
                </span>
                <span class="text-caption font-weight-bold text-grey">Skor IRT Skala 1000</span>
              </div>
              <v-chip :color="tryoutStore.finalResult?.totalScore >= 650 ? 'success' : 'warning'" class="font-weight-bold">
                {{ tryoutStore.finalResult?.status }}
              </v-chip>
            </v-col>

            <v-col cols="12" sm="6" class="text-left">
              <v-card variant="tonal" color="blue-lighten-5" class="pa-4 rounded-2xl mb-3">
                <div class="text-caption font-weight-bold text-primary mb-1">
                  Prediksi Rasionalisasi Kelulusan PTN:
                </div>
                <div class="text-body-2 font-weight-bold text-secondary">
                  {{ tryoutStore.finalResult?.ptnPrediction }}
                </div>
              </v-card>

              <div class="d-flex ga-4 text-body-2">
                <div>
                  <v-icon icon="mdi-check-circle" color="success" class="mr-1"></v-icon>
                  <strong>{{ tryoutStore.finalResult?.correctCount }}</strong> Benar
                </div>
                <div>
                  <v-icon icon="mdi-close-circle" color="error" class="mr-1"></v-icon>
                  <strong>{{ tryoutStore.finalResult?.wrongCount }}</strong> Salah
                </div>
                <div>
                  <v-icon icon="mdi-percent" color="primary" class="mr-1"></v-icon>
                  Akurasi: <strong>{{ tryoutStore.finalResult?.percentage }}%</strong>
                </div>
              </div>
            </v-col>
          </v-row>

          <div class="d-flex justify-center ga-3">
            <v-btn color="primary" class="text-none font-weight-bold px-6" @click="retakeExam">
              Ulangi Tryout
            </v-btn>
            <v-btn variant="outlined" color="secondary" class="text-none font-weight-bold" to="/products">
              Tingkatkan dengan Paket Belajar
            </v-btn>
          </div>
        </v-card>

        <!-- Subtest Breakdown Details -->
        <v-card class="pa-6 rounded-2xl border bg-white shadow-sm mb-8">
          <div class="text-subtitle-1 font-weight-bold text-secondary mb-4">
            Analisis Performa per Subtes
          </div>
          <v-row>
            <v-col
              v-for="sub in tryoutStore.finalResult?.subtests"
              :key="sub.name"
              cols="12"
              sm="6"
              md="3"
            >
              <v-card variant="outlined" class="pa-4 rounded-xl border">
                <div class="font-weight-bold text-body-2 text-secondary mb-2">{{ sub.name }}</div>
                <div class="d-flex justify-space-between text-caption text-grey mb-1">
                  <span>Akurasi ({{ sub.correct }}/{{ sub.total }} Soal)</span>
                  <span class="font-weight-bold">{{ sub.score }} pts</span>
                </div>
                <v-progress-linear
                  :model-value="(sub.correct / sub.total) * 100"
                  color="primary"
                  height="8"
                  rounded
                ></v-progress-linear>
              </v-card>
            </v-col>
          </v-row>
        </v-card>

        <!-- Full Detailed Solutions / Pembahasan -->
        <v-card class="pa-6 rounded-2xl border bg-white shadow-sm">
          <div class="text-subtitle-1 font-weight-bold text-secondary mb-4">
            Kunci Jawaban & Pembahasan Lengkap:
          </div>

          <div class="d-flex flex-column ga-6">
            <div
              v-for="(q, idx) in tryoutStore.questions"
              :key="q.id"
              class="border rounded-2xl pa-5 bg-grey-lighten-5"
            >
              <div class="d-flex justify-space-between align-center mb-3">
                <div class="d-flex align-center ga-2">
                  <v-avatar size="28" color="primary" class="text-white text-caption font-weight-bold">
                    {{ idx + 1 }}
                  </v-avatar>
                  <span class="font-weight-bold text-body-2 text-secondary">{{ q.subtest }}</span>
                </div>
                <div>
                  <v-chip
                    size="small"
                    :color="tryoutStore.userAnswers[q.id] === q.correctAnswer ? 'success' : 'error'"
                    class="font-weight-bold"
                  >
                    {{ tryoutStore.userAnswers[q.id] === q.correctAnswer ? 'Jawaban Benar' : 'Jawaban Salah' }}
                  </v-chip>
                </div>
              </div>

              <div class="text-body-2 text-secondary mb-3 whitespace-pre-line" style="white-space: pre-line;">
                {{ q.question }}
              </div>

              <div class="text-caption mb-3">
                Jawaban Kamu: <strong>{{ tryoutStore.userAnswers[q.id] || 'Tidak Dijawab' }}</strong> |
                Kunci Jawaban: <strong class="text-success">{{ q.correctAnswer }}</strong>
              </div>

              <!-- Pembahasan Box -->
              <v-alert
                type="info"
                variant="tonal"
                density="comfortable"
                class="rounded-xl text-caption"
                icon="mdi-lightbulb-on"
              >
                <div class="font-weight-bold mb-1">Pembahasan Tuntas:</div>
                <div class="whitespace-pre-line text-grey-darken-3 font-mono" style="white-space: pre-line; line-height: 1.6;">
                  {{ q.explanation }}
                </div>
              </v-alert>
            </div>
          </div>
        </v-card>
      </template>

      <!-- Confirmation Submit Modal -->
      <v-dialog v-model="confirmSubmitDialog" max-width="450">
        <v-card class="pa-5 rounded-2xl text-center">
          <v-icon icon="mdi-help-circle" color="warning" size="48" class="mb-3"></v-icon>
          <div class="text-h6 font-weight-bold text-secondary mb-1">
            Kumpulkan Jawaban Sekarang?
          </div>
          <p class="text-caption text-grey mb-4">
            Kamu sudah menjawab {{ tryoutStore.answeredCount }} dari {{ tryoutStore.totalQuestions }} soal.
            Ujian tidak dapat diulang kembali setelah dikumpulkan.
          </p>
          <div class="d-flex justify-center ga-2">
            <v-btn variant="text" class="text-none" @click="confirmSubmitDialog = false">
              Lanjut Mengerjakan
            </v-btn>
            <v-btn color="error" class="text-none font-weight-bold text-white px-6" @click="handleConfirmSubmit">
              Ya, Kumpulkan
            </v-btn>
          </div>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTryoutStore } from '../stores/tryout'
import { tryoutsList } from '../data/tryoutData'

const tryoutStore = useTryoutStore()
const confirmSubmitDialog = ref(false)

// If direct load without starting
if (!tryoutStore.isExamRunning && !tryoutStore.isExamSubmitted) {
  tryoutStore.startExam(tryoutsList[0])
}

const currentQ = computed(() => tryoutStore.currentQuestion)
const currentSelectedAnswer = computed(() => tryoutStore.userAnswers[currentQ.value?.id])
const isCurrentFlagged = computed(() => !!tryoutStore.flagged[currentQ.value?.id])

function getNumberCellClass(qId, index) {
  const isCurrent = tryoutStore.currentIndex === index
  const isAnswered = !!tryoutStore.userAnswers[qId]
  const isFlag = !!tryoutStore.flagged[qId]

  if (isCurrent) return 'border-2 border-primary bg-blue-lighten-5'
  if (isFlag) return 'bg-warning text-white'
  if (isAnswered) return 'bg-primary text-white'
  return 'bg-grey-lighten-2 text-secondary'
}

function handleConfirmSubmit() {
  confirmSubmitDialog.value = false
  tryoutStore.submitExam()
}

function retakeExam() {
  tryoutStore.startExam(tryoutsList[0])
}
</script>

<style scoped>
.font-mono {
  font-family: ui-monospace, monospace;
}

.sticky-exam-bar {
  position: sticky;
  top: 76px;
  z-index: 10;
}

.grid-numbers {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
}

.number-cell {
  height: 40px;
  border-radius: 8px;
  font-size: 0.85rem;
  transition: all 0.2s;
}

.number-cell:hover {
  transform: scale(1.05);
}

.legend-box {
  width: 14px;
  height: 14px;
  border-radius: 3px;
}

.option-badge {
  width: 32px;
  height: 32px;
  border-radius: 8px;
}

.score-circle-box {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: #F0F9FF;
  border: 4px solid #00A5CF;
}
</style>
