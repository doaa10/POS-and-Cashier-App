import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavSideDrawer from "@/Components/Large/NavSideDrawer/NavSideDrawer";
import TopBar from "@/Components/Large/TopBar/TopBar";
import Menu from "./(DataView)/Menu/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cashier App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mainStructure">
          <div className="sideDrawer">
          <NavSideDrawer/>
          </div>
          <div className="content">
            <div className="topbar">
              <TopBar/>
            </div>
            {children}
          </div>
        </div>
        </body>
    </html>
  );
}
