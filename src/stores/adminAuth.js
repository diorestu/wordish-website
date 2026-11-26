import { defineStore } from 'pinia'

const ADMIN_TOKEN_KEY = 'wordish_admin_token'

export const useAdminAuthStore = defineStore('adminAuth', {
  state: () => ({
    token: localStorage.getItem(ADMIN_TOKEN_KEY) || '',
    admin: null,
    verified: false,
    loading: false,
    error: null
  }),

  getters: {
    isAuthenticated: (state) => Boolean(state.token && state.admin)
  },

  actions: {
    clearSession() {
      this.token = ''
      this.admin = null
      this.verified = false
      localStorage.removeItem(ADMIN_TOKEN_KEY)
    },

    async login(identifier, password) {
      this.loading = true
      this.error = null
      try {
        const res = await fetch('/api/admin/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ identifier, password })
        })
        const json = await res.json().catch(() => ({}))
        if (!res.ok) {
          throw new Error(json.error || 'Username/email atau password salah')
        }
        const { token, admin } = json.data || {}
        if (!token || !admin) {
          throw new Error('Respons login tidak valid')
        }
        this.token = token
        this.admin = admin
        this.verified = true
        localStorage.setItem(ADMIN_TOKEN_KEY, token)
        return admin
      } catch (err) {
        this.error = err.message || 'Gagal terhubung ke server'
        throw err
      } finally {
        this.loading = false
      }
    },

    async ensureVerified() {
      if (!this.token) {
        this.admin = null
        this.verified = false
        return false
      }
      if (this.verified && this.admin) {
        return true
      }

      try {
        const res = await fetch('/api/admin/me', {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        })
        if (!res.ok) {
          this.clearSession()
          return false
        }
        const json = await res.json().catch(() => ({}))
        this.admin = json.data || null
        this.verified = Boolean(this.admin)
        if (!this.verified) {
          this.clearSession()
        }
        return this.verified
      } catch {
        this.clearSession()
        return false
      }
    },

    async logout() {
      const currentToken = this.token
      this.clearSession()
      if (!currentToken) return
      try {
        await fetch('/api/admin/logout', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${currentToken}`
          }
        })
      } catch {
        // Abaikan error jaringan saat logout; sesi lokal sudah dibersihkan
      }
    }
  }
})
