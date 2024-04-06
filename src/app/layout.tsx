import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {darkThemeCustom} from "@/Theme/DarkTheme";
import ProtectRoute from "@/app/protected-route/ProtectRoute";
import ReduxProvider from "@/redux/store/ReduxProvider";

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

    return (
        <html lang="en">
        <body>
        <ThemeProvider theme={darkThemeCustom}>
            <CssBaseline/>
            <ReduxProvider>
                <ProtectRoute>
                    {children}
                </ProtectRoute>
            </ReduxProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}
