"use client"

import { useState } from "react"
import { ArrowLeft, ClipboardList, Users2, Home, CloudDownload, BookOpen, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { YearSelector } from "@/features/common/components/year-selector"

interface PageProps {
  onBack: () => void
}

export function GestaoVagasPage({ onBack }: PageProps) {
  // Add state for hover tracking
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [selectedYear, setSelectedYear] = useState("2025")

  // Function to handle external links
  const openExternalLink = (url: string) => {
    window.open(url, "_blank")
  }

  // Define URLs based on selected year
  const getUrls = () => {
    if (selectedYear === "2024") {
      return {
        dadosGerais: "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/2024",
        painelGeral: "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/2024",
        painelVagas: "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/2024",
        painelUsuarios: "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/2024",
        painelConfirmacao: "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/2024",
        monitoramento: "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/2024",
        downloadBase: "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/2024",
        instrucoes: "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/2024",
        instalacao: "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/2024",
      }
    } else {
      return {
        dadosGerais: "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social",
        painelGeral: "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social",
        painelVagas: "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social",
        painelUsuarios: "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social",
        painelConfirmacao: "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social",
        monitoramento: "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social",
        downloadBase:
          "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/gestao-do-cadastro-unico-1",
        instrucoes: "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social",
        instalacao: "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social",
      }
    }
  }

  const urls = getUrls()

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-[#1a3b6d] rounded-md p-8 border border-[#c1cee3] dark:border-[#1a3b6d] shadow-sm">
        <div className="flex items-center gap-3 text-[#0d2953] dark:text-white mb-6">
          <Button variant="ghost" size="icon" onClick={onBack} className="text-[#0d2953] dark:text-white p-0 h-auto">
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div className="flex items-center gap-2 text-lg">
            <span>Página inicial</span>
            <span>/</span>
            <span className="font-medium">Gestão de Vagas</span>
          </div>
        </div>
        <h1 className="text-5xl font-bold text-[#0d2953] dark:text-white text-right opacity-50">
          PROTEÇÃO SOCIAL ESPECIAL
        </h1>
      </div>

      <YearSelector currentYear={selectedYear} onYearChange={setSelectedYear} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Gestão 2025 Card with Hover */}
        <div
          className="bg-white dark:bg-[#1a3b6d] rounded-md p-8 flex items-start gap-6 h-48 relative overflow-hidden border border-[#c1cee3] dark:border-[#1a3b6d] shadow-sm"
          onMouseEnter={() => setHoveredCard("gestao")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="bg-white dark:bg-[#0a2756] p-6 rounded-md flex items-center justify-center border border-[#c1cee3] dark:border-[#1a3b6d]">
            <ClipboardList className="h-24 w-24 text-[#00c2f7] dark:text-sky-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-[#0d2953] dark:text-white font-medium text-2xl mb-2">Gestão {selectedYear}</h3>
            <p className="text-[#1f3b65] dark:text-gray-300 text-base">
              Dados Gerais Acolhimento {selectedYear} e Painel Geral de Vagas
            </p>
          </div>

          {/* Hover overlay */}
          <div
            className={`absolute inset-0 bg-white dark:bg-[#1a3b6d] flex flex-col items-center justify-center gap-4 p-4 transition-opacity duration-300 ${
              hoveredCard === "gestao" ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Button
              className="w-full bg-white hover:border-[#00c2f7] text-[#0d2953] dark:bg-[#0a2756] dark:hover:bg-sky-700 dark:text-white border border-[#c1cee3] dark:border-[#1a3b6d]"
              onClick={() => openExternalLink(urls.dadosGerais)}
            >
              Dados Gerais Acolhimento {selectedYear}
            </Button>
            <Button
              className="w-full bg-white hover:border-[#00c2f7] text-[#0d2953] dark:bg-[#0a2756] dark:hover:bg-sky-700 dark:text-white border border-[#c1cee3] dark:border-[#1a3b6d]"
              onClick={() => openExternalLink(urls.painelGeral)}
            >
              Painel Geral de Vagas
            </Button>
          </div>
        </div>

        {/* Abordagem Social Card with Hover */}
        <div
          className="bg-white dark:bg-[#1a3b6d] rounded-md p-8 flex items-start gap-6 h-48 relative overflow-hidden border border-[#c1cee3] dark:border-[#1a3b6d] shadow-sm"
          onMouseEnter={() => setHoveredCard("abordagem")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="bg-white dark:bg-[#0a2756] p-6 rounded-md flex items-center justify-center border border-[#c1cee3] dark:border-[#1a3b6d]">
            <Users2 className="h-24 w-24 text-[#00c2f7] dark:text-sky-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-[#0d2953] dark:text-white font-medium text-2xl mb-2">Abordagem Social</h3>
            <p className="text-[#1f3b65] dark:text-gray-300 text-base">Painel de Vagas e Painel Geral de Usuários</p>
          </div>

          {/* Hover overlay */}
          <div
            className={`absolute inset-0 bg-white dark:bg-[#1a3b6d] flex flex-col items-center justify-center gap-4 p-4 transition-opacity duration-300 ${
              hoveredCard === "abordagem" ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Button
              className="w-full bg-white hover:border-[#00c2f7] text-[#0d2953] dark:bg-[#0a2756] dark:hover:bg-sky-700 dark:text-white border border-[#c1cee3] dark:border-[#1a3b6d]"
              onClick={() => openExternalLink(urls.painelVagas)}
            >
              Painel de Vagas
            </Button>
            <Button
              className="w-full bg-white hover:border-[#00c2f7] text-[#0d2953] dark:bg-[#0a2756] dark:hover:bg-sky-700 dark:text-white border border-[#c1cee3] dark:border-[#1a3b6d]"
              onClick={() => openExternalLink(urls.painelUsuarios)}
            >
              Painel Geral de Usuários
            </Button>
          </div>
        </div>

        {/* Unidades de Acolhimento Card with Hover */}
        <div
          className="bg-white dark:bg-[#1a3b6d] rounded-md p-8 flex items-start gap-6 h-48 relative overflow-hidden border border-[#c1cee3] dark:border-[#1a3b6d] shadow-sm"
          onMouseEnter={() => setHoveredCard("unidades")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="bg-white dark:bg-[#0a2756] p-6 rounded-md flex items-center justify-center border border-[#c1cee3] dark:border-[#1a3b6d]">
            <Home className="h-24 w-24 text-[#00c2f7] dark:text-sky-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-[#0d2953] dark:text-white font-medium text-2xl mb-2">Unidades de Acolhimento</h3>
            <p className="text-[#1f3b65] dark:text-gray-300 text-base">
              Painel de Confirmação e Monitoramento de Ocupação e Desligamento
            </p>
          </div>

          {/* Hover overlay */}
          <div
            className={`absolute inset-0 bg-white dark:bg-[#1a3b6d] flex flex-col items-center justify-center gap-4 p-4 transition-opacity duration-300 ${
              hoveredCard === "unidades" ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Button
              className="w-full bg-white hover:border-[#00c2f7] text-[#0d2953] dark:bg-[#0a2756] dark:hover:bg-sky-700 dark:text-white border border-[#c1cee3] dark:border-[#1a3b6d]"
              onClick={() => openExternalLink(urls.painelConfirmacao)}
            >
              Painel de Confirmação
            </Button>
            <Button
              className="w-full bg-white hover:border-[#00c2f7] text-[#0d2953] dark:bg-[#0a2756] dark:hover:bg-sky-700 dark:text-white border border-[#c1cee3] dark:border-[#1a3b6d]"
              onClick={() => openExternalLink(urls.monitoramento)}
            >
              Monitoramento de Ocupação e Desligamento
            </Button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="h-px bg-[#c1cee3] dark:bg-gray-600 flex-grow" />
        <h2 className="text-2xl font-bold text-[#0d2953] dark:text-white text-center mx-6">
          Ferramentas / Documentação
        </h2>
        <div className="h-px bg-[#c1cee3] dark:bg-gray-600 flex-grow" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          className="bg-white dark:bg-[#1a3b6d] rounded-md p-8 flex items-start gap-6 h-48 cursor-pointer border border-[#c1cee3] dark:border-[#1a3b6d] shadow-sm"
          onClick={() => openExternalLink(urls.downloadBase)}
        >
          <div className="bg-white dark:bg-[#0a2756] p-6 rounded-md flex items-center justify-center border border-[#c1cee3] dark:border-[#1a3b6d]">
            <CloudDownload className="h-24 w-24 text-[#00c2f7] dark:text-sky-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-[#0d2953] dark:text-white font-medium text-2xl">Download da Base de Dados</h3>
          </div>
        </div>

        <div
          className="bg-white dark:bg-[#1a3b6d] rounded-md p-8 flex items-start gap-6 h-48 cursor-pointer border border-[#c1cee3] dark:border-[#1a3b6d] shadow-sm"
          onClick={() => openExternalLink(urls.instrucoes)}
        >
          <div className="bg-white dark:bg-[#0a2756] p-6 rounded-md flex items-center justify-center border border-[#c1cee3] dark:border-[#1a3b6d]">
            <BookOpen className="h-24 w-24 text-[#00c2f7] dark:text-sky-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-[#0d2953] dark:text-white font-medium text-2xl">Instruções de Uso</h3>
          </div>
        </div>

        <div
          className="bg-white dark:bg-[#1a3b6d] rounded-md p-8 flex items-start gap-6 h-48 cursor-pointer border border-[#c1cee3] dark:border-[#1a3b6d] shadow-sm"
          onClick={() => openExternalLink(urls.instalacao)}
        >
          <div className="bg-white dark:bg-[#0a2756] p-6 rounded-md flex items-center justify-center border border-[#c1cee3] dark:border-[#1a3b6d]">
            <Download className="h-24 w-24 text-[#00c2f7] dark:text-sky-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-[#0d2953] dark:text-white font-medium text-2xl">Instalação do Aplicativo Survey 123</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
