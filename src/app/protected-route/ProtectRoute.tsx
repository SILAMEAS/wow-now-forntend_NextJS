"use client"
import React, {PropsWithChildren} from 'react';
import {useProfileQuery} from "@/redux/api/service/profile/profileApi";
import {useDispatch} from "react-redux";
import Navbar from "@/components/tw-navbar/Navbar";
import {EnumData} from "@/Constant/auth/ConstantAuthConfig";
import {useRouter} from "next/navigation";
import {setProfile} from "@/redux/slice/authSlice";

const ProtectRoute = ({children}: PropsWithChildren) => {
    const getProfile = useProfileQuery({});
    const dispatch = useDispatch();
    const router = useRouter();
    React.useLayoutEffect(() => {
        if (getProfile.data) {
            dispatch(setProfile(getProfile.data))
        } else
            router.replace('/login');
    }, [getProfile.isFetching])
    return (
        <div className={'overflow-hidden'}>
            {getProfile.data?.role === EnumData.ROLE_CUSTOMER && <Navbar/>}
            {children}
            {/*{getProfile.data?.role === EnumData.ROLE_CUSTOMER && <Footer/>}*/}
        </div>
    );
};

export default ProtectRoute;
