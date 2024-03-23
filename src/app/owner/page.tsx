"use client";
import LayoutOwner from "@/app/owner/layout/LayoutOwner";
import React from "react";
import DashBoardOwner from "@/app/owner/dashboard/page";

const Ownerpage = () => {
  return (
      <LayoutOwner>
        <DashBoardOwner/>
      </LayoutOwner>
  );
};

export default Ownerpage;
