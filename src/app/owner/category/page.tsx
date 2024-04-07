import React from 'react';
import TableCategory from "@/components/tw-table/table-category/TableCategory";
import TableItemCategory from "@/components/tw-table/table-item-category/TableItemCategory";

const Category = () => {
    return (
        <div className={`space-y-3`}>
            <TableCategory/>
            <TableItemCategory/>
        </div>
    );
};

export default Category;
