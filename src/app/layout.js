import { GoogleTagManager } from '@next/third-parties/google';
import dynamic from "next/dynamic";
import "./globals.css";

import Footer from './pages/components/footer/Footer';
import Header from './pages/components/header/Header';

const WhatsAppFAB = dynamic(() => import('./pages/components/fabWhatsapp/WhatsappFAB'), { ssr: false });

export const metadata = {
  title: 'Leve Energia Renovavel',
  description: 'Leve energia renovavel - pague menos na conta de luz',
  icons: {
    icon: "/favicon.ico",
  },
  content: 'text/html; charset=utf-8',
  cacheControl: 'public, max-age=31536000',
  expires: 'Sun, 31 Dec 2024 23:59:59 GMT',

}
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: 1,
  colorScheme: 'light',
}

export default function RootLayout({ children }) {

  return (
    <html lang="pt-BR" suppressHydrationWarning={true}>
      <body>
        <GoogleTagManager gtmId="GTM-TTH843C" />
        <Header />
        {children}
        <WhatsAppFAB />
        <Footer />
      </body>
    </html>
  )
}
