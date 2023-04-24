import MainLayout from "@/components/MainLayout";
import "../globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Johnny Lin",
  description: "Welcome to my web portfolio!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
      <Analytics />
    </html>
  );
}
