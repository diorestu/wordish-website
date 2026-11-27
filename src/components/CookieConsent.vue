<template>
  <v-snackbar
    v-model="visible"
    location="bottom"
    timeout="-1"
    color="secondary"
    elevation="8"
    class="cookie-consent"
  >
    <div class="d-flex flex-column flex-md-row align-md-center ga-3">
      <div class="text-body-2 text-white" style="max-width: 720px;">
        Kami menggunakan cookie untuk analitik dan peningkatan layanan. Pilih "Setuju" untuk mengizinkan pelacakan, atau "Tolak" untuk menonaktifkannya.
      </div>
      <div class="d-flex ga-2 ml-md-auto">
        <v-btn variant="text" color="white" size="small" @click="reject">Tolak</v-btn>
        <v-btn color="primary" size="small" class="text-none" @click="accept">Setuju</v-btn>
      </div>
    </div>
  </v-snackbar>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { hasConsent, grantConsent, denyConsent, trackEvent } from '../utils/analytics'

const visible = ref(false)

onMounted(() => {
  const stored = localStorage.getItem('wordish_consent')
  if (!stored) visible.value = true
})

function accept() {
  grantConsent()
  visible.value = false
  trackEvent('consent_granted')
}

function reject() {
  denyConsent()
  visible.value = false
  trackEvent('consent_denied')
}
</script>
