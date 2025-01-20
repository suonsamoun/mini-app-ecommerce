import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })
  const isAuth = !!token
  const phone = request.nextUrl.searchParams.get('phone')

  if (phone && !isAuth) {
    try {
      const response = await fetch(`${request.nextUrl.origin}/api/auth/auto-auth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone })
      })

      const data = await response.json()

      if (data.success) {
        const callbackUrl = new URL('/api/auth/callback/credentials', request.url)
        callbackUrl.searchParams.set('phone', data.phone)
        callbackUrl.searchParams.set('password', data.password)
        callbackUrl.searchParams.set('redirect', 'true')
        callbackUrl.searchParams.set('callbackUrl', '/')
        
        return NextResponse.redirect(callbackUrl)
      }
    } catch (error) {
      console.error('Auto-login failed:', error)
    }
  }

  if (!isAuth) {
    const url = new URL('/signin', request.url)
    url.searchParams.set('callbackUrl', request.url)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|signin).*)',
  ]
}