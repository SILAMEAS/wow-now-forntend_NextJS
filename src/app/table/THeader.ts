import React from "react";

export type Order = 'asc' | 'desc';

export interface HeadCell<T> {
    disablePadding: boolean;
    id: keyof T;
    label: string;
    numeric: boolean;
}

export interface EnhancedTableProps<T> {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof T) => void;
    order: Order;
    orderBy: keyof T;
    rowCount: number;
}
