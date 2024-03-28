"use client"
import React from "react";
import {ListItem, Skeleton, Stack} from "@mui/material";
import ItemCarousel from "@/components/tw-food/ItemCarousel";
import {defaultValuePagination, IReqListRestaurant} from "@/redux/api/service/restaurant/typeRestaurant";
import {useGetFoodsQuery} from "@/redux/api/service/food/foodApi";

export const MultiItemCarousel=()=> {
    const [filter,setFilter]=React.useState<IReqListRestaurant>(defaultValuePagination);
    const listFoods = useGetFoodsQuery(filter,{refetchOnMountOrArgChange:true});
    return (
        <Stack>
            <div className={`space-x-10 ${listFoods.isLoading?'hidden':'visible'}`}>
                {
                    filter.pageNo>1&& <button  className={' bg-blue-600 py-2 px-4 rounded-full cursor-pointer disabled:bg-gray-500 text-white'}
                             onClick={()=>setFilter({...filter,pageNo:filter.pageNo-1})}>Back</button>
                }
                {
                    listFoods.currentData?.hasNext&&
                    <button  className={' bg-blue-600 py-2 px-4 rounded-full cursor-pointer'}
                             onClick={()=>setFilter({...filter,pageNo:filter.pageNo+1})}>More</button>
                }
            </div>

                <div className={'mt-6'}>
                    {
                        listFoods.isLoading|| listFoods.isFetching?
                            <div className={`flex flex-row w-screen  overflow-y-scroll justify-between`}>
                                <div className={`h-36 w-36 overflow-hidden`} >
                                    <Skeleton variant="circular" className={`h-36 w-36`} />
                                </div>
                            </div>:
                            <div className={`flex ${Number(listFoods.currentData?.contents.length)===10?'w-screen':"w-fit"}  overflow-y-scroll`}>
                                {listFoods?.currentData?.contents?.map(item =>
                                    <ListItem key={item.id}>
                                        <ItemCarousel image={item.images[0]} title={item.name}/>
                                    </ListItem>
                                )}
                            </div>
                    }
                </div>

        </Stack>
    );
}
