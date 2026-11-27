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
              <h1 class="text-h4 text-sm-h3 font-weight-extrabold mb-3 text-white letter-spacing-tight">
                {{ service.name }}
              </h1>

              <p class="text-body-1 text-white opacity-95 mb-6" style="line-height: 1.7; max-width: 600px;">
                {{ service.fullOverview }}
              </p>

              <div class="d-flex flex-wrap ga-3">
                <v-btn
                  size="large"
                  color="#002D62"
                  class="text-none font-weight-bold text-white px-6 shadow-sm navy-cta-btn"
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
          <!-- Left Column: Pricing -->
          <v-col cols="12" lg="8">
            <!-- Box: Tabel Sistem Harga Resmi Berdasarkan Bahasa -->
            <v-card class="pa-6 rounded-3xl border bg-white mb-8 shadow-sm">
              <div class="d-flex align-center justify-space-between flex-wrap ga-2 mb-4">
                <div>
                  <h2 class="text-h5 font-weight-bold text-secondary mb-0">
                    Rincian Biaya
                  </h2>
                </div>
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
                  <v-table hover class="rounded-0 overflow-hidden">
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
                        v-for="(rate, rIdx) in filteredRates.mandarin"
                        :key="rIdx"
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
                      <tr v-if="filteredRates.mandarin.length === 0">
                        <td colspan="4" class="text-center py-6 text-grey text-caption">
                          Tidak ada daftar harga {{ service.name }} untuk Bahasa Mandarin.
                        </td>
                      </tr>
                    </tbody>
                  </v-table>
                </v-window-item>

                <!-- Tab English -->
                <v-window-item value="english">
                  <v-table hover class="rounded-0 overflow-hidden">
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
                        v-for="(rate, rIdx) in filteredRates.english"
                        :key="rIdx"
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
                      <tr v-if="filteredRates.english.length === 0">
                        <td colspan="4" class="text-center py-6 text-grey text-caption">
                          Tidak ada daftar harga {{ service.name }} untuk Bahasa Inggris.
                        </td>
                      </tr>
                    </tbody>
                  </v-table>
                </v-window-item>

                <!-- Tab Korea -->
                <v-window-item value="korean">
                  <v-table hover class="rounded-0 overflow-hidden">
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
                        v-for="(rate, rIdx) in filteredRates.korean"
                        :key="rIdx"
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
                      <tr v-if="filteredRates.korean.length === 0">
                        <td colspan="4" class="text-center py-6 text-grey text-caption">
                          Tidak ada daftar harga {{ service.name }} untuk Bahasa Korea.
                        </td>
                      </tr>
                    </tbody>
                  </v-table>
                </v-window-item>
              </v-window>
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
                  color="#002D62"
                  class="text-none font-weight-bold text-white mb-3 shadow-sm navy-cta-btn"
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

                <div class="pa-2 px-3 rounded-2xl bg-grey-lighten-5 border text-center">
                  <div class="d-flex align-center justify-center ga-1 text-caption font-italic text-grey-darken-2" style="font-size: 0.72rem !important; white-space: nowrap;">
                    <v-icon icon="mdi-shield-check" color="teal" size="15" class="flex-shrink-0"></v-icon>
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
  const sId = (service.value.id || '').toLowerCase()
  const sName = (service.value.name || '').toLowerCase()
  const rName = (rateServiceName || '').toLowerCase()

  if (sId === 'regular') {
    return rName.includes('regular')
  }
  if (sId === 'semi-private') {
    return rName.includes('semi-private') || rName.includes('semi private')
  }
  if (sId === 'private') {
    // Private tapi bukan semi-private
    return (rName.includes('private') || rName.includes('privat')) && !rName.includes('semi')
  }
  if (sId === 'online') {
    return rName.includes('online')
  }
  return rName.includes(sName) || sName.includes(rName)
}

// Hanya tampilkan list harga sesuai format produk yang sedang aktif/dipilih
const filteredRates = computed(() => {
  return {
    mandarin: officialPricingSystem.mandarin.rates.filter(rate => isCurrentService(rate.service)),
    english: officialPricingSystem.english.rates.filter(rate => isCurrentService(rate.service)),
    korean: officialPricingSystem.korean.rates.filter(rate => isCurrentService(rate.service))
  }
})

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

.navy-cta-btn {
  background-color: #002D62 !important;
  color: #ffffff !important;
  box-shadow: 0 4px 14px rgba(0, 45, 98, 0.3) !important;
  transition: transform 0.2s ease, box-shadow 0.2s ease !important;
}

.navy-cta-btn:hover {
  background-color: #001f44 !important;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 45, 98, 0.45) !important;
}
</style>
