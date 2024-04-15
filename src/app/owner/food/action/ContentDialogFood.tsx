import React from 'react';
import {Stack} from "@mui/material";
import {ButtonSubmit, InputTW} from "@/components/tw-input/InputTW";
import {SubmitHandler, useForm} from "react-hook-form";
import {IResFood} from "@/redux/api/service/food/typeFood";
import FormControlLabel from "@mui/material/FormControlLabel";
import {IOSSwitch} from "@/components/ms-switch/SwitchMui";
import TWSelect from "@/components/tw-selected/TWSelect";
import {useCreateFoodMutation, useUpdateFoodMutation} from "@/redux/api/service/food/foodApi";
import {useAppSelector} from "@/redux/api/hook/hoots";
import BackDropLoading from "@/components/mui-backdrop/BackDropLoading";

interface IContentDialogFood {
    foodSelected: IResFood | null
    isCreate: boolean,
    actionUpdateReq?: () => void
}

const ContentDialogFood = (props: IContentDialogFood) => {
    const {foodSelected, isCreate, actionUpdateReq} = props;
    const {restaurant} = useAppSelector(state => state.authReducer)
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors, dirtyFields},
        setValue,
    } = useForm<IResFood>();
    const [createFood, resultCreateFood] = useCreateFoodMutation();
    const [updateFood, resultUpdateFood] = useUpdateFoodMutation()
    // const [updateCategory, resultUpdateCategory] = useOwnerUpdateCategoryMutation()
    const onSubmit: SubmitHandler<IResFood> = async (data) => {
        if (restaurant?.id) {
            isCreate ? await createFood({
                ...data,
                images: [data.images],
                restaurantId: restaurant.id
            }).unwrap() : foodSelected?.id && await updateFood({
                ...data,
                restaurantId: restaurant.id,
                id: foodSelected?.id
            }).unwrap()
            actionUpdateReq && actionUpdateReq()
        }
    };
    React.useEffect(() => {
        if (foodSelected) {
            const {
                name,
                description,
                images,
                categoryId,
                price,
                available,
                seasional,
                vegetarin,
                restaurantId
            } = foodSelected;
            setValue('name', name);
            setValue('description', description);
            setValue('images', images);
            setValue('categoryId', categoryId);
            setValue('price', price);
            setValue('available', available);
            setValue('seasional', seasional);
            setValue('vegetarin', vegetarin);
            setValue('restaurantId', restaurantId);
        }
    }, [foodSelected])
    console.log("wasdf", watch('categoryId'))
    return (
        <Stack>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={`grid grid-cols-2 gap-4`}>
                    <InputTW<IResFood> register={register} id={'name'} errors={errors} label={"Name"}/>
                    <InputTW<IResFood> register={register} id={'description'} errors={errors} label={"Description"}/>
                    <InputTW<IResFood> register={register} id={'price'} errors={errors} label={"Price"}/>
                    {/*<InputTW<IResFood> register={register} id={'categoryId'} errors={errors} label={"categoryId"}/>*/}
                    <TWSelect<IResFood> register={register} id={'categoryId'} errors={errors} label={"categoryId"}/>
                    <InputTW<IResFood> register={register} id={'images'} errors={errors} label={"images"}/>
                    <div className={` flex items-end`}>
                        <FormControlLabel
                            checked={Boolean(watch('vegetarin'))}
                            control={<IOSSwitch sx={{m: 1}} defaultChecked/>}
                            onClick={(e) => setValue('vegetarin', !watch('vegetarin'))}
                            label={"vegetarin"}
                        />
                    </div>
                    <div className={` flex items-end`}>
                        <FormControlLabel
                            checked={Boolean(watch('seasional'))}
                            control={<IOSSwitch sx={{m: 1}} defaultChecked/>}
                            onClick={(e) => setValue('seasional', !watch('seasional'))}
                            label={"seasional"}
                        />
                    </div>
                    <div className={` flex items-end`}>
                        <FormControlLabel
                            checked={Boolean(watch('available'))}
                            control={<IOSSwitch sx={{m: 1}} defaultChecked/>}
                            onClick={(e) => setValue('available', !watch('available'))}
                            label={"available"}
                        />
                    </div>

                </div>
                <BackDropLoading open={resultCreateFood.isLoading || resultUpdateFood.isLoading}/>

                <ButtonSubmit btnName={isCreate ? "create food" : "update food"}/>
            </form>


        </Stack>
    );
};

export default ContentDialogFood;
