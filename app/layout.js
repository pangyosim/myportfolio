import localFont from 'next/font/local';
import './globals.css';

const pretendard = localFont({
  src: [
    {
      path: '../public/fonts/Pretendard.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-pretendard',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio.it.kr'),
  title: '심판교 포트폴리오',
  description: '서비스를 설계하고 개발하는 심판교의 포트폴리오입니다. 여러 프로젝트를 중심으로 다양한 기술 스택과 프로젝트 경험을 소개합니다.',
  icons: {
    icon: '/img/code.png',
    shortcut: '/img/code.png',
    apple: '/img/code.png',
  },
  openGraph: {
    title: '심판교 포트폴리오',
    description: '서비스를 설계하고 개발하는 심판교의 포트폴리오입니다. 여러 프로젝트를 중심으로 다양한 기술 스택과 프로젝트 경험을 소개합니다.',
    url: '/',
    siteName: '심판교 포트폴리오',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/img/page_main.png',
        width: 1200,
        height: 630,
        alt: '심판교 포트폴리오 대표 이미지',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '심판교 포트폴리오',
    description: '서비스를 설계하고 개발하는 심판교의 포트폴리오입니다. 여러 프로젝트를 중심으로 다양한 기술 스택과 프로젝트 경험을 소개합니다.',
    images: ['/img/page_main.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={pretendard.variable}>{children}</body>
    </html>
  );
}
