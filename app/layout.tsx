import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import {Toaster} from "@/components/ui/sonner";

const monaSans = Mona_Sans({
    variable: "--font-mona-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "PrepellAI",
    description: "An AI-powered platform for preparing for mock interviews.",
    viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
        <body className={`${monaSans.className} antialiased pattern`}>
        {children}
        <Toaster/>
        </body>
        </html>
    );
}
