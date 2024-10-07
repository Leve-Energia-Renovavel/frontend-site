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
  maximumScale: 1,
  userScalable: 0,
  colorScheme: 'light',
}

export default function RootLayout({ children }) {

  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="pt-BR" suppressHydrationWarning={true} >
      <body suppressHydrationWarning={true} style={{ background: "#EFEFEC"}}>
        <GoogleTagManager gtmId={gtmId} />
        <Header />
        {children}
        <WhatsAppFAB />
        <Footer />
      </body>
    </html>
  )
}
