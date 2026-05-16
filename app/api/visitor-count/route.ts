import { NextResponse } from 'next/server'

// Simple in-memory counter for demo purposes. Resets when the server restarts.
let VISITOR_COUNT = 0

export async function GET() {
  VISITOR_COUNT += 1
  return NextResponse.json({ count: VISITOR_COUNT })
}
