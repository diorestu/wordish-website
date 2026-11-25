import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
    user: {
      name: 'Rian Pratama',
      phone: '081234567890',
      email: 'rian.pratama@gmail.com',
      grade: 'Kelas 12 SMA',
      school: 'SMAN 1 Teladan Jakarta',
      targetPtn: 'STEI - ITB & FK UI',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
      subscribedPackages: [
        'ruangbelajar SMA + UTBK SNBT Saintek'
      ]
    },
    authDialogOpen: false,
    authDialogTab: 'login', // 'login' | 'register'
  }),

  actions: {
    openAuth(tab = 'login') {
      this.authDialogTab = tab
      this.authDialogOpen = true
    },
    closeAuth() {
      this.authDialogOpen = false
    },
    login(credentials) {
      this.isLoggedIn = true
      if (credentials && credentials.identifier) {
        this.user.name = credentials.identifier.includes('@')
          ? credentials.identifier.split('@')[0]
          : 'Siswa Juara'
        this.user.email = credentials.identifier.includes('@')
          ? credentials.identifier
          : 'siswa@ruangguru.com'
      }
      this.authDialogOpen = false
      return true
    },
    register(payload) {
      this.isLoggedIn = true
      this.user.name = payload.fullName || 'Siswa Berprestasi'
      this.user.email = payload.email || 'siswa@ruangguru.com'
      this.user.phone = payload.phone || '08123456789'
      this.user.grade = payload.grade || 'Kelas 12 SMA'
      this.authDialogOpen = false
      return true
    },
    logout() {
      this.isLoggedIn = false
    }
  }
})
