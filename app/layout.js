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
  title: '심판교 포트폴리오',
  description: 'AICON과 일독 프로젝트를 중심으로 소개하는 풀스택 개발자 포트폴리오',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={pretendard.variable}>{children}</body>
    </html>
  );
}
