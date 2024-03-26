"use client"
import React from 'react';
import ListCardOfRestaurants from "@/components/tw-restaurant/ListCardRestaurants";
import {Button} from "@mui/material";

const BlockRestaurant = () => {
    const [page, setPage] = React.useState(1);


    return (
        <section>
            {/** label list restaurants**/}
            <p className={`py-5 lg:py-10 font-semibold text-xl lg:text-3xl`}>List Restaurants</p>
            <ListCardOfRestaurants/>

        </section>
    );
};

export default BlockRestaurant;
