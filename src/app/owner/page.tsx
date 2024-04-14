"use client";
import React from "react";
import {useOwnerRestaurantQuery, useUpdateOwnerRestaurantMutation} from "@/redux/api/service/restaurant/restaurantApi";
import {SubmitHandler, useForm} from "react-hook-form";
import {IResRestaurant} from "@/redux/api/service/restaurant/typeRestaurant";
import BackDropLoading from "@/components/mui-backdrop/BackDropLoading";
import {ButtonSubmit, InputTW} from "@/components/tw-input/InputTW";
import FormControlLabel from "@mui/material/FormControlLabel";
import {IOSSwitch} from "@/components/ms-switch/SwitchMui";

const Ownerpage = () => {
    const ownerRestaurant = useOwnerRestaurantQuery({});
    const [updateRestaurant, resultUpdateRestaurant] = useUpdateOwnerRestaurantMutation({})
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors, dirtyFields},
        setValue,
    } = useForm<IResRestaurant>();
    const onSubmit: SubmitHandler<IResRestaurant> = async (data) => {
        ownerRestaurant.currentData?.id &&
        await updateRestaurant({body: data, resId: ownerRestaurant.currentData.id})
    };
    const prepareData = (data: IResRestaurant) => {
        const {
            cuisineType,
            name,
            description,
            contactInformation: {phone, twitter, instagram, email},
            open,
            address: {streetAddress, city, country},
            openingHours,
            images
        } = data;
        setValue('name', `${name}`);
        setValue('cuisineType', `${cuisineType}`);
        setValue('description', `${description}`)
        setValue('address.city', `${city}`)
        setValue('address.country', `${country}`)
        setValue('address.streetAddress', `${streetAddress}`)
        setValue('contactInformation.phone', `${phone}`)
        setValue('contactInformation.email', `${email}`)
        setValue('contactInformation.twitter', `${twitter}`)
        setValue('contactInformation.instagram', `${instagram}`)
        setValue('openingHours', `${openingHours}`)
        setValue('open', open)
        setValue('images', images)
    }
    React.useEffect(() => {
        ownerRestaurant.currentData && prepareData(ownerRestaurant.currentData)
    }, [ownerRestaurant.currentData])
    if (ownerRestaurant.isLoading) {
        return <BackDropLoading open={true}/>
    }
    return (

        <div className={`flex justify-between flex-col h-full`}>
            <div
                className="bg-cover bg-center  h-full text-white py-24 px-10 object-fill"
                style={{
                    backgroundImage: `url(${watch('images')})`
                }}
            >
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={`grid grid-cols-3 gap-4`}>
                    <InputTW<IResRestaurant> register={register} id={'name'} label={"Restaurant name"}
                                             errors={errors}/>
                    <InputTW<IResRestaurant> register={register} id={'cuisineType'} label={"cuisineType"}
                                             errors={errors}/>
                    <InputTW<IResRestaurant> errors={errors} register={register} id={'description'}
                                             label={'Description'}/>
                    <InputTW<IResRestaurant> errors={errors} register={register} id={'address.country'}
                                             label={'Country'}/>
                    <InputTW<IResRestaurant> errors={errors} register={register} id={'address.city'}
                                             label={'City'}/>
                    <InputTW<IResRestaurant> errors={errors} register={register} id={'address.streetAddress'}
                                             label={'Street'}/>
                    <InputTW<IResRestaurant> errors={errors} register={register}
                                             id={'contactInformation.email'}
                                             label={'Email'}/>
                    <InputTW<IResRestaurant> errors={errors} register={register}
                                             id={'contactInformation.phone'}
                                             label={'Phone'}/>
                    <InputTW<IResRestaurant> errors={errors} register={register}
                                             id={'contactInformation.twitter'}
                                             label={'twitter'}/>
                    <InputTW<IResRestaurant> errors={errors} register={register}
                                             id={'contactInformation.instagram'}
                                             label={'instagram'}/>
                    <InputTW<IResRestaurant> errors={errors} register={register} id={'openingHours'}
                                             label={'Time open'}/>
                    <div className={` flex items-end`}>
                        <FormControlLabel
                            checked={Boolean(watch('open'))}
                            control={<IOSSwitch sx={{m: 1}} defaultChecked/>}
                            onClick={(e) => setValue('open', !watch('open'))}
                            label={watch('open') ? "Open" : "Closed"}
                        />
                    </div>
                </div>
                {/** button */}
                <ButtonSubmit btnName={"update"}/>
                <BackDropLoading open={resultUpdateRestaurant.isLoading}/>
            </form>

        </div>
    );
};

export default Ownerpage;
