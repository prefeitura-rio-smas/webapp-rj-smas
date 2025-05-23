"use client"

import { ArrowLeft, BookOpen, GitBranch, User, CloudLightning } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PageProps {
  onBack: () => void
}

export function DocumentacaoPage({ onBack }: PageProps) {
  // Function to handle external links
  const openExternalLink = (url: string) => {
    window.open(url, "_blank")
  }

  return (
    <div className="space-y-8">
      <div className="bg-[#1a3b6d] rounded-md p-8">
        <div className="flex items-center gap-3 text-white mb-6">
          <Button variant="ghost" size="icon" onClick={onBack} className="text-white p-0 h-auto">
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div className="flex items-center gap-2 text-lg">
            <span>Página inicial</span>
            <span>/</span>
            <span className="font-medium">Documentação</span>
          </div>
        </div>
        <h1 className="text-5xl font-bold text-white text-right opacity-50">PROTEÇÃO SOCIAL BÁSICA</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div
          className="bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105"
          onClick={() => openExternalLink("https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social")}
        >
          <div className="bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center">
            <BookOpen className="h-24 w-24 text-sky-400" />
          </div>
          <h3 className="text-white font-medium text-xl">Bibliografia Básica</h3>
        </div>

        <div
          className="bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105"
          onClick={() => openExternalLink("https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social")}
        >
          <div className="bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center">
            <GitBranch className="h-24 w-24 text-sky-400" />
          </div>
          <h3 className="text-white font-medium text-xl">Procedimento Operacional</h3>
        </div>

        <div
          className="bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105"
          onClick={() => openExternalLink("https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social")}
        >
          <div className="bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center">
            <User className="h-24 w-24 text-sky-400" />
          </div>
          <h3 className="text-white font-medium text-xl">Matriz de Responsabilidade</h3>
        </div>

        <div
          className="bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105"
          onClick={() => openExternalLink("https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social")}
        >
          <div className="bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center">
            <CloudLightning className="h-24 w-24 text-sky-400" />
          </div>
          <h3 className="text-white font-medium text-xl">Plano Verão</h3>
        </div>
      </div>
    </div>
  )
}
