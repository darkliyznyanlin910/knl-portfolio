import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Johnny Lin | Blogs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
