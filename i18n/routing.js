import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['nl', 'en'],
 
  // Used when no locale matches
  defaultLocale: 'nl',
  
  // Configure default locale to be at the root path
  localePrefix: 'as-needed'
});