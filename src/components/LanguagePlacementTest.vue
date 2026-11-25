<template>
  <v-card class="rounded-3xl border bg-white shadow-md pa-6">
    <div class="d-flex flex-wrap align-center justify-space-between mb-4">
      <div class="d-flex align-center">
        <v-avatar color="primary" size="44" class="text-white mr-3">
          <v-icon icon="mdi-clipboard-check-outline" size="24"></v-icon>
        </v-avatar>
        <div>
          <div class="text-h6 font-weight-bold text-secondary">
            Tes Level Bahasa Singkat (Gratis)
          </div>
          <div class="text-caption text-grey">
            Cari tahu kemampuan bahasamu dalam 2 menit untuk penempatan kelas yang tepat
          </div>
        </div>
      </div>
      <v-chip size="small" color="accent" class="font-weight-bold" label>
        3 SOAL CEPAT
      </v-chip>
    </div>

    <!-- Step 1: Language Selection -->
    <div v-if="testStep === 'select'" class="text-center py-4">
      <div class="text-subtitle-2 font-weight-bold text-secondary mb-3">
        Pilih Bahasa yang Ingin Kamu Tes:
      </div>
      <v-row justify="center">
        <v-col cols="12" sm="4" v-for="lang in availableLangs" :key="lang.id">
          <v-card
            variant="outlined"
            class="pa-4 rounded-2xl cursor-pointer text-center h-100 lang-card transition-all"
            :class="{ 'border-primary bg-blue-lighten-5': selectedLang === lang.id }"
            @click="selectedLang = lang.id"
          >
            <div class="text-h4 mb-2">{{ lang.flag }}</div>
            <div class="font-weight-bold text-body-1 text-secondary">{{ lang.name }}</div>
            <div class="text-caption text-grey">{{ lang.standard }}</div>
          </v-card>
        </v-col>
      </v-row>

      <v-btn
        color="primary"
        size="large"
        class="mt-6 px-8 text-none font-weight-bold text-white shadow-sm"
        append-icon="mdi-arrow-right"
        @click="startQuiz"
      >
        Mulai Tes Sekarang
      </v-btn>
    </div>

    <!-- Step 2: Answering Questions -->
    <div v-else-if="testStep === 'quiz'" class="py-2">
      <!-- Progress and Language indicator -->
      <div class="d-flex justify-space-between align-center mb-3">
        <v-chip size="small" color="primary" variant="flat" class="font-weight-bold">
          {{ currentLangObj.flag }} {{ currentLangObj.name }}
        </v-chip>
        <span class="text-caption font-weight-bold text-grey">
          Pertanyaan {{ currentQIndex + 1 }} dari {{ currentQuestions.length }}
        </span>
      </div>

      <v-progress-linear
        :model-value="((currentQIndex + 1) / currentQuestions.length) * 100"
        color="primary"
        height="6"
        rounded
        class="mb-4"
      ></v-progress-linear>

      <!-- Question Card -->
      <v-card variant="tonal" color="grey-lighten-4" class="pa-4 rounded-2xl mb-4">
        <div class="text-body-1 font-weight-bold text-secondary mb-3">
          {{ currentQ.question }}
        </div>

        <div class="d-flex flex-column ga-2">
          <div
            v-for="opt in currentQ.options"
            :key="opt.key"
            class="pa-3 rounded-xl border bg-white cursor-pointer d-flex align-center option-choice"
            :class="{ 'border-primary bg-blue-lighten-5 font-weight-bold': selectedAnswer === opt.key }"
            @click="selectedAnswer = opt.key"
          >
            <v-avatar
              size="28"
              :color="selectedAnswer === opt.key ? 'primary' : 'grey-lighten-3'"
              class="text-caption font-weight-bold mr-3"
              :class="selectedAnswer === opt.key ? 'text-white' : 'text-secondary'"
            >
              {{ opt.key }}
            </v-avatar>
            <div class="text-body-2 text-secondary flex-grow-1">
              {{ opt.text }}
            </div>
          </div>
        </div>
      </v-card>

      <!-- Navigation button -->
      <div class="d-flex justify-end">
        <v-btn
          color="primary"
          class="text-none font-weight-bold text-white px-6"
          :disabled="!selectedAnswer"
          @click="submitCurrentAnswer"
        >
          {{ currentQIndex < currentQuestions.length - 1 ? 'Lanjut ke Soal Berikutnya' : 'Lihat Rekomendasi Level' }}
        </v-btn>
      </div>
    </div>

    <!-- Step 3: Result & Recommendation -->
    <div v-else-if="testStep === 'result'" class="text-center py-6">
      <v-avatar color="success" size="64" class="mb-3 text-white">
        <v-icon icon="mdi-trophy-outline" size="36"></v-icon>
      </v-avatar>

      <div class="text-h5 font-weight-bold text-secondary mb-1">
        Hasil Tes Kemampuan: {{ scoreResult.correctCount }} / {{ currentQuestions.length }} Benar
      </div>
      <p class="text-caption text-grey mb-4">
        Berdasarkan jawabanmu pada tes bahasa {{ currentLangObj.name }}, berikut rekomendasi kelas terbaik untukmu:
      </p>

      <v-card class="pa-5 rounded-2xl border bg-blue-lighten-5 text-left mb-6 mx-auto max-width-md">
        <div class="d-flex align-center justify-space-between mb-2">
          <v-chip size="small" color="primary" class="font-weight-bold">
            REKOMENDASI LEVEL KELAS
          </v-chip>
          <span class="text-caption font-weight-bold text-teal">Siap Daftar Batch Terdekat</span>
        </div>
        <div class="text-h6 font-weight-bold text-secondary mb-1">
          {{ scoreResult.recommendedCourse.title }}
        </div>
        <p class="text-body-2 text-grey-darken-2 mb-3">
          {{ scoreResult.recommendedCourse.summary }}
        </p>
        <div class="d-flex align-center justify-space-between text-caption">
          <span class="text-grey"><v-icon icon="mdi-clock-outline" size="small" class="mr-1"></v-icon>{{ scoreResult.recommendedCourse.duration }}</span>
          <span class="font-weight-bold text-primary text-body-1">{{ formatRupiah(scoreResult.recommendedCourse.price) }}</span>
        </div>
      </v-card>

      <div class="d-flex flex-wrap justify-center ga-3">
        <v-btn
          color="accent"
          size="large"
          class="text-none font-weight-bold text-white px-6 shadow-md"
          @click="enrollRecommended"
        >
          Daftar Kelas Rekomendasi Ini
        </v-btn>
        <v-btn
          variant="outlined"
          color="secondary"
          class="text-none font-weight-bold"
          @click="resetQuiz"
        >
          Tes Bahasa Lain
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { languages, placementTests, programs } from '../data/wordishData'
import { useCartStore } from '../stores/cart'

