<template>
  <div class="py-10 bg-grey-lighten-5 min-vh-100">
    <v-container class="max-width-xl px-4 px-sm-6">
      <!-- Breadcrumb & Header -->
      <div class="mb-8">
        <v-breadcrumbs
          :items="[
            { title: 'Beranda', disabled: false, href: '/' },
            { title: 'E-Learning Wordish', disabled: true }
          ]"
          class="pa-0 mb-2 text-caption"
        ></v-breadcrumbs>
        <h1 class="text-h4 font-weight-bold text-secondary mb-2">
          Portal E-Learning Pembelajaran Mandiri
        </h1>
        <p class="text-body-1 text-grey-darken-1 max-width-md">
          Akses materi video interaktif, audio listening, dan kuis pemahaman mandiri untuk <strong>Bahasa Mandarin</strong>, <strong>Bahasa Korea (EPS-TOPIK)</strong>, dan <strong>Bahasa Inggris</strong>.
        </p>
      </div>

      <!-- Language Filter Tabs -->
      <v-card class="pa-4 rounded-2xl border bg-white shadow-sm mb-8">
        <div class="d-flex flex-wrap justify-space-between align-center ga-3">
          <div class="font-weight-bold text-secondary text-body-1">
            Pilih Modul Bahasa E-Learning:
          </div>
          <v-btn-toggle
            v-model="selectedLang"
            color="primary"
            mandatory
            rounded="xl"
            class="shadow-sm"
          >
            <v-btn value="mandarin" class="text-none font-weight-bold px-4">Mandarin</v-btn>
            <v-btn value="korean" class="text-none font-weight-bold px-4">Korea</v-btn>
            <v-btn value="english" class="text-none font-weight-bold px-4">Inggris</v-btn>
          </v-btn-toggle>
        </div>
      </v-card>

      <!-- Main E-Learning Video Player & Syllabus Layout -->
      <v-row class="mb-8">
        <!-- Video Player Column (8 cols) -->
        <v-col cols="12" lg="8">
          <v-card class="rounded-3xl border overflow-hidden shadow-md bg-white">
            <!-- Simulated Video Player Canvas -->
            <div class="video-container bg-slate-900 position-relative text-white pa-6 d-flex flex-column justify-space-between">
              <!-- Top bar in video -->
              <div class="d-flex justify-space-between align-center">
                <span class="text-caption font-weight-bold">
                  {{ activeModule.title }}
                </span>
                <span class="text-caption text-grey-lighten-2">HD 1080p • E-Learning Resmi Wordish</span>
              </div>

              <!-- Center Play / Pause Icon -->
              <div class="text-center py-10">
                <v-btn
                  icon
                  size="x-large"
                  color="accent"
                  class="play-btn shadow-lg"
                  @click="togglePlay"
                >
                  <v-icon size="40" color="white" :icon="isPlaying ? 'mdi-pause' : 'mdi-play'"></v-icon>
                </v-btn>
                <div class="text-body-1 font-weight-bold mt-4 text-white">
                  {{ currentLesson.title }}
                </div>
                <div class="text-caption text-grey-lighten-2">
                  Instruktur: {{ activeModule.instructor }}
                </div>
              </div>

              <!-- Bottom Scrub Bar -->
              <div>
                <v-progress-linear
                  v-model="playbackProgress"
                  color="accent"
                  height="6"
                  rounded
                  class="mb-2"
                ></v-progress-linear>
                <div class="d-flex justify-space-between align-center text-caption">
                  <div class="d-flex align-center ga-2">
                    <v-btn icon size="x-small" variant="text" color="white" @click="togglePlay">
                      <v-icon :icon="isPlaying ? 'mdi-pause' : 'mdi-play'"></v-icon>
                    </v-btn>
                    <span>{{ formatTime(currentTime) }} / {{ currentLesson.duration }}</span>
                  </div>
                  <div class="d-flex align-center ga-2">
                    <v-btn size="x-small" variant="tonal" color="white" @click="cycleSpeed">
                      {{ playbackSpeed }}x
                    </v-btn>
                    <v-btn icon size="x-small" variant="text" color="white">
                      <v-icon icon="mdi-volume-high"></v-icon>
                    </v-btn>
                  </div>
                </div>
              </div>
            </div>

            <!-- Video Information & Download Summary -->
            <div class="pa-5">
              <div class="d-flex flex-wrap justify-space-between align-center mb-3">
                <div>
                  <div class="text-h6 font-weight-bold text-secondary mb-1">
                    {{ currentLesson.title }}
                  </div>
                  <div class="text-caption text-grey">
                    Modul Pelatihan Resmi LPK Wordish • {{ activeModule.totalDuration }}
                  </div>
                </div>

                <v-btn
                  color="primary"
                  variant="outlined"
                  class="text-none font-weight-bold mt-2 mt-sm-0"
                  prepend-icon="mdi-file-pdf-box"
                  @click="downloadNote"
                >
                  Unduh Rangkuman PDF
                </v-btn>
              </div>

              <v-divider class="my-4"></v-divider>

              <div class="text-body-2 text-grey-darken-2">
                <strong>Catatan Pelajaran:</strong> Video ini membahas konsep penting, pola kalimat percakapan dasar, dan tips pelafalan yang benar. Siswa disarankan mengulang latihan vokal dan rekaman audio untuk melatih pendengaran.
              </div>
            </div>
          </v-card>
        </v-col>

        <!-- Syllabus / Lesson List Column (4 cols) -->
        <v-col cols="12" lg="4">
          <v-card class="pa-5 rounded-3xl border bg-white shadow-sm h-100 d-flex flex-column justify-space-between">
            <div>
              <div class="text-subtitle-1 font-weight-bold text-secondary mb-2">
                Daftar Video Pelajaran
              </div>
              <div class="text-caption text-grey mb-4">
                {{ activeModule.totalVideos }} • {{ activeModule.totalDuration }}
              </div>

              <!-- Lesson list -->
              <div class="d-flex flex-column ga-2">
                <v-card
                  v-for="(les, idx) in activeModule.lessons"
                  :key="les.id"
                  variant="outlined"
                  class="pa-3 rounded-xl cursor-pointer transition-all lesson-item"
                  :class="{ 'border-primary bg-blue-lighten-5': currentLesson.id === les.id }"
                  @click="selectLesson(les)"
                >
                  <div class="d-flex align-center justify-space-between">
                    <div class="d-flex align-center mr-2">
                      <v-icon
                        :icon="les.free ? 'mdi-play-circle' : 'mdi-lock'"
                        :color="currentLesson.id === les.id ? 'primary' : (les.free ? 'success' : 'grey')"
                        size="20"
                        class="mr-2"
                      ></v-icon>
                      <div class="font-weight-medium text-caption text-secondary" :class="{ 'font-weight-bold text-primary': currentLesson.id === les.id }">
                        {{ les.title }}
                      </div>
                    </div>
                    <span class="text-caption text-grey text-right whitespace-nowrap">{{ les.duration }}</span>
                  </div>
                </v-card>
              </div>
            </div>

            <!-- Enroll Full Program CTA -->
            <div class="pt-5 border-t mt-4">
              <div class="text-caption text-grey mb-2">Ingin bimbingan tatap muka intensif bersama tutor?</div>
              <v-btn
                block
                color="accent"
                class="text-none font-weight-bold text-white shadow-sm"
                to="/products"
              >
                Daftar Kelas Lengkap
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-snackbar v-model="snackbar" :timeout="3000" color="success">
      <v-icon icon="mdi-check-circle" class="mr-2"></v-icon>
      Rangkuman Modul E-Learning PDF berhasil diunduh!
    </v-snackbar>
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'
import { elearningModules } from '../data/wordishData'

