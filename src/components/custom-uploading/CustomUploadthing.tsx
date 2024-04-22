// Note: `useUploadThing` is IMPORTED FROM YOUR CODEBASE using the `generateReactHelpers` function

import {useDropzone} from "@uploadthing/react/hooks";
import React, {DetailedHTMLProps, InputHTMLAttributes, useCallback, useState} from "react";
import {generateClientDropzoneAccept} from "uploadthing/client";
import {useUploadThing} from "@/utils/uploadthing";
import CardMedia from "@mui/material/CardMedia";
import {FieldValues, Path, PathValue, UseFormRegister, UseFormSetValue, UseFormWatch} from "react-hook-form";
import BackDropLoading from "@/components/mui-backdrop/BackDropLoading";

export interface IInputUploadthing<T extends FieldValues> {
    register: UseFormRegister<T>,
    id: Path<T>,
    label?: string
    required?: boolean
    // errors: FieldErrors<T>,
    className?: string | undefined,
    InputElement?: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    buttonName?:string,
    setValue: UseFormSetValue<T>,watch: UseFormWatch<T>

}
export default function InputUploadThing<T extends FieldValues>(props:IInputUploadthing<T>) {
    const {setValue,watch,buttonName,id}=props;
    const [files, setFiles] = useState<File[]>([]);
    const onDrop = useCallback((acceptedFiles: File[]) => {
        setFiles(acceptedFiles);
    }, []);
    const [loading,setLoading]=React.useState<boolean>(false);

    const {startUpload, permittedFileInfo} = useUploadThing("imageUploader", {
        onClientUploadComplete: (file:any) => {
            // console.log("->", file);
            setValue(id,file[0].url as PathValue<T, Path<T>>);
            console.log('watch',watch(id));
        },
        onUploadError: () => {
            alert("error occurred while uploading");
        },
        // onUploadBegin: () => {
        //   alert("upload has begun");
        // },
    });

    const fileTypes = permittedFileInfo?.config
        ? Object.keys(permittedFileInfo?.config)
        : [];

    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        accept: fileTypes ? generateClientDropzoneAccept(fileTypes) : undefined,
    });
    const takeTimeLoadingSrc = () => {
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    };
    React.useMemo(()=>{
        if(files.length > 0 ){
            setLoading(true);
            startUpload(files).then(()=>takeTimeLoadingSrc())
        }
    },[files])
    return <div>
        <BackDropLoading open={loading}/>
        <div {...getRootProps()} className={'cursor-pointer'}>
            <input {...getInputProps()} />
            {
                watch(id)?<CardMedia
                    component="img"
                    sx={{width: '100px', height: "100px", borderRadius: '50%'}}
                    image={watch(id)}
                    alt="no image"
                />:<p className={`w-[100px] h-[100px] rounded-full bg-pink-700 flex items-center justify-center`}>No Image</p>
            }
        </div>
    </div>
}
