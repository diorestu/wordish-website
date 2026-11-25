<template>
  <v-dialog v-model="cartStore.checkoutSuccessDialog" max-width="500" persistent>
    <v-card class="pa-6 text-center rounded-2xl">
      <div class="payment-success-icon mx-auto mb-4 d-flex align-center justify-center">
        <v-icon icon="mdi-check-decagram" color="white" size="48"></v-icon>
      </div>

      <div class="text-h5 font-weight-bold text-secondary mb-1">
        Pembayaran Berhasil!
      </div>
      <p class="text-caption text-grey mb-4">
        Paket bimbingan belajar Ruangguru kamu sudah aktif dan siap digunakan.
      </p>

      <v-card variant="tonal" color="grey-lighten-4" class="pa-4 rounded-xl text-left mb-4">
        <div class="d-flex justify-space-between text-caption mb-1">
          <span class="text-grey">Nomor Pesanan:</span>
          <span class="font-weight-bold text-secondary">{{ cartStore.lastOrder?.orderId }}</span>
        </div>
        <div class="d-flex justify-space-between text-caption mb-1">
          <span class="text-grey">Metode Pembayaran:</span>
          <span class="font-weight-bold text-uppercase">{{ cartStore.lastOrder?.paymentMethod }}</span>
        </div>
        <div class="d-flex justify-space-between text-caption mb-1">
          <span class="text-grey">Total Dibayar:</span>
          <span class="font-weight-bold text-primary">{{ formatRupiah(cartStore.lastOrder?.totalPaid) }}</span>
        </div>
        <div class="d-flex justify-space-between text-caption">
          <span class="text-grey">Tanggal Aktivasi:</span>
          <span class="font-weight-bold">{{ cartStore.lastOrder?.date }}</span>
        </div>
      </v-card>

      <div class="d-flex flex-column ga-2">
        <v-btn
          color="primary"
          size="large"
          class="text-none font-weight-bold text-white"
          to="/ruangbelajar"
          @click="cartStore.checkoutSuccessDialog = false"
        >
          Mulai Belajar Sekarang (Buka Materi)
        </v-btn>
        <v-btn
          variant="text"
          class="text-none"
          to="/"
          @click="cartStore.checkoutSuccessDialog = false"
        >
          Kembali ke Beranda
        </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()

function formatRupiah(val) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(val || 0)
}
</script>

<style scoped>
.payment-success-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  border-radius: 50%;
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.35);
}
</style>
