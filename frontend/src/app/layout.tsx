import type { Metadata } from "next";

import "./globals.css";
import { Header } from "@/widgets/header";
import { SearchFrame } from "@/shared/searchFrame";
import { Category } from "@/widgets/category";
import { Country } from "@/widgets/country";
import { Years } from "@/widgets/years";
import { Search } from "@/widgets/search";
import { SearchByFilter } from "@/widgets/searchByFilter";

export const metadata: Metadata = {
  title: "WannaWatch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex  flex-col items-center w-screen h-screen">
        <Header>
          <Search />
          <SearchFrame>
            <Category />
            <Country />
            <Years />
          </SearchFrame>
        </Header>
        {children}
      </body>
    </html>
  );
}
