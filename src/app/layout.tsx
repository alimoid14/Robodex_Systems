import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ParticlesBg from "@/components/ParticlesBg";

export const metadata: Metadata = {
  title:
    "About Us | Robodex Systems - Lab Equipment, STEM Solutions & Educational Technology in Lucknow, Uttar Pradesh, India",
  description:
    "Robodex Systems, based in Lucknow, Uttar Pradesh, India, offers cutting-edge educational technology, lab equipment, STEM solutions, and office furniture for schools, colleges, and universities. From 3D printers to robotics labs, we empower the future of education.",
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
