// Data Program Pelatihan Bahasa Asing Wordish
export const languages = [
  {
    id: 'mandarin',
    name: 'Bahasa Mandarin',
    icon: 'mdi-translate',
    color: '#E63946',
    accentBg: '#FFF1F2',
    tagline: 'Kuasai Hanzi & Percakapan untuk Bisnis & Kerja Taiwan/China',
    targetAudience: 'Calon Pekerja Taiwan, Bisnis Ekspor/Impor, Beasiswa China',
    standard: 'Kurikulum Standar HSK 1 - 4',
    levelsCount: '3 Level Tersedia'
  },
  {
    id: 'korean',
    name: 'Bahasa Korea',
    icon: 'mdi-earth',
    color: '#0077B6',
    accentBg: '#EFF6FF',
    tagline: 'Fokus Persiapan EPS-TOPIK Kerja G to G Korea & Beasiswa',
    targetAudience: 'Calon Tenaga Kerja Korsel (G to G), Penggemar K-Culture, Mahasiswa',
    standard: 'Standar EPS-TOPIK & TOPIK I - II',
    levelsCount: '3 Level Tersedia'
  },
  {
    id: 'english',
    name: 'Bahasa Inggris',
    icon: 'mdi-school',
    color: '#00A5CF',
    accentBg: '#F0FDFA',
    tagline: 'Fluency Speaking Percakapan Aktif & Persiapan Tes IELTS/TOEFL',
    targetAudience: 'Karyawan Perusahaan Asing, Pencari Kerja, Persiapan Studi Luar Negeri',
    standard: 'Kurikulum Internasional CEFR A2 - C1',
    levelsCount: '3 Level Tersedia'
  }
]

