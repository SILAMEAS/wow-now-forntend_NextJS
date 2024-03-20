"use client";
import { ConstantStyle } from "@/Constant/ConstantColor";
import { ChipData } from "@/app/general/components/ChipArray";
import { Button, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { HandleReq } from "../request/HandleReq";
export const useUpdateCategory = (chipSelected: ChipData | null) => {
  const reqHandle = new HandleReq();
  const [updateType, setUpdateType] = React.useState<{
    label: string;
    value: string | number;
  }>({
    label: "",
    value: "",
  });

  React.useEffect(() => {
    chipSelected?.label &&
      chipSelected?.value &&
      setUpdateType({ label: chipSelected.label, value: chipSelected.value });
  }, [chipSelected]);

  const render = (
    <Stack spacing={2}>
      <Typography sx={{ ...ConstantStyle.text.titlePage }}>
        UPDATE CATEGORY
      </Typography>
      <Stack direction={"row"} justifyContent={"center"} spacing={"50px"}>
        <Stack direction={"row"} alignItems={"center"} spacing={"30px"}>
          <Typography
            sx={{ ...ConstantStyle.text.titlePage, fontSize: "14px" }}
          >
            Label
          </Typography>{" "}
          <TextField
            placeholder={"LABEL CATEGORY "}
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
            disabled={true}
            placeholder={"VALUE CATEGORY  "}
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
            (await reqHandle.editCategory({
              id: chipSelected.id,
              label: updateType.label,
            }));
          return window.location.reload();
        }}
      >
        UPDATE CATEGORY
      </Button>
    </Stack>
  );
  return { render };
};
