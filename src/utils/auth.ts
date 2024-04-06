// auth.ts
import {EnumData, keyAuthentication, Url} from "@/Constant/auth/ConstantAuthConfig";
import {NextRequest, NextResponse} from "next/server";

function getRoleCookies(req: NextRequest) {
    return req.cookies.get(keyAuthentication.role)?.value
}

export function redirectPageByRole(req: NextRequest) {
    const role = getRoleCookies(req);
    switch (role) {
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
        default: {
            const absoluteURL = new URL(Url.home, req.nextUrl.origin);
            return NextResponse.redirect(absoluteURL.toString());
        }
    }
}

