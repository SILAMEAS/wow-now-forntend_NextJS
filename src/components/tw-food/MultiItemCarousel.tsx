"use client"
import React from "react";
import {List, ListItem} from "@mui/material";
import {MockitemData} from "@/components/tw-food/MockData";
import ItemCarousel from "@/components/tw-food/ItemCarousel";
import {ConstantStyle} from "@/Constant/style/ConstantColor";

export const MultiItemCarousel=()=> {

    return (
        <List sx={{display:"flex",overflowX:"scroll",...ConstantStyle.scroll.scrollNormal}}>
            {
                MockitemData.map((item) =>
                    <ListItem key={item.img}>
                        <ItemCarousel image={item.img} title={item.title}/>
                    </ListItem>

                )
            }
        </List>
    );
}
