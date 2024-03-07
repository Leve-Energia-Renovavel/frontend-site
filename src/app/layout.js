import "./globals.css"
import WhatsAppFAB from "./pages/components/fabWhatsapp/WhatsappFAB"
import Footer from "./pages/components/footer/Footer"
import Header from "./pages/components/header/Header"

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

  return (
    <>
      <html lang="pt-BR">
        <body suppressHydrationWarning={true}>
          <Header />
          {children}
          <WhatsAppFAB />
          <Footer />
        </body>
      </html>
    </>
  )
}
