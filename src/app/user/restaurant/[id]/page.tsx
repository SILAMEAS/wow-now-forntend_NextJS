"use client"
import React from 'react';
import CreateCategory from "@/components/tw-restaurant/CreateCategory";
import HeaderImageRestaurant from "@/app/user/restaurant/components/HeaderImageRestaurant";
import FoodAndCategory from "@/app/user/restaurant/components/FoodAndCategory";
import {useGetRestaurantByIdQuery} from "@/redux/api/service/restaurant/restaurantApi";

const RestaurantById = ({params:{id}}:{params:{id:number}}) => {
    const getRestaurantById=useGetRestaurantByIdQuery({id},{skip:!id});
    return (
        <div className={`h-[94vh]  flex justify-center items-center flex-col gap-10`}>
            {
                getRestaurantById.currentData&&
                <HeaderImageRestaurant data={getRestaurantById.currentData}/>
            }
            <FoodAndCategory id={id}/>
        </div>
    );
};

export default RestaurantById;
