"use client";
import { ConstantStyle } from "@/Constant/ConstantColor";
import ChipsArray, { ChipData } from "@/app/general/components/ChipArray";
import { Button, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useMemo } from "react";
import { HandleReq } from "../request/HandleReq";
import { useUpdateCategory } from "./useUpdateCategory";

export const useGetCategory = () => {
  const [chipData, setChipData] = React.useState<ChipData[] | null>(null);
  const [chipSelected, setChipSelected] = React.useState<ChipData | null>(null);
  const { render: renderUpdateType } = useUpdateCategory(chipSelected);
  const [createType, setCreateType] = React.useState<{
    label: string;
    value: string;
  }>({
    label: "",
    value: "",
  });
  const reqHandle = new HandleReq();
  // get type
  const getCate = async () => {
    reqHandle.getCategory().then((res) => {
      const { data } = res;
      if (data) {
        const modify = data.map((item: any) => {
          if (item) {
            const { id, label, value } = item;
            return { key: id, label, value };
          }
        });
        setChipData(modify);
      } else return null;
    });
  };
  useMemo(() => {
    getCate();
  }, []);
  const render = (
    <Stack spacing={2}>
      <Typography sx={{ ...ConstantStyle.text.titlePage }}>Category</Typography>
      <Stack direction={"row"} justifyContent={"center"} spacing={"50px"}>
        <Stack direction={"row"} alignItems={"center"} spacing={"30px"}>
          <Typography
            sx={{ ...ConstantStyle.text.titlePage, fontSize: "14px" }}
          >
            Label :{" "}
          </Typography>{" "}
          <TextField
            value={createType.label}
            placeholder={"LABEL CATEGORY"}
            onChange={(e) =>
              setCreateType({ ...createType, label: e.target.value })
            }
          />
        </Stack>
        <Stack direction={"row"} alignItems={"center"} spacing={"30px"}>
          <Typography
            sx={{ ...ConstantStyle.text.titlePage, fontSize: "14px" }}
          >
            Value :
          </Typography>{" "}
          <TextField
            value={createType.value}
            placeholder={"VALUE CATEGORY"}
            onChange={(e) =>
              setCreateType({ ...createType, value: e.target.value })
            }
          />
        </Stack>

        <Button
          variant="outlined"
          disabled={createType.label === "" || createType.value === ""}
          onClick={async () => {
            await reqHandle.addCategory(createType);
            setCreateType({ label: "", value: "" });
            getCate();
          }}
        >
          Add Category
        </Button>
      </Stack>
      {/** Render Item **/}
      {chipData && (
        <ChipsArray
          title={
            <Typography
              sx={{ ...ConstantStyle.text.titlePage, fontSize: "14px" }}
            >
              Category :
            </Typography>
          }
          chipData={chipData}
          setChipData={setChipData}
          renderUpdate={renderUpdateType}
          setChipSelected={setChipSelected}
        />
      )}
    </Stack>
  );
  return { render };
};
