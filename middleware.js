import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest } from 'next/server';

// Read the lang_pref cookie and override Accept-Language
export default function middleware(request) {
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
    '/((?!api|trpc|_next|terms-and-conditions|privacy-policy|algemene-voorwaarden|privacyverklaring|_vercel|.*\\..*).*)'
  ]
};
