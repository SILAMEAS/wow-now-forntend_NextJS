import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import {FieldErrors, FieldValues, Path, UseFormRegister} from "react-hook-form";

export interface TypeInput<T extends FieldValues> {
    register: UseFormRegister<T>,
    id: Path<T>,
    label?: string
    required?: boolean
    errors: FieldErrors<T>,
    className?: string | undefined,
    InputElement?: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
}


export function InputTW<T extends FieldValues>(props: TypeInput<T>) {
    const {register, InputElement, id, label, required, errors, className} = props;
    // const handleErrorMessage = () => {
    //     if (id.includes('city')) {
    //         return errors.address?.city && errors.address?.city.type === "required"
    //     } else if (id.includes('country')) {
    //         return errors.address?.country && errors.address?.country.type === "required"
    //     } else if (id.includes('streetAddress')) {
    //         return errors.address?.streetAddress && errors.address?.streetAddress.type === "required"
    //     } else {
    //         return errors[id] && errors[id]?.type === "required"
    //     }
    // }
    return (
        <div>
            <label>{label ?? id}</label>
            <input
                {...register(id, {required: required ?? true,})}
                {...InputElement}
                className={`block w-full bg-transparent py-1 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground border-2 px-5 rounded-lg ${className}`}
            />
            {errors[id] && errors[id]?.type === "required" && (
                <span className={`text-red-700`}>This is required</span>
            )}
        </div>
    );
}

interface IButtonSubmit {
    btnName: string;
    disable?: boolean
}

export const ButtonSubmit = ({btnName, disable}: IButtonSubmit) => {
    return <div className="mt-4 flex items-center justify-end gap-x-2">
        <button
            className={`flex flex-row ${disable?'bg-gray-700':'bg-pink-700'}  p-3`}>
            <span className="mr-2">{btnName}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
            </svg>
        </button>
    </div>
}
