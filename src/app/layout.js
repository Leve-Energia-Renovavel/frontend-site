import { GoogleTagManager } from '@next/third-parties/google';
import "./globals.css";
import WhatsAppFAB from './pages/components/fabWhatsapp/WhatsappFAB';
import Header from './pages/components/header/Header';
import NewFooter from './pages/components/new-footer/NewFooter';

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
    <>
      <html lang="pt-BR" suppressHydrationWarning={true}>
        <body>
          <GoogleTagManager gtmId="GTM-TTH843C" />
          <Header />
          {children}
          <WhatsAppFAB />
          <NewFooter />
        </body>
      </html>
    </>
  )
}
