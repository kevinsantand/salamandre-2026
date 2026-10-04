import { useEffect, useState } from "react"

// Lien « Publier sur le Web » (format CSV) de la Google Sheet des concerts.
// Colonnes : date | ville | lieu | lien (billetterie, facultatif)
export const CONCERTS_CSV_URL = ""

export type Concert = {
  date: Date
  city: string
  venue: string
  url: string
}

function parseCsv(text: string): string[][] {
  const rows: string[][] = []
  let row: string[] = []
  let cell = ""
  let quoted = false
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') {
        cell += '"'
        i++
      } else if (c === '"') quoted = false
      else cell += c
    } else if (c === '"') quoted = true
    else if (c === ",") {
      row.push(cell)
      cell = ""
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++
      row.push(cell)
      rows.push(row)
      row = []
      cell = ""
    } else cell += c
  }
  row.push(cell)
  rows.push(row)
  return rows
}

// Accepte 2026-11-14, 14/11/2026 ou 14/11/26
function parseDate(value: string): Date | null {
  const v = value.trim()
  let m = v.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/)
  if (m) return new Date(+m[1], +m[2] - 1, +m[3])
  m = v.match(/^(\d{1,2})[/.-](\d{1,2})[/.-](\d{2,4})$/)
  if (m) return new Date(m[3].length === 2 ? 2000 + +m[3] : +m[3], +m[2] - 1, +m[1])
  return null
}

export function useConcerts() {
  const [concerts, setConcerts] = useState<Concert[]>([])

  useEffect(() => {
    if (!CONCERTS_CSV_URL) return
    let cancelled = false
    fetch(CONCERTS_CSV_URL)
      .then((r) => (r.ok ? r.text() : Promise.reject(r.status)))
      .then((text) => {
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        const list = parseCsv(text)
          .map(([d = "", city = "", venue = "", url = ""]) => {
            const date = parseDate(d)
            return date ? { date, city: city.trim(), venue: venue.trim(), url: url.trim() } : null
          })
          .filter((c): c is Concert => c !== null && c.date >= today)
          .sort((a, b) => a.date.getTime() - b.date.getTime())
        if (!cancelled) setConcerts(list)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])

  return concerts
}
