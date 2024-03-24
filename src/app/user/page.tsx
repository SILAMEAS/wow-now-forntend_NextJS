import React from 'react';
import './index.css'
import {MultiItemCarousel} from "@/components/tw-food/MultiItemCarousel";
import ListCardOfRestaurants from "@/components/tw-restaurant/ListCardRestaurants";

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
                <div className={`cover absolute left-0 right-0 top-0`}/>
                {/** footer of banner image **/}
                <div className={`fadout`}/>
            </section>
            {/** list item **/}
            <div className={`px-5 lg:px-10`}>
                {/** list top food **/}
                <section>
                    {/** label list food **/}
                    <p className={`py-5 lg:py-10 font-semibold text-xl lg:text-3xl`}>Top Meet</p>
                    <MultiItemCarousel/>
                </section>
                {/** list top food **/}
                <section>
                    {/** label list restaurants**/}
                    <p className={`py-5 lg:py-10 font-semibold text-xl lg:text-3xl`}>List Restaurants</p>
                    <ListCardOfRestaurants/>
                </section>

            </div>
        </div>
    );
};

export default HomeUser;
