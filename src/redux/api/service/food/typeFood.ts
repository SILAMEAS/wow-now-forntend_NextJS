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
    price: number;
    images: string[];
    restaurantId: number;
    available: boolean
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

export enum sortOrder { ASC = "ASC", DESC = "DESC"}
