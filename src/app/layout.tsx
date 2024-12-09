import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Figtree, Roboto, DM_Sans, Inter, Urbanist, Poppins } from 'next/font/google';


export const figtree = Figtree({ subsets: ['latin'], variable: "--font-figtree" });
export const roboto = Roboto({ subsets: ['latin'], weight: ["100", "300", "400", "500", "700"], variable: "--font-roboto" });
export const poppins = Poppins({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700', '800'], variable: "--font-poppins" });
export const dm_Sans = DM_Sans({ subsets: ['latin'], variable: "--font-dm_Sans" });
export const inter = Inter({ subsets: ['latin'], variable: "--font-inter" });
export const urbanist = Urbanist({ subsets: ['latin'], variable: "--font-urbanist" });

export const metadata: Metadata = {
  title: "Home | Discount me",
  description: "E-commerce Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} ${roboto.variable} ${poppins.variable} ${dm_Sans.variable} ${inter.variable} ${urbanist.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
