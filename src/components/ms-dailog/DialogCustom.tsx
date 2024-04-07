import {Dialog, DialogActions, DialogContent, DialogProps, DialogTitle, SxProps,} from "@mui/material";
import * as React from "react";
import {PropsWithChildren} from "react";
import {TransitionProps} from "@mui/material/transitions";
import Slide from "@mui/material/Slide";

type INGDialog = {
    open: boolean;
    handleClose?: () => void;
    titleDialog?: JSX.Element;
    contentDialog?: JSX.Element;
    actionDialog?: JSX.Element;
    sxProp?: {
        titleSx?: SxProps;
        contentsSx?: SxProps;
        actionSx?: SxProps;
    };
};
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const DialogCustom = ({
                          open,
                          handleClose,
                          titleDialog,
                          contentDialog,
                          actionDialog,
                          sxProp,
                          ...props
                      }: INGDialog & DialogProps & PropsWithChildren) => {
    return (
        <Dialog {...props} open={open} onClose={handleClose}>
            {titleDialog && (
                <DialogTitle sx={{...sxProp?.titleSx}}>{titleDialog}</DialogTitle>
            )}
            {contentDialog && (
                <DialogContent sx={{...sxProp?.contentsSx}}>
                    {contentDialog}
                </DialogContent>
            )}
            {actionDialog && (
                <DialogActions sx={{...sxProp?.actionSx}}>
                    {actionDialog}
                </DialogActions>
            )}
            {props.children}
        </Dialog>
    );
};

export default DialogCustom;
