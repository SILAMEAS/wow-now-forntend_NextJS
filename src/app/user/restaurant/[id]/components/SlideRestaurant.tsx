import React from 'react';
import {IResRestaurant} from "@/redux/api/service/restaurant/typeRestaurant";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export const SlideRestaurantDetail = ({data}: { data: IResRestaurant }) => {
    return (
        <div className="sliderAx h-full py-2">
            <div id="slider-1" className="container mx-auto">
                <div
                    className="bg-cover bg-center  h-full text-white py-24 px-10 object-fill"
                    style={{
                        backgroundImage: `url(${data.images[0]})`
                        // backgroundImage:
                        //     "url(https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1422&q=80)"
                    }}
                >
                </div>
                {/* container */}
                <br/>
                <div className={`container flex flex-col space-y-3`}>
                    {/** Title */}
                    <p className={`text-4xl font-bold`}>{data.name}</p>
                    {/** Description */}
                    <p className={`text-xl font-medium text-gray-600
                    `}>{data.description}</p>
                    {/** Location */}
                    <div className={`flex flex-row space-x-3`}>
                        <LocationOnIcon/>
                        <p className={`text-md font-medium text-gray-600
                    `}> {data.address.city + ", " + data.address.streetAddress}</p>
                    </div>
                    {/** Start time */}
                    <div className={`flex flex-row space-x-3`}>
                        <AccessTimeIcon/>
                        <p className={`text-md font-medium text-orange-500
                    `}>{data.openingHours}</p>
                    </div>
                </div>
            </div>

        </div>


    );
};

