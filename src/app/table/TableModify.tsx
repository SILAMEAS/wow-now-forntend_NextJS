import React from 'react';
import {ICreateData} from "@/app/table/typeCreateTable";
import {Order} from "@/app/table/THeader";
import {$getComparator, $stableSort} from "@/app/table/Sort";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import {EnhancedTableHead} from "@/app/table/RenderHeader";
import {StaticDataHeadCells} from "@/app/table/TCell";
import TableBody from "@mui/material/TableBody";
import {RenderCell} from "@/app/table/RenderCell";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TablePagination from "@mui/material/TablePagination";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import {Stack} from "@mui/material";

interface EnhancedTableToolbarProps {
    numSelected: number;
}

interface ITableModify<G> {
    rows: Array<G>

}

export function TableModify<G extends ICreateData>({rows}: ITableModify<G>) {
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof G>('id');
    const [selected, setSelected] = React.useState<readonly number[]>([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof G,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };


    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDense(event.target.checked);
    };


    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            $stableSort<G>(rows, $getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [order, orderBy, page, rowsPerPage],
    );

    return (
        <Stack sx={{width: '100%', height: '100%', bgcolor: "red", p: "20px"}}>
            <TableContainer>
                <Table
                    sx={{minWidth: 750}}
                    aria-labelledby="tableTitle"
                    size={dense ? 'small' : 'medium'}
                >
                    <EnhancedTableHead<G>
                        props={{
                            numSelected: selected.length,
                            order,
                            onRequestSort: handleRequestSort,
                            orderBy: orderBy,
                            rowCount: rows.length
                        }}
                        headCells={StaticDataHeadCells}
                    />
                    <TableBody>
                        {visibleRows.map((row, index) => {
                            return RenderCell<G>(row);
                        })}
                        {emptyRows > 0 && (
                            <TableRow
                                style={{
                                    height: (dense ? 33 : 53) * emptyRows,
                                }}
                            >
                                <TableCell colSpan={6}/>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense}/>}
                label="Dense padding"
            />
        </Stack>
    );
}
