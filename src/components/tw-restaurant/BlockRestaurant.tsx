import React from 'react';
import ListCardOfRestaurants from "@/components/tw-restaurant/ListCardRestaurants";

const BlockRestaurant = () => {
    return (
        <section>
            {/** label list restaurants**/}
            <p className={`py-5 lg:py-10 font-semibold text-xl lg:text-3xl`}>List Restaurants</p>
            <ListCardOfRestaurants/>
        </section>
    );
};

export default BlockRestaurant;
