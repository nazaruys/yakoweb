import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

// Read the lang_pref cookie and override Accept-Language
export default function middleware(request) {
  const url = request.nextUrl.clone();
  const langParam = url.searchParams.get('lang');
  
  // Handle ?lang= parameter
  if (langParam && routing.locales.includes(langParam)) {
    // Remove the lang parameter from URL
    url.searchParams.delete('lang');
    
    // Create response with redirect
    const response = NextResponse.redirect(url);
    
    // Set the cookie
    response.cookies.set('lang_pref', langParam, {
      maxAge: 60 * 60 * 24 * 365, // 1 year
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    });
    
    return response;
  }

  const cookieLang = request.cookies.get('lang_pref')?.value;

  // Clone the request and override the Accept-Language header
  const rewrittenRequest = new NextRequest(request);
  if (cookieLang && routing.locales.includes(cookieLang)) {
    rewrittenRequest.headers.set('accept-language', cookieLang);
  }

  // Call next-intl middleware with overridden headers
  return createMiddleware({
    ...routing,
    locales: routing.locales,
    defaultLocale: routing.defaultLocale,
  })(rewrittenRequest);
}

export const config = {
  matcher: [
    '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
  ]
};
