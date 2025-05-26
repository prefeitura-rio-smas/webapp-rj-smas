"use client"

import { Settings, Sun, Moon, MenuIcon, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "@/components/theme-provider"

interface HeaderProps {
  sidebarVisible: boolean
  setSidebarVisible: (visible: boolean) => void
  setCurrentPage: (page: string | null) => void
}

export function Header({ sidebarVisible, setSidebarVisible, setCurrentPage }: HeaderProps) {
  const { theme, setTheme } = useTheme()

  return (
    <header className="bg-white dark:bg-[#0a2756] border-b border-[#e5e7eb] dark:border-[#1a3b6d] p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <button
          className="inline-flex items-center justify-center h-10 w-10 rounded-md text-[#0d2953] dark:text-white bg-white dark:bg-[#0a2756] hover:bg-[#e0e7f2] dark:hover:bg-[#1a3b6d] transition-colors"
          onClick={() => setSidebarVisible(!sidebarVisible)}
          aria-label="Toggle sidebar"
        >
          {sidebarVisible ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
        <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage(null)}>
          <img src="/logo-prefeitura.png" alt="Prefeitura Rio Logo" className="h-10 w-auto" />
        </div>
      </div>

      <h1 className="text-[#193257] dark:text-white text-xl font-semibold hidden md:block">
        SISTEMA INTEGRADO SMAS-RIO
      </h1>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Sun className="h-[1.2rem] w-[1.2rem] text-[#193257] dark:text-white" />
          <Switch
            checked={theme === "dark"}
            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
            aria-label="Toggle theme"
          />
          <Moon className="h-[1.2rem] w-[1.2rem] text-[#193257] dark:text-white" />
        </div>
        <Button variant="ghost" size="icon" className="text-[#193257] dark:text-white">
          <Settings className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
}
