import React from 'react';
import {useGetFoodsByRestaurantIdQuery} from "@/redux/api/service/food/foodApi";
import {Stack} from "@mui/material";
import CardFood from "@/app/user/restaurant/[id]/components/CardFood";
import {defaultValuePagination, IReqListRestaurant} from "@/redux/api/service/restaurant/typeRestaurant";

const FoodDetail = ({id, foodType, food_category}: {
    id: number,
    foodType: { vegetarian: boolean, seasanal: boolean, nonveg: boolean },
    food_category?: string
}) => {
    const [filter, setFilter] = React.useState<IReqListRestaurant>(defaultValuePagination);
    const getFoodsByRestaurantIdQuery = useGetFoodsByRestaurantIdQuery({
            ...filter,
            id,
            ...foodType,
            filterBy: food_category
        }
        , {
            skip: !id,
            refetchOnMountOrArgChange: true
        })
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
