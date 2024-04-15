import React from 'react';
import {Stack} from "@mui/material";
import {ButtonSubmit, InputTW} from "@/components/tw-input/InputTW";
import {SubmitHandler, useForm} from "react-hook-form";
import {ICategory} from "@/redux/api/service/restaurant/typeRestaurant";
import {
    useOwnerCreateCategoryMutation,
    useOwnerUpdateCategoryMutation
} from "@/redux/api/service/restaurant/restaurantApi";


const ContentDialogCategory = ({categorySelected, isCreated, actionUpdateReq}: {
    categorySelected: ICategory | null,
    isCreated: boolean,
    actionUpdateReq?: () => void
}) => {
    console.log("data", categorySelected)
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors, dirtyFields},
        setValue,
    } = useForm<ICategory>();
    const [createCategory, resultCreateCategory] = useOwnerCreateCategoryMutation();
    const [updateCategory, resultUpdateCategory] = useOwnerUpdateCategoryMutation()
    const onSubmit: SubmitHandler<ICategory> = async (data) => {
        if (isCreated) {
            await createCategory({name: data.name}).unwrap();
        } else {
            categorySelected?.id && await updateCategory({
                name: data.name,
                id: categorySelected.id
            }).unwrap()
        }
        // isCreated ? await createCategory(data).unwrap() : await updateCategory({
        //     name: data.name,
        //     id: categorySelected.id
        // }).unwrap()
        actionUpdateReq && actionUpdateReq()
    };
    React.useEffect(() => {
        if (categorySelected !== null && !isCreated) {
            setValue('name', categorySelected.name);
        }
    }, [categorySelected])
    return (
        <Stack>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputTW register={register} id={'name'} errors={errors} label={"Name"}/>
                <ButtonSubmit btnName={isCreated ? "create" : "update"}/>
            </form>

        </Stack>
    );
};

export default ContentDialogCategory;
