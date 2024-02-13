import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import '../styles/global.css';

const inter = Inter({ subsets: ["latin"] });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ['600'] });

export const metadata: Metadata = {
  title: "Move It",
  description: "Let's move it!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
