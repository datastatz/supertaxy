import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Super Taxy",
  description: "Explore and compare global tax rates — open source and free.",
  openGraph: {
    title: "Super Taxy",
    description: "Explore and compare global tax rates — open source and free.",
    url: "https://supertaxy.com",
    siteName: "Super Taxy",
    images: [
      {
        url: "/super-taxy-preview.png",
        width: 1200,
        height: 630,
        alt: "Super Taxy Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Super Taxy",
    description: "Explore and compare global tax rates — open source and free.",
    images: ["/super-taxy-preview.png"],
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights/>

      </body>
    </html>
  );
}
