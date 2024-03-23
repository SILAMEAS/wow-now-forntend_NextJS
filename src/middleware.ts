
import { NextResponse } from "next/server";
import {
    EnumData,
    keyAuthentication,
    RoleRelateToUrl,
    routeProtect,
    routePublic,
    Url
} from "@/Constant/ConstantAuthConfig";

export default function middleWare(req: any) {
  //   role from login
  const role = req.cookies.get(keyAuthentication.role)?.value;
  //   attribute form login page that make sure you already log in
  const auth = req.cookies.get(keyAuthentication.logged)?.value;
  // current pathname that you currently stand on
  const pathname = req.nextUrl.pathname;
    // Protect route via role login : if your role is user / you can't access to page admin and page owner restaurant
    // we need make it like {id,url} to easy filter
    const tryAccessOtherRoleFromRoleGiveByAuthentication = RoleRelateToUrl.filter(
        (item) => item.id !== role
    ).map((i) => i.value);
  function handleRedirect(keyRedirect:Url){
      return NextResponse.redirect(new URL(keyRedirect, req.nextUrl.origin).toString())
  }
  // try to access protect route with no authentication
    if (
        routeProtect.includes(pathname) &&
        !auth
    ) {
        return handleRedirect(Url.login);
    }
    // routePublic :  try to access public route when you log in success it will redirect you to page by role authentication
    // tryAccessOtherRoleFromRoleGiveByAuthentication : when you log in as user, but you try to access admin url or owner url it will redirect you to page by role authentication
  if ((tryAccessOtherRoleFromRoleGiveByAuthentication.includes(pathname)||routePublic.includes(pathname))&& auth) {
    switch (role) {
      // redirect to user if your role is user
      case EnumData.ROLE_CUSTOMER: {
          return handleRedirect(Url.user);
      }
      // redirect to user if your admin is admin
      case EnumData.ROLE_ADMIN: {
          return handleRedirect(Url.admin);
      }
      // redirect to user if your owner is owner
      case EnumData.ROLE_RESTAURANT_OWNER: {
          return handleRedirect(Url.owner);
      }
    }
      return handleRedirect(Url.home);
  }
}
