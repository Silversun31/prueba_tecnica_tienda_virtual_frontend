import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {NavBar} from "@/core/components/NavBar";
import Providers from "@/core/context/Providers";
import {ToastContainer} from "react-toastify";
import {APP_NAME} from "../../app.config";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: APP_NAME,
    description: "Prueba técnica tienda online",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Providers>
            <html lang="en" data-theme="dark">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-[100vh] flex flex-col`}
            >
            <ToastContainer theme="dark"/>

            <NavBar/>
            {children}
            </body>
            </html>
        </Providers>
    );
}