// 4 FORMAT LAYANAN KELAS WORDISH (DETAIL SERVICES)
export const classModes = [
  {
    id: 'regular',
    name: 'Regular Class',
    subtitle: 'Interaktif dalam grup kelas',
    shortBadge: 'Maks. 6 Orang',
    icon: 'mdi-account-group',
    color: '#004EB2',
    bannerImage: '/mode-private.webp',
    heroImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    person: 'Grup (maks. 6 orang)',
    schedule: 'Mengikuti jadwal yang tersedia',
    location: 'Khusus di Wordish Center',
    priceStarting: 500000,
    priceNote: 'per bulan (8x pertemuan)',
    durationTotal: '2-3 Bulan per Level (24 Sesi)',
    sessionLength: '90 Menit / Pertemuan',
    idealFor: 'Pelajar, mahasiswa, dan individu yang menyukai diskusi aktif, bertukar pengalaman, dan belajar bersama teman sekelas dengan biaya paling terjangkau.',
    desc: 'Belajar interaktif bersama teman sekelas dengan kuota terbatas agar pendampingan tutor tetap optimal.',
    fullOverview: 'Regular Class di Wordish dirancang untuk menciptakan lingkungan belajar yang dinamis, interaktif, dan penuh semangat kompetitif positif. Dengan membatasi jumlah murid maksimal 6 orang per kelas, tutor kami dapat memantau pelafalan nada, pemahaman tata bahasa, serta keaktifan berbicara setiap peserta secara individual tanpa mengorbankan keseruan belajar dalam kelompok.',
    highlights: [
      'Grup kecil kompak & kompetitif positif',
      'Kurikulum terstruktur per level',
      'Fasilitas ruang multimedia Wordish Center'
    ],
    curriculum: [
      {
        week: 'Minggu 1 - 2',
        title: 'Fondasi Bahasa & Pengucapan Alami',
        desc: 'Penguasaan sistem fonetik (Pinyin / Hangeul / Phonics), pelafalan artikulasi dasar, dan perkenalan diri yang luwes.'
      },
      {
        week: 'Minggu 3 - 5',
        title: 'Tata Bahasa Esensial & Percakapan Harian',
        desc: 'Konstruksi kalimat praktis, kosakata sehari-hari (belanja, arah, waktu, hobi), serta latihan dialog berpasangan interaktif.'
      },
      {
        week: 'Minggu 6 - 8',
        title: 'Penerapan Praktis & Diskusi Kelompok',
        desc: 'Studi kasus simulasi situasi nyata (pesan makanan, negosiasi, presentasi singkat), serta latihan mendengar (listening).'
      },
      {
        week: 'Minggu 9 - 10',
        title: 'Evaluasi Komprehensif & Sertifikasi',
        desc: 'Ujian evaluasi tertulis dan tes percakapan lisan 1-on-1 bersama tutor, diakhiri dengan penerbitan sertifikat kelulusan resmi.'
      }
    ],
    facilities: [
      'Ruang kelas ber-AC dengan layar multimedia HD & sound system audio listening',
      'Buku modul cetak resmi Wordish + lembar latihan berkala',
      'Akses gratis ke portal Video E-Learning Wordish seumur hidup',
      'Grup diskusi WhatsApp kelas bersama tutor pendamping',
      'Sertifikat kelulusan fisik & digital ber-SK Kemenaker/Diknas',
      'Free refill air minum, kopi, dan camilan di student lounge'
    ],
    availableLanguages: ['Bahasa Mandarin', 'Bahasa Korea', 'Bahasa Inggris']
  },
  {
    id: 'semi-private',
    name: 'Semi-Private',
    subtitle: 'Mini grup fleksibel bersama rekan',
    shortBadge: '2–3 Orang',
    icon: 'mdi-account-multiple',
    color: '#0D9488',
    bannerImage: '/mode-home.webp',
    heroImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    person: 'Mini Grup (2–3 orang)',
    schedule: 'Fleksibel (menyesuaikan murid)',
    location: 'Wordish Center / Home Visit / Online',
    priceStarting: 200000,
    priceNote: 'per pertemuan (min. 10x pertemuan)',
    durationTotal: 'Fleksibel (Paket 16 - 24 Sesi)',
    sessionLength: '90 - 120 Menit / Pertemuan',
    idealFor: 'Sahabat, rekan sekantor, pasangan, atau anggota keluarga yang ingin belajar bersama dalam suasana santai, privat, dan jadwal yang dapat diatur sendiri.',
    desc: 'Cocok untuk belajar bareng sahabat atau rekan kerja dengan ritme dan target yang disepakati bersama.',
    fullOverview: 'Semi-Private Class memberikan perpaduan sempurna antara fleksibilitas kelas privat dan kehangatan belajar bersama partner pilihanmu. Kamu dan rekan belajarmu dapat menentukan sendiri jadwal pertemuan, memilih tutor favorit, dan bahkan memilih lokasi kelas: ingin datang ke Training Center Wordish, tutor datang ke rumah (Home Visit), atau tatap maya via Zoom interaktif.',
    highlights: [
      'Belajar nyaman bareng partner pilihan',
      'Waktu sesi bebas disepakati bersama tutor',
      'Pilihan lokasi offline maupun virtual'
    ],
    curriculum: [
      {
        week: 'Tahap 1 (Sesi 1 - 6)',
        title: 'Penyelarasan Level & Target Bersama',
        desc: 'Pre-assessment kemampuan kedua murid, penyusunan target bersama (misal: persiapan tes kerja, traveling, atau bisnis).'
      },
      {
        week: 'Tahap 2 (Sesi 7 - 14)',
        title: 'Intensif Kosakata Spesifik & Dialog Nyata',
        desc: 'Latihan roleplay dua arah sesuai konteks riil, koreksi langsung pengucapan intonasi dan tata bahasa spesifik.'
      },
      {
        week: 'Tahap 3 (Sesi 15 - 20)',
        title: 'Penerapan Praktis Lintas Topik',
        desc: 'Studi kasus percakapan profesional, presentasi berpasangan, dan adaptasi nuansa budaya penutur asli.'
      },
      {
        week: 'Tahap 4 (Sesi 21 - 24)',
        title: 'Final Mastery & Review Target Belajar',
        desc: 'Simulasi ujian akhir sesuai target (HSK / EPS-TOPIK / IELTS), feedback mendalam dari tutor, dan penerbitan sertifikat.'
      }
    ],
    facilities: [
      'Kebebasan memilih lokasi: Wordish Center, Home Visit (tutor ke rumah), atau Online Meet',
      'Jadwal belajar fleksibel, bisa reschedule dengan pemberitahuan tutor H-1',
      'Materi cetak dibawakan langsung oleh tutor atau dikirim ke rumah',
      'Pendampingan intensif dengan rasio tutor ke murid sangat rendah (1:2 atau 1:3)',
      'Free akses E-learning portal Wordish selama masa belajar',
      'Sertifikat kelulusan resmi Wordish berstandar industri'
    ],
    availableLanguages: ['Bahasa Mandarin', 'Bahasa Korea', 'Bahasa Inggris']
  },
  {
    id: 'private',
    name: 'Private Class',
    subtitle: '1-on-1 eksklusif fokus penuh',
    shortBadge: '1 on 1',
    icon: 'mdi-account-star',
    color: '#FF6E02',
    bannerImage: '/mode-private.webp',
    heroImage: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80',
    person: '1 on 1 (Private)',
    schedule: 'Fleksibel (menyesuaikan murid)',
    location: 'Wordish Center / Home Visit / Online',
    priceStarting: 150000,
    priceNote: 'per pertemuan / bulan (min. 10x)',
    durationTotal: 'Fleksibel (Paket 12, 20, atau 30 Sesi)',
    sessionLength: '90 - 120 Menit / Pertemuan',
    idealFor: 'Eksekutif, profesional bisnis, ekspatriat, atau calon pekerja ke luar negeri yang membutuhkan percepatan belajar dengan kurikulum khusus 100% personal.',
    desc: 'Pendampingan privat penuh untuk akselerasi belajar tercepat sesuai target karier atau sertifikasi.',
    fullOverview: 'Private Class adalah layanan pelatihan bahasa paling eksklusif dan terarah di Wordish. 100% perhatian instruktur tercurah khusus untukmu. Kurikulum belajar, materi pengajaran, dan kecepatan kelas dirancang mengikuti kemampuan dan tujuan spesifikmu—mulai dari persiapan ujian sertifikasi kilat, wawancara kerja ekspatriat, hingga negosiasi kontrak bisnis internasional.',
    highlights: [
      'Fokus 100% pada satu murid',
      'Materi & ritme disesuaikan kebutuhan',
      'Bebas atur sesi kapan saja dan di mana saja'
    ],
    curriculum: [
      {
        week: 'Modul Kustom A',
        title: 'Diagnostic Test & Desain Silabus Pribadi',
        desc: 'Pemetaan kekuatan dan kelemahan linguistik personal. Penyesuaian silabus khusus sesuai tenggat waktu yang kamu miliki.'
      },
      {
        week: 'Modul Kustom B',
        title: 'Intensive Drills & Daily Active Immersion',
        desc: 'Fokus intensif pada target utama: drilling pola kalimat, aksentuasi, listening teknis, atau penulisan dokumen resmi.'
      },
      {
        week: 'Modul Kustom C',
        title: 'Simulasi Wawancara / Ujian Sertifikasi',
        desc: 'Mock test berkala dengan sistem skoring resmi. Pelatihan respon spontan menghadapi penutur asli (native speaker).'
      },
      {
        week: 'Modul Kustom D',
        title: 'Review Akhir & Garansi Pemahaman',
        desc: 'Uji kompetensi akhir menyeluruh, pendampingan berkas kerja / pendaftaran ujian resmi, dan penerbitan sertifikat.'
      }
    ],
    facilities: [
      'Pendampingan bimbingan 1-on-1 privat penuh tanpa distraksi',
      'Bebas memilih format: Ruang Privat VIP Wordish Center, Guru ke Rumah, atau Zoom Live',
      'Waktu sesi super fleksibel (Pagi, Siang, Sore, atau Malam) termasuk weekend',
      'Konsultasi langsung dengan konselor kurikulum & laporan progres mingguan',
      'Modul belajar eksklusif, buku fisik, dan akses VIP E-Learning seumur hidup',
      'Garansi pengulangan materi jika belum mencapai target kompetensi yang disepakati'
    ],
    availableLanguages: ['Bahasa Mandarin', 'Bahasa Korea', 'Bahasa Inggris']
  },
  {
    id: 'online',
    name: 'Online Class',
    subtitle: 'Live virtual interaktif dari mana saja',
    shortBadge: 'Live Virtual',
    icon: 'mdi-laptop-account',
    color: '#7C3AED',
    bannerImage: '/mode-online.webp',
    heroImage: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=1200&q=80',
    person: 'Private / Grup Online',
    schedule: 'Fleksibel & Sesi Terjadwal',
    location: 'Online Meet (Zoom / G-Meet)',
    priceStarting: 150000,
    priceNote: 'per pertemuan (min. 10x pertemuan)',
    durationTotal: '2 Bulan (16 - 20 Sesi Virtual)',
    sessionLength: '75 - 90 Menit / Sesi',
    idealFor: 'Siswa, mahasiswa, dan pekerja di luar kota/luar negeri yang ingin belajar bahasa asing berkualitas dari kenyamanan rumah tanpa kendala jarak.',
    desc: 'Solusi praktis belajar dari mana saja lewat sesi tatap maya langsung, hemat mobilitas tanpa mengurangi kualitas.',
    fullOverview: 'Online Class Wordish menghadirkan pengalaman belajar jarak jauh dengan standar interaktivitas tatap muka. Menggunakan platform Zoom Pro / Google Meet berdefinisi tinggi, sesi pengajaran dilengkapi whiteboard interaktif, breakout rooms untuk latihan bicara, serta rekaman video otomatis dari setiap pertemuan yang dapat diputar ulang kapan saja.',
    highlights: [
      'Akses dari mana saja tanpa kendala jarak',
      'Dapat rekaman sesi kelas & modul digital',
      'Tanya jawab langsung dua arah via video call'
    ],
    curriculum: [
      {
        week: 'Tahap 1 (Sesi 1 - 4)',
        title: 'Virtual Onboarding & Intonasi Alami',
        desc: 'Penguasaan dasar bahasa secara visual dan interaktif melalui slide multimedia dan materi audio digital interaktif.'
      },
      {
        week: 'Tahap 2 (Sesi 5 - 10)',
        title: 'Live Speaking Drills & Real-time Feedback',
        desc: 'Latihan percakapan dua arah via video call dengan koreksi instan pada artikulasi dan susunan kalimat.'
      },
      {
        week: 'Tahap 3 (Sesi 11 - 16)',
        title: 'Quiz Interaktif & Pemahaman Mendengar (Listening)',
        desc: 'Latihan soal digital via kuis interaktif berwaktu, pemutaran audio penutur asli, dan diskusi topik hangat terkini.'
      },
      {
        week: 'Tahap 4 (Sesi 17 - 20)',
        title: 'Ujian Akhir Online & Digital Certificate',
        desc: 'Evaluasi akhir lewat platform CBT Wordish, review hasil secara komprehensif, dan penerbitan E-Certificate resmi terverifikasi.'
      }
    ],
    facilities: [
      'Bisa diikuti dari seluruh kota di Indonesia bahkan dari luar negeri',
      'Rekaman kelas kualitas HD otomatis tersimpan di student dashboard seumur hidup',
      'Bahan tayang PDF lengkap, ringkasan rumus tata bahasa, dan file audio MP3',
      'Grup diskusi WhatsApp 24 jam bersama pengajar untuk tanya jawab di luar jam kelas',
      'Simulasi tes online berbasis komputer (CBT) berkala',
      'E-Certificate resmi ber-QR Code verifikasi keaslian'
    ],
    availableLanguages: ['Bahasa Mandarin', 'Bahasa Korea', 'Bahasa Inggris']
  }
]

