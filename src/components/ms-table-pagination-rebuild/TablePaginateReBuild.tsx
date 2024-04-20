import {Pagination} from '@mui/material';
import {ChangeEvent} from 'react';

type ITablePaginateReBuild = {
    handleChangePage: (event: unknown, newPage: number) => void;
    totalPage: number;
    page: number;
};

export const TablePaginateReBuild = (props: ITablePaginateReBuild) => {
    const {handleChangePage, totalPage, page} = props;
    const onChangePaginate = (event: ChangeEvent<unknown>, page: number) => {
        handleChangePage(event, page);
    };

    return (
        <Pagination
            count={totalPage}
            shape="rounded"
            color="primary"
            page={page}
            onChange={onChangePaginate}
        />
    );
};
