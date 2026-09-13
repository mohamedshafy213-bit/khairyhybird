import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmed khairy | Hybrid Athlete",
  description: "Official links, training programs, supplements, and content.",
  openGraph: {
    title: "Ahmed khairy | Hybrid Athlete",
    description: "Connect with Ahmed khairy across all platforms and training resources.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#5e5241",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-[#5e5241]">
        {children}
      </body>
    </html>
  );
}
