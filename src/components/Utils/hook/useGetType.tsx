"use client";
import { ConstantStyle } from "@/Constant/ConstantColor";
import ChipsArray, { ChipData } from "@/app/general/components/ChipArray";
import { Button, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useMemo } from "react";
import { HandleReq } from "../request/HandleReq";
import { useUpdateType } from "./useUpdateType";

export const useGetType = () => {
  const [chipData, setChipData] = React.useState<ChipData[] | null>(null);
  const [chipSelected, setChipSelected] = React.useState<ChipData | null>(null);
  const { render: renderUpdateType } = useUpdateType(chipSelected);
  const [createType, setCreateType] = React.useState<{
    label: string;
    value: string;
  }>({
    label: "",
    value: "",
  });
  const reqHandle = new HandleReq();
  // get type
  const getType = async () => {
    reqHandle.getType().then((res) => {
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
    getType();
  }, []);
  const render = (
    <Stack spacing={2}>
      <Typography sx={{ ...ConstantStyle.text.titlePage }}>Types</Typography>

      <Stack direction={"row"} justifyContent={"center"} spacing={"50px"}>
        <Stack direction={"row"} alignItems={"center"} spacing={"30px"}>
          <Typography
            sx={{ ...ConstantStyle.text.titlePage, fontSize: "14px" }}
          >
            Label :{" "}
          </Typography>{" "}
          <TextField
            placeholder={"LABEL TYPE  "}
            value={createType.label}
            onChange={(e) =>
              setCreateType({ ...createType, label: e.target.value })
            }
          />
        </Stack>
        <Stack direction={"row"} alignItems={"center"} spacing={"30px"}>
          <Typography
            sx={{ ...ConstantStyle.text.titlePage, fontSize: "14px" }}
          >
            {" "}
            Value :{" "}
          </Typography>{" "}
          <TextField
            placeholder={"VALUE TYPE  "}
            value={createType.value}
            onChange={(e) =>
              setCreateType({ ...createType, value: e.target.value })
            }
          />
        </Stack>

        <Button
          variant="outlined"
          disabled={createType.label === "" || createType.value === ""}
          onClick={async () => {
            await reqHandle.addType(createType);
            setCreateType({ label: "", value: "" });
            getType();
          }}
        >
          ADD TYPE
        </Button>
      </Stack>
      {/** Render Item **/}
      {chipData && (
        <ChipsArray
          title={
            <Typography
              sx={{ ...ConstantStyle.text.titlePage, fontSize: "14px" }}
            >
              Type :
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
