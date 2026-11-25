export const tryoutsList = [
  {
    id: 'to-snbt-2026-01',
    title: 'Simulasi Nasional UTBK-SNBT 2026 (Seri 12)',
    category: 'UTBK-SNBT',
    jenjang: 'sma',
    durationMinutes: 15, // Demo version 15 min, real 195 min
    totalQuestions: 10,
    passingScorePrediction: 685,
    participantsCount: 48920,
    deadline: 'Berakhir 30 November 2026',
    status: 'Buka',
    subtests: [
      { name: 'Penalaran Umum (PU)', count: 3 },
      { name: 'Pengetahuan & Pemahaman Umum (PPU)', count: 2 },
      { name: 'Pemahaman Bacaan & Menulis (PBM)', count: 2 },
      { name: 'Penalaran Matematika (PM)', count: 3 }
    ]
  },
  {
    id: 'to-us-sma-2026',
    title: 'Tryout Ujian Sekolah SMA Kelas 12 Kurikulum Merdeka',
    category: 'Ujian Sekolah',
    jenjang: 'sma',
    durationMinutes: 15,
    totalQuestions: 10,
    passingScorePrediction: 720,
    participantsCount: 23150,
    deadline: 'Berakhir 15 Desember 2026',
    status: 'Buka',
    subtests: [
      { name: 'Matematika Lanjut', count: 4 },
      { name: 'Literasi Bahasa', count: 3 },
      { name: 'Sains Terintegrasi', count: 3 }
    ]
  },
  {
    id: 'to-akm-smp-2026',
    title: 'Tryout Asesmen Nasional (AKM) SMP 2026',
    category: 'Asesmen Nasional',
    jenjang: 'smp',
    durationMinutes: 15,
    totalQuestions: 10,
    passingScorePrediction: 700,
    participantsCount: 18400,
    deadline: 'Tersedia Sepanjang Waktu',
    status: 'Buka',
    subtests: [
      { name: 'Literasi Membaca', count: 5 },
      { name: 'Numerasi & Logika', count: 5 }
    ]
  }
]

