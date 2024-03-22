import {PropsWithChildren} from "react";
import Navigation from "@/components/tailwind/navigation/Navigation";
import FooterNavigation from "@/components/tailwind/footer/footerNavigation/FooterNavigation";
import DashBoardOwner from "@/app/owner/dashboard/page";

export default function LayoutOwner({ children }: PropsWithChildren) {
  return (
      <div className="h-screen overflow-hidden flex flex-col justify-between">
        {/*<Navigation />*/}
        <div className="h-full bg-red-600">{children}</div>
        {/*<FooterNavigation/>*/}
      </div>
  );
}
