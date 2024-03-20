"use client"
import React from 'react';
import ProtectRoute from "@/app/auth/ProtectRoute";

const Admin = () => {
    return (
        <ProtectRoute>
            <div>
                Admin Page
            </div>
        </ProtectRoute>
    );
};

export default Admin;
