<template>
  <div class="py-10 bg-grey-lighten-5">
    <v-container class="max-width-xl px-4">
      <!-- Header -->
      <div class="mb-8">
        <div class="d-inline-flex align-center bg-blue-lighten-5 px-3 py-1 rounded-pill border border-blue-lighten-3 mb-2">
          <v-icon icon="mdi-play-circle" color="primary" size="18" class="mr-2"></v-icon>
          <span class="text-caption font-weight-bold text-primary">
            ruangbelajar - Video Animasi & Bank Soal Terlengkap
          </span>
        </div>
        <h1 class="text-h4 font-weight-bold text-secondary mb-2">
          Dashboard Demo Pembelajaran Interaktif
        </h1>
        <p class="text-body-1 text-grey-darken-1">
          Jelajahi silabus materi Kurikulum Merdeka, putar video pembelajaran adaptif dengan fitur Adapto, dan unduh rangkuman rumus Master Teacher.
        </p>
      </div>

      <!-- Class & Subject Selector Tabs -->
      <v-card class="pa-4 rounded-2xl border bg-white shadow-sm mb-8">
        <div class="d-flex flex-wrap justify-space-between align-center ga-4">
          <div class="d-flex align-center ga-2">
            <v-chip size="small" color="primary" variant="flat" class="font-weight-bold">
              Kelas 12 SMA
            </v-chip>
            <v-chip size="small" variant="tonal" class="font-weight-bold">
              Kurikulum Merdeka 2026
            </v-chip>
          </div>

          <div class="d-flex flex-wrap ga-2">
            <v-btn
              v-for="sub in subjects"
              :key="sub.id"
              :color="activeSubject === sub.id ? 'primary' : 'grey-lighten-3'"
              :variant="activeSubject === sub.id ? 'flat' : 'flat'"
              size="small"
              class="text-none font-weight-bold"
              :class="activeSubject === sub.id ? 'text-white' : 'text-secondary'"
              @click="activeSubject = sub.id"
            >
              <v-icon start :icon="sub.icon"></v-icon>
              {{ sub.name }}
            </v-btn>
          </div>
        </div>
      </v-card>

      <!-- Interactive Player Area -->
      <div class="mb-10">
        <InteractiveVideoPlayer />
      </div>

      <!-- Full Syllabus Accordion -->
      <v-card class="pa-6 rounded-2xl border bg-white shadow-sm">
        <div class="d-flex align-center justify-space-between mb-4">
          <div>
            <div class="text-h6 font-weight-bold text-secondary">
              Silabus Lengkap Mata Pelajaran {{ currentSubjectName }}
            </div>
            <div class="text-caption text-grey">Total 6 Bab • 42 Video Animasi • 180 Latihan Soal</div>
          </div>
          <v-chip size="small" color="success" class="font-weight-bold">
            Progres Belajar: 40%
          </v-chip>
        </div>

        <v-expansion-panels variant="accordion" class="rounded-xl overflow-hidden border">
          <v-expansion-panel
            v-for="(chapter, idx) in syllabusChapters"
            :key="idx"
            class="border-b"
          >
            <v-expansion-panel-title class="font-weight-bold text-body-2 text-secondary py-3">
              <v-avatar size="24" color="primary" class="text-white text-caption font-weight-bold mr-3">
                {{ idx + 1 }}
              </v-avatar>
              {{ chapter.title }}
              <v-spacer></v-spacer>
              <span class="text-caption text-grey mr-3">{{ chapter.subtopicsCount }} Subtopik</span>
            </v-expansion-panel-title>
            <v-expansion-panel-text class="pt-2">
              <v-list density="compact" class="pa-0">
                <v-list-item
                  v-for="(sub, sIdx) in chapter.subtopics"
                  :key="sIdx"
                  class="rounded-lg mb-1"
                >
                  <template #prepend>
                    <v-icon icon="mdi-play-circle-outline" color="primary" size="small" class="mr-2"></v-icon>
                  </template>
                  <v-list-item-title class="text-caption font-weight-medium">
                    {{ sub.name }} ({{ sub.duration }})
                  </v-list-item-title>
                  <template #append>
                    <v-btn size="x-small" variant="text" color="primary" class="text-none font-weight-bold">
                      Tonton
                    </v-btn>
                  </template>
                </v-list-item>
              </v-list>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import InteractiveVideoPlayer from '../components/InteractiveVideoPlayer.vue'

const activeSubject = ref('mat')

const subjects = [
  { id: 'mat', name: 'Matematika', icon: 'mdi-calculator' },
  { id: 'fis', name: 'Fisika', icon: 'mdi-atom' },
  { id: 'kim', name: 'Kimia', icon: 'mdi-flask' },
  { id: 'bio', name: 'Biologi', icon: 'mdi-dna' }
]

const currentSubjectName = computed(() => {
  const match = subjects.find(s => s.id === activeSubject.value)
  return match ? match.name : 'Matematika'
})

const syllabusChapters = [
  {
    title: 'Bab 1: Diferensial & Aturan Rantai Aljabar',
    subtopicsCount: 5,
    subtopics: [
      { name: '1.1 Limit Turunan Fungsi', duration: '05:40' },
      { name: '1.2 Aturan Dasar Turunan', duration: '08:15' },
      { name: '1.3 Perkalian dan Pembagian U/V', duration: '09:20' },
      { name: '1.4 Aturan Rantai Komposisi', duration: '11:05' },
      { name: '1.5 Aplikasi Gradien & Nilai Maksimum', duration: '14:30' }
    ]
  },
  {
    title: 'Bab 2: Integral Tak Tentu dan Tentu',
    subtopicsCount: 4,
    subtopics: [
      { name: '2.1 Antiturunan & Integral Aljabar', duration: '07:10' },
      { name: '2.2 Teknik Substitusi Aljabar', duration: '10:45' },
      { name: '2.3 Teorema Dasar Kalkulus', duration: '08:30' },
      { name: '2.4 Menghitung Luas Daerah dengan Integral', duration: '12:00' }
    ]
  },
  {
    title: 'Bab 3: Geometri Dimensi Tiga (Jarak Titik, Garis & Bidang)',
    subtopicsCount: 4,
    subtopics: [
      { name: '3.1 Kedudukan Titik, Garis dan Bidang pada Kubus', duration: '06:50' },
      { name: '3.2 Proyeksi Titik ke Garis Tegak Lurus', duration: '11:20' },
      { name: '3.3 Jarak Titik ke Bidang dengan Segitiga Bantuan', duration: '13:15' },
      { name: '3.4 Sudut Antara Dua Bidang', duration: '09:40' }
    ]
  },
  {
    title: 'Bab 4: Statistika & Ukuran Penyebaran Data Berkelompok',
    subtopicsCount: 3,
    subtopics: [
      { name: '4.1 Rataan Sementara (Mean) Data Tabel', duration: '07:30' },
      { name: '4.2 Modus & Kuartil Histogram', duration: '08:50' },
      { name: '4.3 Ragam dan Simpangan Baku', duration: '09:10' }
    ]
  }
]
</script>
