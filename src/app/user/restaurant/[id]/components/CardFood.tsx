import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function CardFood() {
    const theme = useTheme();

    return (
        <Card sx={{display: 'flex', minHeight: '100px'}}>
            <CardMedia
                component="img"
                sx={{width: '100%'}}
                image="/static/images/cards/live-from-space.jpg"
                alt="Live from space album cover"
            />
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{flex: '1 0 auto'}}>
                    <p>dsfhdslfd</p>
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
