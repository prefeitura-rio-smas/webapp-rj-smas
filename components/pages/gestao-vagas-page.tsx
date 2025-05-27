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
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [selectedYear, setSelectedYear] = useState("2025")
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("Adultos")

  const openExternalLink = (url: string) => {
    window.open(url, "_blank")
  }

  const getUrls = () => {
    let ageGroupPath = ""
    let dadosGerais = ""
    let painelGeral = ""
    let painelVagas = ""
    let painelUsuarios = ""
    let painelConfirmacao = ""
    let monitoramento = ""

    switch (`${selectedYear}+${selectedAgeGroup}`) {
      case "2024+Crianças e Adolescentes":
        ageGroupPath = "/criancas-adolescentes"
        dadosGerais = ""
        painelGeral = ""
        painelVagas = ""
        painelUsuarios = ""
        painelConfirmacao = ""
        monitoramento = ""
        break

      case "2024+Adultos":
        ageGroupPath = "/adultos"
        dadosGerais = ""
        painelGeral = ""
        painelVagas = ""
        painelUsuarios = ""
        painelConfirmacao = ""
        monitoramento = ""
        break

      case "2025+Crianças e Adolescentes":
        ageGroupPath = "/criancas-adolescentes"
        dadosGerais = ""
        painelGeral = ""
        painelVagas = ""
        painelUsuarios = ""
        painelConfirmacao = ""
        monitoramento = ""
        break

      case "2025+Adultos":
        ageGroupPath = "/adultos"
        dadosGerais = "https://siurb.rio/portal/apps/dashboards/74c18901ba6642f9ab90324ba5a0da3c"
        painelGeral = "https://siurb.rio/portal/apps/dashboards/1c2cfa2d92d54abf8d0c3878ee053930"
        painelVagas = "https://siurb.rio/portal/apps/dashboards/6a156eb991f04e559d0a214c27a39e87"
        painelUsuarios = "https://siurb.rio/portal/apps/dashboards/be8b0ae7fda64b59a76add7e1ba3f984#view=mobile"
        painelConfirmacao = "https://siurb.rio/portal/apps/dashboards/dbb3a0990b3c4b2e91d17c97855c36d8"
        monitoramento = "https://siurb.rio/portal/apps/dashboards/dac8bb78571e400cbefd21e87219d03e"
        break

      default:
        ageGroupPath = "/default"
        dadosGerais = ""
        painelGeral = ""
        painelVagas = ""
        painelUsuarios = ""
        painelConfirmacao = ""
        monitoramento = ""
        break
    }

    return {
      dadosGerais,
      painelGeral,
      painelVagas,
      painelUsuarios,
      painelConfirmacao,
      monitoramento,
      downloadBase: "https://siurb.rio/portal/apps/webappviewer/index.html?id=feb32b24734e498e83c6d80a29e5fb13",
      instrucoes: "",
      instalacao: "https://drive.google.com/file/d/1NL0X0tb-mD3umiRV9HM3kGzhGZtcvcr4/view?usp=sharing",
    }
  }

  const urls = getUrls()

  return (
    <div className="space-y-8">
      <div className="bg-surface rounded-md p-8 border border-border shadow-sm">
        <div className="flex items-center gap-3 text-primary mb-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-primary text-lg group p-0 h-auto"
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            <ArrowLeft className="h-7 w-7" />
            <span className="group-hover:underline transition">Página inicial</span>
          </button>
          <span>/</span>
          <span className="text-2xl font-bold text-primary flex items-center h-7">Gestão de Vagas</span>
        </div>
        <h1 className="text-5xl font-bold text-primary text-right opacity-50">
          PROTEÇÃO SOCIAL ESPECIAL
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center">
        <YearSelector currentYear={selectedYear} onYearChange={setSelectedYear} />
        <AgeGroupSelector currentGroup={selectedAgeGroup} onGroupChange={setSelectedAgeGroup} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Gestão 2025 Card */}
        <div
          className="bg-surface rounded-md p-8 flex flex-col h-48 relative overflow-hidden border border-border shadow-sm"
          onMouseEnter={() => setHoveredCard("gestao")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="flex flex-1 items-center gap-6">
            <div className="bg-surface-alt p-6 rounded-md flex items-center justify-center border border-border h-24 w-24 min-w-[6rem] min-h-[6rem]">
              <ClipboardList className="h-24 w-24 text-secondary" />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-primary font-medium text-2xl mb-2">Gestão {selectedYear}</h3>
              <p className="text-foreground text-base">
                Dados Gerais Acolhimento {selectedYear} - {selectedAgeGroup}
              </p>
            </div>
          </div>
          {/* Hover overlay */}
          <div
            className={`absolute inset-0 bg-surface flex flex-col items-center justify-center gap-4 p-4 transition-opacity duration-300 ${
              hoveredCard === "gestao" ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <button
              className="w-full bg-surface text-primary border border-border hover:bg-hover hover:border-primary px-4 py-2 rounded-md font-medium transition-colors"
              onClick={() => openExternalLink(urls.dadosGerais)}
            >
              Dados Gerais Acolhimento {selectedYear}
            </button>
            <button
              className="w-full bg-surface text-primary border border-border hover:bg-hover hover:border-primary px-4 py-2 rounded-md font-medium transition-colors"
              onClick={() => openExternalLink(urls.painelGeral)}
            >
              Painel Geral de Vagas
            </button>
          </div>
        </div>

        {/* Abordagem Social Card */}
        <div
          className="bg-surface rounded-md p-8 flex flex-col h-48 relative overflow-hidden border border-border shadow-sm"
          onMouseEnter={() => setHoveredCard("abordagem")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="flex flex-1 items-center gap-6">
            <div className="bg-surface-alt p-6 rounded-md flex items-center justify-center border border-border h-24 w-24 min-w-[6rem] min-h-[6rem]">
              <Users2 className="h-24 w-24 text-secondary" />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-primary font-medium text-2xl mb-2">Abordagem Social</h3>
              <p className="text-foreground text-base">Painel de Vagas - {selectedAgeGroup}</p>
            </div>
          </div>
          {/* Hover overlay */}
          <div
            className={`absolute inset-0 bg-surface flex flex-col items-center justify-center gap-4 p-4 transition-opacity duration-300 ${
              hoveredCard === "abordagem" ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <button
              className="w-full bg-surface text-primary border border-border hover:bg-hover hover:border-primary px-4 py-2 rounded-md font-medium transition-colors"
              onClick={() => openExternalLink(urls.painelVagas)}
            >
              Painel de Vagas
            </button>
            <button
              className="w-full bg-surface text-primary border border-border hover:bg-hover hover:border-primary px-4 py-2 rounded-md font-medium transition-colors"
              onClick={() => openExternalLink(urls.painelUsuarios)}
            >
              Painel Geral de Usuários
            </button>
          </div>
        </div>

        {/* Unidades de Acolhimento Card */}
        <div
          className="bg-surface rounded-md p-8 flex flex-col h-48 relative overflow-hidden border border-border shadow-sm"
          onMouseEnter={() => setHoveredCard("unidades")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="flex flex-1 items-center gap-6">
            <div className="bg-surface-alt p-6 rounded-md flex items-center justify-center border border-border h-24 w-24 min-w-[6rem] min-h-[6rem]">
              <Home className="h-24 w-24 text-secondary" />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-primary font-medium text-2xl mb-2">Unidades de Acolhimento</h3>
              <p className="text-foreground text-base">Monitoramento - {selectedAgeGroup}</p>
            </div>
          </div>
          {/* Hover overlay */}
          <div
            className={`absolute inset-0 bg-surface flex flex-col items-center justify-center gap-4 p-4 transition-opacity duration-300 ${
              hoveredCard === "unidades" ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <button
              className="w-full bg-surface text-primary border border-border hover:bg-hover hover:border-primary px-4 py-2 rounded-md font-medium transition-colors"
              onClick={() => openExternalLink(urls.painelConfirmacao)}
            >
              Painel de Confirmação
            </button>
            <button
              className="w-full bg-surface text-primary border border-border hover:bg-hover hover:border-primary px-4 py-2 rounded-md font-medium transition-colors"
              onClick={() => openExternalLink(urls.monitoramento)}
            >
              Monitoramento de Ocupação e Desligamento
            </button>
          </div>
        </div>
      </div>

      {/* Ferramentas / Documentação */}
      <div className="flex items-center justify-center">
        <div className="h-px bg-border flex-grow" />
        <h2 className="text-2xl font-bold text-primary text-center mx-6">
          Ferramentas / Documentação
        </h2>
        <div className="h-px bg-border flex-grow" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Download da Base de Dados */}
        <div
          className="bg-surface rounded-md p-8 flex flex-1 items-center gap-6 h-48 cursor-pointer border border-border shadow-sm"
          onClick={() => openExternalLink(urls.downloadBase)}
        >
          <div className="bg-surface-alt p-6 rounded-md flex items-center justify-center border border-border h-24 w-24 min-w-[6rem] min-h-[6rem]">
            <CloudDownload className="h-24 w-24 text-secondary" />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-primary font-medium text-2xl">Download da Base de Dados</h3>
          </div>
        </div>

        {/* Instruções de Uso */}
        <div
          className="bg-surface rounded-md p-8 flex flex-1 items-center gap-6 h-48 cursor-pointer border border-border shadow-sm"
          onClick={() => openExternalLink(urls.instrucoes)}
        >
          <div className="bg-surface-alt p-6 rounded-md flex items-center justify-center border border-border h-24 w-24 min-w-[6rem] min-h-[6rem]">
            <BookOpen className="h-24 w-24 text-secondary" />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-primary font-medium text-2xl">Instruções de Uso</h3>
          </div>
        </div>

        {/* Instalação do Aplicativo Survey 123 */}
        <div
          className="bg-surface rounded-md p-8 flex flex-1 items-center gap-6 h-48 cursor-pointer border border-border shadow-sm"
          onClick={() => openExternalLink(urls.instalacao)}
        >
          <div className="bg-surface-alt p-6 rounded-md flex items-center justify-center border border-border h-24 w-24 min-w-[6rem] min-h-[6rem]">
            <Download className="h-24 w-24 text-secondary" />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-primary font-medium text-2xl">Instalação do Aplicativo Survey 123</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
