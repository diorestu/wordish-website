<template>
  <div class="bg-grey-lighten-5 min-vh-100">
    <!-- HERO HEADER TENTANG KAMI -->
    <section class="py-12 py-md-16 bg-white border-b">
      <v-container class="max-width-xl px-4 px-sm-6">
        <v-breadcrumbs
          :items="[
            { title: 'Beranda', disabled: false, to: '/' },
            { title: 'Tentang Kami', disabled: true }
          ]"
          class="pa-0 mb-4 text-caption"
        ></v-breadcrumbs>

        <v-row align="center" justify="space-between" class="gy-8">
          <v-col cols="12" md="7">
            <v-chip color="primary" variant="tonal" size="small" prepend-icon="mdi-shield-check" class="font-weight-bold mb-3">
              Profil Resmi Lembaga Pelatihan Wordish
            </v-chip>
            <h1 class="text-h4 text-sm-h3 font-weight-bold text-secondary mb-4" style="line-height: 1.25;">
              Membuka Pintu Dunia Lewat Bahasa yang Relevan &amp; Menyenangkan
            </h1>
            <p class="text-body-1 text-grey-darken-1 mb-4" style="line-height: 1.8;">
              <strong>Wordish</strong> adalah lembaga pelatihan bahasa asing terpercaya yang mengkhususkan diri pada <strong>Bahasa Mandarin</strong>, <strong>Bahasa Korea</strong>, dan <strong>Bahasa Inggris</strong>. Kami berorientasi pada pencapaian nyata: kelulusan sertifikasi internasional (HSK, EPS-TOPIK, IELTS), kesiapan kerja di luar negeri &amp; perusahaan multinasional, serta kemampuan komunikasi aktif.
            </p>
            <div class="d-flex flex-wrap align-center ga-3">
              <v-btn
                to="/products"
                color="primary"
                variant="flat"
                size="large"
                class="text-none font-weight-bold px-6 text-white rounded-xl shadow-sm"
                prepend-icon="mdi-school-outline"
              >
                Pilih Program Kelas
              </v-btn>
              <v-btn
                href="https://wa.me/6287864734308?text=Halo%20Wordish,%20saya%20ingin%20konsultasi%20kelas"
                target="_blank"
                variant="outlined"
                color="success"
                size="large"
                class="text-none font-weight-bold px-6 rounded-xl"
                prepend-icon="mdi-whatsapp"
              >
                Konsultasi Langsung
              </v-btn>
            </div>
          </v-col>

          <v-col cols="12" md="5">
            <v-card class="pa-6 rounded-3xl border bg-grey-lighten-5 shadow-sm">
              <div class="d-flex align-center ga-3 mb-4">
                <v-avatar color="primary" size="44" class="text-white">
                  <v-icon icon="mdi-office-building-marker-outline" size="24"></v-icon>
                </v-avatar>
                <div>
                  <div class="text-subtitle-1 font-weight-bold text-secondary">Identitas Lembaga</div>
                  <div class="text-caption text-grey">Legalitas &amp; Training Center Resmi</div>
                </div>
              </div>

              <v-divider class="mb-4"></v-divider>

              <div class="company-info-list">
                <div class="d-flex align-start ga-3 mb-3">
                  <v-icon icon="mdi-certificate-outline" color="primary" size="20" class="mt-1"></v-icon>
                  <div>
                    <div class="text-caption text-grey">Legalitas Lembaga</div>
                    <div class="text-body-2 font-weight-bold text-secondary">Lembaga Pelatihan Bahasa Asing Terakreditasi</div>
                  </div>
                </div>

                <div class="d-flex align-start ga-3 mb-3">
                  <v-icon icon="mdi-map-marker-radius-outline" color="primary" size="20" class="mt-1"></v-icon>
                  <div>
                    <div class="text-caption text-grey">Training Center Utama</div>
                    <div class="text-body-2 font-weight-bold text-secondary">Rukan EduPark Blok B-12, Jakarta Barat, DKI Jakarta</div>
                  </div>
                </div>

                <div class="d-flex align-start ga-3 mb-3">
                  <v-icon icon="mdi-clock-time-four-outline" color="primary" size="20" class="mt-1"></v-icon>
                  <div>
                    <div class="text-caption text-grey">Jam Operasional &amp; Belajar</div>
                    <div class="text-body-2 font-weight-bold text-secondary">Senin – Sabtu: 08.00 – 21.00 WIB</div>
                  </div>
                </div>

                <div class="d-flex align-start ga-3">
                  <v-icon icon="mdi-account-group-outline" color="primary" size="20" class="mt-1"></v-icon>
                  <div>
                    <div class="text-caption text-grey">Metode Pembelajaran</div>
                    <div class="text-body-2 font-weight-bold text-secondary">Regular, Semi-Private, Private (1-on-1), Online</div>
                  </div>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- STATISTIK KAMI -->
    <section class="py-8 bg-white border-b">
      <v-container class="max-width-xl px-4 px-sm-6">
        <v-row class="text-center">
          <v-col cols="6" md="3" v-for="stat in keyStats" :key="stat.label">
            <div class="text-h3 font-weight-black text-primary mb-1">{{ stat.value }}</div>
            <div class="text-caption text-md-body-2 font-weight-medium text-grey-darken-1">{{ stat.label }}</div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- VISI & MISI DETAIL PERUSAHAAN -->
    <section class="py-12 py-md-16 bg-white border-b">
      <v-container class="max-width-xl px-4 px-sm-6">
        <div class="text-center mb-10">
          <div class="text-overline font-weight-bold text-primary mb-1" style="letter-spacing: 2px;">Visi &amp; Komitmen</div>
          <h2 class="text-h4 font-weight-bold text-secondary mb-3">Fondasi Pembelajaran di Wordish</h2>
          <p class="text-body-1 text-grey-darken-1 max-width-md mx-auto">
            Kami menggabungkan kurikulum standar internasional dengan pendekatan interaktif yang adaptif bagi setiap tingkatan usia.
          </p>
        </div>

        <v-row>
          <v-col cols="12" md="4" v-for="pillar in companyPillars" :key="pillar.title">
            <v-card class="pa-6 rounded-3xl border bg-grey-lighten-5 h-100 shadow-sm d-flex flex-column">
              <v-avatar :color="pillar.avatarColor" size="48" class="mb-4">
                <v-icon :icon="pillar.icon" :color="pillar.iconColor" size="26"></v-icon>
              </v-avatar>
              <h3 class="text-h6 font-weight-bold text-secondary mb-2">{{ pillar.title }}</h3>
              <p class="text-body-2 text-grey-darken-1" style="line-height: 1.7;">{{ pillar.desc }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- LIST TIM PENGAJAR / TUTOR EXPERT -->
    <section class="py-12 py-md-16 bg-grey-lighten-5 border-b">
      <v-container class="max-width-xl px-4 px-sm-6">
        <div class="text-center mb-10 mb-md-14">
          <v-chip color="accent" variant="tonal" size="small" class="font-weight-bold mb-2">Tim Tutor Berpengalaman</v-chip>
          <h2 class="text-h4 text-sm-h3 font-weight-bold text-secondary mb-3">
            Belajar Bersama Pengajar Bersertifikat Resmi
          </h2>
          <p class="text-body-1 text-grey-darken-1 max-width-md mx-auto">
            Semua tutor Wordish telah lulus uji kompetensi bahasa tingkat mahir (HSK 5-6, TOPIK level 5-6, dan skor IELTS 8.0+) serta memiliki pengalaman mengajar aktif.
          </p>
        </div>

        <v-row>
          <v-col cols="12" sm="6" lg="3" v-for="teacher in teachers" :key="teacher.name">
            <v-card class="rounded-3xl border bg-white h-100 overflow-hidden shadow-sm d-flex flex-column teacher-card">
              <div class="position-relative overflow-hidden" style="height: 220px;">
                <v-img
                  :src="teacher.photo"
                  :alt="teacher.name"
                  cover
                  height="100%"
                  class="teacher-img"
                >
                  <template #placeholder>
                    <div class="d-flex align-center justify-center fill-height bg-grey-lighten-3">
                      <v-progress-circular indeterminate color="primary"></v-progress-circular>
                    </div>
                  </template>
                </v-img>
                <div class="position-absolute top-0 right-0 ma-3">
                  <v-chip size="small" :color="teacher.badgeColor" variant="flat" class="font-weight-bold text-white shadow-sm">
                    {{ teacher.language }}
                  </v-chip>
                </div>
              </div>

              <div class="pa-5 d-flex flex-column flex-grow-1">
                <div class="text-subtitle-1 font-weight-bold text-secondary mb-1">{{ teacher.name }}</div>
                <div class="text-caption font-weight-bold text-primary mb-2">{{ teacher.title }}</div>
                <div class="text-caption text-grey-darken-1 mb-3" style="line-height: 1.6;">{{ teacher.bio }}</div>

                <v-divider class="my-2"></v-divider>

                <div class="mt-auto">
                  <div class="text-caption font-weight-bold text-grey-darken-2 mb-1">Keahlian &amp; Sertifikasi:</div>
                  <div class="d-flex flex-wrap ga-1">
                    <v-chip
                      v-for="(skill, sIdx) in teacher.skills"
                      :key="sIdx"
                      size="x-small"
                      variant="tonal"
                      color="secondary"
                      class="font-weight-medium"
                    >
                      {{ skill }}
                    </v-chip>
                  </div>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- TESTIMONIAL KERJASAMA & PESERTA DIDIK -->
    <section class="py-12 py-md-16 bg-white border-b">
      <v-container class="max-width-xl px-4 px-sm-6">
        <div class="text-center mb-10 mb-md-14">
          <v-chip color="success" variant="tonal" size="small" class="font-weight-bold mb-2">Bukti Keberhasilan</v-chip>
          <h2 class="text-h4 text-sm-h3 font-weight-bold text-secondary mb-3">
            Kisah Sukses Peserta Didik &amp; Mitra Kerjasama
          </h2>
          <p class="text-body-1 text-grey-darken-1 max-width-md mx-auto">
            Mulai dari siswa yang lulus ujian kerja ke luar negeri hingga perusahaan yang mempercayakan pelatihan bahasa karyawannya kepada kami.
          </p>
        </div>

        <!-- Tab Pemisah: Peserta Didik vs Mitra Kerjasama -->
        <v-tabs v-model="testimonialTab" color="primary" align-tabs="center" class="mb-8">
          <v-tab value="students" class="text-none font-weight-bold" prepend-icon="mdi-account-school">
            Testimoni Peserta Didik
          </v-tab>
          <v-tab value="partners" class="text-none font-weight-bold" prepend-icon="mdi-handshake">
            Kerjasama Perusahaan &amp; Institusi
          </v-tab>
        </v-tabs>

        <!-- Testimoni Peserta Didik -->
        <v-window v-model="testimonialTab">
          <v-window-item value="students">
            <v-row>
              <v-col cols="12" md="4" v-for="item in studentTestimonials" :key="item.name">
                <v-card class="pa-6 rounded-3xl border bg-grey-lighten-5 h-100 shadow-sm d-flex flex-column">
                  <div class="d-flex align-center ga-1 text-amber-darken-2 mb-3">
                    <v-icon icon="mdi-star" size="18" v-for="n in 5" :key="n"></v-icon>
                  </div>
                  <p class="text-body-2 text-grey-darken-2 mb-6 font-italic" style="line-height: 1.7;">
                    "{{ item.quote }}"
                  </p>
                  <div class="mt-auto d-flex align-center ga-3 pt-3 border-t">
                    <v-avatar size="46">
                      <v-img :src="item.avatar" :alt="item.name" cover></v-img>
                    </v-avatar>
                    <div>
                      <div class="text-subtitle-2 font-weight-bold text-secondary">{{ item.name }}</div>
                      <div class="text-caption text-primary font-weight-medium">{{ item.program }}</div>
                      <div class="text-caption text-grey">{{ item.achievement }}</div>
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-window-item>

          <!-- Kerjasama Institusi / Korporasi -->
          <v-window-item value="partners">
            <v-row>
              <v-col cols="12" md="4" v-for="partner in partnerTestimonials" :key="partner.company">
                <v-card class="pa-6 rounded-3xl border bg-grey-lighten-5 h-100 shadow-sm d-flex flex-column">
                  <div class="d-flex align-center justify-space-between mb-4">
                    <v-chip color="primary" variant="tonal" size="small" class="font-weight-bold">
                      {{ partner.category }}
                    </v-chip>
                    <v-icon icon="mdi-domain" color="primary" size="24"></v-icon>
                  </div>
                  <h3 class="text-subtitle-1 font-weight-bold text-secondary mb-1">{{ partner.company }}</h3>
                  <div class="text-caption text-grey mb-3">{{ partner.picRole }}</div>
                  <p class="text-body-2 text-grey-darken-2 mb-6" style="line-height: 1.7;">
                    "{{ partner.statement }}"
                  </p>
                  <div class="mt-auto pt-3 border-t text-caption text-grey-darken-1 d-flex align-center ga-2">
                    <v-icon icon="mdi-check-decagram" color="teal" size="16"></v-icon>
                    <span>Program: {{ partner.trainingScope }}</span>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-window-item>
        </v-window>
      </v-container>
    </section>

    <!-- MITRA / INSTITUSI LOGO BANNER -->
    <section class="py-10 bg-grey-lighten-5 border-b">
      <v-container class="max-width-xl px-4 px-sm-6 text-center">
        <div class="text-caption font-weight-bold text-grey-darken-1 text-uppercase mb-6" style="letter-spacing: 1.5px;">
          Telah Dipercaya oleh Puluhan Mitra Lembaga Penyalur &amp; Perusahaan
        </div>
        <div class="d-flex flex-wrap justify-center align-center ga-6 ga-md-10">
          <div v-for="partner in partnerLogos" :key="partner.name" class="partner-badge px-4 py-2 bg-white rounded-xl border">
            <span class="text-body-2 font-weight-bold text-secondary">{{ partner.name }}</span>
          </div>
        </div>
      </v-container>
    </section>

    <!-- CTA FOOTER SECTION -->
    <section class="py-12 py-md-16 bg-white">
      <v-container class="max-width-xl px-4 px-sm-6">
        <v-card class="pa-8 pa-md-12 rounded-3xl text-center text-white" color="#004EB2">
          <h2 class="text-h4 text-sm-h3 font-weight-bold mb-3">Siap Mulai Belajar Bersama Kami?</h2>
          <p class="text-body-1 text-blue-lighten-4 max-width-md mx-auto mb-6">
            Daftar sekarang untuk Regular Class, Semi-Private, Private, atau Online Class. Nikmati materi komprehensif, modul audio, dan tutor terbaik Wordish.
          </p>
          <div class="d-flex justify-center flex-wrap ga-3">
            <v-btn
              to="/products"
              color="accent"
              size="large"
              variant="flat"
              class="text-none font-weight-bold px-8 text-white rounded-xl shadow-sm"
            >
              Lihat Program Kelas
            </v-btn>
            <v-btn
              to="/tryout"
              color="white"
              size="large"
              variant="outlined"
              class="text-none font-weight-bold px-8 rounded-xl"
            >
              Ikuti Tes Level Gratis
            </v-btn>
          </div>
        </v-card>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const testimonialTab = ref('students')

const keyStats = [
  { value: '2.500+', label: 'Peserta Didik Terlatih' },
  { value: '98%', label: 'Tingkat Kelulusan Ujian' },
  { value: '35+', label: 'Tutor Profesional Aktif' },
  { value: '50+', label: 'Mitra Perusahaan & Lembaga' }
]

const companyPillars = [
  {
    title: 'Standar Internasional',
    desc: 'Kurikulum mengacu pada tolok ukur resmi dunia: HSK (Mandarin), EPS-TOPIK (Korea), dan CEFR/IELTS (Inggris) untuk hasil yang diakui global.',
    avatarColor: 'primary-lighten',
    iconColor: 'primary',
    icon: 'mdi-school'
  },
  {
    title: 'Fleksibilitas Tanpa Batas',
    desc: 'Tersedia pilihan 1-on-1 di Training Center, tutor datang langsung ke rumah peserta (Home Class), atau pembelajaran digital interaktif lewat Online Class.',
    avatarColor: 'teal-lighten-5',
    iconColor: 'teal',
    icon: 'mdi-home-city-outline'
  },
  {
    title: 'Fokus Karier & Dunia Nyata',
    desc: 'Tidak sekadar teori gramatika, kami melatih simulasi wawancara kerja, pengucapan aktif, dan terminologi industri spesifik sesuai target siswa.',
    avatarColor: 'amber-lighten-5',
    iconColor: 'amber-darken-3',
    icon: 'mdi-briefcase-check-outline'
  }
]

const teachers = [
  {
    name: 'Chen Li-Wei (Laoshi Chen)',
    title: 'Head of Mandarin Academic & HSK Specialist',
    language: 'Mandarin',
    badgeColor: 'error',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    bio: 'Alumni National Taiwan Normal University dengan pengalaman 8 tahun membimbing ratusan siswa lulus HSK 4-5 dan seleksi kerja pabrik Taiwan.',
    skills: ['HSK 1 - 5', 'Pinyin & Nada', 'Mandarin Bisnis', 'Interview Kerja']
  },
  {
    name: 'Park Joon-Hyuk (Seonsaengnim Park)',
    title: 'Senior Korean Instructor & EPS-TOPIK Coach',
    language: 'Korea',
    badgeColor: 'info',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    bio: 'Pernah tinggal 6 tahun di Seoul, berfokus melatih calon tenaga kerja program G-to-G Korea dengan metode simulasi CBT presisi.',
    skills: ['EPS-TOPIK UBT/CBT', 'Hangeul Cepat', 'Budaya Kerja Korea', 'TOPIK I-II']
  },
  {
    name: 'Sarah Stephanie, M.Hum.',
    title: 'Lead English Trainer & IELTS Master',
    language: 'Inggris',
    badgeColor: 'teal',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    bio: 'Peraih skor IELTS 8.5 dan sertifikasi TESOL Internasional. Mengajar conversational fluency untuk profesional korporat dan akademisi luar negeri.',
    skills: ['IELTS 7.5+', 'Public Speaking', 'Business English', 'Interview Luar Negeri']
  },
  {
    name: 'Ahmad Farhan, S.Pd.',
    title: 'Mandarin & Korean Youth Program Specialist',
    language: 'Mandarin & Korea',
    badgeColor: 'accent',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    bio: 'Spesialis metode pengajaran interaktif untuk anak & remaja (Kids & Junior). Menciptakan suasana belajar menyenangkan melalui flashcard dan gamifikasi.',
    skills: ['Kids Class', 'Gamifikasi Belajar', 'Storytelling', 'Fonetik Dasar']
  }
]

const studentTestimonials = [
  {
    name: 'Bagus Setyawan',
    program: 'Bahasa Korea (EPS-TOPIK) - Private Class',
    achievement: 'Lolos Kerja Manufaktur di Hwaseong, Korsel',
    quote: 'Belajar dari nol huruf Hangeul di Wordish sampai bisa lulus ujian EPS-TOPIK dengan nilai 95/100. Simulasi ujian komputernya sangat mirip aslinya!',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80'
  },
  {
    name: 'Siti Nurhaliza',
    program: 'Bahasa Mandarin Kerja - Home Class',
    achievement: 'Bekerja di Perusahaan Logistik Taiwan',
    quote: 'Fokus kosakata kerja pabrik dan latihan interviewnya sangat membantu saat seleksi user. Tutor yang datang ke rumah sangat sabar mengajarkan nada suara.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
  },
  {
    name: 'Dimas Wicaksono',
    program: 'English Speaking & IELTS Prep - Online Class',
    achievement: 'Meraih Skor IELTS 7.0 & Diterima di Multinasional',
    quote: 'Dulu saya sangat kaku kalau diajak ngobrol bahasa Inggris. Di kelas online Wordish suasananya santai tapi terarah, modul e-learning dan bukunya sangat bermanfaat.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
  }
]

const partnerTestimonials = [
  {
    company: 'PT Global Solusi Tenaga Kerja',
    category: 'Lembaga Penyalur Kerja Luar Negeri',
    picRole: 'Direktur Operasional Penempatan Tenaga Kerja',
    statement: 'Kerjasama pelatihan bahasa Korea dan Mandarin dengan Wordish sangat menaikkan angka kelulusan tes kandidat kami hingga 92%. Materi fokus pada terminologi kerja nyata.',
    trainingScope: 'Program Batch Intensif Bahasa Korea & Mandarin Kerja'
  },
  {
    company: 'Nusantara Supply Chain & Logistic',
    category: 'Korporasi Logistik Internasional',
    picRole: 'HR Development Manager',
    statement: 'Pelatihan In-House Business English dari Wordish berhasil meningkatkan kepercayaan diri tim logistik kami saat berkomunikasi dengan prinsipal luar negeri.',
    trainingScope: 'Corporate In-House Business English Training'
  },
  {
    company: 'Yayasan Bina Talenta Bangsa',
    category: 'Institusi Pendidikan & Beasiswa',
    picRole: 'Koordinator Beasiswa Internasional',
    statement: 'Siswa kami dibimbing secara intensif untuk persiapan beasiswa China dan Taiwan. Tutor-tutor Wordish sangat teliti dalam mempersiapkan esai dan wawancara.',
    trainingScope: 'Bimbingan HSK & Persiapan Wawancara Beasiswa'
  }
]

const partnerLogos = [
  { name: 'PT Global Solusi Mandiri' },
  { name: 'PT Kencana Korea Utama' },
  { name: 'Nusantara Logistics' },
  { name: 'Asia Pacific Talent Network' },
  { name: 'Bina Insan Persada' },
  { name: 'EduBridge International' }
]
</script>

<style scoped>
.teacher-img {
  transition: transform 0.4s ease;
}
.teacher-card:hover .teacher-img {
  transform: scale(1.05);
}
.partner-badge {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}
</style>
