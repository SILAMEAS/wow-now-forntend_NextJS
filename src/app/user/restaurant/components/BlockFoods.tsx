"use client"
import React from "react";
import {ListItem, Skeleton, Stack} from "@mui/material";
import ItemCarousel from "@/components/tw-food/ItemCarousel";
import {defaultValuePagination, IReqListRestaurant} from "@/redux/api/service/restaurant/typeRestaurant";
import {useGetFoodsQuery} from "@/redux/api/service/food/foodApi";

export const BlockFoods = () => {
    const [filter, setFilter] = React.useState<IReqListRestaurant>(defaultValuePagination);
    const listFoods = useGetFoodsQuery(filter, {refetchOnMountOrArgChange: true});
    return (
        <section>
            <div className={'flex  items-center space-x-10'}>
                <p className={`py-5 lg:py-10 font-semibold text-xl lg:text-3xl`}>Top Meet</p>
            </div>
            <Stack>
                <div className={`space-x-10 ${listFoods.isLoading ? 'hidden' : 'visible'}`}>
                    {
                        filter.pageNo > 1 && <button
                            className={' bg-blue-600 py-2 px-4 rounded-full cursor-pointer disabled:bg-gray-500 text-white'}
                            onClick={() => setFilter({...filter, pageNo: filter.pageNo - 1})}>Back</button>
                    }
                    {
                        listFoods.data?.hasNext &&
                        <button className={' bg-blue-600 py-2 px-4 rounded-full cursor-pointer'}
                                onClick={() => setFilter({...filter, pageNo: filter.pageNo + 1})}>More</button>
                    }
                </div>

                <div className={'mt-6'}>
                    <div
                        className={`flex ${Number(listFoods.data?.contents.length) === 10 ? 'w-screen' : "w-fit"}  overflow-y-scroll scrollFood`}>
                        {listFoods.isLoading ?
                            <Skeleton animation="wave" variant="circular" width={200} height={200}/> :
                            listFoods?.data?.contents?.map(item =>
                                <ListItem key={item.id}>
                                    <ItemCarousel image={item.images[0]} title={item.name}/>
                                </ListItem>
                            )}
                    </div>
                </div>

            </Stack>
        </section>
    );
}
