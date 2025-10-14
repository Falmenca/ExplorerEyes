// src/app/api/ai/route.ts
import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json()
    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json({ error: 'Missing prompt' }, { status: 400 })
    }

    // Responses API (recommended)
    const resp = await openai.responses.create({
      model: 'gpt-5',            // pick your model
      input: prompt,
    })

    // Helper exposed by SDK to get the text output
    const text = resp.output_text ?? ''

    return NextResponse.json({ text, raw: resp })
  } catch (err: any) {
    console.error(err)
    return NextResponse.json(
      { error: err?.message ?? 'Server error' },
      { status: 500 }
    )
  }
}

