// import { Inter } from 'next/font/google';
// import localFont from 'next/font/local'
 
// export const inter = Inter({ subsets: ['latin'] });
// export const muller = localFont({
//     src: '../../public/fonts/MullerRegular.otf',
//     variable: '--font-muller'
// })
// export const mullerBold = localFont({
//     src: '../../public/fonts/MullerBold.otf',
//     variable: '--font-muller-bold'
// })

import { Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
  });

