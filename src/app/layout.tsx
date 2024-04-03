import type { Metadata } from 'next';
import { Noto_Sans_Mono, Roboto } from 'next/font/google';

import NextThemeProvider from 'context/NextThemeContext';

import StyledComponentsRegistry from '../lib/styled-registry';
import { GlobalStyles } from '../styles/global-styles';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
  style: ['normal', 'italic']
});
const noto_sans_mono = Noto_Sans_Mono({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  variable: '--font-noto_sans_mono',
  display: 'swap',
  style: ['normal']
});

export const metadata: Metadata = {
  title: 'meta title',
  description: 'meta description',
  metadataBase: new URL('https://next-cercel.vercel.app'),
  openGraph: {
    type: 'website',
    title: 'OP_ title',
    description: 'OG_description',
    url: 'https://next-cercel.vercel.app/',
    siteName: 'OG_title',
    locale: 'vi_VN'
  },
  twitter: {
    card: 'summary_large_image'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${noto_sans_mono.variable}`}>
      <StyledComponentsRegistry>
        <NextThemeProvider>
          <body>{children}</body>
          <GlobalStyles />
        </NextThemeProvider>
      </StyledComponentsRegistry>
    </html>
  );
}
