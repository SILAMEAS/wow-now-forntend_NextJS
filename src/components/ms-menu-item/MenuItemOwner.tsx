import React from 'react';
import CustomRoute from "@/components/ms-route/CustomRoute";
import CategoryIcon from "@mui/icons-material/Category";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from '@mui/icons-material/Home';
import {$logout} from "@/redux/api/hook/useLogout";

const MenuItemOwner = () => {
    // $logout

    return (
        <div id="menu" className="flex flex-col space-y-2 my-5">
            <CustomRoute label={"My Restaurant"} href={'/owner'}
                         icon={<HomeIcon className="w-6 h-6 group-hover:text-indigo-400"/>}/>
            <CustomRoute label={"Category"} href={'/owner/category'}
                         icon={<CategoryIcon className="w-6 h-6 group-hover:text-indigo-400"/>}/>
            <CustomRoute label={"Foods"} icon={<RamenDiningIcon className="w-6 h-6 group-hover:text-indigo-400"/>}
                         href={'/owner/food'}/>
            <CustomRoute label={"Logout"} icon={<LogoutIcon className="w-6 h-6 group-hover:text-indigo-400"/>}
                         onClick={$logout}
            />
        </div>
    );
};

export default MenuItemOwner;
