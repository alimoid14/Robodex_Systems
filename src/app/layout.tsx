import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ParticlesBg from "@/components/ParticlesBg";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-no-repeat min-h-screen bg-black text-white">
        <Navbar />
        <ParticlesBg />
        {children}
      </body>
    </html>
  );
}
