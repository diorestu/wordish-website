import { DatabaseSync } from 'node:sqlite'
import crypto from 'node:crypto'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  programs as defaultPrograms,
  batchSchedules as defaultSchedules
} from '../src/data/wordishData.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DB_PATH = path.join(__dirname, 'wordish.db')

const db = new DatabaseSync(DB_PATH)

db.exec(`
  PRAGMA journal_mode = WAL;

  CREATE TABLE IF NOT EXISTS admin_users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'Admin Akademik',
    password_hash TEXT NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS admin_sessions (
    token TEXT PRIMARY KEY,
    admin_id INTEGER NOT NULL,
    expires_at TEXT NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (admin_id) REFERENCES admin_users(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS programs (
    id TEXT PRIMARY KEY,
    language_id TEXT NOT NULL,
    title TEXT NOT NULL,
    level TEXT NOT NULL,
    duration TEXT NOT NULL,
    mode TEXT NOT NULL,
    original_price INTEGER NOT NULL DEFAULT 0,
    price INTEGER NOT NULL DEFAULT 0,
    discount_percent INTEGER NOT NULL DEFAULT 0,
    badge TEXT DEFAULT '',
    badge_color TEXT DEFAULT 'accent',
    summary TEXT NOT NULL,
    features TEXT NOT NULL DEFAULT '[]',
    next_batch TEXT NOT NULL,
    is_active INTEGER NOT NULL DEFAULT 1,
    sort_order INTEGER NOT NULL DEFAULT 0,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS batch_schedules (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    time TEXT NOT NULL,
    time_label TEXT NOT NULL,
    class_name TEXT NOT NULL,
    language TEXT NOT NULL,
    category TEXT NOT NULL,
    category_badge_color TEXT NOT NULL DEFAULT 'teal',
    age_group TEXT DEFAULT '',
    focus TEXT NOT NULL,
    days TEXT NOT NULL,
    mode TEXT NOT NULL,
    modes TEXT NOT NULL DEFAULT '[]',
    quota TEXT NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP
  );
`)

function computeDiscount(originalPrice, price, fallback = 0) {
  const orig = Number(originalPrice) || 0
  const promo = Number(price) || 0
  if (orig > 0 && promo < orig) {
    return Math.round(((orig - promo) / orig) * 100)
  }
  return Number(fallback) || 0
}

function mapProgramRow(row) {
  if (!row) return null
  return {
    id: row.id,
    languageId: row.language_id,
    title: row.title,
    level: row.level,
    duration: row.duration,
    mode: row.mode,
    originalPrice: row.original_price,
    price: row.price,
    discountPercent: row.discount_percent,
    badge: row.badge,
    badgeColor: row.badge_color,
    summary: row.summary,
    features: JSON.parse(row.features || '[]'),
    nextBatch: row.next_batch,
    isActive: Boolean(row.is_active)
  }
}

function mapScheduleRow(row) {
  if (!row) return null
  return {
    id: row.id,
    time: row.time,
    timeLabel: row.time_label,
    className: row.class_name,
    language: row.language,
    category: row.category,
    categoryBadgeColor: row.category_badge_color,
    ageGroup: row.age_group,
    focus: row.focus,
    days: row.days,
    mode: row.mode,
    modes: JSON.parse(row.modes || '[]'),
    quota: row.quota
  }
}

function seedPrograms() {
  const insert = db.prepare(`
    INSERT INTO programs (
      id, language_id, title, level, duration, mode,
      original_price, price, discount_percent, badge, badge_color,
      summary, features, next_batch, is_active, sort_order
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `)

  defaultPrograms.forEach((p, index) => {
    insert.run(
      p.id,
      p.languageId,
      p.title,
      p.level,
      p.duration,
      p.mode,
      Number(p.originalPrice) || 0,
      Number(p.price) || 0,
      computeDiscount(p.originalPrice, p.price, p.discountPercent),
      p.badge || '',
      p.badgeColor || 'accent',
      p.summary || '',
      JSON.stringify(Array.isArray(p.features) ? p.features : []),
      p.nextBatch || '',
      p.isActive === false ? 0 : 1,
      index + 1
    )
  })
}

function seedSchedules() {
  const insert = db.prepare(`
    INSERT INTO batch_schedules (
      id, time, time_label, class_name, language, category,
      category_badge_color, age_group, focus, days, mode, modes, quota
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `)

  defaultSchedules.forEach((s) => {
    insert.run(
      s.id,
      s.time,
      s.timeLabel || `${s.time} WIB`,
      s.className,
      s.language,
      s.category,
      s.categoryBadgeColor || 'teal',
      s.ageGroup || '',
      s.focus || '',
      s.days || '',
      s.mode || '',
      JSON.stringify(Array.isArray(s.modes) ? s.modes : []),
      s.quota || ''
    )
  })
}

