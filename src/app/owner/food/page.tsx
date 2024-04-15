"use client"
import React from 'react';
import {defaultValuePagination, IReqListRestaurant} from "@/redux/api/service/restaurant/typeRestaurant";
import {useGetFoodsByRestaurantIdQuery} from "@/redux/api/service/food/foodApi";
import {useTriggerOpen} from "@/components/ms-dailog/useDialog";
import DialogCustom from "@/components/ms-dailog/DialogCustom";
import {Pagination, Skeleton, Stack} from "@mui/material";
import TitleDialogFood from "@/app/owner/food/action/TitleDialogFood";
import ContentDialogFood from "@/app/owner/food/action/ContentDialogFood";
import {IResFood, sortOrder} from "@/redux/api/service/food/typeFood";
import AddButton from "@/components/ms-button/AddButton";
import {useAppSelector} from "@/redux/api/hook/hoots";

const FoodOwner = () => {
    const [filter, setFilter] = React.useState<IReqListRestaurant>({
        ...defaultValuePagination,
        pageSize: 9,
        sortOrder: sortOrder.DESC
    });
    const {restaurant} = useAppSelector(state => state.authReducer)
    const listFoods = useGetFoodsByRestaurantIdQuery({id: restaurant?.id ?? 0, ...filter}, {skip: !restaurant?.id});
    const triggerOpen = useTriggerOpen();
    const [isCreated, setIsCreated] = React.useState<boolean>(true);
    const [foodSelected, getFoodSelected] = React.useState<IResFood | null>(null);

    return (
        <section className={`relative`}>
            {/** title of render restaurants **/}
            <AddButton onClick={() => {
                triggerOpen.open();
                setIsCreated(true);
            }}/>
            <DialogCustom
                maxWidth={'md'}
                open={triggerOpen.isOpen}
                sxProp={{
                    titleSx: {
                        width: '100%'
                    }
                }}
                titleDialog={
                    <TitleDialogFood onClick={triggerOpen.close} title={`${isCreated ? "Create" : "Update"} Foods`}/>
                }
                contentDialog={
                    <ContentDialogFood foodSelected={foodSelected} isCreate={isCreated}
                                       actionUpdateReq={() => triggerOpen.close()}/>
                }
                handleClose={triggerOpen.close}/>
            {/** Render Restaurants */}
            <div className={'flex  items-center  flex-col space-y-10 h-[85vh] justify-between'}>
                {/** list of restaurants */}
                <div className={`flex flex-wrap gap-3 mx-auto justify-center w-[100%] `}>
                    {
                        listFoods.isLoading || listFoods.isFetching ?
                            <CardLoading/> :
                            listFoods.currentData?.contents && listFoods.currentData?.contents.length == 0 ?
                                <p className={`bg-pink-700 text-center p-5`}>{`Don't have food in restaurant ! Please Create one`}</p> :
                                listFoods.data?.contents.map(item =>
                                    <div key={item.id} className={'w-[200px]'} onClick={() => {
                                        getFoodSelected(item);
                                    }}>
                                        <div className={'relative cursor-pointer'} onClick={() => {
                                            triggerOpen.open();
                                            setIsCreated(false);
                                        }}>
                                            <img src={item.images[0]} className={`w-full h-[200px] rounded-lg`}
                                                 alt={"image/food"}/>
                                            <p className={`h-[30px] w-[30px] ${item.available ? "bg-green-600" : "bg-red-600"} absolute top-[10px] rounded-3xl right-[10px] pr-[3px] flex items-center justify-center text-sm`}>
                                                {item.price}$</p>
                                        </div>
                                        <p className={'w-fit'}>{item.name}</p>
                                        {/*<p className={'w-fit'}>{item.price} $</p>*/}
                                    </div>
                                )
                    }
                </div>
                {/** Footer of Restaurants */}
                <div>
                    {
                        !listFoods.isLoading &&
                        <Pagination
                            count={listFoods.data?.totalPages}
                            color="primary"
                            onClick={(e: any) => setFilter({...filter, pageNo: Number(e.target.innerText)})}
                            hideNextButton={true}
                            hidePrevButton={true}
                            shape="rounded"
                        />
                    }
                </div>
            </div>
        </section>
    );
};


const CardLoading = () => {
    return <Stack spacing={1} height={'22rem'} width={'20rem'}>
        {/** For variant="text", adjust the height via font-size */}
        <Skeleton variant="text" sx={{fontSize: '1rem'}}/>

        {/** For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="circular" width={40} height={40}/>
        <Skeleton variant="rectangular" width={210} height={60}/>
        <Skeleton variant="rounded" width={210} height={60}/>
    </Stack>
}


export default FoodOwner;
