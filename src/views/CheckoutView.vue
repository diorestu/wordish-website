<template>
  <div class="py-10 bg-grey-lighten-5 min-vh-100">
    <v-container class="max-width-lg px-4">
      <!-- Breadcrumb & Header -->
      <div class="mb-8">
        <v-breadcrumbs
          :items="[
            { title: 'Beranda', disabled: false, href: '/' },
            { title: 'Program', disabled: false, href: '/products' },
            { title: 'Pendaftaran Kelas & Pembayaran', disabled: true }
          ]"
          class="pa-0 mb-2 text-caption"
        ></v-breadcrumbs>
        <h1 class="text-h4 font-weight-bold text-secondary mb-1">
          Formulir Pendaftaran Kelas LPK Wordish
        </h1>
        <p class="text-body-2 text-grey">
          Lengkapi data diri calon peserta untuk reservasi kursi batch pelatihan bahasa asing.
        </p>
      </div>

      <v-row>
        <!-- Left: Form Data Calon Peserta -->
        <v-col cols="12" md="7">
          <v-card class="pa-5 rounded-2xl border bg-white mb-6 shadow-sm">
            <div class="d-flex align-center mb-4">
              <v-icon icon="mdi-account-edit" color="primary" class="mr-2"></v-icon>
              <span class="text-subtitle-1 font-weight-bold text-secondary">Data Calon Peserta</span>
            </div>

            <v-row dense>
              <v-col cols="12">
                <div class="text-caption font-weight-bold text-secondary mb-1">Nama Lengkap Sesuai KTP / Paspor</div>
                <v-text-field
                  v-model="customerForm.name"
                  placeholder="Nama Lengkap Peserta"
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
                <div class="text-caption font-weight-bold text-secondary mb-1">Email Aktif</div>
                <v-text-field
                  v-model="customerForm.email"
                  placeholder="nama@email.com"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <div class="text-caption font-weight-bold text-secondary mb-1">Pilihan Waktu Belajar (Jadwal Kelas Senin - Sabtu)</div>
                <v-select
                  v-model="customerForm.schedule"
                  :items="[
                    '14.00 - 15.00 WIB: Mandarin (Kids & Junior) - Senin s/d Sabtu',
                    '15.00 - 16.00 WIB: English (Kids & Junior) - Senin s/d Sabtu',
                    '16.00 - 17.00 WIB: Mandarin (Kids & Junior) - Senin s/d Sabtu',
                    '17.00 - 18.00 WIB: English (Kids & Junior) - Senin s/d Sabtu',
                    '18.00 - 19.00 WIB: Mandarin (Teen & Adult) - Senin s/d Sabtu',
                    '19.00 - 20.00 WIB: English (Teen & Adult) - Senin s/d Sabtu',
                    '20.00 - 21.00 WIB: Mandarin (Teen & Adult) - Senin s/d Sabtu',
                    '09.00 - 12.00 WIB: Korea EPS-TOPIK (Intensif) - Senin s/d Jumat'
                  ]"
                  placeholder="Pilih Waktu Belajar"
                ></v-select>
              </v-col>
            </v-row>
          </v-card>

          <!-- Metode Pembayaran -->
          <v-card class="pa-5 rounded-2xl border bg-white shadow-sm">
            <div class="d-flex align-center justify-space-between mb-4">
              <div class="d-flex align-center">
                <v-icon icon="mdi-credit-card-outline" color="accent" class="mr-2"></v-icon>
                <span class="text-subtitle-1 font-weight-bold text-secondary">Metode Pembayaran</span>
              </div>
              <v-chip size="x-small" color="success" class="font-weight-bold">
                Bisa Bayar DP / Lunas
              </v-chip>
            </div>

            <v-radio-group v-model="cartStore.selectedPaymentMethod" class="pa-0">
              <div class="d-flex flex-column ga-2">
                <!-- QRIS / GoPay -->
                <div
                  class="payment-option border rounded-xl pa-3 cursor-pointer d-flex align-center justify-space-between"
                  :class="{ 'border-primary bg-blue-lighten-5': cartStore.selectedPaymentMethod === 'gopay' }"
                  @click="cartStore.selectedPaymentMethod = 'gopay'"
                >
                  <div class="d-flex align-center">
                    <v-radio value="gopay" class="mr-2"></v-radio>
                    <div>
                      <div class="font-weight-bold text-body-2 text-secondary">QRIS / GoPay / OVO / ShopeePay</div>
                      <div class="text-caption text-grey">Scan kode QR langsung dari e-wallet apapun</div>
                    </div>
                  </div>
                  <v-icon icon="mdi-qrcode-scan" color="primary"></v-icon>
                </div>

                <!-- Virtual Account BCA -->
                <div
                  class="payment-option border rounded-xl pa-3 cursor-pointer d-flex align-center justify-space-between"
                  :class="{ 'border-primary bg-blue-lighten-5': cartStore.selectedPaymentMethod === 'bca_va' }"
                  @click="cartStore.selectedPaymentMethod = 'bca_va'"
                >
                  <div class="d-flex align-center">
                    <v-radio value="bca_va" class="mr-2"></v-radio>
                    <div>
                      <div class="font-weight-bold text-body-2 text-secondary">BCA Virtual Account (Otomatis)</div>
                      <div class="text-caption text-grey">Transfer melalui m-BCA atau ATM</div>
                    </div>
                  </div>
                  <v-icon icon="mdi-bank" color="primary"></v-icon>
                </div>

                <!-- Transfer Bank Mandiri -->
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
            </v-radio-group>
          </v-card>
        </v-col>

        <!-- Right: Summary & Checkout Button -->
        <v-col cols="12" md="5">
          <v-card class="pa-5 rounded-2xl border bg-white shadow-sm checkout-summary-card">
            <div class="text-subtitle-1 font-weight-bold text-secondary mb-4 pb-2 border-b">
              Program Bahasa yang Dipilih
            </div>

            <!-- Items -->
            <div v-if="cartStore.items.length === 0" class="text-center py-6">
              <v-icon icon="mdi-cart-off" size="48" color="grey" class="mb-2"></v-icon>
              <div class="text-caption text-grey">Belum ada program dipilih.</div>
              <v-btn color="primary" size="small" to="/products" class="mt-2 text-none font-weight-bold">
                Pilih Program Bahasa
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
                  <div class="text-caption text-grey">{{ item.level }} • {{ item.duration }}</div>
                </div>
                <div class="text-right">
                  <div class="font-weight-bold text-body-2 text-primary">
                    {{ formatRupiah(item.price || item.discountedPrice) }}
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
              <span class="text-grey">Biaya Program:</span>
              <span>{{ formatRupiah(cartStore.subtotal) }}</span>
            </div>
            <div v-if="cartStore.voucherDiscount > 0" class="d-flex justify-space-between text-body-2 mb-1 text-teal font-weight-medium">
              <span>Potongan Diskon:</span>
              <span>- {{ formatRupiah(cartStore.voucherDiscount) }}</span>
            </div>
            <div class="d-flex justify-space-between text-body-2 mb-3">
              <span class="text-grey">Biaya Pendaftaran LPK:</span>
              <span class="text-success font-weight-bold">GRATIS</span>
            </div>

            <v-divider class="my-3"></v-divider>

            <div class="d-flex justify-space-between align-baseline mb-6">
              <span class="text-subtitle-1 font-weight-bold text-secondary">Total Biaya:</span>
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
              @click="submitRegistration"
            >
              Konfirmasi & Daftar Kelas
              <v-icon icon="mdi-arrow-right" class="ml-2"></v-icon>
            </v-btn>

            <div class="text-center text-caption text-grey mt-3">
              <v-icon icon="mdi-shield-check" size="small" color="success" class="mr-1"></v-icon>
              Pendaftaran Resmi Lembaga Pelatihan Kerja Terdaftar
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <CheckoutDialog />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useCartStore } from '../stores/cart'
import { programs } from '../data/wordishData'
import CheckoutDialog from '../components/CheckoutDialog.vue'

const cartStore = useCartStore()

// If cart empty, default to the popular Korean EPS program
if (cartStore.items.length === 0) {
  cartStore.items.push({ ...programs[2] })
  cartStore.applyVoucher('RUANGJUARA')
}

const voucherInput = ref('RUANGJUARA')
const isProcessing = ref(false)

const customerForm = reactive({
  name: 'Budi Santoso',
  phone: '081234567890',
  email: 'budi.santoso@gmail.com',
  schedule: 'Kelas Pagi (Senin - Jumat 09.00 - 12.00 WIB) - Tatap Muka'
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

function submitRegistration() {
  isProcessing.value = true
  setTimeout(() => {
    isProcessing.value = false
    cartStore.processCheckout(customerForm)
  }, 900)
}
</script>

<style scoped>
.payment-option {
  transition: all 0.2s;
}
.payment-option:hover {
  background-color: #F8FAFC;
}

@media (min-width: 960px) {
  .checkout-summary-card {
    position: sticky;
    top: 86px;
  }
}
</style>
