"use client"
import React from 'react';
import {Ascending, defaultValuePagination, IReqListRestaurant} from "@/redux/api/service/restaurant/typeRestaurant";
import {useTriggerOpen} from "@/components/ms-dailog/useDialog";
import DialogCustom from "@/components/ms-dailog/DialogCustom";
import TitleDialogFood from "@/app/owner/food/action/TitleDialogFood";
import ContentDialogFood from "@/app/owner/food/action/ContentDialogFood";
import {IResFood} from "@/redux/api/service/food/typeFood";
import {useAppSelector} from "@/redux/api/hook/hoots";
import ExampleUsageTableCustom from "@/components/ms-custom-table/example/ExampleUsageTableCustom";
import {TestData} from "@/components/ms-custom-table/headCell/headCellsExample";
import AddButton from "@/components/ms-button/AddButton";

const FoodOwner = () => {
    const [filter, setFilter] = React.useState<IReqListRestaurant>({
        ...defaultValuePagination,
        pageSize: 9,
        sortOrder: Ascending
    });
    const {restaurant} = useAppSelector(state => state.authReducer)
    const triggerOpen = useTriggerOpen();
    const [isCreated, setIsCreated] = React.useState<boolean>(true);
    const [foodSelected, setFoodSelected] = React.useState<IResFood | null>(null);
    const handleViewDetailPage = (dataProps: TestData) => {
        triggerOpen.open();
        setIsCreated(false);
        setFoodSelected(dataProps);

    }
    return (
        <>
            <ExampleUsageTableCustom<TestData> handleViewDetailPage={handleViewDetailPage}/>

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
