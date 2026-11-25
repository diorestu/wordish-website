<template>
  <div class="py-10 bg-grey-lighten-5">
    <v-container class="max-width-xl px-4">
      <!-- Portal Header -->
      <div class="mb-8">
        <div class="d-inline-flex align-center bg-purple-lighten-5 px-3 py-1 rounded-pill border border-purple-lighten-3 mb-2">
          <v-icon icon="mdi-trophy-variant" color="purple" size="18" class="mr-2"></v-icon>
          <span class="text-caption font-weight-bold text-purple-darken-3">
            Ruanguji - Platform Tryout Online No. 1 di Indonesia
          </span>
        </div>
        <h1 class="text-h4 font-weight-bold text-secondary mb-2">
          Simulasi Tryout SNBT 2026 & Ujian Sekolah
        </h1>
        <p class="text-body-1 text-grey-darken-1">
          Uji kesiapan akademikmu dengan sistem penilaian Item Response Theory (IRT) resmi yang setara dengan seleksi nasional BPPP Kemendikbud.
        </p>
      </div>

      <!-- Feature Banner Highlight -->
      <v-card class="pa-6 rounded-3xl bg-secondary text-white mb-10 position-relative overflow-hidden">
        <v-row align="center">
          <v-col cols="12" md="8">
            <v-chip size="small" color="accent" class="font-weight-bold mb-2">
              SIMULASI AKTIF HARI INI
            </v-chip>
            <div class="text-h5 font-weight-bold text-white mb-2">
              Tryout Nasional UTBK-SNBT 2026 - Tes Potensi Skolastik (TPS)
            </div>
            <p class="text-body-2 text-grey-lighten-1 mb-4" style="line-height: 1.6;">
              10 Soal Prediksi HOTS (Penalaran Umum, Kognitif, Penalaran Matematika & Literasi). Dilengkapi timer mundur, analisis skor IRT, dan prediksi peluang lolos prodi PTN impian.
            </p>
            <div class="d-flex flex-wrap align-center ga-4 text-caption text-grey-lighten-2 mb-4">
              <span><v-icon icon="mdi-clock-outline" size="small" class="mr-1"></v-icon> 15 Menit Pengerjaan</span>
              <span><v-icon icon="mdi-help-box-multiple" size="small" class="mr-1"></v-icon> 10 Butir Soal HOTS</span>
              <span><v-icon icon="mdi-account-group" size="small" class="mr-1"></v-icon> 48.920 Siswa Sudah Ikut</span>
            </div>
            <v-btn
              color="accent"
              size="large"
              class="text-none font-weight-bold text-white px-8 shadow-md"
              prepend-icon="mdi-play-circle"
              @click="startTryoutExam(tryoutsList[0])"
            >
              Mulai Pengerjaan Tryout Sekarang
            </v-btn>
          </v-col>
          <v-col cols="12" md="4" class="text-center d-none d-md-block">
            <v-icon icon="mdi-clipboard-text-clock" size="140" color="purple-lighten-3" class="opacity-60"></v-icon>
          </v-col>
        </v-row>
      </v-card>

      <!-- Available Tryouts List -->
      <div class="text-subtitle-1 font-weight-bold text-secondary mb-4">
        Daftar Tryout Terbuka Lainnya:
      </div>

      <v-row>
        <v-col
          v-for="to in tryoutsList"
          :key="to.id"
          cols="12"
          md="4"
        >
          <v-card class="h-100 pa-5 rounded-2xl border bg-white d-flex flex-column justify-space-between shadow-sm rg-card-border">
            <div>
              <div class="d-flex justify-space-between align-center mb-3">
                <v-chip size="x-small" color="primary" class="font-weight-bold">
                  {{ to.category }}
                </v-chip>
                <v-chip size="x-small" color="success" variant="flat" class="font-weight-bold">
                  {{ to.status }}
                </v-chip>
              </div>

              <div class="font-weight-bold text-body-1 text-secondary mb-2">
                {{ to.title }}
              </div>

              <div class="d-flex flex-column ga-1 text-caption text-grey mb-4">
                <div><v-icon icon="mdi-timer-sand" size="small" class="mr-1"></v-icon> Durasi: {{ to.durationMinutes }} Menit</div>
                <div><v-icon icon="mdi-format-list-checks" size="small" class="mr-1"></v-icon> {{ to.totalQuestions }} Soal Adaptif</div>
                <div><v-icon icon="mdi-account-check" size="small" class="mr-1"></v-icon> {{ to.participantsCount.toLocaleString('id-ID') }} Peserta</div>
              </div>

              <div class="text-caption font-weight-bold text-secondary mb-1">Subtes Ujian:</div>
              <div class="d-flex flex-wrap ga-1 mb-4">
                <v-chip
                  v-for="(sub, sIdx) in to.subtests"
                  :key="sIdx"
                  size="x-small"
                  variant="tonal"
                  color="secondary"
                >
                  {{ sub.name }}
                </v-chip>
              </div>
            </div>

            <v-btn
              color="primary"
              variant="flat"
              block
              class="text-none font-weight-bold"
              @click="startTryoutExam(to)"
            >
              Mulai Ujian
              <v-icon icon="mdi-arrow-right" size="small" class="ml-1"></v-icon>
            </v-btn>
          </v-card>
        </v-col>
      </v-row>

      <!-- IRT System Information Card -->
      <v-card class="pa-6 rounded-2xl border bg-white mt-12">
        <div class="d-flex align-center mb-3">
          <v-icon icon="mdi-information-outline" color="primary" size="24" class="mr-2"></v-icon>
          <span class="text-subtitle-1 font-weight-bold text-secondary">
            Bagaimana Skor IRT di Ruanguji Bekerja?
          </span>
        </div>
        <p class="text-body-2 text-grey-darken-1" style="line-height: 1.7;">
          Item Response Theory (IRT) adalah metode penilaian resmi SNPMB BPPP di mana setiap butir soal memiliki bobot tingkat kesulitan berbeda.
          Soal yang jarang dijawab benar oleh peserta lain akan bernilai bobot skor lebih tinggi. Ini memberikan proyeksi paling presisi mengenai kesiapanmu menembus jurusan favorit di UI, ITB, UGM, Unair, dan kampus lainnya.
        </p>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { tryoutsList } from '../data/tryoutData'
import { useTryoutStore } from '../stores/tryout'

const router = useRouter()
const tryoutStore = useTryoutStore()

function startTryoutExam(to) {
  tryoutStore.startExam(to)
  router.push('/tryout/exam')
}
</script>
