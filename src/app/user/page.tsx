import React from 'react';
import ProtectRoute from "@/app/auth/ProtectRoute";

const User = () => {
    return (
        <ProtectRoute>
            <div>
            User Page
        </div>
        </ProtectRoute>

    );
};

export default User;
