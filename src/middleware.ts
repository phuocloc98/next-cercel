import { NextRequest, NextResponse, userAgent } from 'next/server';

export function middleware(req: NextRequest) {
  const response = NextResponse.next();
  const { isBot } = userAgent(req);

  const token = req.cookies.get('access_token');

  if (req.nextUrl.pathname === '/mypage') {
    const res = NextResponse.next();
    res.cookies.set('access_token', 'access_tokenaccess_token');
    return res;
  }

  if (isBot) {
    response.cookies.set('access_token', '');
  }

  if (!token) {
    return NextResponse.rewrite('https://www.google.com/');
  }
}

export const config = {
  matcher:
    '/((?!api|_next|static|public|assets|favicon.ico)(?!.*\\.png$)(?!.*\\.jpg$)(?!.*\\.svg$).*)'
};
