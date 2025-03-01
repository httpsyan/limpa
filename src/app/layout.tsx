import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "../components/header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Limpa - Carregadores para Veículos Elétricos",
  description:
    "Soluções de carregamento para veículos elétricos em sua casa ou encontre postos próximos. Energia limpa para um futuro sustentável.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-black`}
      >
        <Header />

        {children}
      </body>
    </html>
  );
}
