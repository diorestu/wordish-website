<template>
  <div class="py-8 py-md-10 bg-grey-lighten-5 min-vh-100">
    <v-container class="max-width-xl px-4">
      <!-- Breadcrumb & Header -->
      <div class="d-flex flex-column flex-md-row align-md-center justify-space-between ga-4 mb-6">
        <div>
          <v-breadcrumbs
            :items="[
              { title: 'Beranda', disabled: false, to: '/' },
              { title: 'Admin Panel', disabled: true },
              { title: 'Kelola Kelas', disabled: true }
            ]"
            class="pa-0 mb-2 text-caption"
          ></v-breadcrumbs>
          <div class="d-flex align-center ga-3">
            <v-avatar color="primary" size="42" class="text-white">
              <v-icon icon="mdi-shield-crown-outline" size="24"></v-icon>
            </v-avatar>
            <div>
              <h1 class="text-h5 text-md-h4 font-weight-bold text-secondary">
                Admin Panel — Kelola Kelas
              </h1>
              <p class="text-body-2 text-grey-darken-1 mb-0">
                Tambah, ubah, nonaktifkan, atau hapus program kelas dan jadwal LPK Wordish. Perubahan langsung tampil di halaman publik.
              </p>
            </div>
          </div>
        </div>

        <div class="d-flex flex-wrap align-center ga-2">
          <v-chip
            :color="classesStore.dbConnected ? 'success' : 'warning'"
            variant="tonal"
            size="small"
            :prepend-icon="classesStore.dbConnected ? 'mdi-database-check' : 'mdi-database-alert'"
            class="font-weight-bold"
          >
            {{ classesStore.dbConnected ? 'SQLite Terhubung' : 'Mode Offline' }}
          </v-chip>
          <v-btn
            variant="outlined"
            color="primary"
            prepend-icon="mdi-open-in-new"
            class="text-none font-weight-bold bg-white"
            to="/products"
          >
            Lihat Halaman Kelas
          </v-btn>
          <v-btn
            variant="outlined"
            color="error"
            prepend-icon="mdi-restore"
            class="text-none font-weight-bold bg-white"
            :loading="classesStore.saving"
            @click="confirmResetDialog = true"
          >
            Reset Default
          </v-btn>
        </div>
      </div>

      <!-- KPI Summary Cards -->
      <v-row class="mb-6">
        <v-col cols="12" sm="6" lg="3">
          <v-card class="pa-5 rounded-2xl border bg-white shadow-sm h-100">
            <div class="d-flex align-center justify-space-between mb-2">
              <span class="text-caption font-weight-bold text-grey-darken-1 text-uppercase">Total Program Kelas</span>
              <v-avatar color="primary-lighten" size="36">
                <v-icon icon="mdi-school-outline" color="primary" size="20"></v-icon>
              </v-avatar>
            </div>
            <div class="text-h4 font-weight-bold text-secondary">
              {{ classesStore.totalPrograms }}
            </div>
            <div class="text-caption text-success font-weight-medium mt-1">
              {{ classesStore.activeProgramsCount }} program aktif tayang
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" lg="3">
          <v-card class="pa-5 rounded-2xl border bg-white shadow-sm h-100">
            <div class="d-flex align-center justify-space-between mb-2">
              <span class="text-caption font-weight-bold text-grey-darken-1 text-uppercase">Slot Jadwal Kelas</span>
              <v-avatar color="teal-lighten-5" size="36">
                <v-icon icon="mdi-calendar-clock" color="teal" size="20"></v-icon>
              </v-avatar>
            </div>
            <div class="text-h4 font-weight-bold text-secondary">
              {{ classesStore.totalSchedules }}
            </div>
            <div class="text-caption text-grey-darken-1 mt-1">
              Senin – Sabtu (Kids, Teen, Adult)
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" lg="3">
          <v-card class="pa-5 rounded-2xl border bg-white shadow-sm h-100">
            <div class="d-flex align-center justify-space-between mb-2">
              <span class="text-caption font-weight-bold text-grey-darken-1 text-uppercase">Distribusi Bahasa</span>
              <v-avatar color="accent-lighten" size="36">
                <v-icon icon="mdi-translate" color="accent" size="20"></v-icon>
              </v-avatar>
            </div>
            <div class="d-flex align-center ga-2 mt-2 flex-wrap">
              <v-chip size="small" color="error" variant="tonal" class="font-weight-bold">
                Mandarin: {{ countByLang('mandarin') }}
              </v-chip>
              <v-chip size="small" color="info" variant="tonal" class="font-weight-bold">
                Korea: {{ countByLang('korean') }}
              </v-chip>
              <v-chip size="small" color="teal" variant="tonal" class="font-weight-bold">
                Inggris: {{ countByLang('english') }}
              </v-chip>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" lg="3">
          <v-card class="pa-5 rounded-2xl border bg-white shadow-sm h-100">
            <div class="d-flex align-center justify-space-between mb-2">
              <span class="text-caption font-weight-bold text-grey-darken-1 text-uppercase">Rata-rata Diskon</span>
              <v-avatar color="amber-lighten-5" size="36">
                <v-icon icon="mdi-tag-multiple-outline" color="amber-darken-3" size="20"></v-icon>
              </v-avatar>
            </div>
            <div class="text-h4 font-weight-bold text-secondary">
              {{ averageDiscount }}%
            </div>
            <div class="text-caption text-grey-darken-1 mt-1">
              Dari seluruh program terdaftar
            </div>
          </v-card>
        </v-col>
      </v-row>

      <!-- Main Admin Card with Tabs -->
      <v-card class="rounded-2xl border bg-white shadow-sm overflow-hidden">
        <v-tabs
          v-model="activeTab"
          color="primary"
          bg-color="white"
          class="border-b px-4"
        >
          <v-tab value="programs" class="text-none font-weight-bold" prepend-icon="mdi-book-education-outline">
            Program Kelas ({{ classesStore.totalPrograms }})
          </v-tab>
          <v-tab value="schedules" class="text-none font-weight-bold" prepend-icon="mdi-timetable">
            Jadwal Kelas ({{ classesStore.totalSchedules }})
          </v-tab>
        </v-tabs>

        <v-window v-model="activeTab">
          <!-- TAB 1: KELOLA PROGRAM KELAS -->
          <v-window-item value="programs">
            <div class="pa-4 pa-md-6">
              <!-- Toolbar -->
              <v-row align="center" class="mb-4" dense>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="programSearch"
                    placeholder="Cari nama kelas, level, atau batch..."
                    prepend-inner-icon="mdi-magnify"
                    density="compact"
                    hide-details
                    clearable
                  ></v-text-field>
                </v-col>
                <v-col cols="6" md="3">
                  <v-select
                    v-model="programLangFilter"
                    :items="languageFilterOptions"
                    item-title="label"
                    item-value="value"
                    label="Filter Bahasa"
                    density="compact"
                    hide-details
                  ></v-select>
                </v-col>
                <v-col cols="6" md="2">
                  <v-select
                    v-model="programStatusFilter"
                    :items="statusFilterOptions"
                    item-title="label"
                    item-value="value"
                    label="Status"
                    density="compact"
                    hide-details
                  ></v-select>
                </v-col>
                <v-col cols="12" md="3" class="text-md-right">
                  <v-btn
                    color="accent"
                    prepend-icon="mdi-plus"
                    class="text-none font-weight-bold text-white"
                    block
                    @click="openCreateProgram"
                  >
                    Tambah Program Kelas
                  </v-btn>
                </v-col>
              </v-row>

              <!-- Programs Table -->
              <div v-if="filteredPrograms.length > 0" class="border rounded-xl overflow-x-auto">
                <v-table hover class="admin-table">
                  <thead>
                    <tr class="bg-grey-lighten-4 text-caption text-uppercase">
                      <th class="font-weight-bold text-secondary">Program Kelas</th>
                      <th class="font-weight-bold text-secondary">Bahasa</th>
                      <th class="font-weight-bold text-secondary">Durasi &amp; Format</th>
                      <th class="font-weight-bold text-secondary">Harga</th>
                      <th class="font-weight-bold text-secondary">Batch</th>
                      <th class="font-weight-bold text-secondary text-center">Status</th>
                      <th class="font-weight-bold text-secondary text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="prog in filteredPrograms" :key="prog.id">
                      <td class="py-3" style="min-width: 240px;">
                        <div class="d-flex align-center ga-2 mb-1">
                          <v-chip
                            v-if="prog.badge"
                            :color="prog.badgeColor || 'primary'"
                            size="x-small"
                            variant="flat"
                            class="font-weight-bold text-white"
                          >
                            {{ prog.badge }}
                          </v-chip>
                          <span class="text-caption text-grey-darken-1">{{ prog.level }}</span>
                        </div>
                        <div class="font-weight-bold text-body-2 text-secondary">
                          {{ prog.title }}
                        </div>
                        <div class="text-caption text-grey text-truncate" style="max-width: 280px;">
                          {{ prog.features?.length || 0 }} fasilitas &bull; {{ prog.summary }}
                        </div>
                      </td>

                      <td class="py-3">
                        <v-chip
                          :color="getLanguageMeta(prog.languageId).color"
                          size="small"
                          variant="tonal"
                          class="font-weight-bold"
                        >
                          {{ getLanguageMeta(prog.languageId).label }}
                        </v-chip>
                      </td>

                      <td class="py-3" style="min-width: 170px;">
                        <div class="text-body-2 font-weight-medium text-secondary">
                          {{ prog.duration }}
                        </div>
                        <div class="text-caption text-grey-darken-1">
                          {{ prog.mode }}
                        </div>
                      </td>

                      <td class="py-3 text-no-wrap">
                        <div class="text-body-2 font-weight-bold text-primary">
                          {{ formatRupiah(prog.price) }}
                        </div>
                        <div class="text-caption text-grey">
                          <span class="text-decoration-line-through">{{ formatRupiah(prog.originalPrice) }}</span>
                          <span v-if="prog.discountPercent > 0" class="text-error font-weight-bold ml-1">
                            -{{ prog.discountPercent }}%
                          </span>
                        </div>
                      </td>

                      <td class="py-3" style="min-width: 150px;">
                        <div class="text-caption font-weight-medium text-secondary">
                          {{ prog.nextBatch }}
                        </div>
                      </td>

                      <td class="py-3 text-center">
                        <div class="d-inline-flex align-center">
                          <v-switch
                            :model-value="prog.isActive !== false"
                            color="success"
                            density="compact"
                            hide-details
                            inset
                            @update:model-value="handleToggleStatus(prog)"
                          ></v-switch>
                        </div>
                      </td>

                      <td class="py-3 text-right text-no-wrap">
                        <v-btn
                          icon="mdi-pencil-outline"
                          size="small"
                          variant="text"
                          color="primary"
                          title="Edit Program"
                          @click="openEditProgram(prog)"
                        ></v-btn>
                        <v-btn
                          icon="mdi-content-copy"
                          size="small"
                          variant="text"
                          color="secondary"
                          title="Duplikat Program"
                          @click="handleDuplicateProgram(prog)"
                        ></v-btn>
                        <v-btn
                          icon="mdi-delete-outline"
                          size="small"
                          variant="text"
                          color="error"
                          title="Hapus Program"
                          @click="promptDelete('program', prog)"
                        ></v-btn>
                      </td>
                    </tr>
                  </tbody>
                </v-table>
              </div>

              <!-- Empty State -->
              <v-card v-else variant="outlined" class="text-center pa-10 rounded-xl border-dashed">
                <v-icon icon="mdi-book-off-outline" size="52" color="grey" class="mb-2"></v-icon>
                <div class="text-subtitle-1 font-weight-bold text-secondary">
                  Tidak ada program kelas ditemukan
                </div>
                <p class="text-body-2 text-grey mb-4">
                  Ubah kata kunci pencarian atau tambahkan program kelas baru.
                </p>
                <v-btn color="primary" class="text-none font-weight-bold" @click="openCreateProgram">
                  + Tambah Program Kelas
                </v-btn>
              </v-card>
            </div>
          </v-window-item>

          <!-- TAB 2: KELOLA JADWAL KELAS -->
          <v-window-item value="schedules">
            <div class="pa-4 pa-md-6">
              <!-- Toolbar -->
              <v-row align="center" class="mb-4" dense>
                <v-col cols="12" md="5">
                  <v-text-field
                    v-model="scheduleSearch"
                    placeholder="Cari nama kelas, jam, atau fokus materi..."
                    prepend-inner-icon="mdi-magnify"
                    density="compact"
                    hide-details
                    clearable
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-select
                    v-model="scheduleCategoryFilter"
                    :items="scheduleCategoryOptions"
                    item-title="label"
                    item-value="value"
                    label="Filter Kategori"
                    density="compact"
                    hide-details
                  ></v-select>
                </v-col>
                <v-col cols="12" md="3" class="text-md-right">
                  <v-btn
                    color="accent"
                    prepend-icon="mdi-plus"
                    class="text-none font-weight-bold text-white"
                    block
                    @click="openCreateSchedule"
                  >
                    Tambah Jadwal Kelas
                  </v-btn>
                </v-col>
              </v-row>

              <!-- Schedules Table -->
              <div v-if="filteredSchedules.length > 0" class="border rounded-xl overflow-x-auto">
                <v-table hover class="admin-table">
                  <thead>
                    <tr class="bg-grey-lighten-4 text-caption text-uppercase">
                      <th class="font-weight-bold text-secondary">Jam (WIB)</th>
                      <th class="font-weight-bold text-secondary">Nama Kelas</th>
                      <th class="font-weight-bold text-secondary">Bahasa</th>
                      <th class="font-weight-bold text-secondary">Kategori</th>
                      <th class="font-weight-bold text-secondary">Hari &amp; Format</th>
                      <th class="font-weight-bold text-secondary">Kuota</th>
                      <th class="font-weight-bold text-secondary text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="sched in filteredSchedules" :key="sched.id">
                      <td class="py-3 font-weight-bold text-primary text-no-wrap">
                        {{ sched.time }} WIB
                      </td>
                      <td class="py-3" style="min-width: 210px;">
                        <div class="font-weight-bold text-body-2 text-secondary">
                          {{ sched.className }}
                        </div>
                        <div class="text-caption text-grey-darken-1 text-truncate" style="max-width: 260px;">
                          {{ sched.focus }}
                        </div>
                      </td>
                      <td class="py-3 text-body-2 text-secondary">
                        {{ sched.language }}
                      </td>
                      <td class="py-3">
                        <v-chip
                          :color="sched.categoryBadgeColor || 'teal'"
                          size="small"
                          variant="tonal"
                          class="font-weight-bold"
                        >
                          {{ sched.category }}
                        </v-chip>
                      </td>
                      <td class="py-3" style="min-width: 160px;">
                        <div class="text-body-2 font-weight-medium text-secondary">{{ sched.days }}</div>
                        <div class="text-caption text-grey-darken-1">{{ sched.mode }}</div>
                      </td>
                      <td class="py-3 text-no-wrap">
                        <v-chip size="small" color="warning" variant="tonal" class="font-weight-bold">
                          {{ sched.quota }}
                        </v-chip>
                      </td>
                      <td class="py-3 text-right text-no-wrap">
                        <v-btn
                          icon="mdi-pencil-outline"
                          size="small"
                          variant="text"
                          color="primary"
                          title="Edit Jadwal"
                          @click="openEditSchedule(sched)"
                        ></v-btn>
                        <v-btn
                          icon="mdi-delete-outline"
                          size="small"
                          variant="text"
                          color="error"
                          title="Hapus Jadwal"
                          @click="promptDelete('schedule', sched)"
                        ></v-btn>
                      </td>
                    </tr>
                  </tbody>
                </v-table>
              </div>

              <!-- Empty State -->
              <v-card v-else variant="outlined" class="text-center pa-10 rounded-xl border-dashed">
                <v-icon icon="mdi-calendar-remove-outline" size="52" color="grey" class="mb-2"></v-icon>
                <div class="text-subtitle-1 font-weight-bold text-secondary">
                  Belum ada jadwal yang cocok
                </div>
                <p class="text-body-2 text-grey mb-4">
                  Tambahkan jadwal kelas baru agar siswa dapat memilih slot belajar.
                </p>
                <v-btn color="primary" class="text-none font-weight-bold" @click="openCreateSchedule">
                  + Tambah Jadwal Kelas
                </v-btn>
              </v-card>
            </div>
          </v-window-item>
        </v-window>
      </v-card>
    </v-container>

    <!-- DIALOG: CREATE / EDIT PROGRAM KELAS -->
    <v-dialog v-model="programDialog" max-width="760" persistent scrollable>
      <v-card class="rounded-2xl">
        <v-card-title class="d-flex align-center justify-space-between pa-5 border-b bg-grey-lighten-5">
          <div class="d-flex align-center ga-2">
            <v-icon :icon="editingProgramId ? 'mdi-pencil-box-outline' : 'mdi-plus-box-outline'" color="primary"></v-icon>
            <span class="text-h6 font-weight-bold text-secondary">
              {{ editingProgramId ? 'Edit Program Kelas' : 'Tambah Program Kelas Baru' }}
            </span>
          </div>
          <v-btn icon="mdi-close" variant="text" size="small" @click="programDialog = false"></v-btn>
        </v-card-title>

        <v-card-text class="pa-5">
          <v-form ref="programFormRef" v-model="programFormValid">
            <v-row dense>
              <v-col cols="12" md="4">
                <v-select
                  v-model="programForm.languageId"
                  :items="languageOptions"
                  item-title="label"
                  item-value="value"
                  label="Bahasa *"
                  :rules="[rules.required]"
                ></v-select>
              </v-col>
              <v-col cols="12" md="8">
                <v-text-field
                  v-model="programForm.title"
                  label="Nama Program Kelas *"
                  placeholder="Contoh: Mandarin Bisnis & HSK 3"
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model="programForm.level"
                  label="Level *"
                  placeholder="Contoh: Pemula (Beginner)"
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="programForm.duration"
                  label="Durasi *"
                  placeholder="Contoh: 2 Bulan (24 Sesi @90 Menit)"
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="programForm.mode"
                  label="Format Kelas *"
                  placeholder="Contoh: Private, Home, atau Online"
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="5">
                <v-text-field
                  v-model.number="programForm.originalPrice"
                  label="Harga Normal (Rp) *"
                  type="number"
                  min="0"
                  :rules="[rules.nonNegative]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="5">
                <v-text-field
                  v-model.number="programForm.price"
                  label="Harga Promo (Rp) *"
                  type="number"
                  min="0"
                  :rules="[rules.nonNegative]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="2" class="d-flex align-center pb-4">
                <v-chip color="error" variant="tonal" class="font-weight-bold w-100 justify-center">
                  Hemat {{ computedDiscountPreview }}%
                </v-chip>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model="programForm.badge"
                  label="Label Badge"
                  placeholder="Contoh: Paling Populer"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-select
                  v-model="programForm.badgeColor"
                  :items="badgeColorOptions"
                  item-title="label"
                  item-value="value"
                  label="Warna Badge"
                ></v-select>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="programForm.nextBatch"
                  label="Jadwal Batch Berikutnya *"
                  placeholder="Contoh: Batch 15: Mulai 5 Jan 2027"
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-textarea
                  v-model="programForm.summary"
                  label="Deskripsi Singkat *"
                  rows="2"
                  auto-grow
                  variant="outlined"
                  rounded="lg"
                  :rules="[rules.required]"
                ></v-textarea>
              </v-col>

              <!-- Dynamic Features Editor -->
              <v-col cols="12">
                <div class="text-subtitle-2 font-weight-bold text-secondary mb-2">
                  Materi &amp; Fasilitas Kelas
                </div>
                <div class="d-flex ga-2 mb-3">
                  <v-text-field
                    v-model="newFeatureText"
                    placeholder="Tambah poin fasilitas (tekan Enter atau klik Tambah)"
                    density="compact"
                    hide-details
                    @keyup.enter.prevent="addFeatureItem"
                  ></v-text-field>
                  <v-btn
                    color="primary"
                    variant="tonal"
                    class="text-none font-weight-bold"
                    @click="addFeatureItem"
                  >
                    Tambah
                  </v-btn>
                </div>

                <v-list v-if="programForm.features.length > 0" density="compact" class="border rounded-xl pa-2 bg-grey-lighten-5">
                  <v-list-item
                    v-for="(feat, idx) in programForm.features"
                    :key="idx"
                    class="px-2"
                  >
                    <template #prepend>
                      <v-icon icon="mdi-check-circle" color="teal" size="18"></v-icon>
                    </template>
                    <v-list-item-title class="text-body-2">{{ feat }}</v-list-item-title>
                    <template #append>
                      <v-btn
                        icon="mdi-close"
                        size="x-small"
                        variant="text"
                        color="error"
                        @click="removeFeatureItem(idx)"
                      ></v-btn>
                    </template>
                  </v-list-item>
                </v-list>
                <div v-else class="text-caption text-grey">
                  Belum ada poin fasilitas ditambahkan.
                </div>
              </v-col>

              <v-col cols="12" class="mt-2">
                <v-switch
                  v-model="programForm.isActive"
                  color="success"
                  label="Tampilkan program ini di halaman publik"
                  hide-details
                  inset
                ></v-switch>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>

        <v-card-actions class="pa-5 border-t bg-grey-lighten-5">
          <v-spacer></v-spacer>
          <v-btn variant="text" class="text-none font-weight-bold" @click="programDialog = false">
            Batal
          </v-btn>
          <v-btn
            color="primary"
            variant="flat"
            class="text-none font-weight-bold px-6 text-white"
            @click="saveProgram"
          >
            {{ editingProgramId ? 'Simpan Perubahan' : 'Buat Program Kelas' }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- DIALOG: CREATE / EDIT JADWAL KELAS -->
    <v-dialog v-model="scheduleDialog" max-width="640" persistent scrollable>
      <v-card class="rounded-2xl">
        <v-card-title class="d-flex align-center justify-space-between pa-5 border-b bg-grey-lighten-5">
          <div class="d-flex align-center ga-2">
            <v-icon :icon="editingScheduleId ? 'mdi-calendar-edit' : 'mdi-calendar-plus'" color="primary"></v-icon>
            <span class="text-h6 font-weight-bold text-secondary">
              {{ editingScheduleId ? 'Edit Jadwal Kelas' : 'Tambah Jadwal Kelas Baru' }}
            </span>
          </div>
          <v-btn icon="mdi-close" variant="text" size="small" @click="scheduleDialog = false"></v-btn>
        </v-card-title>

        <v-card-text class="pa-5">
          <v-form ref="scheduleFormRef" v-model="scheduleFormValid">
            <v-row dense>
              <v-col cols="12" sm="5">
                <v-text-field
                  v-model="scheduleForm.time"
                  label="Jam (WIB) *"
                  placeholder="Contoh: 18.00 - 19.00"
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="7">
                <v-text-field
                  v-model="scheduleForm.className"
                  label="Nama Kelas *"
                  placeholder="Contoh: Mandarin (Teen & Adult)"
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-select
                  v-model="scheduleForm.language"
                  :items="['Bahasa Mandarin', 'Bahasa Korea', 'Bahasa Inggris']"
                  label="Bahasa *"
                  :rules="[rules.required]"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  v-model="scheduleForm.category"
                  :items="['Kids & Junior', 'Teen & Adult', 'Intensif Kerja LN']"
                  label="Kategori *"
                  :rules="[rules.required]"
                ></v-select>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="scheduleForm.days"
                  label="Hari *"
                  placeholder="Contoh: Senin - Sabtu"
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="scheduleForm.quota"
                  label="Ketersediaan Kuota *"
                  placeholder="Contoh: Sisa 4 Slot"
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  v-model="scheduleForm.mode"
                  label="Format Layanan *"
                  placeholder="Contoh: Private / Home / Online Class"
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  v-model="scheduleForm.ageGroup"
                  label="Kelompok Usia"
                  placeholder="Contoh: Remaja & Dewasa (16+ Tahun)"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-textarea
                  v-model="scheduleForm.focus"
                  label="Fokus Materi *"
                  rows="2"
                  auto-grow
                  variant="outlined"
                  rounded="lg"
                  :rules="[rules.required]"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>

        <v-card-actions class="pa-5 border-t bg-grey-lighten-5">
          <v-spacer></v-spacer>
          <v-btn variant="text" class="text-none font-weight-bold" @click="scheduleDialog = false">
            Batal
          </v-btn>
          <v-btn
            color="primary"
            variant="flat"
            class="text-none font-weight-bold px-6 text-white"
            @click="saveSchedule"
          >
            {{ editingScheduleId ? 'Simpan Perubahan' : 'Buat Jadwal' }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- DIALOG: KONFIRMASI HAPUS -->
    <v-dialog v-model="deleteDialog" max-width="420">
      <v-card class="rounded-2xl pa-2">
        <v-card-title class="text-h6 font-weight-bold text-secondary">
          Konfirmasi Hapus
        </v-card-title>
        <v-card-text class="text-body-2 text-grey-darken-1">
          Apakah Anda yakin ingin menghapus
          <strong class="text-secondary">{{ deleteTarget?.label }}</strong>?
          Tindakan ini tidak dapat dibatalkan.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn variant="text" class="text-none font-weight-bold" @click="deleteDialog = false">
            Batal
          </v-btn>
          <v-btn color="error" variant="flat" class="text-none font-weight-bold text-white" @click="confirmDelete">
            Ya, Hapus
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- DIALOG: KONFIRMASI RESET DEFAULT -->
    <v-dialog v-model="confirmResetDialog" max-width="440">
      <v-card class="rounded-2xl pa-2">
        <v-card-title class="text-h6 font-weight-bold text-secondary">
          Reset Data ke Default?
        </v-card-title>
        <v-card-text class="text-body-2 text-grey-darken-1">
          Semua perubahan pada daftar program kelas dan jadwal akan dikembalikan ke data awal LPK Wordish.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn variant="text" class="text-none font-weight-bold" @click="confirmResetDialog = false">
            Batal
          </v-btn>
          <v-btn color="error" variant="flat" class="text-none font-weight-bold text-white" @click="handleResetDefaults">
            Reset Sekarang
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- SNACKBAR FEEDBACK -->
    <v-snackbar v-model="snackbar.show" :color="snackbar.color" timeout="3000" location="bottom right">
      {{ snackbar.text }}
    </v-snackbar>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useClassesStore } from '../stores/classes'

const classesStore = useClassesStore()

onMounted(() => {
  classesStore.fetchAll()
})

const activeTab = ref('programs')

// --- Filters ---
const programSearch = ref('')
const programLangFilter = ref('all')
const programStatusFilter = ref('all')

const scheduleSearch = ref('')
const scheduleCategoryFilter = ref('all')

const languageOptions = [
  { label: 'Bahasa Mandarin', value: 'mandarin' },
  { label: 'Bahasa Korea', value: 'korean' },
  { label: 'Bahasa Inggris', value: 'english' }
]

const languageFilterOptions = [
  { label: 'Semua Bahasa', value: 'all' },
  ...languageOptions
]

const statusFilterOptions = [
  { label: 'Semua Status', value: 'all' },
  { label: 'Aktif', value: 'active' },
  { label: 'Nonaktif', value: 'inactive' }
]

const scheduleCategoryOptions = [
  { label: 'Semua Kategori', value: 'all' },
  { label: 'Kids & Junior', value: 'Kids & Junior' },
  { label: 'Teen & Adult', value: 'Teen & Adult' },
  { label: 'Intensif Kerja LN', value: 'Intensif Kerja LN' }
]

const badgeColorOptions = [
  { label: 'Oranye (Accent)', value: 'accent' },
  { label: 'Biru Utama (Primary)', value: 'primary' },
  { label: 'Hijau (Success)', value: 'success' },
  { label: 'Merah (Error)', value: 'error' },
  { label: 'Biru Info (Info)', value: 'info' }
]

// --- Computed KPI & Lists ---
function countByLang(langId) {
  return classesStore.programs.filter((p) => p.languageId === langId).length
}

const averageDiscount = computed(() => {
  if (classesStore.programs.length === 0) return 0
  const total = classesStore.programs.reduce((acc, p) => acc + (Number(p.discountPercent) || 0), 0)
  return Math.round(total / classesStore.programs.length)
})

const filteredPrograms = computed(() => {
  const q = (programSearch.value || '').toLowerCase().trim()
  return classesStore.programs.filter((p) => {
    const matchLang = programLangFilter.value === 'all' || p.languageId === programLangFilter.value
    const isActive = p.isActive !== false
    const matchStatus =
      programStatusFilter.value === 'all' ||
      (programStatusFilter.value === 'active' && isActive) ||
      (programStatusFilter.value === 'inactive' && !isActive)
    const matchSearch =
      !q ||
      p.title.toLowerCase().includes(q) ||
      (p.level || '').toLowerCase().includes(q) ||
      (p.nextBatch || '').toLowerCase().includes(q) ||
      (p.summary || '').toLowerCase().includes(q)
    return matchLang && matchStatus && matchSearch
  })
})

const filteredSchedules = computed(() => {
  const q = (scheduleSearch.value || '').toLowerCase().trim()
  return classesStore.batchSchedules.filter((s) => {
    const matchCat = scheduleCategoryFilter.value === 'all' || s.category === scheduleCategoryFilter.value
    const matchSearch =
      !q ||
      (s.className || '').toLowerCase().includes(q) ||
      (s.time || '').toLowerCase().includes(q) ||
      (s.focus || '').toLowerCase().includes(q) ||
      (s.language || '').toLowerCase().includes(q)
    return matchCat && matchSearch
  })
})

// --- Validation Rules ---
const rules = {
  required: (v) => (v !== null && v !== undefined && String(v).trim() !== '') || 'Wajib diisi',
  nonNegative: (v) => (v !== '' && v !== null && Number(v) >= 0) || 'Nominal tidak valid'
}

// --- Program Form Dialog ---
const programDialog = ref(false)
const programFormRef = ref(null)
const programFormValid = ref(false)
const editingProgramId = ref(null)
const newFeatureText = ref('')

const emptyProgramForm = () => ({
  languageId: 'mandarin',
  title: '',
  level: '',
  duration: '',
  mode: 'Pilihan: Private, Home, atau Online',
  originalPrice: 1500000,
  price: 950000,
  badge: 'Program Baru',
  badgeColor: 'accent',
  nextBatch: '',
  summary: '',
  features: [],
  isActive: true
})

const programForm = reactive(emptyProgramForm())

const computedDiscountPreview = computed(() => {
  const orig = Number(programForm.originalPrice) || 0
  const promo = Number(programForm.price) || 0
  if (orig <= 0 || promo >= orig) return 0
  return Math.round(((orig - promo) / orig) * 100)
})

function openCreateProgram() {
  editingProgramId.value = null
  Object.assign(programForm, emptyProgramForm())
  newFeatureText.value = ''
  programDialog.value = true
}

function openEditProgram(prog) {
  editingProgramId.value = prog.id
  Object.assign(programForm, {
    languageId: prog.languageId,
    title: prog.title,
    level: prog.level,
    duration: prog.duration,
    mode: prog.mode,
    originalPrice: prog.originalPrice,
    price: prog.price,
    badge: prog.badge || '',
    badgeColor: prog.badgeColor || 'accent',
    nextBatch: prog.nextBatch,
    summary: prog.summary,
    features: [...(prog.features || [])],
    isActive: prog.isActive !== false
  })
  newFeatureText.value = ''
  programDialog.value = true
}

function addFeatureItem() {
  const text = newFeatureText.value.trim()
  if (!text) return
  programForm.features.push(text)
  newFeatureText.value = ''
}

function removeFeatureItem(idx) {
  programForm.features.splice(idx, 1)
}

async function saveProgram() {
  const { valid } = await programFormRef.value.validate()
  if (!valid) return

  const payload = {
    ...programForm,
    features: [...programForm.features]
  }

  try {
    if (editingProgramId.value) {
      await classesStore.updateProgram(editingProgramId.value, payload)
      notify('Program kelas berhasil diperbarui di SQLite')
    } else {
      await classesStore.addProgram(payload)
      notify('Program kelas baru berhasil disimpan ke SQLite')
    }
    programDialog.value = false
  } catch (err) {
    notify(err.message || 'Gagal menyimpan program ke SQLite', 'error')
  }
}

async function handleDuplicateProgram(prog) {
  try {
    await classesStore.duplicateProgram(prog.id)
    notify(`"${prog.title}" berhasil diduplikat`, 'info')
  } catch (err) {
    notify(err.message || 'Gagal menduplikat program', 'error')
  }
}

async function handleToggleStatus(prog) {
  try {
    const updated = await classesStore.toggleProgramStatus(prog.id)
    if (updated) {
      notify(
        updated.isActive ? `"${updated.title}" diaktifkan` : `"${updated.title}" dinonaktifkan`,
        updated.isActive ? 'success' : 'warning'
      )
    }
  } catch (err) {
    notify(err.message || 'Gagal mengubah status program', 'error')
  }
}

// --- Schedule Form Dialog ---
const scheduleDialog = ref(false)
const scheduleFormRef = ref(null)
const scheduleFormValid = ref(false)
const editingScheduleId = ref(null)

const emptyScheduleForm = () => ({
  time: '',
  className: '',
  language: 'Bahasa Mandarin',
  category: 'Teen & Adult',
  ageGroup: '',
  focus: '',
  days: 'Senin - Sabtu',
  mode: 'Private / Home / Online Class',
  quota: 'Sisa 4 Slot'
})

const scheduleForm = reactive(emptyScheduleForm())

function getCategoryBadgeColor(category) {
  if (category === 'Kids & Junior') return 'teal'
  if (category === 'Intensif Kerja LN') return 'amber-darken-3'
  return 'deep-purple'
}

function openCreateSchedule() {
  editingScheduleId.value = null
  Object.assign(scheduleForm, emptyScheduleForm())
  scheduleDialog.value = true
}

function openEditSchedule(sched) {
  editingScheduleId.value = sched.id
  Object.assign(scheduleForm, {
    time: sched.time,
    className: sched.className,
    language: sched.language,
    category: sched.category,
    ageGroup: sched.ageGroup || '',
    focus: sched.focus,
    days: sched.days,
    mode: sched.mode,
    quota: sched.quota
  })
  scheduleDialog.value = true
}

async function saveSchedule() {
  const { valid } = await scheduleFormRef.value.validate()
  if (!valid) return

  const payload = {
    ...scheduleForm,
    categoryBadgeColor: getCategoryBadgeColor(scheduleForm.category)
  }

  try {
    if (editingScheduleId.value) {
      await classesStore.updateSchedule(editingScheduleId.value, payload)
      notify('Jadwal kelas berhasil diperbarui di SQLite')
    } else {
      await classesStore.addSchedule(payload)
      notify('Jadwal kelas baru berhasil disimpan ke SQLite')
    }
    scheduleDialog.value = false
  } catch (err) {
    notify(err.message || 'Gagal menyimpan jadwal ke SQLite', 'error')
  }
}

// --- Delete & Reset ---
const deleteDialog = ref(false)
const deleteTarget = ref(null)
const confirmResetDialog = ref(false)

function promptDelete(type, item) {
  deleteTarget.value = {
    type,
    id: item.id,
    label: type === 'program' ? item.title : `${item.className} (${item.time} WIB)`
  }
  deleteDialog.value = true
}

async function confirmDelete() {
  if (!deleteTarget.value) return
  try {
    if (deleteTarget.value.type === 'program') {
      await classesStore.deleteProgram(deleteTarget.value.id)
      notify('Program kelas dihapus dari SQLite', 'warning')
    } else {
      await classesStore.deleteSchedule(deleteTarget.value.id)
      notify('Jadwal kelas dihapus dari SQLite', 'warning')
    }
    deleteDialog.value = false
    deleteTarget.value = null
  } catch (err) {
    notify(err.message || 'Gagal menghapus data dari SQLite', 'error')
  }
}

async function handleResetDefaults() {
  try {
    await classesStore.resetToDefaults()
    confirmResetDialog.value = false
    notify('Data kelas & jadwal di SQLite dikembalikan ke default', 'info')
  } catch (err) {
    notify(err.message || 'Gagal mereset database SQLite', 'error')
  }
}

// --- Helpers ---
const snackbar = reactive({
  show: false,
  text: '',
  color: 'success'
})

function notify(text, color = 'success') {
  snackbar.text = text
  snackbar.color = color
  snackbar.show = true
}

function getLanguageMeta(langId) {
  if (langId === 'mandarin') return { label: 'Mandarin', color: 'error' }
  if (langId === 'korean') return { label: 'Korea', color: 'info' }
  return { label: 'Inggris', color: 'teal' }
}

function formatRupiah(val) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(val || 0)
}
</script>

<style scoped>
.min-vh-100 {
  min-height: 85vh;
}

.admin-table th {
  white-space: nowrap;
}
</style>
