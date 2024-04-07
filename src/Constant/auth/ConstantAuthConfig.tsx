export enum keyAuthentication {
    logged = "logged",
    token = "token",
    role = "role",
}

export enum EnumData {
    ROLE_CUSTOMER = "ROLE_CUSTOMER",
    ROLE_RESTAURANT_OWNER = "ROLE_RESTAURANT_OWNER",
    ROLE_ADMIN = "ROLE_ADMIN",
}

export enum Url {
    admin = "/admin",
    user = "/user",
    owner = "/owner",
    home = "/",
    login = "/login",
    register = "/register",
    forbidden = "/forbidden",
}

export enum UrlChild {
    userSearch = "/user/search",
}

export const RoleRelateToUrl: Array<{ id: EnumData; value: Url }> = [
    {id: EnumData.ROLE_ADMIN, value: Url.admin},
    {id: EnumData.ROLE_CUSTOMER, value: Url.user},
    {id: EnumData.ROLE_RESTAURANT_OWNER, value: Url.owner},
];
export const routeProtect = [Url.owner, Url.admin, Url.user, Url.home];
export const routePublic = [Url.login, Url.register, Url.home]


