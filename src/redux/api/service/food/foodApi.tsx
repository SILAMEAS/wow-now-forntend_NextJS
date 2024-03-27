import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {METHOD} from "@/redux/api/hook/method/Method";
import {IReqListFood} from "@/redux/api/service/food/typeFood";

export const foodApi = createApi({
    reducerPath: "restaurantApi",
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    }),
    endpoints: (builder) => ({
        getFoods: builder.query<any, IReqListFood>(
            {
                query: (body) => ({
                    url: `foods/restaurants`,
                    method: METHOD.Get,
                    params:body
                }),
            }
        ),

    }),
});

export const {
    useGetFoodsQuery
} = foodApi;

