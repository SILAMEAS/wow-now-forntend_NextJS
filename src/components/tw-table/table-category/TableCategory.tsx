"use client"
import React from 'react';
import {useGetCategoryByRestaurantIdQuery} from "@/redux/api/service/restaurant/restaurantApi";
import BackDropLoading from "@/components/mui-backdrop/BackDropLoading";
import AddButton from "@/components/ms-button/AddButton";
import DialogCustom from "@/components/ms-dailog/DialogCustom";
import {useTriggerOpen} from "@/components/ms-dailog/useDialog";

interface ITableCategory<T> {
    tableName: string;
    data: Array<T>;
}

function TableCategory() {
    const open = useTriggerOpen();
    const getCategoryByResId = useGetCategoryByRestaurantIdQuery({id: 1})
    // const {tableName, data} = props;
    if (getCategoryByResId.isLoading) {
        return <BackDropLoading open={true}/>
    }

    return (
        <div className={`flex flex-col gap-5 relative h-[80vh]`}>
            <p className={`bg-blue-600`}>Category</p>
            <AddButton onClick={open.open}/>
            <DialogCustom open={open.isOpen}
                          titleDialog={<div onClick={open.close}>Create Category</div>}
                          contentDialog={<div>Content Create Category</div>}
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
                                <button className={`bg-gray-700 px-2 rounded-md text-gray-600 cursor-not-allowed `}>Edit
                                </button>
                                <button className={`bg-red-600 px-2 rounded-md text-white`}>Delete</button>
                            </td>
                        </tr>
                    )
                }
                </thead>
            </table>
        </div>
    );
}

export default TableCategory;
