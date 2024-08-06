import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/main-header";
import BootstrapClient from "@/util/BootStrapClient";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextJS Portiflio - by theslimdev",
  description: "A simple portfolio demo app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainHeader />
        <div className="container my-5">{children}</div>
        <BootstrapClient />
        <Footer />
      </body>
    </html>
  );
}
