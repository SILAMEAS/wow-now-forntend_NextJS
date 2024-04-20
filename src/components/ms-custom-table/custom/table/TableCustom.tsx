import {
    SelectChangeEvent,
    Skeleton,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
} from '@mui/material';
import {useSnackbar} from 'notistack';
import React, {ReactNode} from 'react';
import {Waypoint} from 'react-waypoint';
import {EnumTableFooterType, ITableCustom} from "@/components/ms-custom-table/type";
import {EnhancedTableHeadCustom} from "@/components/ms-custom-table/custom/header/HeaderCustom";
import {CellCustom} from "@/components/ms-custom-table/custom/cell/CellCustom";
import {SelectDropDownPage} from "@/components/ms-custom-table/SelectDropDownPage";
import {TablePaginateReBuild} from "@/components/ms-table-pagination-rebuild/TablePaginateReBuild";
import NGText from "@/components/mui-text/MSText";
import {FigmaBody} from "@/Constant/figma/FigmaBody";
import {Ascending, Descending} from "@/redux/api/service/restaurant/typeRestaurant";


export interface IDataRow {
    id: number;
    name: string
}

export function TableCustom<
    P extends Record<string, any>,
    T extends Record<string, any>,
>({
      tableFooterType,
      handleSelectAllClick,
      headCells,
      visibleRows,
      selected,
      isCorporateAdmin = false,
      hasNext,
      actionReq: {isFetching, isError, error, isLoading},
      handleViewDetailPage,
      emptyData,
      setFilter,
      filter,
      currentData,
  }: Readonly<ITableCustom<P, T>>) {
    const {enqueueSnackbar, closeSnackbar} = useSnackbar();
    React.useEffect(() => {
        if (isError) {
            enqueueSnackbar(
                error.data.message,
                {
                    variant: 'error',
                },
            );
        }
        return () => closeSnackbar();
    }, [isError]);

    const gotoNextPage = ({currentPosition}: Waypoint.CallbackArgs) => {
        if (currentPosition === 'inside') {
            setFilter({...filter, pageNo: filter.pageNo + 1});
        }
    };
    const handleRequestSort = (
        _event: React.MouseEvent<unknown>,
        property: keyof T,
    ) => {
        const isAsc =
            filter.sortBy === property && filter.sortOrder === Ascending;
        setFilter({
            ...filter,
            pageNo: 1,
            sortOrder: isAsc ? Descending : Ascending,
            sortBy: String(property),
        });
    };
    const handleSelectPage = (event: SelectChangeEvent<any>) => {
        setFilter({...filter, pageNo: 1});
        setFilter({...filter, pageSize: Number(event.target.value)});
    };
    const handleChangePage = (_event: unknown, newPage: number) => {
        setFilter({...filter, pageNo: newPage});
    };
    return (
        <TableContainer
            sx={{
                height: `calc(100vh - 320px)`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                '&::-webkit-scrollbar': {
                    width: '0.1em',
                },

                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: 'grey',
                },
            }}>
            <Table stickyHeader aria-label="sticky table" size="small">
                <EnhancedTableHeadCustom<T>
                    numSelected={selected.length}
                    order={filter.sortOrder}
                    orderBy={filter.sortBy}
                    onSelectAllClick={handleSelectAllClick}
                    onRequestSort={handleRequestSort}
                    rowCount={visibleRows.length}
                    hidden={false}
                    isCorporateAdmin={isCorporateAdmin}
                    headCells={headCells}
                />
                <TableBody>
                    {visibleRows.length <= 0 ? (
                        SkeletonLoading({emptyData, isLoading, isFetching})
                    ) : (
                        /** render to show data in table **/
                        <>
                            <CellCustom<T>
                                visibleRows={visibleRows}
                                headCells={headCells}
                                handleViewDetailPage={handleViewDetailPage}
                            />
                            {/** Waypoint will process when we scroll end of data in table for fetch more data **/}
                            {tableFooterType === EnumTableFooterType.infiniteScroll &&
                                visibleRows.length > 0 &&
                                hasNext && (
                                    <TableRow>
                                        <TableCell>
                                            <Waypoint onEnter={gotoNextPage}/>
                                        </TableCell>
                                    </TableRow>
                                )}
                        </>
                    )}
                </TableBody>
            </Table>
            {/** Pagination **/}
            {tableFooterType === EnumTableFooterType.pagination && (
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    width={'100%'}
                    p="20px 20px">
                    <SelectDropDownPage
                        value={filter.pageSize.toString()}
                        selectProps={{size: 'small'}}
                        typographyProps={{
                            sx: {
                                fontSize: '14px',
                            },
                        }}
                        items={currentData ? currentData?.total : 0}
                        handleChange={handleSelectPage}
                        rowPerPagesOption={[10, 25, 50, 100]}
                    />
                    <TablePaginateReBuild
                        handleChangePage={handleChangePage}
                        totalPage={currentData?.totalPages ?? 0}
                        page={filter.pageNo}
                    />
                </Stack>
            )}
            <p className={`border-double border-2 py-2 text-center sticky`}>Total : {currentData?.total ?? 0}</p>

        </TableContainer>
    );
}

/** Skeleton for loading  **/
const SkeletonLoading = ({
                             isFetching,
                             isLoading,
                             emptyData,
                         }: {
    isFetching: boolean;
    isLoading: boolean;
    emptyData?: ReactNode;
}) => {
    if (isFetching || isLoading) {
        return (
            <Stack p={2} height="290px">
                {Array.from({length: 8}, (_, index: number) => (
                    <Skeleton
                        key={index}
                        variant="rectangular"
                        sx={{
                            borderRadius: '3px',
                            mb: 0.5,
                        }}
                        animation="pulse"
                        width={'auto'}
                        height={'35px'}
                    />
                ))}
            </Stack>
        );
    } else {
        return (
            <TableRow>
                <TableCell sx={{border: 'none', textAlign: 'center'}} colSpan={7}>
                    {emptyData ?? (
                        <NGText myStyle={{...FigmaBody.BodySmallBold}} text={'no-result'}/>
                    )}
                </TableCell>
            </TableRow>
        );
    }
};
