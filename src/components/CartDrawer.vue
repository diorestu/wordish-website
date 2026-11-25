<template>
  <v-navigation-drawer
    v-model="cartStore.drawerOpen"
    location="right"
    temporary
    :width="$vuetify.display?.xs ? 320 : 400"
  >
    <div class="d-flex flex-column h-100">
      <!-- Header -->
      <div class="pa-4 bg-secondary text-white d-flex align-center justify-space-between">
        <div class="d-flex align-center">
          <v-icon icon="mdi-cart" class="mr-2 text-accent"></v-icon>
          <span class="font-weight-bold text-subtitle-1">Keranjang Pendaftaran</span>
        </div>
        <v-btn icon size="small" variant="text" @click="cartStore.drawerOpen = false">
          <v-icon icon="mdi-close" color="white"></v-icon>
        </v-btn>
      </div>

      <!-- Items List -->
      <div class="flex-grow-1 overflow-y-auto pa-4">
        <!-- Empty State -->
        <div v-if="cartStore.items.length === 0" class="text-center py-12">
          <v-icon icon="mdi-cart-off" size="64" color="grey-lighten-1" class="mb-3"></v-icon>
          <div class="text-subtitle-1 font-weight-bold text-secondary mb-1">
            Belum Ada Program Dipilih
          </div>
          <p class="text-caption text-grey mb-4">
            Pilih program pelatihan bahasa Mandarin, Korea, atau Inggris untuk mendaftar.
          </p>
          <v-btn color="primary" to="/products" @click="cartStore.drawerOpen = false" class="text-none">
            Lihat Pilihan Program
          </v-btn>
        </div>

        <!-- Items list -->
        <div v-else class="d-flex flex-column ga-3">
          <v-card
            v-for="item in cartStore.items"
            :key="item.id"
            variant="outlined"
            class="pa-3 rounded-2xl border-dashed"
          >
            <div class="d-flex justify-space-between align-start mb-1">
              <div>
                <v-chip size="x-small" color="primary" variant="flat" class="font-weight-bold mb-1">
                  {{ item.level || 'Program Pelatihan' }}
                </v-chip>
                <div class="font-weight-bold text-body-2 text-secondary">
                  {{ item.title }}
                </div>
              </div>
              <v-btn
                icon
                size="x-small"
                variant="text"
                color="error"
                @click="cartStore.removeItem(item.id)"
              >
                <v-icon icon="mdi-trash-can-outline" size="18"></v-icon>
              </v-btn>
            </div>

            <div class="text-caption text-grey mb-2">
              <v-icon icon="mdi-clock-outline" size="small" class="mr-1"></v-icon>
              {{ item.duration }}
            </div>

            <div class="d-flex align-baseline ga-2">
              <span class="text-subtitle-1 font-weight-bold text-primary">
                {{ formatRupiah(item.price || item.discountedPrice) }}
              </span>
              <span v-if="item.originalPrice" class="text-caption text-grey text-decoration-line-through">
                {{ formatRupiah(item.originalPrice) }}
              </span>
            </div>
          </v-card>

          <!-- Voucher Box -->
          <v-card variant="tonal" color="grey-lighten-4" class="pa-3 rounded-2xl mt-2">
            <div class="text-caption font-weight-bold text-secondary mb-2 d-flex align-center">
              <v-icon icon="mdi-ticket-percent-outline" color="accent" size="small" class="mr-1"></v-icon>
              Kode Promo Diskon
            </div>
            <div class="d-flex ga-2">
              <v-text-field
                v-model="voucherInput"
                placeholder="Kode Promo (cth: RUANGJUARA)"
                density="compact"
                hide-details
                bg-color="white"
                class="flex-grow-1"
              ></v-text-field>
              <v-btn
                color="primary"
                variant="flat"
                class="text-none font-weight-bold"
                @click="applyVoucherCode"
              >
                Pakai
              </v-btn>
            </div>

            <div v-if="cartStore.appliedVoucher" class="mt-2 d-flex justify-space-between align-center bg-teal-lighten-5 pa-2 rounded-lg">
              <div class="text-caption text-teal-darken-3 font-weight-bold">
                <v-icon icon="mdi-check-circle" size="small" color="teal" class="mr-1"></v-icon>
                {{ cartStore.appliedVoucher.code }}: Diskon {{ (cartStore.appliedVoucher.percentage * 100) }}%
              </div>
              <v-btn icon size="x-small" variant="text" color="error" @click="cartStore.removeVoucher()">
                <v-icon icon="mdi-close" size="14"></v-icon>
              </v-btn>
            </div>

            <div v-if="cartStore.voucherError" class="mt-1 text-caption text-error font-weight-medium">
              {{ cartStore.voucherError }}
            </div>
          </v-card>
        </div>
      </div>

      <!-- Footer Summary & Checkout Button -->
      <div v-if="cartStore.items.length > 0" class="pa-4 bg-white border-t">
        <div class="d-flex justify-space-between text-body-2 mb-1">
          <span class="text-grey">Biaya Program:</span>
          <span>{{ formatRupiah(cartStore.subtotal) }}</span>
        </div>
        <div v-if="cartStore.voucherDiscount > 0" class="d-flex justify-space-between text-body-2 mb-1 text-teal font-weight-medium">
          <span>Diskon Voucher:</span>
          <span>- {{ formatRupiah(cartStore.voucherDiscount) }}</span>
        </div>
        <v-divider class="my-2"></v-divider>
        <div class="d-flex justify-space-between align-baseline mb-3">
          <span class="font-weight-bold text-body-1 text-secondary">Total Biaya:</span>
          <span class="font-weight-extrabold text-h6 text-primary">
            {{ formatRupiah(cartStore.totalAmount) }}
          </span>
        </div>

        <v-btn
          block
          color="accent"
          size="large"
          class="text-none font-weight-bold text-white shadow-lg"
          @click="openCheckout"
        >
          Lanjut ke Pendaftaran
          <v-icon icon="mdi-arrow-right" class="ml-2"></v-icon>
        </v-btn>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../stores/cart'

const router = useRouter()
const cartStore = useCartStore()
const voucherInput = ref('RUANGJUARA')

function formatRupiah(val) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(val || 0)
}

function applyVoucherCode() {
  cartStore.applyVoucher(voucherInput.value)
}

function openCheckout() {
  cartStore.drawerOpen = false
  router.push('/checkout')
}
</script>
