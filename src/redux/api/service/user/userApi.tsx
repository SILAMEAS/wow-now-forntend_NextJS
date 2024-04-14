import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {METHOD} from "@/redux/api/hook/method/Method";
import {setCookie} from "cookies-next";
import {keyAuthentication} from "@/Constant/auth/ConstantAuthConfig";
import {IReqCreateAccount, IReqLogin, IResLogin} from "@/redux/api/service/user/typeUser";

export const userApi = createApi({
    reducerPath: "userApi",
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    }),
    endpoints: (builder) => ({
        login: builder.mutation<IResLogin, IReqLogin>(
            {
                query: (body) => ({
                    url: `auth/sign-in`,
                    method: METHOD.Post,
                    body,
                    responseHandler: async response => {
                        const res: IResLogin = await response.json();
                        const {jwt, role} = res;
                        const tokenAlive = {maxAge: 24 * 3600}; // 1 day
                        role && jwt && setCookie(keyAuthentication.logged, true, tokenAlive);
                        setCookie(keyAuthentication.token, jwt, tokenAlive);
                        setCookie(keyAuthentication.role, role, tokenAlive);
                        role && jwt && window.location.reload();
                    },
                }),
            }
        ),
        register: builder.mutation<any, IReqCreateAccount>(
            {
                query: (body) => ({
                    url: `auth/sign-up`,
                    method: METHOD.Post,
                    body
                }),
            }
        ),


    }),
});

export const {
    useLoginMutation,
    useRegisterMutation,

} = userApi;
