import {createApi} from "@reduxjs/toolkit/query/react";
import {METHOD} from "@/redux/api/hook/method/Method";
import {IReqCreateFood, IReqListFood, IResListFoods} from "@/redux/api/service/food/typeFood";
import {fetchBaseQueryCustom} from "@/redux/api/hook/method/header/baseQueryCustom";

export const foodApi = createApi({
    reducerPath: "foodApi",
    refetchOnFocus: true,
    tagTypes: ['foods'],
    baseQuery: fetchBaseQueryCustom,
    endpoints: (builder) => ({
        createFood: builder.mutation<IResListFoods, IReqCreateFood>(
            {
                query: (body) => ({
                    url: `admin/foods`,
                    method: METHOD.Post,
                    body
                }),
                invalidatesTags: ['foods']
            }
        ),
        deleteFood: builder.mutation<null, {id:number|string}>(
            {
                query: ({id}) => ({
                    url: `admin/foods/${id}`,
                    method: METHOD.Delete,
                }),
                invalidatesTags: ['foods']
            }
        ),
        updateFood: builder.mutation<IResListFoods, IReqCreateFood>(
            {
                query: ({id, ...body}) => ({
                    url: `admin/foods/${id}`,
                    method: METHOD.Put,
                    body
                }),
                invalidatesTags: ['foods']
            }
        ),
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
        getFoodsByRestaurantId: builder.query<IResListFoods, IReqListFood & { id: number }>(
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
    useGetFoodsByRestaurantIdQuery,
    useCreateFoodMutation,
    useUpdateFoodMutation,
    useDeleteFoodMutation
} = foodApi;

