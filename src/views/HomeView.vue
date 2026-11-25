<template>
  <div>
    <!-- HERO SECTION -->
    <section class="rg-hero-section position-relative pt-12 pb-16 overflow-hidden">
      <div class="hero-bg-shapes"></div>
      <v-container class="max-width-xl px-4 position-relative z-1">
        <v-row align="center">
          <!-- Left Column: Copywriting & CTAs -->
          <v-col cols="12" lg="7" class="pr-lg-8">
            <div class="d-inline-flex align-center bg-white px-3 py-1 rounded-pill shadow-sm border mb-4">
              <v-icon icon="mdi-trophy" color="accent" size="18" class="mr-2"></v-icon>
              <span class="text-caption font-weight-bold text-secondary">
                Bimbel No. 1 di Indonesia • Dipercaya 22+ Juta Siswa
              </span>
            </div>

            <h1 class="text-h3 text-md-h2 font-weight-extrabold text-secondary mb-4" style="line-height: 1.15; letter-spacing: -1px;">
              Raih Nilai Tertinggi & Lolos Kampus Impian Bersama <span class="text-primary">Ruangguru</span>
            </h1>

            <p class="text-body-1 text-grey-darken-2 mb-6" style="line-height: 1.6; max-width: 620px;">
              Bimbingan belajar terlengkap dengan video animasi adaptif, Master Teacher lulusan PTN ternama, klinik PR interaktif, dan ribuan latihan soal standar ujian nasional.
            </p>

            <!-- Jenjang Quick Selector Pills -->
            <div class="mb-6">
              <div class="text-caption font-weight-bold text-grey-darken-1 mb-2 text-uppercase">Pilih Jenjang Sekolahmu:</div>
              <div class="d-flex flex-wrap ga-2">
                <v-btn
                  v-for="item in jenjangQuickList"
                  :key="item.value"
                  :color="selectedJenjang === item.value ? 'primary' : 'white'"
                  :variant="selectedJenjang === item.value ? 'flat' : 'outlined'"
                  rounded="pill"
                  size="small"
                  class="text-none font-weight-bold text-body-2"
                  @click="setJenjang(item.value)"
                >
                  <v-icon start :icon="item.icon" size="18"></v-icon>
                  {{ item.label }}
                </v-btn>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="d-flex flex-wrap align-center ga-3 mb-8">
              <v-btn
                color="accent"
                size="x-large"
                class="text-none font-weight-bold px-8 text-white shadow-lg"
                to="/products"
              >
                Pilih Paket Belajar
                <v-icon icon="mdi-arrow-right" class="ml-2"></v-icon>
              </v-btn>

              <v-btn
                variant="outlined"
                color="primary"
                size="x-large"
                class="text-none font-weight-bold px-6 bg-white"
                to="/roboguru"
              >
                <v-icon icon="mdi-robot" class="mr-2"></v-icon>
                Coba Roboguru AI Gratis
              </v-btn>
            </div>

            <!-- Trust Highlights Badges -->
            <div class="d-flex flex-wrap align-center ga-4 pt-2 border-t">
              <div class="d-flex align-center">
                <v-icon icon="mdi-check-decagram" color="success" size="20" class="mr-1"></v-icon>
                <span class="text-caption font-weight-bold text-secondary">Kurikulum Merdeka 2026</span>
              </div>
              <div class="d-flex align-center">
                <v-icon icon="mdi-shield-check" color="primary" size="20" class="mr-1"></v-icon>
                <span class="text-caption font-weight-bold text-secondary">Garansi Lolos & Uang Kembali</span>
              </div>
              <div class="d-flex align-center">
                <v-icon icon="mdi-star" color="amber-darken-2" size="20" class="mr-1"></v-icon>
                <span class="text-caption font-weight-bold text-secondary">Rating 4.8★ (1.2M Ulasan)</span>
              </div>
            </div>
          </v-col>

          <!-- Right Column: Interactive Hero Spotlight Card -->
          <v-col cols="12" lg="5">
            <v-card class="rounded-3xl border shadow-xl overflow-hidden bg-white pa-6 position-relative">
              <div class="d-flex align-center justify-space-between mb-4">
                <div>
                  <v-chip size="x-small" color="primary" class="font-weight-bold mb-1">
                    POPULER BULAN INI
                  </v-chip>
                  <div class="text-h6 font-weight-bold text-secondary">
                    Paket Intensif UTBK-SNBT 2026
                  </div>
                </div>
                <div class="text-right">
                  <div class="text-caption text-grey text-decoration-line-through">Rp 4.200.000</div>
                  <div class="text-h6 font-weight-bold text-primary">Rp 1.750.000</div>
                </div>
              </div>

              <!-- Feature Highlights -->
              <div class="d-flex flex-column ga-2 mb-6">
                <div class="d-flex align-center text-body-2 text-grey-darken-2">
                  <v-icon icon="mdi-check-circle" color="success" size="18" class="mr-2"></v-icon>
                  <span>20x Tryout IRT Nasional Skala SNPMB BPPP</span>
                </div>
                <div class="d-flex align-center text-body-2 text-grey-darken-2">
                  <v-icon icon="mdi-check-circle" color="success" size="18" class="mr-2"></v-icon>
                  <span>Live Teaching Harian bersama Master Teacher PTN Top</span>
                </div>
                <div class="d-flex align-center text-body-2 text-grey-darken-2">
                  <v-icon icon="mdi-check-circle" color="success" size="18" class="mr-2"></v-icon>
                  <span>Klinik Tanya PR Privat & Konseling Minat Jurusan</span>
                </div>
                <div class="d-flex align-center text-body-2 text-grey-darken-2">
                  <v-icon icon="mdi-check-circle" color="success" size="18" class="mr-2"></v-icon>
                  <span>Modul Cetak Belajar Dikirimkan Langsung ke Rumah</span>
                </div>
              </div>

              <!-- Interactive Demo Banner CTA -->
              <div class="bg-blue-lighten-5 rounded-2xl pa-4 mb-4 border d-flex align-center justify-space-between">
                <div>
                  <div class="font-weight-bold text-body-2 text-primary">Penasaran dengan cara belajarnya?</div>
                  <div class="text-caption text-grey-darken-1">Coba video player dan kuis interaktif</div>
                </div>
                <v-btn color="primary" size="small" variant="flat" to="/ruangbelajar" class="text-none font-weight-bold">
                  Buka Demo
                </v-btn>
              </div>

              <v-btn
                block
                color="accent"
                size="large"
                class="text-none font-weight-bold text-white shadow-md"
                @click="buyHeroPackage"
              >
                Ambil Promo Diskon 60% Sekarang
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- STATS STRIP SECTION -->
    <section class="bg-secondary text-white py-8 border-y">
      <v-container class="max-width-xl px-4">
        <v-row>
          <v-col
            v-for="stat in statsList"
            :key="stat.label"
            cols="6"
            md="3"
            class="text-center"
          >
            <div class="d-flex align-center justify-center mb-1">
              <v-icon :icon="stat.icon" color="accent" size="24" class="mr-2"></v-icon>
              <span class="text-h4 font-weight-extrabold text-white">{{ stat.value }}</span>
            </div>
            <div class="text-caption text-grey-lighten-1">{{ stat.label }}</div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- PRODUCT ECOSYSTEM SHOWCASE -->
    <section class="py-16 bg-surface">
      <v-container class="max-width-xl px-4">
        <div class="text-center mb-12">
          <v-chip size="small" color="primary" class="font-weight-bold mb-2">
            EKOSISTEM BELAJAR LENGKAP
          </v-chip>
          <h2 class="text-h4 font-weight-bold text-secondary mb-3">
            Pilihan Produk Unggulan Ruangguru
          </h2>
          <p class="text-body-1 text-grey-darken-1 max-width-md mx-auto">
            Dari bimbingan mandiri dengan video animasi hingga kelas interaktif tatap muka langsung bersama tutor berpengalaman.
          </p>
        </div>

        <v-row>
          <v-col
            v-for="prod in productCategories"
            :key="prod.id"
            cols="12"
            sm="6"
            lg="4"
          >
            <v-card
              class="h-100 pa-6 rounded-2xl rg-card-border cursor-pointer d-flex flex-column justify-space-between"
              @click="handleProductClick(prod.id)"
            >
              <div>
                <div class="d-flex align-center justify-space-between mb-4">
                  <v-avatar :color="prod.color" size="48" class="text-white shadow-sm">
                    <v-icon :icon="prod.icon" size="26"></v-icon>
                  </v-avatar>
                  <v-chip size="x-small" variant="tonal" :color="prod.color" class="font-weight-bold">
                    Resmi
                  </v-chip>
                </div>

                <div class="text-h6 font-weight-bold text-secondary mb-2">
                  {{ prod.name }}
                </div>
                <p class="text-body-2 text-grey-darken-1 mb-4" style="line-height: 1.5;">
                  {{ prod.desc }}
                </p>
              </div>

              <div class="d-flex align-center justify-space-between pt-4 border-t">
                <span class="text-caption font-weight-bold text-primary">Pelajari Fitur</span>
                <v-icon icon="mdi-chevron-right" color="primary" size="20"></v-icon>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- INTERACTIVE SECTION 1: ROBOGURU AI SOLVER PLAYGROUND -->
    <section class="py-16 bg-grey-lighten-5">
      <v-container class="max-width-xl px-4">
        <div class="text-center mb-10">
          <v-chip size="small" color="accent" class="font-weight-bold mb-2">
            FITUR UNGGULAN GRATIS
          </v-chip>
          <h2 class="text-h4 font-weight-bold text-secondary mb-3">
            Tanya PR & Pecahkan Soal Sulit dengan Roboguru AI
          </h2>
          <p class="text-body-1 text-grey-darken-1 max-width-md mx-auto">
            Cukup ketik pertanyaanmu atau pilih contoh soal, Roboguru akan memberikan solusi langkah demi langkah beserta rumus kilat dalam hitungan detik.
          </p>
        </div>

        <v-row justify="center">
          <v-col cols="12" lg="10">
            <RoboguruSolver />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- INTERACTIVE SECTION 2: RUANGBELAJAR VIDEO LESSON DEMO -->
    <section class="py-16 bg-surface">
      <v-container class="max-width-xl px-4">
        <div class="text-center mb-10">
          <v-chip size="small" color="primary" class="font-weight-bold mb-2">
            PREVIEW MATERI ADAPTIF
          </v-chip>
          <h2 class="text-h4 font-weight-bold text-secondary mb-3">
            Rasakan Pengalaman Belajar di ruangbelajar
          </h2>
          <p class="text-body-1 text-grey-darken-1 max-width-md mx-auto">
            Video animasi konsep, penjelasan Master Teacher, rangkuman rumus PDF, dan kuis cek pemahaman otomatis.
          </p>
        </div>

        <v-row justify="center">
          <v-col cols="12" lg="10">
            <InteractiveVideoPlayer />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- PRICING & PACKAGES SECTION -->
    <section id="kalkulator" class="py-16 bg-grey-lighten-5">
      <v-container class="max-width-xl px-4">
        <div class="text-center mb-8">
          <v-chip size="small" color="accent" class="font-weight-bold mb-2">
            HARGA HEMAT AKHIR TAHUN
          </v-chip>
          <h2 class="text-h4 font-weight-bold text-secondary mb-3">
            Pilihan Paket Belajar Terfavorit
          </h2>
          <p class="text-body-1 text-grey-darken-1 max-width-md mx-auto">
            Investasi terbaik untuk masa depan pendidikan anak. Tersedia cicilan 0% dan garansi uang kembali.
          </p>
        </div>

        <!-- Filter Jenjang Tabs -->
        <div class="d-flex justify-center mb-10">
          <v-btn-toggle
            v-model="pricingFilter"
            color="primary"
            rounded="xl"
            mandatory
            class="shadow-sm"
          >
            <v-btn value="all" class="text-none font-weight-bold px-4">Semua</v-btn>
            <v-btn value="sma" class="text-none font-weight-bold px-4">SMA</v-btn>
            <v-btn value="utbk" class="text-none font-weight-bold px-4">UTBK SNBT</v-btn>
            <v-btn value="smp" class="text-none font-weight-bold px-4">SMP</v-btn>
            <v-btn value="sd" class="text-none font-weight-bold px-4">SD</v-btn>
          </v-btn-toggle>
        </div>

        <!-- Course Cards Grid -->
        <v-row>
          <v-col
            v-for="course in filteredCourses"
            :key="course.id"
            cols="12"
            md="6"
            lg="4"
          >
            <v-card class="h-100 rounded-3xl border bg-white pa-6 d-flex flex-column justify-space-between shadow-sm position-relative overflow-hidden">
              <!-- Top Ribbon Tag -->
              <div v-if="course.popular" class="popular-ribbon">
                TERLARIS
              </div>

              <div>
                <div class="d-flex align-center justify-space-between mb-2">
                  <v-chip size="small" :color="course.badgeColor || 'primary'" class="font-weight-bold">
                    {{ course.gradeLabel }}
                  </v-chip>
                  <div class="d-flex align-center text-caption font-weight-bold text-amber-darken-3">
                    <v-icon icon="mdi-star" size="small" class="mr-1"></v-icon>
                    {{ course.rating }} ({{ course.reviewsCount.toLocaleString('id-ID') }})
                  </div>
                </div>

                <div class="text-h6 font-weight-bold text-secondary mb-1">
                  {{ course.title }}
                </div>
                <div class="text-caption text-grey mb-4">
                  <v-icon icon="mdi-calendar-clock" size="small" class="mr-1"></v-icon>
                  {{ course.period }}
                </div>

                <!-- Price Area -->
                <div class="bg-grey-lighten-5 pa-4 rounded-2xl mb-4 border">
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

                <!-- Features List -->
                <div class="text-caption font-weight-bold text-secondary mb-2">Fasilitas yang didapat:</div>
                <div class="d-flex flex-column ga-2 mb-6">
                  <div
                    v-for="(feat, fIdx) in course.features.slice(0, 4)"
                    :key="fIdx"
                    class="d-flex align-start text-caption text-grey-darken-2"
                  >
                    <v-icon icon="mdi-check" color="teal" size="16" class="mr-2 mt-1"></v-icon>
                    <span>{{ feat }}</span>
                  </div>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="d-flex ga-2">
                <v-btn
                  variant="outlined"
                  color="primary"
                  class="text-none flex-grow-1 font-weight-bold"
                  @click="cartStore.addToCart(course)"
                >
                  <v-icon icon="mdi-cart-plus" class="mr-1"></v-icon>
                  + Keranjang
                </v-btn>
                <v-btn
                  color="accent"
                  class="text-none flex-grow-1 font-weight-bold text-white shadow-sm"
                  @click="buyNow(course)"
                >
                  Beli Paket
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- TESTIMONIALS SECTION -->
    <section id="testimoni" class="py-16 bg-surface">
      <v-container class="max-width-xl px-4">
        <div class="text-center mb-12">
          <v-chip size="small" color="success" class="font-weight-bold mb-2">
            BUKTI NYATA JUARA
          </v-chip>
          <h2 class="text-h4 font-weight-bold text-secondary mb-3">
            Kisah Sukses Lolos PTN Impian
          </h2>
          <p class="text-body-1 text-grey-darken-1 max-width-md mx-auto">
            Mereka telah membuktikan efektivitas metode belajar Ruangguru. Sekarang giliranmu meraih prestasi gemilang!
          </p>
        </div>

        <v-row>
          <v-col
            v-for="testi in testimonials"
            :key="testi.id"
            cols="12"
            md="6"
            lg="3"
          >
            <v-card class="h-100 pa-5 rounded-2xl border bg-white d-flex flex-column justify-space-between shadow-sm">
              <div>
                <!-- Student Avatar & Info -->
                <div class="d-flex align-center ga-3 mb-3">
                  <v-avatar size="52" class="border">
                    <v-img :src="testi.avatar" cover></v-img>
                  </v-avatar>
                  <div>
                    <div class="font-weight-bold text-body-2 text-secondary">{{ testi.name }}</div>
                    <div class="text-caption text-grey">{{ testi.school }}</div>
                  </div>
                </div>

                <!-- Achievement Tag -->
                <v-chip size="small" color="primary" variant="tonal" class="font-weight-bold mb-3 d-flex text-wrap text-left py-1" style="height: auto;">
                  {{ testi.accepted }}
                </v-chip>

                <div class="text-caption font-weight-bold text-teal mb-2">
                  <v-icon icon="mdi-star-circle" size="small" class="mr-1"></v-icon>
                  {{ testi.score }}
                </div>

                <p class="text-caption text-grey-darken-2" style="line-height: 1.6; font-style: italic;">
                  "{{ testi.quote }}"
                </p>
              </div>

              <div class="pt-3 border-t text-caption text-grey">
                Program: <span class="font-weight-bold text-secondary">{{ testi.program }}</span>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- FAQ SECTION -->
    <section id="faq" class="py-16 bg-grey-lighten-5">
      <v-container class="max-width-lg px-4">
        <div class="text-center mb-10">
          <v-chip size="small" color="primary" class="font-weight-bold mb-2">
            BANTUAN & INFORMASI
          </v-chip>
          <h2 class="text-h4 font-weight-bold text-secondary mb-3">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p class="text-body-1 text-grey-darken-1">
            Temukan jawaban lengkap seputar berlangganan, fasilitas belajar, dan jaminan kelulusan di Ruangguru.
          </p>
        </div>

        <v-expansion-panels variant="accordion" class="rounded-2xl overflow-hidden shadow-sm">
          <v-expansion-panel
            v-for="faq in faqs"
            :key="faq.id"
            class="border-b"
          >
            <v-expansion-panel-title class="font-weight-bold text-body-1 text-secondary py-4">
              <v-icon icon="mdi-help-circle-outline" color="primary" class="mr-3"></v-icon>
              {{ faq.question }}
            </v-expansion-panel-title>
            <v-expansion-panel-text class="text-body-2 text-grey-darken-2 pb-4" style="line-height: 1.7;">
              {{ faq.answer }}
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
    </section>

    <!-- DOWNLOAD APP CALLOUT BANNER -->
    <section class="py-12 rg-gradient-primary text-white">
      <v-container class="max-width-xl px-4">
        <v-row align="center">
          <v-col cols="12" md="8">
            <h3 class="text-h4 font-weight-extrabold mb-2 text-white">
              Belajar Lebih Praktis Kapan Saja di Ponselmu
            </h3>
            <p class="text-body-1 text-white opacity-90 mb-4">
              Download aplikasi Ruangguru sekarang. Akses ribuan materi video offline, tanya soal foto Roboguru, dan ikuti Tryout Nasional gratis.
            </p>
            <div class="d-flex flex-wrap ga-3">
              <v-btn color="white" class="text-primary font-weight-bold text-none px-6" prepend-icon="mdi-google-play">
                Google Play Store
              </v-btn>
              <v-btn color="white" class="text-primary font-weight-bold text-none px-6" prepend-icon="mdi-apple">
                Apple App Store
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" md="4" class="text-center d-none d-md-block">
            <v-icon icon="mdi-cellphone-link" size="140" color="white" class="opacity-80"></v-icon>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { courses, productCategories } from '../data/courses'
