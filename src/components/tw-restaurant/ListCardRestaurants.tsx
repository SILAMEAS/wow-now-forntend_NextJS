"use client"
import React, {useState} from 'react';
import {RestaurantRequest} from "@/utils/api/request/RestaurantRequest";
import {DtoRestaurant} from "@/utils/api/dto/response/DtoListRestaurant";
import CardRestaurant from "@/components/tw-restaurant/CardRestaurant";
import {$ok} from "@/utils/common/$ok";
import {CircularProgress, Pagination} from "@mui/material";

const ListCardOfRestaurants = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [listRestaurants, setListRestaurants] = React.useState<Array<DtoRestaurant>>([]);
    const req=new RestaurantRequest();
    React.useMemo(()=> {
        setLoading(true);
        req.listRestaurants().then(r =>{
         setListRestaurants(r)
            setLoading(false);
        });

    },[])
    if(!loading&& listRestaurants?.length===0){
        return <>No data</>
    }
    return (
        <div className={'flex justify-center items-center  flex-col'}>
            <div className={`flex flex-wrap gap-[20px] mx-auto  justify-center`}>
                {
                    loading?<CircularProgress size={60} /> :
                        listRestaurants?.length>0&&listRestaurants.map(item=>
                            <CardRestaurant data={item} key={item.id}/>
                        )
                }

            </div>
            {
                !loading&&  <Pagination count={10} shape="rounded" />
            }
        </div>
    );
};

export default ListCardOfRestaurants;
