import { NextResponse } from "next/server";

const routeProtect = ["/admin", "/user",  "/"];
export default function middleWare(req: any) {
  if (
    routeProtect.includes(req.nextUrl.pathname) &&
    !req.cookies.get("logged")?.value
  ) {
    const absoluteURL = new URL("/login", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
  if (req.nextUrl.pathname === "/login" && req.cookies.get("logged")?.value) {
    const absoluteURL = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}
