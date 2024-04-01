import { NextRequest, NextResponse, userAgent } from "next/server";
import { isbot } from "isbot";

export function middleware(req: NextRequest) {
  const response = NextResponse.next();
  const { isBot } = userAgent(req);
  console.log(req.nextUrl.pathname);
  console.log("===========================1", isBot);

  console.log("1111111111111111111111111111111111", isBot);
  console.log("2222222222222222222222222222222222", req.headers.get("isBot"));
  console.log(
    "3333333333333333333333333333333333",
    req.headers.get("user-agent")
  );
  console.log(
    "444444444444444444444444444444444",
    isbot(req.headers.get("user-agent"))
  );

  return response;
}

export const config = {
  matcher:
    "/((?!api|_next|static|public|assets|favicon.ico)(?!.*\\.png$)(?!.*\\.jpg$)(?!.*\\.svg$).*)",
};
