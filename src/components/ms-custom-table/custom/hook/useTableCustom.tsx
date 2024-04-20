import React, {useState} from 'react';
import {EnumTableFooterType} from "@/components/ms-custom-table/type";
import {defaultValuePagination, IReqListRestaurant} from "@/redux/api/service/restaurant/typeRestaurant";


export interface IFilterTableCustom extends IReqListRestaurant {
}

export const useTableCustom = <T extends Record<string, any>>(
    tableFooterType: EnumTableFooterType,
) => {
    const [filter, setFilter] = useState<IReqListRestaurant>(defaultValuePagination);
    const [visibleRows, setVisibleRows] = useState<Array<T>>([]);
    const [selected, setSelected] = React.useState<readonly number[]>([]);
    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = visibleRows.map(n => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };
    return {
        visibleRows,
        setVisibleRows,
        handleSelectAllClick,
        selected,
        setSelected,
        filter,
        setFilter,
        tableFooterType,
    };
};
