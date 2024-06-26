import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {IResFood} from "@/redux/api/service/food/typeFood";

export default function CardFood({food}: { food: IResFood }) {
    const theme = useTheme();
    return (
        <Card sx={{display: 'flex', minHeight: '120px'}}>
            <CardMedia
                component="img"
                sx={{width: '100px', height: "100px", borderRadius: '50%'}}
                image={food.images[0]}
                alt="Live from space album cover"
            />
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{flex: '1 0 auto'}}>
                    <p>{food.name}</p>
                    <p>{food.price} $</p>
                    <p>{"available : " + food.available} </p>
                    {/*<Typography component="div" variant="h5">*/}
                    {/*    Live From Space*/}
                    {/*</Typography>*/}
                    {/*<Typography variant="subtitle1" color="text.secondary" component="div">*/}
                    {/*    Mac Miller*/}
                    {/*</Typography>*/}
                </CardContent>
            </Box>

        </Card>
    );
}
