import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware({
  ...routing,
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
});

export const config = {
  matcher: [
    '/((?!api|trpc|_next|terms-and-conditions|privacy-policy|algemene-voorwaarden|privacyverklaring|_vercel|.*\\..*).*)'
  ]
};
