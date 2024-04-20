import {IReqListFood} from "@/redux/api/service/food/typeFood";
import {IFilterTableCustom} from "@/components/ms-custom-table/custom/hook/useTableCustom";

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
    id: number
}

export interface ICreateCategory {
    name: string
}

export type Sort = 'asc' | 'desc';

export type Order = 'asc' | 'desc';
export const Ascending: Sort = 'asc';
export const Descending: Sort = 'desc';
export const defaultValuePagination: IFilterTableCustom = {
    pageNo: 1,
    pageSize: 10,
    sortBy: "id",
    sortOrder: Ascending,
}

export interface IReqListRestaurant extends IReqListFood {
}
