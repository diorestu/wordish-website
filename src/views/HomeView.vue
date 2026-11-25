<template>
  <div>
    <!-- HERO BANNER SECTION -->
    <section class="rg-screenshot-hero position-relative pt-8 pt-md-12 pb-0">
      <!-- Decorative Background Orbs -->
      <div class="rg-hero-orb-left" aria-hidden="true"></div>
      <div class="rg-hero-orb-right" aria-hidden="true"></div>

      <div class="hero-container mx-auto px-6 px-sm-10 px-md-14 position-relative z-1">
        <v-row align="stretch" no-gutters>
          <!-- Left Column: Copy & Interactive Phone Pill -->
          <v-col cols="12" md="7" lg="6" class="d-flex flex-column justify-center pr-md-6 pr-lg-8 pb-6 pb-md-20">
            <h1 class="hero-title mb-3">
              Bimbel Online &amp; Offline Terbesar,<br class="d-none d-sm-inline" />
              Terlengkap, dan Terbukti di Indonesia
            </h1>

            <p class="hero-subtitle mb-6">
              Diskon spesial untukmu dengan isi nomor HP sekarang
            </p>

            <!-- Phone Input Pill (Rounded Pill + Orange Button) -->
            <div class="hero-phone-pill-wrapper">
              <form @submit.prevent="submitDiscount" class="hero-phone-pill">
                <span class="phone-prefix">+62</span>
                <div class="phone-separator"></div>
                <input
                  type="tel"
                  v-model="heroPhone"
                  placeholder="812-3456-7890"
                  class="phone-input"
                  required
                  aria-label="Nomor WhatsApp untuk Diskon"
                />
                <button type="submit" class="hero-discount-btn">
                  <span>Dapatkan Diskon</span>
                  <svg class="chevron-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </form>
            </div>
          </v-col>

          <!-- Right Column: Student Illustration -->
          <v-col cols="12" md="5" lg="6" class="d-flex justify-center justify-md-end align-end">
            <img
              src="/hero-students.png"
              alt="Siswa Berprestasi LPK Wordish"
              width="1536"
              height="1024"
              class="hero-students-img"
              loading="eager"
              fetchpriority="high"
            />
          </v-col>
        </v-row>
      </div>
    </section>

    <!-- FLOATING BOTTOM RIBBON CARD (6 Category Cards overlapping the banner) -->
    <div class="floating-ribbon-wrapper max-width-xl mx-auto px-4 px-sm-6">
      <div class="floating-ribbon-card">
        <div class="ribbon-items-grid">
          <!-- 1. Persiapan HSK & EPS-TOPIK -->
          <router-link to="/products" class="ribbon-item">
            <div class="ribbon-icon">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <rect x="2" y="2" width="40" height="40" rx="10" fill="#EBF4FF" stroke="#3B82F6" stroke-width="1.5"/>
                <rect x="9" y="7" width="26" height="18" rx="4" fill="#1D4ED8"/>
                <text x="22" y="19" fill="#FFFFFF" font-size="7.5" font-weight="800" text-anchor="middle" font-family="system-ui, sans-serif">HSK/TOPIK</text>
                <rect x="5" y="27" width="34" height="12" rx="4" fill="#DC2626"/>
                <text x="22" y="36" fill="#FFFFFF" font-size="7" font-weight="900" text-anchor="middle" font-family="system-ui, sans-serif" letter-spacing="0.5">INTENSIF</text>
              </svg>
            </div>
            <div class="ribbon-text">
              <span class="ribbon-line1">Persiapan</span>
              <span class="ribbon-line2">HSK &amp; EPS-TOPIK</span>
            </div>
          </router-link>

          <!-- 2. Bimbel Tatap Muka -->
          <router-link to="/products?format=private" class="ribbon-item">
            <div class="ribbon-icon">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <rect x="2" y="2" width="40" height="40" rx="10" fill="#EFF6FF" stroke="#60A5FA" stroke-width="1.5"/>
                <rect x="10" y="10" width="24" height="16" rx="3" fill="#2563EB"/>
                <rect x="12" y="12" width="20" height="12" rx="2" fill="#93C5FD"/>
                <circle cx="22" cy="16" r="2.5" fill="#1D4ED8"/>
                <path d="M17 23C17 20.8 19 19.5 22 19.5C25 19.5 27 20.8 27 23H17Z" fill="#1D4ED8"/>
                <rect x="19" y="26" width="6" height="4" fill="#2563EB"/>
                <rect x="15" y="30" width="14" height="2" rx="1" fill="#1D4ED8"/>
              </svg>
            </div>
            <div class="ribbon-text">
              <span class="ribbon-line1">Bimbel</span>
              <span class="ribbon-line2">Tatap Muka</span>
            </div>
          </router-link>

          <!-- 3. Bimbel Online Interaktif -->
          <router-link to="/products?format=online" class="ribbon-item">
            <div class="ribbon-icon">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <rect x="2" y="2" width="40" height="40" rx="10" fill="#ECFEFF" stroke="#22D3EE" stroke-width="1.5"/>
                <circle cx="22" cy="22" r="13" fill="#06B6D4"/>
                <circle cx="22" cy="18" r="4" fill="#FFFFFF"/>
                <path d="M14 28C14 24 17.5 22.5 22 22.5C26.5 22.5 30 24 30 28H14Z" fill="#FFFFFF"/>
                <path d="M28 14C30 16 30 20 28 22" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="ribbon-text">
              <span class="ribbon-line1">Bimbel Online</span>
              <span class="ribbon-line2">Interaktif</span>
            </div>
          </router-link>

          <!-- 4. Video Belajar dan Soal -->
          <router-link to="/elearning" class="ribbon-item">
            <div class="ribbon-icon">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <rect x="2" y="2" width="40" height="40" rx="10" fill="#FDF2F8" stroke="#F472B6" stroke-width="1.5"/>
                <rect x="9" y="9" width="26" height="26" rx="7" fill="url(#heroPinkGrad)"/>
                <polygon points="19,16 29,22 19,28" fill="#FFFFFF"/>
                <defs>
                  <linearGradient id="heroPinkGrad" x1="9" y1="9" x2="35" y2="35" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F43F5E"/>
                    <stop offset="1" stop-color="#E11D48"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="ribbon-text">
              <span class="ribbon-line1">Video Belajar</span>
              <span class="ribbon-line2">dan Soal</span>
            </div>
          </router-link>

          <!-- 5. Bimbel Kedinasan & Kerja LN -->
          <router-link to="/products?lang=korean" class="ribbon-item">
            <div class="ribbon-icon">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <rect x="2" y="2" width="40" height="40" rx="10" fill="#FFFBEB" stroke="#FBBF24" stroke-width="1.5"/>
                <circle cx="22" cy="18" r="12" fill="#FEF3C7" stroke="#F59E0B" stroke-width="1.5"/>
                <path d="M22 9L26 13V18C26 21 22 23 22 23C22 23 18 21 18 18V13L22 9Z" fill="#D97706"/>
                <rect x="5" y="27" width="34" height="12" rx="4" fill="#DC2626"/>
                <text x="22" y="36" fill="#FFFFFF" font-size="7" font-weight="900" text-anchor="middle" font-family="system-ui, sans-serif" letter-spacing="0.5">INTENSIF!</text>
              </svg>
            </div>
            <div class="ribbon-text">
              <span class="ribbon-line1">Bimbel</span>
              <span class="ribbon-line2">Kedinasan &amp; Kerja LN</span>
            </div>
          </router-link>

          <!-- 6. Semua Produk -->
          <router-link to="/products" class="ribbon-item">
            <div class="ribbon-icon">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <rect x="2" y="2" width="40" height="40" rx="10" fill="#F5F3FF" stroke="#A78BFA" stroke-width="1.5"/>
                <rect x="13" y="13" width="7" height="7" rx="2" fill="#7C3AED"/>
                <rect x="24" y="13" width="7" height="7" rx="2" fill="#7C3AED"/>
                <rect x="13" y="24" width="7" height="7" rx="2" fill="#7C3AED"/>
                <rect x="24" y="24" width="7" height="7" rx="2" fill="#7C3AED"/>
              </svg>
            </div>
            <div class="ribbon-text">
              <span class="ribbon-line1">Semua</span>
              <span class="ribbon-line2">Produk</span>
            </div>
          </router-link>
        </div>
      </div>

      <!-- Promo Star Badge (As shown in screenshot bottom-right) -->
      <div class="d-flex justify-end pt-2">
        <div class="promo-star-badge">
          <v-icon icon="mdi-star" size="14" color="#ff6e02"></v-icon>
          <span class="promo-text">PROMO STAR</span>
        </div>
      </div>
    </div>

    <!-- LANGUAGE SELECTION STRIP -->
    <div class="max-width-xl mx-auto px-4 px-sm-6 pt-5 pb-3">
      <div class="d-flex flex-wrap align-center justify-space-between ga-3">
        <div class="d-flex flex-wrap align-center ga-2">
          <span class="text-caption font-weight-bold text-grey-darken-1 mr-1">Pilihan Bahasa:</span>
          <v-btn
            v-for="lang in languages"
            :key="lang.id"
            size="small"
            variant="tonal"
            class="font-weight-bold text-none rounded-pill"
            :color="activeLanguageFilter === lang.id ? 'primary' : 'grey-darken-1'"
            @click="scrollToLanguage(lang.id)"
          >
            <v-icon :icon="lang.icon" size="16" class="mr-1"></v-icon>
            {{ lang.name }}
          </v-btn>
        </div>
        <div class="text-caption text-grey-darken-1 d-none d-md-flex align-center">
          <v-icon icon="mdi-shield-check" size="18" color="success" class="mr-1"></v-icon>
          Sertifikasi Resmi Kemnaker &bull; Tutor Native &amp; Bersertifikat &bull; Modul HSK, EPS-TOPIK &amp; CEFR
        </div>
      </div>
    </div>

    <!-- SECTION: 3 FORMAT LAYANAN KELAS (Private, Home, Online) -->
    <section class="py-12 py-md-16 bg-surface border-y">
      <v-container class="max-width-xl px-4 px-sm-6">
        <div class="text-center mb-8 mb-md-12">
          <h2 class="text-h4 font-weight-bold text-secondary mb-2">
            Pilihan Format Layanan Kelas
          </h2>
          <p class="text-body-1 text-grey-darken-1 max-width-md mx-auto">
            Sesuaikan metode belajar terbaik dengan kenyamanan, lokasi, dan target waktu belajarmu.
          </p>
        </div>

        <v-row>
          <v-col
            v-for="mode in classModes"
            :key="mode.id"
            cols="12"
            md="4"
          >
            <v-card class="h-100 pa-6 rounded-3xl border bg-white d-flex flex-column justify-space-between rg-card-border shadow-sm">
              <div>
                <div class="d-flex align-center justify-space-between mb-4">
                  <img
                    v-if="mode.image"
                    :src="mode.image"
                    :alt="mode.name"
                    width="52"
                    height="52"
                    style="object-fit: contain; display: block;"
                  />
                  <v-avatar v-else :color="mode.color" size="52" class="text-white shadow-sm">
                    <v-icon :icon="mode.icon" size="28"></v-icon>
                  </v-avatar>
                  <span class="text-caption font-weight-bold text-grey">Tersedia 3 Bahasa</span>
                </div>

                <div class="text-h5 font-weight-bold text-secondary mb-1">
                  {{ mode.name }}
                </div>
                <div class="text-caption font-weight-bold text-primary mb-3">
                  {{ mode.subtitle }}
                </div>

                <p class="text-body-2 text-grey-darken-1 mb-4" style="line-height: 1.5;">
                  {{ mode.desc }}
                </p>

                <!-- Benefits Checklist -->
                <div class="d-flex flex-column ga-2 mb-6">
                  <div
                    v-for="(b, bIdx) in mode.benefits"
                    :key="bIdx"
                    class="d-flex align-start text-caption text-grey-darken-2"
                  >
                    <v-icon icon="mdi-check-circle" color="teal" size="16" class="mr-2 mt-1"></v-icon>
                    <span>{{ b }}</span>
                  </div>
                </div>
              </div>

              <div class="pt-3 border-t">
                <v-btn
                  :color="mode.color"
                  variant="outlined"
                  block
                  class="text-none font-weight-bold"
                  to="/products"
                >
                  Pilih Kelas {{ mode.name }}
                  <v-icon icon="mdi-arrow-right" class="ml-1" size="small"></v-icon>
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- SECTION: E-LEARNING SHOWCASE TEASER -->
    <section class="py-12 py-md-16 bg-grey-lighten-5">
      <v-container class="max-width-xl px-4 px-sm-6">
        <v-card class="rounded-3xl border bg-white shadow-md pa-6 pa-md-8 overflow-hidden">
          <v-row align="center">
            <v-col cols="12" md="6" class="pr-md-6">
              <div class="d-flex align-center mb-3">
                <v-icon icon="mdi-play-circle" color="accent" size="28" class="mr-2"></v-icon>
                <span class="font-weight-bold text-subtitle-2 text-primary text-uppercase">
                  E-Learning Interaktif Wordish
                </span>
              </div>

              <h2 class="text-h4 font-weight-bold text-secondary mb-3">
                Belajar Fleksibel Kapan Saja dengan Video Modul E-Learning
              </h2>

              <p class="text-body-1 text-grey-darken-1 mb-4" style="line-height: 1.6;">
                Dapatkan akses ke puluhan video pembelajaran terstruktur untuk Mandarin, Korea, dan Inggris. Dilengkapi latihan audio listening, rangkuman PDF yang dapat diunduh, dan kuis uji pemahaman bab.
              </p>

              <div class="d-flex flex-column ga-2 mb-6 text-body-2 text-grey-darken-2">
                <div class="d-flex align-center">
                  <v-icon icon="mdi-check" color="success" size="18" class="mr-2"></v-icon>
                  <span>Materi video HD berurutan dari dasar hingga mahir</span>
                </div>
                <div class="d-flex align-center">
                  <v-icon icon="mdi-check" color="success" size="18" class="mr-2"></v-icon>
                  <span>Rangkuman rumus tata bahasa dan kosakata PDF</span>
                </div>
                <div class="d-flex align-center">
                  <v-icon icon="mdi-check" color="success" size="18" class="mr-2"></v-icon>
                  <span>Dapat diputar ulang 24/7 di laptop maupun smartphone</span>
                </div>
              </div>

              <div class="d-flex ga-3">
                <v-btn
                  color="primary"
                  size="large"
                  class="text-none font-weight-bold text-white shadow-sm"
                  to="/elearning"
                >
                  Buka Portal E-Learning
                  <v-icon icon="mdi-arrow-right" class="ml-2"></v-icon>
                </v-btn>
              </div>
            </v-col>

            <v-col cols="12" md="6" class="mt-6 mt-md-0">
              <!-- Video Preview Card Mock -->
              <div class="rounded-2xl overflow-hidden border shadow-sm bg-slate-900 pa-4 text-white">
                <div class="d-flex justify-space-between align-center mb-3 text-caption">
                  <span class="font-weight-bold">Preview Modul Hangeul Korea</span>
                  <span class="text-grey-lighten-2">Akses Gratis Siswa</span>
                </div>
                <div class="py-8 text-center bg-grey-darken-4 rounded-xl mb-3">
                  <v-btn icon size="large" color="accent" class="mb-2" to="/elearning">
                    <v-icon icon="mdi-play" size="32" color="white"></v-icon>
                  </v-btn>
                  <div class="text-body-2 font-weight-bold">
                    Pengenalan Vokal & Konsonan Dasar Hangeul
                  </div>
                  <div class="text-caption text-grey">Bersama Ssaem Park Ji-hoon (14:20 Menit)</div>
                </div>
                <div class="d-flex justify-space-between text-caption text-grey-lighten-1">
                  <span>Modul 1 dari 16 Video</span>
                  <span class="text-success font-weight-bold">Tersedia di E-Learning</span>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </section>

    <!-- SECTION: BUKU PELAJARAN RESMI (LINKED TO SHOPEE & TOKOPEDIA) -->
    <section class="py-12 py-md-16 bg-surface border-y">
      <v-container class="max-width-xl px-4 px-sm-6">
        <div class="text-center mb-8 mb-md-12">
          <h2 class="text-h4 font-weight-bold text-secondary mb-2">
            Buku Pelajaran Bahasa Asing Resmi Wordish
          </h2>
          <p class="text-body-1 text-grey-darken-1 max-width-md mx-auto">
            Tersedia dan dapat langsung dipesan melalui Official Store kami di <strong>Shopee</strong> dan <strong>Tokopedia</strong>.
          </p>
        </div>

        <v-row>
          <v-col
            v-for="book in books"
            :key="book.id"
            cols="12"
            sm="6"
            lg="3"
          >
            <v-card class="h-100 rounded-3xl border bg-white d-flex flex-column justify-space-between shadow-sm rg-card-border overflow-hidden">
              <div>
                <!-- Book Cover -->
                <v-img
                  :src="book.coverImage"
                  height="200"
                  cover
                  class="align-end text-white"
                >
                  <div class="pa-2 book-cover-overlay d-flex justify-space-between align-center w-100">
                    <span class="text-caption font-weight-bold text-white">{{ book.language }}</span>
                  </div>
                </v-img>

                <div class="pa-4">
                  <div class="d-flex align-center justify-space-between text-caption text-grey mb-1">
                    <span>{{ book.pages }}</span>
                    <span class="text-amber-darken-3 font-weight-bold d-flex align-center">
                      <v-icon icon="mdi-star" size="14" class="mr-1"></v-icon>
                      {{ book.rating }}
                    </span>
                  </div>

                  <div class="text-subtitle-2 font-weight-bold text-secondary mb-2" style="line-height: 1.35; min-height: 42px;">
                    {{ book.title }}
                  </div>

                  <p class="text-caption text-grey-darken-1 mb-3" style="line-height: 1.4; min-height: 36px;">
                    {{ book.description }}
                  </p>

                  <div class="d-flex align-baseline ga-2 mb-3">
                    <span class="text-subtitle-1 font-weight-extrabold text-primary">
                      {{ formatRupiah(book.price) }}
                    </span>
                    <span class="text-caption text-grey text-decoration-line-through">
                      {{ formatRupiah(book.originalPrice) }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Action Marketplace Buttons -->
              <div class="px-4 pb-4 pt-0 d-flex flex-column ga-2">
                <v-btn
                  color="#EE4D2D"
                  variant="flat"
                  block
                  size="small"
                  class="text-none font-weight-bold text-white"
                  prepend-icon="mdi-shopping"
                  :href="book.shopeeUrl"
                  target="_blank"
                >
                  Beli di Shopee
                </v-btn>
                <v-btn
                  color="#03AC0E"
                  variant="flat"
                  block
                  size="small"
                  class="text-none font-weight-bold text-white"
                  prepend-icon="mdi-store"
                  :href="book.tokopediaUrl"
                  target="_blank"
                >
                  Beli di Tokopedia
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>

        <div class="text-center mt-8">
          <v-btn
            color="primary"
            variant="outlined"
            class="text-none font-weight-bold px-6"
            to="/books"
          >
            Lihat Detail Seluruh Buku Pelajaran
            <v-icon icon="mdi-arrow-right" class="ml-1" size="small"></v-icon>
          </v-btn>
        </div>
      </v-container>
    </section>

    <!-- INTERACTIVE PLACEMENT TEST WIDGET -->
    <section class="py-12 py-md-16 bg-grey-lighten-5">
      <v-container class="max-width-lg px-4 px-sm-6">
        <LanguagePlacementTest />
      </v-container>
    </section>

    <!-- KATALOG PROGRAM KELAS LPK -->
    <section class="py-12 py-md-16 bg-surface">
      <v-container class="max-width-xl px-4 px-sm-6">
        <div class="text-center mb-8 mb-md-10">
          <h2 class="text-h4 font-weight-bold text-secondary mb-2">
            Paket Pelatihan Bahasa Asing
          </h2>
          <p class="text-body-1 text-grey-darken-1 max-width-md mx-auto">
            Daftar paket intensif dengan kurikulum siap kerja dan fleksibilitas format belajar.
          </p>
        </div>

        <!-- Filter Language Toggle (Responsive wrap) -->
        <div class="d-flex justify-center mb-8">
          <v-btn-toggle
            v-model="activeLanguageFilter"
            color="primary"
            rounded="xl"
            mandatory
            class="shadow-sm flex-wrap justify-center"
          >
            <v-btn value="all" class="text-none font-weight-bold px-3 px-sm-4">Semua Bahasa</v-btn>
            <v-btn value="mandarin" class="text-none font-weight-bold px-3 px-sm-4">Mandarin</v-btn>
            <v-btn value="korean" class="text-none font-weight-bold px-3 px-sm-4">Korea</v-btn>
            <v-btn value="english" class="text-none font-weight-bold px-3 px-sm-4">Inggris</v-btn>
          </v-btn-toggle>
        </div>

        <v-row>
          <v-col
            v-for="prog in filteredPrograms"
            :key="prog.id"
            cols="12"
            md="6"
            lg="4"
          >
            <v-card class="h-100 pa-5 pa-sm-6 rounded-3xl border bg-white d-flex flex-column justify-space-between shadow-sm rg-card-border">
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
      </v-container>
    </section>

    <!-- JADWAL KELAS HARIAN (Senin - Sabtu) -->
    <section id="jadwal" class="py-12 py-md-16 bg-surface border-t">
      <v-container class="max-width-xl px-4 px-sm-6">
        <div class="text-center mb-8 mb-md-12">
          <v-chip color="primary" variant="tonal" class="font-weight-bold mb-3" size="small">
            <v-icon icon="mdi-calendar-clock" start size="16"></v-icon>
            Jadwal Belajar Fleksibel
          </v-chip>
          <h2 class="text-h4 text-sm-h3 font-weight-bold text-secondary mb-3">
            Jadwal Harian Kelas LPK Wordish
          </h2>
          <p class="text-body-1 text-grey-darken-1 max-width-md mx-auto">
            Kelas berlangsung dari <strong>Senin sampai Sabtu</strong>. Pilihan format belajar lengkap: <strong>Private Class</strong> (1-on-1), <strong>Home Class</strong> (tutor ke rumah), dan <strong>Online Class</strong>.
          </p>
        </div>

        <v-row class="mb-8" align="stretch">
          <!-- Col 1: Visual Blueprint Grid Board (1:1 Inspired by Graphic) -->
          <v-col cols="12" lg="6">
            <div class="schedule-blueprint-card h-100 d-flex flex-column justify-space-between">
              <div>
                <!-- Board Header -->
                <div class="blueprint-header">
                  <span class="blueprint-col-title">jam</span>
                  <span class="blueprint-col-title">kelas</span>
                </div>

                <!-- 7 Time Slots from uploaded image -->
                <div class="blueprint-rows-container">
                  <div
                    v-for="item in batchSchedules.slice(0, 7)"
                    :key="item.id"
                    class="blueprint-row"
                    @click="bookScheduleSlot(item)"
                    :title="`Klik untuk booking kelas ${item.className} jam ${item.time}`"
                  >
                    <div class="blueprint-time">
                      {{ item.time }}
                    </div>
                    <div class="blueprint-class d-flex align-center ga-2">
                      <span>{{ item.className }}</span>
                      <v-icon icon="mdi-chevron-right" size="18" class="blueprint-arrow opacity-60"></v-icon>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Footnote from image -->
              <div class="blueprint-footnote">
                *kelas berlangsung dari senin - sabtu
              </div>
            </div>
          </v-col>

          <!-- Col 2: Panduan Kategori & Format Layanan -->
          <v-col cols="12" lg="6">
            <div class="d-flex flex-column ga-4 h-100 justify-space-between">
              <!-- Card: Kids & Junior -->
              <v-card class="pa-5 rounded-2xl border bg-white shadow-sm">
                <div class="d-flex align-center justify-space-between mb-2">
                  <div class="d-flex align-center ga-2">
                    <v-avatar color="teal-lighten-5" size="38">
                      <v-icon icon="mdi-human-child" color="teal" size="22"></v-icon>
                    </v-avatar>
                    <div>
                      <div class="text-subtitle-1 font-weight-bold text-secondary">
                        Kids &amp; Junior (14.00 – 18.00)
                      </div>
                      <div class="text-caption text-grey">Usia 6 - 15 Tahun &bull; Kelas Sore Sepulang Sekolah</div>
                    </div>
                  </div>
                  <v-chip color="teal" size="small" variant="flat" class="text-white font-weight-bold">
                    Sore
                  </v-chip>
                </div>
                <p class="text-body-2 text-grey-darken-1 mb-3">
                  Sesi Mandarin &amp; English bergantian setiap jam. Fokus pada pengenalan dasar yang menyenangkan, sistem Pinyin, karakter Hanzi bergambar, phonics bahasa Inggris, dan keberanian berbicara sejak dini.
                </p>
                <div class="d-flex flex-wrap ga-2 text-caption">
                  <span class="px-2 py-1 bg-grey-lighten-4 rounded text-grey-darken-2 font-weight-medium">14.00 - 15.00: Mandarin</span>
                  <span class="px-2 py-1 bg-grey-lighten-4 rounded text-grey-darken-2 font-weight-medium">15.00 - 16.00: English</span>
                  <span class="px-2 py-1 bg-grey-lighten-4 rounded text-grey-darken-2 font-weight-medium">16.00 - 17.00: Mandarin</span>
                  <span class="px-2 py-1 bg-grey-lighten-4 rounded text-grey-darken-2 font-weight-medium">17.00 - 18.00: English</span>
                </div>
              </v-card>

              <!-- Card: Teen & Adult -->
              <v-card class="pa-5 rounded-2xl border bg-white shadow-sm">
                <div class="d-flex align-center justify-space-between mb-2">
                  <div class="d-flex align-center ga-2">
                    <v-avatar color="deep-purple-lighten-5" size="38">
                      <v-icon icon="mdi-account-tie" color="deep-purple" size="22"></v-icon>
                    </v-avatar>
                    <div>
                      <div class="text-subtitle-1 font-weight-bold text-secondary">
                        Teen &amp; Adult (18.00 – 21.00)
                      </div>
                      <div class="text-caption text-grey">Usia 16+ Tahun &bull; Mahasiswa, Profesional &amp; Karyawan</div>
                    </div>
                  </div>
                  <v-chip color="deep-purple" size="small" variant="flat" class="text-white font-weight-bold">
                    Malam
                  </v-chip>
                </div>
                <p class="text-body-2 text-grey-darken-1 mb-3">
                  Kelas malam setelah jam kerja/kuliah. Dirancang untuk akselerasi karier, persiapan sertifikasi resmi HSK 1 - 4, TOEFL/IELTS, percakapan bisnis, serta persiapan wawancara kerja.
                </p>
                <div class="d-flex flex-wrap ga-2 text-caption">
                  <span class="px-2 py-1 bg-grey-lighten-4 rounded text-grey-darken-2 font-weight-medium">18.00 - 19.00: Mandarin</span>
                  <span class="px-2 py-1 bg-grey-lighten-4 rounded text-grey-darken-2 font-weight-medium">19.00 - 20.00: English</span>
                  <span class="px-2 py-1 bg-grey-lighten-4 rounded text-grey-darken-2 font-weight-medium">20.00 - 21.00: Mandarin</span>
                </div>
              </v-card>

              <!-- Card: Korea EPS-TOPIK Khusus Pagi -->
              <v-card class="pa-4 rounded-2xl border bg-amber-lighten-5 border-amber-lighten-2 shadow-sm">
                <div class="d-flex align-center justify-space-between">
                  <div class="d-flex align-center ga-2">
                    <v-avatar color="amber-lighten-4" size="38">
                      <v-icon icon="mdi-calendar-clock" color="amber-darken-3" size="20"></v-icon>
                    </v-avatar>
                    <div>
                      <div class="text-subtitle-2 font-weight-bold text-secondary">
                        Kelas Pagi Intensif: Korea EPS-TOPIK
                      </div>
                      <div class="text-caption text-grey-darken-1">Senin - Jumat | 09.00 - 12.00 WIB (Persiapan Kerja G to G BP2MI)</div>
                    </div>
                  </div>
                  <v-btn
                    size="small"
                    color="accent"
                    class="text-none font-weight-bold text-white"
                    to="/products?lang=korean"
                  >
                    Lihat Program
                  </v-btn>
                </div>
              </v-card>
            </div>
          </v-col>
        </v-row>

        <!-- Tabel Rinci Lengkap & Filter Kategori -->
        <v-card class="rounded-3xl border bg-white shadow-sm overflow-hidden mb-6">
          <div class="pa-4 pa-sm-5 border-b bg-grey-lighten-5 d-flex flex-column flex-sm-row align-stretch align-sm-center justify-space-between ga-3">
            <div>
              <div class="text-subtitle-1 font-weight-bold text-secondary">
                Rincian Jadwal &amp; Sisa Slot Kuota
              </div>
              <div class="text-caption text-grey-darken-1">
                Pilih slot jadwal yang cocok, lalu klik "Booking Slot" untuk reservasi kursi
              </div>
            </div>

            <!-- Filter Buttons -->
            <div class="d-flex flex-wrap ga-1">
              <v-btn
                size="small"
                variant="flat"
                class="text-none font-weight-bold"
                :color="activeScheduleCategory === 'all' ? 'primary' : 'grey-lighten-2'"
                :class="activeScheduleCategory === 'all' ? 'text-white' : 'text-grey-darken-2'"
                @click="activeScheduleCategory = 'all'"
              >
                Semua Slot ({{ batchSchedules.length }})
              </v-btn>
              <v-btn
                size="small"
                variant="flat"
                class="text-none font-weight-bold"
                :color="activeScheduleCategory === 'kids' ? 'teal' : 'grey-lighten-2'"
                :class="activeScheduleCategory === 'kids' ? 'text-white' : 'text-grey-darken-2'"
                @click="activeScheduleCategory = 'kids'"
              >
                Kids &amp; Junior
              </v-btn>
              <v-btn
                size="small"
                variant="flat"
                class="text-none font-weight-bold"
                :color="activeScheduleCategory === 'adult' ? 'deep-purple' : 'grey-lighten-2'"
                :class="activeScheduleCategory === 'adult' ? 'text-white' : 'text-grey-darken-2'"
                @click="activeScheduleCategory = 'adult'"
              >
                Teen &amp; Adult
              </v-btn>
              <v-btn
                size="small"
                variant="flat"
                class="text-none font-weight-bold"
                :color="activeScheduleCategory === 'korea' ? 'amber-darken-3' : 'grey-lighten-2'"
                :class="activeScheduleCategory === 'korea' ? 'text-white' : 'text-grey-darken-2'"
                @click="activeScheduleCategory = 'korea'"
              >
                Korea EPS-TOPIK
              </v-btn>
            </div>
          </div>

          <div class="overflow-x-auto">
            <v-table style="min-width: 700px;">
              <thead>
                <tr class="bg-grey-lighten-4 text-caption text-uppercase">
                  <th class="font-weight-bold text-secondary">Jam &amp; Hari</th>
                  <th class="font-weight-bold text-secondary">Nama Kelas &amp; Bahasa</th>
                  <th class="font-weight-bold text-secondary">Kategori Usia</th>
                  <th class="font-weight-bold text-secondary">Format Tersedia</th>
                  <th class="font-weight-bold text-secondary">Status Slot</th>
                  <th class="font-weight-bold text-secondary text-right">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="b in filteredSchedules" :key="b.id" class="schedule-table-row">
                  <td>
                    <div class="font-weight-bold text-body-2 text-primary">{{ b.time }} WIB</div>
                    <div class="text-caption text-grey">{{ b.days }}</div>
                  </td>
                  <td>
                    <div class="font-weight-bold text-secondary d-flex align-center">
                      <span>{{ b.className }}</span>
                    </div>
                    <div class="text-caption text-grey-darken-1" style="max-width: 280px; line-height: 1.3;">
                      {{ b.focus }}
                    </div>
                  </td>
                  <td>
                    <v-chip :color="b.categoryBadgeColor" size="x-small" class="font-weight-bold mb-1">
                      {{ b.category }}
                    </v-chip>
                    <div class="text-caption text-grey">{{ b.ageGroup }}</div>
                  </td>
                  <td>
                    <div class="d-flex flex-wrap ga-1">
                      <v-chip size="x-small" variant="outlined" color="primary">Private</v-chip>
                      <v-chip size="x-small" variant="outlined" color="primary">Home</v-chip>
                      <v-chip size="x-small" variant="outlined" color="primary">Online</v-chip>
                    </div>
                  </td>
                  <td>
                    <span class="text-caption font-weight-bold text-success">{{ b.quota }}</span>
                  </td>
                  <td class="text-right">
                    <v-btn
                      size="small"
                      color="accent"
                      variant="flat"
                      class="text-none font-weight-bold text-white"
                      @click="bookScheduleSlot(b)"
                    >
                      <v-icon icon="mdi-whatsapp" start size="15"></v-icon>
                      Booking
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </div>
        </v-card>

        <div class="d-flex flex-column flex-sm-row align-center justify-center ga-3">
          <v-btn
            color="success"
            size="large"
            class="text-none font-weight-bold px-6 shadow-sm"
            prepend-icon="mdi-whatsapp"
            href="https://wa.me/6281234567890?text=Halo%20LPK%20Wordish,%20saya%20ingin%20konsultasi%20jadwal%20dan%20pendaftaran%20kelas"
            target="_blank"
          >
            Konsultasi Jadwal via WhatsApp
          </v-btn>
          <v-btn
            color="primary"
            variant="outlined"
            size="large"
            class="text-none font-weight-bold px-6"
            to="/products"
          >
            Lihat Semua Biaya &amp; Program
            <v-icon icon="mdi-arrow-right" end></v-icon>
          </v-btn>
        </div>
      </v-container>
    </section>

    <!-- TESTIMONI SISWA -->
    <section id="testimoni" class="py-12 py-md-16 bg-grey-lighten-5">
      <v-container class="max-width-xl px-4 px-sm-6">
        <div class="text-center mb-8 mb-md-10">
          <h2 class="text-h4 font-weight-bold text-secondary mb-2">
            Kisah Sukses Alumni LPK Wordish
          </h2>
          <p class="text-body-1 text-grey-darken-1">
            Pengalaman nyata peserta yang sukses meraih pekerjaan impian di luar negeri dan perusahaan internasional.
          </p>
        </div>

        <v-row>
          <v-col
            v-for="t in testimonials"
            :key="t.id"
            cols="12"
            md="4"
          >
            <v-card class="pa-5 pa-sm-6 rounded-3xl border bg-white h-100 d-flex flex-column justify-space-between shadow-sm">
              <div>
                <div class="d-flex align-center ga-3 mb-4">
                  <v-avatar size="48" class="border">
                    <v-img :src="t.avatar" cover></v-img>
                  </v-avatar>
                  <div>
                    <div class="font-weight-bold text-body-1 text-secondary">{{ t.name }}</div>
                    <div class="text-caption text-primary font-weight-bold">{{ t.program }}</div>
                  </div>
                </div>

                <div class="font-weight-bold text-body-2 text-teal mb-3">
                  <v-icon icon="mdi-briefcase-check" size="small" class="mr-1"></v-icon>
                  {{ t.outcome }}
                </div>

                <p class="text-caption text-grey-darken-2" style="line-height: 1.6; font-style: italic;">
                  "{{ t.quote }}"
                </p>
              </div>

              <div class="pt-3 border-t text-caption text-grey d-flex align-center">
                <v-icon icon="mdi-check-decagram" color="teal" size="16" class="mr-1"></v-icon>
                Alumni Resmi LPK Wordish
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- FAQ SECTION -->
    <section id="faq" class="py-12 py-md-16 bg-surface">
      <v-container class="max-width-md px-4 px-sm-6">
        <div class="text-center mb-8">
          <h2 class="text-h4 font-weight-bold text-secondary mb-2">
            Pertanyaan Umum (FAQ)
          </h2>
        </div>

        <v-expansion-panels variant="accordion" class="rounded-2xl overflow-hidden border">
          <v-expansion-panel
            v-for="(f, idx) in faqs"
            :key="idx"
            class="border-b"
          >
            <v-expansion-panel-title class="font-weight-bold text-body-1 text-secondary py-3">
              <v-icon icon="mdi-help-circle-outline" color="primary" class="mr-3"></v-icon>
              {{ f.q }}
            </v-expansion-panel-title>
            <v-expansion-panel-text class="text-body-2 text-grey-darken-2 pb-4" style="line-height: 1.7;">
              {{ f.a }}
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
    </section>

    <!-- WHATSAPP BANNER CTA -->
    <section class="py-12 rg-gradient-primary text-white">
      <v-container class="max-width-xl px-4 px-sm-6 text-center">
        <h3 class="text-h4 font-weight-extrabold mb-3 text-white">
          Siap Mulai Belajar Bahasa Mandarin, Korea, atau Inggris?
        </h3>
        <p class="text-body-1 text-white opacity-90 max-width-md mx-auto mb-6">
          Hubungi konselor LPK Wordish untuk konsultasi gratis penentuan format kelas (Private, Home, atau Online), rincian biaya, dan info persiapan berkas kerja ke luar negeri.
        </p>
        <div class="d-flex flex-column flex-sm-row justify-center align-center ga-3">
          <v-btn
            color="white"
            size="large"
            class="text-primary font-weight-bold text-none px-8"
            prepend-icon="mdi-whatsapp"
            href="https://wa.me/6281234567890?text=Halo%20LPK%20Wordish,%20saya%20ingin%20konsultasi%20program%20pelatihan"
            target="_blank"
          >
            Konsultasi WhatsApp
          </v-btn>
          <v-btn
            variant="outlined"
            color="white"
            size="large"
            class="text-none font-weight-bold px-6"
            to="/products"
          >
            Lihat Semua Program
          </v-btn>
        </div>
      </v-container>
    </section>

    <!-- DISCOUNT CLAIM DIALOG -->
    <v-dialog v-model="discountDialog" max-width="500">
      <v-card class="rounded-3xl pa-6 text-center bg-white shadow-xl">
        <div class="mb-3">
          <v-avatar color="amber-lighten-4" size="64">
            <v-icon icon="mdi-party-popper" color="accent" size="36"></v-icon>
          </v-avatar>
        </div>
        <h3 class="text-h5 font-weight-bold text-secondary mb-2">
          Diskon Spesial 30% Diaktifkan!
        </h3>
        <p class="text-body-2 text-grey-darken-1 mb-4">
          Nomor WhatsApp <strong>+62 {{ heroPhone }}</strong> berhasil didaftarkan untuk promo diskon 30% semua program pelatihan LPK Wordish (Private Class, Home Class, Online Class).
        </p>

        <div class="bg-amber-lighten-5 rounded-2xl pa-4 mb-5 border border-amber-lighten-2">
          <div class="text-caption text-grey-darken-2 mb-1">Kode Promo Kamu:</div>
          <div class="text-h5 font-weight-black text-accent letter-spacing-1">
            WORDISH30
          </div>
          <div class="text-caption text-grey-darken-1 mt-1">Berlaku untuk pendaftaran batch bulan ini</div>
        </div>

        <div class="d-flex flex-column ga-2">
          <v-btn
            color="accent"
            size="large"
            class="text-none font-weight-bold text-white shadow-sm"
            prepend-icon="mdi-whatsapp"
            :href="`https://wa.me/6281234567890?text=Halo%20LPK%20Wordish,%20saya%20sudah%20mendaftarkan%20nomor%20%2B62${heroPhone}%20dan%20ingin%20klaim%20Diskon%20Spesial%2030%25%20Kode%20WORDISH30`"
            target="_blank"
            @click="discountDialog = false"
          >
            Klaim Diskon via WhatsApp Sekarang
          </v-btn>
          <v-btn
            variant="text"
            color="secondary"
            class="text-none font-weight-medium"
            to="/products"
            @click="discountDialog = false"
          >
            Lihat Katalog Program Kelas &gt;
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { languages, classModes, books, programs, testimonials, batchSchedules, faqs } from '../data/wordishData'
import { useCartStore } from '../stores/cart'
import LanguagePlacementTest from '../components/LanguagePlacementTest.vue'

const router = useRouter()
const cartStore = useCartStore()

const activeLanguageFilter = ref('all')
const heroPhone = ref('')
const discountDialog = ref(false)
const activeScheduleCategory = ref('all')

const filteredSchedules = computed(() => {
  if (activeScheduleCategory.value === 'all') return batchSchedules
  if (activeScheduleCategory.value === 'kids') return batchSchedules.filter(s => s.category === 'Kids & Junior')
  if (activeScheduleCategory.value === 'adult') return batchSchedules.filter(s => s.category === 'Teen & Adult')
  if (activeScheduleCategory.value === 'korea') return batchSchedules.filter(s => s.language === 'Bahasa Korea')
  return batchSchedules
})

function bookScheduleSlot(slot) {
  const msg = `Halo LPK Wordish, saya ingin konsultasi/booking jadwal kelas ${slot.className} jam ${slot.time} (${slot.days}). Mohon info ketersediaan slotnya.`
  window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(msg)}`, '_blank')
}

function submitDiscount() {
  if (heroPhone.value && heroPhone.value.trim().length >= 4) {
    discountDialog.value = true
  }
}

const filteredPrograms = computed(() => {
  if (activeLanguageFilter.value === 'all') return programs
  return programs.filter(p => p.languageId === activeLanguageFilter.value)
})

function scrollToLanguage(langId) {
  activeLanguageFilter.value = langId
}

function formatRupiah(val) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(val || 0)
}

function enrollHero() {
  const epsProgram = programs.find(p => p.id === 'korean-eps') || programs[0]
  cartStore.addToCart(epsProgram)
  router.push('/checkout')
}

function enrollDirect(prog) {
  cartStore.addToCart(prog)
  router.push('/checkout')
}
</script>

<style scoped>
/* HERO BANNER SECTION */
.rg-screenshot-hero {
  background: linear-gradient(90deg, #004eb2 0%, #0665d8 30%, #0d87d6 58%, #169cae 82%, #35a7b4 100%);
  color: #ffffff;
  overflow: hidden;
}

.hero-container {
  max-width: 1280px;
  width: 100%;
}

.rg-hero-orb-left {
  position: absolute;
  left: -80px;
  bottom: -60px;
  width: 440px;
  height: 440px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(118, 107, 249, 0.58) 0%, rgba(118, 107, 249, 0) 70%);
  pointer-events: none;
}

.rg-hero-orb-right {
  position: absolute;
  right: 5%;
  top: -40px;
  width: 480px;
  height: 480px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(68, 209, 230, 0.28) 0%, rgba(68, 209, 230, 0) 70%);
  pointer-events: none;
}

.hero-title {
  font-size: 2.35rem;
  font-weight: 900;
  line-height: 1.22;
  letter-spacing: -0.5px;
  color: #ffffff;
}

@media (max-width: 960px) {
  .hero-title {
    font-size: 1.85rem;
  }
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 1.45rem;
  }
}

.hero-subtitle {
  font-size: 1.05rem;
  font-weight: 400;
  color: #ffffff;
  opacity: 0.95;
}

/* Phone input pill */
.hero-phone-pill-wrapper {
  max-width: 520px;
  width: 100%;
}

.hero-phone-pill {
  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: 9999px;
  padding: 5px 6px 5px 22px;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.4);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.hero-phone-pill:focus-within {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.24);
  transform: translateY(-1px);
}

.phone-prefix {
  font-size: 1.15rem;
  font-weight: 700;
  color: #1e293b;
  user-select: none;
}

.phone-separator {
  width: 1px;
  height: 24px;
  background: #e2e8f0;
  margin: 0 12px;
}

.phone-input {
  flex: 1;
  min-width: 0;
  border: none;
  outline: none;
  font-size: 1.05rem;
  color: #0f172a;
  font-weight: 500;
  background: transparent;
}

.phone-input::placeholder {
  color: #94a3b8;
  font-weight: 400;
}

.hero-discount-btn {
  background: #FF6E02;
  color: #ffffff;
  border: none;
  outline: none;
  border-radius: 9999px;
  padding: 13px 24px;
  font-size: 0.96rem;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: all 0.2s ease;
  box-shadow: 0 4px 14px rgba(255, 110, 2, 0.35);
}

.hero-discount-btn:hover {
  background: #e66200;
  box-shadow: 0 6px 18px rgba(255, 110, 2, 0.45);
}

.hero-discount-btn:active {
  transform: scale(0.98);
}

@media (max-width: 520px) {
  .hero-phone-pill {
    padding: 6px 8px;
    flex-wrap: wrap;
    border-radius: 20px;
  }
  .phone-separator {
    margin: 0 8px;
  }
  .hero-discount-btn {
    width: 100%;
    justify-content: center;
    margin-top: 8px;
    padding: 10px 18px;
  }
}

/* Student Illustration */
.hero-students-img {
  display: block;
  width: auto;
  max-width: 100%;
  height: auto;
  max-height: 430px;
  object-fit: contain;
  object-position: bottom right;
  filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.12));
}

@media (max-width: 960px) {
  .hero-students-img {
    width: 100%;
    max-width: 450px;
    max-height: 300px;
    margin: 0 auto;
    object-position: bottom center;
  }
}

/* Floating ribbon card */
.floating-ribbon-wrapper {
  position: relative;
  z-index: 10;
  margin-top: -46px;
}

.floating-ribbon-card {
  background: #ffffff;
  border-radius: 24px;
  padding: 14px 18px;
  box-shadow: 0 12px 35px rgba(0, 78, 178, 0.09);
  border: 1px solid rgba(226, 232, 240, 0.85);
}

.ribbon-items-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
}

.ribbon-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 14px;
  border: 1.5px solid #e2e8f0;
  background: #ffffff;
  text-decoration: none;
  transition: all 0.22s ease;
  min-height: 64px;
}

.ribbon-item:hover {
  border-color: #004eb2;
  background: #f8fafc;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 78, 178, 0.08);
}

.ribbon-icon {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ribbon-text {
  display: flex;
  flex-direction: column;
  line-height: 1.25;
}

.ribbon-line1 {
  font-size: 0.78rem;
  color: #4b5563;
  font-weight: 500;
}

.ribbon-line2 {
  font-size: 0.86rem;
  font-weight: 700;
  color: #0f172a;
}

@media (max-width: 1200px) {
  .ribbon-items-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .floating-ribbon-wrapper {
    margin-top: -24px;
  }
  .floating-ribbon-card {
    border-radius: 18px;
    padding: 12px;
  }
  .ribbon-items-grid {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 10px;
    padding-bottom: 6px;
    -webkit-overflow-scrolling: touch;
  }
  .ribbon-item {
    flex: 0 0 auto;
    min-width: 180px;
    scroll-snap-align: start;
  }
}

/* Promo star badge */
.promo-star-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #ffffff;
  border: 1.5px solid #ff6e02;
  border-radius: 8px;
  padding: 4px 10px;
  box-shadow: 0 3px 8px rgba(255, 110, 2, 0.15);
}

.promo-text {
  font-size: 0.75rem;
  font-weight: 800;
  color: #ff6e02;
  letter-spacing: 0.5px;
}

/* Schedule Blueprint Card (Matching User Image) */
.schedule-blueprint-card {
  background-color: #004eb2;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.13) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.13) 1px, transparent 1px);
  background-size: 38px 38px;
  border-radius: 24px;
  color: #ffffff;
  padding: 32px 28px;
  box-shadow: 0 16px 36px rgba(0, 78, 178, 0.22);
  border: 1.5px solid rgba(255, 255, 255, 0.22);
  position: relative;
  overflow: hidden;
}

.blueprint-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid rgba(255, 255, 255, 0.25);
  padding-bottom: 14px;
  margin-bottom: 14px;
}

.blueprint-col-title {
  font-size: 1.85rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  color: #ffffff;
}

.blueprint-rows-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.blueprint-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  border-radius: 12px;
  transition: all 0.2s ease;
  cursor: pointer;
}

.blueprint-row:hover {
  background: rgba(255, 255, 255, 0.18);
  transform: translateX(4px);
}

.blueprint-time {
  font-size: 1.18rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.2px;
}

.blueprint-class {
  font-size: 1.18rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.2px;
}

.blueprint-footnote {
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px dashed rgba(255, 255, 255, 0.25);
  font-style: italic;
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.92);
  text-align: center;
  font-weight: 500;
}

.schedule-table-row:hover {
  background-color: #f8fafc;
}

.overflow-x-auto {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.book-cover-overlay {
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(15,44,89,0.85) 100%);
}
</style>
