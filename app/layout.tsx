import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Следующий клиент — за 4 недели";
const description =
  "Работа для специалистов с личной практикой: находим сильное предложение и проверяем его через тёплый нетворк.";

export async function generateMetadata(): Promise<Metadata> {
  const incomingHeaders = await headers();
  const host =
    incomingHeaders.get("x-forwarded-host") ??
    incomingHeaders.get("host") ??
    "localhost";
  const protocol =
    incomingHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") || host.startsWith("127.0.0.1")
      ? "http"
      : "https");
  const imageUrl = new URL("/og.png", `${protocol}://${host}`).toString();

  return {
    title,
    description,
    openGraph: {
      type: "website",
      locale: "ru_RU",
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1730,
          height: 909,
          alt: "Найду вам следующего клиента за 4 недели",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
