<template>
  <div class="py-10 bg-grey-lighten-5">
    <v-container class="max-width-xl px-4">
      <!-- Breadcrumb & Header -->
      <div class="mb-8">
        <v-breadcrumbs
          :items="[
            { title: 'Beranda', disabled: false, href: '/' },
            { title: 'Katalog Paket Belajar', disabled: true }
          ]"
          class="pa-0 mb-3 text-caption"
        ></v-breadcrumbs>
        <h1 class="text-h4 font-weight-bold text-secondary mb-2">
          Pilihan Paket Belajar & Bimbingan Ruangguru
        </h1>
        <p class="text-body-1 text-grey-darken-1">
          Temukan program bimbingan belajar terbaik yang dirancang khusus sesuai kurikulum dan target impian akademikmu.
        </p>
      </div>

      <!-- Filters & Search Toolbar -->
      <v-card class="pa-4 rounded-2xl border mb-8 bg-white shadow-sm">
        <v-row align="center">
          <!-- Search input -->
          <v-col cols="12" md="4">
            <v-text-field
              v-model="searchQuery"
              placeholder="Cari paket belajar, SNBT, SD, SMA..."
              prepend-inner-icon="mdi-magnify"
              density="compact"
              hide-details
              rounded="lg"
            ></v-text-field>
          </v-col>

          <!-- Jenjang Dropdown -->
          <v-col cols="6" md="4">
            <v-select
              v-model="selectedJenjang"
              :items="jenjangOptions"
              item-title="label"
              item-value="value"
              density="compact"
              hide-details
              prepend-inner-icon="mdi-school"
              rounded="lg"
            ></v-select>
          </v-col>

          <!-- Product Type Dropdown -->
          <v-col cols="6" md="4">
            <v-select
              v-model="selectedProduct"
              :items="productFilterOptions"
              item-title="label"
              item-value="value"
              density="compact"
              hide-details
              prepend-inner-icon="mdi-shape"
              rounded="lg"
            ></v-select>
          </v-col>
        </v-row>
      </v-card>

      <!-- Active Filters Pill Counter -->
      <div class="d-flex justify-space-between align-center mb-6">
        <div class="text-body-2 font-weight-bold text-secondary">
          Menampilkan <span class="text-primary">{{ filteredCatalog.length }}</span> Paket Pilihan
        </div>
        <v-btn
          v-if="searchQuery || selectedJenjang !== 'all' || selectedProduct !== 'all'"
          variant="text"
          size="small"
          color="error"
          prepend-icon="mdi-refresh"
          @click="resetFilters"
        >
          Reset Filter
        </v-btn>
      </div>

      <!-- Course Cards Grid -->
      <v-row v-if="filteredCatalog.length > 0">
        <v-col
          v-for="course in filteredCatalog"
          :key="course.id"
          cols="12"
          md="6"
          lg="4"
        >
          <v-card class="h-100 rounded-2xl border bg-white pa-6 d-flex flex-column justify-space-between shadow-sm rg-card-border">
            <div>
              <div class="d-flex align-center justify-space-between mb-2">
                <v-chip size="small" :color="course.badgeColor || 'primary'" class="font-weight-bold">
                  {{ course.gradeLabel }}
                </v-chip>
                <v-chip size="x-small" variant="outlined" color="secondary" class="font-weight-bold">
                  {{ course.category }}
                </v-chip>
              </div>

              <div class="text-h6 font-weight-bold text-secondary mb-1">
                {{ course.title }}
              </div>

              <div class="d-flex align-center text-caption text-grey mb-3">
                <v-icon icon="mdi-account-group" size="small" class="mr-1"></v-icon>
                {{ course.studentsCount }} siswa terdaftar • {{ course.period }}
              </div>

              <!-- Price Box -->
              <div class="bg-grey-lighten-5 pa-4 rounded-xl mb-4 border">
                <div class="text-caption text-grey text-decoration-line-through">
                  {{ formatRupiah(course.originalPrice) }}
                </div>
                <div class="d-flex align-baseline ga-2">
                  <span class="text-h5 font-weight-extrabold text-primary">
                    {{ formatRupiah(course.discountedPrice) }}
                  </span>
                  <v-chip size="x-small" color="error" class="font-weight-bold">
                    HEMAT {{ Math.round((1 - course.discountedPrice / course.originalPrice) * 100) }}%
                  </v-chip>
                </div>
              </div>

              <!-- Facilities Checklist -->
              <div class="text-caption font-weight-bold text-secondary mb-2">Fasilitas Termasuk:</div>
              <div class="d-flex flex-column ga-2 mb-6">
                <div
                  v-for="(f, fIdx) in course.features"
                  :key="fIdx"
                  class="d-flex align-start text-caption text-grey-darken-2"
                >
                  <v-icon icon="mdi-check-circle-outline" color="teal" size="16" class="mr-2 mt-1"></v-icon>
                  <span>{{ f }}</span>
                </div>
              </div>
            </div>

            <!-- Actions -->
            <div class="d-flex ga-2 pt-3 border-t">
              <v-btn
                variant="outlined"
                color="primary"
                class="text-none flex-grow-1 font-weight-bold"
                @click="cartStore.addToCart(course)"
              >
                + Keranjang
              </v-btn>
              <v-btn
                color="accent"
                class="text-none flex-grow-1 font-weight-bold text-white shadow-sm"
                @click="directCheckout(course)"
              >
                Beli Sekarang
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <!-- Empty State -->
      <v-card v-else class="text-center pa-12 rounded-2xl border bg-white">
        <v-icon icon="mdi-book-search-outline" size="64" color="grey" class="mb-3"></v-icon>
        <div class="text-h6 font-weight-bold text-secondary mb-1">
          Tidak Ada Paket yang Sesuai
        </div>
        <p class="text-body-2 text-grey mb-4">
          Coba ganti kata kunci pencarian atau bersihkan filter jenjang yang aktif.
        </p>
        <v-btn color="primary" class="text-none font-weight-bold" @click="resetFilters">
          Tampilkan Semua Paket
        </v-btn>
      </v-card>

      <!-- Comparison Table Feature -->
      <div class="mt-16">
        <div class="text-center mb-8">
          <v-chip size="small" color="primary" class="font-weight-bold mb-2">
            PANDUAN MEMILIH
          </v-chip>
          <h2 class="text-h5 font-weight-bold text-secondary">
            Perbandingan Layanan Produk Ruangguru
          </h2>
        </div>

        <v-card class="rounded-2xl border overflow-hidden shadow-sm bg-white">
          <v-table>
            <thead>
              <tr class="bg-grey-lighten-4">
                <th class="text-left font-weight-bold text-secondary">Fitur Pembelajaran</th>
                <th class="text-center font-weight-bold text-primary">ruangbelajar</th>
                <th class="text-center font-weight-bold text-secondary">Brain Academy Online</th>
                <th class="text-center font-weight-bold text-accent">English Academy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="font-weight-medium">Video Animasi Belajar Belasan Ribu</td>
                <td class="text-center"><v-icon icon="mdi-check-circle" color="success"></v-icon></td>
                <td class="text-center"><v-icon icon="mdi-check-circle" color="success"></v-icon></td>
                <td class="text-center text-grey">-</td>
              </tr>
              <tr>
                <td class="font-weight-medium">Live Teaching Interaktif Terjadwal</td>
                <td class="text-center text-grey">-</td>
                <td class="text-center"><v-icon icon="mdi-check-circle" color="success"></v-icon> (Tiap Hari)</td>
                <td class="text-center"><v-icon icon="mdi-check-circle" color="success"></v-icon> (Native & Lokal)</td>
              </tr>
              <tr>
                <td class="font-weight-medium">Klinik PR Privat Tanya Soal Tatap Maya</td>
                <td class="text-center text-grey">-</td>
                <td class="text-center"><v-icon icon="mdi-check-circle" color="success"></v-icon></td>
                <td class="text-center text-grey">-</td>
              </tr>
              <tr>
                <td class="font-weight-medium">Modul Buku Cetak Fisik ke Rumah</td>
                <td class="text-center text-grey">E-Book Only</td>
                <td class="text-center"><v-icon icon="mdi-check-circle" color="success"></v-icon></td>
                <td class="text-center"><v-icon icon="mdi-check-circle" color="success"></v-icon></td>
              </tr>
              <tr>
                <td class="font-weight-medium">Tryout IRT Standar Nasional SNBT</td>
                <td class="text-center"><v-icon icon="mdi-check-circle" color="success"></v-icon></td>
                <td class="text-center"><v-icon icon="mdi-check-circle" color="success"></v-icon> (Prioritas)</td>
                <td class="text-center text-grey">-</td>
              </tr>
              <tr>
                <td class="font-weight-medium">Konseling Jurusan & Psikotes Minat Bakat</td>
                <td class="text-center text-grey">-</td>
                <td class="text-center"><v-icon icon="mdi-check-circle" color="success"></v-icon></td>
                <td class="text-center text-grey">-</td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { courses, jenjangOptions } from '../data/courses'
