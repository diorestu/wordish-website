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

// 4 FORMAT LAYANAN KELAS WORDISH
export const classModes = [
  {
    id: 'regular',
    name: 'Regular Class',
    subtitle: 'Interaktif dalam grup kelas',
    shortBadge: 'Maks. 6 Orang',
    icon: 'mdi-account-group',
    color: '#004EB2',
    bannerImage: '/mode-private.jpg',
    person: 'Grup (maks. 6 orang)',
    schedule: 'Mengikuti jadwal yang tersedia',
    location: 'Khusus di Wordish Center',
    desc: 'Belajar interaktif bersama teman sekelas dengan kuota terbatas agar pendampingan tutor tetap optimal.',
    highlights: [
      'Grup kecil kompak & kompetitif positif',
      'Kurikulum terstruktur per level',
      'Fasilitas ruang multimedia Wordish Center'
    ]
  },
  {
    id: 'semi-private',
    name: 'Semi-Private',
    subtitle: 'Mini grup fleksibel bersama rekan',
    shortBadge: '2–3 Orang',
    icon: 'mdi-account-multiple',
    color: '#0D9488',
    bannerImage: '/mode-home.jpg',
    person: 'Mini Grup (2–3 orang)',
    schedule: 'Fleksibel (menyesuaikan murid)',
    location: 'Wordish Center / Home Visit / Online',
    desc: 'Cocok untuk belajar bareng sahabat atau rekan kerja dengan ritme dan target yang disepakati bersama.',
    highlights: [
      'Belajar nyaman bareng partner pilihan',
      'Waktu sesi bebas disepakati bersama tutor',
      'Pilihan lokasi offline maupun virtual'
    ]
  },
  {
    id: 'private',
    name: 'Private Class',
    subtitle: '1-on-1 eksklusif fokus penuh',
    shortBadge: '1 on 1',
    icon: 'mdi-account-star',
    color: '#FF6E02',
    bannerImage: '/mode-private.jpg',
    person: '1 on 1 (Private)',
    schedule: 'Fleksibel (menyesuaikan murid)',
    location: 'Wordish Center / Home Visit / Online',
    desc: 'Pendampingan privat penuh untuk akselerasi belajar tercepat sesuai target karier atau sertifikasi.',
    highlights: [
      'Fokus 100% pada satu murid',
      'Materi & ritme disesuaikan kebutuhan',
      'Bebas atur sesi kapan saja dan di mana saja'
    ]
  },
  {
    id: 'online',
    name: 'Online Class',
    subtitle: 'Live virtual interaktif dari mana saja',
    shortBadge: 'Live Virtual',
    icon: 'mdi-laptop-account',
    color: '#7C3AED',
    bannerImage: '/mode-online.jpg',
    person: 'Private / Grup Online',
    schedule: 'Fleksibel & Sesi Terjadwal',
    location: 'Online Meet (Zoom / G-Meet)',
    desc: 'Solusi praktis belajar dari mana saja lewat sesi tatap maya langsung, hemat mobilitas tanpa mengurangi kualitas.',
    highlights: [
      'Akses dari mana saja tanpa kendala jarak',
      'Dapat rekaman sesi kelas & modul digital',
      'Tanya jawab langsung dua arah via video call'
    ]
  }
]

// KATALOG BUKU PELAJARAN (LINKED TO SHOPEE & TOKOPEDIA)
export const books = [
  {
    id: 'book-hsk',
    title: 'Buku Sakti HSK 1 - 4 & Panduan Menulis Hanzi',
    language: 'Bahasa Mandarin',
    author: 'Tim Akademik Wordish',
    pages: '280 Halaman (Full Color)',
    rating: 4.9,
    soldCount: '1.400+ Terjual',
    originalPrice: 180000,
    price: 125000,
    coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80',
    description: 'Buku panduan terlengkap memuat 1.200 kosakata HSK, tata bahasa esensial, contoh kalimat percakapan kerja, dan lembar latihan guratan Hanzi.',
    shopeeUrl: 'https://shopee.co.id/search?keyword=buku%20mandarin%20hsk%20wordish',
    tokopediaUrl: 'https://www.tokopedia.com/search?q=buku%20mandarin%20hsk%20wordish'
  },
  {
    id: 'book-eps-topik',
    title: 'Modul Resmi Bank Soal EPS-TOPIK Korea + Audio Listening MP3',
    language: 'Bahasa Korea',
    author: 'Master Tutor EPS-TOPIK Wordish',
    pages: '320 Halaman + QR Audio',
    rating: 4.95,
    soldCount: '2.800+ Terjual',
    originalPrice: 210000,
    price: 145000,
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80',
    description: 'Standar resmi HRD Korea & BP2MI. Memuat 2.000 butir soal Reading & Listening CBT lengkap dengan pembahasan bahasa Indonesia dan trik lolos ujian.',
    shopeeUrl: 'https://shopee.co.id/search?keyword=buku%20eps%20topik%20wordish',
    tokopediaUrl: 'https://www.tokopedia.com/search?q=buku%20eps%20topik%20wordish'
  },
  {
    id: 'book-english-speaking',
    title: 'Pocket Guide: Active English Speaking & Job Interview Mastery',
    language: 'Bahasa Inggris',
    author: 'Native & Certified TESOL Team',
    pages: '210 Halaman Ringkas',
    rating: 4.88,
    soldCount: '1.950+ Terjual',
    originalPrice: 150000,
    price: 99000,
    coverImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=400&q=80',
    description: 'Kumpulan frasa percakapan profesional, trik menjawab 50 pertanyaan wawancara kerja bahasa Inggris, dan panduan pelafalan intonasi alami.',
    shopeeUrl: 'https://shopee.co.id/search?keyword=buku%20english%20speaking%20wordish',
    tokopediaUrl: 'https://www.tokopedia.com/search?q=buku%20english%20speaking%20wordish'
  },
  {
    id: 'book-bundle-trio',
    title: 'Paket Bundle 3 Buku Panduan Bahasa Asing (Mandarin, Korea, Inggris)',
    language: 'Semua Bahasa (Best Value)',
    author: 'Wordish Publishing',
    pages: '3 Buku Lengkap + Bonus E-Book',
    rating: 5.0,
    soldCount: '850+ Paket',
    originalPrice: 540000,
    price: 320000,
    coverImage: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=400&q=80',
    description: 'Dapatkan ketiga buku pelajaran unggulan Wordish dalam 1 paket hemat. Bonus akses latihan audio listening & e-book modul selamanya.',
    shopeeUrl: 'https://shopee.co.id/search?keyword=bundle%20buku%20bahasa%20wordish',
    tokopediaUrl: 'https://www.tokopedia.com/search?q=bundle%20buku%20bahasa%20wordish'
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