export function ensureSeeded() {
  const adminCount = db.prepare('SELECT COUNT(*) AS count FROM admin_users').get().count
  if (adminCount === 0) {
    seedDefaultAdmin()
  }
  const progCount = db.prepare('SELECT COUNT(*) AS count FROM programs').get().count
  if (progCount === 0) {
    seedPrograms()
  }
  const schedCount = db.prepare('SELECT COUNT(*) AS count FROM batch_schedules').get().count
  if (schedCount === 0) {
    seedSchedules()
  }
}

function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex')
  const derived = crypto.scryptSync(password, salt, 64).toString('hex')
  return `${salt}:${derived}`
}

function verifyPassword(password, storedHash) {
  const [salt, key] = String(storedHash).split(':')
  if (!salt || !key) return false
  const derived = crypto.scryptSync(password, salt, 64)
  const keyBuf = Buffer.from(key, 'hex')
  if (derived.length !== keyBuf.length) return false
  return crypto.timingSafeEqual(derived, keyBuf)
}

function seedDefaultAdmin() {
  db.prepare(`
    INSERT INTO admin_users (username, email, name, role, password_hash)
    VALUES (?, ?, ?, ?, ?)
  `).run(
    'admin',
    'admin@wordish.id',
    'Administrator Wordish',
    'Super Admin',
    hashPassword('wordish2026')
  )
}

export function authenticateAdmin(identifier, password) {
  const normalized = String(identifier || '').trim().toLowerCase()
  const admin = db.prepare(`
    SELECT * FROM admin_users WHERE lower(username) = ? OR lower(email) = ?
  `).get(normalized, normalized)

  if (!admin || !verifyPassword(String(password || ''), admin.password_hash)) {
    return null
  }

  const token = crypto.randomBytes(32).toString('hex')
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()

  db.prepare(`
    INSERT INTO admin_sessions (token, admin_id, expires_at) VALUES (?, ?, ?)
  `).run(token, admin.id, expiresAt)

  return {
    token,
    admin: {
      id: admin.id,
      username: admin.username,
      email: admin.email,
      name: admin.name,
      role: admin.role
    }
  }
}

export function verifyAdminToken(token) {
  if (!token) return null
  const row = db.prepare(`
    SELECT s.token, s.expires_at, u.id, u.username, u.email, u.name, u.role
    FROM admin_sessions s
    JOIN admin_users u ON u.id = s.admin_id
    WHERE s.token = ?
  `).get(token)

  if (!row) return null
  if (new Date(row.expires_at).getTime() < Date.now()) {
    db.prepare('DELETE FROM admin_sessions WHERE token = ?').run(token)
    return null
  }

  return {
    id: row.id,
    username: row.username,
    email: row.email,
    name: row.name,
    role: row.role
  }
}

export function revokeAdminToken(token) {
  if (!token) return false
  const info = db.prepare('DELETE FROM admin_sessions WHERE token = ?').run(token)
  return info.changes > 0
}

ensureSeeded()

export function getAllPrograms() {
  const rows = db.prepare('SELECT * FROM programs ORDER BY sort_order ASC, created_at DESC').all()
  return rows.map(mapProgramRow)
}

