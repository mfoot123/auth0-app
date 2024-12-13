import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import {UserProvider } from '@auth0/nextjs-auth0/client';

export const metadata = {
    title: "My Secure App",
    description: "This is a secure app built with Next.js and Auth0.",
};

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <UserProvider>
            <body className={inter.className}>
                {children}</body>
        </UserProvider>
      </html>
    );
}