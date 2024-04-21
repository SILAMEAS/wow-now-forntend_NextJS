// Note: `useUploadThing` is IMPORTED FROM YOUR CODEBASE using the `generateReactHelpers` function

import {useDropzone} from "@uploadthing/react/hooks";
import {useCallback, useState} from "react";
import {generateClientDropzoneAccept} from "uploadthing/client";
import {useUploadThing} from "@/utils/uploadthing";
import {Button} from "@mui/material";

export default function CustomUploadThing({buttonName="drop file",setFileAlreadyUpload}:{buttonName:string, setFileAlreadyUpload: React.Dispatch<React.SetStateAction<[] | File[]>>}) {
    const [files, setFiles] = useState<File[]>([]);
    const onDrop = useCallback((acceptedFiles: File[]) => {
        setFiles(acceptedFiles);
    }, []);

    const {startUpload, permittedFileInfo} = useUploadThing("imageUploader", {
        onClientUploadComplete: (file) => {
            console.log("->", file);
            setFileAlreadyUpload([...file]);
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

    return <div className={``}>
        <div {...getRootProps()}>
            <div>
                {files.length > 0 && (
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={() => startUpload(files)}
                    >
                        Upload {files.length} files
                    </Button>
                )}
            </div>
            <button className={`bg-pink-700 px-4 rounded-3xl`}>
                <input {...getInputProps()} />
                {
                    files.length > 0?"Upload more":  buttonName
                }
            </button>
        </div>
        <div>
        {files.length > 0 && (
                files.map((item, index) => <img key={index} src={`${URL.createObjectURL(item)}`}/>
                )
            )}
        </div>
    </div>
}
