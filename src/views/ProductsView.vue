<template>
  <div class="py-10 bg-grey-lighten-5">
    <v-container class="max-width-xl px-4">
      <!-- Breadcrumb & Header -->
      <div class="mb-8">
        <v-breadcrumbs
          :items="[
            { title: 'Beranda', disabled: false, href: '/' },
            { title: 'Program Bahasa Asing', disabled: true }
          ]"
          class="pa-0 mb-2 text-caption"
        ></v-breadcrumbs>
        <h1 class="text-h4 font-weight-bold text-secondary mb-2">
          Program Pelatihan Bahasa Asing Wordish
        </h1>
        <p class="text-body-1 text-grey-darken-1">
          Pilih pelatihan spesialis Bahasa Mandarin, Bahasa Korea (EPS-TOPIK), atau Bahasa Inggris sesuai target kariermu.
        </p>
      </div>

      <!-- SECTION: TABEL SISTEM HARGA RESMI WORDISH -->
      <v-card class="pa-6 pa-md-8 rounded-3xl border mb-10 bg-white shadow-sm">
        <div class="d-flex align-center justify-space-between flex-wrap ga-3 mb-4">
          <div>
            <div class="text-overline font-weight-bold text-primary mb-1" style="letter-spacing: 1.5px;">Sistem Harga</div>
            <h2 class="text-h5 font-weight-bold text-secondary mb-1">
              Rincian Tarif Format Belajar (Mandarin, English &amp; Korea)
            </h2>
            <p class="text-body-2 text-grey-darken-1 mb-0">
              Pilihan fleksibel: Regular Class, Semi-Private, hingga Private (Wordish Center, Home Visit, &amp; Online).
            </p>
          </div>
          <v-btn
            color="success"
            variant="flat"
            class="text-none font-weight-bold text-white shadow-sm"
            prepend-icon="mdi-whatsapp"
            href="https://wa.me/6287864734308?text=Halo%20Wordish,%20saya%20ingin%20konsultasi%20biaya%20dan%20jadwal%20kelas"
            target="_blank"
          >
            Konsultasi Biaya via WA
          </v-btn>
        </div>

        <!-- Tab Bahasa Sistem Harga -->
        <v-tabs
          v-model="pricingActiveTab"
          color="primary"
          class="border-b mb-5"
          align-tabs="start"
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

        <v-window v-model="pricingActiveTab">
          <!-- Window Mandarin -->
          <v-window-item value="mandarin">
            <v-table hover class="rounded-2xl border overflow-hidden">
              <thead class="bg-grey-lighten-4">
                <tr>
                  <th class="font-weight-bold text-secondary py-3">Layanan &amp; Format</th>
                  <th class="font-weight-bold text-secondary py-3">Lokasi</th>
                  <th class="font-weight-bold text-secondary py-3">Biaya</th>
                  <th class="font-weight-bold text-secondary py-3">Ketentuan Sesi</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(rate, idx) in officialPricingSystem.mandarin.rates" :key="idx">
                  <td class="py-3">
                    <div class="font-weight-bold text-secondary">{{ rate.service }}</div>
                    <div class="text-caption text-grey">{{ rate.format }}</div>
                  </td>
                  <td class="text-caption text-grey-darken-2 py-3">
                    <v-icon icon="mdi-map-marker-outline" size="14" class="mr-1 text-grey"></v-icon>
                    {{ rate.location }}
                  </td>
                  <td class="py-3">
                    <span class="font-weight-black text-primary text-subtitle-1">{{ rate.priceDisplay }}</span>
                    <span class="text-caption text-grey"> {{ rate.unit }}</span>
                  </td>
                  <td class="py-3">
                    <div class="text-caption text-grey-darken-2 font-weight-medium">{{ rate.term }}</div>
                    <v-chip size="x-small" color="primary" variant="tonal" class="mt-1 font-weight-bold">
                      {{ rate.minOrder }}
                    </v-chip>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-window-item>

          <!-- Window English -->
          <v-window-item value="english">
            <v-table hover class="rounded-2xl border overflow-hidden">
              <thead class="bg-grey-lighten-4">
                <tr>
                  <th class="font-weight-bold text-secondary py-3">Layanan &amp; Format</th>
                  <th class="font-weight-bold text-secondary py-3">Lokasi</th>
                  <th class="font-weight-bold text-secondary py-3">Biaya</th>
                  <th class="font-weight-bold text-secondary py-3">Ketentuan Sesi</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(rate, idx) in officialPricingSystem.english.rates" :key="idx">
                  <td class="py-3">
                    <div class="font-weight-bold text-secondary">{{ rate.service }}</div>
                    <div class="text-caption text-grey">{{ rate.format }}</div>
                  </td>
                  <td class="text-caption text-grey-darken-2 py-3">
                    <v-icon icon="mdi-map-marker-outline" size="14" class="mr-1 text-grey"></v-icon>
                    {{ rate.location }}
                  </td>
                  <td class="py-3">
                    <span class="font-weight-black text-amber-darken-3 text-subtitle-1">{{ rate.priceDisplay }}</span>
                    <span class="text-caption text-grey"> {{ rate.unit }}</span>
                  </td>
                  <td class="py-3">
                    <div class="text-caption text-grey-darken-2 font-weight-medium">{{ rate.term }}</div>
                    <v-chip size="x-small" color="amber-darken-3" variant="tonal" class="mt-1 font-weight-bold">
                      {{ rate.minOrder }}
                    </v-chip>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-window-item>

          <!-- Window Korea -->
          <v-window-item value="korean">
            <v-table hover class="rounded-2xl border overflow-hidden">
              <thead class="bg-grey-lighten-4">
                <tr>
                  <th class="font-weight-bold text-secondary py-3">Layanan &amp; Format</th>
                  <th class="font-weight-bold text-secondary py-3">Lokasi</th>
                  <th class="font-weight-bold text-secondary py-3">Biaya</th>
                  <th class="font-weight-bold text-secondary py-3">Ketentuan Sesi</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(rate, idx) in officialPricingSystem.korean.rates" :key="idx">
                  <td class="py-3">
                    <div class="font-weight-bold text-secondary">{{ rate.service }}</div>
                    <div class="text-caption text-grey">{{ rate.format }}</div>
                  </td>
                  <td class="text-caption text-grey-darken-2 py-3">
                    <v-icon icon="mdi-map-marker-outline" size="14" class="mr-1 text-grey"></v-icon>
                    {{ rate.location }}
                  </td>
                  <td class="py-3">
                    <span class="font-weight-black text-blue-darken-2 text-subtitle-1">{{ rate.priceDisplay }}</span>
                    <span class="text-caption text-grey"> {{ rate.unit }}</span>
                  </td>
                  <td class="py-3">
                    <div class="text-caption text-grey-darken-2 font-weight-medium">{{ rate.term }}</div>
                    <v-chip size="x-small" color="blue-darken-2" variant="tonal" class="mt-1 font-weight-bold">
                      {{ rate.minOrder }}
                    </v-chip>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-window-item>
        </v-window>
      </v-card>

      <!-- Language Filter Toolbar -->
      <v-card class="pa-4 rounded-2xl border mb-8 bg-white shadow-sm">
        <v-row align="center">
          <v-col cols="12" md="6">
            <v-text-field
              v-model="searchQuery"
              placeholder="Cari program, HSK, EPS-TOPIK, Speaking, IELTS..."
              prepend-inner-icon="mdi-magnify"
              density="compact"
              hide-details
              rounded="lg"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-btn-toggle
              v-model="selectedLanguage"
              color="primary"
              mandatory
              rounded="lg"
              class="w-100 d-flex"
            >
              <v-btn value="all" class="text-none flex-grow-1 font-weight-bold">Semua</v-btn>
              <v-btn value="mandarin" class="text-none flex-grow-1 font-weight-bold">Mandarin</v-btn>
              <v-btn value="korean" class="text-none flex-grow-1 font-weight-bold">Korea</v-btn>
              <v-btn value="english" class="text-none flex-grow-1 font-weight-bold">Inggris</v-btn>
            </v-btn-toggle>
          </v-col>
        </v-row>
      </v-card>

      <!-- Program Cards Grid -->
      <v-row v-if="filteredPrograms.length > 0">
        <v-col
          v-for="prog in filteredPrograms"
          :key="prog.id"
          cols="12"
          md="6"
          lg="4"
        >
          <v-card class="h-100 pa-6 rounded-3xl border bg-white d-flex flex-column justify-space-between shadow-sm rg-card-border">
            <div>
              <div class="text-caption font-weight-medium text-grey mb-1">
                {{ prog.level }}
              </div>

              <div class="text-h6 font-weight-bold text-secondary mb-1">
                {{ prog.title }}
              </div>
              <div class="text-caption text-grey mb-3">
                <v-icon icon="mdi-clock-outline" size="small" class="mr-1"></v-icon>
                {{ prog.duration }} • {{ prog.mode }}
              </div>

              <p class="text-body-2 text-grey-darken-2 mb-4" style="line-height: 1.5;">
                {{ prog.summary }}
              </p>

              <!-- Price Box -->
              <div class="bg-grey-lighten-5 pa-4 rounded-2xl mb-4 border">
                <div class="text-caption text-grey text-decoration-line-through">
                  {{ formatRupiah(prog.originalPrice) }}
                </div>
                <div class="d-flex align-baseline ga-2">
                  <span class="text-h5 font-weight-extrabold text-primary">
                    {{ formatRupiah(prog.price) }}
                  </span>
                  <span class="text-caption text-error font-weight-bold">
                    Hemat {{ prog.discountPercent }}%
                  </span>
                </div>
              </div>

              <!-- Features list -->
              <div class="text-caption font-weight-bold text-secondary mb-2">Materi & Fasilitas:</div>
              <div class="d-flex flex-column ga-2 mb-6">
                <div
                  v-for="(feat, fIdx) in prog.features"
                  :key="fIdx"
                  class="d-flex align-start text-caption text-grey-darken-2"
                >
                  <v-icon icon="mdi-check" color="teal" size="16" class="mr-2 mt-1"></v-icon>
                  <span>{{ feat }}</span>
                </div>
              </div>
            </div>

            <!-- Actions -->
            <div>
              <div class="text-caption text-grey font-weight-medium mb-3 d-flex align-center">
                <v-icon icon="mdi-calendar-check" size="small" class="mr-1 text-primary"></v-icon>
                {{ prog.nextBatch }}
              </div>
              <div class="d-flex ga-2">
                <v-btn
                  variant="outlined"
                  color="primary"
                  class="text-none flex-grow-1 font-weight-bold"
                  @click="cartStore.addToCart(prog)"
                >
                  + Keranjang
                </v-btn>
                <v-btn
                  color="accent"
                  class="text-none flex-grow-1 font-weight-bold text-white shadow-sm"
                  @click="enrollDirect(prog)"
                >
                  Daftar Kelas
                </v-btn>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <!-- Empty State -->
      <v-card v-else class="text-center pa-12 rounded-2xl border bg-white">
        <v-icon icon="mdi-book-search-outline" size="64" color="grey" class="mb-3"></v-icon>
        <div class="text-h6 font-weight-bold text-secondary mb-1">
          Program Tidak Ditemukan
        </div>
        <p class="text-body-2 text-grey mb-4">
          Coba ganti kata kunci pencarian atau pilih salah satu dari 3 bahasa di atas.
        </p>
        <v-btn color="primary" class="text-none font-weight-bold" @click="resetSearch">
          Tampilkan Semua Program
        </v-btn>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useClassesStore } from '../stores/classes'
import { useCartStore } from '../stores/cart'
import { officialPricingSystem } from '../data/wordishData'

const route = useRoute()
const router = useRouter()
const classesStore = useClassesStore()
const cartStore = useCartStore()

const searchQuery = ref('')
const selectedLanguage = ref('all')
const pricingActiveTab = ref('mandarin')

onMounted(() => {
  if (route.query.lang) {
    selectedLanguage.value = route.query.lang
  }
})

const filteredPrograms = computed(() => {
  return classesStore.activePrograms.filter(item => {
    const matchesSearch = !searchQuery.value ||
      item.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.level.toLowerCase().includes(searchQuery.value.toLowerCase())

    const matchesLang = selectedLanguage.value === 'all' || item.languageId === selectedLanguage.value

    return matchesSearch && matchesLang
  })
})

function resetSearch() {
  searchQuery.value = ''
  selectedLanguage.value = 'all'
}

function formatRupiah(val) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(val || 0)
}

function enrollDirect(prog) {
  cartStore.addToCart(prog)
  router.push('/checkout')
}
</script>
