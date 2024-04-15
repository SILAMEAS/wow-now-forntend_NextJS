import type {PayloadAction} from "@reduxjs/toolkit";
import {createSlice} from "@reduxjs/toolkit";
import {IResProfile} from "@/redux/api/service/user/typeUser";
import {IResRestaurant} from "@/redux/api/service/restaurant/typeRestaurant";

export interface IAuthState {
    authState: boolean;
    profile?: IResProfile;
    restaurant?: IResRestaurant
}

const initialState: IAuthState = {
    authState: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setProfile: (state, action: PayloadAction<IResProfile>) => {
            state.profile = action.payload;
        },
        setRestaurant: (state, action: PayloadAction<IResRestaurant>) => {
            state.restaurant = action.payload;
        },
        reset: () => initialState
    },
});

export const {setProfile, setRestaurant, reset} = authSlice.actions;
export const authReducer = authSlice.reducer;
