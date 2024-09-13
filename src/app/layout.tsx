import type { Metadata } from "next";
import "./globals.css";
import "../../public/css/bootstrap.css";
import "../../public/css/style.css";
import Analytics from "./components/Analytics";
import PageLoader from "./components/PageLoader";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="fr">
      <head>
        <Analytics siteId="G-M4JH6MPTCC"/>
        <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=gite-losmose"></script>
      </head>
      <body>
        <div className="text-center relative overflow-hidden">
          <PageLoader />
          <Header />
        </div>
        <main>
          {children}
        </main>        
        <script src="/js/core.min.js" defer/>
        <script src="/js/script.js" defer/>
      </body>
    </html>
  );
}
