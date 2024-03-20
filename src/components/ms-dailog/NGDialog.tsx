import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  SxProps,
} from "@mui/material";
import { PropsWithChildren } from "react";

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

const NGDialog = ({
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
        <DialogTitle sx={{ ...sxProp?.titleSx }}>{titleDialog}</DialogTitle>
      )}
      {contentDialog && (
        <DialogContent sx={{ ...sxProp?.contentsSx }}>
          {contentDialog}
        </DialogContent>
      )}
      {actionDialog && (
        <DialogActions sx={{ ...sxProp?.actionSx }}>
          {actionDialog}
        </DialogActions>
      )}
      {props.children}
    </Dialog>
  );
};

export default NGDialog;
