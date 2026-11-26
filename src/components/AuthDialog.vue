<template>
  <v-dialog v-model="authStore.authDialogOpen" max-width="480" persistent>
    <v-card class="rounded-3xl pa-2">
      <!-- Close Button -->
      <div class="d-flex justify-end pa-2">
        <v-btn icon size="small" variant="text" @click="authStore.closeAuth()">
          <v-icon icon="mdi-close"></v-icon>
        </v-btn>
      </div>

      <v-card-text class="pt-0 px-6 pb-6">
        <div class="text-center mb-6">
          <img
            src="/wordish-logo.jpg"
            alt="Wordish Logo"
            height="46"
            class="mx-auto mb-2 d-block"
            style="object-fit: contain;"
          />
          <div class="text-h6 font-weight-bold text-secondary">
            {{ isLoginTab ? 'Masuk ke Akun Peserta' : 'Pendaftaran Akun Baru' }}
          </div>
          <div class="text-caption text-grey">
            Lembaga Pelatihan Bahasa Mandarin, Korea & Inggris
          </div>
        </div>

        <!-- Tabs Switcher -->
        <v-tabs v-model="authStore.authDialogTab" grow color="primary" class="mb-4">
          <v-tab value="login" class="text-none font-weight-bold">Masuk</v-tab>
          <v-tab value="register" class="text-none font-weight-bold">Daftar Akun</v-tab>
        </v-tabs>

        <!-- Quick Demo Login Button -->
        <v-alert
          type="info"
          variant="tonal"
          density="compact"
          class="mb-4 text-caption"
          icon="mdi-lightning-bolt"
        >
          <strong>Demo Login 1-Klik:</strong> Masuk langsung untuk mencoba sistem pelatihan.
          <div class="mt-1">
            <v-btn size="x-small" color="primary" variant="flat" class="text-none font-weight-bold" @click="quickDemoLogin">
              Masuk sebagai Peserta (Budi Santoso)
            </v-btn>
          </div>
        </v-alert>

        <!-- Form Login -->
        <v-form v-if="isLoginTab" @submit.prevent="handleLogin">
          <div class="text-caption font-weight-bold text-secondary mb-1">Nomor WhatsApp atau Email</div>
          <v-text-field
            v-model="loginForm.identifier"
            placeholder="contoh: 08123456789 atau nama@gmail.com"
            prepend-inner-icon="mdi-account-outline"
            required
            class="mb-2"
          ></v-text-field>

          <div class="d-flex justify-space-between align-center mb-1">
            <span class="text-caption font-weight-bold text-secondary">Kata Sandi</span>
            <a href="#" class="text-caption text-primary text-decoration-none">Lupa Sandi?</a>
          </div>
          <v-text-field
            v-model="loginForm.password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Masukkan kata sandi"
            prepend-inner-icon="mdi-lock-outline"
            :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
            @click:append-inner="showPassword = !showPassword"
            required
            class="mb-4"
          ></v-text-field>

          <v-btn
            block
            color="primary"
            size="large"
            type="submit"
            class="text-none font-weight-bold text-white mb-3"
            :loading="loading"
          >
            Masuk Sekarang
          </v-btn>
        </v-form>

        <!-- Form Register -->
        <v-form v-else @submit.prevent="handleRegister">
          <div class="text-caption font-weight-bold text-secondary mb-1">Nama Lengkap Peserta</div>
          <v-text-field
            v-model="registerForm.fullName"
            placeholder="Masukkan nama lengkap"
            prepend-inner-icon="mdi-account"
            required
            class="mb-1"
          ></v-text-field>

          <div class="text-caption font-weight-bold text-secondary mb-1">Nomor WhatsApp Aktif</div>
          <v-text-field
            v-model="registerForm.phone"
            placeholder="08xxxxxxxxxx"
            prepend-inner-icon="mdi-phone"
            required
            class="mb-1"
          ></v-text-field>

          <div class="text-caption font-weight-bold text-secondary mb-1">Pilihan Bahasa Utama</div>
          <v-select
            v-model="registerForm.language"
            :items="['Bahasa Mandarin', 'Bahasa Korea (EPS-TOPIK)', 'Bahasa Inggris']"
            prepend-inner-icon="mdi-translate"
            class="mb-1"
          ></v-select>

          <div class="text-caption font-weight-bold text-secondary mb-1">Buat Kata Sandi</div>
          <v-text-field
            v-model="registerForm.password"
            type="password"
            placeholder="Minimal 6 karakter"
            prepend-inner-icon="mdi-lock-outline"
            required
            class="mb-4"
          ></v-text-field>

          <v-btn
            block
            color="accent"
            size="large"
            type="submit"
            class="text-none font-weight-bold text-white mb-3"
            :loading="loading"
          >
            Daftar Akun Baru
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()
const loading = ref(false)
const showPassword = ref(false)

const isLoginTab = computed(() => authStore.authDialogTab === 'login')

const loginForm = ref({
  identifier: 'budi.santoso@gmail.com',
  password: 'password123'
})

const registerForm = ref({
  fullName: '',
  phone: '',
  language: 'Bahasa Korea (EPS-TOPIK)',
  password: ''
})

function quickDemoLogin() {
  loading.value = true
  setTimeout(() => {
    authStore.login({ identifier: 'budi.santoso@gmail.com' })
    loading.value = false
  }, 400)
}

function handleLogin() {
  loading.value = true
  setTimeout(() => {
    authStore.login(loginForm.value)
    loading.value = false
  }, 500)
}

function handleRegister() {
  loading.value = true
  setTimeout(() => {
    authStore.register(registerForm.value)
    loading.value = false
  }, 500)
}
</script>
