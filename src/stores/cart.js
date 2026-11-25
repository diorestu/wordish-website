import { defineStore } from 'pinia'
import { courses } from '../data/courses'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    appliedVoucher: null,
    voucherError: '',
    selectedPaymentMethod: 'gopay',
    drawerOpen: false,
    checkoutSuccessDialog: false,
    lastOrder: null
  }),

  getters: {
    totalItemsCount: (state) => state.items.length,
    subtotal: (state) => state.items.reduce((sum, item) => sum + (item.discountedPrice || item.price || 0), 0),
    voucherDiscount() {
      if (!this.appliedVoucher) return 0
      return Math.round(this.subtotal * this.appliedVoucher.percentage)
    },
    totalAmount() {
      const discounted = this.subtotal - this.voucherDiscount
      return Math.max(0, discounted)
    }
  },

  actions: {
    addToCart(course) {
      const exists = this.items.some(i => i.id === course.id)
      if (!exists) {
        this.items.push({ ...course })
      }
      this.drawerOpen = true
    },
    removeItem(courseId) {
      this.items = this.items.filter(i => i.id !== courseId)
      if (this.items.length === 0) {
        this.appliedVoucher = null
      }
    },
    clearCart() {
      this.items = []
      this.appliedVoucher = null
      this.voucherError = ''
    },
    applyVoucher(code) {
      this.voucherError = ''
      const cleanCode = (code || '').trim().toUpperCase()
      if (cleanCode === 'RUANGJUARA' || cleanCode === 'DISKON20') {
        this.appliedVoucher = {
          code: cleanCode,
          percentage: 0.2,
          description: 'Diskon Tambahan 20% Spesial Siswa Baru'
        }
        return { success: true, message: 'Kode voucher berhasil diterapkan! Diskon 20% aktif.' }
      } else if (cleanCode === 'UTBK2026' || cleanCode === 'SNBT') {
        this.appliedVoucher = {
          code: cleanCode,
          percentage: 0.25,
          description: 'Spesial Pejuang SNBT 2026 - Diskon 25%'
        }
        return { success: true, message: 'Selamat! Diskon spesial 25% berhasil dipakai.' }
      } else {
        this.voucherError = 'Kode voucher tidak valid atau sudah kedaluwarsa. Coba gunakan: RUANGJUARA'
        return { success: false, message: this.voucherError }
      }
    },
    removeVoucher() {
      this.appliedVoucher = null
      this.voucherError = ''
    },
    processCheckout(customerInfo) {
      this.lastOrder = {
        orderId: 'RG-' + Math.floor(100000 + Math.random() * 900000),
        items: [...this.items],
        totalPaid: this.totalAmount,
        paymentMethod: this.selectedPaymentMethod,
        date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
        customer: customerInfo
      }
      this.clearCart()
      this.drawerOpen = false
      this.checkoutSuccessDialog = true
    }
  }
})
