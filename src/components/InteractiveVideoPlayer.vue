<template>
  <v-card class="rounded-2xl border overflow-hidden shadow-lg bg-white">
    <!-- Video Canvas Screen Header & Controls -->
    <div class="video-mock-container bg-slate-900 position-relative">
      <!-- Simulated Video Area -->
      <div class="video-screen d-flex flex-column align-center justify-center text-white pa-6 text-center">
        <!-- Interactive Master Teacher Overlay -->
        <div class="video-overlay position-absolute w-100 h-100 d-flex flex-column justify-space-between pa-4">
          <!-- Top Bar in Player -->
          <div class="d-flex justify-space-between align-center">
            <div class="d-flex align-center">
              <v-chip size="small" color="error" class="font-weight-bold mr-2" label>
                <v-icon start icon="mdi-play-box"></v-icon>
                Adapto Pintar
              </v-chip>
              <span class="text-caption font-weight-bold text-shadow">
                {{ activeLesson.chapterTitle }}
              </span>
            </div>
            <v-chip size="small" variant="flat" color="rgba(0,0,0,0.6)" class="text-caption">
              1080p HD • Kurikulum Merdeka
            </v-chip>
          </div>

          <!-- Center Play / Pause Big Button -->
          <div class="d-flex align-center justify-center">
            <v-btn
              icon
              size="x-large"
              color="primary"
              elevation="6"
              class="play-circle-btn"
              @click="togglePlay"
            >
              <v-icon size="42" color="white" :icon="isPlaying ? 'mdi-pause' : 'mdi-play'"></v-icon>
            </v-btn>
          </div>

          <!-- Bottom Control Bar -->
          <div class="player-controls-bar rounded-lg pa-2">
            <!-- Progress scrubber -->
            <v-progress-linear
              v-model="playbackProgress"
              color="accent"
              height="6"
              rounded
              class="mb-2 cursor-pointer"
            ></v-progress-linear>

            <div class="d-flex justify-space-between align-center text-caption">
              <div class="d-flex align-center ga-3">
                <v-btn icon size="x-small" variant="text" color="white" @click="togglePlay">
                  <v-icon :icon="isPlaying ? 'mdi-pause' : 'mdi-play'"></v-icon>
                </v-btn>
                <v-btn icon size="x-small" variant="text" color="white" @click="restartVideo">
                  <v-icon icon="mdi-replay"></v-icon>
                </v-btn>
                <span>{{ formatTime(currentTime) }} / {{ formatTime(totalDuration) }}</span>
              </div>

              <div class="d-flex align-center ga-2">
                <!-- Speed Toggle -->
                <v-btn
                  size="x-small"
                  variant="tonal"
                  color="white"
                  class="font-weight-bold"
                  @click="cycleSpeed"
                >
                  {{ playbackSpeed }}x
                </v-btn>
                <v-btn icon size="x-small" variant="text" color="white">
                  <v-icon icon="mdi-volume-high"></v-icon>
                </v-btn>
                <v-btn icon size="x-small" variant="text" color="white" @click="showQuizDialog = true">
                  <v-icon icon="mdi-help-box"></v-icon>
                </v-btn>
              </div>
            </div>
          </div>
        </div>

        <!-- Animation Illustration / Background Graphic -->
        <div class="video-graphic-bg">
          <v-icon icon="mdi-movie-open-play-outline" size="96" color="cyan-lighten-4" class="opacity-20 mb-2"></v-icon>
          <div class="text-h6 font-weight-bold text-white text-shadow">
            {{ activeLesson.title }}
          </div>
          <div class="text-caption text-grey-lighten-2 text-shadow">
            Bersama Master Teacher: {{ activeLesson.teacher }} (Lulusan {{ activeLesson.teacherUni }})
          </div>
        </div>
      </div>
    </div>

    <!-- Lesson Navigation Tabs / Chapters -->
    <v-card-text class="pa-4">
      <v-row>
        <!-- Chapter Selector Left -->
        <v-col cols="12" md="7">
          <div class="text-subtitle-2 font-weight-bold text-secondary mb-3 d-flex align-center">
            <v-icon icon="mdi-format-list-bulleted" color="primary" class="mr-2"></v-icon>
            Daftar Subtopik & Video Bab Ini:
          </div>
          <v-list density="compact" class="pa-0 border rounded-xl">
            <v-list-item
              v-for="(chap, idx) in chapters"
              :key="chap.id"
              :class="{ 'bg-blue-lighten-5': activeChapterIndex === idx }"
              class="cursor-pointer py-2"
              @click="selectChapter(idx)"
            >
              <template #prepend>
                <v-avatar
                  size="28"
                  :color="activeChapterIndex === idx ? 'primary' : 'grey-lighten-3'"
                  class="text-caption font-weight-bold mr-2"
                  :class="activeChapterIndex === idx ? 'text-white' : 'text-secondary'"
                >
                  {{ idx + 1 }}
                </v-avatar>
              </template>
              <v-list-item-title class="font-weight-bold text-body-2 text-secondary">
                {{ chap.title }}
              </v-list-item-title>
              <v-list-item-subtitle class="text-caption text-grey">
                {{ chap.duration }} • {{ chap.type }}
              </v-list-item-subtitle>
              <template #append>
                <v-icon
                  :icon="chap.completed ? 'mdi-check-circle' : 'mdi-play-circle-outline'"
                  :color="chap.completed ? 'success' : 'primary'"
                  size="20"
                ></v-icon>
              </template>
            </v-list-item>
          </v-list>
        </v-col>

        <!-- Summary & Download Notes Right -->
        <v-col cols="12" md="5">
          <div class="bg-grey-lighten-5 rounded-xl pa-4 border h-100 d-flex flex-column justify-space-between">
            <div>
              <div class="text-subtitle-2 font-weight-bold text-secondary mb-2 d-flex align-center">
                <v-icon icon="mdi-file-document-outline" color="accent" class="mr-2"></v-icon>
                Rangkuman Infografis
              </div>
              <p class="text-caption text-grey-darken-1 mb-3" style="line-height: 1.5;">
                Catatan visual warna-warni memuat rumus kilat, mind map konsep, dan trik eliminasi soal HOTS bab ini.
              </p>
              <v-chip size="small" color="primary" variant="outlined" class="mb-3 font-weight-bold">
                <v-icon start icon="mdi-file-pdf-box" color="error"></v-icon>
                Rangkuman_Turunan_SMA12.pdf (1.8 MB)
              </v-chip>
            </div>

            <div class="d-flex flex-column ga-2">
              <v-btn
                color="primary"
                variant="flat"
                class="text-none font-weight-bold"
                prepend-icon="mdi-download"
                @click="downloadSummaryAlert"
              >
                Unduh Catatan PDF
              </v-btn>
              <v-btn
                variant="outlined"
                color="secondary"
                class="text-none text-caption"
                prepend-icon="mdi-pencil-box-outline"
                @click="showQuizDialog = true"
              >
                Coba Kuis Pemahaman
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card-text>

    <!-- Quiz Checkpoint Dialog -->
    <v-dialog v-model="showQuizDialog" max-width="500">
      <v-card class="pa-5 rounded-2xl">
        <div class="d-flex align-center justify-space-between mb-3">
          <div class="d-flex align-center">
            <v-icon icon="mdi-help-rhombus" color="accent" class="mr-2"></v-icon>
            <span class="font-weight-bold text-subtitle-1 text-secondary">Kuis Cek Pemahaman Bab</span>
          </div>
          <v-btn icon size="x-small" variant="text" @click="showQuizDialog = false">
            <v-icon icon="mdi-close"></v-icon>
          </v-btn>
        </div>

        <p class="text-body-2 font-weight-bold text-secondary mb-3">
          Turunan pertama dari f(x) = 5x⁴ - 3x² + 7 adalah...
        </p>

        <v-radio-group v-model="selectedQuizOption" class="mb-2">
          <v-radio label="A. 20x³ - 6x" value="A"></v-radio>
          <v-radio label="B. 20x³ - 6x + 7" value="B"></v-radio>
          <v-radio label="C. 5x³ - 3x" value="C"></v-radio>
          <v-radio label="D. 20x⁴ - 6x²" value="D"></v-radio>
        </v-radio-group>

        <div v-if="quizSubmitted" class="mb-3">
          <v-alert
            v-if="selectedQuizOption === 'A'"
            type="success"
            variant="tonal"
            density="compact"
          >
            <strong>Hebat, Jawaban Benar!</strong> Rumus d/dx(axⁿ) = n·axⁿ⁻¹ dan turunan konstanta adalah 0.
          </v-alert>
          <v-alert
            v-else
            type="error"
            variant="tonal"
            density="compact"
          >
            <strong>Belum tepat!</strong> Jawaban yang benar adalah <strong>A (20x³ - 6x)</strong>.
          </v-alert>
        </div>

        <div class="d-flex justify-end ga-2">
          <v-btn variant="text" class="text-none" @click="showQuizDialog = false">Tutup</v-btn>
          <v-btn color="primary" class="text-none font-weight-bold" @click="submitQuiz">
            Cek Jawaban
          </v-btn>
        </div>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="snackbar" :timeout="3000" color="success">
      <v-icon icon="mdi-check" class="mr-2"></v-icon>
      Rangkuman PDF berhasil diunduh ke perangkatmu!
    </v-snackbar>
  </v-card>
