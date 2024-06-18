import  localFont  from 'next/font/local';

const weights = [300, 400, 500, 700];

export const ceraPro = localFont({
  src: weights.map((weight) => ({
    path: `../../public/fonts/cera-pro/CeraPro-${weight}.woff2`,
    format: 'woff2',
    weight: `${weight}`, 
    style: 'normal',
  })),
});