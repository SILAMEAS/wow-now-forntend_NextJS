import {EnumData} from "@/Constant/auth/ConstantAuthConfig";
import {IResRestaurant} from "@/redux/api/service/restaurant/typeRestaurant";

export interface IResLogin {
    jwt: string,
    role: string
}

export interface IReqLogin {
    email: string;
    password: string;
}

export interface IReqCreateAccount {
    password: string;
    address: {
        country: string;
        streetAddress: string;
        city: string;
        postalCode: string;
        stateProvince: string
    };
    role: EnumData;
    fullName: string;
    email: string
}


export interface IResProfile {
    id: number;
    fullName: string;
    email: string;
    password: string;
    role: EnumData;
    favourites: any[];
    addresses: any[];
    myRestaurant?: IResRestaurant
}
