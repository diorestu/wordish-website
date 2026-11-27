import fs from 'node:fs'
import path from 'node:path'

const DIST = path.resolve(process.cwd(), 'dist')
const BASE = 'https://wordish.id'

const routes = [
  { path: '/', title: 'Wordish - Lembaga Pelatihan Bahasa Asing (Mandarin, Korea & Inggris)', description: 'Wordish adalah lembaga pelatihan bahasa asing spesialis Mandarin, Korea, dan Inggris dengan Private Class, Home Class, dan Online Class. Tes level gratis, portal e-learning, dan buku pelajaran resmi.' },
  { path: '/about', title: 'Tentang Kami - Lembaga Pelatihan Bahasa Wordish', description: 'Kenali Wordish, lembaga pelatihan bahasa asing terpercaya dengan program Mandarin, Korea, dan Inggris berorientasi kesiapan kerja luar negeri dan beasiswa.' },
  { path: '/products', title: 'Program & Format Kelas - Wordish', description: 'Pilih program bahasa Mandarin, Korea, dan Inggris di Wordish dengan format Private Class, Home Class, dan Online Class.' },
  { path: '/elearning', title: 'E-Learning & Video Modul - Wordish', description: 'Portal e-learning Wordish: video materi terstruktur Mandarin, Korea, dan Inggris, modul PDF, dan silabus per bab.' },
  { path: '/books', title: 'Buku Pelajaran Resmi Wordish - Shopee & Tokopedia', description: 'Buku pelajaran resmi Wordish: Buku Sakti HSK, modul EPS-TOPIK Korea, dan Pocket Guide English. Beli di Shopee dan Tokopedia.' },
  { path: '/tryout', title: 'Tes Level Bahasa Online Gratis - Wordish', description: 'Tes level bahasa online gratis 2 menit untuk rekomendasi penempatan kelas Mandarin, Korea, atau Inggris di Wordish.' },
  { path: '/contact', title: 'Kontak & Lokasi - Wordish', description: 'Kontak dan lokasi Training Center Wordish di Jakarta Timur. Hubungi via WhatsApp, email, atau kunjungi langsung.' }
]

const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8')

for (const route of routes) {
  const url = `${BASE}${route.path === '/' ? '/' : route.path}`
  let html = template
  html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
  html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.description}" />`)
  html = html.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${url}" />`)
  html = html.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${route.title}" />`)
  html = html.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${route.description}" />`)
  html = html.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${url}" />`)
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${route.title}" />`)
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${route.description}" />`)

  const outDir = route.path === '/' ? DIST : path.join(DIST, route.path.replace(/^\//, ''))
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'index.html'), html)
  console.log('prerendered', route.path)
}
