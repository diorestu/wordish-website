<template>
  <div>
    <!-- Main Navigation Bar with #004EB2 Background -->
    <v-app-bar flat height="70" class="navbar-shadow" color="#004EB2">
      <v-container class="d-flex align-center pa-0 max-width-xl px-4 px-sm-6">
        <!-- Logo (White Variant on #004EB2) -->
        <router-link to="/" class="d-flex align-center text-decoration-none mr-6">
          <img
            src="/wordish-logo-white.png"
            alt="Wordish Logo"
            height="55"
            class="wordish-logo-img"
          />
        </router-link>

        <!-- Direct Navigation Links (Desktop: >= 960px) -->
        <div class="d-none d-md-flex align-center ga-1">
          <!-- Mega Menu: Program & Layanan -->
          <v-menu
            v-model="megaMenuOpen"
            open-on-hover
            :close-on-content-click="false"
            location="bottom start"
            transition="slide-y-transition"
            offset="14"
          >
            <template #activator="{ props }">
              <v-btn
                v-bind="props"
                variant="text"
                class="text-none font-weight-medium text-body-2 text-white nav-link-btn"
                :append-icon="megaMenuOpen ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              >
                Program &amp; Layanan
              </v-btn>
            </template>

            <v-card width="760" max-width="95vw" class="rounded-2xl shadow-xl overflow-hidden pa-0 mega-menu-card">
              <div class="pa-5 bg-grey-lighten-5 border-b d-flex align-center justify-space-between">
                <div>
                  <div class="text-subtitle-1 font-weight-bold text-secondary">Katalog Kursus &amp; Format Layanan</div>
                  <div class="text-caption text-grey">Pilih bahasa atau format kelas yang sesuai dengan kebutuhan belajarmu</div>
                </div>
                <v-btn
                  size="small"
                  variant="text"
                  color="primary"
                  class="text-none font-weight-bold"
                  to="/products"
                  @click="megaMenuOpen = false"
                >
                  Lihat Semua Program &gt;
                </v-btn>
              </div>

              <div class="pa-5">
                <v-row>
                  <!-- Col 1: Bahasa Asing -->
                  <v-col cols="6" class="border-e pr-4">
                    <div class="text-overline font-weight-bold text-primary mb-2" style="letter-spacing: 1px;">
                      Pilihan Bahasa
                    </div>
                    <div class="d-flex flex-column ga-2">
                      <router-link
                        to="/products?lang=mandarin"
                        class="mega-menu-item text-decoration-none pa-2 rounded-xl d-flex align-center ga-3"
                        @click="megaMenuOpen = false"
                      >
                        <v-avatar color="red-lighten-5" size="38" class="rounded-lg">
                          <v-icon icon="mdi-translate" color="#DC2626" size="20"></v-icon>
                        </v-avatar>
                        <div>
                          <div class="text-subtitle-2 font-weight-bold text-secondary">Bahasa Mandarin</div>
                          <div class="text-caption text-grey">Persiapan HSK 1-4, Bisnis, &amp; Anak</div>
                        </div>
                      </router-link>

                      <router-link
                        to="/products?lang=korean"
                        class="mega-menu-item text-decoration-none pa-2 rounded-xl d-flex align-center ga-3"
                        @click="megaMenuOpen = false"
                      >
                        <v-avatar color="blue-lighten-5" size="38" class="rounded-lg">
                          <v-icon icon="mdi-bullseye-arrow" color="#2563EB" size="20"></v-icon>
                        </v-avatar>
                        <div>
                          <div class="text-subtitle-2 font-weight-bold text-secondary">Bahasa Korea</div>
                          <div class="text-caption text-grey">Persiapan Kerja G to G EPS-TOPIK &amp; Hangeul</div>
                        </div>
                      </router-link>

                      <router-link
                        to="/products?lang=english"
                        class="mega-menu-item text-decoration-none pa-2 rounded-xl d-flex align-center ga-3"
                        @click="megaMenuOpen = false"
                      >
                        <v-avatar color="amber-lighten-5" size="38" class="rounded-lg">
                          <v-icon icon="mdi-account-voice" color="#D97706" size="20"></v-icon>
                        </v-avatar>
                        <div>
                          <div class="text-subtitle-2 font-weight-bold text-secondary">Bahasa Inggris</div>
                          <div class="text-caption text-grey">Conversation, TOEFL / IELTS, &amp; Phonics</div>
                        </div>
                      </router-link>
                    </div>
                  </v-col>

                  <!-- Col 2: Format Layanan Kelas -->
                  <v-col cols="6" class="pl-4">
                    <div class="text-overline font-weight-bold text-accent mb-2" style="letter-spacing: 1px;">
                      Format Layanan Kelas
                    </div>
                    <div class="d-flex flex-column ga-2">
                      <router-link
                        to="/#format-layanan"
                        class="mega-menu-item text-decoration-none pa-2 rounded-xl d-flex align-center ga-3"
                        @click="megaMenuOpen = false"
                      >
                        <v-avatar color="blue-lighten-5" size="38" class="rounded-lg">
                          <v-icon icon="mdi-account-group" color="#004EB2" size="20"></v-icon>
                        </v-avatar>
                        <div>
                          <div class="text-subtitle-2 font-weight-bold text-secondary">Regular Class</div>
                          <div class="text-caption text-grey">Grup maks. 6 murid &bull; Wordish Center</div>
                        </div>
                      </router-link>

                      <router-link
                        to="/#format-layanan"
                        class="mega-menu-item text-decoration-none pa-2 rounded-xl d-flex align-center ga-3"
                        @click="megaMenuOpen = false"
                      >
                        <v-avatar color="teal-lighten-5" size="38" class="rounded-lg">
                          <v-icon icon="mdi-account-multiple" color="#0D9488" size="20"></v-icon>
                        </v-avatar>
                        <div>
                          <div class="text-subtitle-2 font-weight-bold text-secondary">Semi-Private Class</div>
                          <div class="text-caption text-grey">Mini Grup 2–3 murid &bull; Jadwal fleksibel</div>
                        </div>
                      </router-link>

                      <router-link
                        to="/#format-layanan"
                        class="mega-menu-item text-decoration-none pa-2 rounded-xl d-flex align-center ga-3"
                        @click="megaMenuOpen = false"
                      >
                        <v-avatar color="orange-lighten-5" size="38" class="rounded-lg">
                          <v-icon icon="mdi-account-star" color="#FF6E02" size="20"></v-icon>
                        </v-avatar>
                        <div>
                          <div class="text-subtitle-2 font-weight-bold text-secondary">Private Class</div>
                          <div class="text-caption text-grey">1 on 1 Eksklusif &bull; Center / Home / Online</div>
                        </div>
                      </router-link>

                      <router-link
                        to="/#format-layanan"
                        class="mega-menu-item text-decoration-none pa-2 rounded-xl d-flex align-center ga-3"
                        @click="megaMenuOpen = false"
                      >
                        <v-avatar color="purple-lighten-5" size="38" class="rounded-lg">
                          <v-icon icon="mdi-laptop-account" color="#7C3AED" size="20"></v-icon>
                        </v-avatar>
                        <div>
                          <div class="text-subtitle-2 font-weight-bold text-secondary">Online Class</div>
                          <div class="text-caption text-grey">Live Zoom interaktif &bull; Seluruh Indonesia</div>
                        </div>
                      </router-link>
                    </div>
                  </v-col>
                </v-row>
              </div>

              <!-- Mega Menu Footer Banner -->
              <div class="px-5 py-3 bg-blue-lighten-5 d-flex align-center justify-space-between">
                <div class="d-flex align-center ga-2 text-caption font-weight-medium text-secondary">
                  <v-icon icon="mdi-gift-outline" color="accent" size="18"></v-icon>
                  <span>Belum tahu level kemampuanmu? Ikuti tes penempatan level online gratis!</span>
                </div>
                <v-btn
                  size="small"
                  variant="flat"
                  color="accent"
                  class="text-none font-weight-bold text-white"
                  to="/tryout"
                  @click="megaMenuOpen = false"
                >
                  Tes Sekarang
                </v-btn>
              </div>
            </v-card>
          </v-menu>

          <v-btn to="/books" variant="text" class="text-none font-weight-medium text-body-2 text-white nav-link-btn">
            Buku Pelajaran
          </v-btn>
          <v-btn to="/tryout" variant="text" class="text-none font-weight-medium text-body-2 text-white nav-link-btn">
            Tes Level
          </v-btn>
          <v-btn to="/about" variant="text" class="text-none font-weight-medium text-body-2 text-white nav-link-btn">
            Tentang Kami
          </v-btn>

          <!-- Menu Kontak (Modal Dialog Pop-up) -->
          <v-dialog v-model="contactDialogOpen" max-width="480">
            <template #activator="{ props }">
              <v-btn
                v-bind="props"
                variant="text"
                class="text-none font-weight-medium text-body-2 text-white nav-link-btn"
              >
                Kontak
              </v-btn>
            </template>

            <v-card class="rounded-3xl pa-6 bg-white shadow-xl">
              <div class="d-flex align-center justify-space-between mb-4">
                <div class="d-flex align-center ga-2">
                  <v-avatar color="primary" size="36" class="text-white">
                    <v-icon icon="mdi-phone-in-talk" size="20"></v-icon>
                  </v-avatar>
                  <div>
                    <h3 class="text-h6 font-weight-bold text-secondary mb-0">Hubungi Wordish</h3>
                    <div class="text-caption text-grey">Konsultasi jadwal &amp; pendaftaran kelas</div>
                  </div>
                </div>
                <v-btn icon size="small" variant="text" @click="contactDialogOpen = false">
                  <v-icon icon="mdi-close"></v-icon>
                </v-btn>
              </div>

              <div class="d-flex flex-column ga-3 mb-5">
                <a
                  href="https://wa.me/6281234567890?text=Halo%20Wordish,%20saya%20ingin%20konsultasi%20kelas%20bahasa%20asing"
                  target="_blank"
                  class="contact-option pa-3 rounded-2xl border text-decoration-none d-flex align-center ga-3"
                >
                  <v-avatar color="green-lighten-5" size="42">
                    <v-icon icon="mdi-whatsapp" color="#16A34A" size="24"></v-icon>
                  </v-avatar>
                  <div class="flex-grow-1">
                    <div class="text-subtitle-2 font-weight-bold text-secondary">WhatsApp Official</div>
                    <div class="text-caption text-grey">0812-3456-7890 &bull; Respon Cepat</div>
                  </div>
                  <v-chip color="success" size="x-small" variant="tonal" class="font-weight-bold">Chat</v-chip>
                </a>

                <a
                  href="mailto:wordish.id@gmail.com"
                  class="contact-option pa-3 rounded-2xl border text-decoration-none d-flex align-center ga-3"
                >
                  <v-avatar color="amber-lighten-5" size="42">
                    <v-icon icon="mdi-email-outline" color="#D97706" size="22"></v-icon>
                  </v-avatar>
                  <div class="flex-grow-1">
                    <div class="text-subtitle-2 font-weight-bold text-secondary">Email Resmi</div>
                    <div class="text-caption text-grey">wordish.id@gmail.com</div>
                  </div>
                  <v-chip color="amber-darken-3" size="x-small" variant="tonal" class="font-weight-bold">Email</v-chip>
                </a>

                <a
                  href="https://instagram.com/wordish.id"
                  target="_blank"
                  class="contact-option pa-3 rounded-2xl border text-decoration-none d-flex align-center ga-3"
                >
                  <v-avatar color="pink-lighten-5" size="42">
                    <v-icon icon="mdi-instagram" color="#E11D48" size="22"></v-icon>
                  </v-avatar>
                  <div class="flex-grow-1">
                    <div class="text-subtitle-2 font-weight-bold text-secondary">Instagram</div>
                    <div class="text-caption text-grey">@wordish.id &bull; Update &amp; Promo</div>
                  </div>
                  <v-chip color="pink" size="x-small" variant="tonal" class="font-weight-bold">Follow</v-chip>
                </a>

                <div class="pa-3 rounded-2xl bg-grey-lighten-5 border d-flex align-center ga-3">
                  <v-avatar color="grey-lighten-4" size="42">
                    <v-icon icon="mdi-clock-outline" color="grey-darken-2" size="22"></v-icon>
                  </v-avatar>
                  <div>
                    <div class="text-subtitle-2 font-weight-bold text-secondary">Jam Operasional</div>
                    <div class="text-caption text-grey-darken-1">Senin – Sabtu: 08.00 – 21.00 WIB</div>
                  </div>
                </div>
              </div>

              <v-btn
                block
                color="primary"
                class="text-none font-weight-bold text-white"
                href="https://wa.me/6281234567890?text=Halo%20Wordish,%20saya%20ingin%20konsultasi%20kelas"
                target="_blank"
                prepend-icon="mdi-whatsapp"
              >
                Mulai Chat WhatsApp Sekarang
              </v-btn>
            </v-card>
          </v-dialog>
        </div>

        <v-spacer></v-spacer>

        <!-- Right Side: Cart, CTA, WhatsApp -->
        <div class="d-flex align-center ga-2 ga-sm-3">
          <!-- Cart Button -->
          <v-btn icon variant="text" @click="cartStore.drawerOpen = true" class="text-white" title="Keranjang Pendaftaran">
            <v-icon icon="mdi-cart-outline" size="22"></v-icon>
          </v-btn>

          <!-- Daftar CTA (Accent Orange) -->
          <v-btn
            variant="flat"
            color="accent"
            class="text-none font-weight-bold px-4 px-sm-5 text-white shadow-sm"
            to="/products"
          >
            Daftar Kelas
          </v-btn>

          <!-- WhatsApp Chat -->
          <v-btn
            variant="outlined"
            color="white"
            class="text-none font-weight-bold px-3 d-none d-sm-flex"
            prepend-icon="mdi-whatsapp"
            href="https://wa.me/6281234567890?text=Halo%20Wordish,%20saya%20ingin%20tanya%20info%20pendaftaran%20kelas%20bahasa%20asing"
            target="_blank"
          >
            Konsultasi
          </v-btn>

          <!-- Mobile Hamburger -->
          <v-btn icon variant="text" class="d-flex d-md-none text-white" @click="mobileDrawer = !mobileDrawer">
            <v-icon icon="mdi-menu" size="26"></v-icon>
          </v-btn>
        </div>
      </v-container>
    </v-app-bar>

    <!-- Mobile Drawer -->
    <v-navigation-drawer v-model="mobileDrawer" temporary location="right" width="300">
      <div class="pa-4 bg-white border-b d-flex align-center justify-space-between">
        <img src="/wordish-logo.jpg" alt="Wordish" height="32" />
        <v-btn icon size="small" variant="text" @click="mobileDrawer = false">
          <v-icon icon="mdi-close"></v-icon>
        </v-btn>
      </div>

      <v-list nav class="pa-3">
        <v-list-item prepend-icon="mdi-home-outline" title="Beranda" to="/" @click="mobileDrawer = false"></v-list-item>
        
        <!-- Mobile Sub-group: Program & Layanan -->
        <v-list-group value="programs">
          <template #activator="{ props }">
            <v-list-item v-bind="props" prepend-icon="mdi-school-outline" title="Program &amp; Layanan"></v-list-item>
          </template>
          <v-list-item prepend-icon="mdi-translate" title="Bahasa Mandarin" to="/products?lang=mandarin" @click="mobileDrawer = false"></v-list-item>
          <v-list-item prepend-icon="mdi-bullseye-arrow" title="Bahasa Korea" to="/products?lang=korean" @click="mobileDrawer = false"></v-list-item>
          <v-list-item prepend-icon="mdi-account-voice" title="Bahasa Inggris" to="/products?lang=english" @click="mobileDrawer = false"></v-list-item>
          <v-list-item prepend-icon="mdi-view-grid-outline" title="Format Layanan Kelas" to="/#format-layanan" @click="mobileDrawer = false"></v-list-item>
          <v-list-item prepend-icon="mdi-format-list-bulleted" title="Semua Program" to="/products" @click="mobileDrawer = false"></v-list-item>
        </v-list-group>

        <v-list-item prepend-icon="mdi-book-open-page-variant-outline" title="Buku Pelajaran" to="/books" @click="mobileDrawer = false"></v-list-item>
        <v-list-item prepend-icon="mdi-clipboard-check-outline" title="Tes Level Gratis" to="/tryout" @click="mobileDrawer = false"></v-list-item>
        <v-list-item prepend-icon="mdi-information-outline" title="Tentang Kami" to="/about" @click="mobileDrawer = false"></v-list-item>
        <v-list-item prepend-icon="mdi-phone-outline" title="Kontak" @click="contactDialogOpen = true; mobileDrawer = false"></v-list-item>
        <v-list-item prepend-icon="mdi-cart-outline" title="Keranjang" @click="cartStore.drawerOpen = true; mobileDrawer = false"></v-list-item>

        <v-divider class="my-3"></v-divider>

        <div class="pa-2">
          <v-btn
            block
            color="success"
            variant="outlined"
            prepend-icon="mdi-whatsapp"
            class="text-none font-weight-bold mb-2"
            href="https://wa.me/6281234567890"
            target="_blank"
          >
            Konsultasi WhatsApp
          </v-btn>
          <v-btn
            block
            color="primary"
            class="text-none font-weight-bold text-white"
            to="/products"
            @click="mobileDrawer = false"
          >
            Daftar Kelas
          </v-btn>
        </div>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()
const mobileDrawer = ref(false)
const megaMenuOpen = ref(false)
const contactDialogOpen = ref(false)
</script>

<style scoped>
.navbar-shadow {
  box-shadow: 0 4px 12px rgba(0, 20, 60, 0.16) !important;
}

.wordish-logo-img {
  object-fit: contain;
  display: block;
}

.nav-link-btn {
  opacity: 0.92;
  transition: opacity 0.2s, background-color 0.2s;
}

.nav-link-btn:hover {
  opacity: 1;
  background-color: rgba(255, 255, 255, 0.12) !important;
}

.mega-menu-card {
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.mega-menu-item {
  transition: all 0.2s ease;
}

.mega-menu-item:hover {
  background-color: rgba(0, 78, 178, 0.06);
}

.contact-option {
  transition: all 0.2s ease;
  background-color: #FAFAFA;
}

.contact-option:hover {
  background-color: #F0F4FF;
  border-color: #004EB2 !important;
}
</style>
