import {EnumData} from "@/Constant/auth/ConstantAuthConfig";
import {DtoAddress} from "@/utils/api/dto/DtoAddress";

export type DtoCreateAcc = {
    fullName:string;
    email: string;
    password: string;
    streetAddress:string;
    city:string;
    stateProvince:string;
    postalCode:string;
    country:string;
    role:EnumData;
    address:DtoAddress
};
