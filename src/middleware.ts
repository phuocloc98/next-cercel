import { NextRequest, NextResponse } from 'next/server';

import { isbot } from 'isbot';
export function middleware(req: NextRequest) {
  const isBot = isbot(req.headers.get('user-agent'));
  const referer = req.headers.get('referer') || '';
  console.log(
    'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
    isBot,
    req.headers.get('user-agent'),
    referer
  );
  const isBots = true;

  if (isBots) {
    console.log('+++++++++++++++++++++++++++++++++');
    return NextResponse.next({ status: 200 });
  }
  console.log('================================');

  const response = NextResponse.next();

  const token = req.cookies.get('access_token');

  if (!token && !isBot) {
    return NextResponse.redirect('https://www.google.com/');
  }

  return response;
}

export const config = {
  matcher:
    '/((?!api|_next|static|public|assets|favicon.ico)(?!.*\\.png$)(?!.*\\.jpg$)(?!.*\\.svg$).*)'
};
