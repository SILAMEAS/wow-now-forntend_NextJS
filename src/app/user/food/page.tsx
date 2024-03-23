import React from 'react';
import LayoutUserPage from "@/app/user/layout/LayoutUserPage";
import {Card} from "@mui/material";
import CartRestaurant from "@/components/tailwind/cart/CartFood";
import CardShoes from "@/components/tailwind/cart/type-card/CardShoes";


const Food = () => {
    return (
        <LayoutUserPage>
       <div className={`h-full flex justify-center items-center`}>
           <CardShoes/>
       </div>
        </LayoutUserPage>
    );
};

export default Food;
