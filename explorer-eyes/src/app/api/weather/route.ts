import { NextRequest, NextResponse } from 'next/server'

const UA = process.env.NWS_USER_AGENT || 'ExplorerEyes (contact@example.com)'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const lat = searchParams.get('lat') ?? '37.7749'
    const lon = searchParams.get('lon') ?? '-122.4194' // SF defaults

    // 1) Resolve forecast grid for this point
    const points = await fetch(
      `https://api.weather.gov/points/${lat},${lon}`,
      { headers: { 'User-Agent': UA, 'Accept': 'application/geo+json' } }
    ).then(r => {
      if (!r.ok) throw new Error('NWS points lookup failed')
      return r.json()
    })

    const forecastUrl = points.properties?.forecast as string
    if (!forecastUrl) throw new Error('No forecast URL from NWS points')

    // 2) Get the forecast (periods with temp/wind/shortForecast)
    const forecast = await fetch(
      forecastUrl,
      { headers: { 'User-Agent': UA, 'Accept': 'application/geo+json' } }
    ).then(r => {
      if (!r.ok) throw new Error('NWS forecast fetch failed')
      return r.json()
    })

    return NextResponse.json({ forecast })
  } catch (err: any) {
    return NextResponse.json({ error: err.message ?? 'Server error' }, { status: 500 })
  }
}