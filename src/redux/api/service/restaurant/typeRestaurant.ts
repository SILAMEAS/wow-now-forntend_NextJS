import {IReqListFood} from "@/redux/api/service/food/typeFood";

export interface IResListRestaurant {
    contents:     IResRestaurant[];
    page:         number;
    pageSize:     number;
    totalPages:   number;
    total:        number;
    hasNext:      boolean;
    totalInvalid: number;
}

export interface IResRestaurant {
    id:           number;
    name:         string;
    description:  string;
    images:       string[];
    openingHours:string;
    open:boolean;
}


 export const defaultValuePagination={pageNo:1,pageSize:10,sortBy:"",sortOrder:"asc"}

export interface IReqListRestaurant extends IReqListFood {}
