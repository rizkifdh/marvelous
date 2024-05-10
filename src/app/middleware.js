import { NextResponse } from "next/server";

export default function middleware(request, event) {
  request.headers.set("x-url", request.url);

  return next(request, event);
}
