import { Noto_Sans_Mono, Roboto } from 'next/font/google';
import { headers } from 'next/headers';

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

export async function generateMetadata() {
  const headersList = headers();
  const header_url = headersList.get('x-path-url');
  const slug = header_url?.split('/');
  const ogImage = slug
    ? `https://images.contentstack.io/v3/assets/blt187521ff0727be24/blta65bbcd489ac4d4e/60ee0fde47e9392c538205a5/${
        slug[slug?.length - 1]
      }_1.jpg`
    : '';

  return {
    title: 'meta title',
    description: 'meta description',
    metadataBase: new URL('https://next-cercel.vercel.app'),
    openGraph: {
      type: 'website',
      title: 'OP_ title',
      description: 'OG_description',
      url: 'https://next-cercel.vercel.app/',
      siteName: 'OG_title',
      locale: 'vi_VN',
      images: [ogImage]
    },
    twitter: {
      card: 'summary_large_image'
    }
  };
}

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
