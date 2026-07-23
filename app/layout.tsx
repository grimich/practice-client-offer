import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Следующий клиент — за 4 недели",
  description:
    "Поиск проблемы, стоящей решения, через экспертность и тёплый нетворк.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
