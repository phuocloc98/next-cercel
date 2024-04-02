import { NextRequest, NextResponse } from 'next/server';

import { isbot } from 'isbot';
export function middleware(req: NextRequest) {
  const response = NextResponse.next();
  console.log(
    '=====================',
    req.headers.get('user-agent'),
    isbot(req.headers.get('user-agent'))
  );

  return response;
}

export const config = {
  matcher:
    '/((?!api|_next|static|public|assets|favicon.ico)(?!.*\\.png$)(?!.*\\.jpg$)(?!.*\\.svg$).*)'
};
