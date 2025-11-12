import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CHOWDHURY GLOBAL SOLUTIONS - WordPress & E-commerce Development",
  description: "Professional WordPress development, WooCommerce e-commerce solutions, domain registration, hosting, and maintenance services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
