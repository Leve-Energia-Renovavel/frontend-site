import dynamic from "next/dynamic";
import "./globals.css";

import { GoogleTagManager } from '@next/third-parties/google';
import Footer from './pages/components/footer/Footer';
import Header from './pages/components/header/Header';
import Hotjar from './pages/components/hotjar/Hotjar';

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

  openGraph: {
    title: 'Leve Energia Renovável',
    description: 'Leve Energia Renovável - pague menos na conta de luz',
    url: 'https://leveenergia.com.br/',
    siteName: 'Leve Energia',
    images: [
      {
        url: `https://yt3.googleusercontent.com/QRPMU_K8uGjD1bBJ55VHnR0uHtGoiRIldVv2eQ4CWbr4fapydGIr4W5wOBHZw2gVbhegT4-I=s900-c-k-c0x00ffffff-no-rj`,
        width: 800,
        height: 600,
      },
    ],
    videos: [
      {
        url: 'https://www.youtube.com/watch?v=is9-dDVBxF8',
        width: 800,
        height: 600,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },

}
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: 1,
  colorScheme: 'light',
}

export default function RootLayout({ children }) {

  const gtmId = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_GTM_ID : "";
  const hotjarId = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_HOTJAR_ID : null;

  return (
    <html lang="pt-BR" suppressHydrationWarning={true} >
      <head>
        <Hotjar hotjarId={hotjarId} />
      </head>
      <body suppressHydrationWarning={true} style={{ background: "#EFEFEC" }}>
        <GoogleTagManager gtmId={gtmId} />
        <Header />
        {children}
        <WhatsAppFAB />
        <Footer />
      </body>
    </html>
  )
}
