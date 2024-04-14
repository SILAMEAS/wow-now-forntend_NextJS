import React from 'react';
import {Stack} from "@mui/material";
import {ButtonSubmit, InputTW} from "@/components/tw-input/InputTW";
import {SubmitHandler, useForm} from "react-hook-form";
import {IResFood} from "@/redux/api/service/food/typeFood";
import FormControlLabel from "@mui/material/FormControlLabel";
import {IOSSwitch} from "@/components/ms-switch/SwitchMui";

interface IContentDialogFood {
    foodSelected: IResFood | null

}

const ContentDialogFood = (props: IContentDialogFood) => {
    const {foodSelected} = props;
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors, dirtyFields},
        setValue,
    } = useForm<IResFood>();
    const onSubmit: SubmitHandler<IResFood> = async (data) => {
        console.log("ContentDialogFood", data)
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
    return (
        <Stack>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={`grid grid-cols-2 gap-4`}>
                    <InputTW register={register} id={'name'} errors={errors} label={"Name"}/>
                    <InputTW register={register} id={'description'} errors={errors} label={"Description"}/>
                    <InputTW register={register} id={'price'} errors={errors} label={"Price"}/>
                    <InputTW register={register} id={'restaurantId'} errors={errors} label={"restaurantId"}/>
                    <InputTW register={register} id={'categoryId'} errors={errors} label={"categoryId"}/>
                    <InputTW register={register} id={'images'} errors={errors} label={"images"}/>
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

                </div>
                <ButtonSubmit btnName={"create"}/>
            </form>


        </Stack>
    );
};

export default ContentDialogFood;
