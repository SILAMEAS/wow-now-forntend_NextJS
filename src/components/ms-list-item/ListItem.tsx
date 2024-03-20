"use client";
import { DefaultColor } from "@/Constant/ConstantColor";
import { TAB } from "@/app/sidenav/constants";
import { Stack, Typography } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const MainListItems = () => {
  const currentPath = usePathname();
  return (
    <Stack spacing={2}>
      {TAB.map((item) => (
        <Link
          key={item.flag}
          href={item.url}
          style={{ textDecoration: "none" }}
        >
          <ListItemButton>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <Typography
              sx={{
                color: currentPath === item.url ? DefaultColor : "black",
                fontWeight: currentPath === item.url ? 600 : 300,
              }}
            >
              {item.label}
            </Typography>
          </ListItemButton>
        </Link>
      ))}
    </Stack>
  );
};
