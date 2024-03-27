import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {IResProfile} from "@/redux/api/service/user/typeUser";
export interface IAuthState {
    authState: boolean;
    profile: IResProfile|null
}

const initialState: IAuthState = {
    authState: false,
    profile:null
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthState: (state, action: PayloadAction<boolean>) => {
            state.authState = action.payload;
        },
        setProfile: (state, action: PayloadAction<IResProfile>) => {
            state.profile = action.payload;
        },
    },
});

export const { setAuthState,setProfile } = authSlice.actions;
export const authReducer = authSlice.reducer;
