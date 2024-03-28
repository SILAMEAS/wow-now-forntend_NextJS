import React from 'react';
import {IResRestaurant} from "@/redux/api/service/restaurant/typeRestaurant";
import {IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        author: '@bkristastucchio',
        rows: 2,
        cols: 2,
        featured: true,
    }
];
const HeaderImageRestaurant = ({data}:{data: IResRestaurant}) => {
    return (
        <ImageList sx={{ width: 1000, height: 1000 }}>
            <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div">December</ListSubheader>
            </ImageListItem>
            {data.images.map((item) => (
                <ImageListItem key={item}>
                    <img
                        srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item}?w=248&fit=crop&auto=format`}
                        alt={item}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item}
                        subtitle={item}
                        actionIcon={
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                aria-label={`info about ${item}`}
                            >
                                <InfoIcon />
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
};

export default HeaderImageRestaurant;
