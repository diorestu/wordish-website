import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  DB_PATH,
  getAllPrograms,
  createProgram,
  updateProgram,
  toggleProgramStatus,
  duplicateProgram,
  deleteProgram,
  getAllSchedules,
  createSchedule,
  updateSchedule,
  deleteSchedule,
  resetAllToDefaults
} from './db.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST_DIR = path.resolve(__dirname, '../dist')
const PORT = Number(process.env.PORT) || 3001

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject'
}

function sendJson(res, status, data) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  })
  res.end(JSON.stringify(data))
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let raw = ''
    req.on('data', (chunk) => {
      raw += chunk
      if (raw.length > 1_000_000) {
        reject(new Error('Payload terlalu besar'))
      }
    })
    req.on('end', () => {
      if (!raw) return resolve({})
      try {
        resolve(JSON.parse(raw))
      } catch {
        reject(new Error('Format JSON tidak valid'))
      }
    })
    req.on('error', reject)
  })
}

function serveStatic(reqPath, res) {
  if (!fs.existsSync(DIST_DIR)) {
    sendJson(res, 404, { error: 'Route tidak ditemukan' })
    return
  }

  const safePath = path.normalize(reqPath).replace(/^(\.\.[/\\])+/, '')
  let filePath = path.join(DIST_DIR, safePath === '/' ? 'index.html' : safePath)

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(DIST_DIR, 'index.html')
  }

  const ext = path.extname(filePath).toLowerCase()
  const contentType = MIME_TYPES[ext] || 'application/octet-stream'
  res.writeHead(200, { 'Content-Type': contentType })
  fs.createReadStream(filePath).pipe(res)
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'OPTIONS') {
    sendJson(res, 204, {})
    return
  }

  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`)
  const pathname = url.pathname

  try {
    // Health check
    if (req.method === 'GET' && pathname === '/api/health') {
      sendJson(res, 200, { ok: true, dbPath: DB_PATH })
      return
    }

    // --- PROGRAMS API ---
    if (req.method === 'GET' && pathname === '/api/programs') {
      sendJson(res, 200, { data: getAllPrograms() })
      return
    }

    if (req.method === 'POST' && pathname === '/api/programs') {
      const body = await readBody(req)
      if (!body.title || !body.languageId) {
        sendJson(res, 400, { error: 'Nama program dan bahasa wajib diisi' })
        return
      }
      const created = createProgram(body)
      sendJson(res, 201, { data: created })
      return
    }

    const progToggleMatch = pathname.match(/^\/api\/programs\/([^/]+)\/toggle$/)
    if (req.method === 'PATCH' && progToggleMatch) {
      const updated = toggleProgramStatus(decodeURIComponent(progToggleMatch[1]))
      if (!updated) return sendJson(res, 404, { error: 'Program tidak ditemukan' })
      sendJson(res, 200, { data: updated })
      return
    }

    const progDupMatch = pathname.match(/^\/api\/programs\/([^/]+)\/duplicate$/)
    if (req.method === 'POST' && progDupMatch) {
      const copy = duplicateProgram(decodeURIComponent(progDupMatch[1]))
      if (!copy) return sendJson(res, 404, { error: 'Program tidak ditemukan' })
      sendJson(res, 201, { data: copy })
      return
    }

    const progIdMatch = pathname.match(/^\/api\/programs\/([^/]+)$/)
    if (progIdMatch) {
      const id = decodeURIComponent(progIdMatch[1])
      if (req.method === 'PUT') {
        const body = await readBody(req)
        const updated = updateProgram(id, body)
        if (!updated) return sendJson(res, 404, { error: 'Program tidak ditemukan' })
        sendJson(res, 200, { data: updated })
        return
      }
      if (req.method === 'DELETE') {
        const ok = deleteProgram(id)
        if (!ok) return sendJson(res, 404, { error: 'Program tidak ditemukan' })
        sendJson(res, 200, { deleted: true })
        return
      }
    }

    // --- SCHEDULES API ---
    if (req.method === 'GET' && pathname === '/api/schedules') {
      sendJson(res, 200, { data: getAllSchedules() })
      return
    }

    if (req.method === 'POST' && pathname === '/api/schedules') {
      const body = await readBody(req)
      if (!body.time || !body.className) {
        sendJson(res, 400, { error: 'Jam dan nama kelas wajib diisi' })
        return
      }
      const created = createSchedule(body)
      sendJson(res, 201, { data: created })
      return
    }

    const schedIdMatch = pathname.match(/^\/api\/schedules\/(\d+)$/)
    if (schedIdMatch) {
      const id = Number(schedIdMatch[1])
      if (req.method === 'PUT') {
        const body = await readBody(req)
        const updated = updateSchedule(id, body)
        if (!updated) return sendJson(res, 404, { error: 'Jadwal tidak ditemukan' })
        sendJson(res, 200, { data: updated })
        return
      }
      if (req.method === 'DELETE') {
        const ok = deleteSchedule(id)
        if (!ok) return sendJson(res, 404, { error: 'Jadwal tidak ditemukan' })
        sendJson(res, 200, { deleted: true })
        return
      }
    }

    // --- RESET ---
    if (req.method === 'POST' && pathname === '/api/reset') {
      const resetData = resetAllToDefaults()
      sendJson(res, 200, { data: resetData })
      return
    }

    if (pathname.startsWith('/api/')) {
      sendJson(res, 404, { error: 'Endpoint API tidak ditemukan' })
      return
    }

    serveStatic(pathname, res)
  } catch (err) {
    sendJson(res, 500, { error: err.message || 'Terjadi kesalahan server' })
  }
})

server.listen(PORT, () => {
  console.log(`Wordish SQLite API server running at http://localhost:${PORT}`)
  console.log(`Database file: ${DB_PATH}`)
})
