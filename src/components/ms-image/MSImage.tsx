import styled from "@emotion/styled";
import React, {CSSProperties} from "react";
import Image from "next/image";
import clsx from "clsx";

export const MSProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const MSProductImageModify = ({
  src,
  alt,
  sx,
}: {
  src: string;
  alt: string;
  sx?: CSSProperties;
}) => {
  return (
    <MSProductImage
      src={src}
      alt={alt}
      style={{ width: "50px", height: "50px", ...sx }}
    />
  );
};
export const ImageCustom=({image}:{ image: string;})=>{
    // const {
    //     attributes,
    //     listeners,
    //     setNodeRef,
    //     transform,
    //     transition,
    //     isDragging,
    // } = useSortable({
    //     id: id,
    //     data: {
    //         type: "item",
    //     },
    // });
    return  <Image
        style={{
            // transform: CSS.Translate.toString(transform),
        }}
        // ref={setNodeRef}
        // {...attributes}
        // {...listeners}
        src={image}
        width={200}
        height={200}
        priority
        alt=""
        className={clsx(
            "border object-cover hover:cursor-grab h-full w-full",
            // isDragging && "opacity-50"
        )}
    />
}
