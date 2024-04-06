"use client";
import React from 'react';
import MenuItemOwner from "@/components/ms-menu-item/MenuItemOwner";
import ProfileOwner from "@/components/ms-profile/ProfileOwner";

const RightSide = () => {
    return (
        <div id="menu" className="bg-white/10 col-span-3 rounded-lg p-4 ">
            {/** Profile */}
            <ProfileOwner/>
            <hr className="my-2 border-slate-700"/>
            {/** Menu item side bar */}
            <MenuItemOwner/>

        </div>
    );
};

export default RightSide;
