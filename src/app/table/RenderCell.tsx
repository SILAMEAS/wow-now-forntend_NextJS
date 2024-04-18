import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import React from "react";
import {ICreateData} from "@/app/table/typeCreateTable";

export function RenderCell<T extends ICreateData>(row: T) {
    const [selected, setSelected] = React.useState<readonly number[]>([]);
    const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
        alert("id" + id);
    };
    const isSelected = (id: number) => selected.indexOf(id) !== -1;
    const isItemSelected = isSelected(row.id);
    return <TableRow
        hover
        onClick={(event) => handleClick(event, row.id)}
        role="checkbox"
        tabIndex={-1}
        key={row.id}
        selected={isItemSelected}
        sx={{cursor: 'pointer'}}
    >
        {
            Object.values(row).map(item =>
                <TableCell
                    key={item}
                    component="th"
                    scope="row"
                    padding="none"
                >
                    {item}
                </TableCell>)
        }
    </TableRow>
}
