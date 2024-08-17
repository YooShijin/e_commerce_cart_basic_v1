import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ToastProvider from "@/providers/toast-provider";

const urban = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Store",
  description: "Basic e-commerce store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urban.className}>
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
