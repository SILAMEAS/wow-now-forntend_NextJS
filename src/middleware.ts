import { NextResponse } from "next/server";
import {EnumData, keyAuthentication, Url} from "@/Constant/EnumData";

const routeProtect = [Url.admin, Url.user, Url.home];
export default function middleWare(req: any) {

    if(req.cookies.get(keyAuthentication.token)!.value){
        NextResponse.redirect(new URL("/", req.nextUrl.origin).toString());
    }else {
        const absoluteURL = new URL("/login", req.nextUrl.origin);
         NextResponse.redirect(absoluteURL.toString());
    }

}
