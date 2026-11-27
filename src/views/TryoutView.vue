<template>
  <div class="py-10 bg-grey-lighten-5 min-vh-100">
    <v-container class="max-width-lg px-4">
      <div class="text-center mb-8">
        <h1 class="text-h4 font-weight-bold text-secondary mb-2">
          Tes Level Bahasa Online
        </h1>
        <p class="text-body-1 text-grey-darken-1 max-width-md mx-auto">
          Cari tahu estimasi kemampuan bahasa <strong>Mandarin</strong>, <strong>Korea</strong>, atau <strong>Inggris</strong> kamu agar dapat memilih kelas yang paling pas.
        </p>
      </div>

      <!-- Placement Test Component -->
      <LanguagePlacementTest />

      <!-- Consultation Help -->
      <v-card class="pa-6 rounded-2xl border bg-white mt-10 text-center">
        <v-icon icon="mdi-headset" color="primary" size="36" class="mb-2"></v-icon>
        <div class="text-subtitle-1 font-weight-bold text-secondary mb-1">
          Ragu atau Ingin Konsultasi Langsung dengan Pengajar?
        </div>
        <p class="text-caption text-grey mb-4">
          Tim konselor akademik Wordish siap membantu menilai kebutuhanmu lewat sesi tanya jawab singkat di WhatsApp.
        </p>
        <v-btn
          color="success"
          class="text-none font-weight-bold"
          prepend-icon="mdi-whatsapp"
          href="https://wa.me/6287864734308?text=Halo%20Wordish,%20saya%20mau%20konsultasi%20penempatan%20level%20bahasa"
          target="_blank"
        >
          Konsultasi via WhatsApp
        </v-btn>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
import LanguagePlacementTest from '../components/LanguagePlacementTest.vue'
</script>
