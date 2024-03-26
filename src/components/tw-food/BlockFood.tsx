"use client"
import React, {useState} from 'react';
import ListCardOfRestaurants from "@/components/tw-restaurant/ListCardRestaurants";
import {Button} from "@mui/material";
import {MultiItemCarousel} from "@/components/tw-food/MultiItemCarousel";

const BlockFood = () => {
    const [page, setPage] = React.useState(1);
    const [hasNext, setHasNext] = React.useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false)

    return (
        <section>
            {/** label list food **/}
            <div className={'flex  items-center space-x-10'}>
                <p className={`py-5 lg:py-10 font-semibold text-xl lg:text-3xl`}>Top Meet</p>
                {/*{*/}
                {/*    hasNext&&   <button  className={' bg-blue-600 py-2 px-4 rounded-full cursor-pointer'}*/}
                {/*                         onClick={()=>setPage(page+1)}>More</button>*/}
                {/*}*/}
            </div>
            <div className={`space-x-10 ${loading?'hidden':'visible'}`}>
                {
                    <button  className={' bg-blue-600 py-2 px-4 rounded-full cursor-pointer'}
                                         onClick={()=>setPage(page-1)}>Back</button>
                }
                {
                    hasNext&&   <button  className={' bg-blue-600 py-2 px-4 rounded-full cursor-pointer'}
                                         onClick={()=>setPage(page+1)}>More</button>
                }
            </div>
            <MultiItemCarousel setHasNext={setHasNext} page={page} setOutLoading={setLoading}/>

        </section>
    );
};

export default BlockFood;

