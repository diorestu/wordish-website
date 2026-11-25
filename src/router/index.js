import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
    meta: { title: 'Wordish - LPK Pelatihan Bahasa Mandarin, Korea & Inggris' }
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/ProductsView.vue'),
    meta: { title: 'Program & Format Kelas - LPK Wordish' }
  },
  {
    path: '/elearning',
    name: 'Elearning',
    component: () => import('../views/ElearningView.vue'),
    meta: { title: 'E-Learning & Video Modul - LPK Wordish' }
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
    meta: { title: 'Tes Level Bahasa Online Gratis - LPK Wordish' }
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../views/CheckoutView.vue'),
    meta: { title: 'Pendaftaran Kelas & Pembayaran - LPK Wordish' }
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

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
