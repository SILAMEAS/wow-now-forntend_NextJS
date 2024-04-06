import React, {ReactNode} from 'react';
import {usePathname} from "next/navigation";

interface IRouteModify {
    icon?: ReactNode;
    label: string;
    description?: string;
    href?: string
}


const CustomRoute = ({
                         icon = <svg
                             xmlns="http://www.w3.org/2000/svg"
                             fill="none"
                             viewBox="0 0 24 24"
                             strokeWidth="1.5"
                             stroke="currentColor"
                             className="w-6 h-6 group-hover:text-indigo-400"
                         >
                             <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                             />
                         </svg>, label, description, href
                     }: IRouteModify) => {
    const pathname = usePathname();
    return <a
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