export const sampleExamQuestions = [
  {
    id: 1,
    subtest: 'Penalaran Umum',
    difficulty: 'Sedang',
    question: 'Semua siswa yang mengikuti bimbingan belajar Ruangguru mendapat modul belajar cetak. Sebagian siswa yang mendapat modul belajar cetak berhasil meraih nilai UTBK di atas 700.\n\nSimpulan yang PALING TEPAT berdasarkan pernyataan di atas adalah...',
    options: [
      { key: 'A', text: 'Semua siswa yang mengikuti bimbingan Ruangguru meraih nilai UTBK di atas 700.' },
      { key: 'B', text: 'Sebagian siswa yang mengikuti bimbingan Ruangguru berhasil meraih nilai UTBK di atas 700.' },
      { key: 'C', text: 'Siswa yang tidak mendapat modul cetak pasti tidak meraih nilai UTBK di atas 700.' },
      { key: 'D', text: 'Semua siswa yang meraih nilai di atas 700 adalah siswa bimbingan Ruangguru.' },
      { key: 'E', text: 'Tidak ada siswa bimbingan Ruangguru yang tidak meraih nilai UTBK di atas 700.' }
    ],
    correctAnswer: 'B',
    explanation: 'Premis 1: Semua siswa Ruangguru (A) -> mendapat modul (B).\nPremis 2: Sebagian siswa yang mendapat modul (B) -> nilai UTBK > 700 (C).\nBerdasarkan silogisme kategorik partikular, simpulan yang valid adalah: Sebagian A adalah C (Sebagian siswa bimbingan Ruangguru berhasil meraih nilai UTBK di atas 700).'
  },
  {
    id: 2,
    subtest: 'Penalaran Matematika',
    difficulty: 'HOTS',
    question: 'Sebuah tangki air berbentuk silinder memiliki jari-jari 70 cm dan tinggi 1,5 meter. Tangki tersebut dialiri air dengan debit 22 liter per menit melalui keran pengisi. Jika tangki awalnya kosong, berapa menit waktu yang diperlukan hingga tangki terisi 80%? (Gunakan π = 22/7)',
    options: [
      { key: 'A', text: '75 menit' },
      { key: 'B', text: '84 menit' },
      { key: 'C', text: '90 menit' },
      { key: 'D', text: '105 menit' },
      { key: 'E', text: '120 menit' }
    ],
    correctAnswer: 'B',
    explanation: 'Volume total tabung = π · r² · t\nr = 7 dm (70 cm), t = 15 dm (1,5 m).\nVolume = (22/7) × 7 × 7 × 15 = 22 × 7 × 15 = 2.310 dm³ = 2.310 Liter.\nVolume 80% = 0,8 × 2.310 = 1.848 Liter.\nWaktu t = Volume / Debit = 1.848 / 22 = 84 menit.'
  },
  {
    id: 3,
    subtest: 'Penalaran Kognitif',
    difficulty: 'Sedang',
    question: 'Perhatikan pola bilangan berikut:\n3, 6, 11, 18, 27, X, Y\n\nNilai X dan Y yang tepat untuk melengkapi deret tersebut adalah...',
    options: [
      { key: 'A', text: '36 dan 47' },
      { key: 'B', text: '38 dan 51' },
      { key: 'C', text: '39 dan 52' },
      { key: 'D', text: '38 dan 49' },
      { key: 'E', text: '40 dan 53' }
    ],
    correctAnswer: 'B',
    explanation: 'Perhatikan selisih antar suku:\n6 - 3 = +3\n11 - 6 = +5\n18 - 11 = +7\n27 - 18 = +9\nPola selisih bertambah 2 (bilangan ganjil berurutan).\nSuku berikutnya:\nX = 27 + 11 = 38\nY = 38 + 13 = 51.\nJadi X = 38 dan Y = 51.'
  },
  {
    id: 4,
    subtest: 'Pemahaman Bacaan & Menulis',
    difficulty: 'Mudah',
    question: 'Kalimat berikut yang merupakan kalimat efektif dan memenuhi kaidah PUEBI adalah...',
    options: [
      { key: 'A', text: 'Bagi para siswa-siswi yang ingin mendaftar tryout harap berkumpul di aula.' },
      { key: 'B', text: 'Pendidikan vokasi bertujuan meningkatkan kompetensi generasi muda agar siap menghadapi tantangan industri.' },
      { key: 'C', text: 'Meskipun lelah belajar seharian, namun ia tetap semangat mengerjakan latihan soal matematika.' },
      { key: 'D', text: 'Dalam penelitian ini membuktikan bahwa metode pembelajaran adaptif mampu menaikkan nilai siswa.' },
      { key: 'E', text: 'Buku itu saya sudah baca tuntas kemarin malam di perpustakaan.' }
    ],
    correctAnswer: 'B',
    explanation: 'Pilihan B adalah kalimat efektif dengan struktur Subjek, Predikat, dan Objek yang jelas serta tidak berlebihan.\nPilihan A salah karena pleonasme (para siswa-siswi) dan kerancuan preposisi bagi di awal subjek.\nPilihan C salah karena ada konjungsi ganda meskipun... namun.\nPilihan D salah karena kehilangan subjek (dimulai dengan dalam penelitian ini membuktikan).\nPilihan E salah bentuk pasif persona (seharusnya sudah saya baca).'
  },
  {
    id: 5,
    subtest: 'Penalaran Matematika',
    difficulty: 'Sedang',
    question: 'Harga 3 buku catatan dan 2 pulpen adalah Rp 34.000,00. Di toko yang sama, harga 2 buku catatan dan 5 pulpen adalah Rp 41.000,00. Jika Rian membeli 4 buku catatan dan 3 pulpen dengan selembar uang Rp 100.000,00, uang kembalian yang diterima Rian adalah...',
    options: [
      { key: 'A', text: 'Rp 49.000,00' },
      { key: 'B', text: 'Rp 51.000,00' },
      { key: 'C', text: 'Rp 53.000,00' },
      { key: 'D', text: 'Rp 55.000,00' },
      { key: 'E', text: 'Rp 57.000,00' }
    ],
    correctAnswer: 'A',
    explanation: 'Misalkan buku = b, pulpen = p.\n3b + 2p = 34.000  (x2) => 6b + 4p = 68.000\n2b + 5p = 41.000  (x3) => 6b + 15p = 123.000\nSelisih: 11p = 55.000 => p = 5.000.\n3b + 2(5.000) = 34.000 => 3b = 24.000 => b = 8.000.\nBelanjaan Rian: 4(8.000) + 3(5.000) = 32.000 + 15.000 = Rp 47.000 (wait: wait, 4*8000 = 32000, 3*5000=15000 -> total 51.000! Kembalian = 100.000 - 51.000 = 49.000).'
  },
  {
    id: 6,
    subtest: 'Pengetahuan & Pemahaman Umum',
    difficulty: 'Sedang',
    question: 'Kata "TRANSFORMASI" dalam konteks "Transformasi digital di sektor edukasi memicu peningkatan literasi teknologi peserta didik" bermakna...',
    options: [
      { key: 'A', text: 'Peralihan kekuasaan secara cepat' },
      { key: 'B', text: 'Perubahan bentuk, sifat, atau fungsi secara mendasar dan terarah' },
      { key: 'C', text: 'Penggantian seluruh sarana prasarana fisik' },
      { key: 'D', text: 'Penyederhanaan materi kurikulum pembelajaran' },
      { key: 'E', text: 'Penyesuaian jadwal kegiatan belajar mengajar' }
    ],
    correctAnswer: 'B',
    explanation: 'Dalam KBBI, transformasi adalah perubahan rupa (bentuk, sifat, fungsi, dsb). Dalam konteks teknologi dan edukasi, transformasi merujuk pada perubahan mendasar dalam tata cara belajar dan interaksi pedagogis menggunakan inovasi digital.'
  },
  {
    id: 7,
    subtest: 'Penalaran Matematika',
    difficulty: 'HOTS',
    question: 'Rasio luas permukaan dua bola adalah 9 : 25. Jika volume bola yang lebih kecil adalah 108π cm³, berapakah volume bola yang lebih besar?',
    options: [
      { key: 'A', text: '300π cm³' },
      { key: 'B', text: '425π cm³' },
      { key: 'C', text: '500π cm³' },
      { key: 'D', text: '625π cm³' },
      { key: 'E', text: '750π cm³' }
    ],
    correctAnswer: 'C',
    explanation: 'Rasio luas permukaan A1 : A2 = (r1/r2)² = 9/25 => r1/r2 = 3/5.\nRasio volume V1 : V2 = (r1/r2)³ = (3/5)³ = 27/125.\nDiketahui V1 = 108π cm³.\nV2 = (125 / 27) × 108π = 125 × 4π = 500π cm³.'
  },
  {
    id: 8,
    subtest: 'Literasi Bahasa Inggris',
    difficulty: 'Sedang',
    question: 'Read the excerpt:\n"Adaptive learning platforms utilize algorithms to assess a learner\'s current skill level, pinpointing knowledge gaps and adjusting lesson difficulty in real time."\n\nWhat is the primary benefit of adaptive learning according to the text?',
    options: [
      { key: 'A', text: 'It replaces human teachers entirely in modern classrooms.' },
      { key: 'B', text: 'It standardizes curricula so every student learns at the exact same pace.' },
      { key: 'C', text: 'It dynamically personalizes the learning experience based on individual student gaps.' },
      { key: 'D', text: 'It reduces the cost of school textbooks to zero.' },
      { key: 'E', text: 'It automatically guarantees high test scores without studying.' }
    ],
    correctAnswer: 'C',
    explanation: 'The passage highlights that the platform pinpoints gaps and adjusts lesson difficulty in real time, which means dynamically personalizing the learning experience.'
  },
  {
    id: 9,
    subtest: 'Penalaran Kognitif',
    difficulty: 'Mudah',
    question: 'Jika "GURU : SEKOLAH", maka pasangan kata yang memiliki hubungan analogi paling setara adalah...',
    options: [
      { key: 'A', text: 'DOKTER : RUMAH SAKIT' },
      { key: 'B', text: 'PASIEN : OBAT' },
      { key: 'C', text: 'PETANI : PADI' },
      { key: 'D', text: 'SUPIR : KENDARAAN' },
      { key: 'E', text: 'KOKI : RESTORAN MASAKAN' }
    ],
    correctAnswer: 'A',
    explanation: 'Hubungan analogi: [Profesi] bertugas di tempat kerja [Institusi/Tempat Pelayanan]. Guru bertugas di Sekolah, sebagaimana Dokter bertugas di Rumah Sakit.'
  },
  {
    id: 10,
    subtest: 'Penalaran Matematika',
    difficulty: 'HOTS',
    question: 'Nilai rata-rata ujian matematika dari 39 siswa adalah 72. Jika nilai seorang siswa baru yang mengikuti ujian susulan digabungkan, nilai rata-ratanya menjadi 72,5. Nilai yang diperoleh siswa baru tersebut adalah...',
    options: [
      { key: 'A', text: '86' },
      { key: 'B', text: '89' },
      { key: 'C', text: '92' },
      { key: 'D', text: '95' },
      { key: 'E', text: '98' }
    ],
    correctAnswer: 'C',
    explanation: 'Total nilai 39 siswa = 39 × 72 = 2.808.\nSetelah 1 siswa baru bergabung, total siswa = 40 dan rata-rata = 72,5.\nTotal nilai 40 siswa = 40 × 72,5 = 2.900.\nNilai siswa baru = 2.900 - 2.808 = 92.'
  }
]
