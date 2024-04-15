import React from 'react';
import {IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface ITitleDialogFood {
    title: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>

}

const TitleDialog = ({title, onClick}: ITitleDialogFood) => {
    return (
        <div className={`flex justify-between w-full bg-pink-700`}>
            <p className={'p-2'}>{title}</p>
            <IconButton
                edge="start"
                color="inherit"
                onClick={onClick}
                aria-label="close"
            >
                <CloseIcon/>
            </IconButton>
        </div>
    );
};

export default TitleDialog;
