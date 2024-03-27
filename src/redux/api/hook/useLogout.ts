import {deleteCookie} from "cookies-next";
import {keyAuthentication} from "@/Constant/auth/ConstantAuthConfig";

export const useLogout=()=>{
    deleteCookie(keyAuthentication.logged);
    deleteCookie(keyAuthentication.role);
    deleteCookie(keyAuthentication.token);
    window.location.reload();
}
