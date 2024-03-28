import {createApi} from "@reduxjs/toolkit/query/react";
import {METHOD} from "@/redux/api/hook/method/Method";
import {IReqListRestaurant, IResListRestaurant, IResRestaurant} from "@/redux/api/service/restaurant/typeRestaurant";
import {fetchBaseQueryCustom} from "@/redux/api/service/header/baseQueryCustom";

export const restaurantApi = createApi({
    reducerPath: "restaurantApi",
    refetchOnFocus: true,
    tagTypes: ['restaurant','restaurantById'],
    baseQuery: fetchBaseQueryCustom,
    endpoints: (builder) => ({
        getRestaurants: builder.query<IResListRestaurant, IReqListRestaurant>(
            {
                query: (body) => ({
                    url: `restaurants`,
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
        getRestaurantById: builder.query<IResRestaurant, {id:number}>(
            {
                query: ({id}) => ({
                    url: `restaurants/${id}`,
                    method: METHOD.Get
                }),
                providesTags:['restaurantById']
            }
        ),

    }),
});

export const {
    useGetRestaurantsQuery,
    useAddRestaurantFavMutation,
    useGetRestaurantByIdQuery
} = restaurantApi;

