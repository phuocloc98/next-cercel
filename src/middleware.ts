import { NextRequest, NextResponse, userAgent } from 'next/server';

import { isbot } from 'isbot';

export function middleware(req: NextRequest) {
  const response = NextResponse.next();
  const token = req.cookies.get('access_token');
  const { isBot } = userAgent(req);
  console.log('req.nextUrl.pathname', req.nextUrl.pathname);
  console.log('1111111111111111111111111111111111', isBot);
  console.log('2222222222222222222222222222222222', req.headers.get('isBot'));
  console.log(
    '3333333333333333333333333333333333',
    req.headers.get('user-agent')
  );
  console.log(
    '444444444444444444444444444444444',
    isbot(req.headers.get('user-agent'))
  );
  if (req.nextUrl.pathname === '/mypage') {
    const res = NextResponse.next();
    res.cookies.set('access_token', 'access_tokenaccess_token');
    return res;
  }
  if (!token && req.nextUrl.pathname !== '/mypage') {
    console.log('================================');
    return NextResponse.redirect('https://www.google.com/');
  }
  return response;
}

export const config = {
  matcher:
    '/((?!api|_next|static|public|assets|favicon.ico)(?!.*\\.png$)(?!.*\\.jpg$)(?!.*\\.svg$).*)'
};
