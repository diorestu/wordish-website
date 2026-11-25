<template>
  <div class="py-10 bg-grey-lighten-5">
    <v-container class="max-width-xl px-4">
      <!-- Roboguru Hero Header -->
      <div class="text-center mb-10">
        <div class="d-inline-flex align-center bg-amber-lighten-5 px-4 py-1 rounded-pill border border-amber-lighten-3 mb-3">
          <v-icon icon="mdi-robot" color="accent" size="20" class="mr-2"></v-icon>
          <span class="text-caption font-weight-bold text-amber-darken-4">
            Roboguru - Asisten Cerdas Pemecah Soal Pelajaran
          </span>
        </div>
        <h1 class="text-h3 font-weight-bold text-secondary mb-3">
          Tanya Soal Sulit, Temukan Solusi Kilat
        </h1>
        <p class="text-body-1 text-grey-darken-1 max-width-md mx-auto">
          Ditenagai oleh kecerdasan buatan terverifikasi Master Teacher. Dapatkan rumus, konsep kunci, dan pembahasan langkah demi langkah secara gratis!
        </p>
      </div>

      <!-- Subject Categories Strip -->
      <div class="mb-10">
        <div class="text-subtitle-2 font-weight-bold text-secondary mb-3">
          Pilih Kategori Mata Pelajaran:
        </div>
        <v-row dense>
          <v-col
            v-for="sub in subjectCategories"
            :key="sub.name"
            cols="6"
            sm="4"
            md="3"
            lg="2"
          >
            <v-card
              class="pa-3 rounded-xl border text-center cursor-pointer rg-card-border"
              @click="filterSubject(sub.name)"
            >
              <v-avatar :color="sub.color" size="36" class="text-white mb-2">
                <v-icon :icon="sub.icon" size="20"></v-icon>
              </v-avatar>
              <div class="font-weight-bold text-caption text-secondary">{{ sub.name }}</div>
              <div class="text-caption text-grey" style="font-size: 0.65rem !important;">{{ sub.count }}</div>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <!-- Main Interactive Solver Widget -->
      <v-row justify="center" class="mb-12">
        <v-col cols="12" lg="10">
          <RoboguruSolver />
        </v-col>
      </v-row>

      <!-- Why Roboguru Works -->
      <div class="mt-8">
        <div class="text-center mb-8">
          <h2 class="text-h5 font-weight-bold text-secondary">
            Kenapa Jutaan Siswa Bertanya ke Roboguru?
          </h2>
        </div>
        <v-row>
          <v-col cols="12" md="4">
            <v-card class="pa-5 rounded-2xl border bg-white h-100">
              <v-icon icon="mdi-flash" color="accent" size="36" class="mb-3"></v-icon>
              <div class="text-subtitle-1 font-weight-bold text-secondary mb-2">Solusi Instan Detik Ini Juga</div>
              <p class="text-caption text-grey-darken-1" style="line-height: 1.6;">
                Tak perlu menunggu berjam-jam saat buntu mengerjakan PR malam hari. Dapatkan langkah penyelesaian lengkap kapan saja 24/7.
              </p>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card class="pa-5 rounded-2xl border bg-white h-100">
              <v-icon icon="mdi-certificate-outline" color="primary" size="36" class="mb-3"></v-icon>
              <div class="text-subtitle-1 font-weight-bold text-secondary mb-2">Bukan Sekadar Kunci Jawaban</div>
              <p class="text-caption text-grey-darken-1" style="line-height: 1.6;">
                Roboguru mengajari konsep dasar dan trik logika sehingga kamu bisa mengerjakan variasi soal serupa saat ujian sesungguhnya.
              </p>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card class="pa-5 rounded-2xl border bg-white h-100">
              <v-icon icon="mdi-youtube" color="error" size="36" class="mb-3"></v-icon>
              <div class="text-subtitle-1 font-weight-bold text-secondary mb-2">Terkoneksi Video Pembahasan</div>
              <p class="text-caption text-grey-darken-1" style="line-height: 1.6;">
                Tersedia rekomendasi video animasi ruangbelajar dari materi terkait untuk memperdalam pemahaman konsep secara visual.
              </p>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script setup>
import { subjectCategories } from '../data/roboguruData'
import RoboguruSolver from '../components/RoboguruSolver.vue'

function filterSubject(subjectName) {
  // Can trigger focus or filtering in solver
}
</script>
