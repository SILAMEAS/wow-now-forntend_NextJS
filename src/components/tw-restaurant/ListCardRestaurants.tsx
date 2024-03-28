"use client"
import React, {useState} from 'react';
import {RestaurantRequest} from "@/utils/api/request/RestaurantRequest";
import {DtoRestaurant} from "@/utils/api/dto/response/DtoListRestaurant";
import CardRestaurant from "@/components/tw-restaurant/CardRestaurant";
import {$ok} from "@/utils/common/$ok";
import {CircularProgress, Pagination, Skeleton, Stack} from "@mui/material";
import {useGetRestaurantsQuery} from "@/redux/api/service/restaurant/restaurantApi";
import {defaultValuePagination, IReqListRestaurant} from "@/redux/api/service/restaurant/typeRestaurant";

const ListCardOfRestaurants = () => {
    const [filter,setFilter]=React.useState<IReqListRestaurant>({...defaultValuePagination,pageSize:12});
    const listRestaurants = useGetRestaurantsQuery(filter);
    if( listRestaurants.isLoading||listRestaurants.isFetching){
        return   <CardLoading />
    }

    return (
        <div className={'flex justify-center items-center  flex-col space-y-10'}>

            <div className={`flex flex-wrap gap-[20px] mx-auto justify-start `}>
                {listRestaurants.data!.contents.map(item=>
                <CardRestaurant data={item} key={item.id}/>
                )}
            </div>
            {
                !listRestaurants.isLoading&&!listRestaurants.isFetching&&
                <Pagination
                    count={listRestaurants.currentData?.totalPages}
                    color="primary"
                    onClick={(e: any) =>setFilter({...filter,pageNo:Number(e.target.innerText)})}
                    hideNextButton={true}
                    hidePrevButton={true}
                    shape="rounded"
                />
            }
        </div>
    );
};

export default ListCardOfRestaurants;


const CardLoading=()=>{
    return  <Stack spacing={1} height={'22rem'} width={'20rem'}>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rounded" width={210} height={60} />
    </Stack>
}
