'use client';

import { Manrope } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap'
});

export function FontProvider({ children }) {
  return <div className={`${manrope.variable} antialiased`}>{children}</div>;
}
