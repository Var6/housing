import { NextResponse, type NextRequest } from 'next/server'
import { ADMIN_COOKIE, verifyAdminToken } from '@/lib/admin-auth'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const isAdminPage = pathname.startsWith('/Admin/dashboard')
  const isAdminApi = pathname.startsWith('/api/admin') && !pathname.startsWith('/api/admin/login')

  if (!isAdminPage && !isAdminApi) {
    return NextResponse.next()
  }

  const token = request.cookies.get(ADMIN_COOKIE)?.value
  if (!token) {
    if (isAdminApi) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    return NextResponse.redirect(new URL('/Admin', request.url))
  }

  const valid = await verifyAdminToken(token)
  if (valid) {
    return NextResponse.next()
  }

  if (isAdminApi) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return NextResponse.redirect(new URL('/Admin', request.url))
}

export const config = {
  matcher: ['/Admin/:path*', '/api/admin/:path*'],
}
