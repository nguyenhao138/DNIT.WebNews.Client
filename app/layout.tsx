import type { Metadata } from "next";
import "@/app/styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/styles/font/Rotobo.css";
import {
  Header,
  Footer,
  Nav,
  Sidebar,
  ContentBanner,
  ContentClient,
  ContentFix,
} from "@/app/components/index";

import CustomScripts from "./custom-scripts";
import Breadcrumb from "@/app/components/breadcrumb";

export const metadata: Metadata = {
  title: "Powaco - Công ty cổ phần điện nước An Giang",
  description: "Công ty cổ phần điện nước An Giang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className="home blog content-sidebar"
        itemScope
        itemType="https://schema.org/WebPage"
      >
        <div className="site-container">
          <Header />
          <Nav />
          <Breadcrumb />
          <div className="site-inner">
            <div className="content-sidebar-wrap">
              {children}
              <Sidebar />
            </div>
          </div>
          <ContentBanner />
          <ContentClient />
          <Footer />
          <ContentFix />
        </div>
        <CustomScripts />
      </body>
    </html>
  );
}
