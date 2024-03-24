import {API_URL} from "@/utils/api/constant";
import axios from "axios";
import {$headers} from "@/utils/api/header";
import {DtoRestaurant} from "@/utils/api/dto/response/DtoListRestaurant";

export class RestaurantRequest {
    /** login account **/
    listRestaurants = async () => {
        try {
          const res=  await axios.get(
                `${API_URL}api/restaurants`,
                {
                    headers: $headers,
                }
            ).then(r=> r.data);
          return res;

        } catch (e) {
            return e;
        }
    };

}
