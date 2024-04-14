import {PropsWithChildren} from "react";
import Navbar from "@/components/tw-navbar/Navbar";

const UserLayout = ({children}: PropsWithChildren) => {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
};

export default UserLayout;
