<template>
  <div class="service-detail-page bg-grey-lighten-5">
    <!-- State: Layanan Tidak Ditemukan -->
    <v-container v-if="!service" class="py-16 text-center">
      <v-icon icon="mdi-alert-circle-outline" size="64" color="grey" class="mb-4"></v-icon>
      <h2 class="text-h5 font-weight-bold text-secondary mb-2">Layanan Kelas Tidak Ditemukan</h2>
      <p class="text-body-1 text-grey mb-6">Format layanan yang kamu cari tidak tersedia atau tautan sudah berubah.</p>
      <v-btn to="/products" color="primary" class="text-none font-weight-bold">
        Kembali ke Katalog Program
      </v-btn>
    </v-container>

    <!-- State: Data Layanan Ditemukan -->
    <div v-else>
      <!-- 01. BREADCRUMBS & HERO HEADER -->
      <section class="service-hero position-relative py-8 py-md-12 text-white" :style="{ backgroundColor: service.color }">
        <v-container class="max-width-xl px-4 px-sm-6 position-relative z-1">
          <v-breadcrumbs
            :items="breadcrumbItems"
            class="pa-0 mb-4 text-caption text-white opacity-90"
            divider="/"
          >
            <template #title="{ item }">
              <span class="text-white font-weight-medium">{{ item.title }}</span>
            </template>
          </v-breadcrumbs>

          <v-row align="center">
            <v-col cols="12" md="7" class="pr-md-8">
              <div class="d-flex align-center ga-2 mb-3">
                <v-chip color="white" size="small" variant="flat" :style="{ color: service.color }" class="font-weight-bold">
                  {{ service.shortBadge }}
                </v-chip>
                <span class="text-caption text-white opacity-90">Format Pelatihan Resmi Wordish</span>
              </div>

              <h1 class="text-h4 text-sm-h3 font-weight-extrabold mb-3 text-white letter-spacing-tight">
                {{ service.name }}
              </h1>

              <p class="text-body-1 text-white opacity-95 mb-6" style="line-height: 1.7; max-width: 600px;">
                {{ service.fullOverview }}
              </p>

              <!-- Quick spec chips -->
              <div class="d-flex flex-wrap ga-2 mb-6">
                <v-chip color="white" variant="outlined" size="small" prepend-icon="mdi-account-multiple">
                  {{ service.person }}
                </v-chip>
                <v-chip color="white" variant="outlined" size="small" prepend-icon="mdi-clock-outline">
                  {{ service.schedule }}
                </v-chip>
                <v-chip color="white" variant="outlined" size="small" prepend-icon="mdi-map-marker-outline">
                  {{ service.location }}
                </v-chip>
              </div>

              <div class="d-flex flex-wrap ga-3">
                <v-btn
                  size="large"
                  color="accent"
                  class="text-none font-weight-bold text-white px-6 shadow-sm"
                  prepend-icon="mdi-whatsapp"
                  :href="consultationWaLink"
                  target="_blank"
                >
                  Konsultasi &amp; Daftar Sekarang
                </v-btn>
                <v-btn
                  size="large"
                  variant="outlined"
                  color="white"
                  class="text-none font-weight-bold px-5"
                  to="/products"
                >
                  Lihat Pilihan Bahasa
                </v-btn>
              </div>
            </v-col>

            <v-col cols="12" md="5" class="mt-6 mt-md-0">
              <v-card class="rounded-3xl overflow-hidden shadow-xl border-0">
                <v-img
                  :src="service.heroImage"
                  :alt="service.name"
                  height="280"
                  cover
                  class="service-hero-img"
                >
                  <template #placeholder>
                    <div class="d-flex align-center justify-center fill-height bg-grey-lighten-2">
                      <v-progress-circular indeterminate color="primary"></v-progress-circular>
                    </div>
                  </template>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- 02. MAIN CONTENT & SIDEBAR -->
      <v-container class="max-width-xl px-4 px-sm-6 py-8 py-md-12">
        <v-row>
          <!-- Left Column: Curriculum, Keunggulan, Fasilitas -->
          <v-col cols="12" lg="8">
            <!-- Box: Cocok Untuk Siapa -->
            <v-card class="pa-6 rounded-3xl border bg-white mb-8 shadow-sm">
              <div class="d-flex align-center ga-3 mb-3">
                <v-avatar :color="`${service.color}15`" size="44">
                  <v-icon icon="mdi-account-check" :color="service.color" size="24"></v-icon>
                </v-avatar>
                <div>
                  <h3 class="text-h6 font-weight-bold text-secondary mb-0">Format Ini Paling Cocok Untuk:</h3>
                  <div class="text-caption text-grey">Target peserta dan efektivitas pembelajaran</div>
                </div>
              </div>
              <p class="text-body-1 text-grey-darken-1 mb-0" style="line-height: 1.7;">
                {{ service.idealFor }}
              </p>
            </v-card>

            <!-- Box: Alur Pembelajaran & Kurikulum -->
            <div class="mb-8">
              <div class="d-flex align-center justify-space-between mb-4">
                <div>
                  <h2 class="text-h5 font-weight-bold text-secondary mb-1">Tahapan &amp; Silabus Pembelajaran</h2>
                  <p class="text-caption text-grey mb-0">Struktur materi terukur untuk hasil belajar optimal</p>
                </div>
                <v-chip color="primary" size="small" variant="tonal" class="font-weight-bold">
                  {{ service.durationTotal }}
                </v-chip>
              </div>

              <div class="d-flex flex-column ga-4">
                <v-card
                  v-for="(step, sIdx) in service.curriculum"
                  :key="sIdx"
                  class="pa-5 rounded-2xl border bg-white shadow-sm"
                >
                  <div class="d-flex align-start ga-4">
                    <div
                      class="stage-badge rounded-xl pa-2 text-center flex-shrink-0"
                      :style="{ backgroundColor: `${service.color}15`, color: service.color }"
                    >
                      <div class="text-caption font-weight-bold text-uppercase">{{ step.week }}</div>
                    </div>
                    <div>
                      <div class="text-subtitle-1 font-weight-bold text-secondary mb-1">{{ step.title }}</div>
                      <p class="text-body-2 text-grey-darken-1 mb-0" style="line-height: 1.6;">{{ step.desc }}</p>
                    </div>
                  </div>
                </v-card>
              </div>
            </div>

            <!-- Box: Tabel Sistem Harga Resmi Berdasarkan Bahasa -->
            <v-card class="pa-6 rounded-3xl border bg-white mb-8 shadow-sm">
              <div class="d-flex align-center justify-space-between flex-wrap ga-2 mb-4">
                <div>
                  <h2 class="text-h5 font-weight-bold text-secondary mb-1">
                    Sistem &amp; Rincian Harga Resmi
                  </h2>
                  <p class="text-caption text-grey mb-0">
                    Transparan, terjangkau, dan dapat disesuaikan dengan kebutuhan belajar Anda
                  </p>
                </div>
                <v-chip color="success" size="small" variant="flat" class="font-weight-bold">
                  Update Resmi 2026
                </v-chip>
              </div>

              <!-- Filter Bahasa pada Rincian Harga -->
              <v-tabs
                v-model="pricingLangTab"
                color="primary"
                align-tabs="start"
                class="mb-4 border-b"
              >
                <v-tab value="mandarin" class="text-none font-weight-bold">
                  <v-icon icon="mdi-translate" color="#DC2626" class="mr-2"></v-icon>
                  Mandarin
                </v-tab>
                <v-tab value="english" class="text-none font-weight-bold">
                  <v-icon icon="mdi-account-voice" color="#D97706" class="mr-2"></v-icon>
                  English
                </v-tab>
                <v-tab value="korean" class="text-none font-weight-bold">
                  <v-icon icon="mdi-bullseye-arrow" color="#2563EB" class="mr-2"></v-icon>
                  Korea
                </v-tab>
              </v-tabs>

              <v-window v-model="pricingLangTab">
                <!-- Tab Mandarin -->
                <v-window-item value="mandarin">
                  <v-table hover class="rounded-xl border overflow-hidden">
                    <thead class="bg-grey-lighten-4">
                      <tr>
                        <th class="font-weight-bold text-secondary">Layanan &amp; Lokasi</th>
                        <th class="font-weight-bold text-secondary">Format</th>
                        <th class="font-weight-bold text-secondary">Biaya</th>
                        <th class="font-weight-bold text-secondary">Ketentuan</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(rate, rIdx) in officialPricingSystem.mandarin.rates"
                        :key="rIdx"
                        :class="{ 'bg-amber-lighten-5': isCurrentService(rate.service) }"
                      >
                        <td class="py-3">
                          <div class="font-weight-bold text-secondary">{{ rate.service }}</div>
                          <div class="text-caption text-grey">{{ rate.location }}</div>
                        </td>
                        <td class="text-caption text-grey-darken-2 py-3">{{ rate.format }}</td>
                        <td class="py-3">
                          <span class="font-weight-extrabold text-primary">{{ rate.priceDisplay }}</span>
                          <span class="text-caption text-grey"> {{ rate.unit }}</span>
                        </td>
                        <td class="text-caption text-grey-darken-1 py-3">
                          <div>{{ rate.term }}</div>
                          <v-chip size="x-small" color="primary" variant="tonal" class="mt-1 font-weight-medium">
                            {{ rate.minOrder }}
                          </v-chip>
                        </td>
                      </tr>
                    </tbody>
                  </v-table>
                </v-window-item>

                <!-- Tab English -->
                <v-window-item value="english">
                  <v-table hover class="rounded-xl border overflow-hidden">
                    <thead class="bg-grey-lighten-4">
                      <tr>
                        <th class="font-weight-bold text-secondary">Layanan &amp; Lokasi</th>
                        <th class="font-weight-bold text-secondary">Format</th>
                        <th class="font-weight-bold text-secondary">Biaya</th>
                        <th class="font-weight-bold text-secondary">Ketentuan</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(rate, rIdx) in officialPricingSystem.english.rates"
                        :key="rIdx"
                        :class="{ 'bg-amber-lighten-5': isCurrentService(rate.service) }"
                      >
                        <td class="py-3">
                          <div class="font-weight-bold text-secondary">{{ rate.service }}</div>
                          <div class="text-caption text-grey">{{ rate.location }}</div>
                        </td>
                        <td class="text-caption text-grey-darken-2 py-3">{{ rate.format }}</td>
                        <td class="py-3">
                          <span class="font-weight-extrabold text-amber-darken-3">{{ rate.priceDisplay }}</span>
                          <span class="text-caption text-grey"> {{ rate.unit }}</span>
                        </td>
                        <td class="text-caption text-grey-darken-1 py-3">
                          <div>{{ rate.term }}</div>
                          <v-chip size="x-small" color="amber-darken-3" variant="tonal" class="mt-1 font-weight-medium">
                            {{ rate.minOrder }}
                          </v-chip>
                        </td>
                      </tr>
                    </tbody>
                  </v-table>
                </v-window-item>

                <!-- Tab Korea -->
                <v-window-item value="korean">
                  <v-table hover class="rounded-xl border overflow-hidden">
                    <thead class="bg-grey-lighten-4">
                      <tr>
                        <th class="font-weight-bold text-secondary">Layanan &amp; Lokasi</th>
                        <th class="font-weight-bold text-secondary">Format</th>
                        <th class="font-weight-bold text-secondary">Biaya</th>
                        <th class="font-weight-bold text-secondary">Ketentuan</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(rate, rIdx) in officialPricingSystem.korean.rates"
                        :key="rIdx"
                        :class="{ 'bg-amber-lighten-5': isCurrentService(rate.service) }"
                      >
                        <td class="py-3">
                          <div class="font-weight-bold text-secondary">{{ rate.service }}</div>
                          <div class="text-caption text-grey">{{ rate.location }}</div>
                        </td>
                        <td class="text-caption text-grey-darken-2 py-3">{{ rate.format }}</td>
                        <td class="py-3">
                          <span class="font-weight-extrabold text-blue-darken-2">{{ rate.priceDisplay }}</span>
                          <span class="text-caption text-grey"> {{ rate.unit }}</span>
                        </td>
                        <td class="text-caption text-grey-darken-1 py-3">
                          <div>{{ rate.term }}</div>
                          <v-chip size="x-small" color="blue-darken-2" variant="tonal" class="mt-1 font-weight-medium">
                            {{ rate.minOrder }}
                          </v-chip>
                        </td>
                      </tr>
                    </tbody>
                  </v-table>
                </v-window-item>
              </v-window>
            </v-card>

            <!-- Box: Fasilitas yang Didapatkan -->
            <v-card class="pa-6 rounded-3xl border bg-white mb-8 shadow-sm">
              <h2 class="text-h5 font-weight-bold text-secondary mb-4">Fasilitas Lengkap Peserta</h2>
              <v-row>
                <v-col
                  v-for="(facility, fIdx) in service.facilities"
                  :key="fIdx"
                  cols="12"
                  sm="6"
                >
                  <div class="d-flex align-start ga-3">
                    <v-icon icon="mdi-check-decagram" color="teal" size="20" class="mt-0-5 flex-shrink-0"></v-icon>
                    <span class="text-body-2 text-grey-darken-2" style="line-height: 1.5;">{{ facility }}</span>
                  </div>
                </v-col>
              </v-row>
            </v-card>

            <!-- Box: Pilihan Bahasa yang Tersedia -->
            <v-card class="pa-6 rounded-3xl border bg-white shadow-sm">
              <h2 class="text-h5 font-weight-bold text-secondary mb-2">Bahasa yang Tersedia di Format Ini</h2>
              <p class="text-body-2 text-grey mb-4">Kamu dapat memilih format {{ service.name }} untuk bahasa berikut:</p>
              <div class="d-flex flex-wrap ga-3">
                <v-btn
                  to="/products?lang=mandarin"
                  variant="outlined"
                  color="red-darken-1"
                  class="text-none font-weight-bold rounded-xl"
                  prepend-icon="mdi-translate"
                >
                  Bahasa Mandarin (HSK &amp; Kerja)
                </v-btn>
                <v-btn
                  to="/products?lang=korean"
                  variant="outlined"
                  color="blue-darken-2"
                  class="text-none font-weight-bold rounded-xl"
                  prepend-icon="mdi-bullseye-arrow"
                >
                  Bahasa Korea (EPS-TOPIK)
                </v-btn>
                <v-btn
                  to="/products?lang=english"
                  variant="outlined"
                  color="amber-darken-3"
                  class="text-none font-weight-bold rounded-xl"
                  prepend-icon="mdi-account-voice"
                >
                  Bahasa Inggris (Speaking &amp; TOEFL)
                </v-btn>
              </div>
            </v-card>
          </v-col>

          <!-- Right Column: Pricing & Sticky Registration Card -->
          <v-col cols="12" lg="4">
            <div class="sticky-sidebar">
              <v-card class="pa-6 rounded-3xl border bg-white shadow-md">
                <div class="text-caption font-weight-bold text-uppercase text-grey mb-1">Investasi Pelatihan</div>
                <div class="d-flex align-baseline ga-2 mb-2">
                  <span class="text-caption text-grey font-weight-bold">Mulai dari</span>
                  <span class="text-h4 font-weight-black text-secondary">{{ formatRupiah(service.priceStarting) }}</span>
                </div>
                <div class="text-caption text-grey-darken-1 mb-5 font-italic">
                  *{{ service.priceNote }}
                </div>

                <v-divider class="mb-5"></v-divider>

                <!-- Ringkasan Layanan -->
                <div class="d-flex flex-column ga-3 mb-6">
                  <div class="d-flex justify-space-between text-body-2">
                    <span class="text-grey">Format Kelas:</span>
                    <strong class="text-secondary">{{ service.name }}</strong>
                  </div>
                  <div class="d-flex justify-space-between text-body-2">
                    <span class="text-grey">Kapasitas:</span>
                    <strong class="text-secondary">{{ service.person }}</strong>
                  </div>
                  <div class="d-flex justify-space-between text-body-2">
                    <span class="text-grey">Durasi Sesi:</span>
                    <strong class="text-secondary">{{ service.sessionLength }}</strong>
                  </div>
                  <div class="d-flex justify-space-between text-body-2">
                    <span class="text-grey">Lokasi Belajar:</span>
                    <strong class="text-secondary text-right" style="max-width: 170px;">{{ service.location }}</strong>
                  </div>
                </div>

                <v-btn
                  block
                  size="large"
                  color="accent"
                  class="text-none font-weight-bold text-white mb-3 shadow-sm"
                  prepend-icon="mdi-whatsapp"
                  :href="consultationWaLink"
                  target="_blank"
                >
                  Daftar {{ service.name }}
                </v-btn>

                <v-btn
                  block
                  size="large"
                  variant="outlined"
                  color="primary"
                  class="text-none font-weight-bold mb-4"
                  to="/tryout"
                >
                  Ikuti Tes Level Online Gratis
                </v-btn>

                <div class="pa-3 rounded-2xl bg-grey-lighten-5 border text-center">
                  <div class="d-flex align-center justify-center ga-1 text-caption text-grey-darken-2 font-weight-medium">
                    <v-icon icon="mdi-shield-check" color="teal" size="18"></v-icon>
                    <span>Garansi tutor tersertifikasi &amp; berpengalaman</span>
                  </div>
                </div>
              </v-card>

              <!-- Navigasi ke Layanan Lainnya -->
              <v-card class="pa-5 rounded-3xl border bg-white shadow-sm mt-4">
                <div class="text-subtitle-2 font-weight-bold text-secondary mb-3">Format Layanan Lainnya:</div>
                <div class="d-flex flex-column ga-2">
                  <router-link
                    v-for="other in otherServices"
                    :key="other.id"
                    :to="`/services/${other.id}`"
                    class="other-service-item pa-2 px-3 rounded-xl d-flex align-center justify-space-between text-decoration-none"
                  >
                    <div class="d-flex align-center ga-2">
                      <v-icon :icon="other.icon" :color="other.color" size="18"></v-icon>
                      <span class="text-body-2 font-weight-bold text-secondary">{{ other.name }}</span>
                    </div>
                    <v-icon icon="mdi-chevron-right" size="18" color="grey"></v-icon>
                  </router-link>
                </div>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { classModes, officialPricingSystem } from '../data/wordishData'