// ==========================================
// 3. SISTEM HARGA RESMI WORDISH PER BAHASA
// ==========================================
export const officialPricingSystem = {
  mandarin: {
    language: 'Bahasa Mandarin',
    badgeColor: '#DC2626',
    bgColor: 'red-lighten-5',
    icon: 'mdi-translate',
    rates: [
      {
        service: 'Regular Class',
        location: 'Khusus di Wordish Center',
        format: 'Grup (maks. 6 orang)',
        price: 500000,
        priceDisplay: 'Rp 500.000',
        unit: '/ Bulan',
        term: '8x pertemuan, 2x dalam 1 minggu',
        minOrder: 'Bulanan',
        highlight: false
      },
      {
        service: 'Semi-Private',
        location: 'di Wordish Center',
        format: 'Mini Grup (2–3 orang)',
        price: 200000,
        priceDisplay: 'Rp 200.000',
        unit: '/ pertemuan',
        term: 'Minimal bayar 10x pertemuan',
        minOrder: 'Min. 10x Sesi (Total Rp 2.000.000)',
        highlight: false
      },
      {
        service: 'Private',
        location: 'di Wordish Center',
        format: '1 on 1 Eksklusif',
        price: 150000,
        priceDisplay: 'Rp 150.000',
        unit: '/ Bulan',
        term: 'Minimal bayar 10x pertemuan',
        minOrder: 'Min. 10x Sesi',
        highlight: true
      },
      {
        service: 'Semi-Private',
        location: 'Visit Home (Tutor ke Rumah)',
        format: 'Mini Grup (2–3 orang)',
        price: 400000,
        priceDisplay: 'Rp 400.000',
        unit: '/ pertemuan',
        term: 'Minimal bayar 10x pertemuan',
        minOrder: 'Min. 10x Sesi (Total Rp 4.000.000)',
        highlight: false
      },
      {
        service: 'Private',
        location: 'Visit Home (Tutor ke Rumah)',
        format: '1 on 1 Eksklusif',
        price: 250000,
        priceDisplay: 'Rp 250.000',
        unit: '/ pertemuan',
        term: 'Minimal bayar 10x pertemuan',
        minOrder: 'Min. 10x Sesi (Total Rp 2.500.000)',
        highlight: true
      },
      {
        service: 'Online Private',
        location: 'Online Meet (Zoom / G-Meet)',
        format: '1 on 1 Virtual',
        price: 150000,
        priceDisplay: 'Rp 150.000',
        unit: '/ pertemuan',
        term: 'Minimal bayar 10x pertemuan',
        minOrder: 'Min. 10x Sesi (Total Rp 1.500.000)',
        highlight: false
      }
    ]
  },
  english: {
    language: 'Bahasa Inggris',
    badgeColor: '#D97706',
    bgColor: 'amber-lighten-5',
    icon: 'mdi-account-voice',
    rates: [
      {
        service: 'Regular Class',
        location: 'Khusus di Wordish Center',
        format: 'Grup (maks. 6 orang)',
        price: 500000,
        priceDisplay: 'Rp 500.000',
        unit: '/ Bulan',
        term: '8x pertemuan, 2x dalam 1 minggu',
        minOrder: 'Bulanan',
        highlight: false
      },
      {
        service: 'Semi-Private',
        location: 'di Wordish Center',
        format: 'Mini Grup (2–3 orang)',
        price: 200000,
        priceDisplay: 'Rp 200.000',
        unit: '/ pertemuan',
        term: 'Minimal bayar 10x pertemuan',
        minOrder: 'Min. 10x Sesi (Total Rp 2.000.000)',
        highlight: false
      },
      {
        service: 'Private',
        location: 'di Wordish Center',
        format: '1 on 1 Eksklusif',
        price: 150000,
        priceDisplay: 'Rp 150.000',
        unit: '/ Bulan',
        term: 'Minimal bayar 10x pertemuan',
        minOrder: 'Min. 10x Sesi',
        highlight: true
      },
      {
        service: 'Semi-Private',
        location: 'Visit Home (Tutor ke Rumah)',
        format: 'Mini Grup (2–3 orang)',
        price: 300000,
        priceDisplay: 'Rp 300.000',
        unit: '/ pertemuan',
        term: 'Minimal bayar 10x pertemuan',
        minOrder: 'Min. 10x Sesi (Total Rp 3.000.000)',
        highlight: false
      },
      {
        service: 'Private',
        location: 'Visit Home (Tutor ke Rumah)',
        format: '1 on 1 Eksklusif',
        price: 200000,
        priceDisplay: 'Rp 200.000',
        unit: '/ pertemuan',
        term: 'Minimal bayar 10x pertemuan',
        minOrder: 'Min. 10x Sesi (Total Rp 2.000.000)',
        highlight: true
      },
      {
        service: 'Online Private',
        location: 'Online Meet (Zoom / G-Meet)',
        format: '1 on 1 Virtual',
        price: 150000,
        priceDisplay: 'Rp 150.000',
        unit: '/ pertemuan',
        term: 'Minimal bayar 10x pertemuan',
        minOrder: 'Min. 10x Sesi (Total Rp 1.500.000)',
        highlight: false
      }
    ]
  },
  korean: {
    language: 'Bahasa Korea',
    badgeColor: '#2563EB',
    bgColor: 'blue-lighten-5',
    icon: 'mdi-bullseye-arrow',
    rates: [
      {
        service: 'Online Private',
        location: 'Online Meet (Zoom / G-Meet)',
        format: '1 on 1 Virtual',
        price: 200000,
        priceDisplay: 'Rp 200.000',
        unit: '/ pertemuan',
        term: 'Minimal bayar 10x pertemuan',
        minOrder: 'Min. 10x Sesi (Total Rp 2.000.000)',
        highlight: true
      },
      {
        service: 'Offline Private',
        location: 'Wordish Center / Visit Home',
        format: '1 on 1 Eksklusif',
        price: 250000,
        priceDisplay: 'Rp 250.000',
        unit: '/ pertemuan',
        term: 'Minimal bayar 10x pertemuan',
        minOrder: 'Min. 10x Sesi (Total Rp 2.500.000)',
        highlight: true
      }
    ]
  }
}

