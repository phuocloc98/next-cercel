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

  if (
    req.headers.get('user-agent') ===
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
  ) {
    console.log('+++++++++++++++++++++++++++++++++');
    return NextResponse.next({ status: 200 });
  }
  console.log('================================');

  const response = NextResponse.next();

  const token = req.cookies.get('access_token');

  if (!token && !isBot) {
    console.log('erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
    return NextResponse.rewrite('https://www.google.com/', {
      status: 303
    });
  }

  return response;
}

export const config = {
  matcher:
    '/((?!api|_next|static|public|assets|favicon.ico)(?!.*\\.png$)(?!.*\\.jpg$)(?!.*\\.svg$).*)'
};
