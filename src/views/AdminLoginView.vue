<template>
  <div class="py-10 py-md-16 bg-grey-lighten-5 min-vh-100 d-flex align-center">
    <v-container class="max-width-xl px-4">
      <v-row justify="center">
        <v-col cols="12" sm="8" md="5" lg="4">
          <v-card class="rounded-3xl pa-6 pa-sm-8 border bg-white shadow-sm">
            <div class="text-center mb-6">
              <img
                src="/wordish-logo.jpg"
                alt="Wordish Logo"
                height="48"
                class="mx-auto mb-3 d-block"
                style="object-fit: contain;"
              />
              <v-chip
                color="primary"
                variant="tonal"
                size="small"
                prepend-icon="mdi-shield-lock-outline"
                class="font-weight-bold mb-3"
              >
                Akses Terbatas Admin
              </v-chip>
              <h1 class="text-h5 font-weight-bold text-secondary mb-1">
                Login Admin Panel
              </h1>
              <p class="text-caption text-grey-darken-1 mb-0">
                Masuk untuk mengelola program kelas &amp; jadwal Wordish
              </p>
            </div>

            <v-alert
              v-if="errorMsg"
              type="error"
              variant="tonal"
              density="compact"
              class="mb-4 text-caption"
              closable
              @click:close="errorMsg = ''"
            >
              {{ errorMsg }}
            </v-alert>

            <v-form @submit.prevent="handleSubmit">
              <div class="text-caption font-weight-bold text-secondary mb-1">
                Username atau Email Admin
              </div>
              <v-text-field
                v-model="identifier"
                placeholder="admin atau admin@wordish.id"
                prepend-inner-icon="mdi-account-tie-outline"
                variant="outlined"
                rounded="lg"
                density="comfortable"
                autocomplete="username"
                required
                class="mb-3"
              ></v-text-field>

              <div class="text-caption font-weight-bold text-secondary mb-1">
                Kata Sandi
              </div>
              <v-text-field
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Masukkan kata sandi admin"
                prepend-inner-icon="mdi-lock-outline"
                :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append-inner="showPassword = !showPassword"
                variant="outlined"
                rounded="lg"
                density="comfortable"
                autocomplete="current-password"
                required
                class="mb-5"
              ></v-text-field>

              <v-btn
                block
                color="primary"
                size="large"
                type="submit"
                class="text-none font-weight-bold text-white mb-4"
                :loading="adminAuthStore.loading"
              >
                Masuk ke Admin Panel
              </v-btn>
            </v-form>

            <div class="text-center">
              <v-btn
                variant="text"
                size="small"
                color="grey-darken-1"
                prepend-icon="mdi-arrow-left"
                class="text-none"
                to="/"
              >
                Kembali ke Beranda
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAdminAuthStore } from '../stores/adminAuth'

const router = useRouter()
const route = useRoute()
const adminAuthStore = useAdminAuthStore()

const identifier = ref('')
const password = ref('')
const showPassword = ref(false)
const errorMsg = ref('')

async function handleSubmit() {
  errorMsg.value = ''
  if (!identifier.value.trim() || !password.value) {
    errorMsg.value = 'Username/email dan kata sandi wajib diisi.'
    return
  }

  try {
    await adminAuthStore.login(identifier.value.trim(), password.value)
    const redirectTarget = typeof route.query.redirect === 'string' && route.query.redirect.startsWith('/admin')
      ? route.query.redirect
      : '/admin'
    router.replace(redirectTarget)
  } catch (err) {
    errorMsg.value = err.message || 'Login gagal. Periksa kembali kredensial Anda.'
  }
}
</script>
