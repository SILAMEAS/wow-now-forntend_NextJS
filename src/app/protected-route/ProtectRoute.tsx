"use client"
import React, {PropsWithChildren} from 'react';

const ProtectRoute = ({children}: PropsWithChildren) => {
    return (
        <div className={'overflow-hidden'}>
            {/*<Navbar/>*/}
            {children}
        </div>
    );
};

export default ProtectRoute;
