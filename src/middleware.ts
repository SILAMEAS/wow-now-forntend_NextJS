import { EnumData, keyAuthentication, Url } from "@/Constant/EnumData";
import { NextResponse } from "next/server";
const RoleRelateToUrl: Array<{ id: EnumData; value: Url }> = [
  { id: EnumData.ROLE_ADMIN, value: Url.admin },
  { id: EnumData.ROLE_CUSTOMER, value: Url.user },
  { id: EnumData.ROLE_RESTAURANT_OWNER, value: Url.owner },
];
const routeProtect = [Url.owner, Url.admin, Url.user, Url.home];
export default function middleWare(req: any) {
  let absoluteURL = new URL("/login", req.nextUrl.origin);
  // if try to access route while not yet login
  if (
    routeProtect.includes(req.nextUrl.pathname) &&
    !req.cookies.get("logged")?.value
  ) {
    // it will redirect to page login
    const absoluteURL = new URL(Url.login, req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
  // if try to access route page login while you login success it will return you follow the role
  if (req.nextUrl.pathname === Url.login && req.cookies.get("logged")?.value) {
    switch (req.cookies.get(keyAuthentication.role)?.value) {
      // redirect to user if your role is user
      case EnumData.ROLE_CUSTOMER: {
        const absoluteURL = new URL(Url.user, req.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
      }
      // redirect to user if your admin is admin
      case EnumData.ROLE_ADMIN: {
        const absoluteURL = new URL(Url.admin, req.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
      }
      // redirect to user if your owner is owner
      case EnumData.ROLE_RESTAURANT_OWNER: {
        const absoluteURL = new URL(Url.owner, req.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
      }
    }
    const absoluteURL = new URL(Url.home, req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
  // Protect route via role login : if your role is user / you can't acess to page admin and page owner restaurant
  // we need make it like {id,url} to easy filter
  const noCurrentRoute = RoleRelateToUrl.filter(
    (item) => item.id !== req.cookies.get(keyAuthentication.role)?.value
  ).map((i) => i.value);
  if (
    noCurrentRoute.includes(req.nextUrl.pathname) &&
    req.cookies.get(keyAuthentication.logged)?.value
  ) {
    switch (req.cookies.get(keyAuthentication.role)?.value) {
      case EnumData.ROLE_CUSTOMER: {
        const absoluteURL = new URL(Url.user, req.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
      }
      case EnumData.ROLE_ADMIN: {
        const absoluteURL = new URL(Url.admin, req.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
      }
      case EnumData.ROLE_RESTAURANT_OWNER: {
        const absoluteURL = new URL(Url.owner, req.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
      }
    }
    const absoluteURL = new URL(Url.home, req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }

  NextResponse.redirect(absoluteURL.toString());
}
