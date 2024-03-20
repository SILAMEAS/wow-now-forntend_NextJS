import { NextResponse } from "next/server";
import {EnumData, keyAuthentication, Url} from "@/Constant/EnumData";

const routeProtect = [Url.admin, Url.user, Url.home];
export default function middleWare(req: any) {
  //   if route that want to access in protected route
    if(routeProtect.includes(req.nextUrl.pathname)){
        //   if login failed
        if(!req.cookies.get(keyAuthentication.logged)?.value){
            //   it will redirect to page login
            return NextResponse.redirect(new URL(Url.login, req.nextUrl.origin).toString());
        }else {
            //   it will redirect to page that we want to access
            const role=req.cookies.get(keyAuthentication.role)?.value;
                switch (role){
                    // it will redirect to user page
                    case EnumData.ROLE_CUSTOMER:{
                        return  NextResponse.redirect(new URL(Url.user, req.nextUrl.origin).toString());
                    }
                    // it will redirect to admin page
                    case EnumData.ROLE_ADMIN:{
                        return  NextResponse.redirect(new URL(Url.admin, req.nextUrl.origin).toString());
                    }
                    // it will redirect to log in because user invalid role
                    default:{
                        return  NextResponse.redirect(new URL(Url.login, req.nextUrl.origin).toString());
                    }
                }

        }
        //   if they want to access page login when they not yet logout it will redirect to home page
    }else if(req.nextUrl.pathname === Url.login){
        if(req.cookies.get(keyAuthentication.logged)?.value){
            return  NextResponse.redirect(new URL(Url.home, req.nextUrl.origin).toString())
        }
        // if they not yet login they clearly to access login page
        return NextResponse.redirect(new URL(Url.login, req.nextUrl.origin).toString())
    }

}
