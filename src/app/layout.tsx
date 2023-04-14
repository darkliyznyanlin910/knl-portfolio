import "../globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Johnny Lin",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