import { useCartStore } from '../stores/cart'

const route = useRoute()
const router = useRouter()
const cartStore = useCartStore()

const searchQuery = ref('')
const selectedJenjang = ref('all')
const selectedProduct = ref('all')

const productFilterOptions = [
  { value: 'all', label: 'Semua Produk' },
  { value: 'ruangbelajar', label: 'ruangbelajar' },
  { value: 'brainacademy', label: 'Brain Academy' },
  { value: 'englishacademy', label: 'English Academy' },
  { value: 'skillacademy', label: 'Skill Academy' }
]

onMounted(() => {
  if (route.query.grade) {
    selectedJenjang.value = route.query.grade
  }
  if (route.query.category) {
    selectedProduct.value = route.query.category
  }
})

const filteredCatalog = computed(() => {
  return courses.filter(item => {
    const matchesSearch = !searchQuery.value ||
      item.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.gradeLabel.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.value.toLowerCase())

    const matchesJenjang = selectedJenjang.value === 'all' || item.jenjang === selectedJenjang.value
    const matchesProduct = selectedProduct.value === 'all' || item.product === selectedProduct.value

    return matchesSearch && matchesJenjang && matchesProduct
  })
})

function resetFilters() {
  searchQuery.value = ''
  selectedJenjang.value = 'all'
  selectedProduct.value = 'all'
}

function formatRupiah(val) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(val || 0)
}

function directCheckout(course) {
  cartStore.addToCart(course)
  router.push('/checkout')
}
</script>
