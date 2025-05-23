"use client"

import { useState } from "react"
import { ArrowLeft, BarChart, BarChart2, FileText, CloudDownload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { YearSelector } from "@/features/common/components/year-selector"

interface PageProps {
  onBack: () => void
}

export function AbordagemSocialPage({ onBack }: PageProps) {
  const [selectedYear, setSelectedYear] = useState("2025")

  // Function to handle external links
  const openExternalLink = (url: string) => {
    window.open(url, "_blank")
  }

  // Define URLs based on selected year
  const getUrls = () => {
    if (selectedYear === "2024") {
      return {
        abordagemSocial: "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/2024",
        coordenadoria: "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/2024",
        creas: "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/2024",
        centroPop: "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/2024",
        preenchimento: "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/2024",
        painelGeral: "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/2024",
        documentacao: "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/2024",
        downloadBase: "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/2024",
      }
    } else {
      return {
        abordagemSocial: "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social",
        coordenadoria: "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social",
        creas: "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social",
        centroPop: "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social",
        preenchimento: "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social",
        painelGeral: "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social",
        documentacao: "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social",
        downloadBase: "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social",
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
            <span className="font-medium">Abordagem Social</span>
          </div>
        </div>
        <h1 className="text-5xl font-bold text-[#0d2953] dark:text-white text-right opacity-50">
          PROTEÇÃO SOCIAL ESPECIAL
        </h1>
      </div>

      <YearSelector currentYear={selectedYear} onYearChange={setSelectedYear} />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div
          className="bg-white dark:bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105 border border-[#c1cee3] dark:border-[#1a3b6d] shadow-sm"
          onClick={() => openExternalLink(urls.abordagemSocial)}
        >
          <div className="bg-white dark:bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center border border-[#c1cee3] dark:border-[#1a3b6d]">
            <BarChart className="h-24 w-24 text-[#00c2f7] dark:text-sky-400" />
          </div>
          <h3 className="text-[#0d2953] dark:text-white font-medium text-xl">Abordagem Social {selectedYear}</h3>
        </div>

        <div
          className="bg-white dark:bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105 border border-[#c1cee3] dark:border-[#1a3b6d] shadow-sm"
          onClick={() => openExternalLink(urls.coordenadoria)}
        >
          <div className="bg-white dark:bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center border border-[#c1cee3] dark:border-[#1a3b6d]">
            <BarChart className="h-24 w-24 text-[#00c2f7] dark:text-sky-400" />
          </div>
          <h3 className="text-[#0d2953] dark:text-white font-medium text-xl">Coordenadoria</h3>
        </div>

        <div
          className="bg-white dark:bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105 border border-[#c1cee3] dark:border-[#1a3b6d] shadow-sm"
          onClick={() => openExternalLink(urls.creas)}
        >
          <div className="bg-white dark:bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center border border-[#c1cee3] dark:border-[#1a3b6d]">
            <BarChart className="h-24 w-24 text-[#00c2f7] dark:text-sky-400" />
          </div>
          <h3 className="text-[#0d2953] dark:text-white font-medium text-xl">CREAS</h3>
        </div>

        <div
          className="bg-white dark:bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105 border border-[#c1cee3] dark:border-[#1a3b6d] shadow-sm"
          onClick={() => openExternalLink(urls.centroPop)}
        >
          <div className="bg-white dark:bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center border border-[#c1cee3] dark:border-[#1a3b6d]">
            <BarChart className="h-24 w-24 text-[#00c2f7] dark:text-sky-400" />
          </div>
          <h3 className="text-[#0d2953] dark:text-white font-medium text-xl">Centro Pop</h3>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="h-px bg-[#c1cee3] dark:bg-gray-600 flex-grow" />
        <h2 className="text-2xl font-bold text-[#0d2953] dark:text-white text-center mx-6">Ferramentas</h2>
        <div className="h-px bg-[#c1cee3] dark:bg-gray-600 flex-grow" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div
          className="bg-white dark:bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105 border border-[#c1cee3] dark:border-[#1a3b6d] shadow-sm"
          onClick={() => openExternalLink(urls.preenchimento)}
        >
          <div className="bg-white dark:bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center border border-[#c1cee3] dark:border-[#1a3b6d]">
            <BarChart2 className="h-24 w-24 text-[#00c2f7] dark:text-sky-400" />
          </div>
          <h3 className="text-[#0d2953] dark:text-white font-medium text-xl">
            Preenchimento Abordagem Social {selectedYear}
          </h3>
        </div>

        <div
          className="bg-white dark:bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105 border border-[#c1cee3] dark:border-[#1a3b6d] shadow-sm"
          onClick={() => openExternalLink(urls.painelGeral)}
        >
          <div className="bg-white dark:bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center border border-[#c1cee3] dark:border-[#1a3b6d]">
            <BarChart2 className="h-24 w-24 text-[#00c2f7] dark:text-sky-400" />
          </div>
          <h3 className="text-[#0d2953] dark:text-white font-medium text-xl">Painel Geral de Atendimentos</h3>
        </div>

        <div
          className="bg-white dark:bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105 border border-[#c1cee3] dark:border-[#1a3b6d] shadow-sm"
          onClick={() => openExternalLink(urls.documentacao)}
        >
          <div className="bg-white dark:bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center border border-[#c1cee3] dark:border-[#1a3b6d]">
            <FileText className="h-24 w-24 text-[#00c2f7] dark:text-sky-400" />
          </div>
          <h3 className="text-[#0d2953] dark:text-white font-medium text-xl">Documentação</h3>
        </div>

        <div
          className="bg-white dark:bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105 border border-[#c1cee3] dark:border-[#1a3b6d] shadow-sm"
          onClick={() => openExternalLink(urls.downloadBase)}
        >
          <div className="bg-white dark:bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center border border-[#c1cee3] dark:border-[#1a3b6d]">
            <CloudDownload className="h-24 w-24 text-[#00c2f7] dark:text-sky-400" />
          </div>
          <h3 className="text-[#0d2953] dark:text-white font-medium text-xl">Download da Base de Dados</h3>
        </div>
      </div>
    </div>
  )
}
