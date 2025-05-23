"use client"

import { ArrowLeft, ClipboardCheck, Monitor, Edit, CloudDownload, Gavel, Scale, GitBranch } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PageProps {
  onBack: () => void
}

export function CartaoProtegePage({ onBack }: PageProps) {
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
            <span className="font-medium">Cartão Protege SUAS</span>
          </div>
        </div>
        <h1 className="text-5xl font-bold text-white text-right opacity-50">PROTEÇÃO SOCIAL BÁSICA</h1>
      </div>

      <div className="flex items-center justify-center">
        <div className="h-px bg-gray-600 flex-grow" />
        <h2 className="text-2xl font-bold text-white text-center mx-6">Ferramentas</h2>
        <div className="h-px bg-gray-600 flex-grow" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div
          className="bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105"
          onClick={() => openExternalLink("https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social")}
        >
          <div className="bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center">
            <ClipboardCheck className="h-24 w-24 text-sky-400" />
          </div>
          <h3 className="text-white font-medium text-xl">Declaração Recebimento Cartão Protege SUAS</h3>
        </div>

        <div
          className="bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105"
          onClick={() => openExternalLink("https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social")}
        >
          <div className="bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center">
            <Monitor className="h-24 w-24 text-sky-400" />
          </div>
          <h3 className="text-white font-medium text-xl">Painel de Monitoramento</h3>
        </div>

        <div
          className="bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105"
          onClick={() => openExternalLink("https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social")}
        >
          <div className="bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center">
            <Edit className="h-24 w-24 text-sky-400" />
          </div>
          <h3 className="text-white font-medium text-xl">Edição de Dados GRR</h3>
        </div>

        <div
          className="bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105"
          onClick={() => openExternalLink("https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social")}
        >
          <div className="bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center">
            <CloudDownload className="h-24 w-24 text-sky-400" />
          </div>
          <h3 className="text-white font-medium text-xl">Consulta de Cartões e Download</h3>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="h-px bg-gray-600 flex-grow" />
        <h2 className="text-2xl font-bold text-white text-center mx-6">Documentação</h2>
        <div className="h-px bg-gray-600 flex-grow" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          className="bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105"
          onClick={() => openExternalLink("https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social")}
        >
          <div className="bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center">
            <Gavel className="h-24 w-24 text-sky-400" />
          </div>
          <h3 className="text-white font-medium text-xl">Decreto</h3>
          <p className="text-gray-300 text-base mt-2">Nº 50.743 DE 05 DE MAIO 2022</p>
        </div>

        <div
          className="bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105"
          onClick={() => openExternalLink("https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social")}
        >
          <div className="bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center">
            <Scale className="h-24 w-24 text-sky-400" />
          </div>
          <h3 className="text-white font-medium text-xl">Resolução</h3>
          <p className="text-gray-300 text-base mt-2">Nº 134 DE 21 DE SET. 2022</p>
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
      </div>
    </div>
  )
}
