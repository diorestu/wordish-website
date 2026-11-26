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
          Program Pelatihan Bahasa Asing LPK Wordish
        </h1>
        <p class="text-body-1 text-grey-darken-1">
          Pilih pelatihan spesialis Bahasa Mandarin, Bahasa Korea (EPS-TOPIK), atau Bahasa Inggris sesuai target kariermu.
        </p>
      </div>

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

const route = useRoute()
const router = useRouter()
const classesStore = useClassesStore()
const cartStore = useCartStore()

const searchQuery = ref('')
const selectedLanguage = ref('all')

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
