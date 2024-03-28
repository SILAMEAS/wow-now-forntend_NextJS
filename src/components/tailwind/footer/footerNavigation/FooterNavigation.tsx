"use client"
import React, {PropsWithChildren} from 'react';
import IconFooterNavigation from "@/components/tailwind/footer/footerNavigation/components/IconFooterNavigation";

const FooterNavigation = () => {
  return (
      <div className='h-fit'>
        {/* component */}
        <StyleLocal/>
        <LayoutFooter>
          <IconFooterNavigation classNameIcon={"far fa-home"}
                                title={"ទំព័រដើម"}
                                href={"/user"}/>
          <IconFooterNavigation classNameIcon={"far fa-solid fa-utensils"}
                                title={"អាហារ"}
                                href={"/user/food"}/>
          <IconFooterNavigation classNameIcon={"far fa-solid fa-receipt"}
                                title={"បញ្ជារទិញ"}
                                href={"/user/order"}/>
          <IconFooterNavigation classNameIcon={"far fa-regular fa-user"}
                                title={"របស់ខ្ញុំ"}
                                href={"/user/profile"}
          // onClick={req.logout}
          />
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
    <div className="w-screen max-w-xxl mx-auto flex bg-white">{children}</div>
  </div>
}
export default FooterNavigation;
