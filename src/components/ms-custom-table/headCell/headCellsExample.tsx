import {Button, IconButton, TableCellProps, Tooltip} from '@mui/material';
import {HeadCellCustom} from "@/components/ms-custom-table/custom/header/HeaderCustom";
import React from "react";
import {IResFood} from "@/redux/api/service/food/typeFood";
import MSText from "@/components/mui-text/MSText";
import DeleteIcon from '@mui/icons-material/Delete';

export interface TestData extends IResFood {
    action: number
}

const defaultTableCellProps: TableCellProps = {
    width: '210px',
    align: 'left',
    padding: 'none',
}
export const headCellsExample: readonly HeadCellCustom<TestData>[] = [
    {
        id: 'id',
        disableSort: false,
        hidden: true,
        label: 'id',
        tableCellProps: {
            ...defaultTableCellProps
        },
        tableSortLabelProps: {},
    },
    {
        id: 'images',
        disableSort: false,
        label: 'Images',
        tableCellProps: {
            ...defaultTableCellProps
        },
        tableSortLabelProps: {},
        render: data => (
            <Button>
                <img src={data.images[0]} className={`w-[60px] h-[60px] rounded-lg`}
                     alt={"image/food"}/>
            </Button>
        ),
    },
    {
        id: 'name',
        disableSort: false,
        label: 'Name',
        tableCellProps: {
            ...defaultTableCellProps
        },
        tableSortLabelProps: {},
        render: data => (
            <Button onClick={() => {
            }} sx={{bgcolor: 'red', color: 'white'}}>
                {data.name}
            </Button>
        ),
    },
    {
        id: 'price',
        disableSort: false,
        label: 'Price',
        tableCellProps: {
            width: '210px',
            align: 'center',
            padding: 'none',
        },
        tableSortLabelProps: {},
        render: data => (
            <MSText text={data.price + " $"} sx={{color: 'white'}}/>
        ),
    },
    {
        id: 'action',
        disableSort: false,
        hidden: true,
        label: 'Action',
        tableCellProps: {
            width: '210px',
            align: 'right',
            padding: 'none',
        },
        tableSortLabelProps: {},
        render: data => (
            <div className={`inline pr-2`}>
                <Tooltip title={"what to delete id : " + data.id}>
                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>
                </Tooltip>
            </div>
        ),
    },
];
