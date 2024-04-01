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
    name: string;
    description: string;
    images: string[];
    openingHours: string;
    open: boolean;
    address: IAddress
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
