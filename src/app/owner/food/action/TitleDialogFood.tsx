import React from 'react';
import {IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface ITitleDialogFood {
    isCreated: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>

}

const TitleDialogFood = ({isCreated, onClick}: ITitleDialogFood) => {
    return (
        <div className={`flex justify-between w-[100%]`}>
            <p>{`${isCreated ? "Create" : "Update"} Foods`}</p>
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

export default TitleDialogFood;