// KATALOG BUKU PELAJARAN (LINKED TO SHOPEE & TOKOPEDIA)
export const books = [
  {
    id: 'book-junior-coursebook',
    title: 'Wordish Junior Coursebook',
    language: 'Bahasa Inggris (SD)',
    author: 'Tim Akademik Wordish',
    pages: 'Paket 6 Buku',
    rating: 4.95,
    soldCount: 'Terlaris',
    originalPrice: 180000,
    price: 150000,
    coverImage: '/junior-coursebook.png',
    description: 'Paket coursebook Wordish Junior (6 buku) untuk siswa SD. Materi bahasa Inggris bertahap, latihan soal terstruktur, dan aktivitas interaktif menyenangkan.',
    shopeeUrl: 'https://shopee.co.id/search?keyword=wordish%20junior%20coursebook',
    tokopediaUrl: 'https://vt.tokopedia.com/t/ZS9P4T45rc6KB-BoQL5/'
  },
  {
    id: 'book-teens-coursebook',
    title: 'Wordish Teens Coursebook',
    language: 'Bahasa Inggris (SMP)',
    author: 'Tim Akademik Wordish',
    pages: 'Paket 3 Buku',
    rating: 4.95,
    soldCount: 'Terlaris',
    originalPrice: 170000,
    price: 140000,
    coverImage: '/teen-coursebook.png',
    description: 'Paket coursebook Wordish Teens (3 buku) untuk siswa SMP. Pendalaman grammar, pengayaan vocabulary, dan percakapan kontekstual sehari-hari.',
    shopeeUrl: 'https://shopee.co.id/search?keyword=wordish%20teens%20coursebook',
    tokopediaUrl: 'https://vt.tokopedia.com/t/ZS9P4TWNd9BV3-vHtN4/'
  }
]