import { testimonials, statsList } from '../data/testimonials'
import { faqs } from '../data/faqData'
import { useCartStore } from '../stores/cart'
import RoboguruSolver from '../components/RoboguruSolver.vue'
import InteractiveVideoPlayer from '../components/InteractiveVideoPlayer.vue'

const router = useRouter()
const cartStore = useCartStore()

const selectedJenjang = ref('all')
const pricingFilter = ref('all')

const jenjangQuickList = [
  { value: 'all', label: 'Semua Jenjang', icon: 'mdi-apps' },
  { value: 'sd', label: 'SD', icon: 'mdi-school' },
  { value: 'smp', label: 'SMP', icon: 'mdi-book-open-variant' },
  { value: 'sma', label: 'SMA', icon: 'mdi-compass-outline' },
  { value: 'utbk', label: 'UTBK SNBT', icon: 'mdi-trophy-award' }
]

function setJenjang(val) {
  selectedJenjang.value = val
  pricingFilter.value = val
}

const filteredCourses = computed(() => {
  if (pricingFilter.value === 'all') {
    return courses
  }
  return courses.filter(c => c.jenjang === pricingFilter.value)
})

function formatRupiah(val) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(val || 0)
}

function handleProductClick(catId) {
  if (catId === 'roboguru') router.push('/roboguru')
  else if (catId === 'ruanguji') router.push('/tryout')
  else if (catId === 'ruangbelajar') router.push('/ruangbelajar')
  else router.push({ path: '/products', query: { category: catId } })
}

function buyHeroPackage() {
  const heroPkg = courses.find(c => c.id === 'utbk-intensif-snbt') || courses[0]
  cartStore.addToCart(heroPkg)
  router.push('/checkout')
}

function buyNow(course) {
  cartStore.addToCart(course)
  router.push('/checkout')
}
</script>

<style scoped>
.rg-hero-section {
  background: linear-gradient(180deg, #F0F9FF 0%, #FFFFFF 100%);
}

.popular-ribbon {
  position: absolute;
  top: 16px;
  right: -32px;
  transform: rotate(45deg);
  background: #FF9E00;
  color: white;
  font-size: 0.65rem;
  font-weight: 800;
  padding: 4px 36px;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}
</style>
