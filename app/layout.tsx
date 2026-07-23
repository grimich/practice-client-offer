import type { Metadata } from "next";
import { Manrope, PT_Serif } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["cyrillic", "latin"],
});

const ptSerif = PT_Serif({
  variable: "--font-serif",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Следующий клиент — за 4 недели",
  description:
    "Рабочая программа для опытных специалистов: предложение, гипотезы и первые продажи через тёплый нетворк.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} ${ptSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