// E-LEARNING MODULES DATA
export const elearningModules = [
  {
    id: 'el-mandarin-01',
    languageId: 'mandarin',
    languageName: 'Bahasa Mandarin',
    title: 'Pinyin & 4 Nada Dasar Bahasa Mandarin',
    instructor: 'Lǎoshī Chen Wei, M.Ed (Beijing Normal Univ)',
    totalVideos: '12 Video Pelajaran',
    totalDuration: '3 Jam Total',
    progress: 25,
    lessons: [
      { id: 1, title: '1. Pengenalan Pinyin & Inisial Konsonan Dasar', duration: '12:30', free: true },
      { id: 2, title: '2. Vokal Tunggal & Vokal Majemuk', duration: '15:20', free: true },
      { id: 3, title: '3. Membedakan 4 Nada Suara (Tones) & Nada Netral', duration: '18:45', free: false },
      { id: 4, title: '4. Percakapan Praktis: Menyapa & Perkenalan Diri', duration: '20:10', free: false },
      { id: 5, title: '5. Dasar Guratan & Menulis Hanzi Pertama', duration: '22:00', free: false }
    ]
  },
  {
    id: 'el-korea-01',
    languageId: 'korean',
    languageName: 'Bahasa Korea',
    title: 'Hangeul Cepat & Kosakata Esensial EPS-TOPIK',
    instructor: 'Ssaem Park Ji-hoon (Universitas Yonsei)',
    totalVideos: '16 Video Pelajaran',
    totalDuration: '4.5 Jam Total',
    progress: 40,
    lessons: [
      { id: 1, title: '1. Mengenal Huruf Vokal Dasar & Konsonan Hangeul', duration: '14:20', free: true },
      { id: 2, title: '2. Kaidah Konsonan Akhir (Batchim) & Pelafalan', duration: '16:40', free: true },
      { id: 3, title: '3. Kosakata Tempat Kerja Pabrik & Keselamatan', duration: '22:15', free: false },
      { id: 4, title: '4. Trik Cepat Menjawab Soal Listening EPS-TOPIK', duration: '25:00', free: false },
      { id: 5, title: '5. Simulasi Ujian Membaca (Reading) Format CBT', duration: '28:30', free: false }
    ]
  },
  {
    id: 'el-english-01',
    languageId: 'english',
    languageName: 'Bahasa Inggris',
    title: 'Active Speaking & Professional Workplace Communication',
    instructor: 'Sarah Jenkins, CELTA (Native Speaker UK)',
    totalVideos: '14 Video Pelajaran',
    totalDuration: '3.5 Jam Total',
    progress: 15,
    lessons: [
      { id: 1, title: '1. Overcoming Speaking Anxiety & Hesitation', duration: '10:50', free: true },
      { id: 2, title: '2. Essential Phrasal Verbs in Daily Business', duration: '18:30', free: true },
      { id: 3, title: '3. Handling Job Interview Questions Confidently', duration: '24:10', free: false },
      { id: 4, title: '4. Professional Email & Presentation Skills', duration: '20:45', free: false },
      { id: 5, title: '5. Mock Speaking Practice: Small Talk to Business', duration: '22:15', free: false }
    ]
  }
]

