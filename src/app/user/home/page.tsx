import React from 'react';
import {Stack, Typography} from "@mui/material";
import './index.css'
import {MultiItemCarousel} from "@/app/user/home/component/MultiItemCarousel";

const HomeUser = () => {
    return (
        <div className={``}>
            {/** banner **/}
            <section className={`banner -z-50 relative flex flex-col justify-center items-center bg-white`}>
                {/** text on banner image **/}
                <div className={`w-[50vw] z-10 text-center`}>
                    <p className={`font-bold text-2xl lg:text-6xl z-10 py-5`}>Sila Food</p>
                    <p className={`z-10 text-xl lg:text-4xl text-gray-300`}>Tasted the Convenience: Food ,Fast and Delivered</p>
                </div>
                {/** banner image **/}
                <div className={`cover absolute left-0 right-0 top-0`}>

                </div>
                <div className={`fadout`}>

                </div>

            </section>
            <div className={`py-2 px-10 bg-white`}>
                <MultiItemCarousel/>
            </div>


        </div>
    );
};

export default HomeUser;