const router = useRouter()
const cartStore = useCartStore()

const availableLangs = languages
const selectedLang = ref('korean')
const testStep = ref('select') // 'select' | 'quiz' | 'result'
const currentQIndex = ref(0)
const selectedAnswer = ref(null)
const userAnswers = ref([])

const currentLangObj = computed(() => languages.find(l => l.id === selectedLang.value) || languages[0])
const currentQuestions = computed(() => placementTests[selectedLang.value] || [])
const currentQ = computed(() => currentQuestions.value[currentQIndex.value] || {})

function startQuiz() {
  currentQIndex.value = 0
  userAnswers.value = []
  selectedAnswer.value = null
  testStep.value = 'quiz'
}

function submitCurrentAnswer() {
  userAnswers.value.push(selectedAnswer.value)
  selectedAnswer.value = null

  if (currentQIndex.value < currentQuestions.value.length - 1) {
    currentQIndex.value++
  } else {
    testStep.value = 'result'
  }
}

const scoreResult = computed(() => {
  let correct = 0
  currentQuestions.value.forEach((q, idx) => {
    if (userAnswers.value[idx] === q.correct) correct++
  })

  // Match recommended program based on language and score
  const langPrograms = programs.filter(p => p.languageId === selectedLang.value)
  const recommendedCourse = correct >= 2 && langPrograms.length > 1
    ? langPrograms[1]
    : langPrograms[0]

  return {
    correctCount: correct,
    recommendedCourse
  }
})

function enrollRecommended() {
  cartStore.addToCart(scoreResult.value.recommendedCourse)
  router.push('/checkout')
}

function resetQuiz() {
  testStep.value = 'select'
  selectedAnswer.value = null
  userAnswers.value = []
  currentQIndex.value = 0
}

function formatRupiah(val) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(val || 0)
}
</script>

<style scoped>
.lang-card:hover {
  border-color: #00A5CF !important;
  transform: translateY(-2px);
}

.option-choice:hover {
  border-color: #00A5CF !important;
}
</style>
