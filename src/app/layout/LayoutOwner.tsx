import React, {PropsWithChildren} from "react";
import RightSide from "@/app/layout/components/RightSide";

export default function OwnerLayout({children}: PropsWithChildren) {
    return (
        <div className="h-screen overflow-hidden flex flex-col justify-between">
            {/*<Navigation />*/}
            <div className="h-full bg-red-600">
                <div>
                    {/* component */}
                    <link rel="preconnect" href="https://rsms.me/"/>
                    <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
                    <style
                        dangerouslySetInnerHTML={{
                            __html:
                                "\n    :root { font-family: 'Inter', sans-serif; }\n@supports (font-variation-settings: normal) {\n  :root { font-family: 'Inter var', sans-serif; }\n}\n"
                        }}
                    />
                    <div className="antialiased bg-black w-full min-h-screen text-slate-300 relative py-4">
                        <div
                            className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2 h-[80vh]">
                            {/** Right */}
                            <RightSide/>
                            {/** Left */}
                            <div id="content" className="bg-white/10 col-span-9 rounded-lg p-6 overflow-y-auto">
                                {children}
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
