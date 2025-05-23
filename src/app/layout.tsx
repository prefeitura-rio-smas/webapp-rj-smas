import type React from "react"
import { ThemeProvider } from "@/providers/theme-provider"
import "./globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <title>SISTEMA INTEGRADO SMAS-RIO</title>
        <meta name="description" content="Sistema Integrado da Secretaria Municipal de Assistência Social" />
      </head>
      <body>
        <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
      </body>
    </html>
  )
}
