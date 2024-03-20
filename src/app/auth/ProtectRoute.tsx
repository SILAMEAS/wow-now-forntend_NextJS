
 "use client"
import React, {PropsWithChildren} from 'react';
import {EnumData, keyAuthentication} from "@/Constant/EnumData";

import {useRouter} from "next/navigation";
 import {getCookie} from "cookies-next";

const ProtectRoute = ({children}:PropsWithChildren) => {
    const router=useRouter();
    const role=getCookie(keyAuthentication.role);
         const handleRoute=()=>{
             switch (getCookie(keyAuthentication.role)) {
                 // it will redirect to user page
                 case EnumData.ROLE_CUSTOMER:
                     return  router.push("/user");
                 case EnumData.ROLE_ADMIN:
                     return  router.push("/admin");
                 case EnumData.ROLE_RESTAURANT_OWNER:
                     return  router.push("/owner");
                 default:router.push("/");

             }
         }
     React.useLayoutEffect(()=>{
         handleRoute()
     },[role]);
    return <>{children}</>
};

export default ProtectRoute;
