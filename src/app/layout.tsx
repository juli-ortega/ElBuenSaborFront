import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import bs from "./../../public/bs3.svg"
import Link from "next/link";
import { StoreProvider } from "@/store/StoreProvider";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export const metadata: Metadata = {
  title: "El Buen Sabor",
  description: "El buen sabor, tu restaurante de confianza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <UserProvider>

          <body>
            <header>
              <Navbar />
            </header>

            <main className="min-h-screen">{children}</main>

            <footer>
              <Footer />
            </footer>

            <Link href={"/"}>
              {/* Logo fijo en la esquina inferior derecha */}
              <div className="fixed bottom-8 right-4 z-50 bg-black/60 rounded-full">
                <Image src={bs} alt="Logo" width={40} height={40} />
              </div>
            </Link>

          </body>
        </UserProvider>

      </html>
    </StoreProvider>
  );
}
