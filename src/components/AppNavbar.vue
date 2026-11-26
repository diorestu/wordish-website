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
            height="36"
            class="wordish-logo-img"
          />
        </router-link>

        <!-- Direct Navigation Links (Desktop: >= 960px) -->
        <div class="d-none d-md-flex align-center ga-1">
          <v-btn to="/products" variant="text" class="text-none font-weight-medium text-body-2 text-white nav-link-btn">
            Program & Layanan
          </v-btn>
          <v-btn to="/books" variant="text" class="text-none font-weight-medium text-body-2 text-white nav-link-btn">
            Buku Pelajaran
          </v-btn>
          <v-btn to="/tryout" variant="text" class="text-none font-weight-medium text-body-2 text-white nav-link-btn">
            Tes Level
          </v-btn>
          <v-btn to="/admin" variant="text" prepend-icon="mdi-shield-crown-outline" class="text-none font-weight-medium text-body-2 text-white nav-link-btn">
            Admin Kelas
          </v-btn>
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
            href="https://wa.me/6281234567890?text=Halo%20LPK%20Wordish,%20saya%20ingin%20tanya%20info%20pendaftaran%20kelas%20bahasa%20asing"
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
    <v-navigation-drawer v-model="mobileDrawer" temporary location="right" width="290">
      <div class="pa-4 bg-white border-b d-flex align-center justify-space-between">
        <img src="/wordish-logo.jpg" alt="Wordish" height="32" />
        <v-btn icon size="small" variant="text" @click="mobileDrawer = false">
          <v-icon icon="mdi-close"></v-icon>
        </v-btn>
      </div>

      <v-list nav class="pa-3">
        <v-list-item prepend-icon="mdi-home-outline" title="Beranda" to="/" @click="mobileDrawer = false"></v-list-item>
        <v-list-item prepend-icon="mdi-school-outline" title="Program & Format Kelas" to="/products" @click="mobileDrawer = false"></v-list-item>
        <v-list-item prepend-icon="mdi-book-open-page-variant-outline" title="Buku Pelajaran (Shopee/Tokopedia)" to="/books" @click="mobileDrawer = false"></v-list-item>
        <v-list-item prepend-icon="mdi-clipboard-check-outline" title="Tes Level Gratis" to="/tryout" @click="mobileDrawer = false"></v-list-item>
        <v-list-item prepend-icon="mdi-shield-crown-outline" title="Admin Kelola Kelas" to="/admin" @click="mobileDrawer = false"></v-list-item>
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
</style>
