"use client";
import { ConstantStyle } from "@/Constant/ConstantColor";
import ChipsArray, { ChipData } from "@/app/general/components/ChipArray";
import { Button, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useMemo } from "react";
import { HandleReq } from "../request/HandleReq";
import { useUpdateTitle } from "./useUpdateTitle";

export const useGetTitle = () => {
  const [chipData, setChipData] = React.useState<ChipData[] | null>(null);
  const [chipSelected, setChipSelected] = React.useState<ChipData | null>(null);

  const { render: renderUpdateType } = useUpdateTitle(chipSelected);
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
    reqHandle.getTitle().then((res) => {
      const { data } = res;
      if (data) {
        const modify = data.map((item: any) => {
          if (item) {
            const { id, label } = item;
            return { key: id, label };
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
      <Typography sx={{ ...ConstantStyle.text.titlePage }}>Title</Typography>
      <Stack direction={"row"} justifyContent={"center"} spacing={"50px"}>
        <Stack direction={"row"} alignItems={"center"} spacing={"30px"}>
          <Typography
            sx={{ ...ConstantStyle.text.titlePage, fontSize: "14px" }}
          >
            Label :{" "}
          </Typography>{" "}
          <TextField
            placeholder={"LABEL TITLE  "}
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
            value={createType.value}
            placeholder={"VALUE TITLE  "}
            onChange={(e) =>
              setCreateType({ ...createType, value: e.target.value })
            }
          />
        </Stack>

        <Button
          variant="outlined"
          disabled={
            createType.label === "" ||
            createType.value === "" ||
            !!(chipData && chipData.length > 0)
          }
          onClick={async () => {
            await reqHandle.addTitle(createType);
            setCreateType({ label: "", value: "" });
            getType();
          }}
        >
          Add title
        </Button>
      </Stack>
      {/** Render Item **/}
      {chipData && (
        <ChipsArray
          title={
            <Typography
              sx={{ ...ConstantStyle.text.titlePage, fontSize: "14px" }}
            >
              Title of special product is :
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
