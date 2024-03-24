import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/tw-navbar/Navbar";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {darkThemeCustom} from "@/Theme/DarkTheme";
import ProtectRoute from "@/app/protected-route/ProtectRoute";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

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
        <ThemeProvider theme={darkThemeCustom}>
            <CssBaseline/>
            {/*<Head>*/}
            {/*    <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />*/}
            {/*    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />*/}
            {/*</Head>*/}
            <body className={inter.className}>
                <ProtectRoute>
                    {children}
                </ProtectRoute>
            </body>
        </ThemeProvider>
    </html>
  );
}
