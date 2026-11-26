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

    <!-- Global Dialogs & Drawers -->
    <AuthDialog />
    <CartDrawer />
  </v-app>
</template>

<script setup>
import { onMounted } from 'vue'
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
import AuthDialog from './components/AuthDialog.vue'
import CartDrawer from './components/CartDrawer.vue'
import { useClassesStore } from './stores/classes'

const classesStore = useClassesStore()

onMounted(() => {
  classesStore.fetchAll()
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
