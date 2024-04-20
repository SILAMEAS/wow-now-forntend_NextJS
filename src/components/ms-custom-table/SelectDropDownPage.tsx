import {
    MenuItem,
    MenuItemProps,
    Select,
    SelectChangeEvent,
    SelectProps,
    Typography,
    TypographyProps,
} from '@mui/material';
import {ReactNode} from 'react';

type ISelectDropDownPage = {
    rowPerPagesOption: number[];
    value: string;
    handleChange: (event: SelectChangeEvent<any>, child: ReactNode) => void;
    selectProps?: SelectProps;
    menuItemProps?: MenuItemProps;
    typographyProps?: TypographyProps;
    onlyShowItem?: boolean;
    items: number;
};

export const SelectDropDownPage = (props: ISelectDropDownPage) => {
    const {
        rowPerPagesOption = [10],
        handleChange,
        value = 10,
        selectProps,
        menuItemProps,
        typographyProps,
        items,
        onlyShowItem = false,
    } = props;

    const menuItemSelect = () => {
        return rowPerPagesOption.map(item => (
            <MenuItem
                {...menuItemProps}
                key={item}
                value={item}
                disabled={items + 10 <= item}>
                <Typography {...typographyProps}>
                    {item}
                    {onlyShowItem
                        ? ''
                        : ` per-page`}
                </Typography>
            </MenuItem>
        ));
    };
    return (
        <Select
            {...selectProps}
            value={value}
            onChange={handleChange}
            displayEmpty
            inputProps={{'aria-label': 'Without label'}}>
            {menuItemSelect()}
        </Select>
    );
};
