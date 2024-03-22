import LayoutUserPage from "./LayoutUserPage";

import React from "react";
import CardDetailPrepareToBy from "@/components/tailwind/cart/CardDetailPrepareToBuy";

const User = () => {
  return (
    <LayoutUserPage>
        <div className="h-full flex justify-center items-center">
           <p className="text-white"> User page</p>
        </div>
    </LayoutUserPage>
  );
};

export default User;
