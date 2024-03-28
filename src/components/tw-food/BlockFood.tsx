"use client"
import React from 'react';
import {MultiItemCarousel} from "@/components/tw-food/MultiItemCarousel";

const BlockFood = () => {
    return (
        <section>
            <div className={'flex  items-center space-x-10'}>
                <p className={`py-5 lg:py-10 font-semibold text-xl lg:text-3xl`}>Top Meet</p>
            </div>
            <MultiItemCarousel/>
        </section>
    );
};

export default BlockFood;

