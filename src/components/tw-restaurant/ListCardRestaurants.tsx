"use client"
import React from 'react';
import {RestaurantRequest} from "@/utils/api/request/RestaurantRequest";
import {DtoRestaurant} from "@/utils/api/dto/response/DtoListRestaurant";
import CardRestaurant from "@/components/tw-restaurant/CardRestaurant";

const ListCardOfRestaurants = () => {
    const [listRestaurants, setListRestaurants] = React.useState<Array<DtoRestaurant>>([]);
    const req=new RestaurantRequest();
    React.useMemo(()=> {
        req.listRestaurants().then(r =>{
         setListRestaurants(r)
        });

    },[])
    return (
        <div className={`flex flex-wrap gap-[20px] mx-auto  justify-center`}>
            {
                listRestaurants?.length>0&&listRestaurants.map(item=>
                <CardRestaurant data={item} key={item.id}/>
                )
            }
        </div>
    );
};

export default ListCardOfRestaurants;
