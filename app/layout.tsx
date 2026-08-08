import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nguyễn Tuấn Sơn | Public Relations & Education",
  description: "Portfolio and professional CV of Nguyễn Tuấn Sơn — Public Relations postgraduate, analyst coach and education-focused communicator.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
