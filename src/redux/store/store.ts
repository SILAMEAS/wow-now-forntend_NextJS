import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {authReducer} from "@/redux/slice/authSlice";
import {userApi} from "@/redux/api/service/user/userApi";
import {restaurantApi} from "@/redux/api/service/restaurant/restaurantApi";
import {foodApi} from "@/redux/api/service/food/foodApi";
import {profileApi} from "@/redux/api/service/profile/profileApi";


export const store = configureStore({
    reducer: {
        authReducer,
        [userApi.reducerPath]: userApi.reducer,
        [foodApi.reducerPath]: foodApi.reducer,
        [restaurantApi.reducerPath]: restaurantApi.reducer,
        [profileApi.reducerPath]: profileApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({}).concat(
            [userApi.middleware, restaurantApi.middleware, foodApi.middleware, profileApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
