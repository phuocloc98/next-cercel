import { NextRequest, NextResponse } from 'next/server';

import { isbot } from 'isbot';
export function middleware(req: NextRequest) {
  const isBot = isbot(req.headers.get('user-agent'));
  console.log('iiiiiiiiiiiiiiiiiiiiiiiiiiiiiii', isBot);

  if (isBot) {
    console.log('+++++++++++++++++++++++++++++++++');
    return NextResponse.next();
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
