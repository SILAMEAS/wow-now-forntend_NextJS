import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {darkThemeCustom} from "@/Theme/DarkTheme";
import ReduxProvider from "@/redux/store/ReduxProvider";
import {cookies} from "next/headers";
import {EnumData, keyAuthentication} from "@/Constant/auth/ConstantAuthConfig";
import {ReactNode} from "react";
import OwnerLayout from "@/app/owner/layout/LayoutOwner";
import UserLayout from "@/app/user/layout/UserLayout";
import AdminLayout from "@/app/admin/layout/AdminLayout";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Wow now",
    description: "world food",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    const handleLayoutByRole = (child: ReactNode) => {
        const role = cookies().get(keyAuthentication.role)?.value;
        switch (role) {
            case EnumData.ROLE_CUSTOMER: {
                return <UserLayout>{child}</UserLayout>
            }
            case EnumData.ROLE_RESTAURANT_OWNER: {
                return <OwnerLayout>{child}</OwnerLayout>
            }
            case EnumData.ROLE_ADMIN: {
                return <AdminLayout>{child}</AdminLayout>
            }
            default:
                return <>{child}</>
        }
    }

    return (
        <html lang="en">
        <body>
        <ThemeProvider theme={darkThemeCustom}>
            <CssBaseline/>
            <ReduxProvider>
                {handleLayoutByRole(children)}
            </ReduxProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}
