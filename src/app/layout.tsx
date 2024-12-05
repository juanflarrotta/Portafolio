import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import "@/styles/globals.css";

export const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
  subsets: ["latin"],
  variable: "--montserrat-font",
});

export const metadata: Metadata = {
  title: "Portfolio Juan F. Larrotta Bernal",
  description: "Portfolio of Juan Fernando Larrotta Bernal made in NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} bg-background`}>{children}</body>
    </html>
  );
}
