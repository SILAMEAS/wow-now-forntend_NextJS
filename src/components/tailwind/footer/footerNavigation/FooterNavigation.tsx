"use client"
import React, {PropsWithChildren} from 'react';
import IconFooterNavigation
  from "@/components/tailwind/footer/footerNavigation/components/IconFooterNavigation";
import {HandleReq} from "@/components/Utils/request/HandleReq";

const FooterNavigation = () => {
  const req=new HandleReq();
  return (
      <div className='h-fit'>
        {/* component */}
        <StyleLocal/>
        <LayoutFooter>
          <IconFooterNavigation icon={<i className="far fa-home text-2xl pt-1 mb-1 block text-white"/>}
                                title={<span className="block text-xs pb-1 text-white">Home</span>}
                                href={"#"}/>
          <IconFooterNavigation icon={<i className="far fa-solid fa-utensils text-2xl pt-1 mb-1 block text-white"/>}
                                title={<span className="block text-xs pb-1 text-white">Foods</span>}
                                href={"#"}/>
          <IconFooterNavigation icon={<i className="far fa-solid fa-receipt text-2xl pt-1 mb-1 block text-white"></i>}
                                title={<span className="block text-xs pb-1 text-white">Order</span>}
                                href={"#"}/>
          {/*<IconFooterNavigation icon={<i className="far fa-search text-2xl pt-1 mb-1 block text-white"/>}*/}
          {/*                      title={<span className="block text-xs pb-1 text-white">Search</span>}*/}
          {/*                      href={"#"}/>*/}
          <IconFooterNavigation icon={<i className="far fa-regular fa-user text-2xl pt-1 mb-1 block text-white"/>}
                                title={<span className="block text-xs pb-1 text-white">Profile</span>}
                                href={"#"}
          onClick={req.logout}/>
        </LayoutFooter>

      </div>

  );
};

const StyleLocal = () => <style
    dangerouslySetInnerHTML={{
      __html:
          "\n@import url(https://pro.fontawesome.com/releases/v5.10.0/css/all.css);\n@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;800&display=swap');\nbody {\n    font-family: 'Poppins', sans-serif;\n}\n.hover\\:w-full:hover {\n    width: 100%;\n}\n.group:hover .group-hover\\:w-full {\n    width: 100%;\n}\n.group:hover .group-hover\\:inline-block {\n    display: inline-block;\n}\n.group:hover .group-hover\\:flex-grow {\n    flex-grow: 1;\n}\n"
    }}
/>
const LayoutFooter = ({children}: PropsWithChildren) => {
  return <div className=" bg-white flex items-center justify-center">
    <div className="w-screen max-w-xxl mx-auto flex bg-black">{children}</div>
  </div>
}
export default FooterNavigation;
