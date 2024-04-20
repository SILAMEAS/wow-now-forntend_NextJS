import {TableCell, TableRow} from '@mui/material';
import {ICellCustom} from "@/components/ms-custom-table/type";

export function CellCustom<R extends Record<string, any>>(
    props: Readonly<ICellCustom<R>>,
): JSX.Element {
    const {visibleRows, handleViewDetailPage, headCells} = props;

    return (
        <>
            {visibleRows.map(row => {
                return (
                    <TableRow
                        hover
                        onClick={() => handleViewDetailPage(row)}
                        tabIndex={-1}
                        key={row.id}
                        sx={{
                            '&.MuiTableRow-root': {
                                height: '60px',
                                '&:hover': {
                                    /** when we hover on row will color main Color for them and opacity 10 **/
                                    backgroundColor: 'grey',
                                    color: ' #fff !important',
                                },
                            },
                            cursor: 'pointer',
                        }}>
                        {headCells.map(item => {
                            return (
                                <TableCell
                                    component="th"
                                    scope="row"
                                    padding="none"
                                    sx={{
                                        display: item.render && !item.hidden ? 'visible' : 'none',
                                    }}
                                    key={item.label}
                                    {...item.tableCellProps}
                                >
                                    {item.render && item.render(row)}
                                </TableCell>
                            );
                        })}
                    </TableRow>
                );
            })}
        </>
    );
}
