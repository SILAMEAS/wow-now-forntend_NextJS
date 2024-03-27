"use client"
import React, {useState} from 'react';
import {RestaurantRequest} from "@/utils/api/request/RestaurantRequest";
import {DtoRestaurant} from "@/utils/api/dto/response/DtoListRestaurant";
import CardRestaurant from "@/components/tw-restaurant/CardRestaurant";
import {$ok} from "@/utils/common/$ok";
import {CircularProgress, Pagination} from "@mui/material";
import {useGetRestaurantsQuery} from "@/redux/api/service/restaurant/restaurantApi";
import {IReqListRestaurant} from "@/redux/api/service/restaurant/typeRestaurant";

const ListCardOfRestaurants = () => {
    const [filter,setFilter]=React.useState<IReqListRestaurant>({pageNo:1,pageSize:10,sortBy:"",sortOrder:"asc"});
    const listRestaurants = useGetRestaurantsQuery(filter);
    if(!listRestaurants.isSuccess&&!listRestaurants?.currentData?.contents){
        return  <>error ... </>
    }
    return (
        <div className={'flex justify-center items-center  flex-col'}>
            <div className={`flex flex-wrap gap-[20px] mx-auto  justify-center`}>
                {
                    listRestaurants.isLoading?<CircularProgress size={60} /> :
                        listRestaurants.currentData!.contents.length >0&&
                        listRestaurants.currentData!.contents.map(item=>
                            <CardRestaurant data={item} key={item.id}/>
                        )
                }

            </div>
            {
                ! listRestaurants.isLoading&&  <Pagination count={10} shape="rounded" />
            }
        </div>
    );
};

export default ListCardOfRestaurants;
