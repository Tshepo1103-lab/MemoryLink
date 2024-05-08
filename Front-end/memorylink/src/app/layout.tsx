"use client";

import { Inter } from "next/font/google"; // Correct the import path
import "./globals.css";
import { AuthProvider } from "@/providers/AuthProvider";
import { HospitalProvider } from "@/providers/HospitalProvider";
import { AdminProvider } from "@/providers/AdminProviders";
import { ProfileProvider } from "@/providers/ProfileProvider";
import { CommentProvider } from "@/providers/CommentProvider";
import { AISearchProvider } from "@/providers/AIsearchProvider";
import { RecognitionProvider } from "@/providers/FacerecognitionProvider";
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
        <link
          rel="stylesheet"
          href="https://font.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://font.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <HospitalProvider>
            <ProfileProvider>
              <AdminProvider>
                <CommentProvider>
                  <AISearchProvider>
                    <RecognitionProvider>{children}</RecognitionProvider>
                  </AISearchProvider>
                </CommentProvider>
              </AdminProvider>
            </ProfileProvider>
          </HospitalProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
