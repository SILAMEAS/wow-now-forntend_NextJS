import { HandleReq } from "@/components/Utils/request/HandleReq";
import NGDialog from "@/components/ms-dailog/NGDialog";
import { useDialog } from "@/components/ms-dailog/useDialog";
import { MSProductImageModify } from "@/components/ms-image/MSImage";
import { Button, Stack, Typography } from "@mui/material"; // Import the Image component
import Grid from "@mui/material/Grid";
import React from "react";
import { ConstantStyle } from "../../../../Constant/ConstantColor";

export function ShowImage({ itemData }: any) {
  return (
    <Grid
      container
      spacing={3}
      justifyContent={itemData.length === 1 ? "center" : ""}
    >
      {itemData.map((item: any, index: number) => (
        <Grid key={item?.uri} item lg={itemData.length > 1 ? 6 : 12}>
          <Stack alignItems={"center"} justifyContent={"center"}>
            <MSProductImageModify
              src={item?.uri} // Use the src prop for the image URL
              alt={item?.name}
              sx={{
                height: "auto",
                width: itemData.length > 1 ? "500px" : "600px",
              }}
            />
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
}
export function ShowImageDes({ itemData }: any) {
  const DialogUse = useDialog();
  const endPoint = new HandleReq();
  const [id, setId] = React.useState<string | null>(null);
  return (
    <Grid container spacing={3}>
      <NGDialog
        open={DialogUse.isOpen}
        maxWidth={"xl"}
        sxProp={{
          titleSx: {
            p: "40px",
          },
          contentsSx: {
            p: "40px",
          },
          actionSx: {
            padding: "14px 24px",
          },
        }}
        titleDialog={
          <Typography sx={{ ...ConstantStyle.text.titlePage }}>
            Do you want to delete this new?
          </Typography>
        }
        actionDialog={
          <Stack direction={"row"} spacing={5}>
            <Button variant="contained" color="info" onClick={DialogUse.close}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={async () => {
                if (id) {
                  await endPoint.deleteImgById({ id: id });
                  window.location.reload();
                }
              }}
            >
              Delete
            </Button>
          </Stack>
        }
      />
      {itemData?.map((item: any, index: number) => (
        <Grid key={item?.uri} item lg={12}>
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            onClick={() => {
              setId(item.id);
              DialogUse.open();
            }}
          >
            <MSProductImageModify
              src={item?.uri} // Use the src prop for the image URL
              alt={item?.name}
              sx={{ height: "auto", width: "900px" }}
            />
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
}
