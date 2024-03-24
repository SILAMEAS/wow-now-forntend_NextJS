import React from 'react';
import MSLogoutButton from "@/components/ms-button/MSBackHistoryRouteButton";

const RestaurantById = ({params:{id}}:{params:{id:string}}) => {
    return (
        <div className={`h-[94vh]  flex justify-center items-center flex-col gap-10`}>
            <MSLogoutButton/>
            Restaurant id is : {id}
        </div>
    );
};

export default RestaurantById;
