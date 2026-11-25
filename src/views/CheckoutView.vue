<template>
  <div class="py-10 bg-grey-lighten-5 min-vh-100">
    <v-container class="max-width-lg px-4">
      <!-- Breadcrumb & Header -->
      <div class="mb-8">
        <v-breadcrumbs
          :items="[
            { title: 'Beranda', disabled: false, href: '/' },
            { title: 'Katalog', disabled: false, href: '/products' },
            { title: 'Pembayaran & Checkout', disabled: true }
          ]"
          class="pa-0 mb-2 text-caption"
        ></v-breadcrumbs>
        <h1 class="text-h4 font-weight-bold text-secondary mb-1">
          Konfirmasi Pesanan & Pembayaran
        </h1>
        <p class="text-body-2 text-grey">
          Selesaikan pembayaran untuk segera mengaktifkan fasilitas bimbingan belajar Ruangguru.
        </p>
      </div>

      <v-row>
        <!-- Left: Form Data Diri & Pilihan Pembayaran -->
        <v-col cols="12" md="7">
          <!-- Card 1: Data Siswa -->
          <v-card class="pa-5 rounded-2xl border bg-white mb-6 shadow-sm">
            <div class="d-flex align-center mb-4">
              <v-icon icon="mdi-account-circle-outline" color="primary" class="mr-2"></v-icon>
              <span class="text-subtitle-1 font-weight-bold text-secondary">Data Diri Siswa</span>
            </div>

            <v-row dense>
              <v-col cols="12">
                <div class="text-caption font-weight-bold text-secondary mb-1">Nama Lengkap Siswa</div>
                <v-text-field
                  v-model="customerForm.name"
                  placeholder="Nama Lengkap"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <div class="text-caption font-weight-bold text-secondary mb-1">Nomor WhatsApp Aktif</div>
                <v-text-field
                  v-model="customerForm.phone"
                  placeholder="08xxxxxxxxxx"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <div class="text-caption font-weight-bold text-secondary mb-1">Email Pengguna</div>
                <v-text-field
                  v-model="customerForm.email"
                  placeholder="nama@email.com"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <div class="text-caption font-weight-bold text-secondary mb-1">Asal Sekolah & Kelas</div>
                <v-text-field
                  v-model="customerForm.school"
                  placeholder="contoh: SMAN 1 Jakarta (Kelas 12 IPA)"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card>

          <!-- Card 2: Metode Pembayaran -->
          <v-card class="pa-5 rounded-2xl border bg-white shadow-sm">
            <div class="d-flex align-center justify-space-between mb-4">
              <div class="d-flex align-center">
                <v-icon icon="mdi-credit-card-outline" color="accent" class="mr-2"></v-icon>
                <span class="text-subtitle-1 font-weight-bold text-secondary">Pilih Metode Pembayaran</span>
              </div>
              <v-chip size="x-small" color="success" class="font-weight-bold">
                Instan & Otomatis
              </v-chip>
            </div>

            <v-radio-group v-model="cartStore.selectedPaymentMethod" class="pa-0">
              <!-- E-Wallet -->
              <div class="text-caption font-weight-bold text-grey mb-2">E-Wallet & QRIS (Bebas Biaya Admin)</div>
              <div class="d-flex flex-column ga-2 mb-4">
                <div
                  class="payment-option border rounded-xl pa-3 cursor-pointer d-flex align-center justify-space-between"
                  :class="{ 'border-primary bg-blue-lighten-5': cartStore.selectedPaymentMethod === 'gopay' }"
                  @click="cartStore.selectedPaymentMethod = 'gopay'"
                >
                  <div class="d-flex align-center">
                    <v-radio value="gopay" class="mr-2"></v-radio>
                    <div>
                      <div class="font-weight-bold text-body-2 text-secondary">GoPay / GoPay Later / QRIS</div>
                      <div class="text-caption text-grey">Scan kode QR langsung dari aplikasi e-wallet apapun</div>
                    </div>
                  </div>
                  <v-icon icon="mdi-qrcode-scan" color="primary"></v-icon>
                </div>

                <div
                  class="payment-option border rounded-xl pa-3 cursor-pointer d-flex align-center justify-space-between"
                  :class="{ 'border-primary bg-blue-lighten-5': cartStore.selectedPaymentMethod === 'shopeepay' }"
                  @click="cartStore.selectedPaymentMethod = 'shopeepay'"
                >
                  <div class="d-flex align-center">
                    <v-radio value="shopeepay" class="mr-2"></v-radio>
                    <div>
                      <div class="font-weight-bold text-body-2 text-secondary">ShopeePay</div>
                      <div class="text-caption text-grey">Pembayaran langsung dari akun Shopee</div>
                    </div>
                  </div>
                  <v-icon icon="mdi-shopping" color="orange"></v-icon>
                </div>
              </div>

              <!-- Virtual Account -->
              <div class="text-caption font-weight-bold text-grey mb-2">Virtual Account Bank (Konfirmasi Otomatis)</div>
              <div class="d-flex flex-column ga-2 mb-4">
                <div
                  class="payment-option border rounded-xl pa-3 cursor-pointer d-flex align-center justify-space-between"
                  :class="{ 'border-primary bg-blue-lighten-5': cartStore.selectedPaymentMethod === 'bca_va' }"
                  @click="cartStore.selectedPaymentMethod = 'bca_va'"
                >
                  <div class="d-flex align-center">
                    <v-radio value="bca_va" class="mr-2"></v-radio>
                    <div>
                      <div class="font-weight-bold text-body-2 text-secondary">BCA Virtual Account</div>
                      <div class="text-caption text-grey">Transfer via m-BCA, KlikBCA atau ATM BCA</div>
                    </div>
                  </div>
                  <v-icon icon="mdi-bank" color="primary"></v-icon>
                </div>

                <div
                  class="payment-option border rounded-xl pa-3 cursor-pointer d-flex align-center justify-space-between"
                  :class="{ 'border-primary bg-blue-lighten-5': cartStore.selectedPaymentMethod === 'mandiri_va' }"
                  @click="cartStore.selectedPaymentMethod = 'mandiri_va'"
                >
                  <div class="d-flex align-center">
                    <v-radio value="mandiri_va" class="mr-2"></v-radio>
                    <div>
                      <div class="font-weight-bold text-body-2 text-secondary">Mandiri Virtual Account / Livin</div>
                      <div class="text-caption text-grey">Transfer instan lewat Livin' by Mandiri</div>
                    </div>
                  </div>
                  <v-icon icon="mdi-bank" color="primary"></v-icon>
                </div>
              </div>

              <!-- Kartu Kredit / Cicilan -->
              <div class="text-caption font-weight-bold text-grey mb-2">Kartu Kredit / Cicilan 0%</div>
              <div
                class="payment-option border rounded-xl pa-3 cursor-pointer d-flex align-center justify-space-between"
                :class="{ 'border-primary bg-blue-lighten-5': cartStore.selectedPaymentMethod === 'cc' }"
                @click="cartStore.selectedPaymentMethod = 'cc'"
              >
                <div class="d-flex align-center">
                  <v-radio value="cc" class="mr-2"></v-radio>
                  <div>
                    <div class="font-weight-bold text-body-2 text-secondary">Kartu Kredit Visa / Mastercard / JCB</div>
                    <div class="text-caption text-grey">Cicilan 0% hingga 12 bulan tersedia</div>
                  </div>
                </div>
                <v-icon icon="mdi-credit-card" color="teal"></v-icon>
              </div>
            </v-radio-group>
          </v-card>
        </v-col>

        <!-- Right: Ringkasan Pesanan & Tombol Bayar -->
        <v-col cols="12" md="5">
          <v-card class="pa-5 rounded-2xl border bg-white shadow-sm position-sticky" style="top: 86px;">
            <div class="text-subtitle-1 font-weight-bold text-secondary mb-4 pb-2 border-b">
              Ringkasan Pembelian
            </div>

            <!-- Items -->
            <div v-if="cartStore.items.length === 0" class="text-center py-6">
              <v-icon icon="mdi-cart-off" size="48" color="grey" class="mb-2"></v-icon>
              <div class="text-caption text-grey">Belum ada paket dipilih.</div>
              <v-btn color="primary" size="small" to="/products" class="mt-2 text-none font-weight-bold">
                Pilih Paket Belajar
              </v-btn>
            </div>

            <div v-else class="d-flex flex-column ga-3 mb-4">
              <div
                v-for="item in cartStore.items"
                :key="item.id"
                class="d-flex justify-space-between align-start"
              >
                <div>
                  <div class="font-weight-bold text-body-2 text-secondary">{{ item.title }}</div>
                  <div class="text-caption text-grey">{{ item.gradeLabel }} • {{ item.period }}</div>
                </div>
                <div class="text-right">
                  <div class="font-weight-bold text-body-2 text-primary">
                    {{ formatRupiah(item.discountedPrice || item.price) }}
                  </div>
                  <div v-if="item.originalPrice" class="text-caption text-grey text-decoration-line-through">
                    {{ formatRupiah(item.originalPrice) }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Voucher Code Box -->
            <div class="pa-3 bg-grey-lighten-4 rounded-xl mb-4">
              <div class="text-caption font-weight-bold text-secondary mb-1">Kode Voucher Promo</div>
              <div class="d-flex ga-2">
                <v-text-field
                  v-model="voucherInput"
                  placeholder="RUANGJUARA"
                  density="compact"
                  hide-details
                  bg-color="white"
                ></v-text-field>
                <v-btn color="primary" class="text-none font-weight-bold" @click="applyVoucher">
                  Pakai
                </v-btn>
              </div>
              <div v-if="cartStore.appliedVoucher" class="mt-2 text-caption text-teal font-weight-bold">
                <v-icon icon="mdi-check-circle" size="small"></v-icon>
                Voucher {{ cartStore.appliedVoucher.code }} Aktif (-{{ (cartStore.appliedVoucher.percentage * 100) }}%)
              </div>
            </div>

            <!-- Calculations -->
            <div class="d-flex justify-space-between text-body-2 mb-1">
              <span class="text-grey">Subtotal:</span>
              <span>{{ formatRupiah(cartStore.subtotal) }}</span>
            </div>
            <div v-if="cartStore.voucherDiscount > 0" class="d-flex justify-space-between text-body-2 mb-1 text-teal font-weight-medium">
              <span>Diskon Voucher:</span>
              <span>- {{ formatRupiah(cartStore.voucherDiscount) }}</span>
            </div>
            <div class="d-flex justify-space-between text-body-2 mb-3">
              <span class="text-grey">Biaya Layanan:</span>
              <span class="text-success font-weight-bold">GRATIS</span>
            </div>

            <v-divider class="my-3"></v-divider>

            <div class="d-flex justify-space-between align-baseline mb-6">
              <span class="text-subtitle-1 font-weight-bold text-secondary">Total Tagihan:</span>
              <span class="text-h5 font-weight-extrabold text-primary">
                {{ formatRupiah(cartStore.totalAmount) }}
              </span>
            </div>

            <v-btn
              block
              color="accent"
              size="large"
              class="text-none font-weight-bold text-white shadow-lg"
              :disabled="cartStore.items.length === 0"
              :loading="isProcessing"
              @click="submitPayment"
            >
              Bayar Sekarang
              <v-icon icon="mdi-lock" size="small" class="ml-2"></v-icon>
            </v-btn>

            <div class="text-center text-caption text-grey mt-3">
              <v-icon icon="mdi-shield-check" size="small" color="success" class="mr-1"></v-icon>
              Transaksi Terenkripsi 256-bit SSL Aman
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Success Modal Dialog -->
    <CheckoutDialog />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useCartStore } from '../stores/cart'
import { useAuthStore } from '../stores/auth'
import { courses } from '../data/courses'
import CheckoutDialog from '../components/CheckoutDialog.vue'

const cartStore = useCartStore()
const authStore = useAuthStore()

// If cart is empty, add the popular course for instant checkout convenience
if (cartStore.items.length === 0) {
  cartStore.items.push({ ...courses[0] })
  cartStore.applyVoucher('RUANGJUARA')
}

const voucherInput = ref('RUANGJUARA')
const isProcessing = ref(false)

const customerForm = reactive({
  name: authStore.user.name,
  phone: authStore.user.phone,
  email: authStore.user.email,
  school: `${authStore.user.school} (${authStore.user.grade})`
})

function formatRupiah(val) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(val || 0)
}

function applyVoucher() {
  cartStore.applyVoucher(voucherInput.value)
}

function submitPayment() {
  isProcessing.value = true
  setTimeout(() => {
    isProcessing.value = false
    cartStore.processCheckout(customerForm)
  }, 1000)
}
</script>

<style scoped>
.payment-option {
  transition: all 0.2s;
}
.payment-option:hover {
  background-color: #F8FAFC;
}
</style>
