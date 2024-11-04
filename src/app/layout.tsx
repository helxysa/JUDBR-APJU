import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/componentes/Nav/Nav";
import Footer from '@/componentes/Footer/Footer';
import PageUp from '@/componentes/PageUp/PageUp';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Judbr',
  description: 'Judbr é uma plataforma de gestão de processos e prazos para advogados e escritórios.',
  icons: {
    icon: '/images/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
        <body className="bg-white">
          <Nav />
        {children}
        <Footer />
        <PageUp />
      </body>
    </html>
  );
}
