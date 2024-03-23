import React, {PropsWithChildren} from 'react';
import Navbar from "@/components/Navbar/Navbar";
import {cookies} from "next/headers";
import {keyAuthentication} from "@/Constant/ConstantAuthConfig";
import LoginPage from "@/app/login/page";

const ProtectRoute = ({children}:PropsWithChildren) => {
    return (
        <div>
            {cookies().get(keyAuthentication.logged)&&<Navbar/>}
            {children}
        </div>
    );
};

export default ProtectRoute;
