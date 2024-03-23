import Navigation from "@/components/tailwind/navigation/Navigation";
import React, {PropsWithChildren, useMemo} from "react";
import FooterNavigation from "@/components/tailwind/footer/footerNavigation/FooterNavigation";

export default function LayoutUserPage({ children }: PropsWithChildren) {
  return (
    <div className="h-screen overflow-hidden flex flex-col justify-between">
      <Navigation />
      <div className="h-[1000px] bg-red-500">{children}</div>
        <FooterNavigation/>
    </div>
  );
}
