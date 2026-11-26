import { defineStore } from 'pinia'
import {
  programs as fallbackPrograms,
  batchSchedules as fallbackSchedules
} from '../data/wordishData'

function cloneData(data) {
  return JSON.parse(JSON.stringify(data))
}

function normalizeProgram(item) {
  const originalPrice = Number(item.originalPrice) || 0
  const price = Number(item.price) || 0
  const discountPercent =
    originalPrice > 0 && price < originalPrice
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : Number(item.discountPercent) || 0

  return {
    ...item,
    originalPrice,
    price,
    discountPercent,
    features: Array.isArray(item.features) ? [...item.features] : [],
    isActive: item.isActive !== false
  }
}

async function apiRequest(url, options = {}) {
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    },
    ...options
  })

  const json = await res.json().catch(() => ({}))
  if (!res.ok) {
    throw new Error(json.error || `Request gagal (${res.status})`)
  }
  return json
}

export const useClassesStore = defineStore('classes', {
  state: () => ({
    programs: cloneData(fallbackPrograms).map(normalizeProgram),
    batchSchedules: cloneData(fallbackSchedules),
    loading: false,
    saving: false,
    dbConnected: false,
    lastError: null
  }),

  getters: {
    activePrograms: (state) => state.programs.filter((p) => p.isActive !== false),
    totalPrograms: (state) => state.programs.length,
    activeProgramsCount: (state) => state.programs.filter((p) => p.isActive !== false).length,
    totalSchedules: (state) => state.batchSchedules.length
  },

  actions: {
    async fetchAll() {
      this.loading = true
      this.lastError = null
      try {
        const [progRes, schedRes] = await Promise.all([
          apiRequest('/api/programs'),
          apiRequest('/api/schedules')
        ])
        this.programs = (progRes.data || []).map(normalizeProgram)
        this.batchSchedules = schedRes.data || []
        this.dbConnected = true
      } catch (err) {
        this.dbConnected = false
        this.lastError = err.message || 'Gagal terhubung ke server SQLite'
      } finally {
        this.loading = false
      }
    },

    // --- PROGRAM KELAS CRUD ---
    async addProgram(payload) {
      this.saving = true
      this.lastError = null
      try {
        const res = await apiRequest('/api/programs', {
          method: 'POST',
          body: JSON.stringify(payload)
        })
        const created = normalizeProgram(res.data)
        this.programs.unshift(created)
        this.dbConnected = true
        return created
      } catch (err) {
        this.lastError = err.message
        throw err
      } finally {
        this.saving = false
      }
    },

    async updateProgram(id, payload) {
      this.saving = true
      this.lastError = null
      try {
        const res = await apiRequest(`/api/programs/${encodeURIComponent(id)}`, {
          method: 'PUT',
          body: JSON.stringify(payload)
        })
        const updated = normalizeProgram(res.data)
        const idx = this.programs.findIndex((p) => p.id === id)
        if (idx !== -1) {
          this.programs[idx] = updated
        }
        this.dbConnected = true
        return updated
      } catch (err) {
        this.lastError = err.message
        throw err
      } finally {
        this.saving = false
      }
    },

    async duplicateProgram(id) {
      this.saving = true
      this.lastError = null
      try {
        const res = await apiRequest(`/api/programs/${encodeURIComponent(id)}/duplicate`, {
          method: 'POST'
        })
        const copy = normalizeProgram(res.data)
        this.programs.unshift(copy)
        this.dbConnected = true
        return copy
      } catch (err) {
        this.lastError = err.message
        throw err
      } finally {
        this.saving = false
      }
    },

    async toggleProgramStatus(id) {
      this.saving = true
      this.lastError = null
      try {
        const res = await apiRequest(`/api/programs/${encodeURIComponent(id)}/toggle`, {
          method: 'PATCH'
        })
        const updated = normalizeProgram(res.data)
        const idx = this.programs.findIndex((p) => p.id === id)
        if (idx !== -1) {
          this.programs[idx] = updated
        }
        this.dbConnected = true
        return updated
      } catch (err) {
        this.lastError = err.message
        throw err
      } finally {
        this.saving = false
      }
    },

    async deleteProgram(id) {
      this.saving = true
      this.lastError = null
      try {
        await apiRequest(`/api/programs/${encodeURIComponent(id)}`, {
          method: 'DELETE'
        })
        const idx = this.programs.findIndex((p) => p.id === id)
        if (idx !== -1) {
          this.programs.splice(idx, 1)
        }
        this.dbConnected = true
        return true
      } catch (err) {
        this.lastError = err.message
        throw err
      } finally {
        this.saving = false
      }
    },

    // --- JADWAL KELAS CRUD ---
    async addSchedule(payload) {
      this.saving = true
      this.lastError = null
      try {
        const res = await apiRequest('/api/schedules', {
          method: 'POST',
          body: JSON.stringify(payload)
        })
        const created = res.data
        this.batchSchedules.push(created)
        this.dbConnected = true
        return created
      } catch (err) {
        this.lastError = err.message
        throw err
      } finally {
        this.saving = false
      }
    },

    async updateSchedule(id, payload) {
      this.saving = true
      this.lastError = null
      try {
        const res = await apiRequest(`/api/schedules/${encodeURIComponent(id)}`, {
          method: 'PUT',
          body: JSON.stringify(payload)
        })
        const updated = res.data
        const idx = this.batchSchedules.findIndex((s) => s.id === id)
        if (idx !== -1) {
          this.batchSchedules[idx] = updated
        }
        this.dbConnected = true
        return updated
      } catch (err) {
        this.lastError = err.message
        throw err
      } finally {
        this.saving = false
      }
    },

    async deleteSchedule(id) {
      this.saving = true
      this.lastError = null
      try {
        await apiRequest(`/api/schedules/${encodeURIComponent(id)}`, {
          method: 'DELETE'
        })
        const idx = this.batchSchedules.findIndex((s) => s.id === id)
        if (idx !== -1) {
          this.batchSchedules.splice(idx, 1)
        }
        this.dbConnected = true
        return true
      } catch (err) {
        this.lastError = err.message
        throw err
      } finally {
        this.saving = false
      }
    },

    // --- RESET ---
    async resetToDefaults() {
      this.saving = true
      this.lastError = null
      try {
        const res = await apiRequest('/api/reset', {
          method: 'POST'
        })
        this.programs = (res.data?.programs || []).map(normalizeProgram)
        this.batchSchedules = res.data?.batchSchedules || []
        this.dbConnected = true
      } catch (err) {
        this.lastError = err.message
        throw err
      } finally {
        this.saving = false
      }
    }
  }
})