// PROGRAM KELAS WORDISH
export const programs = [
  // --- BAHASA MANDARIN ---
  {
    id: 'mandarin-basic',
    languageId: 'mandarin',
    title: 'Mandarin Dasar & Pinyin (HSK 1 - 2)',
    level: 'Pemula (Beginner)',
    duration: '2 Bulan (24 Sesi @90 Menit)',
    mode: 'Pilihan: Private, Home, atau Online',
    originalPrice: 1850000,
    price: 950000,
    discountPercent: 48,
    badge: 'Paling Populer',
    badgeColor: 'accent',
    summary: 'Cocok bagi yang memulai dari nol. Belajar sistem Pinyin, nada suara, 300 kosakata penting, dan percakapan harian praktis.',
    features: [
      'Tersedia format Private Class, Home Class, atau Online',
      'Penguasaan sistem Pinyin & 4 nada suara akurat',
      'Dasar guratan & radikal karakter Hanzi umum',
      'Modul belajar cetak & akses video e-learning',
      'Sertifikat kelulusan resmi untuk portofolio'
    ],
    nextBatch: 'Batch 14: Mulai 10 Desember 2026'
  },
  {
    id: 'mandarin-kerja',
    languageId: 'mandarin',
    title: 'Mandarin Intensif Kerja Pabrik & Kantor Taiwan/China',
    level: 'Lanjutan & Siap Kerja',
    duration: '3 Bulan (36 Sesi @120 Menit)',
    mode: 'Pilihan: Private, Home, atau Online',
    originalPrice: 3200000,
    price: 1750000,
    discountPercent: 45,
    badge: 'Program Siap Kerja',
    badgeColor: 'success',
    summary: 'Dirancang khusus untuk calon pekerja industri dan perkantoran. Fokus kosakata pabrik, instruksi kerja, dan simulasi wawancara.',
    features: [
      'Pilihan Private (1-on-1), Home Class, atau Online',
      'Kosakata teknis industri & operasional keselamatan kerja',
      'Simulasi interview kerja langsung dengan pengajar',
      'Bimbingan penulisan CV & pengurusan berkas kerja luar negeri',
      'Koneksi info lowongan kerja dari mitra terpercaya'
    ],
    nextBatch: 'Batch 8: Mulai 15 Desember 2026'
  },

  // --- BAHASA KOREA ---
  {
    id: 'korean-eps',
    languageId: 'korean',
    title: 'Program Khusus EPS-TOPIK (Kerja G to G Korea Selatan)',
    level: 'Fokus Ujian HRD Korea',
    duration: '3 Bulan Intensif (60 Jam Pelatihan)',
    mode: 'Pilihan: Private, Home, atau Online',
    originalPrice: 3500000,
    price: 1850000,
    discountPercent: 47,
    badge: 'Garansi Bimbingan',
    badgeColor: 'error',
    summary: 'Program unggulan persiapan seleksi kerja resmi pemerintah Korea Selatan (G to G BP2MI). Kupas tuntas soal membaca (Reading) & mendengar (Listening).',
    features: [
      'Tersedia format Private Class, Home Class, atau Online',
      'Penguasaan Hangeul (huruf Korea) cepat dalam 3 hari',
      'Bank soal resmi EPS-TOPIK format CBT (Computer Based Test)',
      'Tryout berkala dengan sistem komputer mirip ujian asli',
      'Pendampingan proses pendaftaran ujian resmi BP2MI'
    ],
    nextBatch: 'Batch 21: Mulai 8 Desember 2026'
  },
  {
    id: 'korean-speaking',
    languageId: 'korean',
    title: 'Korean General & Percakapan K-Talk (TOPIK I)',
    level: 'Pemula - Menengah',
    duration: '2 Bulan (20 Sesi @90 Menit)',
    mode: 'Pilihan: Private, Home, atau Online',
    originalPrice: 1600000,
    price: 850000,
    discountPercent: 46,
    badge: 'Kelas Fleksibel',
    badgeColor: 'primary',
    summary: 'Belajar bahasa Korea seru dan terstruktur dari tata bahasa dasar, percakapan sehari-hari, hingga ungkapan populer drama dan budaya.',
    features: [
      'Pilihan Private, Home Class, atau Live Online Zoom',
      'Membaca dan menulis Hangeul dengan lancar',
      'Tata bahasa dasar (partikel, bentuk formal & informal)',
      'Akses e-learning rekaman video materi seumur hidup',
      'Sertifikat kelulusan level TOPIK I'
    ],
    nextBatch: 'Batch 12: Mulai 12 Desember 2026'
  },

  // --- BAHASA INGGRIS ---
  {
    id: 'english-speaking',
    languageId: 'english',
    title: 'Communicative English & Active Speaking',
    level: 'Semua Level (Dasar - Menengah)',
    duration: '2 Bulan (24 Sesi @90 Menit)',
    mode: 'Pilihan: Private, Home, atau Online',
    originalPrice: 1750000,
    price: 890000,
    discountPercent: 49,
    badge: 'Percakapan Percaya Diri',
    badgeColor: 'info',
    summary: 'Atasi rasa takut dan malu bicara bahasa Inggris! Praktik speaking 80% di setiap pertemuan dengan topik relevan karier & percakapan sosial.',
    features: [
      'Pilihan Private 1-on-1, Home Class, atau Online',
      'Praktek bicara langsung (Full Speaking immersion)',
      'Koreksi pelafalan (Pronunciation) & intonasi alami',
      'Keterampilan presentasi diri & interview kerja bahasa Inggris',
      'Sertifikat kemampuan berbicara resmi'
    ],
    nextBatch: 'Batch 30: Mulai 5 Desember 2026'
  },
  {
    id: 'english-prep',
    languageId: 'english',
    title: 'Intensive IELTS & TOEFL Preparation for Career',
    level: 'Menengah - Lanjutan',
    duration: '2.5 Bulan (30 Sesi @100 Menit)',
    mode: 'Pilihan: Private, Home, atau Online',
    originalPrice: 2800000,
    price: 1450000,
    discountPercent: 48,
    badge: 'Target Skor Tinggi',
    badgeColor: 'accent',
    summary: 'Bedah strategi kilat menjawab soal Listening, Reading, Writing, dan Speaking untuk meraih skor IELTS 6.5+ atau TOEFL ITP 550+.',
    features: [
      'Pilihan Private intensif atau Online Live Zoom',
      'Trik cepat eliminasi opsi jebakan di soal ujian',
      'Feedback personal penilaian Writing task 1 & 2',
      '3x Full Diagnostic Mock Test lengkap dengan skor prediksi',
      'Garansi bimbingan ulang jika target skor belum tercapai'
    ],
    nextBatch: 'Batch 16: Mulai 15 Desember 2026'
  }
]

// Data Placement Test Interaktif (Sederhana & Cepat)
export const placementTests = {
  mandarin: [
    {
      id: 1,
      question: 'Manakah penulisan Pinyin yang tepat untuk kata "Terima kasih" (谢谢)?',
      options: [
        { key: 'A', text: 'Nǐ hǎo' },
        { key: 'B', text: 'Xièxie' },
        { key: 'C', text: 'Zàijiàn' },
        { key: 'D', text: 'Duìbuqǐ' }
      ],
      correct: 'B'
    },
    {
      id: 2,
      question: 'Arti dari kalimat "Wǒ shì yìnní rén" (我是印尼人) adalah...',
      options: [
        { key: 'A', text: 'Saya sedang belajar bahasa Mandarin' },
        { key: 'B', text: 'Saya orang Indonesia' },
        { key: 'C', text: 'Saya ingin pergi ke Taiwan' },
        { key: 'D', text: 'Nama saya Rian' }
      ],
      correct: 'B'
    },
    {
      id: 3,
      question: 'Karakter Hanzi untuk angka "Tiga" adalah...',
      options: [
        { key: 'A', text: '一 (Yī)' },
        { key: 'B', text: '二 (Èr)' },
        { key: 'C', text: '三 (Sān)' },
        { key: 'D', text: '四 (Sì)' }
      ],
      correct: 'C'
    }
  ],
  korean: [
    {
      id: 1,
      question: 'Huruf Hangeul untuk vokal "A" ditulis...',
      options: [
        { key: 'A', text: 'ㅏ' },
        { key: 'B', text: 'ㅓ' },
        { key: 'C', text: 'ㅗ' },
        { key: 'D', text: 'ㅣ' }
      ],
      correct: 'A'
    },
    {
      id: 2,
      question: 'Bagaimana ucapan salam "Halo / Apa kabar" dalam bahasa Korea formal-santai?',
      options: [
        { key: 'A', text: 'Kamsahamnida (감사합니다)' },
        { key: 'B', text: 'Annyeonghaseyo (안녕하세요)' },
        { key: 'C', text: 'Chukahaeyo (축하해요)' },
        { key: 'D', text: 'Mianhaeyo (미안해요)' }
      ],
      correct: 'B'
    },
    {
      id: 3,
      question: 'Dalam program EPS-TOPIK, kata "공장" (Gong-jang) bermakna...',
      options: [
        { key: 'A', text: 'Rumah Sakit' },
        { key: 'B', text: 'Pabrik / Tempat Kerja' },
        { key: 'C', text: 'Sekolah' },
        { key: 'D', text: 'Bandara' }
      ],
      correct: 'B'
    }
  ],
  english: [
    {
      id: 1,
      question: 'Choose the correct sentence to introduce your professional occupation:',
      options: [
        { key: 'A', text: 'I am work in a logistic company.' },
        { key: 'B', text: 'I work as a quality control supervisor in a manufacturing company.' },
        { key: 'C', text: 'I working like supervisor.' },
        { key: 'D', text: 'My job is work everyday.' }
      ],
      correct: 'B'
    },
    {
      id: 2,
      question: '"The meeting has been rescheduled ______ next Monday."',
      options: [
        { key: 'A', text: 'for' },
        { key: 'B', text: 'to' },
        { key: 'C', text: 'at' },
        { key: 'D', text: 'on' }
      ],
      correct: 'A'
    },
    {
      id: 3,
      question: 'What is the closest synonym for the word "COLLABORATE"?',
      options: [
        { key: 'A', text: 'Compete' },
        { key: 'B', text: 'Work together' },
        { key: 'C', text: 'Cancel' },
        { key: 'D', text: 'Refuse' }
      ],
      correct: 'B'
    }
  ]
}

