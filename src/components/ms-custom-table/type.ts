import React, {ReactNode} from 'react';
import {HeadCellCustom} from "@/components/ms-custom-table/custom/header/HeaderCustom";
import {IFilterTableCustom} from "@/components/ms-custom-table/custom/hook/useTableCustom";

export enum EnumTableFooterType {
    pagination = 'pagination',
    infiniteScroll = 'infiniteScroll',
}

export interface ITableCustom<P, T> {
    emptyData?: ReactNode;
    tableFooterType: EnumTableFooterType;
    handleSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    headCells: readonly HeadCellCustom<T>[];
    visibleRows: T[];
    selected: readonly number[];
    isCorporateAdmin?: boolean;
    hasNext: boolean;
    actionReq: {
        isFetching: boolean;
        isError: boolean;
        error: any;
        isLoading: boolean;
    };
    handleViewDetailPage: (dataProps: T) => void;
    filter: IFilterTableCustom;
    setFilter: React.Dispatch<React.SetStateAction<IFilterTableCustom>>;
    currentData?: P;
}

export interface ICellCustom<R> {
    visibleRows: R[];
    handleViewDetailPage: (dataProps: R) => void;
    headCells: readonly HeadCellCustom<R>[];
}
