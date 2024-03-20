"use client";
import { Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

const HomePage = () => {
  const navigation = useRouter();
  return (
    <Stack alignItems={"center"} justifyContent={"center"} height={"100vh"}>
      Loading ...
    </Stack>
  );
};

export default HomePage;
