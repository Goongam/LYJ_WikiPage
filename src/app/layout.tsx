import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "CodingWIKI",
    template: "%s - CodingWIKI",
  },
  description: "지식 저장소 코딩위키입니다",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex flex-col`}>
        <Header />
        <main className="h-full">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
