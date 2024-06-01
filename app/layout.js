import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script';
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <Script src='https://code.jquery.com/jquery-1.12.4.min.js'></Script>
    <Script src='https://cdn.iamport.kr/js/iamport.payment-1.2.0.js'></Script>
    <title>심판교 포트폴리오</title>
    {/* <--SIMPLE LINE ICONS CDN--> */}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css"></link>
    <link rel="icon" href="img/myimg.png"></link>
    </head>
      <body>
      {children}
      <Analytics />
      <script defer src="https://kit.fontawesome.com/34b8159489.js" crossOrigin="anonymous"></script>
      </body>
    </html>
  )
}
