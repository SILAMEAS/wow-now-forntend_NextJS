import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ButtonSubmit, InputTW} from "@/app/owner/components/InputTW";
import {IResRestaurant} from "@/redux/api/service/restaurant/typeRestaurant";
import {useOwnerRestaurantQuery, useUpdateOwnerRestaurantMutation} from "@/redux/api/service/restaurant/restaurantApi";
import FormControlLabel from "@mui/material/FormControlLabel";
import {IOSSwitch} from "@/app/owner/components/SwitchMui";

type InputsFormEditRestaurant = IResRestaurant;
const FormEditRestaurant = () => {
    const ownerRestaurant = useOwnerRestaurantQuery({});
    const [updateRestaurant, resultUpdateRestaurant] = useUpdateOwnerRestaurantMutation({})
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors, dirtyFields},
        setValue,
    } = useForm<InputsFormEditRestaurant>();
    const onSubmit: SubmitHandler<InputsFormEditRestaurant> = async (data) => {
        ownerRestaurant.currentData?.id &&
        await updateRestaurant({body: data, resId: ownerRestaurant.currentData.id})
    };
    const PassingData = (data: IResRestaurant) => {
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
        console.log("open", open)
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
        ownerRestaurant.currentData && PassingData(ownerRestaurant.currentData)
    }, [ownerRestaurant.currentData])

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
                    <InputTW<InputsFormEditRestaurant> register={register} id={'name'} label={"Restaurant name"}
                                                       errors={errors}/>
                    <InputTW<InputsFormEditRestaurant> register={register} id={'cuisineType'} label={"cuisineType"}
                                                       errors={errors}/>
                    <InputTW<InputsFormEditRestaurant> errors={errors} register={register} id={'description'}
                                                       label={'Description'}/>
                    <InputTW<InputsFormEditRestaurant> errors={errors} register={register} id={'address.country'}
                                                       label={'Country'}/>
                    <InputTW<InputsFormEditRestaurant> errors={errors} register={register} id={'address.city'}
                                                       label={'City'}/>
                    <InputTW<InputsFormEditRestaurant> errors={errors} register={register} id={'address.streetAddress'}
                                                       label={'Street'}/>
                    <InputTW<InputsFormEditRestaurant> errors={errors} register={register}
                                                       id={'contactInformation.email'}
                                                       label={'Email'}/>
                    <InputTW<InputsFormEditRestaurant> errors={errors} register={register}
                                                       id={'contactInformation.phone'}
                                                       label={'Phone'}/>
                    <InputTW<InputsFormEditRestaurant> errors={errors} register={register}
                                                       id={'contactInformation.twitter'}
                                                       label={'twitter'}/>
                    <InputTW<InputsFormEditRestaurant> errors={errors} register={register}
                                                       id={'contactInformation.instagram'}
                                                       label={'instagram'}/>
                    <InputTW<InputsFormEditRestaurant> errors={errors} register={register} id={'openingHours'}
                                                       label={'Time open'}/>
                    <div className={` flex items-center`}>
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
            </form>

        </div>
    );
};

export default FormEditRestaurant;
