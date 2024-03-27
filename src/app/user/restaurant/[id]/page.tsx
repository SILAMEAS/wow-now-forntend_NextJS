import React from 'react';
import CreateCategory from "@/components/tw-restaurant/CreateCategory";

const RestaurantById = ({params:{id}}:{params:{id:number}}) => {
    return (
        <div className={`h-[94vh]  flex justify-center items-center flex-col gap-10`}>
            {/*<MSLogoutButton/>*/}
            <CreateCategory id={id}/>
        </div>
    );
};

export default RestaurantById;
