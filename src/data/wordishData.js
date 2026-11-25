// Data Program Pelatihan Bahasa Asing LPK Wordish
export const languages = [
  {
    id: 'mandarin',
    name: 'Bahasa Mandarin',
    flag: '🇨🇳',
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
    flag: '🇰🇷',
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
    flag: '🇬🇧',
    icon: 'mdi-school',
    color: '#00A5CF',
    accentBg: '#F0FDFA',
    tagline: 'Fluency Speaking Percakapan Aktif & Persiapan Tes IELTS/TOEFL',
    targetAudience: 'Karyawan Perusahaan Asing, Pencari Kerja, Persiapan Studi Luar Negeri',
    standard: 'Kurikulum Internasional CEFR A2 - C1',
    levelsCount: '3 Level Tersedia'
  }
]

export const programs = [
  // --- BAHASA MANDARIN ---
  {
    id: 'mandarin-basic',
    languageId: 'mandarin',
    title: 'Mandarin Dasar & Pinyin (HSK 1 - 2)',
    level: 'Pemula (Beginner)',
    duration: '2 Bulan (24 Sesi @90 Menit)',
    mode: 'Hybrid (Tatap Muka & Online Zoom)',
    originalPrice: 1850000,
    price: 950000,
    discountPercent: 48,
    badge: 'Paling Populer',
    badgeColor: 'accent',
    summary: 'Cocok bagi yang memulai dari nol. Belajar sistem Pinyin, nada suara, 300 kosakata penting, dan percakapan harian praktis.',
    features: [
      'Penguasaan sistem Pinyin & 4 nada suara akurat',
      'Dasar guratan & radikal karakter Hanzi umum',
      'Kosakata harian: perkenalan diri, angka, belanja, arah',
      'Modul belajar cetak & audio listening dari Native',
      'Sertifikat kelulusan LPK resmi untuk portofolio'
    ],
    nextBatch: 'Batch 14: Mulai 10 Desember 2026'
  },
  {
    id: 'mandarin-kerja',
    languageId: 'mandarin',
    title: 'Mandarin Intensif Kerja Pabrik & Kantor Taiwan/China',
    level: 'Lanjutan & Siap Kerja',
    duration: '3 Bulan (36 Sesi @120 Menit)',
    mode: 'Kelas Tatap Muka LPK',
    originalPrice: 3200000,
    price: 1750000,
    discountPercent: 45,
    badge: 'Program Siap Kerja',
    badgeColor: 'success',
    summary: 'Dirancang khusus untuk calon pekerja industri dan perkantoran. Fokus kosakata pabrik, instruksi kerja, dan simulasi wawancara.',
    features: [
      'Kosakata teknis industri, operasional kerja & keselamatan',
      'Simulasi interview kerja langsung dengan pengajar',
      'Target kelulusan sertifikasi HSK Level 3',
      'Bimbingan penulisan CV & pengurusan berkas kerja luar negeri',
      'Koneksi info lowongan kerja dari mitra LPK'
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
    mode: 'Tatap Muka di Training Center LPK',
    originalPrice: 3500000,
    price: 1850000,
    discountPercent: 47,
    badge: 'Garansi Bimbingan',
    badgeColor: 'error',
    summary: 'Program unggulan persiapan seleksi kerja resmi pemerintah Korea Selatan (G to G BP2MI). Kupas tuntas soal membaca (Reading) & mendengar (Listening).',
    features: [
      'Penguasaan Hangeul (huruf Korea) cepat dalam 3 hari',
      'Bank soal resmi EPS-TOPIK format CBT (Computer Based Test)',
      'Tryout berkala dengan sistem komputer mirip ujian asli',
      'Latihan wawancara & tes keterampilan fisik (Skill Test)',
      'Pendampingan proses pendaftaran ujian online'
    ],
    nextBatch: 'Batch 21: Mulai 8 Desember 2026'
  },
  {
    id: 'korean-speaking',
    languageId: 'korean',
    title: 'Korean General & Percakapan K-Talk (TOPIK I)',
    level: 'Pemula - Menengah',
    duration: '2 Bulan (20 Sesi @90 Menit)',
    mode: 'Online Live Interaktif',
    originalPrice: 1600000,
    price: 850000,
    discountPercent: 46,
    badge: 'Kelas Fleksibel',
    badgeColor: 'primary',
    summary: 'Belajar bahasa Korea seru dan terstruktur dari tata bahasa dasar, percakapan sehari-hari, hingga ungkapan populer drama dan budaya.',
    features: [
      'Membaca dan menulis Hangeul dengan lancar',
      'Tata bahasa dasar (partikel, bentuk formal & informal)',
      'Percakapan topik harian: hobi, makanan, bepergian di Korea',
      'E-book modul interaktif & rekaman kelas seumur hidup',
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
    mode: 'Hybrid (Online & Offline)',
    originalPrice: 1750000,
    price: 890000,
    discountPercent: 49,
    badge: 'Percakapan Percaya Diri',
    badgeColor: 'info',
    summary: 'Atasi rasa takut dan malu bicara bahasa Inggris! Praktik speaking 80% di setiap pertemuan dengan topik relevan karier & percakapan sosial.',
    features: [
      'Praktek bicara langsung (Full Speaking immersion)',
      'Koreksi pelafalan (Pronunciation) & intonasi alami',
      'Keterampilan presentasi diri & interview kerja bahasa Inggris',
      'Kelas kecil maksimal 8 peserta agar semua aktif bicara',
      'Sertifikat kemampuan berbicara resmi LPK'
    ],
    nextBatch: 'Batch 30: Mulai 5 Desember 2026'
  },
  {
    id: 'english-prep',
    languageId: 'english',
    title: 'Intensive IELTS & TOEFL Preparation for Career',
    level: 'Menengah - Lanjutan',
    duration: '2.5 Bulan (30 Sesi @100 Menit)',
    mode: 'Online Live Zoom Intensive',
    originalPrice: 2800000,
    price: 1450000,
    discountPercent: 48,
    badge: 'Target Skor Tinggi',
    badgeColor: 'accent',
    summary: 'Bedah strategi kilat menjawab soal Listening, Reading, Writing, dan Speaking untuk meraih skor IELTS 6.5+ atau TOEFL ITP 550+.',
    features: [
      'Trik cepat eliminasi opsi jebakan di soal ujian',
      'Feedback personal penilaian Writing task 1 & 2',
      'Simulasi mock test Speaking 1-on-1 dengan pengajar',
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

// Keunggulan LPK Wordish
export const advantages = [
  {
    icon: 'mdi-certificate',
    title: 'LPK Resmi Berizin Kemnaker',
    desc: 'Lembaga Pelatihan Kerja terdaftar resmi dengan kurikulum berbasis kompetensi kerja terstandar.',
    color: '#00A5CF'
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
    color: '#FF9E00'
  },
  {
    icon: 'mdi-laptop-account',
    title: 'Metode Hybrid Fleksibel',
    desc: 'Tersedia pilihan kelas tatap muka di training center kami maupun kelas online interaktif via Zoom.',
    color: '#10B981'
  }
]

// Testimoni Siswa LPK Wordish
export const testimonials = [
  {
    id: 1,
    name: 'Bagus Setyawan',
    program: 'Bahasa Korea (EPS-TOPIK)',
    outcome: 'Lolos Kerja Manufaktur di Hwaseong, Korea Selatan',
    quote: 'Belajar dari nol huruf Hangeul di LPK Wordish sampai bisa lulus ujian EPS-TOPIK dengan nilai 95/100. Simulasi ujian komputernya sangat mirip aslinya!',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80'
  },
  {
    id: 2,
    name: 'Siti Nurhaliza',
    program: 'Bahasa Mandarin Kerja',
    outcome: 'Bekerja di Perusahaan Logistik Taiwan',
    quote: 'Fokus kosakata kerja pabrik dan latihan interviewnya sangat membantu saat seleksi user. Pengajarnya sabar dan mengajarkan pelafalan nada suara dengan jelas.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
  },
  {
    id: 3,
    name: 'Dimas Wicaksono',
    program: 'English Speaking & IELTS Prep',
    outcome: 'Meraih Skor IELTS 7.0 & Diterima di Perusahaan Asing',
    quote: 'Dulu saya sangat kaku kalau diajak ngobrol bahasa Inggris. Di Wordish suasananya santai tapi terarah, dalam 2 bulan kepercayaan diri saya meningkat drastis.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
  }
]

// Jadwal Batch Terdekat
export const batchSchedules = [
  {
    id: 1,
    language: 'Bahasa Korea (EPS-TOPIK)',
    days: 'Senin - Jumat (Intensif)',
    time: '09.00 - 12.00 WIB',
    mode: 'Tatap Muka di Training Center',
    startDate: '8 Desember 2026',
    quota: 'Sisa 4 Kursi'
  },
  {
    id: 2,
    language: 'Bahasa Mandarin Dasar',
    days: 'Selasa & Kamis (Kelas Karyawan)',
    time: '19.00 - 20.30 WIB',
    mode: 'Online Live Zoom',
    startDate: '10 Desember 2026',
    quota: 'Sisa 6 Kursi'
  },
  {
    id: 3,
    language: 'Bahasa Inggris Active Speaking',
    days: 'Sabtu & Minggu (Weekend Class)',
    time: '10.00 - 11.30 WIB',
    mode: 'Hybrid (Online / Offline)',
    startDate: '13 Desember 2026',
    quota: 'Sisa 5 Kursi'
  }
]

// FAQ Sederhana untuk LPK
export const faqs = [
  {
    q: 'Apakah bisa belajar dari nol jika sama sekali belum punya dasar?',
    a: 'Bisa banget! Semua program kami memiliki kelas level dasar (Level 1 / Pemula) yang mengajarkan dari abjad/karakter dasar (Pinyin/Hanzi untuk Mandarin, Hangeul untuk Korea, dan grammar dasar untuk Inggris).'
  },
  {
    q: 'Berapa lama durasi pelatihan hingga siap kerja atau ujian?',
    a: 'Rata-rata program berlangsung antara 2 hingga 3 bulan intensif dengan 20 sampai 36 sesi pertemuan. Jadwal tersedia pagi, malam (kelas karyawan), dan akhir pekan.'
  },
  {
    q: 'Apakah LPK Wordish menyalurkan kerja ke luar negeri?',
    a: 'LPK Wordish adalah lembaga pelatihan resmi yang memberikan bekal kompetensi bahasa, sertifikat pelatihan, simulasi ujian (seperti EPS-TOPIK), pendampingan pendaftaran ujian negara, serta memberikan informasi lowongan dari mitra resmi.'
  },
  {
    q: 'Apakah ada sertifikat resmi setelah menyelesaikan pelatihan?',
    a: 'Ya, seluruh peserta yang menyelesaikan sesi pelatihan dan lulus evaluasi akhir berhak mendapatkan Sertifikat Pelatihan Resmi dari LPK Wordish yang diakui dan dapat dilampirkan pada portofolio lamaran kerja.'
  }
]