// Keunggulan Wordish
export const advantages = [
  {
    icon: 'mdi-certificate',
    title: 'Lembaga Pelatihan Terakreditasi',
    desc: 'Lembaga pelatihan bahasa asing resmi dengan kurikulum berbasis standar internasional.',
    color: '#004EB2'
  },
  {
    icon: 'mdi-account-tie-voice',
    title: 'Pengajar Berpengalaman & Native',
    desc: 'Dibimbing oleh instruktur alumni universitas luar negeri dan penutur asli (Native Speaker).',
    color: '#0077B6'
  },
  {
    icon: 'mdi-briefcase-check',
    title: 'Penyaluran Info Kerja Luar Negeri',
    desc: 'Fokus bimbingan persiapan kerja ke Korea Selatan (EPS-TOPIK), Taiwan, serta perusahaan multinasional.',
    color: '#FF6E02'
  },
  {
    icon: 'mdi-laptop-account',
    title: 'Pilihan Private, Home & Online',
    desc: 'Bebas pilih format belajar: 1-on-1 privat di training center, tutor datang ke rumah, atau kelas live Zoom.',
    color: '#10B981'
  }
]

// Testimoni Siswa Wordish
export const testimonials = [
  {
    id: 1,
    name: 'Bagus Setyawan',
    program: 'Bahasa Korea (EPS-TOPIK) - Private Class',
    outcome: 'Lolos Kerja Manufaktur di Hwaseong, Korea Selatan',
    quote: 'Belajar dari nol huruf Hangeul di Wordish sampai bisa lulus ujian EPS-TOPIK dengan nilai 95/100. Simulasi ujian komputernya sangat mirip aslinya!',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80'
  },
  {
    id: 2,
    name: 'Siti Nurhaliza',
    program: 'Bahasa Mandarin Kerja - Home Class',
    outcome: 'Bekerja di Perusahaan Logistik Taiwan',
    quote: 'Fokus kosakata kerja pabrik dan latihan interviewnya sangat membantu saat seleksi user. Tutor yang datang ke rumah sangat sabar mengajarkan nada suara.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
  },
  {
    id: 3,
    name: 'Dimas Wicaksono',
    program: 'English Speaking & IELTS Prep - Online Class',
    outcome: 'Meraih Skor IELTS 7.0 & Diterima di Perusahaan Asing',
    quote: 'Dulu saya sangat kaku kalau diajak ngobrol bahasa Inggris. Di kelas online Wordish suasananya santai tapi terarah, modul e-learning dan bukunya sangat bermanfaat.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
  }
]

