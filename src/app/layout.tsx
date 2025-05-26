import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";

import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import React from "react";

const leagueSpartan = League_Spartan({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Glimere | Custom-Made Fashion, Tailored to Perfection",
  description:
    "Join Glimere and revolutionize your fashion experience with custom-made clothing, 3D visualization, and a global community of creators and shoppers. Sign up today!",
  openGraph: {
    title: "Glimere | Empowering Fashion Creators and Shoppers",
    description:
      "Discover African fashion creators and shop custom designs using cutting-edge 3D visualization. Sign in to explore tailored outfits or join as a creator to showcase your designs.",
    url: "https://glimere.com",
    siteName: "Glimere",
    images: [
      {
        url: "https://glimere.com/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Glimere | Fashion Tailored for You",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glimere | Fashion Tailored for You",
    description:
      "Join Glimere to shop custom-made garments, explore African fashion, and connect with global creators using 3D visualization technology.",
    images: ["https://glimere.com/assets/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://glimere.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={leagueSpartan.className}>
        <ReactQueryProvider>{children}</ReactQueryProvider> <Toaster />
      </body>
    </html>
  );
}
