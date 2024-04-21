'use client'

import { Inter } from "next/font/google";
import "./globals.css";



const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <head>
        <title>MemoryLink</title>
      </head>
      <body className={inter.className}>  
        {children}
      </body>
    </html>
  );
}
