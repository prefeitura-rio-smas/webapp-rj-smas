import type React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Sistema Integrado SMAS-RIO",
  description: "Sistema Integrado da Secretaria Municipal de Assistência Social do Rio de Janeiro",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-background text-foreground font-sans min-h-screen flex flex-col">
        <ThemeProvider defaultTheme="light">
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
