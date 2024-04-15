"use client"
import React, {useState} from 'react';
import {useTriggerOpen} from "@/components/ms-dailog/useDialog";
import {
    useGetCategoryByRestaurantIdQuery,
    useOwnerDeleteCategoryMutation
} from "@/redux/api/service/restaurant/restaurantApi";
import BackDropLoading from "@/components/mui-backdrop/BackDropLoading";
import AddButton from "@/components/ms-button/AddButton";
import DialogCustom from "@/components/ms-dailog/DialogCustom";
import ContentDialogCategory from "@/app/owner/category/actions/ContentDialogCategory";
import {ICategory} from "@/redux/api/service/restaurant/typeRestaurant";
import TitleDialogFood from "@/app/owner/food/action/TitleDialogFood";
import {useAppSelector} from "@/redux/api/hook/hoots";

function Category() {
    const open = useTriggerOpen();
    const [isCreated, setIsCreated] = useState<boolean>(false)
    const [categorySelect, setCategorySelect] = useState<ICategory | null>(null);
    const {restaurant} = useAppSelector(state => state.authReducer)
    const getCategoryByResId = useGetCategoryByRestaurantIdQuery({id: restaurant?.id ?? 0}, {skip: !restaurant?.id});
    const [deleteCategory, resultDeleteCategory] = useOwnerDeleteCategoryMutation()
    if (getCategoryByResId.isLoading) {
        return <BackDropLoading open={true}/>
    }
    return (
        <div className={`flex flex-col gap-5 relative h-[80vh]`}>
            <p className={`bg-blue-600`}>List Categories</p>
            <AddButton onClick={() => {
                open.open();
                setIsCreated(true);
            }}/>
            <BackDropLoading open={resultDeleteCategory.isLoading}/>
            <DialogCustom open={open.isOpen}
                          titleDialog={
                              <TitleDialogFood onClick={open.close}
                                               title={`${isCreated ? "Create" : "Update"} Category`}/>
                          }
                          contentDialog={<ContentDialogCategory categorySelected={categorySelect} isCreated={isCreated}
                                                                actionUpdateReq={() => open.close()}
                          />}
            />
            <table className="border-separate border border-slate-500 w-full">
                <thead>
                <tr>
                    <td className="border border-slate-600 w-[20%]">ID</td>
                    <td className="border border-slate-600  w-full">Name</td>
                    <td className="border border-slate-600  w-[10%]">Action</td>
                </tr>
                </thead>
                <thead>
                {
                    getCategoryByResId.currentData?.map(tRow =>
                        <tr key={tRow.id}>
                            <td className="border border-slate-700  ">{tRow.id}</td>
                            <td className="border border-slate-700  ">{tRow.name}</td>
                            <td className="border border-slate-700 flex gap-1 ">
                                <button className={`bg-blue-700 px-2 rounded-md text-white `}
                                        onClick={() => {
                                            open.open();
                                            setCategorySelect(tRow);
                                            setIsCreated(false);
                                        }}>Edit
                                </button>
                                <button className={`bg-red-600 px-2 rounded-md text-white`} onClick={async () => {
                                    await deleteCategory({id: tRow.id}).unwrap()
                                }}>Delete
                                </button>
                            </td>
                        </tr>
                    )
                }
                </thead>
            </table>
        </div>
    );
}

export default Category;
