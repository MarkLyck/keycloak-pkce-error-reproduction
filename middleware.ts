import { auth } from '@/auth'

export default auth(async (req) => {
  // If user is not authenticated, redirect to signin page
  if (
    !req.auth &&
    req.nextUrl.pathname !== '/auth/login' &&
    req.nextUrl.pathname !== '/api/auth/force-signin'
  ) {
    return Response.redirect(new URL('/api/auth/force-signin', req.url))
  }
})

// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - icons (public folder)
     * - images (public folder)
     * - logos (public folder)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|icons|images|logos).*)',
  ],
}
