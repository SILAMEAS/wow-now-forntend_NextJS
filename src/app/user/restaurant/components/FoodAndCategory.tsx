import React from 'react';
import {useGetFoodsByRestaurantIdQuery} from "@/redux/api/service/food/foodApi";

const FoodAndCategory = ({id}:{id:number}) => {
    const getFoodsByRestaurantIdQuery=useGetFoodsByRestaurantIdQuery({id},{skip:!id})
    return (
        <div>
            FoodAndCategory
        </div>
    );
};

export default FoodAndCategory;
