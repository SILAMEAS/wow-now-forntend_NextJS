import React from 'react';
import {useGetFoodsByRestaurantIdQuery} from "@/redux/api/service/food/foodApi";
import CardFood from "@/app/user/restaurant/[id]/components/CardFood";

const FoodDetail = ({id, foodType, foodCategory}: { id: number, foodType: string, foodCategory: string }) => {
    const getFoodsByRestaurantIdQuery = useGetFoodsByRestaurantIdQuery({
        id,
        nonveg: false,
        seasanal: false,
        vegetarian: false
    }, {
        skip: !id,
        refetchOnMountOrArgChange: true
    })
    return (
        <div className={'h-full overflow-y-scroll flex flex-col gap-1'}>
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 89].map(item =>
                    <CardFood key={item}/>)
            }
        </div>
    );
};

export default FoodDetail;
