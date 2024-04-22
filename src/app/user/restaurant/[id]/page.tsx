"use client"
import React from 'react';
import {IRequestParamFormUrl} from "@/utils/common/requestHeader";
import {Divider, FormControl, LinearProgress, Stack} from "@mui/material";
import {LocationStayingPage} from "@/components/navigation/tw-location-page-staying/LocationStayingPage";
import {ActivePageStaying, NormalPageStaying} from "@/components/navigation/tw-location-page-staying/ActivePageStaying";
import {SlideRestaurantDetail} from "@/app/user/restaurant/[id]/components/SlideRestaurant";
import {
    useGetCategoryByRestaurantIdQuery,
    useGetRestaurantByIdQuery
} from "@/redux/api/service/restaurant/restaurantApi";
import {useLinearBuffer} from "@/utils/common/useLinear";
import GroupRadio, {CustomRadio, defaultFoodType} from "@/app/user/restaurant/[id]/components/GroupRadio";
import {dataOfFoodType} from "@/app/user/restaurant/[id]/data-static/DataOfFoodType";
import FoodDetail from "@/app/user/restaurant/[id]/components/FoodDetail";


const RestaurantById = ({params: {id}}: IRequestParamFormUrl) => {
    const restaurantById = useGetRestaurantByIdQuery({id}, {skip: !id});
    const {progress} = useLinearBuffer(500, restaurantById.isLoading);
    const [foodType, setFoodType] = React.useState<{
        vegetarian: boolean,
        seasanal: boolean,
        nonveg: boolean,
        none: boolean
    }>({...defaultFoodType, none: true});
    const [foodCategory, setFoodCategory] = React.useState<string | undefined>();
    const getCategoryByRestaurantId = useGetCategoryByRestaurantIdQuery({id}, {skip: !id});
    if (restaurantById.isLoading || !restaurantById.data || getCategoryByRestaurantId.isLoading || !getCategoryByRestaurantId.data) {
        return <div className={'py-[50vh] px-5'}>
            <p>Loading ... </p>
            <LinearProgress variant="determinate" value={progress}/>
        </div>
    }
    return (
        <div className={`p-5 overflow-y-scroll`}>
            {/** header */}
            <Stack>
                <LocationStayingPage>
                    <>
                        <NormalPageStaying label={'Home'} href={'/'}/>
                        <ActivePageStaying label={'Restaurant'}/>
                    </>
                </LocationStayingPage>
                {/** Image and detail about restaurant */}
                <SlideRestaurantDetail data={restaurantById.data}/>
            </Stack>
            <div className={'container mx-auto pt-5'}>
                <Divider/>
            </div>
            {/** content*/}
            <div className={'container mx-auto h-[auto] flex flex-col'}>
                {/** Left Side */}
                <div className={'py-5 w-[100%] flex flex-col space-y-5'}>
                    {/** list food type in restaurant */}
                    <GroupRadio value={foodType} setValue={setFoodType} data={dataOfFoodType}
                                label={'Food Type'}/>
                    {/** list food category in restaurant */}
                    {/*<GroupRadio value={foodCategory} setValue={setFoodCategory} data={getCategoryByRestaurantId.data}*/}
                    {/*            label={'Food Category'}/>*/}
                    <Stack className={'flex flex-col space-y-3'}>
                        <p className={`text-lg`}>Food Category</p>
                        <FormControl sx={{pl: "30px"}}>
                            <CustomRadio label={"All"} check={foodCategory === undefined}
                                         onClick={() => setFoodCategory(undefined)}
                            />
                            {
                                getCategoryByRestaurantId.data.map(item =>
                                    <CustomRadio key={item.id} label={item.name} check={foodCategory === item.name}
                                                 onClick={() => setFoodCategory(item.name)}
                                    />
                                )
                            }

                        </FormControl>
                    </Stack>
                </div>

                <Divider orientation="vertical"/>
                {/** Right Side */}
                <div className={'overflow-y-scroll h-[400px]'}>
                    {/** list food in restaurant */}
                    <FoodDetail id={id} food_category={foodCategory} foodType={foodType}/>
                </div>
            </div>
        </div>
    );
};

export default RestaurantById;
