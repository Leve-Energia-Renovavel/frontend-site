export const metadata = {
  title: 'Leve Energia Renovavel',
  description: 'Leve energia renovavel - pague menos na conta de luz',
  icons: {
    icon: "/favicon.ico",
  },
  content: 'text/html; charset=utf-8',

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
        <body suppressHydrationWarning={true}>{children}</body>
      </html>
    </>
  )
}
