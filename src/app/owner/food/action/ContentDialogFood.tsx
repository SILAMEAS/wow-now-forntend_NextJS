import React, {useState} from 'react';
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
import InputUploadThing from "@/components/custom-uploading/CustomUploadthing";

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
        formState: {errors, dirtyFields,isValidating},
        setValue,

    } = useForm<IResFood>();
    const [createFood, resultCreateFood] = useCreateFoodMutation();
    const [updateFood, resultUpdateFood] = useUpdateFoodMutation();
    const [fileAlreadyUpload, setFileAlreadyUpload] = useState<Array<File>|[]>([]);
    // const [updateCategory, resultUpdateCategory] = useOwnerUpdateCategoryMutation()
    const onSubmit: SubmitHandler<IResFood> = async (data) => {
        console.log("data.images",data.images);
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
                seasonal,
                vegetarian,
                restaurantId
            } = foodSelected;
            console.log("foodSelected",foodSelected);
            setValue('name', name);
            setValue('description', description);
            setValue('images', images);
            setValue('categoryId', categoryId);
            setValue('price', price);
            setValue('available', available);
            setValue('seasonal', seasonal);
            setValue('vegetarian', vegetarian);
            setValue('restaurantId', restaurantId);
        }
    }, [foodSelected]);
    return (
        <Stack>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={`grid grid-cols-2 gap-4`}>

                    <InputUploadThing<IResFood> buttonName={'change image'} register={register} setValue={setValue} watch={watch} id={'images'}/>
                    <InputTW<IResFood> register={register} id={'name'} errors={errors} label={"Name"}/>
                    <InputTW<IResFood> register={register} id={'description'} errors={errors} label={"Description"}/>
                    <InputTW<IResFood> register={register} id={'price'} errors={errors} label={"Price"}/>
                    {/*<InputTW<IResFood> register={register} id={'categoryId'} errors={errors} label={"categoryId"}/>*/}
                    <TWSelect<IResFood> register={register} id={'categoryId'} errors={errors} label={"categoryId"}/>
                    {/*<InputTW<IResFood> register={register} id={'images'} errors={errors} label={"images"}/>*/}
                    <div className={` flex items-end`}>
                        <FormControlLabel
                            checked={Boolean(watch('vegetarian'))}
                            control={<IOSSwitch sx={{m: 1}} defaultChecked/>}
                            onClick={(e) => setValue('vegetarian', !watch('vegetarian'))}
                            label={"vegetarin"}
                        />
                    </div>
                    <div className={` flex items-end`}>
                        <FormControlLabel
                            checked={Boolean(watch('seasonal'))}
                            control={<IOSSwitch sx={{m: 1}} defaultChecked/>}
                            onClick={(e) => setValue('seasonal', !watch('seasonal'))}
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

                <ButtonSubmit  btnName={isCreate ? "create food" : "update food"} disable={!isValidating}/>
            </form>


        </Stack>
    );
};

export default ContentDialogFood;
