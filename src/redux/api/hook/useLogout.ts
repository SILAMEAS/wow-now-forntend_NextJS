import {deleteCookie} from "cookies-next";
import {keyAuthentication} from "@/Constant/auth/ConstantAuthConfig";

export const $logout = () => {
    deleteCookie(keyAuthentication.logged);
    deleteCookie(keyAuthentication.role);
    deleteCookie(keyAuthentication.token);
    window.location.reload();
}
