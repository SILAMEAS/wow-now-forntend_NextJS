"use client"
import React from 'react';
import {Ascending, defaultValuePagination, IReqListRestaurant} from "@/redux/api/service/restaurant/typeRestaurant";
import {useTriggerOpen} from "@/components/ms-dailog/useDialog";
import DialogCustom from "@/components/ms-dailog/DialogCustom";
import TitleDialogFood from "@/app/owner/food/action/TitleDialogFood";
import ContentDialogFood from "@/app/owner/food/action/ContentDialogFood";
import {IResFood} from "@/redux/api/service/food/typeFood";
import ExampleUsageTableCustom, {TestData} from "@/components/ms-custom-table/example/ExampleUsageTableCustom";
import AddButton from "@/components/ms-button/AddButton";

const FoodOwner = () => {
    const [filter, setFilter] = React.useState<IReqListRestaurant>({
        ...defaultValuePagination,
        pageSize: 9,
        sortOrder: Ascending
    });
    const triggerOpen = useTriggerOpen();
    const [isCreated, setIsCreated] = React.useState<boolean>(true);
    const [foodSelected, setFoodSelected] = React.useState<IResFood | null>(null);
    return (
        <>
            <ExampleUsageTableCustom<TestData> setFoodSelected={setFoodSelected} setIsCreated={setIsCreated} triggerOpen={triggerOpen}/>

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
            <AddButton onClick={() => {
                triggerOpen.open();
                setIsCreated(true);
            }}/>

        </>
    );
};


export default FoodOwner;
