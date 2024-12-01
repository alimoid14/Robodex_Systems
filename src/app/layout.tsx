import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ParticlesBg from "@/components/ParticlesBg";

export const metadata: Metadata = {
  title: "Robodex Systems: Innovative Lab & Educational Equipment Solutions",
  description:
    "Robodex Systems, based in Lucknow, Uttar Pradesh, India, offers top-quality lab equipment and educational tools, including AI labs, robotics, furniture, and 3D printers, supporting schools and institutions.",
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
