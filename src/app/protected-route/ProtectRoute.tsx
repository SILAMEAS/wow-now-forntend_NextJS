import React, {PropsWithChildren} from 'react';
import Navbar from "@/components/tw-navbar/Navbar";
import {cookies} from "next/headers";
import {keyAuthentication} from "@/Constant/auth/ConstantAuthConfig";
import LoginPage from "@/app/login/page";

const ProtectRoute = ({children}:PropsWithChildren) => {
    return (
        <div className={'overflow-hidden'}>
            {cookies().get(keyAuthentication.logged)&&<Navbar/>}
            {children}
        </div>
    );
};

export default ProtectRoute;
