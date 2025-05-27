import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata = {
  title: 'Sistema Integrado SMAS-RIO',
  description: 'Sistema Integrado da Secretaria Municipal de Assistência Social do Rio de Janeiro',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="bg-background text-foreground font-sans min-h-screen">
        <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
      </body>
    </html>
  )
}
