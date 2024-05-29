import { NextResponse } from 'next/server'

export function middleware(request) {
    if (request.nextUrl.pathname.endsWith("/settings")) {
        return NextResponse.rewrite(new URL('/dashboard/settings/account-information', request.url))
    }
}