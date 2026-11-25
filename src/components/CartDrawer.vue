<template>
  <v-navigation-drawer
    v-model="cartStore.drawerOpen"
    location="right"
    temporary
    width="420"
  >
    <div class="d-flex flex-column h-100">
      <!-- Header -->
      <div class="pa-4 bg-secondary text-white d-flex align-center justify-space-between">
        <div class="d-flex align-center">
          <v-icon icon="mdi-cart" class="mr-2 text-accent"></v-icon>
          <span class="font-weight-bold text-subtitle-1">Keranjang Belajar</span>
          <v-chip size="x-small" color="accent" class="ml-2 font-weight-bold">
            {{ cartStore.totalItemsCount }} Paket
          </v-chip>
        </div>
        <v-btn icon size="small" variant="text" @click="cartStore.drawerOpen = false">
          <v-icon icon="mdi-close" color="white"></v-icon>
        </v-btn>
      </div>

      <!-- Body / Items List -->
      <div class="flex-grow-1 overflow-y-auto pa-4">
        <!-- Empty State -->
        <div v-if="cartStore.items.length === 0" class="text-center py-12">
          <v-icon icon="mdi-cart-off" size="64" color="grey-lighten-1" class="mb-3"></v-icon>
          <div class="text-subtitle-1 font-weight-bold text-secondary mb-1">
            Keranjangmu Masih Kosong
          </div>
          <p class="text-caption text-grey mb-4">
            Pilih paket bimbingan belajar terbaik untuk raih impian akademikmu.
          </p>
          <v-btn color="primary" to="/products" @click="cartStore.drawerOpen = false" class="text-none">
            Lihat Pilihan Paket
          </v-btn>
        </div>

        <!-- Item Cards -->
        <div v-else class="d-flex flex-column ga-3">
          <v-card
            v-for="item in cartStore.items"
            :key="item.id"
            variant="outlined"
            class="pa-3 rounded-xl border-dashed"
          >
            <div class="d-flex justify-space-between align-start mb-1">
              <div>
                <v-chip size="x-small" color="primary" variant="flat" class="font-weight-bold mb-1">
                  {{ item.gradeLabel || 'Paket Belajar' }}
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
              Durasi: {{ item.period || '1 Tahun Ajaran' }}
            </div>

            <div class="d-flex align-baseline ga-2">
              <span class="text-subtitle-2 font-weight-bold text-primary">
                {{ formatRupiah(item.discountedPrice || item.price) }}
              </span>
              <span v-if="item.originalPrice" class="text-caption text-grey text-decoration-line-through">
                {{ formatRupiah(item.originalPrice) }}
              </span>
            </div>
          </v-card>

          <!-- Voucher Box -->
          <v-card variant="tonal" color="grey-lighten-4" class="pa-3 rounded-xl mt-2">
            <div class="text-caption font-weight-bold text-secondary mb-2 d-flex align-center">
              <v-icon icon="mdi-ticket-percent-outline" color="accent" size="small" class="mr-1"></v-icon>
              Gunakan Voucher Diskon
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
                Terapkan
              </v-btn>
            </div>

            <!-- Active Voucher Feedback -->
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
          <span class="text-grey">Subtotal Paket:</span>
          <span>{{ formatRupiah(cartStore.subtotal) }}</span>
        </div>
        <div v-if="cartStore.voucherDiscount > 0" class="d-flex justify-space-between text-body-2 mb-1 text-teal font-weight-medium">
          <span>Potongan Voucher:</span>
          <span>- {{ formatRupiah(cartStore.voucherDiscount) }}</span>
        </div>
        <v-divider class="my-2"></v-divider>
        <div class="d-flex justify-space-between align-baseline mb-3">
          <span class="font-weight-bold text-body-1 text-secondary">Total Bayar:</span>
          <span class="font-weight-extrabold text-h6 text-primary">
            {{ formatRupiah(cartStore.totalAmount) }}
          </span>
        </div>

        <v-btn
          block
          color="accent"
          size="large"
          class="text-none font-weight-bold text-white shadow-lg"
          @click="openCheckoutDialog"
        >
          Lanjut Pembayaran
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
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const cartStore = useCartStore()
const authStore = useAuthStore()
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

function openCheckoutDialog() {
  cartStore.drawerOpen = false
  router.push('/checkout')
}
</script>
