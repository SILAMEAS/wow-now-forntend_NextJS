import {API_URL} from "@/utils/api/constant";
import {$headers} from "@/utils/api/header";
import {IGetListFoods, IListAllFoods} from "@/utils/api/request/ Food/type";
import axios from "axios";

export class FoodApi {
    /** login account **/
    listFoods = async (props?:IListAllFoods):Promise<IGetListFoods|unknown> => {
        try {
            return await axios.get(
                `${API_URL}api/foods?pageSize=${props?.pageSize??10}&sortBy=${props?.sortBy??''}&pageNo=${props?.pageNo??1}&sortOrder=${props?.sortOrder??"asc"}`,
                {
                    headers: $headers,
                }
            ).then(r=>r.data)

        } catch (e) {
            return  e;
        }
    };
}
