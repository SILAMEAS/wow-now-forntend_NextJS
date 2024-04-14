import React, {PropsWithChildren} from 'react';
import {ActivePageStaying, NormalPageStaying} from "@/components/navigation/tw-location-page-staying/ActivePageStaying";

const DefaultExample = () => {
    return <>
        <NormalPageStaying label={'Home'}/>
        <NormalPageStaying label={'d'}/>
        <ActivePageStaying label={"Shirts"}/></>
}
export const LocationStayingPage = ({children = <DefaultExample/>}: PropsWithChildren) => {
    return (
        <nav aria-label="Breadcrumb" className="flex h-5">
            <ol className="flex overflow-hidden rounded-lg  border-gray-200 text-gray-600">
                {children}
            </ol>
        </nav>
    );
};

