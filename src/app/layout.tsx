import Head from 'next/head';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gabriel M.P.",
  description: "My portfolio dev in next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <Head>
            <link rel="stylesheet" href="/@fortawesome/fontawesome-free/css/all.min.css"/>
        </Head>
        <body className={inter.className}>
            <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-12 lg:p-24">
                <Header/>
                {children}
                <Footer/>
            </main>
        </body>
    </html>
);
}
