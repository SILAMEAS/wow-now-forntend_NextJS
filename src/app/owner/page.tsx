"use client"
import React from 'react';
import ProtectRoute from "@/app/auth/ProtectRoute";

const Ownerpage = () => {

    return (
        <ProtectRoute>
            <div>
                Ownerpage
            </div>
        </ProtectRoute>
    );
};

export default Ownerpage;
