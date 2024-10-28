import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const isLoggedin = true;
  if (isLoggedin) {
    return NextResponse.next();
  } 
  
  else {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

