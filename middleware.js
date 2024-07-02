import { NextResponse } from 'next/server';
import { getCookie, setCookie } from 'cookies-next';

const locales = ['en', 'ar'];
const defaultLocale = 'en';

export function middleware(request) {
    const { pathname, searchParams } = request.nextUrl;
    let locale = getCookie('NEXT_LOCALE', { req: request }) || defaultLocale;

    console.log("locale", locale);

    // Set the locale cookie
    const response = NextResponse.next();
    setCookie('NEXT_LOCALE', locale, { req: request, res: response, path: '/' });

    // Rewrite specific path for settings
    if (pathname.endsWith('/settings')) {
        return NextResponse.rewrite(new URL(`/${locale}/dashboard/settings/account-information`, request.url));
    }

    // Check if the pathname already includes a locale
    const pathnameHasLocale = locales.some(
        (loc) => pathname.startsWith(`/${loc}/`) || pathname === `/${loc}`
    );

    if (pathnameHasLocale) {
        // Check if the locale in the URL matches the locale in the cookie
        const urlLocale = pathname.split('/')[1];
        if (urlLocale !== locale) {
            // If not, redirect to the URL with the correct locale
            const correctedUrl = new URL(`/${locale}${pathname.substring(3)}`, request.url);
            correctedUrl.search = searchParams.toString(); // Preserve query parameters
            return NextResponse.redirect(correctedUrl);
        }
        return response;
    }

    // Redirect to the URL with the locale
    const redirectUrl = new URL(`/${locale}/${pathname}`, request.url);
    redirectUrl.search = searchParams.toString(); // Preserve query parameters

    // Redirect to the URL with the locale
    return NextResponse.redirect(redirectUrl);
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next).*)',
    ],
};
