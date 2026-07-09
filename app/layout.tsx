import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Costume Saga",
  description: "Premium Bharatanatyam Costumes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${poppins.variable}`}>
         <Toaster position="top-right" />

       <Navbar />
        {children}
         <Footer />
      </body>
    </html>
  );
}