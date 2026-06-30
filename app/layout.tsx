import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kolabtree — Hire Freelance Cosmetic Formulation Experts",
  description: "Connect with experienced cosmetic chemists, formulation scientists, and regulatory consultants. Develop skincare, haircare, and personal care products on Kolabtree's vetted scientific marketplace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/proxima-nova-2" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

