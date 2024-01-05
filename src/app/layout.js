/* eslint-disable @next/next/no-page-custom-font */
import { Inter, Roboto, } from 'next/font/google'
import Head from 'next/head'



export default function RootLayout({ children }) {
  return (
    <>
      <html lang="pt-BR">
        <Head>
          <title>Leve Energia Renovavel</title>
          <meta name="description" content="Leve energia renovavel - pague menos na conta de luz" />
          <meta name="viewport" content="width=device-width, minimal-ui, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.cdnfonts.com/css/helvetica-neue-55" rel="stylesheet" />
          <link rel="preload" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap" as="style" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap" />
          <link rel="preload" href="https://fonts.googleapis.com/css?family=Inter:700&display=optional" as="style" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:700&display=optional" />
        </Head>
        <body>{children}</body>
      </html>
    </>
  )
}
