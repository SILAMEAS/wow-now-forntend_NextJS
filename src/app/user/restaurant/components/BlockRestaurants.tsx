"use client"
import React from 'react';
import CardRestaurant from "@/components/tw-restaurant/CardRestaurant";
import {Pagination, Skeleton, Stack} from "@mui/material";
import {useGetRestaurantsQuery} from "@/redux/api/service/restaurant/restaurantApi";
import {defaultValuePagination, IReqListRestaurant} from "@/redux/api/service/restaurant/typeRestaurant";

const ListCardOfRestaurants = () => {
    const [filter, setFilter] = React.useState<IReqListRestaurant>({...defaultValuePagination, pageSize: 12});
    const listRestaurants = useGetRestaurantsQuery(filter);
    // if (listRestaurants.isLoading || listRestaurants.isFetching) {
    //     return <CardLoading/>
    // }

    return (
        <section>
            {/** title of render restaurants **/}
            <p className={`py-5 lg:py-10 font-semibold text-xl lg:text-3xl`}>List Restaurants</p>
            {/** Render Restaurants */}
            <div className={'flex justify-center items-center  flex-col space-y-10'}>
                {/** list of restaurants */}
                <div className={`flex flex-wrap gap-[20px] mx-auto justify-center `}>
                    {
                        listRestaurants.isLoading || listRestaurants.isFetching ?
                            <CardLoading/> :
                            listRestaurants.data!.contents.map(item =>
                                <CardRestaurant data={item} key={item.id}/>
                            )
                    }
                </div>
                {/** Footer of Restaurants */}
                {
                    !listRestaurants.isLoading && !listRestaurants.isFetching &&
                    <Pagination
                        count={listRestaurants.data?.totalPages}
                        color="primary"
                        onClick={(e: any) => setFilter({...filter, pageNo: Number(e.target.innerText)})}
                        hideNextButton={true}
                        hidePrevButton={true}
                        shape="rounded"
                    />
                }
            </div>
        </section>
    );
};

export default ListCardOfRestaurants;


const CardLoading = () => {
    return <Stack spacing={1} height={'22rem'} width={'20rem'}>
        {/** For variant="text", adjust the height via font-size */}
        <Skeleton variant="text" sx={{fontSize: '1rem'}}/>

        {/** For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="circular" width={40} height={40}/>
        <Skeleton variant="rectangular" width={210} height={60}/>
        <Skeleton variant="rounded" width={210} height={60}/>
    </Stack>
}
