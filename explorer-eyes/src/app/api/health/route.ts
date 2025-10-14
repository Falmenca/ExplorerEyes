import { NextRequest, NextResponse } from 'next/server'

const CDC_BASE = 'https://tools.cdc.gov/api/v2/resources/media'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const q = searchParams.get('q') ?? 'wildfire smoke' // default topic
  const max = searchParams.get('max') ?? '10'

  // Simple full-text search across CDC syndicated content
  const url = `${CDC_BASE}?max=${encodeURIComponent(max)}&query=${encodeURIComponent(q)}`
  const data = await fetch(url).then(r => {
    if (!r.ok) throw new Error('CDC content request failed')
    return r.json()
  })

  // Return the important bits only
  const results = (data?.results ?? []).map((m: any) => ({
    id: m.id,
    title: m.name,
    url: m.url,
    source: m.organization?.name,
    date: m.dateContentUpdated || m.datePublished || m.dateCreated,
  }))

  return NextResponse.json({ query: q, results })
}