export function createProgram(payload) {
  const slug = (payload.title || 'kelas')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 28)
  const id = `${payload.languageId || 'cls'}-${slug}-${Date.now().toString().slice(-4)}`
  const minSort = db.prepare('SELECT COALESCE(MIN(sort_order), 1) AS min_sort FROM programs').get().min_sort
  const discountPercent = computeDiscount(payload.originalPrice, payload.price, payload.discountPercent)

  db.prepare(`
    INSERT INTO programs (
      id, language_id, title, level, duration, mode,
      original_price, price, discount_percent, badge, badge_color,
      summary, features, next_batch, is_active, sort_order
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    id,
    payload.languageId,
    payload.title,
    payload.level,
    payload.duration,
    payload.mode,
    Number(payload.originalPrice) || 0,
    Number(payload.price) || 0,
    discountPercent,
    payload.badge || '',
    payload.badgeColor || 'accent',
    payload.summary || '',
    JSON.stringify(Array.isArray(payload.features) ? payload.features : []),
    payload.nextBatch || '',
    payload.isActive === false ? 0 : 1,
    minSort - 1
  )

  return mapProgramRow(db.prepare('SELECT * FROM programs WHERE id = ?').get(id))
}

export function updateProgram(id, payload) {
  const existing = db.prepare('SELECT * FROM programs WHERE id = ?').get(id)
  if (!existing) return null

  const originalPrice = payload.originalPrice !== undefined ? Number(payload.originalPrice) : existing.original_price
  const price = payload.price !== undefined ? Number(payload.price) : existing.price
  const discountPercent = computeDiscount(originalPrice, price)

  db.prepare(`
    UPDATE programs SET
      language_id = ?,
      title = ?,
      level = ?,
      duration = ?,
      mode = ?,
      original_price = ?,
      price = ?,
      discount_percent = ?,
      badge = ?,
      badge_color = ?,
      summary = ?,
      features = ?,
      next_batch = ?,
      is_active = ?,
      updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `).run(
    payload.languageId ?? existing.language_id,
    payload.title ?? existing.title,
    payload.level ?? existing.level,
    payload.duration ?? existing.duration,
    payload.mode ?? existing.mode,
    originalPrice,
    price,
    discountPercent,
    payload.badge ?? existing.badge,
    payload.badgeColor ?? existing.badge_color,
    payload.summary ?? existing.summary,
    payload.features !== undefined ? JSON.stringify(payload.features) : existing.features,
    payload.nextBatch ?? existing.next_batch,
    payload.isActive === undefined ? existing.is_active : (payload.isActive ? 1 : 0),
    id
  )

  return mapProgramRow(db.prepare('SELECT * FROM programs WHERE id = ?').get(id))
}

export function toggleProgramStatus(id) {
  const existing = db.prepare('SELECT * FROM programs WHERE id = ?').get(id)
  if (!existing) return null
  const nextActive = existing.is_active ? 0 : 1
  db.prepare('UPDATE programs SET is_active = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?').run(nextActive, id)
  return mapProgramRow(db.prepare('SELECT * FROM programs WHERE id = ?').get(id))
}

export function duplicateProgram(id) {
  const existing = mapProgramRow(db.prepare('SELECT * FROM programs WHERE id = ?').get(id))
  if (!existing) return null
  return createProgram({
    ...existing,
    title: `${existing.title} (Salinan)`
  })
}

export function deleteProgram(id) {
  const info = db.prepare('DELETE FROM programs WHERE id = ?').run(id)
  return info.changes > 0
}

export function getAllSchedules() {
  const rows = db.prepare('SELECT * FROM batch_schedules ORDER BY id ASC').all()
  return rows.map(mapScheduleRow)
}

export function createSchedule(payload) {
  const timeLabel = payload.time ? `${payload.time} WIB` : (payload.timeLabel || '')
  const info = db.prepare(`
    INSERT INTO batch_schedules (
      time, time_label, class_name, language, category,
      category_badge_color, age_group, focus, days, mode, modes, quota
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    payload.time,
    timeLabel,
    payload.className,
    payload.language,
    payload.category,
    payload.categoryBadgeColor || 'teal',
    payload.ageGroup || '',
    payload.focus || '',
    payload.days || '',
    payload.mode || '',
    JSON.stringify(Array.isArray(payload.modes) ? payload.modes : []),
    payload.quota || ''
  )

  return mapScheduleRow(db.prepare('SELECT * FROM batch_schedules WHERE id = ?').get(info.lastInsertRowid))
}

export function updateSchedule(id, payload) {
  const existing = db.prepare('SELECT * FROM batch_schedules WHERE id = ?').get(id)
  if (!existing) return null

  const time = payload.time ?? existing.time
  const timeLabel = payload.time ? `${payload.time} WIB` : existing.time_label

  db.prepare(`
    UPDATE batch_schedules SET
      time = ?,
      time_label = ?,
      class_name = ?,
      language = ?,
      category = ?,
      category_badge_color = ?,
      age_group = ?,
      focus = ?,
      days = ?,
      mode = ?,
      modes = ?,
      quota = ?,
      updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `).run(
    time,
    timeLabel,
    payload.className ?? existing.class_name,
    payload.language ?? existing.language,
    payload.category ?? existing.category,
    payload.categoryBadgeColor ?? existing.category_badge_color,
    payload.ageGroup ?? existing.age_group,
    payload.focus ?? existing.focus,
    payload.days ?? existing.days,
    payload.mode ?? existing.mode,
    payload.modes !== undefined ? JSON.stringify(payload.modes) : existing.modes,
    payload.quota ?? existing.quota,
    id
  )

  return mapScheduleRow(db.prepare('SELECT * FROM batch_schedules WHERE id = ?').get(id))
}

export function deleteSchedule(id) {
  const info = db.prepare('DELETE FROM batch_schedules WHERE id = ?').run(id)
  return info.changes > 0
}

export function resetAllToDefaults() {
  db.exec('DELETE FROM programs; DELETE FROM batch_schedules; DELETE FROM sqlite_sequence WHERE name="batch_schedules";')
  seedPrograms()
  seedSchedules()
  return {
    programs: getAllPrograms(),
    batchSchedules: getAllSchedules()
  }
}

export { DB_PATH }
