import React from 'react';
import {Backdrop, CircularProgress} from "@mui/material";

const BackDropLoading = ({open}: { open: boolean }) => {
    return (
        <Backdrop
            sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
            open={open}
            // onClick={handleClose}
        >
            <CircularProgress color="inherit"/>
        </Backdrop>
    );
};

export default BackDropLoading;
