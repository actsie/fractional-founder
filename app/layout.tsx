import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fractional Founder Partner - Your On-Call Cofounder",
  description: "Offload what slows you down. Prototype what's unclear. Automate what's repetitive. Your fractional founder partner to turn clarity into action.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
