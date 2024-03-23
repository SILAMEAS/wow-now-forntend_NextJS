import {PropsWithChildren} from "react";

export default function LayoutOwner({ children }: PropsWithChildren) {
  return (
      <div className="h-screen overflow-hidden flex flex-col justify-between">
        {/*<Navigation />*/}
        <div className="h-full bg-red-600">{children}</div>
        {/*<FooterNavigation/>*/}
      </div>
  );
}
