import React from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import QueryProvider from '@/app/providers/query-provider';
import ThemeProvider from './providers/theme-provider';
import './globals.css';

const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <QueryProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
