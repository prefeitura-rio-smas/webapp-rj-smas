"use client"

import { Settings, Sun, Moon, MenuIcon, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "@/components/theme-provider"
import Link from "next/link"
import { useRef, useEffect, useState } from "react"

interface HeaderProps {
  sidebarVisible: boolean
  setSidebarVisible: (visible: boolean) => void
  setCurrentPage: (page: string | null) => void
}

export function Header({ sidebarVisible, setSidebarVisible, setCurrentPage }: HeaderProps) {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const logoSrc = theme === "dark" ? "/logo-prefeitura-escuro.png" : "/logo-prefeitura.png";
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open])

  return (
    <header className="bg-surface border-b border-border p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <button
          className="inline-flex items-center justify-center h-10 w-10 rounded-md text-primary bg-surface hover:bg-hover border border-border transition-colors"
          onClick={() => setSidebarVisible(!sidebarVisible)}
          aria-label="Toggle sidebar"
        >
          {sidebarVisible ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
        <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage(null)}>
          <img src={logoSrc} alt="Prefeitura Rio Logo" className="h-10 w-auto" />
        </div>
      </div>

      {/* Accordion centralizado */}
      {/* A div abaixo já está configurada para ocultar em mobile (hidden) e exibir em telas médias ou maiores (md:block) */}
      <div className="relative hidden md:block flex-1 flex justify-center">
        <button
          ref={buttonRef}
          className="text-primary text-xl font-semibold flex items-center gap-2 focus:outline-none mx-auto"
          onClick={() => setOpen((prev) => !prev)}
        >
          SISTEMA INTEGRADO SMAS-RIO
          <svg className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {open && (
          <div
            ref={dropdownRef}
            className="absolute left-1/2 -translate-x-1/2 top-full w-96 bg-surface border border-border rounded shadow-lg z-50"
          >
            <Link
              href="/psb"
              className="block px-6 py-4 text-primary text-xl font-semibold hover:bg-hover transition-colors"
              onClick={() => setOpen(false)}
            >
              Proteção Social Básica
            </Link>
            <Link
              href="/pse"
              className="block px-6 py-4 text-primary text-xl font-semibold hover:bg-hover transition-colors"
              onClick={() => setOpen(false)}
            >
              Proteção Social Especial
            </Link>
            <Link
              href="/cad"
              className="block px-6 py-4 text-primary text-xl font-semibold hover:bg-hover transition-colors"
              onClick={() => setOpen(false)}
            >
              Cadastro Único
            </Link>
          </div>
        )}
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Sun className="h-[1.2rem] w-[1.2rem] text-primary" />
          <Switch
            checked={theme === "dark"}
            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
            aria-label="Toggle theme"
          />
          <Moon className="h-[1.2rem] w-[1.2rem] text-primary" />
        </div>
      </div>
    </header>
  )
}