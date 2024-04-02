import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const response = NextResponse.next();
  const token = req.cookies.get('access_token');
  console.log(
    '================================',
    req.headers.get('user-agent')
  );
  if (token) {
    console.log('erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
    return NextResponse.redirect('https://www.google.com/');
  }

  return response;
}

export const config = {
  matcher:
    '/((?!api|_next|static|public|assets|favicon.ico)(?!.*\\.png$)(?!.*\\.jpg$)(?!.*\\.svg$).*)'
};
