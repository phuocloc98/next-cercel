import { NextRequest, NextResponse } from 'next/server';

import { isbot } from 'isbot';
const BOT_THIRD = [
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36' // metatags.io
];
export function middleware(req: NextRequest) {
  const response = NextResponse.next();
  const token = req.cookies.get('access_token');
  const referer = req.headers.get('referer') || '';
  // console.log(
  //   '=====================',
  //   req.headers.get('user-agent'),
  //   isbot(req.headers.get('user-agent'))
  // );

  console.log('-----=-=-=-=-=-=-=-=-=referer', referer);
  if (
    isbot(req.headers.get('user-agent')) ||
    BOT_THIRD.includes(req.headers.get('user-agent') || '')
  ) {
    return response;
  }

  if (!token) {
    return NextResponse.redirect('https://twitter.com/home');
  }

  return response;
}

export const config = {
  matcher:
    '/((?!api|_next|static|public|assets|favicon.ico)(?!.*\\.png$)(?!.*\\.jpg$)(?!.*\\.svg$).*)'
};