// Jadwal Kelas Harian Wordish (Senin - Sabtu)
export const batchSchedules = [
  {
    id: 1,
    time: '14.00 - 15.00',
    timeLabel: '14.00 - 15.00 WIB',
    className: 'Mandarin (Kids & Junior)',
    language: 'Bahasa Mandarin',
    category: 'Kids & Junior',
    categoryBadgeColor: 'teal',
    ageGroup: 'Anak & Remaja (6 - 15 Tahun)',
    focus: 'Pengenalan Pinyin, Kosakata Dasar, Cerita & Karakter Hanzi Seru',
    days: 'Senin - Sabtu',
    mode: 'Private / Home / Online Class',
    modes: ['Private Class', 'Home Class', 'Online Class'],
    quota: 'Sisa 3 Slot'
  },
  {
    id: 2,
    time: '15.00 - 16.00',
    timeLabel: '15.00 - 16.00 WIB',
    className: 'English (Kids & Junior)',
    language: 'Bahasa Inggris',
    category: 'Kids & Junior',
    categoryBadgeColor: 'teal',
    ageGroup: 'Anak & Remaja (6 - 15 Tahun)',
    focus: 'Phonics, Active Speaking, Percakapan Sekolah & Kosakata Praktis',
    days: 'Senin - Sabtu',
    mode: 'Private / Home / Online Class',
    modes: ['Private Class', 'Home Class', 'Online Class'],
    quota: 'Sisa 4 Slot'
  },
  {
    id: 3,
    time: '16.00 - 17.00',
    timeLabel: '16.00 - 17.00 WIB',
    className: 'Mandarin (Kids & Junior)',
    language: 'Bahasa Mandarin',
    category: 'Kids & Junior',
    categoryBadgeColor: 'teal',
    ageGroup: 'Anak & Remaja (6 - 15 Tahun)',
    focus: 'Percakapan Tematik Harian, Persiapan YCT & Latihan Guratan Hanzi',
    days: 'Senin - Sabtu',
    mode: 'Private / Home / Online Class',
    modes: ['Private Class', 'Home Class', 'Online Class'],
    quota: 'Sisa 2 Slot'
  },
  {
    id: 4,
    time: '17.00 - 18.00',
    timeLabel: '17.00 - 18.00 WIB',
    className: 'English (Kids & Junior)',
    language: 'Bahasa Inggris',
    category: 'Kids & Junior',
    categoryBadgeColor: 'teal',
    ageGroup: 'Anak & Remaja (6 - 15 Tahun)',
    focus: 'Grammar Dasar, Percakapan Percaya Diri & Presentasi Sederhana',
    days: 'Senin - Sabtu',
    mode: 'Private / Home / Online Class',
    modes: ['Private Class', 'Home Class', 'Online Class'],
    quota: 'Sisa 5 Slot'
  },
  {
    id: 5,
    time: '18.00 - 19.00',
    timeLabel: '18.00 - 19.00 WIB',
    className: 'Mandarin (Teen & Adult)',
    language: 'Bahasa Mandarin',
    category: 'Teen & Adult',
    categoryBadgeColor: 'deep-purple',
    ageGroup: 'Remaja & Dewasa (16+ Tahun / Mahasiswa & Karyawan)',
    focus: 'Percakapan Sehari-hari, Persiapan Ujian HSK 1 - 3 & Bahasa Bisnis',
    days: 'Senin - Sabtu',
    mode: 'Private / Home / Online Class',
    modes: ['Private Class', 'Home Class', 'Online Class'],
    quota: 'Sisa 3 Slot'
  },
  {
    id: 6,
    time: '19.00 - 20.00',
    timeLabel: '19.00 - 20.00 WIB',
    className: 'English (Teen & Adult)',
    language: 'Bahasa Inggris',
    category: 'Teen & Adult',
    categoryBadgeColor: 'deep-purple',
    ageGroup: 'Remaja & Dewasa (16+ Tahun / Mahasiswa & Karyawan)',
    focus: 'Active Fluency Speaking, Business Communication & Persiapan IELTS/TOEFL',
    days: 'Senin - Sabtu',
    mode: 'Private / Home / Online Class',
    modes: ['Private Class', 'Home Class', 'Online Class'],
    quota: 'Sisa 4 Slot'
  },
  {
    id: 7,
    time: '20.00 - 21.00',
    timeLabel: '20.00 - 21.00 WIB',
    className: 'Mandarin (Teen & Adult)',
    language: 'Bahasa Mandarin',
    category: 'Teen & Adult',
    categoryBadgeColor: 'deep-purple',
    ageGroup: 'Remaja & Dewasa (16+ Tahun / Mahasiswa & Karyawan)',
    focus: 'Percakapan Dewasa Mahir, Bahasa Kerja & Studi ke Luar Negeri',
    days: 'Senin - Sabtu',
    mode: 'Private / Home / Online Class',
    modes: ['Private Class', 'Home Class', 'Online Class'],
    quota: 'Sisa 2 Slot'
  },
  {
    id: 8,
    time: '09.00 - 12.00',
    timeLabel: '09.00 - 12.00 WIB',
    className: 'Korea EPS-TOPIK (Intensif)',
    language: 'Bahasa Korea',
    category: 'Intensif Kerja LN',
    categoryBadgeColor: 'amber-darken-3',
    ageGroup: 'Calon Pekerja Migran Korsel (18 - 38 Tahun)',
    focus: 'Kurikulum HRD Korea, Bank Soal CBT Komputer & Simulasi Wawancara BP2MI',
    days: 'Senin - Jumat',
    mode: 'Private / Training Center / Online',
    modes: ['Private Class', 'Training Center', 'Online Class'],
    quota: 'Sisa 3 Kursi'
  }
]

// FAQ Sederhana untuk Wordish
export const faqs = [
  {
    q: 'Apa perbedaan format Regular, Semi-Private, Private, dan Online Class?',
    a: 'Regular Class adalah kelas kelompok (maks. 6 orang) dengan jadwal tetap khusus di Wordish Center. Semi-Private Class untuk grup mini (2-3 orang) dengan jadwal fleksibel dan lokasi di Wordish Center, Home Visit, atau Online. Private Class adalah bimbingan 1-on-1 personal dengan jadwal fleksibel (di Wordish, Home Visit, atau Online). Sedangkan Online Class adalah sesi virtual interaktif dari mana saja.'
  },
  {
    q: 'Apakah bisa belajar dari nol jika sama sekali belum punya dasar?',
    a: 'Bisa banget! Semua program kami memiliki kelas level dasar (Level 1 / Pemula) yang mengajarkan dari abjad/karakter dasar (Pinyin/Hanzi untuk Mandarin, Hangeul untuk Korea, dan grammar dasar untuk Inggris).'
  },
  {
    q: 'Apakah materi e-learning dan buku pelajaran sudah termasuk?',
    a: 'Seluruh peserta kelas mendapatkan akses E-Learning resmi Wordish selama masa pelatihan. Anda juga dapat membeli Buku Pelajaran fisik resmi Wordish secara langsung atau melalui Official Store kami di Shopee dan Tokopedia.'
  },
  {
    q: 'Apakah Wordish menyalurkan kerja ke luar negeri?',
    a: 'Wordish adalah lembaga pelatihan resmi yang memberikan bekal kompetensi bahasa, sertifikat pelatihan, simulasi ujian (seperti EPS-TOPIK), pendampingan pendaftaran ujian negara, serta memberikan informasi lowongan dari mitra resmi.'
  },
  {
    q: 'Bagaimana cara membeli buku pelajaran resmi Wordish di Shopee atau Tokopedia?',
    a: 'Anda cukup mengklik tombol "Beli di Shopee" atau "Beli di Tokopedia" pada bagian katalog Buku Pelajaran di website ini, dan Anda akan langsung diarahkan ke laman produk resmi kami di marketplace tersebut.'
  }
]

/** Truncates text to maxLength characters with a trailing ellipsis. */
export function truncateText(text, maxLength = 60) {
  if (!text) return ''
  const normalized = String(text).trim()
  if (normalized.length <= maxLength) return normalized
  return `${normalized.slice(0, Math.max(0, maxLength - 3)).trimEnd()}...`
}
