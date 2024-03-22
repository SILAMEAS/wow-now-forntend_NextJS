import React, {ReactNode} from 'react';

const IconFooterNavigation = ({
                                  icon = <i className="far fa-home text-2xl pt-1 mb-1 block"/>,
                                  title = <span className="block text-xs pb-1">Home</span>,
    href="#",
                                onClick,
                              }: { icon: ReactNode, title: ReactNode,href:string,onClick?: React.MouseEventHandler<HTMLDivElement>  }) => {
    return (
        <div className="flex-1 group" onClick={onClick}>
            <a
                href={href}
                className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-white"
            >
              <span className="block px-1 pt-1 pb-2">
                  {icon}
                  {title}
              </span>
            </a>
        </div>
    );
};

export default IconFooterNavigation;
