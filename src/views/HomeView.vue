<template>
  <div>
    <!-- 01. HERO SECTION -->
    <section class="rg-screenshot-hero position-relative pt-10 pt-md-16 pb-0">
      <div class="rg-hero-orb-left" aria-hidden="true"></div>
      <div class="rg-hero-orb-right" aria-hidden="true"></div>

      <div class="hero-container mx-auto px-6 px-sm-10 px-md-14 position-relative z-1">
        <v-row align="stretch" no-gutters>
          <v-col cols="12" md="7" lg="6" class="d-flex flex-column justify-center pr-md-6 pr-lg-8 pb-6 pb-md-20">
            <div class="hero-eyebrow mb-3">Connecting World with Words</div>

            <h1 class="hero-title mb-4">
              Belajar Bahasa,<br class="d-none d-sm-inline" />
              Buka Dunia!
            </h1>

            <p class="hero-subtitle mb-8">
              Dari ruang kelas hingga dunia kerja, dari hobi hingga mimpi besar. Belajar bahasa Mandarin, Inggris, dan Korea jadi lebih seru bersama Wordish.
            </p>

            <div class="d-flex flex-wrap ga-3">
              <v-btn
                color="accent"
                size="x-large"
                class="text-none font-weight-bold text-white shadow-sm hero-cta-btn"
                to="/products"
              >
                Mulai Belajar
                <v-icon icon="mdi-chevron-right" class="ml-1" size="22"></v-icon>
              </v-btn>
              <v-btn
                variant="outlined"
                color="white"
                size="x-large"
                class="text-none font-weight-bold hero-cta-btn"
                to="/products"
              >
                <v-icon icon="mdi-magnify" class="mr-2" size="20"></v-icon>
                Lihat Semua Kelas
              </v-btn>
            </div>
          </v-col>

          <v-col cols="12" md="5" lg="6" class="d-flex justify-center justify-md-end align-end">
            <img
              src="/hero-students.webp"
              alt="Siswa Berprestasi Wordish"
              width="1024"
              height="682"
              class="hero-students-img"
              loading="eager"
              fetchpriority="high"
            />
          </v-col>
        </v-row>
      </div>
    </section>

    <!-- SECTION: MITRA & SEKOLAH REKANAN (SEAMLESS OVERLAP TICKER) -->
    <section class="py-6 py-md-8 bg-white overflow-hidden">
      <div class="text-center mb-4 px-4">
        <div class="text-caption font-weight-bold text-uppercase text-grey-darken-1 letter-spacing-1">
          Dipercaya Oleh Berbagai Sekolah, Universitas &amp; Mitra Industri
        </div>
      </div>

      <!-- Full-bleed seamless scrolling track without right padding -->
      <div class="partners-marquee-wrapper position-relative">
        <!-- Optional soft fade mask on left edge only -->
        <div class="marquee-fade-left d-none d-sm-block"></div>

        <div class="partners-marquee-track">
          <!-- Repeat list twice for seamless continuous infinite loop -->
          <div
            v-for="(partner, pIdx) in [...partnersList, ...partnersList]"
            :key="`${partner.name}-${pIdx}`"
            class="partner-logo-item d-flex align-center ga-2 pa-2 px-3 rounded-xl flex-shrink-0"
          >
            <v-avatar :color="partner.badgeColor" size="36" class="rounded-lg shadow-sm">
              <v-icon :icon="partner.icon" :color="partner.iconColor" size="20"></v-icon>
            </v-avatar>
            <div>
              <div class="text-subtitle-2 font-weight-bold text-secondary text-no-wrap" style="font-size: 13px; line-height: 1.2;">
                {{ partner.name }}
              </div>
              <div class="text-caption text-grey text-no-wrap" style="font-size: 11px;">
                {{ partner.type }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 02. ABOUT US -->
    <section class="py-12 py-md-16 bg-white">
      <v-container class="max-width-xl px-4 px-sm-6">
        <v-row align="center">
          <v-col cols="12" md="6" class="pr-md-10">
            <div class="text-overline font-weight-bold text-primary mb-2" style="letter-spacing: 2px;">Hello, We're Wordish!</div>
            <h2 class="font-weight-bold text-secondary mb-4" style="font-size: 36px; line-height: 1.25;">
              Belajar Bahasa Nggak Harus Membosankan.
            </h2>
            <p class="text-body-1 text-grey-darken-1 mb-4" style="line-height: 1.75;">
              Di Wordish, kami percaya setiap orang bisa belajar bahasa baru dengan cara yang menyenangkan.
            </p>
            <p class="text-body-1 text-grey-darken-1 mb-4" style="line-height: 1.75;">
              Baik untuk sekolah, karier, traveling, atau sekadar menikmati budaya favoritmu, kami hadir untuk menemani setiap langkah perjalanan belajarmu.
            </p>
            <p class="text-body-1 font-weight-bold text-secondary mb-6" style="line-height: 1.75;">
              Belajar lebih santai, berkembang lebih percaya diri.
            </p>
            <div class="d-flex align-center ga-3 flex-wrap">
              <v-btn
                to="/about"
                color="primary"
                variant="flat"
                size="large"
                class="text-none font-weight-bold px-6 text-white rounded-xl shadow-sm"
                append-icon="mdi-arrow-right"
              >
                Tentang Kami
              </v-btn>
              <v-btn
                to="/products"
                variant="outlined"
                color="primary"
                size="large"
                class="text-none font-weight-bold px-5 rounded-xl"
              >
                Lihat Program
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="about-stats-grid">
              <v-card v-for="stat in aboutStats" :key="stat.label" class="pa-5 rounded-2xl border text-center bg-grey-lighten-5">
                <v-icon :icon="stat.icon" :color="stat.color" size="36" class="mb-2"></v-icon>
                <div class="text-h4 font-weight-black text-secondary">{{ stat.value }}</div>
                <div class="text-caption text-grey-darken-1 font-weight-medium">{{ stat.label }}</div>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- 03. LANGUAGE PROGRAMS -->
    <section id="language-programs" class="py-12 py-md-16 bg-grey-lighten-5">
      <v-container class="max-width-xl px-4 px-sm-6">
        <div class="text-center mb-10 mb-md-14">
          <div class="text-overline font-weight-bold text-primary mb-2" style="letter-spacing: 2px;">Pick Your Language</div>
          <h2 class="text-h4 text-sm-h3 font-weight-bold text-secondary mb-3">
            Tiga Bahasa, Banyak Cerita.
          </h2>
          <p class="text-body-1 text-grey-darken-1 max-width-md mx-auto">
            Pilih bahasa yang kamu suka dan mulai perjalanan menuju kesempatan baru.
          </p>
        </div>

        <v-row>
          <!-- Mandarin -->
          <v-col cols="12" md="4">
            <v-card class="h-100 rounded-3xl border bg-white d-flex flex-column overflow-hidden shadow-sm lang-card">
              <div class="lang-card-media position-relative overflow-hidden">
                <v-img
                  src="/lang-mandarin.webp"
                  alt="Belajar Bahasa Mandarin - Wordish"
                  height="210"
                  cover
                  class="lang-card-img"
                ></v-img>
              </div>
              <div class="pa-6 d-flex flex-column flex-grow-1">
                <div class="d-flex align-center justify-space-between mb-2">
                  <div class="d-flex align-center ga-2">
                    <span class="text-h5 font-weight-bold text-secondary">Mandarin</span>
                  </div>
                  <v-chip color="#E63946" size="small" variant="tonal" class="font-weight-bold">
                    你好！Nǐ Hǎo!
                  </v-chip>
                </div>
                <p class="text-body-2 text-grey-darken-1 mb-6" style="line-height: 1.65;">
                  Dari percakapan sehari-hari hingga peluang bisnis internasional. Kenali dunia Mandarin, satu kata dalam satu waktu.
                </p>
                <div class="mt-auto">
                  <v-btn
                    color="#E63946"
                    block
                    class="text-none font-weight-bold text-white"
                    to="/products?lang=mandarin"
                  >
                    Belajar Mandarin
                    <v-icon icon="mdi-arrow-right" class="ml-1" size="small"></v-icon>
                  </v-btn>
                </div>
              </div>
            </v-card>
          </v-col>

          <!-- English -->
          <v-col cols="12" md="4">
            <v-card class="h-100 rounded-3xl border bg-white d-flex flex-column overflow-hidden shadow-sm lang-card">
              <div class="lang-card-media position-relative overflow-hidden">
                <v-img
                  src="/lang-english.webp"
                  alt="Belajar Bahasa Inggris - Wordish"
                  height="210"
                  cover
                  class="lang-card-img"
                ></v-img>
              </div>
              <div class="pa-6 d-flex flex-column flex-grow-1">
                <div class="d-flex align-center justify-space-between mb-2">
                  <div class="d-flex align-center ga-2">
                    <span class="text-h5 font-weight-bold text-secondary">English</span>
                  </div>
                  <v-chip color="#0077B6" size="small" variant="tonal" class="font-weight-bold">
                    Hello, World!
                  </v-chip>
                </div>
                <p class="text-body-2 text-grey-darken-1 mb-6" style="line-height: 1.65;">
                  Lebih percaya diri saat presentasi, menghadapi interview, traveling, atau ngobrol dengan teman dari berbagai negara.
                </p>
                <div class="mt-auto">
                  <v-btn
                    color="#0077B6"
                    block
                    class="text-none font-weight-bold text-white"
                    to="/products?lang=english"
                  >
                    Belajar English
                    <v-icon icon="mdi-arrow-right" class="ml-1" size="small"></v-icon>
                  </v-btn>
                </div>
              </div>
            </v-card>
          </v-col>

          <!-- Korean -->
          <v-col cols="12" md="4">
            <v-card class="h-100 rounded-3xl border bg-white d-flex flex-column overflow-hidden shadow-sm lang-card">
              <div class="lang-card-media position-relative overflow-hidden">
                <v-img
                  src="/lang-korean.webp"
                  alt="Belajar Bahasa Korea - Wordish"
                  height="210"
                  cover
                  class="lang-card-img"
                ></v-img>
              </div>
              <div class="pa-6 d-flex flex-column flex-grow-1">
                <div class="d-flex align-center justify-space-between mb-2">
                  <div class="d-flex align-center ga-2">
                    <span class="text-h5 font-weight-bold text-secondary">Korean</span>
                  </div>
                  <v-chip color="#1D4ED8" size="small" variant="tonal" class="font-weight-bold">
                    안녕하세요!
                  </v-chip>
                </div>
                <p class="text-body-2 text-grey-darken-1 mb-6" style="line-height: 1.65;">
                  Nonton K-Drama, memahami lirik K-Pop, mengenal budaya Korea, hingga mempersiapkan peluang studi dan karier.
                </p>
                <div class="mt-auto">
                  <v-btn
                    color="#1D4ED8"
                    block
                    class="text-none font-weight-bold text-white"
                    to="/products?lang=korean"
                  >
                    Belajar Korean
                    <v-icon icon="mdi-arrow-right" class="ml-1" size="small"></v-icon>
                  </v-btn>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- 04. WHY WORDISH? -->
    <section class="py-12 py-md-16 bg-white">
      <v-container class="max-width-xl px-4 px-sm-6">
        <div class="text-center mb-10 mb-md-14">
          <div class="text-overline font-weight-bold text-primary mb-2" style="letter-spacing: 2px;">A Better Way to Learn</div>
          <h2 class="text-h4 text-sm-h3 font-weight-bold text-secondary mb-3">
            Seru Belajarnya, Nyata Manfaatnya.
          </h2>
        </div>

        <v-row>
          <v-col
            v-for="benefit in whyWordish"
            :key="benefit.title"
            cols="12"
            sm="6"
            md="4"
          >
            <v-card class="h-100 pa-6 rounded-3xl border bg-white shadow-sm hover-card transition-all">
              <div class="d-flex flex-column flex-sm-row align-start align-sm-center ga-4 mb-4">
                <img
                  :src="benefit.image"
                  :alt="benefit.title"
                  width="64"
                  height="64"
                  class="flex-shrink-0"
                  style="object-fit: contain;"
                />
                <div>
                  <div class="text-h6 font-weight-bold text-secondary mb-1">{{ benefit.title }}</div>
                </div>
              </div>
              <p class="text-body-2 text-grey-darken-1 mb-0" style="line-height: 1.6;">{{ benefit.desc }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- 05. WHO CAN JOIN? -->
    <section class="py-12 py-md-16 bg-grey-lighten-5">
      <v-container class="max-width-xl px-4 px-sm-6">
        <div class="text-center mb-10 mb-md-14">
          <div class="text-overline font-weight-bold text-primary mb-2" style="letter-spacing: 2px;">Everyone is Welcome!</div>
          <h2 class="text-h4 text-sm-h3 font-weight-bold text-secondary mb-3">
            Beda Tujuan, Satu Semangat Belajar.
          </h2>
        </div>

        <v-row>
          <v-col
            v-for="audience in whoCanJoin"
            :key="audience.title"
            cols="12"
            sm="6"
            md="3"
          >
            <v-card class="h-100 pa-6 rounded-3xl border bg-white text-center shadow-sm">
              <img
                :src="audience.image"
                :alt="audience.title"
                width="80"
                height="80"
                class="mb-4 mx-auto d-block"
                style="object-fit: contain;"
              />
              <div class="text-subtitle-1 font-weight-bold text-secondary mb-2">{{ audience.title }}</div>
              <p class="text-body-2 text-grey-darken-1" style="line-height: 1.6;">{{ audience.desc }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- SECTION: FORMAT LAYANAN KELAS (Regular, Semi-Private, Private, Online) -->
    <section id="format-layanan" class="py-12 py-md-16 bg-surface border-y">
      <v-container class="max-width-xl px-4 px-sm-6">
        <div class="text-center mb-10 mb-md-14">
          <div class="text-overline font-weight-bold text-primary mb-2" style="letter-spacing: 2px;">Flexible Learning</div>
          <h2 class="text-h4 text-sm-h3 font-weight-bold text-secondary mb-3">
            Pilihan Format Layanan Kelas
          </h2>
          <p class="text-body-1 text-grey-darken-1 max-width-md mx-auto">
            Tentukan format belajar terbaik yang sesuai dengan jumlah murid, waktu luang, dan lokasimu.
          </p>
        </div>

        <v-row>
          <v-col
            v-for="mode in classModes"
            :key="mode.id"
            cols="12"
            sm="6"
            lg="3"
          >
            <v-card class="h-100 rounded-3xl border bg-white d-flex flex-column overflow-hidden shadow-sm lang-card">
              <div class="lang-card-media position-relative overflow-hidden">
                <v-img
                  :src="mode.bannerImage"
                  :alt="mode.name"
                  height="160"
                  cover
                  class="lang-card-img"
                ></v-img>
                <div class="position-absolute top-0 right-0 ma-3">
                  <v-chip :color="mode.color" size="small" variant="flat" class="text-white font-weight-bold shadow-sm">
                    {{ mode.shortBadge }}
                  </v-chip>
                </div>
              </div>

              <div class="pa-5 d-flex flex-column flex-grow-1">
                <!-- Title & Subtitle: Single row without wrapping -->
                <div class="d-flex align-center ga-2 mb-1">
                  <v-icon :icon="mode.icon" :color="mode.color" size="22" class="flex-shrink-0"></v-icon>
                  <h3 class="text-subtitle-1 font-weight-bold text-secondary text-truncate mb-0 text-no-wrap" style="letter-spacing: -0.2px;">
                    {{ mode.name }}
                  </h3>
                </div>
                <div class="text-caption text-grey-darken-1 text-truncate mb-3" style="line-height: 1.3;">
                  {{ mode.subtitle }}
                </div>

                <p class="text-body-2 text-grey-darken-1 mb-4" style="line-height: 1.55;">
                  {{ mode.desc }}
                </p>

                <!-- Keunggulan Singkat -->
                <div class="d-flex flex-column ga-2 mb-5">
                  <div
                    v-for="(h, hIdx) in mode.highlights"
                    :key="hIdx"
                    class="d-flex align-start text-caption text-grey-darken-2"
                  >
                    <v-icon icon="mdi-check-circle" color="teal" size="15" class="mr-2 mt-0-5 flex-shrink-0"></v-icon>
                    <span style="line-height: 1.4;">{{ h }}</span>
                  </div>
                </div>

                <div class="mt-auto">
                  <v-btn
                    :color="mode.color"
                    block
                    class="text-none font-weight-bold text-white text-no-wrap"
                    :to="`/services/${mode.id}`"
                  >
                    Detail Layanan
                    <v-icon icon="mdi-arrow-right" class="ml-1" size="small"></v-icon>
                  </v-btn>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
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
            Tersedia dan dapat langsung dipesan melalui Official Store kami di <strong>Tokopedia / TikTok Shop</strong>.
          </p>
        </div>

        <v-row justify="center">
          <v-col
            v-for="book in books"
            :key="book.id"
            cols="12"
            sm="6"
            md="5"
            lg="4"
          >
            <v-card class="h-100 rounded-3xl border bg-white d-flex flex-column justify-space-between shadow-sm rg-card-border overflow-hidden">
              <div>
                <!-- Book Cover -->
                <v-img
                  :src="book.coverImage"
                  height="220"
                  cover
                  class="align-end text-white bg-blue-darken-3"
                >
                  <div class="pa-2 book-cover-overlay d-flex justify-space-between align-center w-100">
                    <span class="text-caption font-weight-bold text-white">{{ book.language }}</span>
                  </div>
                </v-img>

                <div class="pa-5">
                  <div class="d-flex align-center justify-space-between text-caption text-grey mb-1">
                    <span class="font-weight-medium">{{ book.pages }}</span>
                    <span class="text-amber-darken-3 font-weight-bold d-flex align-center">
                      <v-icon icon="mdi-star" size="14" class="mr-1"></v-icon>
                      {{ book.rating }}
                    </span>
                  </div>

                  <div class="text-h6 font-weight-bold text-secondary mb-2" style="line-height: 1.35;">
                    {{ book.title }}
                  </div>

                  <p class="text-body-2 text-grey-darken-1 mb-4" style="line-height: 1.5;" :title="book.description">
                    {{ book.description }}
                  </p>

                  <div class="d-flex align-baseline ga-2 mb-2">
                    <span class="text-h6 font-weight-black text-primary" style="font-weight: 900 !important;">
                      {{ formatRupiah(book.price) }}
                    </span>
                    <span class="text-caption text-grey text-decoration-line-through">
                      {{ formatRupiah(book.originalPrice) }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Action Marketplace Buttons -->
              <div class="px-5 pb-5 pt-0 d-flex flex-column ga-2">
                <v-btn
                  color="#03AC0E"
                  variant="flat"
                  block
                  size="small"
                  class="text-none font-weight-bold text-white py-2"
                  prepend-icon="mdi-storefront"
                  :href="book.tokopediaUrl"
                  target="_blank"
                >
                  Beli di Tokopedia / TikTok Shop
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

    <!-- JADWAL KELAS HARIAN (Senin - Sabtu) -->
    <section id="jadwal" class="py-12 py-md-16 bg-surface border-t">
      <v-container class="max-width-xl px-4 px-sm-6">
        <div class="text-center mb-8 mb-md-12">
          <v-chip color="primary" variant="tonal" class="font-weight-bold mb-3" size="small">
            <v-icon icon="mdi-calendar-clock" start size="16"></v-icon>
            Jadwal Belajar Fleksibel
          </v-chip>
          <h2 class="text-h4 text-sm-h3 font-weight-bold text-secondary mb-3">
            Jadwal Harian Kelas Wordish
          </h2>
          <p class="text-body-1 text-grey-darken-1 max-width-md mx-auto">
            Kelas berlangsung dari <strong>Senin sampai Sabtu</strong>. Pilihan format belajar lengkap: <strong>Regular Class</strong>, <strong>Semi-Private Class</strong>, <strong>Private Class</strong> (1-on-1), dan <strong>Online Class</strong>.
          </p>
        </div>

        <v-row class="mb-8" align="stretch">
          <!-- Col 1: Tabel Jam & Kelas -->
          <v-col cols="12" lg="6">
            <v-card class="rounded-3xl border bg-white shadow-sm overflow-hidden h-100 d-flex flex-column justify-space-between">
              <v-table class="schedule-simple-table">
                <thead>
                  <tr class="bg-grey-lighten-4 text-caption text-uppercase">
                    <th class="font-weight-bold text-secondary py-4 px-5">Jam</th>
                    <th class="font-weight-bold text-secondary py-4 px-5">Kelas</th>
                    <th class="font-weight-bold text-secondary py-4 px-5 text-right"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in classesStore.batchSchedules.slice(0, 7)"
                    :key="item.id"
                    class="schedule-table-row cursor-pointer"
                    @click="bookScheduleSlot(item)"
                    :title="`Klik untuk booking kelas ${item.className} jam ${item.time}`"
                  >
                    <td class="py-4 px-5 font-weight-bold text-body-1 text-primary text-no-wrap">
                      {{ item.time }} WIB
                    </td>
                    <td class="py-4 px-5 font-weight-bold text-body-1 text-secondary">
                      {{ item.className }}
                    </td>
                    <td class="py-4 px-5 text-right">
                      <v-icon icon="mdi-chevron-right" size="20" color="grey-darken-1"></v-icon>
                    </td>
                  </tr>
                </tbody>
              </v-table>

              <div class="pa-4 bg-grey-lighten-5 border-t text-center text-body-2 font-italic text-grey-darken-1">
                *Kelas berlangsung dari Senin - Sabtu
              </div>
            </v-card>
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

        <div class="d-flex flex-column flex-sm-row align-center justify-center ga-3">
          <v-btn
            color="success"
            size="large"
            class="text-none font-weight-bold px-6 shadow-sm"
            prepend-icon="mdi-whatsapp"
            href="https://wa.me/6287864734308?text=Halo%20Wordish,%20saya%20ingin%20konsultasi%20jadwal%20dan%20pendaftaran%20kelas%20[KODE:HM-JADWAL]"
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
            Kisah Sukses Alumni Wordish
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
                Alumni Resmi Wordish
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

        <v-expansion-panels variant="accordion" flat class="faq-accordion rounded-2xl overflow-hidden">
          <v-expansion-panel
            v-for="(f, idx) in faqs"
            :key="idx"
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
          Hubungi konselor Wordish untuk konsultasi gratis penentuan format kelas (Private, Home, atau Online), rincian biaya, dan info persiapan berkas kerja ke luar negeri.
        </p>
        <div class="d-flex flex-column flex-sm-row justify-center align-center ga-3">
          <v-btn
            color="white"
            size="large"
            class="text-primary font-weight-bold text-none px-8"
            prepend-icon="mdi-whatsapp"
            href="https://wa.me/6287864734308?text=Halo%20Wordish,%20saya%20ingin%20konsultasi%20program%20pelatihan%20[KODE:HM-BANNER]"
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
          Nomor WhatsApp <strong>+62 {{ heroPhone }}</strong> berhasil didaftarkan untuk promo diskon 30% semua format kelas Wordish (Regular, Semi-Private, Private, Online Class).
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
            :href="`https://wa.me/6287864734308?text=Halo%20Wordish,%20saya%20sudah%20mendaftarkan%20nomor%20%2B62${heroPhone}%20dan%20ingin%20klaim%20Diskon%20Spesial%2030%25%20Kode%20WORDISH30%20[KODE:HM-PROMO30]`"
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
import { languages, classModes, books, testimonials, faqs, truncateText } from '../data/wordishData'
import { useClassesStore } from '../stores/classes'
import { useCartStore } from '../stores/cart'

const router = useRouter()
const classesStore = useClassesStore()
const cartStore = useCartStore()

const activeLanguageFilter = ref('all')
const heroPhone = ref('')
const discountDialog = ref(false)

// Mitra & Sekolah Rekanan (Auto-slide per 3 detik)
const partnersList = [
  { name: 'SMA Taruna Nusantara', type: 'Sekolah Menengah', icon: 'mdi-school', badgeColor: 'blue-lighten-5', iconColor: '#004EB2' },
  { name: 'SMK Telkom Global', type: 'Mitra Vokasi', icon: 'mdi-domain', badgeColor: 'amber-lighten-5', iconColor: '#D97706' },
  { name: 'Bina Bangsa School', type: 'Sekolah Internasional', icon: 'mdi-book-education', badgeColor: 'teal-lighten-5', iconColor: '#0D9488' },
  { name: 'Universitas Indonesia Career', type: 'Pusat Karier Kampus', icon: 'mdi-school-outline', badgeColor: 'purple-lighten-5', iconColor: '#7C3AED' },
  { name: 'PT Hanwha Mining ID', type: 'Mitra Industri Korea', icon: 'mdi-office-building', badgeColor: 'blue-lighten-5', iconColor: '#2563EB' },
  { name: 'Sinarmas Tech Group', type: 'Mitra Korporat Mandarin', icon: 'mdi-briefcase-check', badgeColor: 'red-lighten-5', iconColor: '#DC2626' },
  { name: 'SMA Santa Ursula', type: 'Sekolah Rekanan', icon: 'mdi-shield-check-outline', badgeColor: 'green-lighten-5', iconColor: '#16A34A' },
  { name: 'SMK Negeri 1 Jakarta', type: 'Sekolah Kejuruan', icon: 'mdi-certificate-outline', badgeColor: 'orange-lighten-5', iconColor: '#EA580C' },
  { name: 'Global Jaya Academy', type: 'Sekolah Cambridge', icon: 'mdi-earth', badgeColor: 'pink-lighten-5', iconColor: '#E11D48' },
  { name: 'PT LG Electronics ID', type: 'Sponsor Program Korea', icon: 'mdi-cog-outline', badgeColor: 'indigo-lighten-5', iconColor: '#4F46E5' },
  { name: 'BP2MI Hub Jawa Barat', type: 'Pemberangkatan G to G', icon: 'mdi-airplane-takeoff', badgeColor: 'teal-lighten-5', iconColor: '#0F766E' },
  { name: 'Jakarta Intercultural School', type: 'Sekolah Rekanan', icon: 'mdi-account-star-outline', badgeColor: 'amber-lighten-5', iconColor: '#B45309' }
]

// Kelompokkan partner menjadi grup slide (masing-masing 4 partner per slide)
const partnerGroups = computed(() => {
  const groups = []
  const perGroup = 4
  for (let i = 0; i < partnersList.length; i += perGroup) {
    groups.push(partnersList.slice(i, i + perGroup))
  }
  return groups
})

// 02. About Us stats
const aboutStats = [
  { icon: 'mdi-account-group', value: '5,000+', label: 'Siswa Aktif', color: 'primary' },
  { icon: 'mdi-certificate', value: '3', label: 'Bahasa Tersedia', color: 'accent' },
  { icon: 'mdi-star', value: '4.9', label: 'Rating Kepuasan', color: 'amber-darken-2' },
  { icon: 'mdi-briefcase-check', value: '500+', label: 'Alumni Berkarier', color: 'teal' }
]

// 04. Why Wordish benefits
const whyWordish = [
  {
    image: '/why-fun-learning.svg',
    icon: 'mdi-emoticon-happy-outline',
    title: 'Fun Learning',
    desc: 'Belajar dengan suasana yang menyenangkan, interaktif, dan penuh semangat tanpa tekanan.',
    bgColor: 'amber-lighten-4',
    iconColor: 'amber-darken-3'
  },
  {
    image: '/why-real-conversations.svg',
    icon: 'mdi-forum-outline',
    title: 'Real Conversations',
    desc: 'Bukan sekadar rumus teori, tetapi latihan percakapan nyata yang langsung bisa kamu gunakan sehari-hari.',
    bgColor: 'blue-lighten-4',
    iconColor: 'blue-darken-2'
  },
  {
    image: '/why-step-by-step.svg',
    icon: 'mdi-stairs-up',
    title: 'Step by Step',
    desc: 'Kurikulum terstruktur mulai dari dasar pemula hingga mahir, bertahap sesuai kecepatan belajarmu.',
    bgColor: 'teal-lighten-4',
    iconColor: 'teal-darken-2'
  },
  {
    image: '/why-build-confidence.svg',
    icon: 'mdi-arm-flex-outline',
    title: 'Build Confidence',
    desc: 'Bangun rasa percaya diri tinggi untuk berbicara bahasa asing di depan umum tanpa rasa takut salah.',
    bgColor: 'deep-purple-lighten-4',
    iconColor: 'deep-purple-darken-1'
  },
  {
    image: '/why-explore-cultures.svg',
    icon: 'mdi-earth',
    title: 'Explore Cultures',
    desc: 'Pahami konteks sosial, etika komunikasi, dan keunikan budaya asli di balik bahasa yang kamu pelajari.',
    bgColor: 'pink-lighten-4',
    iconColor: 'pink-darken-2'
  },
  {
    image: '/why-future-ready.svg',
    icon: 'mdi-rocket-launch-outline',
    title: 'Future Ready',
    desc: 'Siapkan bekal bahasa untuk akselerasi karier internasional, beasiswa studi luar negeri, dan peluang kerja global.',
    bgColor: 'green-lighten-4',
    iconColor: 'green-darken-2'
  }
]

// 05. Who Can Join audiences
const whoCanJoin = [
  {
    image: '/audience-school.svg',
    icon: 'mdi-school-outline',
    title: 'School Students',
    desc: 'Belajar bahasa baru, tingkatkan kemampuan akademis, dan temukan pengalaman seru di luar sekolah.',
    bgColor: 'blue-lighten-4',
    iconColor: 'blue-darken-2'
  },
  {
    image: '/audience-college.svg',
    icon: 'mdi-account-school',
    title: 'College Students',
    desc: 'Persiapkan studi, beasiswa, dan langkah pertama menuju dunia profesional.',
    bgColor: 'deep-purple-lighten-4',
    iconColor: 'deep-purple-darken-1'
  },
  {
    image: '/audience-professionals.svg',
    icon: 'mdi-briefcase-outline',
    title: 'Professionals',
    desc: 'Upgrade skill komunikasi, tingkatkan kepercayaan diri, dan buka peluang karier yang lebih luas.',
    bgColor: 'teal-lighten-4',
    iconColor: 'teal-darken-2'
  },
  {
    image: '/audience-lovers.svg',
    icon: 'mdi-heart-outline',
    title: 'Language Lovers',
    desc: 'Belajar karena hobi, traveling, atau sekadar ingin mencoba sesuatu yang baru.',
    bgColor: 'pink-lighten-4',
    iconColor: 'pink-darken-2'
  }
]

function scrollToPrograms() {
  const el = document.getElementById('language-programs')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function bookScheduleSlot(slot) {
  const msg = `Halo Wordish, saya ingin konsultasi/booking jadwal kelas ${slot.className} jam ${slot.time} (${slot.days}). Mohon info ketersediaan slotnya. [KODE:HM-SLOT]`
  window.open(`https://wa.me/6287864734308?text=${encodeURIComponent(msg)}`, '_blank')
}

function submitDiscount() {
  if (heroPhone.value && heroPhone.value.trim().length >= 4) {
    discountDialog.value = true
  }
}

const filteredPrograms = computed(() => {
  if (activeLanguageFilter.value === 'all') return classesStore.activePrograms
  return classesStore.activePrograms.filter(p => p.languageId === activeLanguageFilter.value)
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
  const list = classesStore.activePrograms
  const epsProgram = list.find(p => p.id === 'korean-eps') || list[0]
  if (!epsProgram) {
    router.push('/products')
    return
  }
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

.hero-eyebrow {
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
}

.hero-title {
  font-size: 2.75rem;
  font-weight: 900;
  line-height: 1.15;
  letter-spacing: -0.5px;
  color: #ffffff;
}

@media (max-width: 960px) {
  .hero-title {
    font-size: 2.1rem;
  }
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 1.65rem;
  }
}

.hero-subtitle {
  font-size: 1.1rem;
  font-weight: 400;
  color: #ffffff;
  opacity: 0.93;
  line-height: 1.65;
  max-width: 520px;
}

.hero-cta-btn {
  border-radius: 12px !important;
  letter-spacing: 0.3px;
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

.partners-marquee-wrapper {
  width: 100%;
  overflow: hidden;
  padding: 8px 0;
}

.marquee-fade-left {
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 100%;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0));
  z-index: 2;
  pointer-events: none;
}

.partners-marquee-track {
  display: flex;
  align-items: center;
  gap: 24px;
  width: max-content;
  animation: marquee-scroll 45s linear infinite;
  padding-left: 24px;
  padding-right: 0;
}

.partners-marquee-wrapper:hover .partners-marquee-track {
  animation-play-state: paused;
}

@keyframes marquee-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.partner-logo-item {
  transition: transform 0.2s ease, background-color 0.2s ease;
  background-color: #fafafa;
  border: 1px solid rgba(0, 0, 0, 0.04);
}

.partner-logo-item:hover {
  background-color: #f1f5f9;
  transform: translateY(-2px);
}

/* About stats grid */
.about-stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

/* Language cards */
.lang-card {
  transition: transform 0.22s ease, box-shadow 0.22s ease;
}

.lang-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
}

.lang-card-header {
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

/* Schedule table */
.schedule-table-row {
  transition: background-color 0.2s ease;
}

.schedule-table-row:hover {
  background-color: #f8fafc;
}

.faq-accordion :deep(.v-expansion-panel::after) {
  display: none;
}

.overflow-x-auto {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.book-cover-overlay {
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(15,44,89,0.85) 100%);
}
</style>
