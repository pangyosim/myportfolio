import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script';
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <title>안녕하세요 백엔드개발자 심판교입니다</title>
    {/* <--SIMPLE LINE ICONS CDN--> */}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css"></link>
    <link rel="icon" href="img/mimoticon.png"></link>
    </head>
      <body>
      {children}
      <Analytics />
      <script defer src="https://kit.fontawesome.com/34b8159489.js" crossOrigin="anonymous"></script>
      </body>
    </html>
  )
}
