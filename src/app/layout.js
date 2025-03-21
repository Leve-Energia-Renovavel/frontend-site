import dynamic from "next/dynamic";
import "./globals.css";

import { Partytown } from '@builder.io/partytown/react';
import Head from "next/head";
import Header from './pages/components/header/Header';

import { GoogleTagManager } from '@next/third-parties/google';
import Hotjar from "./pages/components/hotjar/Hotjar";

const WhatsAppFAB = dynamic(() => import('./pages/components/fabWhatsapp/WhatsappFAB'), { ssr: false });
const Footer = dynamic(() => import('./pages/components/footer/Footer'), { ssr: false });
const Messages = dynamic(() => import("./pages/components/messages/Messages"), { ssr: false });

export const metadata = {
  title: 'Leve Energia Renovável',
  description: 'Leve energia renovavel - pague menos na conta de luz',
  url: 'https://leveenergia.com.br/',
  siteName: 'Leve Energia Renovável',
  generator: 'Leve Energia Renovável',
  applicationName: 'Leve Energia Renovável',
  keywords: ['Leve Energia Renovável', 'Leve Energia', 'Energia Renovável',],
  category: 'energy',
  icons: {
    icon: "/favicon.ico",
  },
  content: 'text/html; charset=utf-8',
  cacheControl: 'public, max-age=86400, stale-while-revalidate=3600',

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
    <html lang="pt-BR" suppressHydrationWarning={true}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/hfo1jru.css" />
      </head>
      <Head>
        <Partytown forward={['dataLayer.push']}>
          <Hotjar hotjarId={hotjarId} />
          <GoogleTagManager gtmId={gtmId} />
        </Partytown>
      </Head>

      <body suppressHydrationWarning={true} style={{ background: "#EFEFEC" }} >
        <Header />
        {children}
        <Footer />
        <Messages />
      </body>
    </html>
  )
}
