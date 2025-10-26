import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sahand Edrisi",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className="font-montserrat antialiased">
        {children}
      </body>
    </html>
  );
}
