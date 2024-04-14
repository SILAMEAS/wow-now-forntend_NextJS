import React from 'react';
import {FormControl, FormControlLabel, Radio, RadioGroup, Stack} from "@mui/material";
import {ICategory,} from "@/redux/api/service/restaurant/typeRestaurant";

export interface IGroupRadio {
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    data: Array<ICategory>,
    label: string
}

const GroupRadio = ({value, setValue, data, label}: IGroupRadio) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };
    return (
        <Stack className={'flex flex-col space-y-3'}>
            <p className={`text-lg`}>{label}</p>

            <FormControl sx={{pl: "30px"}}>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel value={"empty"} control={<Radio/>} label={"All"}/>
                    {
                        data.map(item =>
                            <FormControlLabel value={item.id} control={<Radio/>} label={item.name} key={item.id}/>
                        )
                    }
                </RadioGroup>
            </FormControl>
        </Stack>

    );
};

export default GroupRadio;
