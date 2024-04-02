import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const response = NextResponse.next();
  const token = req.cookies.get('access_token');
  const isBot = true;
  if (isBot) {
    response.cookies.set('access_token', token?.value || '');
  }

  if (!token) {
    console.log('erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
    return NextResponse.redirect('https://www.google.com/');
  }

  return response;
}

export const config = {
  matcher:
    '/((?!api|_next|static|public|assets|favicon.ico)(?!.*\\.png$)(?!.*\\.jpg$)(?!.*\\.svg$).*)'
};
