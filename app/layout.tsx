import type React from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
            <body className="bg-[#FFFBF5] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
