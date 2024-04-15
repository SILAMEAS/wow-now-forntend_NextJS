import React from 'react';
import {FieldValues} from "react-hook-form";
import {TypeInput} from "@/components/tw-input/InputTW";
import {useGetCategoryByRestaurantIdQuery} from "@/redux/api/service/restaurant/restaurantApi";
import {useAppSelector} from "@/redux/api/hook/hoots";

function TWSelect<T extends FieldValues>(props: TypeInput<T>) {
    const {register, id, className, errors, label, required, InputElement} = props;

    const {restaurant} = useAppSelector(state => state.authReducer)
    const getCategoryByResId = useGetCategoryByRestaurantIdQuery({id: restaurant?.id ?? 0}, {skip: !restaurant?.id});
    console.log("getCategoryByResId", getCategoryByResId);

    return (
        <div className="w-full mx-auto">
            <label>{label ?? id}</label>
            <select
                {...register(id, {required: required ?? true,})}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                {
                    getCategoryByResId.currentData?.map(item =>
                        <option key={item.id} value={item.id}>{item.name}</option>
                    )
                }
                {/*<option value="9">Coffee</option>*/}
                {/*<option value="US">United States</option>*/}
                {/*<option value="CA">Canada</option>*/}
                {/*<option value="FR">France</option>*/}
                {/*<option value="DE">Germany</option>*/}
            </select>
            {errors[id] && errors[id]?.type === "required" && (
                <span className={`text-red-700`}>This is required</span>
            )}

        </div>
    );
}

export default TWSelect;
