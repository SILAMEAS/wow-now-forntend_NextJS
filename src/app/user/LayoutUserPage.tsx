import Navigation from "@/components/tailwind/navigation/Navigation";
import Silder from "@/components/tailwind/slider/Silder";
import { PropsWithChildren } from "react";
import MSLogoutButton from "@/components/ms-button/MSLogoutButton";

export default function LayoutUserPage({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col">
      <Navigation />
      <Silder />
        <MSLogoutButton/>
      <div className="h-[calc(100vh-360px)]">{children}</div>
    </div>
  );
}
