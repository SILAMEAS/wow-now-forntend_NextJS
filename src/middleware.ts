import {NextResponse} from "next/server";
import {EnumData, keyAuthentication, routePublic, Url} from "@/Constant/auth/ConstantAuthConfig";
import {redirectPageByRole} from "@/utils/auth";

const RoleRelateToUrl: Array<{ id: EnumData; value: Url }> = [
    {id: EnumData.ROLE_ADMIN, value: Url.admin},
    {id: EnumData.ROLE_CUSTOMER, value: Url.user},
    {id: EnumData.ROLE_RESTAURANT_OWNER, value: Url.owner},
];
export const routeProtect = [Url.owner, Url.admin, Url.user, Url.home];
export default function middleWare(req: any) {
    let pathname = req.nextUrl.pathname;
    const role = req.cookies.get(keyAuthentication.role)?.value;
    /** AccessProtectRouteNoLogin */
    if (
        routeProtect.includes(pathname) &&
        !req.cookies.get(keyAuthentication.logged)?.value
    ) {
        const absoluteURL = new URL(Url.login, req.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
    }
    /** AccessProtectPublicWithLogin */
    if (routePublic.includes(req.nextUrl.pathname) && req.cookies.get("logged")?.value) {
        return redirectPageByRole(req);
    }
    /** AccessPageWrongRole */
    if (role !== EnumData.ROLE_ADMIN && req.nextUrl.pathname.startsWith(Url.admin)) {
        return redirectPageByRole(req);
    }
    if (role !== EnumData.ROLE_CUSTOMER && req.nextUrl.pathname.startsWith(Url.user)) {
        return redirectPageByRole(req);
    }
    if (role !== EnumData.ROLE_RESTAURANT_OWNER && req.nextUrl.pathname.startsWith(Url.owner)) {
        return redirectPageByRole(req);
    }

}