</template>

<script setup>
import { ref, reactive, onUnmounted } from 'vue'

const isPlaying = ref(false)
const playbackProgress = ref(25)
const playbackSpeed = ref(1.0)
const currentTime = ref(92)
const totalDuration = ref(380)
const showQuizDialog = ref(false)
const selectedQuizOption = ref('A')
const quizSubmitted = ref(false)
const snackbar = ref(false)
let timer = null

const activeChapterIndex = ref(0)

const activeLesson = reactive({
  title: 'Konsep Dasar & Aturan Rantai Turunan Fungsi Aljabar',
  chapterTitle: 'Bab 1: Diferensial & Aturan Rantai',
  teacher: 'Kak Farhan, M.Si.',
  teacherUni: 'Matematika ITB'
})

const chapters = [
  { id: 1, title: 'Definisi Limit Turunan & Makna Geometris', duration: '05:40', type: 'Video Animasi', completed: true },
  { id: 2, title: 'Aturan Pangkat, Penjumlahan & Pengurangan', duration: '08:15', type: 'Video Animasi', completed: true },
  { id: 3, title: 'Aturan Perkalian & Pembagian U/V', duration: '09:20', type: 'Latihan Soal', completed: false },
  { id: 4, title: 'Aturan Rantai Fungsi Komposisi Berpangkat', duration: '11:05', type: 'Bedah HOTS', completed: false },
  { id: 5, title: 'Aplikasi Turunan: Gradien Garis Singgung & Nilai Optimum', duration: '14:30', type: 'Review Bab', completed: false }
]

