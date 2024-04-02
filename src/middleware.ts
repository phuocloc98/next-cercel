import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const response = NextResponse.next();

  if (req.nextUrl.pathname === '/mypage') {
    response.cookies.set('access_token', '1');
  }

  if (!req.headers.get('cookie')?.includes('token')) {
    return NextResponse.redirect('https://www.google.com/');
  }

  return response;
}

export const config = {
  matcher:
    '/((?!api|_next|static|public|assets|favicon.ico)(?!.*\\.png$)(?!.*\\.jpg$)(?!.*\\.svg$).*)'
};
