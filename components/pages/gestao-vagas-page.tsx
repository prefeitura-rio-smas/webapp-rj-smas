"use client"

import { useState } from "react"
import { ArrowLeft, ClipboardList, Users2, Home, CloudDownload, BookOpen, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { YearSelector } from "@/components/year-selector"
import { AgeGroupSelector } from "@/components/age-group-selector"

interface PageProps {
  onBack: () => void
}

export function GestaoVagasPage({ onBack }: PageProps) {
  // Add state for hover tracking
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [selectedYear, setSelectedYear] = useState("2025")
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("Adultos")

  // Function to handle external links
  const openExternalLink = (url: string) => {
    window.open(url, "_blank")
  }

  // Define URLs based on selected year and age group
  const getUrls = () => {
    const baseYear = selectedYear === "2024" ? "2024" : ""
    const ageGroupPath = selectedAgeGroup === "Crianças e Adolescentes" ? "/criancas-adolescentes" : "/adultos"

    if (selectedYear === "2024") {
      return {
        dadosGerais: `https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/2024${ageGroupPath}`,
        painelGeral: `https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/2024${ageGroupPath}`,
        painelVagas: `https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/2024${ageGroupPath}`,
        painelUsuarios: `https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/2024${ageGroupPath}`,
        painelConfirmacao: `https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/2024${ageGroupPath}`,
        monitoramento: `https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/2024${ageGroupPath}`,
        downloadBase: `https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/2024${ageGroupPath}`,
        instrucoes: `https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/2024${ageGroupPath}`,
        instalacao: `https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/2024${ageGroupPath}`,
      }
    } else {
      return {
        dadosGerais: `https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social${ageGroupPath}`,
        painelGeral: `https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social${ageGroupPath}`,
        painelVagas: `https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social${ageGroupPath}`,
        painelUsuarios: `https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social${ageGroupPath}`,
        painelConfirmacao: `https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social${ageGroupPath}`,
        monitoramento: `https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social${ageGroupPath}`,
        downloadBase: `https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/gestao-do-cadastro-unico-1${ageGroupPath}`,
        instrucoes: `https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social${ageGroupPath}`,
        instalacao: `https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social${ageGroupPath}`,
      }
    }
  }

  const urls = getUrls()

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-[#1a3b6d] rounded-md p-8 border border-[#e5e7eb] dark:border-[#1a3b6d] shadow-sm">
        <div className="flex items-center gap-3 text-[#193257] dark:text-white mb-6">
          <Button variant="ghost" size="icon" onClick={onBack} className="text-[#193257] dark:text-white p-0 h-auto">
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div className="flex items-center gap-2 text-lg">
            <span>Página inicial</span>
            <span>/</span>
            <span className="font-medium">Gestão de Vagas</span>
          </div>
        </div>
        <h1 className="text-5xl font-bold text-[#193257] dark:text-white text-right opacity-50">
          PROTEÇÃO SOCIAL ESPECIAL
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center">
        <YearSelector currentYear={selectedYear} onYearChange={setSelectedYear} />
        <AgeGroupSelector currentGroup={selectedAgeGroup} onGroupChange={setSelectedAgeGroup} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Gestão 2025 Card with Hover */}
        <div
          className="bg-white dark:bg-[#1a3b6d] rounded-md p-8 flex items-start gap-6 h-48 relative overflow-hidden border border-[#e5e7eb] dark:border-[#1a3b6d] shadow-sm"
          onMouseEnter={() => setHoveredCard("gestao")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="bg-white dark:bg-[#0a2756] p-6 rounded-md flex items-center justify-center border border-[#e5e7eb] dark:border-[#1a3b6d]">
            <ClipboardList className="h-24 w-24 text-[#00c2f7] dark:text-sky-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-[#193257] dark:text-white font-medium text-2xl mb-2">Gestão {selectedYear}</h3>
            <p className="text-[#4b5563] dark:text-gray-300 text-base">
              Dados Gerais Acolhimento {selectedYear} - {selectedAgeGroup}
            </p>
          </div>

          {/* Hover overlay */}
          <div
            className={`absolute inset-0 bg-white dark:bg-[#1a3b6d] flex flex-col items-center justify-center gap-4 p-4 transition-opacity duration-300 ${
              hoveredCard === "gestao" ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <button
              className="w-full bg-white dark:bg-[#1a3b6d] text-[#0d2953] dark:text-white border border-[#c1cee3] dark:border-[#38bdf8] hover:bg-[#f0f4fa] dark:hover:bg-[#0a2756] hover:border-[#00c2f7] dark:hover:border-[#38bdf8] px-4 py-2 rounded-md font-medium transition-colors"
              onClick={() => openExternalLink(urls.dadosGerais)}
            >
              Dados Gerais Acolhimento {selectedYear}
            </button>
            <button
              className="w-full bg-white dark:bg-[#1a3b6d] text-[#0d2953] dark:text-white border border-[#c1cee3] dark:border-[#38bdf8] hover:bg-[#f0f4fa] dark:hover:bg-[#0a2756] hover:border-[#00c2f7] dark:hover:border-[#38bdf8] px-4 py-2 rounded-md font-medium transition-colors"
              onClick={() => openExternalLink(urls.painelGeral)}
            >
              Painel Geral de Vagas
            </button>
          </div>
        </div>

        {/* Abordagem Social Card with Hover */}
        <div
          className="bg-white dark:bg-[#1a3b6d] rounded-md p-8 flex items-start gap-6 h-48 relative overflow-hidden border border-[#e5e7eb] dark:border-[#1a3b6d] shadow-sm"
          onMouseEnter={() => setHoveredCard("abordagem")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="bg-white dark:bg-[#0a2756] p-6 rounded-md flex items-center justify-center border border-[#e5e7eb] dark:border-[#1a3b6d]">
            <Users2 className="h-24 w-24 text-[#00c2f7] dark:text-sky-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-[#193257] dark:text-white font-medium text-2xl mb-2">Abordagem Social</h3>
            <p className="text-[#4b5563] dark:text-gray-300 text-base">Painel de Vagas - {selectedAgeGroup}</p>
          </div>

          {/* Hover overlay */}
          <div
            className={`absolute inset-0 bg-white dark:bg-[#1a3b6d] flex flex-col items-center justify-center gap-4 p-4 transition-opacity duration-300 ${
              hoveredCard === "abordagem" ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <button
              className="w-full bg-white dark:bg-[#1a3b6d] text-[#0d2953] dark:text-white border border-[#c1cee3] dark:border-[#38bdf8] hover:bg-[#f0f4fa] dark:hover:bg-[#0a2756] hover:border-[#00c2f7] dark:hover:border-[#38bdf8] px-4 py-2 rounded-md font-medium transition-colors"
              onClick={() => openExternalLink(urls.painelVagas)}
            >
              Painel de Vagas
            </button>
            <button
              className="w-full bg-white dark:bg-[#1a3b6d] text-[#0d2953] dark:text-white border border-[#c1cee3] dark:border-[#38bdf8] hover:bg-[#f0f4fa] dark:hover:bg-[#0a2756] hover:border-[#00c2f7] dark:hover:border-[#38bdf8] px-4 py-2 rounded-md font-medium transition-colors"
              onClick={() => openExternalLink(urls.painelUsuarios)}
            >
              Painel Geral de Usuários
            </button>
          </div>
        </div>

        {/* Unidades de Acolhimento Card with Hover */}
        <div
          className="bg-white dark:bg-[#1a3b6d] rounded-md p-8 flex items-start gap-6 h-48 relative overflow-hidden border border-[#e5e7eb] dark:border-[#1a3b6d] shadow-sm"
          onMouseEnter={() => setHoveredCard("unidades")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="bg-white dark:bg-[#0a2756] p-6 rounded-md flex items-center justify-center border border-[#e5e7eb] dark:border-[#1a3b6d]">
            <Home className="h-24 w-24 text-[#00c2f7] dark:text-sky-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-[#193257] dark:text-white font-medium text-2xl mb-2">Unidades de Acolhimento</h3>
            <p className="text-[#4b5563] dark:text-gray-300 text-base">Monitoramento - {selectedAgeGroup}</p>
          </div>

          {/* Hover overlay */}
          <div
            className={`absolute inset-0 bg-white dark:bg-[#1a3b6d] flex flex-col items-center justify-center gap-4 p-4 transition-opacity duration-300 ${
              hoveredCard === "unidades" ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <button
              className="w-full bg-white dark:bg-[#1a3b6d] text-[#0d2953] dark:text-white border border-[#c1cee3] dark:border-[#38bdf8] hover:bg-[#f0f4fa] dark:hover:bg-[#0a2756] hover:border-[#00c2f7] dark:hover:border-[#38bdf8] px-4 py-2 rounded-md font-medium transition-colors"
              onClick={() => openExternalLink(urls.painelConfirmacao)}
            >
              Painel de Confirmação
            </button>
            <button
              className="w-full bg-white dark:bg-[#1a3b6d] text-[#0d2953] dark:text-white border border-[#c1cee3] dark:border-[#38bdf8] hover:bg-[#f0f4fa] dark:hover:bg-[#0a2756] hover:border-[#00c2f7] dark:hover:border-[#38bdf8] px-4 py-2 rounded-md font-medium transition-colors"
              onClick={() => openExternalLink(urls.monitoramento)}
            >
              Monitoramento de Ocupação e Desligamento
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="h-px bg-[#e5e7eb] dark:bg-gray-600 flex-grow" />
        <h2 className="text-2xl font-bold text-[#193257] dark:text-white text-center mx-6">
          Ferramentas / Documentação
        </h2>
        <div className="h-px bg-[#e5e7eb] dark:bg-gray-600 flex-grow" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          className="bg-white dark:bg-[#1a3b6d] rounded-md p-8 flex items-start gap-6 h-48 cursor-pointer border border-[#e5e7eb] dark:border-[#1a3b6d] shadow-sm"
          onClick={() => openExternalLink(urls.downloadBase)}
        >
          <div className="bg-white dark:bg-[#0a2756] p-6 rounded-md flex items-center justify-center border border-[#e5e7eb] dark:border-[#1a3b6d]">
            <CloudDownload className="h-24 w-24 text-[#00c2f7] dark:text-sky-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-[#193257] dark:text-white font-medium text-2xl">Download da Base de Dados</h3>
          </div>
        </div>

        <div
          className="bg-white dark:bg-[#1a3b6d] rounded-md p-8 flex items-start gap-6 h-48 cursor-pointer border border-[#e5e7eb] dark:border-[#1a3b6d] shadow-sm"
          onClick={() => openExternalLink(urls.instrucoes)}
        >
          <div className="bg-white dark:bg-[#0a2756] p-6 rounded-md flex items-center justify-center border border-[#e5e7eb] dark:border-[#1a3b6d]">
            <BookOpen className="h-24 w-24 text-[#00c2f7] dark:text-sky-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-[#193257] dark:text-white font-medium text-2xl">Instruções de Uso</h3>
          </div>
        </div>

        <div
          className="bg-white dark:bg-[#1a3b6d] rounded-md p-8 flex items-start gap-6 h-48 cursor-pointer border border-[#e5e7eb] dark:border-[#1a3b6d] shadow-sm"
          onClick={() => openExternalLink(urls.instalacao)}
        >
          <div className="bg-white dark:bg-[#0a2756] p-6 rounded-md flex items-center justify-center border border-[#e5e7eb] dark:border-[#1a3b6d]">
            <Download className="h-24 w-24 text-[#00c2f7] dark:text-sky-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-[#193257] dark:text-white font-medium text-2xl">Instalação do Aplicativo Survey 123</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
