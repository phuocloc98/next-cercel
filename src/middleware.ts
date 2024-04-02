import { NextRequest, NextResponse, userAgent } from 'next/server';

export function middleware(req: NextRequest) {
  const response = NextResponse.next();
  const { isBot } = userAgent(req);
  console.log('req.nextUrl.pathname', req.nextUrl.pathname);
  console.log('1111111111111111111111111111111111', isBot);
  console.log('2222222222222222222222222222222222', req.headers.get('isBot'));
  console.log(
    '3333333333333333333333333333333333',
    req.headers.get('user-agent')
  );

  if (req.nextUrl.pathname === '/mypage') {
    const res = NextResponse.next();
    res.cookies.set('access_token', 'access_tokenaccess_token');
    return res;
  }

  if (isBot) {
    return NextResponse.next()
  }

  console.log('=======================', 'run this', isBot);
  if (isBot || req.headers.get('user-agent')?.includes('bot')) {
    console.log('=======================', 'run this', 'lopp');
    return response;
  }


  return response;
}

export const config = {
  matcher:
    '/((?!api|_next|static|public|assets|favicon.ico)(?!.*\\.png$)(?!.*\\.jpg$)(?!.*\\.svg$).*)'
};
