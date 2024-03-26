export interface IListAllFoods{
    pageSize?:number;
    sortBy?:string;
    pageNo?:number;
    sortOrder?:'asc'|'desc'

}

export interface IGetListFoods {
    contents:     Content[];
    page:         number;
    pageSize:     number;
    totalPages:   number;
    total:        number;
    hasNext:      boolean;
    totalInvalid: number;
}

export interface Content {
    id:           number;
    name:         string;
    price:        number;
    images:       string[];
    restaurantId: number;
}
