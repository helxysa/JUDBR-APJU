import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/componentes/Nav/Nav";
import localFont from 'next/font/local';
import Footer from '@/componentes/Footer/Footer';
import PageUp from '@/componentes/PageUp/PageUp';

const metropolis = localFont({
  src: [
    {
      path: '../../public/fonts/Metropolis-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Metropolis-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Metropolis-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Metropolis-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-metropolis',
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
    <html lang="en" className={`${metropolis.variable}`}>
      <body className="bg-white">
        <Nav />
        {children}
        <Footer />
        <PageUp />
      </body>
    </html>
  );
}
