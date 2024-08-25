import createMiddleware from 'next-intl/middleware';
import { locales } from './locales';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales,
 
  // Used when no locale matches
  defaultLocale: 'en'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(pt-BR|en)/:path*']
};