<template>
  <div class="contact-page">
    <v-container class="max-width-lg py-10">
      <h1 class="text-h4 font-weight-bold text-secondary mb-2">Kontak & Lokasi Wordish</h1>
      <p class="text-body-1 text-grey-darken-1 mb-8">
        Kunjungi Training Center Wordish atau hubungi kami untuk konsultasi program bahasa.
      </p>

      <v-row>
        <v-col cols="12" md="6">
          <v-card class="pa-6 h-100" elevation="2">
            <h2 class="text-h6 font-weight-bold text-secondary mb-4">Informasi Kontak</h2>
            <div class="d-flex align-start mb-3">
              <v-icon icon="mdi-map-marker" color="primary" class="mr-3 mt-1"></v-icon>
              <div>
                <div class="font-weight-bold">Alamat</div>
                <div class="text-body-2 text-grey-darken-1">
                  Gedung Wordish Training Center, Jl. Pemuda No. 45, Jakarta Timur, DKI Jakarta, Indonesia
                </div>
              </div>
            </div>
            <div class="d-flex align-start mb-3">
              <v-icon icon="mdi-email-outline" color="primary" class="mr-3 mt-1"></v-icon>
              <div>
                <div class="font-weight-bold">Email</div>
                <a href="mailto:wordish.id@gmail.com" class="text-body-2">wordish.id@gmail.com</a>
              </div>
            </div>
            <div class="d-flex align-start mb-3">
              <v-icon icon="mdi-whatsapp" color="success" class="mr-3 mt-1"></v-icon>
              <div>
                <div class="font-weight-bold">WhatsApp</div>
                <a href="https://wa.me/6287864734308" target="_blank" class="text-body-2">0812-3456-7890</a>
              </div>
            </div>
            <div class="d-flex align-start mb-3">
              <v-icon icon="mdi-instagram" color="#E1306C" class="mr-3 mt-1"></v-icon>
              <div>
                <div class="font-weight-bold">Instagram</div>
                <a href="https://instagram.com/wordish.id" target="_blank" class="text-body-2">@wordish.id</a>
              </div>
            </div>
            <div class="d-flex align-start">
              <v-icon icon="mdi-clock-outline" color="primary" class="mr-3 mt-1"></v-icon>
              <div>
                <div class="font-weight-bold">Jam Operasional</div>
                <div class="text-body-2 text-grey-darken-1">Senin - Sabtu: 08.00 - 21.00 WIB</div>
              </div>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card class="overflow-hidden h-100" elevation="2">
            <iframe
              title="Lokasi Wordish Training Center"
              src="https://www.google.com/maps?q=Jl.+Pemuda+No.+45+Jakarta+Timur&output=embed"
              width="100%"
              height="100%"
              style="border:0; min-height: 360px;"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen
            ></iframe>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
// Static contact/location page for local SEO
</script>
