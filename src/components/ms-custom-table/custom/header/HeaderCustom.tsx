import {Box, TableCell, TableCellProps, TableHead, TableRow, TableSortLabel, TableSortLabelProps,} from '@mui/material';
import React, {ReactNode} from 'react';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import {visuallyHidden} from '@mui/utils';
import {SxProps} from "@mui/system"
import MSText from "@/components/mui-text/MSText";
import {Ascending, Descending, Order} from "@/redux/api/service/restaurant/typeRestaurant";


export const styleInTable: SxProps = {
    fontWeight: 500,
    fontSize: 12,
    // textTransform: 'capitalize',
};

export interface HeadCellCustom<T> {
    id: keyof T;
    label: string;
    disableSort: boolean;
    tableCellProps: TableCellProps;
    tableSortLabelProps: TableSortLabelProps;
    hidden?: boolean;
    render?: (props: T) => ReactNode;
}

interface EnhancedTablePropsCustom<T> {
    headCells: readonly HeadCellCustom<T>[];
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof T) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
    hidden?: boolean;
    isCorporateAdmin?: boolean;
}

export function EnhancedTableHeadCustom<T>(
    props: Readonly<EnhancedTablePropsCustom<T>>,
) {
    const {order, orderBy, onRequestSort, headCells} = props;

    const createSortHandler =
        (property: keyof T) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };
    const iconSort = () => {
        if (order === Ascending) {
            return <ArrowDropDownIcon sx={{fontSize: '15px'}}/>;
        } else {
            return <ArrowDropUpIcon sx={{fontSize: '15px'}}/>;
        }
    };
    return (
        <TableHead sx={{visibility: props.hidden ? 'collapse' : 'visible'}}>
            <TableRow
                style={{
                    height: '48px',
                }}>
                {headCells
                    .filter(item => !item.hidden) // filter out all the cells that have hide=true
                    .map(headCell => (
                        <TableCell
                            {...headCell.tableCellProps}
                            key={headCell.label}
                            padding={
                                'checkbox'
                            }
                            sortDirection={orderBy === headCell.id ? order : false}>
                            {headCell.disableSort ? (
                                <MSText
                                    text={headCell.label}
                                    myStyle={{...styleInTable, mr: 2, color: 'white'}}
                                />
                            ) : (
                                <TableSortLabel
                                    {...headCell.tableSortLabelProps}
                                    active={orderBy === headCell.id}
                                    direction={orderBy === headCell.id ? order : Ascending}
                                    hideSortIcon={orderBy !== headCell.id}
                                    IconComponent={iconSort}
                                    onClick={createSortHandler(headCell.id)}>
                                    <MSText
                                        text={headCell.label}
                                        myStyle={{...styleInTable, cursor: 'pointer', mr: 2, color: 'white'}}
                                    />
                                    {orderBy === headCell.id ? (
                                        <Box component="span" sx={visuallyHidden}>
                                            {order === Descending
                                                ? 'sorted descending'
                                                : 'sorted ascending'}
                                        </Box>
                                    ) : null}
                                </TableSortLabel>
                            )}
                        </TableCell>
                    ))}
            </TableRow>
        </TableHead>
    );
}
