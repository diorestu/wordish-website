<template>
  <v-card class="rounded-2xl border pa-6 bg-white shadow-md">
    <!-- Header Badge -->
    <div class="d-flex align-center justify-space-between mb-4">
      <div class="d-flex align-center">
        <div class="roboguru-icon-box mr-3 d-flex align-center justify-center">
          <v-icon icon="mdi-robot" color="white" size="24"></v-icon>
        </div>
        <div>
          <div class="text-h6 font-weight-bold text-secondary d-flex align-center">
            Roboguru AI Solver
            <v-chip size="x-small" color="accent" class="ml-2 font-weight-bold" label>
              GRATIS & CEPAT
            </v-chip>
          </div>
          <div class="text-caption text-grey">
            Ketik pertanyaan atau klik contoh soal di bawah untuk melihat solusi step-by-step
          </div>
        </div>
      </div>
      <v-chip size="small" variant="tonal" color="primary" class="d-none d-sm-flex">
        <v-icon icon="mdi-check-decagram" size="small" class="mr-1"></v-icon>
        Terverifikasi Master Teacher
      </v-chip>
    </div>

    <!-- Quick Question Preset Chips -->
    <div class="mb-3">
      <div class="text-caption font-weight-bold text-grey-darken-1 mb-2">Contoh Soal Cepat:</div>
      <div class="d-flex flex-wrap ga-2">
        <v-chip
          v-for="sample in sampleQuestions"
          :key="sample.id"
          size="small"
          variant="outlined"
          color="primary"
          class="font-weight-medium cursor-pointer"
          @click="loadSample(sample)"
        >
          <v-icon start icon="mdi-help-circle-outline"></v-icon>
          {{ sample.subject }}: {{ sample.topic }}
        </v-chip>
      </div>
    </div>

    <!-- Question Input Box -->
    <div class="mb-4">
      <v-textarea
        v-model="questionInput"
        placeholder="Ketik soal matematika, fisika, kimia, atau biologi yang ingin kamu tanyakan..."
        rows="3"
        variant="outlined"
        rounded="xl"
        density="comfortable"
        bg-color="grey-lighten-5"
        hide-details
      ></v-textarea>
    </div>

    <!-- Action Buttons -->
    <div class="d-flex flex-wrap justify-space-between align-center ga-3 mb-4">
      <div class="d-flex align-center ga-2">
        <v-btn variant="outlined" size="small" prepend-icon="mdi-camera" class="text-none">
          Foto Soal (Simulasi)
        </v-btn>
        <v-btn variant="text" size="small" color="grey" class="text-none" @click="clearQuestion">
          Reset
        </v-btn>
      </div>

      <v-btn
        color="accent"
        size="large"
        class="text-none font-weight-bold text-white px-6 shadow-md"
        prepend-icon="mdi-magic-staff"
        :loading="isSolving"
        @click="solveQuestion"
      >
        Tanya Roboguru Sekarang
      </v-btn>
    </div>

    <!-- Solving Animation Progress -->
    <v-card v-if="isSolving" variant="tonal" color="primary" class="pa-6 rounded-xl text-center mb-4">
      <v-progress-circular indeterminate color="primary" size="48" width="4" class="mb-3"></v-progress-circular>
      <div class="text-subtitle-2 font-weight-bold text-primary mb-1">
        {{ solvingStatusText }}
      </div>
      <div class="text-caption text-grey">
        Mencocokkan konsep fisika/matematika & menyusun rumus langkah demi langkah...
      </div>
    </v-card>

    <!-- Active Solution Display -->
    <v-expand-transition>
      <div v-if="activeSolution && !isSolving" class="solution-container border rounded-2xl pa-5 bg-grey-lighten-5">
        <!-- Solution Header -->
        <div class="d-flex flex-wrap align-center justify-space-between pb-3 border-b mb-4">
          <div class="d-flex align-center ga-2">
            <v-chip size="small" color="primary" variant="flat" class="font-weight-bold">
              {{ activeSolution.subject }}
            </v-chip>
            <v-chip size="small" variant="tonal">
              {{ activeSolution.grade }}
            </v-chip>
            <span class="text-caption font-weight-bold text-secondary">
              {{ activeSolution.topic }}
            </span>
          </div>
          <span class="text-caption text-teal font-weight-bold d-flex align-center">
            <v-icon icon="mdi-check-circle" size="small" class="mr-1"></v-icon>
            Solusi Akurat 100%
          </span>
        </div>

        <!-- Formula Highlight Callout -->
        <div class="bg-blue-lighten-5 border-l-4 border-primary pa-3 rounded-r-lg mb-4">
          <div class="text-caption font-weight-bold text-primary text-uppercase mb-1">
            <v-icon icon="mdi-lightbulb-on" size="small" class="mr-1"></v-icon>
            Konsep & Rumus Kunci:
          </div>
          <div class="font-weight-bold text-body-2 text-secondary font-mono">
            {{ activeSolution.formulaHighlight }}
          </div>
        </div>

        <!-- Step-by-Step Breakdown -->
        <div class="mb-4">
          <div class="text-subtitle-2 font-weight-bold text-secondary mb-3">
            Langkah-Langkah Pengerjaan:
          </div>
          <div class="d-flex flex-column ga-3">
            <div
              v-for="step in activeSolution.steps"
              :key="step.stepNum"
              class="step-card bg-white pa-3 rounded-xl border d-flex ga-3"
            >
              <div class="step-badge d-flex align-center justify-center font-weight-bold text-caption text-white bg-primary">
                {{ step.stepNum }}
              </div>
              <div class="flex-grow-1">
                <div class="font-weight-bold text-body-2 text-secondary mb-1">
                  {{ step.title }}
                </div>
                <div class="text-body-2 text-grey-darken-2 whitespace-pre-line font-mono" style="line-height: 1.5; white-space: pre-line;">
                  {{ step.detail }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Final Answer Box -->
        <v-alert
          type="success"
          variant="tonal"
          class="mb-3 rounded-xl"
          icon="mdi-check-decagram"
        >
          <div class="text-subtitle-2 font-weight-bold text-teal-darken-3">
            Jawaban Akhir:
          </div>
          <div class="font-weight-bold text-body-1 text-teal-darken-4">
            {{ activeSolution.finalAnswer }}
          </div>
        </v-alert>

        <!-- Master Teacher Quick Tip -->
        <div v-if="activeSolution.proTip" class="text-caption text-grey-darken-2 bg-amber-lighten-5 border pa-3 rounded-lg d-flex align-start ga-2">
          <v-icon icon="mdi-star" color="amber-darken-3" size="small" class="mt-1"></v-icon>
          <div>
            <strong>Tips Kilat Master Teacher:</strong> {{ activeSolution.proTip }}
          </div>
        </div>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { sampleQuestions } from '../data/roboguruData'

const questionInput = ref(sampleQuestions[0].questionText)
const activeSolution = ref(sampleQuestions[0])
const isSolving = ref(false)
const solvingStatusText = ref('AI Roboguru menganalisis...')

function loadSample(sample) {
  questionInput.value = sample.questionText
  activeSolution.value = sample
}

function clearQuestion() {
  questionInput.value = ''
  activeSolution.value = null
}

function solveQuestion() {
  if (!questionInput.value.trim()) return

  isSolving.value = true
  solvingStatusText.value = 'AI Roboguru mendeteksi materi & persamaan...'

  setTimeout(() => {
    solvingStatusText.value = 'Menghitung nilai variabel & merangkum pembahasan...'
  }, 600)

  setTimeout(() => {
    // If input matches one of our samples or custom fallback
    const matched = sampleQuestions.find(s => questionInput.value.toLowerCase().includes(s.subject.toLowerCase()))
    activeSolution.value = matched || {
      subject: 'Matematika & Logika',
      grade: 'SMA & UTBK',
      topic: 'Pembahasan Analitis',
      formulaHighlight: 'f(x) = ax + b | Eliminasi & Substitusi Cepat',
      steps: [
        {
          stepNum: 1,
          title: 'Identifikasi variabel yang diketahui dan ditanyakan',
          detail: 'Berdasarkan pernyataan soal: ' + questionInput.value.substring(0, 80) + '...'
        },
        {
          stepNum: 2,
          title: 'Terapkan formula standar materi terkait',
          detail: 'Gunakan metode eliminasi sistematis untuk menyederhanakan perhitungan aljabar.'
        },
        {
          stepNum: 3,
          title: 'Hitung hasil akhir',
          detail: 'Hasil kalkulasi memberikan nilai yang memenuhi batas kondisi yang disyaratkan soal.'
        }
      ],
      finalAnswer: 'Solusi optimal telah terbukti secara analitik.',
      proTip: 'Selalu verifikasi kembali satuan dan nilai variabel ke persamaan awal.'
    }
    isSolving.value = false
  }, 1200)
}
</script>

<style scoped>
.roboguru-icon-box {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #FF9E00 0%, #FFB703 100%);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(255, 158, 0, 0.3);
}

.step-badge {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  flex-shrink: 0;
}

.font-mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}
</style>
