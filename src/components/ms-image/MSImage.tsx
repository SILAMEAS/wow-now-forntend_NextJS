import styled from "@emotion/styled";
import { CSSProperties } from "react";

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
