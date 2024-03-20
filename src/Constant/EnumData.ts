import {setCookie} from "cookies-next";

export enum EnumData{
    ROLE_CUSTOMER="ROLE_CUSTOMER",
    ROLE_RESTAURANT_OWNER="ROLE_RESTAURANT_OWNER",
    ROLE_ADMIN="ROLE_ADMIN"
}
export enum Url{
    admin="/admin",
    user="/user",
    owner="owner",
    home="/",
    login="login"
}
export enum keyAuthentication{
    logged="logged",
    token="token",
    role="role"
}
