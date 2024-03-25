import {API_URL} from "@/utils/api/constant";
import axios from "axios";
import {$headers} from "@/utils/api/header";
import {getCookie} from "cookies-next";

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
    findRestaurantById = async (id:number) => {
        try {
            const res=  await axios.get(
                `${API_URL}api/restaurants/${id}`,
                {
                    headers: $headers,
                }
            );
            return res;

        } catch (e) {
            return e;
        }
    };
    addCategory = async (restaurantID:number) => {
        try {
            const res=  await axios.put(
                `${API_URL}api/restaurants/${restaurantID}/add-favorites`,
                {
                    headers: $headers,
                }
            ).then(r=> r.data);
            return res;

        } catch (e) {
            return e;
        }
    };
    addToFavoriteRestaurant = async (restaurantID:number) => {
        try {
            // await axios.get(
            //     `${API_URL}api/restaurants`,
            //     {
            //         headers: $headers,
            //     }
            // );
            await axios.put(
                `${API_URL}api/restaurants/${restaurantID}/add-favorites`,
                { },
                {
                    headers: {
                        "Authorization": "Bearer " + getCookie("token"),
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                        "Access-Control-Allow-Credentials": true,
                    },
                }
            );
            // const res=  await axios.put(
            //     `${API_URL}api/restaurants/${restaurantID}/add-favorites`,
            //     {
            //         headers: $headers,
            //     }
            // ).then(r=> r.data);

        } catch (e) {
            return e;
        }
    };

}
