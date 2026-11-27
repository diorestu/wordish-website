<template>
  <div class="py-10 bg-grey-lighten-5 min-vh-100">
    <v-container class="max-width-xl px-4 px-sm-6">
      <!-- Breadcrumb & Header -->
      <div class="mb-8">
        <v-breadcrumbs
          :items="[
            { title: 'Beranda', disabled: false, href: '/' },
            { title: 'Buku Pelajaran Resmi', disabled: true }
          ]"
          class="pa-0 mb-2 text-caption"
        ></v-breadcrumbs>
        <h1 class="text-h4 font-weight-bold text-secondary mb-2">
          Buku Pelajaran Bahasa Asing Resmi Wordish
        </h1>
        <p class="text-body-1 text-grey-darken-1 max-width-md">
          Modul cetak fisik berkualitas tinggi yang disusun oleh instruktur ahli Wordish. Dapatkan sekarang melalui Official Store kami di <strong>Shopee</strong> dan <strong>Tokopedia</strong>.
        </p>
      </div>

      <!-- Marketplace Guarantee Strip -->
      <v-card class="pa-4 rounded-2xl border bg-white shadow-sm mb-10">
        <v-row align="center" justify="space-between">
          <v-col cols="12" md="7">
            <div class="d-flex align-center ga-3">
              <v-icon icon="mdi-shield-check" color="success" size="32"></v-icon>
              <div>
                <div class="font-weight-bold text-body-1 text-secondary">
                  Jaminan 100% Produk Original & Ready Stock
                </div>
                <div class="text-caption text-grey">
                  Pengiriman ke seluruh Indonesia dengan packing aman bubble wrap & bonus akses audio listening.
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="5" class="d-flex justify-md-end align-center ga-3">
            <v-btn
              color="#EE4D2D"
              class="text-none font-weight-bold text-white"
              prepend-icon="mdi-shopping"
              href="https://shopee.co.id"
              target="_blank"
            >
              Kunjungi Toko Shopee
            </v-btn>
            <v-btn
              color="#03AC0E"
              class="text-none font-weight-bold text-white"
              prepend-icon="mdi-store"
              href="https://tokopedia.com"
              target="_blank"
            >
              Kunjungi Tokopedia
            </v-btn>
          </v-col>
        </v-row>
      </v-card>

      <!-- Books Cards Grid -->
      <v-row justify="center">
        <v-col
          v-for="book in books"
          :key="book.id"
          cols="12"
          sm="6"
          md="5"
          lg="4"
        >
          <v-card class="h-100 rounded-3xl border bg-white d-flex flex-column justify-space-between shadow-sm rg-card-border overflow-hidden">
            <div>
              <!-- Book Cover Image -->
              <div class="book-cover-container position-relative bg-blue-darken-3">
                <v-img
                  :src="book.coverImage"
                  height="240"
                  cover
                  class="align-end text-white"
                >
                  <div class="pa-3 book-cover-overlay d-flex justify-space-between align-center w-100">
                    <span class="text-caption font-weight-bold text-white">{{ book.language }}</span>
                  </div>
                </v-img>
              </div>

              <div class="pa-5">
                <div class="d-flex align-center justify-space-between text-caption text-grey mb-1">
                  <span class="font-weight-medium">{{ book.pages }}</span>
                  <span class="text-amber-darken-3 font-weight-bold d-flex align-center">
                    <v-icon icon="mdi-star" size="14" class="mr-1"></v-icon>
                    {{ book.rating }} ({{ book.soldCount }})
                  </span>
                </div>

                <div class="text-h6 font-weight-bold text-secondary mb-2" style="line-height: 1.35;">
                  {{ book.title }}
                </div>

                <p class="text-body-2 text-grey-darken-1 mb-4" style="line-height: 1.55;" :title="book.description">
                  {{ book.description }}
                </p>

                <!-- Pricing -->
                <div class="d-flex align-baseline ga-2 mb-4">
                  <span class="text-h5 font-weight-extrabold text-primary">
                    {{ formatRupiah(book.price) }}
                  </span>
                  <span class="text-caption text-grey text-decoration-line-through">
                    {{ formatRupiah(book.originalPrice) }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Marketplace Buy Buttons -->
            <div class="px-5 pb-5 pt-0 d-flex flex-column ga-2">
              <v-btn
                color="#EE4D2D"
                variant="flat"
                block
                class="text-none font-weight-bold text-white py-2"
                prepend-icon="mdi-shopping"
                :href="book.shopeeUrl"
                target="_blank"
              >
                Beli di Shopee
              </v-btn>
              <v-btn
                color="#03AC0E"
                variant="flat"
                block
                class="text-none font-weight-bold text-white py-2"
                prepend-icon="mdi-storefront"
                :href="book.tokopediaUrl"
                target="_blank"
              >
                Beli di Tokopedia
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { books, truncateText } from '../data/wordishData'

function formatRupiah(val) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(val || 0)
}
</script>

<style scoped>
.book-cover-overlay {
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(15,44,89,0.85) 100%);
}
</style>
