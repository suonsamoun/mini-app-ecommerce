import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LoginWithCore } from "@/server/login";
import JsBridgeLayout from "../layout/js-bridge-layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mini App",
  description: "Power by TrueMoney Cambodia",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const response = await LoginWithCore()
  let token = '';
  if (response) {
    token = response.access_token
  }
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="p-4">
          <JsBridgeLayout token={token}>
            {children}
          </JsBridgeLayout>
        </div>
      </body>
    </html>
  );
}
