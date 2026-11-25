# Ruangguru Web Platform Clone

Aplikasi web platform edukasi modern seperti **Ruangguru (ruangguru.com)** yang dibangun menggunakan **Vue 3**, **Vuetify 3**, **Vite**, dan **Pinia**.

---

## 🌟 Fitur Utama

1. **Beranda Interaktif (Home)**
   - Top announcement promo banner dengan countdown & voucher hemat s.d 70%
   - Hero section dengan jenjang selector cepat (SD, SMP, SMA, UTBK, Dewasa)
   - Product ecosystem showcase: ruangbelajar, Brain Academy, Roboguru, English Academy, Ruanguji, Skill Academy
   - **Roboguru AI Solver Playground**: Simulasi tanya soal instan dengan rumus kilat & solusi per langkah
   - **ruangbelajar Interactive Video Player**: Simulasi pemutar video belajar dengan fitur Adapto, kontrol kecepatan, silabus bab, dan kuis pemahaman
   - Katalog paket belajar unggulan dengan kalkulator diskon
   - Testimoni peraih skor UTBK tinggi & lolos PTN favorit (UI, ITB, UGM)
   - FAQ Accordion lengkap & call-to-action unduh aplikasi mobile

2. **Katalog Paket Belajar (Products)**
   - Filter dinamis berdasarkan Jenjang (SD, SMP, SMA, UTBK, Umum) dan Kategori Produk
   - Pencarian real-time paket belajar
   - Perbandingan fitur komprehensif (ruangbelajar vs Brain Academy vs English Academy)
   - Tombol "Tambah ke Keranjang" dan "Beli Sekarang"

3. **Roboguru AI (Tanya & Bahas Soal)**
   - Pemecah soal instan bertenaga AI untuk mata pelajaran Matematika, Fisika, Kimia, dan Biologi
   - Bank preset contoh soal HOTS
   - Input soal kustom oleh pengguna dengan animasi analisa langkah demi langkah
   - Tampilan konsep kunci, rumus utama, tahapan pengerjaan analitik, dan Tips Kilat Master Teacher

4. **Ruanguji (Tryout Online SNBT Berstandar IRT)**
   - Portal simulasi tryout nasional UTBK-SNBT 2026 & Ujian Sekolah SMA
   - **Computer Based Test (CBT) Interface**:
     - Timer hitung mundur pengerjaan ujian
     - Navigasi nomor soal (1-10) dengan status terjawab, ragu-ragu, dan sedang dibuka
     - Soal-soal HOTS subtes Penalaran Umum, Penalaran Matematika, Pemahaman Bacaan, dan Literasi
   - **Halaman Hasil & Analisis IRT**:
     - Skor terkalibrasi IRT skala 1000
     - Rasionalisasi peluang kelulusan jurusan PTN (Pilihan 1 & 2)
     - Selebrasi confetti perayaan nilai
     - Kunci jawaban dan pembahasan detail setiap butir soal

5. **ruangbelajar (Dashboard Pembelajaran Demo)**
   - Pemilihan mata pelajaran (Matematika, Fisika, Kimia, Biologi)
   - Pemutar video materi terstruktur dengan chapter list
   - Unduh rangkuman rumus Master Teacher format PDF simulasi

6. **Keranjang Belajar & Checkout**
   - Slide-in Cart Drawer dengan ringkasan biaya
   - Fitur voucher promo (`RUANGJUARA` untuk diskon 20%, `UTBK2026` untuk diskon 25%)
   - Formulir biodata siswa dan sekolah
   - Pilihan metode pembayaran populer di Indonesia:
     - GoPay / QRIS
     - ShopeePay
     - BCA Virtual Account
     - Mandiri Virtual Account
     - Kartu Kredit / Cicilan 0%
   - Modal konfirmasi pembayaran sukses dan nomor resi pesanan

7. **Sistem Autentikasi (Masuk & Daftar)**
   - Modal autentikasi dengan tab Masuk dan Daftar
   - Validasi email/nomor WhatsApp & kata sandi
   - Fitur 1-Klik Login Demo untuk kemudahan pengujian

---

## 🛠️ Teknologi yang Digunakan

- **Vue.js 3** (Composition API, `<script setup>`)
- **Vuetify 3** (Material Design Component Library dengan custom Ruangguru theme)
- **Vite** (Build tool kilat & Hot Module Replacement)
- **Vue Router 4** (Client-side routing dengan lazy loaded chunking)
- **Pinia** (State management untuk user session, keranjang belanja, dan ujian tryout)
- **Material Design Icons (@mdi/font)**
- **Canvas-Confetti** (Animasi efek selebrasi skor tryout)
- **Plus Jakarta Sans** (Tipografi modern resmi)

---

## 🚀 Cara Menjalankan

### 1. Instalasi Dependensi
```bash
npm install
```

### 2. Menjalankan Server Pengembangan (Dev Server)
```bash
npm run dev
```
Akses di browser pada: [http://localhost:3000](http://localhost:3000)

### 3. Build untuk Produksi
```bash
npm run build
```
Hasil build siap rilis akan berada di folder `dist/`.

### 4. Preview Hasil Build
```bash
npm run preview
```
