import {createApi} from "@reduxjs/toolkit/query/react";
import {METHOD} from "@/redux/api/hook/method/Method";
import {
    ICategory,
    ICreateCategory,
    IReqListRestaurant,
    IResListRestaurant,
    IResRestaurant
} from "@/redux/api/service/restaurant/typeRestaurant";
import {fetchBaseQueryCustom} from "@/redux/api/hook/method/header/baseQueryCustom";

export const restaurantApi = createApi({
    reducerPath: "restaurantApi",
    refetchOnFocus: true,
    tagTypes: ['restaurant', 'restaurantById', 'profile', "no", "category"],
    baseQuery: fetchBaseQueryCustom,
    endpoints: (builder) => ({
        getRestaurants: builder.query<IResListRestaurant, IReqListRestaurant>(
            {
                query: (body) => ({
                    url: `restaurants`,
                    method: METHOD.Get,
                    params: body
                }),
                providesTags: ['restaurant']
            }
        ),
        addRestaurantFav: builder.mutation<any, { id: number }>(
            {
                query: ({id}) => ({
                    url: `restaurants/${id}/add-favorites`,
                    method: METHOD.Put,
                }),
                invalidatesTags: ['no']
            }
        ),
        getRestaurantById: builder.query<IResRestaurant, { id: number }>(
            {
                query: ({id}) => ({
                    url: `restaurants/${id}`,
                    method: METHOD.Get
                }),
                providesTags: ['restaurantById']
            }
        ),
        ownerCreateCategory: builder.mutation<Array<ICategory>, ICreateCategory>(
            {
                query: (body) => ({
                    url: `/admin/categories`,
                    method: METHOD.Post,
                    body
                }),
                invalidatesTags: ['category']
            }
        ),
        ownerUpdateCategory: builder.mutation<ICategory, { name: string, id: number | string }>(
            {
                query: ({name, id}) => ({
                    url: `/admin/categories/${id}`,
                    method: METHOD.Put,
                    body: {name}
                }),
                invalidatesTags: ['category']
            }
        ),
        ownerDeleteCategory: builder.mutation<ICategory, { id: number | string }>(
            {
                query: ({id}) => ({
                    url: `/admin/categories/${id}`,
                    method: METHOD.Delete
                }),
                invalidatesTags: ['category']
            }
        ),
        getCategoryByRestaurantId: builder.query<Array<ICategory>, { id: number }>(
            {
                query: ({id}) => ({
                    url: `categories/restaurant/${id}`,
                    method: METHOD.Get
                }),
                providesTags: ['category']
            }
        ),
        ownerRestaurant: builder.query<IResRestaurant, any>(
            {
                query: (body) => ({
                    url: `admin/restaurants/user`,
                    method: METHOD.Get,
                    params: body
                }),
                providesTags: ['restaurant']
            }
        ),
        updateOwnerRestaurant: builder.mutation<IResRestaurant, { body: IResRestaurant, resId: string | number }>(
            {
                query: ({body, resId}) => ({
                    url: `admin/restaurants/${resId}`,
                    method: METHOD.Put,
                    body
                }),
                invalidatesTags: ['restaurant']
            }
        ),

    }),
});

export const {
    useGetRestaurantsQuery,
    useAddRestaurantFavMutation,
    useGetRestaurantByIdQuery,
    useGetCategoryByRestaurantIdQuery,
    useOwnerRestaurantQuery,
    useUpdateOwnerRestaurantMutation,
    useOwnerCreateCategoryMutation,
    useOwnerUpdateCategoryMutation,
    useOwnerDeleteCategoryMutation

} = restaurantApi;

