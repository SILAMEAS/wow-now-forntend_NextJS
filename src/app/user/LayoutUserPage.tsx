import Navigation from "@/components/tailwind/navigation/Navigation";
import Silder from "@/components/tailwind/slider/Silder";
import { PropsWithChildren } from "react";

export default function LayoutUserPage({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col">
      <Navigation />
      <Silder />
      <div className="h-[calc(100vh-360px)]">{children}</div>
    </div>
  );
}
