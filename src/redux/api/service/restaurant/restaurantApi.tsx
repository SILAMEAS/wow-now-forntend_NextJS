import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {METHOD} from "@/redux/api/hook/method/Method";
import {IReqListRestaurant, IResListRestaurant} from "@/redux/api/service/restaurant/typeRestaurant";
import {getCookie} from "cookies-next";

export const restaurantApi = createApi({
    reducerPath: "restaurantApi",
    refetchOnFocus: true,
    tagTypes: ['restaurant'],
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_BASE_URL+"api/",
        prepareHeaders: headers => {
            headers.set(
                'Authorization',
                `Bearer ` + getCookie("token"),
            );
            headers.set(
                "Content-Type",
                "application/json"
            );
            headers.set(
                "Access-Control-Allow-Origin", "*"
            );
            headers.set(
                "Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            );
            headers.set(
                "Access-Control-Allow-Credentials","true"
            );
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getRestaurants: builder.query<IResListRestaurant, IReqListRestaurant>(
            {
                query: (body) => ({
                    url: `restaurants/pagination`,
                    method: METHOD.Get,
                    params:body
                }),
                providesTags:['restaurant']
            }
        ),
        addRestaurantFav: builder.mutation<IResListRestaurant, {id:number}>(
            {
                query: ({id}) => ({
                    url: `restaurants/${id}/add-favorites`,
                    body:{},
                    method: METHOD.Put,
                }),
                invalidatesTags: ['restaurant']
            }
        ),

    }),
});

export const {
    useGetRestaurantsQuery,
    useAddRestaurantFavMutation
} = restaurantApi;

