"use client";
import React from "react";
import LayoutOwner from "@/app/owner/layout/LayoutOwner";
import TableRestaurant from "@/components/tw-table/table-restaurant/TableRestaurant";

const Ownerpage = () => {
    return (
        <LayoutOwner>
            <div className={'w-[100%] h-[100%]'}>
                <TableRestaurant/>
            </div>
        </LayoutOwner>

    );
};

export default Ownerpage;