function togglePlay() {
  isPlaying.value = !isPlaying.value
  if (isPlaying.value) {
    timer = setInterval(() => {
      if (currentTime.value < totalDuration.value) {
        currentTime.value += 1
        playbackProgress.value = (currentTime.value / totalDuration.value) * 100
      } else {
        isPlaying.value = false
        clearInterval(timer)
      }
    }, 1000 / playbackSpeed.value)
  } else {
    clearInterval(timer)
  }
}

function restartVideo() {
  currentTime.value = 0
  playbackProgress.value = 0
}

function cycleSpeed() {
  const speeds = [1.0, 1.25, 1.5, 2.0]
  const currentIdx = speeds.indexOf(playbackSpeed.value)
  playbackSpeed.value = speeds[(currentIdx + 1) % speeds.length]
}

function selectChapter(idx) {
  activeChapterIndex.value = idx
  activeLesson.title = chapters[idx].title
  activeLesson.chapterTitle = `Subtopik ${idx + 1}: ${chapters[idx].title}`
  restartVideo()
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

function submitQuiz() {
  quizSubmitted.value = true
}

function downloadSummaryAlert() {
  snackbar.value = true
}

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
.video-mock-container {
  background: radial-gradient(circle at 50% 50%, #0F172A 0%, #020617 100%);
  min-height: 340px;
}

.video-screen {
  min-height: 340px;
  position: relative;
}

.player-controls-bar {
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(8px);
}

.play-circle-btn {
  width: 68px;
  height: 68px;
  background: linear-gradient(135deg, #00A5CF 0%, #0077B6 100%) !important;
  transition: transform 0.2s;
}

.play-circle-btn:hover {
  transform: scale(1.1);
}

.text-shadow {
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
}
</style>
