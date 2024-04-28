"use client"
import {PropsWithChildren} from "react";
import Navbar from "@/components/tw-navbar/Navbar";
import {useProfileQuery} from "@/redux/api/service/profile/profileApi";
import {useAppDispatch} from "@/redux/api/hook/hoots";
import {setProfile} from "@/redux/slice/authSlice";

const UserLayout = ({children}: PropsWithChildren) => {
    const getProfile = useProfileQuery({});
   const dispatch = useAppDispatch();
    if (getProfile.currentData) {
        dispatch(setProfile(getProfile.currentData));
    }
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
};

export default UserLayout;
