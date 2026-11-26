import { createRouter, createWebHistory } from 'vue-router'
import { useAdminAuthStore } from '../stores/adminAuth'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
    meta: { title: 'Wordish - Lembaga Pelatihan Bahasa Mandarin, Korea & Inggris' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue'),
    meta: { title: 'Tentang Kami - Lembaga Pelatihan Bahasa Wordish' }
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/ProductsView.vue'),
    meta: { title: 'Program & Format Kelas - Wordish' }
  },
  {
    path: '/elearning',
    name: 'Elearning',
    component: () => import('../views/ElearningView.vue'),
    meta: { title: 'E-Learning & Video Modul - Wordish' }
  },
  {
    path: '/books',
    name: 'Books',
    component: () => import('../views/BooksView.vue'),
    meta: { title: 'Buku Pelajaran Resmi Wordish - Shopee & Tokopedia' }
  },
  {
    path: '/tryout',
    name: 'PlacementTest',
    component: () => import('../views/TryoutView.vue'),
    meta: { title: 'Tes Level Bahasa Online Gratis - Wordish' }
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../views/CheckoutView.vue'),
    meta: { title: 'Pendaftaran Kelas & Pembayaran - Wordish' }
  },
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: () => import('../views/AdminLoginView.vue'),
    meta: { title: 'Login Admin Panel - Wordish', guestAdminOnly: true }
  },
  {
    path: '/admin',
    alias: '/admin/kelas',
    name: 'AdminClasses',
    component: () => import('../views/AdminClassesView.vue'),
    meta: { title: 'Admin Panel Kelola Kelas - Wordish', requiresAdmin: true }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }

  if (to.meta.requiresAdmin) {
    const adminAuthStore = useAdminAuthStore()
    const isValid = await adminAuthStore.ensureVerified()
    if (!isValid) {
      next({ name: 'AdminLogin', query: { redirect: to.fullPath } })
      return
    }
  } else if (to.meta.guestAdminOnly) {
    const adminAuthStore = useAdminAuthStore()
    const isValid = await adminAuthStore.ensureVerified()
    if (isValid) {
      next({ name: 'AdminClasses' })
      return
    }
  }

  next()
})

export default router
