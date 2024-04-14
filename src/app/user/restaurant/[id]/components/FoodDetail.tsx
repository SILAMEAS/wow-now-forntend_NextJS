import React from 'react';
import {useGetFoodsByRestaurantIdQuery} from "@/redux/api/service/food/foodApi";
import {Stack} from "@mui/material";
import CardFood from "@/app/user/restaurant/[id]/components/CardFood";

const FoodDetail = ({id, foodType, foodCategory}: {
    id: number,
    foodType: string,
    foodCategory: string
}) => {
    const getFoodsByRestaurantIdQuery = useGetFoodsByRestaurantIdQuery({
        id,
        seasanal: foodType === "seasanal",
        vegetarian: foodType === "vegetarian",
    }, {
        skip: !id,
        refetchOnMountOrArgChange: true
    })
    console.log("foodType", foodType);
    console.log("foodCategory", foodCategory);
    // console.log("contents", getFoodsByRestaurantIdQuery.currentData?.contents)
    return (
        <div className={'h-full  flex flex-col gap-1 '}>

            <Stack height={'500px'}>
                {
                    getFoodsByRestaurantIdQuery.currentData?.contents.map(item =>
                        <CardFood food={item} key={item.id}/>)
                }
            </Stack>

        </div>
    );
};

export default FoodDetail;
