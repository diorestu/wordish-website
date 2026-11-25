<template>
  <footer class="bg-secondary text-white pt-12 pb-6">
    <v-container class="max-width-xl px-4">
      <v-row class="mb-8">
        <!-- Brand & LPK Info -->
        <v-col cols="12" md="5" class="pr-md-6">
          <div class="mb-4">
            <div class="bg-white px-3 py-2 rounded-xl d-inline-block shadow-sm">
              <img
                src="/wordish-logo.jpg"
                alt="Wordish Logo"
                height="38"
                style="display: block; object-fit: contain;"
              />
            </div>
            <div class="text-caption text-teal-lighten-3 font-weight-bold mt-2">
              Lembaga Pelatihan Kerja (LPK) Bahasa Asing
            </div>
          </div>
          <p class="text-body-2 text-grey-lighten-1 mb-4" style="line-height: 1.6;">
            LPK Wordish adalah lembaga pelatihan kerja resmi spesialis pendidikan bahasa asing (Mandarin, Korea, dan Inggris) yang berorientasi pada kesiapan kerja luar negeri, peluang karier industri, dan persiapan beasiswa studi.
          </p>
          <div class="text-caption text-grey-lighten-2 mb-2 d-flex align-center">
            <v-icon icon="mdi-shield-check" color="success" size="small" class="mr-2"></v-icon>
            Izin Operasional LPK Resmi No. Kemnaker: 563/024/LPK-BA/2024
          </div>
          <div class="text-caption text-grey-lighten-2 d-flex align-center mb-4">
            <v-icon icon="mdi-map-marker" color="accent" size="small" class="mr-2"></v-icon>
            Gedung Wordish Training Center, Jl. Pemuda No. 45, Jakarta Timur
          </div>

          <!-- Social Media Buttons -->
          <div class="d-flex align-center ga-2">
            <v-btn
              icon
              size="small"
              variant="tonal"
              color="white"
              href="https://instagram.com/wordish.id"
              target="_blank"
              title="Instagram: wordish.id"
            >
              <v-icon icon="mdi-instagram" size="18"></v-icon>
            </v-btn>
            <v-btn
              icon
              size="small"
              variant="tonal"
              color="white"
              href="mailto:wordish.id@gmail.com"
              title="Email: wordish.id@gmail.com"
            >
              <v-icon icon="mdi-email-outline" size="18"></v-icon>
            </v-btn>
            <v-btn
              icon
              size="small"
              variant="tonal"
              color="white"
              href="https://wa.me/6281234567890?text=Halo%20LPK%20Wordish"
              target="_blank"
              title="WhatsApp: 0812-3456-7890"
            >
              <v-icon icon="mdi-whatsapp" size="18"></v-icon>
            </v-btn>
          </div>
        </v-col>

        <!-- Program Bahasa -->
        <v-col cols="6" sm="4" md="2">
          <div class="text-subtitle-2 font-weight-bold text-accent mb-3 text-uppercase">Program Bahasa</div>
          <ul class="list-unstyled text-body-2 pa-0 ma-0">
            <li class="mb-2"><router-link to="/products?lang=mandarin" class="footer-link">🇨🇳 Bahasa Mandarin (HSK)</router-link></li>
            <li class="mb-2"><router-link to="/products?lang=korean" class="footer-link">🇰🇷 Bahasa Korea (EPS-TOPIK)</router-link></li>
            <li class="mb-2"><router-link to="/products?lang=english" class="footer-link">🇬🇧 Bahasa Inggris (Speaking & IELTS)</router-link></li>
            <li class="mb-2"><router-link to="/tryout" class="footer-link">Tes Level Online Gratis</router-link></li>
          </ul>
        </v-col>

        <!-- Fasilitas & Layanan -->
        <v-col cols="6" sm="4" md="2">
          <div class="text-subtitle-2 font-weight-bold text-accent mb-3 text-uppercase">Layanan LPK</div>
          <ul class="list-unstyled text-body-2 pa-0 ma-0">
            <li class="mb-2"><router-link to="/products" class="footer-link">Private Class</router-link></li>
            <li class="mb-2"><router-link to="/products" class="footer-link">Home Class</router-link></li>
            <li class="mb-2"><router-link to="/products" class="footer-link">Online Class</router-link></li>
            <li class="mb-2"><router-link to="/elearning" class="footer-link">Portal E-Learning</router-link></li>
            <li class="mb-2"><router-link to="/books" class="footer-link">Buku Pelajaran Resmi</router-link></li>
            <li class="mb-2"><a href="#jadwal" class="footer-link">Jadwal Kelas (Senin - Sabtu)</a></li>
          </ul>
        </v-col>

        <!-- Kontak & Jam Kerja -->
        <v-col cols="12" sm="4" md="3">
          <div class="text-subtitle-2 font-weight-bold text-accent mb-3 text-uppercase">Hubungi LPK</div>

          <!-- Email -->
          <div class="text-caption text-grey-lighten-2 mb-2 d-flex align-center">
            <v-icon icon="mdi-email-outline" size="18" color="accent" class="mr-2"></v-icon>
            <a href="mailto:wordish.id@gmail.com" class="footer-link font-weight-medium">
              wordish.id@gmail.com
            </a>
          </div>

          <!-- Instagram -->
          <div class="text-caption text-grey-lighten-2 mb-2 d-flex align-center">
            <v-icon icon="mdi-instagram" size="18" color="#FF6E02" class="mr-2"></v-icon>
            <a href="https://instagram.com/wordish.id" target="_blank" class="footer-link font-weight-medium">
              @wordish.id
            </a>
          </div>

          <!-- WhatsApp -->
          <div class="text-caption text-grey-lighten-2 mb-2 d-flex align-center">
            <v-icon icon="mdi-whatsapp" size="18" color="success" class="mr-2"></v-icon>
            <a href="https://wa.me/6281234567890?text=Halo%20LPK%20Wordish" target="_blank" class="footer-link">
              0812-3456-7890
            </a>
          </div>

          <!-- Jam Kerja -->
          <div class="text-caption text-grey-lighten-2 mb-4 d-flex align-center">
            <v-icon icon="mdi-clock-outline" size="18" class="mr-2"></v-icon>
            <span>Senin - Sabtu: 08.00 - 21.00 WIB</span>
          </div>

          <v-btn
            color="success"
            size="small"
            class="text-none font-weight-bold"
            prepend-icon="mdi-whatsapp"
            href="https://wa.me/6281234567890?text=Halo%20LPK%20Wordish,%20saya%20ingin%20konsultasi%20kelas"
            target="_blank"
          >
            Chat WhatsApp Sekarang
          </v-btn>
        </v-col>
      </v-row>

      <v-divider class="border-opacity-25 my-6"></v-divider>

      <!-- Bottom Bar -->
      <div class="d-flex flex-column flex-md-row align-center justify-space-between text-caption text-grey-lighten-2">
        <div>
          © 2026 LPK Wordish. Seluruh Hak Cipta Dilindungi Undang-Undang.
        </div>
        <div class="d-flex align-center ga-4 mt-2 mt-md-0">
          <span>Terdaftar Resmi Kemnaker RI</span>
          <span>•</span>
          <span>Standar HSK • EPS-TOPIK • CEFR</span>
        </div>
      </div>
    </v-container>
  </footer>
</template>

<style scoped>
.list-unstyled {
  list-style: none;
}

.footer-link {
  color: #CBD5E1;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-link:hover {
  color: #FF6E02;
  text-decoration: underline;
}
</style>
