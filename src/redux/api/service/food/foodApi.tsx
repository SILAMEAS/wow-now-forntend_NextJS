import {createApi} from "@reduxjs/toolkit/query/react";
import {METHOD} from "@/redux/api/hook/method/Method";
import {IReqListFood, IResListFoods} from "@/redux/api/service/food/typeFood";
import {fetchBaseQueryCustom} from "@/redux/api/hook/method/header/baseQueryCustom";

export const foodApi = createApi({
    reducerPath: "foodApi",
    refetchOnFocus: true,
    tagTypes: ['foods'],
    baseQuery: fetchBaseQueryCustom,
    endpoints: (builder) => ({
        getFoods: builder.query<IResListFoods, IReqListFood>(
            {
                query: (body) => ({
                    url: `foods`,
                    method: METHOD.Get,
                    params: body
                }),
                providesTags: ['foods']
            }
        ),
        getFoodsByRestaurantId: builder.query<any, {
            id: number,
            vegetarian: boolean,
            seasanal: boolean,
            nonveg: boolean,
            food_category?: string
        }>(
            {
                query: ({id, ...res}) => ({
                    url: `foods/restaurant/${id}`,
                    method: METHOD.Get,
                    params: {...res}
                }),
                providesTags: ['foods']
            }
        ),
    }),
});

export const {
    useGetFoodsQuery,
    useGetFoodsByRestaurantIdQuery
} = foodApi;

