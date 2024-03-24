"use client"
import React from 'react';
import {MockitemData} from "@/components/tw-food/MockData";
import {IconButton} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useRouter} from "next/navigation";
import {DtoRestaurant} from "@/utils/api/dto/response/DtoListRestaurant";
interface ICardRestaurant{
    data:DtoRestaurant
}
const CardRestaurant = ({data}:ICardRestaurant) => {
    const navigate=useRouter();
    return (
        <div className={`h-[22rem] w-[20rem] rounded-xl bg-black/10 overflow-hidden relative ${data?.open?'cursor-pointer':"cursor-not-allowed"} ${!data?.open&&"opacity-50"}`} onClick={()=>data.id&&navigate.push("/user/restaurant/"+data.id)}>
            {/** header of card **/}
            <section>
                {/** image of restaurant **/}
                <img className={`object-center object-cover h-[40%] w-full`} src={MockitemData[0].img}/>
                {/** status of restaurant **/}
                <p className={`${data?.open?"bg-green-700":"bg-red-700"}  py-[5px] px-[10px] absolute left-[10px] top-[10px] text-white text-xs font-semibold rounded-full`}>
                    {data?.open?"OPEN":"CLOSE"}
                </p>
            </section>
            {/** body of card **/}
            <section className={`flex justify-between p-[15px]`}>
              <div className={`space-y-2`}>
                  {/** title of restaurant **/}
                  <p className={`text-white text-xl font-semibold`}>
                      {data?.name}
                  </p>
                  {/** description of restaurant **/}
                  <p className={`text-gray-500 text-md`}>
                      {data?.description}
                  </p>
              </div>
                <IconButton disableRipple disableFocusRipple disableTouchRipple>
                    {
                        data?.favorite?<FavoriteIcon sx={{color:"red"}}/>:<FavoriteBorderIcon/>
                    }
                </IconButton>
            </section>

        </div>
    );
};

export default CardRestaurant;
