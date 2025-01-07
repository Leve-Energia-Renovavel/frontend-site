import dynamic from "next/dynamic";
import "./globals.css";

import Head from "next/head";
import Header from './pages/components/header/Header';
import Messages from "./pages/components/messages/Messages";

import { Partytown } from '@builder.io/partytown/react';
import Script from "next/script";


const WhatsAppFAB = dynamic(() => import('./pages/components/fabWhatsapp/WhatsappFAB'), { ssr: false });
const Footer = dynamic(() => import('./pages/components/footer/Footer'), { ssr: false });

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
      <Head>
        <Partytown>
          <Script id="hotjar" type="text/partytown">
            {`(function (h, o, t, j, a, r) {
                        h.hj =
                        h.hj ||
                        function () {
                            // eslint-disable-next-line prefer-rest-params
                            (h.hj.q = h.hj.q || []).push(arguments);
                        };
                        h._hjSettings = { hjid: ${hotjarId}, hjsv: 6 };
                        a = o.getElementsByTagName("head")[0];
                        r = o.createElement("script");
                        r.async = 1;
                        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
                        a.appendChild(r);
                    })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");`}
          </Script>
          <Script id="gtm" type="text/partytown">
            {`
            (function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer',${gtmId});
            `}

          </Script>
        </Partytown>
      </ Head>
      <body suppressHydrationWarning={true} style={{ background: "#EFEFEC" }}>
        <Header />
        {children}
        <WhatsAppFAB />
        <Footer />
        <Messages />
      </body>
    </html>
  )
}
