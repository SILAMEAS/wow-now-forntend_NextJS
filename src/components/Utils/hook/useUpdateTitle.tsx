"use client";
import { ConstantStyle } from "@/Constant/ConstantColor";
import { ChipData } from "@/app/general/components/ChipArray";
import { Button, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { HandleReq } from "../request/HandleReq";
export const useUpdateTitle = (chipSelected: ChipData | null) => {
  console.log("useUpdateTitle", chipSelected);
  const [updateType, setUpdateType] = React.useState<{
    label: string;
  }>({
    label: "",
  });
  const reqHandle = new HandleReq();
  React.useEffect(() => {
    chipSelected?.label && setUpdateType({ label: chipSelected.label });
  }, [chipSelected]);

  const render = (
    <Stack spacing={2}>
      <Typography sx={{ ...ConstantStyle.text.titlePage }}>
        UPDATE TITLE
      </Typography>
      <Stack direction={"row"} justifyContent={"center"} spacing={"50px"}>
        <Stack direction={"row"} alignItems={"center"} spacing={"30px"}>
          <Typography
            sx={{ ...ConstantStyle.text.titlePage, fontSize: "14px" }}
          >
            Label
          </Typography>{" "}
          <TextField
            placeholder={"LABEL TITLE  "}
            value={updateType.label}
            onChange={(e) =>
              setUpdateType({ ...updateType, label: e.target.value })
            }
          />
        </Stack>
        <Stack direction={"row"} alignItems={"center"} spacing={"30px"}>
          <Typography
            sx={{ ...ConstantStyle.text.titlePage, fontSize: "14px" }}
          >
            Value
          </Typography>{" "}
          <TextField value={""} placeholder={"VALUE TITLE  "} disabled={true} />
        </Stack>
      </Stack>
      <Button
        variant="contained"
        disabled={updateType.label === ""}
        onClick={async () => {
          chipSelected?.id &&
            (await reqHandle.editTitle({
              id: chipSelected.id,
              label: updateType.label,
            }));
          return window.location.reload();
        }}
      >
        UPDATE TITLE
      </Button>
    </Stack>
  );
  return { render };
};
