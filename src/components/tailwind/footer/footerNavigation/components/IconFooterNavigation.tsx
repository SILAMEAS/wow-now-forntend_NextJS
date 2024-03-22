"use client"
import React, {ReactNode} from 'react';
import {usePathname} from "next/navigation";

const IconFooterNavigation = ({
                                  classNameIcon = "far fa-home",
                                  title = <span className="block text-xs pb-1">Home</span>,
    href="#",
                                onClick,
                              }: { classNameIcon: string, title: ReactNode,href:string,onClick?: React.MouseEventHandler<HTMLDivElement>  }) => {
    const pathname=usePathname();
    return (
        <div className="flex-1 group" onClick={onClick}>
            {/*group-hover:text-indigo-500 group-hover:border-white*/}
            <a
                href={href}
                className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400

                 border-b-2 border-transparent "
            >
              <span className="block px-1 pt-1 pb-2">
                  <i className= {`text-gray-600 ${classNameIcon} ${pathname===href?"text-3xl text-red-600":"text-2xl"} pt-1 mb-1 block `}/>
                  {pathname!==href&& <span className="block text-xs pb-1 text-gray-600">{title}</span>}

              </span>
            </a>
        </div>
    );
};

export default IconFooterNavigation;
