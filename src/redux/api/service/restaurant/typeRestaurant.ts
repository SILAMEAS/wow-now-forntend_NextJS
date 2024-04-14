import {IReqListFood, sortOrder} from "@/redux/api/service/food/typeFood";

export interface IResListRestaurant {
    contents: IResRestaurant[];
    page: number;
    pageSize: number;
    totalPages: number;
    total: number;
    hasNext: boolean;
    totalInvalid: number;
}

export interface IResRestaurant {
    id: number;
    cuisineType: string,
    name: string;
    description: string;
    images: string[];
    openingHours: string;
    open: boolean;
    address: IAddress;
    contactInformation: IContactInformation;
}

export interface IContactInformation {
    email: string;
    phone: string;
    twitter: string;
    instagram: string;
}

export interface IAddress {
    id: number;
    streetAddress: string;
    city: string;
    stateProvince: string;
    postalCode: string;
    country: string;
}

export interface ICategory {
    name: string,
    id: number,
    value: string
}

export const defaultValuePagination = {pageNo: 1, pageSize: 10, sortBy: "", sortOrder: sortOrder.ASC}

export interface IReqListRestaurant extends IReqListFood {
}
