import { NextResponse } from 'next/server'
import {
  ADMIN_COOKIE,
  createAdminToken,
  getConfiguredAdminPassword,
  getConfiguredAdminUsername,
} from '@/lib/admin-auth'

export async function POST(request: Request) {
  const body = await request.json()
  const username = String(body?.username || '')
  const password = String(body?.password || '')

  if (username !== getConfiguredAdminUsername() || password !== getConfiguredAdminPassword()) {
    return NextResponse.json({ error: 'Invalid username or password' }, { status: 401 })
  }

  const token = await createAdminToken(username)
  const response = NextResponse.json({ ok: true })
  response.cookies.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 12,
  })

  return response
}
