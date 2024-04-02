import { NextResponse } from 'next/server';

export function middleware() {
  const response = NextResponse.next();
  const isBots = false;
  if (isBots) {
    console.log('erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
    return NextResponse.redirect('https://www.google.com/');
  }

  return response;
}

export const config = {
  matcher:
    '/((?!api|_next|static|public|assets|favicon.ico)(?!.*\\.png$)(?!.*\\.jpg$)(?!.*\\.svg$).*)'
};
