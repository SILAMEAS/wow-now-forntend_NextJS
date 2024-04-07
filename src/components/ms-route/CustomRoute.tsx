import React, {ReactNode} from 'react';
import {usePathname} from "next/navigation";

interface IRouteModify {
    icon?: ReactNode;
    label: string;
    href?: string;
    onClick?: () => void;
}


const CustomRoute = ({
                         icon, label, href, onClick
                     }: IRouteModify) => {
    const pathname = usePathname();
    return <a
        onClick={onClick}
        href={href ?? '#'}
        className={`hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group ${pathname == href ? 'bg-indigo-400 hover:bg-indigo-400 ' : "bg-inherit"}`}
    >
        <div
            className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
            <div>
                {icon}
            </div>
            <p className={`font-bold text-base lg:text-lg text-slate-200 leading-4  ${pathname == href ? 'group-hover:text-white' : 'group-hover:text-indigo-400'}`}>
                {label}
            </p>
        </div>
    </a>
}

export default CustomRoute;