const route = useRoute()
const pricingLangTab = ref('mandarin')

// Cari data format layanan berdasarkan slug URL :id
const service = computed(() => {
  const serviceId = route.params.id
  return classModes.find(m => m.id === serviceId) || classModes[0]
})

// Layanan lainnya untuk navigasi cepat
const otherServices = computed(() => {
  return classModes.filter(m => m.id !== service.value.id)
})

// Breadcrumbs
const breadcrumbItems = computed(() => [
  { title: 'Beranda', disabled: false, href: '/' },
  { title: 'Program & Layanan', disabled: false, href: '/products' },
  { title: service.value ? service.value.name : 'Detail Layanan', disabled: true }
])

// Format rupiah
const formatRupiah = (val) => {
  if (!val) return 'Rp 0'
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(val)
}

// Deteksi apakah baris rate cocok dengan format layanan yang sedang dilihat
const isCurrentService = (rateServiceName) => {
  if (!service.value) return false
  const sName = service.value.name.toLowerCase()
  const rName = rateServiceName.toLowerCase()
  return rName.includes(sName) || sName.includes(rName)
}

// Link WhatsApp konsultasi terisi pesan dinamis
const consultationWaLink = computed(() => {
  const serviceName = service.value ? service.value.name : 'Kursus'
  const text = encodeURIComponent(`Halo Wordish, saya tertarik dengan informasi dan pendaftaran format ${serviceName}. Mohon info jadwal dan persyaratannya.`)
  return `https://wa.me/6287864734308?text=${text}`
})
</script>

<style scoped>
.service-hero {
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.stage-badge {
  min-width: 100px;
}

.sticky-sidebar {
  position: sticky;
  top: 90px;
}

.other-service-item {
  background-color: #fafafa;
  transition: all 0.2s ease;
}

.other-service-item:hover {
  background-color: #f0f4ff;
  transform: translateX(3px);
}
</style>
