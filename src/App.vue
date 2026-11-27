<template>
  <v-app>
    <!-- Main Top Navigation -->
    <AppNavbar />

    <!-- Main Dynamic Route View -->
    <v-main class="bg-grey-lighten-5">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>

    <!-- Global App Footer -->
    <AppFooter />

    <!-- Global Floating Action Buttons (WhatsApp & Scroll To Top) -->
    <div class="floating-actions-container">
      <!-- Scroll To Top Button -->
      <transition name="fab-slide">
        <v-btn
          v-show="showScrollTop"
          icon
          color="white"
          size="large"
          class="scroll-top-fab shadow-lg"
          @click="scrollToTop"
          title="Kembali ke atas"
          aria-label="Scroll to top"
        >
          <v-icon icon="mdi-arrow-up" color="secondary" size="24"></v-icon>
        </v-btn>
      </transition>

      <!-- Floating WhatsApp Button -->
      <v-btn
        icon
        color="#25D366"
        size="large"
        class="whatsapp-fab text-white shadow-xl"
        href="https://wa.me/6287864734308?text=Halo%20Wordish,%20saya%20ingin%20konsultasi%20program%20pelatihan%20bahasa"
        target="_blank"
        title="Chat WhatsApp Wordish"
        aria-label="Chat WhatsApp"
      >
        <v-icon icon="mdi-whatsapp" size="30"></v-icon>
        <span class="whatsapp-pulse"></span>
      </v-btn>
    </div>

    <!-- Global Dialogs & Drawers -->
    <AuthDialog />
    <CartDrawer />
    <CookieConsent />
  </v-app>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
import AuthDialog from './components/AuthDialog.vue'
import CartDrawer from './components/CartDrawer.vue'
import CookieConsent from './components/CookieConsent.vue'
import { useClassesStore } from './stores/classes'
import { captureUtm, trackEvent } from './utils/analytics'

const classesStore = useClassesStore()
const showScrollTop = ref(false)
let lenis = null

// Scroll to top dengan Lenis jika aktif, fallback ke window.scrollTo
const scrollToTop = () => {
  if (lenis) {
    lenis.scrollTo(0, { duration: 1.2 })
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300
}

onMounted(() => {
  classesStore.fetchAll()
  captureUtm()

  // Delegated tracking for key outbound CTAs
  document.addEventListener('click', (event) => {
    const link = event.target?.closest?.('a')
    if (!link || !link.href) return
    const href = link.href
    if (href.includes('wa.me')) {
      trackEvent('whatsapp_click', { link_url: href })
    } else if (href.includes('shopee.co.id') || href.includes('tokopedia.com')) {
      trackEvent('marketplace_click', { link_url: href })
    }
  })

  // Inisialisasi Lenis Smooth Scroll
  try {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5
    })

    function raf(time) {
      if (lenis) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
    }
    requestAnimationFrame(raf)
  } catch (err) {
    console.warn('Lenis smooth scroll fallback:', err)
  }

  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (lenis) {
    lenis.destroy()
    lenis = null
  }
})
</script>

<style>
/* Lenis Recommended Base CSS */
html.lenis, html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-smooth iframe {
  pointer-events: none;
}

/* Floating Actions Container */
.floating-actions-container {
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  z-index: 999;
}

/* Scroll To Top FAB */
.scroll-top-fab {
  border: 1px solid rgba(0, 0, 0, 0.08) !important;
  transition: transform 0.2s ease, box-shadow 0.2s ease !important;
}

.scroll-top-fab:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15) !important;
}

/* WhatsApp FAB */
.whatsapp-fab {
  position: relative;
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease !important;
}

.whatsapp-fab:hover {
  transform: scale(1.08) translateY(-2px);
  box-shadow: 0 10px 25px rgba(37, 211, 102, 0.45) !important;
}

/* Subtle Animated Ripple Ring on WhatsApp */
.whatsapp-pulse {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid #25D366;
  opacity: 0.8;
  animation: wa-pulse 2.4s cubic-bezier(0.24, 0, 0.38, 1) infinite;
  pointer-events: none;
}

@keyframes wa-pulse {
  0% {
    transform: scale(0.95);
    opacity: 0.8;
  }
  70% {
    transform: scale(1.35);
    opacity: 0;
  }
  100% {
    transform: scale(1.35);
    opacity: 0;
  }
}

/* FAB Transitions */
.fab-slide-enter-active,
.fab-slide-leave-active {
  transition: all 0.25s ease;
}

.fab-slide-enter-from,
.fab-slide-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.85);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
