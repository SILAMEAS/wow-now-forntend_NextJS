import React from 'react';
import {FormControl, Radio, Stack} from "@mui/material";
import {ICategory,} from "@/redux/api/service/restaurant/typeRestaurant";

export const defaultFoodType = {vegetarian: false, seasanal: false, nonveg: false, none: false}

export interface IFoodType {
    vegetarian: boolean,
    seasanal: boolean,
    nonveg: boolean,
    none: boolean
}

export interface IGroupRadio {
    value: IFoodType,
    setValue: React.Dispatch<React.SetStateAction<IFoodType>>,
    data: Array<ICategory>,
    label: string
}

const GroupRadio = ({value, setValue, data, label}: IGroupRadio) => {
    return (
        <Stack className={'flex flex-col space-y-3'}>
            <p className={`text-lg`}>{label}</p>
            <FormControl sx={{pl: "30px"}}>
                <CustomRadio label={'ALL'} check={value.none}
                             onClick={() => setValue({...defaultFoodType, none: true})}/>
                <CustomRadio label={'Seasanal'} check={value.seasanal}
                             onClick={() => setValue({...defaultFoodType, seasanal: true})}/>
                <CustomRadio label={'Vegetarian'} check={value.vegetarian}
                             onClick={() => setValue({...defaultFoodType, vegetarian: true})}/>
                <CustomRadio label={'Nonveg'} check={value.nonveg}
                             onClick={() => setValue({...defaultFoodType, nonveg: true})}/>

            </FormControl>
        </Stack>

    );
};
export const CustomRadio = ({check, label, onClick}: {
    check?: boolean,
    label?: string,
    onClick?: React.MouseEventHandler<HTMLDivElement>
}) => {
    return <div className={'flex flex-row items-center'} onClick={onClick}>
        <Radio checked={check}/>
        <p>{label}</p>
    </div>
}
export default GroupRadio;
