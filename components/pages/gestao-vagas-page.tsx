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
        dadosGerais: ``,
        painelGeral: ``,
        painelVagas: ``,
        painelUsuarios: ``,
        painelConfirmacao: ``,
        monitoramento: ``,
        downloadBase: ``,
        instrucoes: ``,
        instalacao: `https://drive.google.com/file/d/1NL0X0tb-mD3umiRV9HM3kGzhGZtcvcr4/view`,
      }
    } else {
      return {
        dadosGerais: `https://siurb.rio/portal/apps/dashboards/74c18901ba6642f9ab90324ba5a0da3c`,
        painelGeral: `https://siurb.rio/portal/apps/dashboards/1c2cfa2d92d54abf8d0c3878ee053930`,
        painelVagas: `https://siurb.rio/portal/apps/dashboards/6a156eb991f04e559d0a214c27a39e87`,
        painelUsuarios: `https://siurb.rio/portal/apps/dashboards/be8b0ae7fda64b59a76add7e1ba3f984#view=mobile`,
        painelConfirmacao: `https://siurb.rio/portal/apps/dashboards/dbb3a0990b3c4b2e91d17c97855c36d8`,
        monitoramento: `https://siurb.rio/portal/apps/dashboards/dac8bb78571e400cbefd21e87219d03e`,
        downloadBase: `https://siurb.rio/portal/apps/webappviewer/index.html?id=feb32b24734e498e83c6d80a29e5fb13`,
        instrucoes: ``,
        instalacao: `https://drive.google.com/file/d/1NL0X0tb-mD3umiRV9HM3kGzhGZtcvcr4/view`,
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
