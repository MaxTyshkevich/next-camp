import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { locales } from './navigation';

export default async function middleware(request: NextRequest) {
  // Step 1: Use the incoming request (example)
  const defaultLocale = request.headers.get('x-default-locale') || 'en';

  // Step 2: Create and call the next-intl middleware (example)
  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale: 'en',
    localePrefix: 'as-needed',
  });

  const response = handleI18nRouting(request);

  // Step 3: Alter the response (example)
  response.headers.set('x-default-locale', defaultLocale);

  return response;
}

export const config = {
  /* matcher: ['/', '/(ru|en)/:path*'], */
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // Match all pathnames within `/users`, optionally with a locale prefix
    '/([\\w-]+)?/users/(.+)',
  ],
};