const selectedLang = ref('korean')
const isPlaying = ref(false)
const playbackProgress = ref(20)
const playbackSpeed = ref(1.0)
const currentTime = ref(180)
const snackbar = ref(false)
let timer = null

const activeModule = computed(() => {
  return elearningModules.find(m => m.languageId === selectedLang.value) || elearningModules[0]
})

const currentLesson = ref(elearningModules[1].lessons[0])

function selectLesson(les) {
  currentLesson.value = les
  currentTime.value = 0
  playbackProgress.value = 0
}

function togglePlay() {
  isPlaying.value = !isPlaying.value
  if (isPlaying.value) {
    timer = setInterval(() => {
      if (playbackProgress.value < 100) {
        currentTime.value += 1
        playbackProgress.value += 1
      } else {
        isPlaying.value = false
        clearInterval(timer)
      }
    }, 1000 / playbackSpeed.value)
  } else {
    clearInterval(timer)
  }
}

function cycleSpeed() {
  const speeds = [1.0, 1.25, 1.5, 2.0]
  const idx = speeds.indexOf(playbackSpeed.value)
  playbackSpeed.value = speeds[(idx + 1) % speeds.length]
}

function formatTime(sec) {
  const m = Math.floor(sec / 60)
  const s = sec % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

function downloadNote() {
  snackbar.value = true
}

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
.video-container {
  background: radial-gradient(circle at 50% 50%, #0F2C59 0%, #0A1B36 100%);
  min-height: 360px;
}

.play-btn {
  width: 68px;
  height: 68px;
  background: linear-gradient(135deg, #FF6E02 0%, #FF8D36 100%) !important;
  transition: transform 0.2s;
}

.play-btn:hover {
  transform: scale(1.1);
}

.lesson-item:hover {
  border-color: #004EB2 !important;
}

.whitespace-nowrap {
  white-space: nowrap;
}
</style>
