"use client"
import React from "react";
import {Button, CircularProgress, List, ListItem, Stack} from "@mui/material";
import ItemCarousel from "@/components/tw-food/ItemCarousel";
import {ConstantStyle} from "@/Constant/style/ConstantColor";
import {FoodApi} from "@/utils/api/request/ Food/FoodApi";
import {IGetListFoods} from "@/utils/api/request/ Food/type";
import {$ok} from "@/utils/common/$ok";

export const MultiItemCarousel=({setHasNext,page,setOutLoading}:{setHasNext:any,page:number,setOutLoading:any})=> {
    const foodApi=new FoodApi();
    const [loading, setLoading] = React.useState<boolean>(false);
    const [listFoods, setListFoods] = React.useState<IGetListFoods|null>(null);
    const fetchData=async ():Promise<void>=>{
        setLoading(true);
        setOutLoading(true);
        foodApi.listFoods({pageNo:page}).then((r) => {
            if(r){
                setListFoods(r as IGetListFoods);
                setLoading(false);
                setOutLoading(false);
                setHasNext((r as IGetListFoods)?.hasNext)
            }
        });
    }
    React.useMemo(()=>{
        fetchData();
    },[page])

    if($ok(listFoods?.contents)&&listFoods?.contents?.length===0){
        return <>No data</>
    }
    return (
        <div className={`flex w-auto  overflow-y-scroll 
        `}>
            {
                loading?<CircularProgress size={60} /> :
                    listFoods?.contents?.map(item=>
                        <ListItem key={item.id}>
                            <ItemCarousel image={item.images[0]} title={item.name}/>
                        </ListItem>
                    )
            }
        </div>
    );
}
