import { createRouter, createWebHistory } from 'vue-router'
import { useAdminAuthStore } from '../stores/adminAuth'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
    meta: {
      title: 'Wordish - Lembaga Pelatihan Bahasa Mandarin, Korea & Inggris',
      description: 'Wordish adalah lembaga pelatihan bahasa asing spesialis Mandarin, Korea, dan Inggris dengan Private Class, Home Class, dan Online Class. Tes level gratis, portal e-learning, dan buku pelajaran resmi.',
      robots: 'index, follow'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'Tentang Kami - Lembaga Pelatihan Bahasa Wordish',
      description: 'Kenali Wordish, lembaga pelatihan bahasa asing terpercaya dengan program Mandarin, Korea, dan Inggris berorientasi kesiapan kerja luar negeri dan beasiswa.',
      robots: 'index, follow'
    }
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/ProductsView.vue'),
    meta: {
      title: 'Program & Format Kelas - Wordish',
      description: 'Pilih program bahasa Mandarin, Korea, dan Inggris di Wordish dengan format Private Class, Home Class, dan Online Class.',
      robots: 'index, follow'
    }
  },
  {
    path: '/elearning',
    name: 'Elearning',
    component: () => import('../views/ElearningView.vue'),
    meta: {
      title: 'E-Learning & Video Modul - Wordish',
      description: 'Portal e-learning Wordish: video materi terstruktur Mandarin, Korea, dan Inggris, modul PDF, dan silabus per bab.',
      robots: 'index, follow'
    }
  },
  {
    path: '/books',
    name: 'Books',
    component: () => import('../views/BooksView.vue'),
    meta: {
      title: 'Buku Pelajaran Resmi Wordish - Shopee & Tokopedia',
      description: 'Buku pelajaran resmi Wordish: Buku Sakti HSK, modul EPS-TOPIK Korea, dan Pocket Guide English. Beli di Shopee dan Tokopedia.',
      robots: 'index, follow'
    }
  },
  {
    path: '/tryout',
    name: 'PlacementTest',
    component: () => import('../views/TryoutView.vue'),
    meta: {
      title: 'Tes Level Bahasa Online Gratis - Wordish',
      description: 'Tes level bahasa online gratis 2 menit untuk rekomendasi penempatan kelas Mandarin, Korea, atau Inggris di Wordish.',
      robots: 'index, follow'
    }
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../views/CheckoutView.vue'),
    meta: {
      title: 'Pendaftaran Kelas & Pembayaran - Wordish',
      description: 'Formulir pendaftaran kelas dan pembayaran Wordish.',
      robots: 'noindex, nofollow'
    }
  },
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: () => import('../views/AdminLoginView.vue'),
    meta: { title: 'Login Admin Panel - Wordish', guestAdminOnly: true, robots: 'noindex, nofollow' }
  },
  {
    path: '/admin',
    alias: '/admin/kelas',
    name: 'AdminClasses',
    component: () => import('../views/AdminClassesView.vue'),
    meta: { title: 'Admin Panel Kelola Kelas - Wordish', requiresAdmin: true, robots: 'noindex, nofollow' }
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

  const descTag = document.querySelector('meta[name="description"]')
  if (descTag && to.meta.description) {
    descTag.setAttribute('content', to.meta.description)
  }

  const robotsTag = document.querySelector('meta[name="robots"]')
  if (robotsTag && to.meta.robots) {
    robotsTag.setAttribute('content', to.meta.robots)
  }

  const canonicalTag = document.querySelector('link[rel="canonical"]')
  if (canonicalTag) {
    const base = 'https://wordish.id'
    const path = to.path === '/' ? '/' : to.path
    canonicalTag.setAttribute('href', `${base}${path}`)
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
