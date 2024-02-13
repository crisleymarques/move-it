import type { Metadata } from "next";
import '../styles/global.css';

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
      <body>{children}</body>
    </html>
  );
}
