import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import localfont from "next/font/local";
import Navbar from "@/components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const inter = Inter({ subsets: ["latin"] });

const tec = localfont({
  src: [
    {
      path: "../../../public/fonts/ITCAvantGardeStd-Md.ttf",
      weight: "500",
    },
  ],
  variable: "--font-tec",
});

export const metadata = {
  title: "Tecjaunt E-Commerce",
  description:
    "Tecjaunt E-Commerce Store, so now you can buy everything from here.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${tec.variable} h-full `}>
      <body
        className={cn(
          "relative h-full font-sans antialiased",
          inter.className
        )}>
        <ToastContainer />
        <Navbar />
        <main className="relative flex flex-col min-h-screen">
          <div className="flex-grow flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
}
