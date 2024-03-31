import {METHOD} from "@/redux/api/hook/method/Method";
import {createApi} from "@reduxjs/toolkit/query/react";
import {fetchBaseQueryCustom} from "@/redux/api/hook/method/header/baseQueryCustom";
import {IResProfile} from "@/redux/api/service/user/typeUser";

export const profileApi = createApi({
    reducerPath: "profileApi",
    refetchOnFocus: true,
    tagTypes: ['profileApi'],
    baseQuery: fetchBaseQueryCustom,
    endpoints: (builder) => ({
        profile: builder.query<IResProfile, any>(
            {
                query: (body) => ({
                    url: `users/profile`,
                    method: METHOD.Get,
                    params: body
                }),
                providesTags: ['profileApi']
            }
        ),
    }),
});

export const {
    useProfileQuery
} = profileApi;











