'use client';

import { ThemeProvider } from 'styled-components';

import { theme } from '../styles/theme';

type NextThemeProps = {
  children: React.ReactNode;
};

export default function NextThemeProvider({ children }: NextThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
