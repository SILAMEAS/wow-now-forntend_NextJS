"use client";
import { ConstantStyle } from "@/Constant/ConstantColor";
import { ChipData } from "@/app/general/components/ChipArray";
import { Button, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { HandleReq } from "../request/HandleReq";
export const useUpdateType = (chipSelected: ChipData | null) => {
  const [updateType, setUpdateType] = React.useState<{
    label: string;
    value: string | number;
  }>({
    label: "",
    value: "",
  });
  const reqHandle = new HandleReq();
  React.useEffect(() => {
    chipSelected?.label &&
      chipSelected?.value &&
      setUpdateType({ label: chipSelected.label, value: chipSelected.value });
  }, [chipSelected]);

  const render = (
    <Stack spacing={2}>
      <Typography sx={{ ...ConstantStyle.text.titlePage }}>
        UPDATE TYPE
      </Typography>
      <Stack direction={"row"} justifyContent={"center"} spacing={"50px"}>
        <Stack direction={"row"} alignItems={"center"} spacing={"30px"}>
          <Typography
            sx={{ ...ConstantStyle.text.titlePage, fontSize: "14px" }}
          >
            Label
          </Typography>{" "}
          <TextField
            placeholder={"LABEL TYPE  "}
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
          <TextField
            value={updateType.value}
            placeholder={"VALUE TYPE  "}
            disabled={true}
            onChange={(e) =>
              setUpdateType({ ...updateType, value: e.target.value })
            }
          />
        </Stack>
      </Stack>
      <Button
        variant="contained"
        disabled={updateType.label === "" || updateType.value === ""}
        onClick={async () => {
          chipSelected?.id &&
            (await reqHandle.editType({
              id: chipSelected.id,
              label: updateType.label,
            }));
          return window.location.reload();
        }}
      >
        UPDATE TYPE
      </Button>
    </Stack>
  );
  return { render };
};
