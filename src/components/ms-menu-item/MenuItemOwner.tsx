import React from 'react';
import CustomRoute from "@/components/ms-route/CustomRoute";
import CategoryIcon from "@mui/icons-material/Category";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import LogoutIcon from "@mui/icons-material/Logout";

const MenuItemOwner = () => {

    return (
        <div id="menu" className="flex flex-col space-y-2 my-5">
            <CustomRoute label={"Restaurant"} description={""} href={'/owner'}/>
            <CustomRoute label={"Category"} description={""} href={'/owner/category'}
                         icon={<CategoryIcon className="w-6 h-6 group-hover:text-indigo-400"/>}/>

            <CustomRoute label={"Foods"} icon={<RamenDiningIcon className="w-6 h-6 group-hover:text-indigo-400"/>}
                         href={'/owner/food'}/>
            <CustomRoute label={"Logout"} icon={<LogoutIcon className="w-6 h-6 group-hover:text-indigo-400"/>}/>
        </div>
    );
};

export default MenuItemOwner;
