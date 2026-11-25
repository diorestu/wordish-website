<template>
  <div>
    <!-- Top Bar Notice -->
    <div class="bg-secondary text-white py-1 px-4 text-caption font-weight-medium d-flex align-center justify-space-between">
      <div class="d-flex align-center">
        <v-chip size="x-small" color="accent" class="font-weight-bold mr-2 text-white" label>
          BATCH DESEMBER
        </v-chip>
        <span>Pendaftaran Pelatihan Bahasa <strong>Mandarin, Korea & Inggris</strong> Resmi Dibuka (Sisa Kuota Terbatas)</span>
      </div>
      <div class="d-none d-md-flex align-center ga-4">
        <a href="https://wa.me/6281234567890" target="_blank" class="text-white text-decoration-none d-flex align-center">
          <v-icon size="small" icon="mdi-whatsapp" class="mr-1 text-success"></v-icon>
          Hotline WA: 0812-3456-7890
        </a>
        <span class="d-flex align-center">
          <v-icon size="small" icon="mdi-map-marker" class="mr-1 text-accent"></v-icon>
          Training Center & Online
        </span>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <v-app-bar flat height="72" class="border-b" color="surface">
      <v-container class="d-flex align-center pa-0 max-width-xl px-4">
        <!-- Logo -->
        <router-link to="/" class="d-flex align-center text-decoration-none mr-8">
          <div class="wordish-logo-badge mr-2 d-flex align-center justify-center">
            <span class="font-weight-black text-white text-h6">W</span>
          </div>
          <div>
            <div class="wordish-brand-text">wordish</div>
            <div class="text-caption text-primary font-weight-bold" style="font-size: 0.65rem !important; line-height: 1;">
              LPK PENDIDIKAN BAHASA ASING
            </div>
          </div>
        </router-link>

        <!-- Direct Navigation Links -->
        <div class="d-none d-md-flex align-center ga-2">
          <v-btn to="/" variant="text" class="text-none font-weight-bold text-body-2 text-secondary">
            Beranda
          </v-btn>
          <v-btn to="/products" variant="text" class="text-none font-weight-bold text-body-2 text-secondary">
            Program Bahasa
          </v-btn>
          <v-btn to="/tryout" variant="text" class="text-none font-weight-bold text-body-2 text-secondary">
            <v-icon icon="mdi-clipboard-check-outline" size="18" class="mr-1 text-primary"></v-icon>
            Tes Level Gratis
          </v-btn>
          <v-btn href="#jadwal" variant="text" class="text-none font-weight-medium text-body-2 text-secondary">
            Jadwal Batch
          </v-btn>
          <v-btn href="#keunggulan" variant="text" class="text-none font-weight-medium text-body-2 text-secondary">
            Keunggulan
          </v-btn>
          <v-btn href="#faq" variant="text" class="text-none font-weight-medium text-body-2 text-secondary">
            FAQ
          </v-btn>
        </div>

        <v-spacer></v-spacer>

        <!-- Right Side: Cart, Consultation, CTA -->
        <div class="d-flex align-center ga-3">
          <!-- Cart Button -->
          <v-btn icon variant="text" @click="cartStore.drawerOpen = true" class="text-secondary">
            <v-badge :content="cartStore.totalItemsCount" :model-value="cartStore.totalItemsCount > 0" color="accent">
              <v-icon icon="mdi-cart-outline" size="22"></v-icon>
            </v-badge>
          </v-btn>

          <!-- WhatsApp Quick Consult -->
          <v-btn
            variant="outlined"
            color="success"
            class="text-none font-weight-bold px-3 d-none d-sm-flex"
            prepend-icon="mdi-whatsapp"
            href="https://wa.me/6281234567890?text=Halo%20LPK%20Wordish,%20saya%20ingin%20tanya%20info%20pendaftaran%20kelas%20bahasa%20asing"
            target="_blank"
          >
            Tanya Admin
          </v-btn>

          <!-- Daftar CTA -->
          <v-btn
            color="primary"
            class="text-none font-weight-bold px-5 text-white shadow-sm"
            to="/products"
          >
            Daftar Kelas
          </v-btn>

          <!-- Mobile Hamburger -->
          <v-btn icon variant="text" class="d-flex d-md-none text-secondary" @click="mobileDrawer = !mobileDrawer">
            <v-icon icon="mdi-menu" size="26"></v-icon>
          </v-btn>
        </div>
      </v-container>
    </v-app-bar>

    <!-- Mobile Drawer -->
    <v-navigation-drawer v-model="mobileDrawer" temporary location="right" width="280">
      <div class="pa-4 bg-primary text-white d-flex align-center justify-space-between">
        <div>
          <div class="font-weight-bold text-subtitle-1">LPK Wordish</div>
          <div class="text-caption text-white opacity-80">Pelatihan Bahasa Asing</div>
        </div>
        <v-btn icon size="small" variant="text" @click="mobileDrawer = false">
          <v-icon icon="mdi-close" color="white"></v-icon>
        </v-btn>
      </div>

      <v-list nav class="pa-3">
        <v-list-item prepend-icon="mdi-home" title="Beranda" to="/" @click="mobileDrawer = false"></v-list-item>
        <v-list-item prepend-icon="mdi-translate" title="Pilihan Bahasa (Mandarin, Korea, Inggris)" to="/products" @click="mobileDrawer = false"></v-list-item>
        <v-list-item prepend-icon="mdi-clipboard-check" title="Tes Level Gratis" to="/tryout" @click="mobileDrawer = false"></v-list-item>
        <v-list-item prepend-icon="mdi-cart" title="Keranjang Pendaftaran" @click="cartStore.drawerOpen = true; mobileDrawer = false"></v-list-item>

        <v-divider class="my-3"></v-divider>

        <div class="pa-2">
          <v-btn
            block
            color="success"
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
            Pilih Program & Daftar
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
</script>

<style scoped>
.wordish-logo-badge {
  width: 38px;
  height: 38px;
  background: linear-gradient(135deg, #00A5CF 0%, #0077B6 100%);
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 165, 207, 0.3);
}

.wordish-brand-text {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  color: #0C2340;
}
</style>
