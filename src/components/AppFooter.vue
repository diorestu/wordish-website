<template>
  <footer class="bg-secondary text-white pt-12 pb-6">
    <v-container class="max-width-xl px-4">
      <v-row class="mb-8">
        <!-- Brand & LPK Info -->
        <v-col cols="12" md="5" class="pr-md-6">
          <div class="d-flex align-center mb-4">
            <div class="wordish-footer-box mr-3 d-flex align-center justify-center">
              <span class="font-weight-black text-white text-h6">W</span>
            </div>
            <div>
              <span class="text-h5 font-weight-bold text-white">wordish</span>
              <div class="text-caption text-teal-lighten-3 font-weight-bold">
                Lembaga Pelatihan Kerja (LPK) Bahasa Asing
              </div>
            </div>
          </div>
          <p class="text-body-2 text-grey-lighten-1 mb-4" style="line-height: 1.6;">
            LPK Wordish adalah lembaga pelatihan kerja resmi spesialis pendidikan bahasa asing (Mandarin, Korea, dan Inggris) yang berorientasi pada kesiapan kerja luar negeri, peluang karier industri, dan persiapan beasiswa studi.
          </p>
          <div class="text-caption text-grey-lighten-2 mb-2 d-flex align-center">
            <v-icon icon="mdi-shield-check" color="success" size="small" class="mr-2"></v-icon>
            Izin Operasional LPK Resmi No. Kemnaker: 563/024/LPK-BA/2024
          </div>
          <div class="text-caption text-grey-lighten-2 d-flex align-center">
            <v-icon icon="mdi-map-marker" color="accent" size="small" class="mr-2"></v-icon>
            Gedung Wordish Training Center, Jl. Pemuda No. 45, Jakarta Timur
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

        <!-- Fasilitas & Informasi -->
        <v-col cols="6" sm="4" md="2">
          <div class="text-subtitle-2 font-weight-bold text-accent mb-3 text-uppercase">Informasi</div>
          <ul class="list-unstyled text-body-2 pa-0 ma-0">
            <li class="mb-2"><a href="#jadwal" class="footer-link">Jadwal Batch Kelas</a></li>
            <li class="mb-2"><a href="#keunggulan" class="footer-link">Keunggulan LPK</a></li>
            <li class="mb-2"><a href="#testimoni" class="footer-link">Testimoni Alumni Kerja</a></li>
            <li class="mb-2"><a href="#faq" class="footer-link">Tanya Jawab (FAQ)</a></li>
          </ul>
        </v-col>

        <!-- Kontak & Jam Kerja -->
        <v-col cols="12" sm="4" md="3">
          <div class="text-subtitle-2 font-weight-bold text-accent mb-3 text-uppercase">Hubungi LPK</div>
          <div class="text-caption text-grey-lighten-2 mb-2">
            <v-icon icon="mdi-whatsapp" size="small" color="success" class="mr-1"></v-icon>
            WhatsApp: 0812-3456-7890
          </div>
          <div class="text-caption text-grey-lighten-2 mb-2">
            <v-icon icon="mdi-email-outline" size="small" color="accent" class="mr-1"></v-icon>
            info@wordish-lpk.id
          </div>
          <div class="text-caption text-grey-lighten-2 mb-4">
            <v-icon icon="mdi-clock-outline" size="small" class="mr-1"></v-icon>
            Senin - Sabtu: 08.00 - 20.00 WIB
          </div>
          <v-btn
            color="success"
            size="small"
            class="text-none font-weight-bold"
            prepend-icon="mdi-whatsapp"
            href="https://wa.me/6281234567890?text=Halo%20LPK%20Wordish"
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
.wordish-footer-box {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #00A5CF 0%, #0077B6 100%);
  border-radius: 8px;
}

.list-unstyled {
  list-style: none;
}

.footer-link {
  color: #CBD5E1;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-link:hover {
  color: #00A5CF;
  text-decoration: underline;
}
</style>
