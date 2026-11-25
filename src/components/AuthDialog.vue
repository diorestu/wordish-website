<template>
  <v-dialog v-model="authStore.authDialogOpen" max-width="480" persistent>
    <v-card class="rounded-2xl pa-2">
      <!-- Close Button -->
      <div class="d-flex justify-end pa-2">
        <v-btn icon size="small" variant="text" @click="authStore.closeAuth()">
          <v-icon icon="mdi-close"></v-icon>
        </v-btn>
      </div>

      <v-card-text class="pt-0 px-6 pb-6">
        <div class="text-center mb-6">
          <div class="rg-avatar-logo mx-auto mb-2 d-flex align-center justify-center">
            <v-icon icon="mdi-school" color="white" size="28"></v-icon>
          </div>
          <div class="text-h5 font-weight-bold text-secondary">
            {{ isLoginTab ? 'Masuk ke Ruangguru' : 'Daftar Akun Ruangguru' }}
          </div>
          <div class="text-caption text-grey">
            {{ isLoginTab ? 'Belajar seru bersama jutaan siswa berprestasi' : 'Mulai perjalanan prestasimu bersama Master Teacher' }}
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
          <strong>Coba Langsung (1-Klik):</strong> Tekan tombol di bawah untuk demo login otomatis.
          <div class="mt-1">
            <v-btn size="x-small" color="primary" variant="flat" class="text-none" @click="quickDemoLogin">
              Masuk sebagai Rian Pratama (Kelas 12 SMA)
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
          <div class="text-caption font-weight-bold text-secondary mb-1">Nama Lengkap Siswa</div>
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

          <div class="text-caption font-weight-bold text-secondary mb-1">Email Siswa / Orang Tua</div>
          <v-text-field
            v-model="registerForm.email"
            placeholder="contoh@gmail.com"
            prepend-inner-icon="mdi-email-outline"
            required
            class="mb-1"
          ></v-text-field>

          <div class="text-caption font-weight-bold text-secondary mb-1">Jenjang Pendidikan</div>
          <v-select
            v-model="registerForm.grade"
            :items="['SD (Kelas 1-6)', 'SMP (Kelas 7-9)', 'SMA (Kelas 10-12)', 'UTBK-SNBT / Gap Year', 'Mahasiswa & Umum']"
            prepend-inner-icon="mdi-school-outline"
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

        <!-- Divider -->
        <div class="d-flex align-center my-3">
          <v-divider></v-divider>
          <span class="text-caption text-grey px-3">atau lanjutkan dengan</span>
          <v-divider></v-divider>
        </div>

        <div class="d-flex ga-2">
          <v-btn variant="outlined" block class="text-none text-body-2" prepend-icon="mdi-google" @click="quickDemoLogin">
            Google
          </v-btn>
        </div>
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
  identifier: 'rian.pratama@gmail.com',
  password: 'password123'
})

const registerForm = ref({
  fullName: '',
  phone: '',
  email: '',
  grade: 'SMA (Kelas 10-12)',
  password: ''
})

function quickDemoLogin() {
  loading.value = true
  setTimeout(() => {
    authStore.login({ identifier: 'rian.pratama@gmail.com' })
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

<style scoped>
.rg-avatar-logo {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #00A5CF 0%, #0077B6 100%);
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 165, 207, 0.3);
}
</style>
