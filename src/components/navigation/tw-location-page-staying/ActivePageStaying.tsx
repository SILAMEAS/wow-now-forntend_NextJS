import React from 'react';

interface IStayingPage {
    href?: string,
    label: string
}

export const ActivePageStaying = ({href = "#", label}: IStayingPage) => {
    return (
        <li className="relative flex items-center bg-black">
                  <span
                      className="absolute inset-y-0 -start-px h-10 w-4 bg-inherit [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"
                  >
                  </span>

            <a
                href={href}
                className="flex h-10 items-center  pe-4 ps-8 text-xs font-medium transition text-white bg-[#E91E63]"
            >
                {label}
            </a>
        </li>
    );
};

export const NormalPageStaying = ({href = "#", label}: IStayingPage) => {
    return <li className="flex items-center">
        <a
            href={href}
            className="flex h-10 items-center gap-1.5  px-4 transition text-white bg-black"
        >


            <span className="ms-1.5 text-xs font-medium"> {label} </span>
        </a>
    </li>
}
