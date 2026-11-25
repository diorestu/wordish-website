export const sampleQuestions = [
  {
    id: 'q-mat-01',
    subject: 'Matematika',
    grade: 'Kelas 12 SMA',
    topic: 'Turunan Fungsi Aljabar',
    questionText: 'Tentukan turunan pertama dari fungsi f(x) = (3x² - 5)(2x + 4) pada x = 2.',
    formulaHighlight: 'f\'(x) = u\'v + uv\' (Aturan Perkalian Turunan)',
    steps: [
      {
        stepNum: 1,
        title: 'Misalkan fungsi pembentuk u(x) dan v(x)',
        detail: 'Misalkan u = 3x² - 5, sehingga u\' = 6x.\nMisalkan v = 2x + 4, sehingga v\' = 2.'
      },
      {
        stepNum: 2,
        title: 'Terapkan rumus aturan hasil kali turunan',
        detail: 'f\'(x) = u\'v + uv\'\nf\'(x) = (6x)(2x + 4) + (3x² - 5)(2)\nf\'(x) = 12x² + 24x + 6x² - 10\nf\'(x) = 18x² + 24x - 10'
      },
      {
        stepNum: 3,
        title: 'Substitusikan nilai x = 2',
        detail: 'f\'(2) = 18(2)² + 24(2) - 10\nf\'(2) = 18(4) + 48 - 10\nf\'(2) = 72 + 48 - 10 = 110'
      }
    ],
    finalAnswer: 'Nilai dari f\'(2) adalah 110.',
    proTip: 'Tips Kilat: Kamu juga bisa mengalikan fungsinya terlebih dahulu menjadi f(x) = 6x³ + 12x² - 10x - 20, lalu turunkan langsung f\'(x) = 18x² + 24x - 10.'
  },
  {
    id: 'q-fis-02',
    subject: 'Fisika',
    grade: 'Kelas 11 SMA',
    topic: 'Dinamika Gerak & Hukum Newton',
    questionText: 'Sebuah balok bermassa 5 kg ditarik dengan gaya F = 30 N membentuk sudut 37° terhadap bidang datar licin. Berapakah percepatan yang dialami balok? (cos 37° = 0.8, sin 37° = 0.6, g = 10 m/s²)',
    formulaHighlight: 'ΣFx = m · a  =>  F · cos θ = m · a',
    steps: [
      {
        stepNum: 1,
        title: 'Uraikan vektor gaya terhadap sumbu horizontal (Fx)',
        detail: 'Karena lantai licin (tanpa gesekan), komponen gaya penggerak horizontal adalah Fx = F · cos 37°.\nFx = 30 N × 0.8 = 24 N.'
      },
      {
        stepNum: 2,
        title: 'Gunakan Hukum II Newton',
        detail: 'ΣFx = m · a\n24 = 5 · a\na = 24 / 5 = 4.8 m/s².'
      }
    ],
    finalAnswer: 'Percepatan balok adalah 4.8 m/s² searah gaya horizontal.',
    proTip: 'Ingat! Karena lantai licin, komponen gaya vertikal (Fy dan gaya normal N) tidak memengaruhi gerak gesek horizontal balok.'
  },
  {
    id: 'q-kim-03',
    subject: 'Kimia',
    grade: 'Kelas 10 SMA',
    topic: 'Stoikiometri & Volume Gas',
    questionText: 'Berapakah volume dari 8,8 gram gas CO₂ yang diukur pada keadaan standar (STP)? (Ar C = 12, O = 16)',
    formulaHighlight: 'Mol (n) = massa / Mr  |  V (STP) = n × 22,4 Liter',
    steps: [
      {
        stepNum: 1,
        title: 'Hitung Massa Relatif Molekul (Mr) CO₂',
        detail: 'Mr CO₂ = (1 × Ar C) + (2 × Ar O)\nMr CO₂ = 12 + (2 × 16) = 12 + 32 = 44 g/mol.'
      },
      {
        stepNum: 2,
        title: 'Hitung jumlah mol gas CO₂',
        detail: 'n = massa / Mr = 8,8 g / 44 g/mol = 0,2 mol.'
      },
      {
        stepNum: 3,
        title: 'Hitung volume pada kondisi STP (0°C, 1 atm)',
        detail: 'V = n × 22,4 L = 0,2 mol × 22,4 L/mol = 4,48 Liter.'
      }
    ],
    finalAnswer: 'Volume gas CO₂ pada kondisi STP adalah 4,48 Liter.',
    proTip: 'Volume 22,4 L hanya berlaku pada STP (Standar Suhu dan Tekanan). Jika pada kondisi ruang (RTP 25°C), gunakan faktor pengali 24 L.'
  },
  {
    id: 'q-bio-04',
    subject: 'Biologi',
    grade: 'Kelas 12 SMA',
    topic: 'Genetika Mendel - Persilangan Dihibrid',
    questionText: 'Kacang ercis berbiji bulat kuning (BbKk) disilangkan sesamanya. Berapakah persentase keturunan yang memiliki fenotipe berbiji bulat hijau?',
    formulaHighlight: 'Rasio Fenotipe Dihibrid Heterozigot: 9 : 3 : 3 : 1',
    steps: [
      {
        stepNum: 1,
        title: 'Pahami pasangan alel genotipe',
        detail: 'B (bulat) dominan terhadap b (keriput)\nK (kuning) dominan terhadap k (hijau).'
      },
      {
        stepNum: 2,
        title: 'Tinjau rasio hukum Mendel II untuk BbKk × BbKk',
        detail: 'Kombinasi fenotipe:\n- Bulat Kuning (B_K_): 9/16\n- Bulat Hijau (B_kk): 3/16\n- Keriput Kuning (bbK_): 3/16\n- Keriput Hijau (bbkk): 1/16'
      },
      {
        stepNum: 3,
        title: 'Hitung persentase untuk Bulat Hijau',
        detail: 'Persentase = (3 / 16) × 100% = 18,75%.'
      }
    ],
    finalAnswer: 'Peluang keturunan berbiji bulat hijau adalah 3/16 atau 18,75%.',
    proTip: 'Gunakan hukum peluang perkalian independen: Peluang bulat (B_) = 3/4, peluang hijau (kk) = 1/4. Maka 3/4 × 1/4 = 3/16.'
  }
]

export const subjectCategories = [
  { name: 'Matematika', icon: 'mdi-calculator-variant-outline', count: '120k+ Soal', color: '#00A5CF' },
  { name: 'Fisika', icon: 'mdi-atom-variant', count: '85k+ Soal', color: '#0077B6' },
  { name: 'Kimia', icon: 'mdi-flask-outline', count: '65k+ Soal', color: '#0284C7' },
  { name: 'Biologi', icon: 'mdi-dna', count: '78k+ Soal', color: '#10B981' },
  { name: 'B. Indonesia', icon: 'mdi-book-open-page-variant', count: '90k+ Soal', color: '#FF9E00' },
  { name: 'B. Inggris', icon: 'mdi-earth', count: '110k+ Soal', color: '#E63946' },
  { name: 'Ekonomi / Akuntansi', icon: 'mdi-chart-line', count: '45k+ Soal', color: '#8B5CF6' }
]
