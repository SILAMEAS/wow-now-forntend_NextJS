"use client"
import React from "react";
import {IconButton, ImageList, ImageListItem, List, ListItem} from "@mui/material";
import {MockitemData} from "@/app/user/home/component/MockData";
import Paper from "@mui/material/Paper";
import ItemCarousel from "@/app/user/home/component/ItemCarousel";

export const MultiItemCarousel=()=> {

    return (
        <List sx={{display:"flex",overflowX:"scroll"}}>
            <IconButton>
                Left
            </IconButton>

            {
                MockitemData.map((item) =>
                    <ListItem key={item.img}>
                      <ItemCarousel image={item.img} title={item.title}/>
                    </ListItem>

                )
            }
            <IconButton>
                Left
            </IconButton>
        </List>
    );
}
