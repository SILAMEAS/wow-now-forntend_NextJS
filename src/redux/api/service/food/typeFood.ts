import {Order} from "@/redux/api/service/restaurant/typeRestaurant";

export interface IResListFoods {
    contents: IResFood[];
    page: number;
    pageSize: number;
    totalPages: number;
    total: number;
    hasNext: boolean;
    totalInvalid: number;
}

export interface IResFood {
    id: number;
    name: string;
    description: string;
    price: number;
    images: any;
    restaurantId: number;
    available: boolean;
    vegetarian: boolean;
    seasonal: boolean;
    categoryId: number
}

export interface IReqListFood {
    pageSize: number;
    sortBy: string;
    pageNo: number;
    sortOrder: Order;
    vegetarian?: boolean;
    seasanal?: boolean;
    filterBy?: string;
    search?: string;

}

export interface IReqCreateFood extends IResFood {
}

export enum sortOrder { ASC = "ASC", DESC = "DESC"}
