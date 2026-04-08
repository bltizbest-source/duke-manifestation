import './globals.css';
import { Bree_Serif, Source_Sans_3 } from 'next/font/google';

const displayFont = Bree_Serif({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400']
});

const bodyFont = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700']
});

export const metadata = {
  title: "The Duke's | Great American Food in Chiang Mai",
  description:
    "A premium redesign concept for The Duke's: scratch-made American comfort food, steaks, burgers, pizza, and big appetite energy in Chiang Mai."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>{children}</body>
    </html>
  );
}
