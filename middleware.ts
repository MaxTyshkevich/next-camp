import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

export default async function middleware(request: NextRequest) {
  // Step 1: Use the incoming request (example)
  const defaultLocale = request.headers.get('x-default-locale') || 'en';

  // Step 2: Create and call the next-intl middleware (example)
  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale: 'en',
  });

  const response = handleI18nRouting(request);

  // Step 3: Alter the response (example)
  response.headers.set('x-default-locale', defaultLocale);

  return response;
}

export const config = {
  matcher: ['/', '/(ru|en)/:path*'],
};

export const locales = ['en', 'ru'];
