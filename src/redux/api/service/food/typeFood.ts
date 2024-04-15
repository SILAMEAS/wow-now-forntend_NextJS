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
    vegetarin: boolean;
    seasional: boolean;
    categoryId: number
}

export interface IReqListFood {
    pageSize: number;
    sortBy: string;
    pageNo: number;
    sortOrder: sortOrder;
    vegetarian?: boolean;
    seasanal?: boolean;
    filterBy?: string;
    search?: string;
}

export interface IReqCreateFood extends IResFood {
}

export enum sortOrder { ASC = "ASC", DESC = "DESC"}
