import type {Metadata} from 'next';
import { inter } from '@/app/ui/fonts';
import '@/app/globals.css';

export const metadata: Metadata  = {
title: 'ACNE'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return(
    <html lang='pt-br'>
      <body className={ inter.className } >
        { children }
      </body>
    </html>
  );
};
