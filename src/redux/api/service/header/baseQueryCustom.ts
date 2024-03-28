import {getCookie} from "cookies-next";
import {fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {keyAuthentication} from "@/Constant/auth/ConstantAuthConfig";
const headerArray:Array<{ key: string, value: string }>=
    [{
        key:"Authorization",
        value:`Bearer ` + getCookie(keyAuthentication.token),
    },
    {
        key:"Content-Type",
        value:"application/json",
    }]
export const fetchBaseQueryCustom=
    fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL+"api/",
    prepareHeaders: headers => {
        headerArray.map(item=>{
            headers.set(item.key,item.value);
        })
        return headers;
    },
})
