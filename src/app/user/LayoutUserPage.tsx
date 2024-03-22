import Navigation from "@/components/tailwind/navigation/Navigation";
import { PropsWithChildren } from "react";
import FooterNavigation from "@/components/tailwind/footer/footerNavigation/FooterNavigation";

export default function LayoutUserPage({ children }: PropsWithChildren) {
  return (
    <div className="h-screen overflow-hidden flex flex-col justify-between">
      <Navigation />
      <div className="h-full bg-black">{children}</div>
        <FooterNavigation/>
    </div>
  );
}
