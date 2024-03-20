import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "next/image";
import React from "react";

interface IProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const AuthLayout: React.FC<IProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Stack sx={{ maxWidth: 350, width: "100%", px: 2, pb: 4 }}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            mb={4}
          >
            <Image
              src="/images/react.svg"
              alt="logo 512x512 with text"
              style={{ width: "140px", height: "140px" }}
            />
          </Stack>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            {title && (
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 500,
                  fontSize: "22px",
                  lineHeight: "32px",
                }}
              >
                {title}
              </Typography>
            )}
          </Stack>
          <Stack spacing={1} mb={3}>
            {description && (
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 300,
                  fontSize: "15px",
                  lineHeight: "32px",
                }}
              >
                {description}
              </Typography>
            )}
          </Stack>
          {children}
          {/* <Typography sx={{position: 'fixed', bottom: 12, right: 25}}>
            ©2022 Chanheng Hong
          </Typography> */}
        </Stack>
      </Stack>
    </div>
  );
};
