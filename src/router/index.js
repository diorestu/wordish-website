import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
    meta: { title: 'Ruangguru - Bimbel Online & Offline Terbesar & Terbukti di Indonesia' }
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/ProductsView.vue'),
    meta: { title: 'Katalog Paket Belajar - Ruangguru' }
  },
  {
    path: '/roboguru',
    name: 'Roboguru',
    component: () => import('../views/RoboguruView.vue'),
    meta: { title: 'Roboguru AI - Tanya & Bahas Soal Gratis' }
  },
  {
    path: '/tryout',
    name: 'Tryout',
    component: () => import('../views/TryoutView.vue'),
    meta: { title: 'Ruanguji - Tryout Online SNBT & Ujian Sekolah' }
  },
  {
    path: '/tryout/exam',
    name: 'TryoutExam',
    component: () => import('../views/TryoutExamView.vue'),
    meta: { title: 'Simulasi Ujian SNBT IRT - Ruanguji' }
  },
  {
    path: '/ruangbelajar',
    name: 'Ruangbelajar',
    component: () => import('../views/RuangbelajarView.vue'),
    meta: { title: 'ruangbelajar - Video Animasi & Modul Kurikulum Merdeka' }
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../views/CheckoutView.vue'),
    meta: { title: 'Pembayaran & Checkout - Ruangguru' }
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
