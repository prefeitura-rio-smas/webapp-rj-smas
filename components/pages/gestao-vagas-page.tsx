"use client"

import { useState, useEffect, useRef } from "react"
import { ClipboardList, Users2, Home, CloudDownload, BookOpen, Download, FileText, BarChart, ArrowLeft } from "lucide-react"
import { AgeGroupSelector } from "@/components/age-group-selector"
import Link from "next/link"

export function GestaoVagasPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("Adultos")

  const cardRefs = {
    abordagem: useRef<HTMLDivElement>(null),
    unidades: useRef<HTMLDivElement>(null),
    botao1: useRef<HTMLDivElement>(null),
    botao2: useRef<HTMLDivElement>(null),
    botao3: useRef<HTMLDivElement>(null),
    botao4: useRef<HTMLDivElement>(null),
    botao5: useRef<HTMLDivElement>(null),
    botao6: useRef<HTMLDivElement>(null),
  }

  const isMobile = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches

  useEffect(() => {
    if (!hoveredCard) return
    function handleClick(e: MouseEvent | TouchEvent) {
      const ref = cardRefs[hoveredCard as keyof typeof cardRefs]
      if (ref?.current && !ref.current.contains(e.target as Node)) {
        setHoveredCard(null)
      }
    }
    document.addEventListener("mousedown", handleClick)
    document.addEventListener("touchstart", handleClick)
    return () => {
      document.removeEventListener("mousedown", handleClick)
      document.removeEventListener("touchstart", handleClick)
    }
  }, [hoveredCard])

  const openExternalLink = (url: string) => {
    window.open(url, "_blank")
  }

  const urls = {
    dadosGerais2025: "https://siurb.rio/portal/apps/dashboards/74c18901ba6642f9ab90324ba5a0da3c",
    dadosGerais2024: "",
    painelVagas: "https://siurb.rio/portal/apps/dashboards/1c2cfa2d92d54abf8d0c3878ee053930",
    painelUsuarios: "https://siurb.rio/portal/apps/dashboards/be8b0ae7fda64b59a76add7e1ba3f984#view=mobile",
    painelConfirmacao: "https://siurb.rio/portal/apps/dashboards/dbb3a0990b3c4b2e91d17c97855c36d8",
    monitoramento: "https://siurb.rio/portal/apps/dashboards/dac8bb78571e400cbefd21e87219d03e",
    downloadBase: "https://siurb.rio/portal/apps/webappviewer/index.html?id=feb32b24734e498e83c6d80a29e5fb13",
    instrucoes: "",
    instalacao: "https://drive.google.com/file/d/1NL0X0tb-mD3umiRV9HM3kGzhGZtcvcr4/view?usp=sharing",
  }

  const urlsCriancaAdolescente = {
    botao1A: "https://link1a.com",
    botao1B: "https://link1b.com",
    botao2A: "https://link2a.com",
    botao2B: "https://link2b.com",
    botao3A: "https://link3a.com",
    botao3B: "https://link3b.com",
    botao4A: "https://link4a.com",
    botao4B: "https://link4b.com",
    botao5A: "https://link5a.com",
    botao5B: "https://link5b.com",
    botao6A: "https://link6a.com",
    botao6B: "https://link6b.com",
  }

  const renderCard = (
    key: string,
    title: string,
    subtitle: string,
    icon: JSX.Element,
    buttons: { label: string; link: string }[]
  ) => (
    <div
      ref={cardRefs[key as keyof typeof cardRefs]}
      className="bg-surface rounded-md p-8 flex flex-col h-48 relative overflow-hidden border border-border shadow-sm"
      onMouseEnter={!isMobile ? () => setHoveredCard(key) : undefined}
      onMouseLeave={!isMobile ? () => setHoveredCard(null) : undefined}
      onTouchStart={
        isMobile
          ? (e) => {
              e.stopPropagation()
              setHoveredCard(hoveredCard === key ? null : key)
            }
          : undefined
      }
    >
      <div className="flex flex-1 items-center gap-6">
        <div className="bg-surface-alt p-6 rounded-md flex items-center justify-center border border-border h-24 w-24">
          {icon}
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-primary font-medium text-2xl mb-2">{title}</h3>
          <p className="text-foreground text-base">{subtitle}</p>
        </div>
      </div>
      <div
        className={`absolute inset-0 bg-surface flex flex-col items-center justify-center gap-4 p-4 transition-opacity duration-300 ${
          hoveredCard === key ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {buttons.map((b) => (
          <button
            key={b.label}
            className="w-full bg-surface text-primary border border-border hover:bg-hover hover:border-primary px-4 py-2 rounded-md font-medium transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              openExternalLink(b.link)
            }}
            onTouchStart={(e) => e.stopPropagation()}
          >
            {b.label}
          </button>
        ))}
      </div>
    </div>
  )

  return (
      <div className="space-y-8">
      <div className="bg-surface rounded-md p-8 border border-border shadow-sm">
        <div className="flex items-center gap-3 text-primary mb-6">
          <Link
            href="/homepage"
            className="flex items-center gap-2 text-primary text-lg group p-0 h-auto"
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
              <ArrowLeft className="h-7 w-7" />
            <span className="group-hover:underline transition">Página inicial</span>
          </Link>
          <span>/</span>
          <span className="text-2xl font-bold text-primary flex items-center h-7">Gestão de Vagas</span>
        </div>
        <h1 className="text-5xl font-bold text-primary text-right opacity-50">
          PROTEÇÃO SOCIAL ESPECIAL
        </h1>
      </div>
      {/* Linha de Dados Gerais */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { label: "Dados Gerais Acolhimento 2025", url: urls.dadosGerais2025 },
          { label: "Dados Gerais Acolhimento 2024", url: urls.dadosGerais2024 },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-surface rounded-md p-8 flex flex-1 items-center gap-6 h-48 cursor-pointer transition-transform hover:scale-105 border border-border shadow-sm"
            onClick={() => openExternalLink(item.url)}
          >
            <div className="bg-surface-alt p-6 rounded-md flex items-center justify-center border border-border h-24 w-24">
              <BarChart className="h-24 w-24 text-secondary" />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-primary font-medium text-2xl">{item.label}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Dropdown */}
      <div className="flex justify-center">
        <AgeGroupSelector currentGroup={selectedAgeGroup} onGroupChange={setSelectedAgeGroup} />
      </div>

      {/* Cards Condicionais */}
      {selectedAgeGroup === "Adultos" ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {renderCard(
            "abordagem",
            "Abordagem Social",
            "Painéis de Vagas e Usuários",
            <Users2 className="h-24 w-24 text-secondary" />,
            [
              { label: "Painel de Vagas", link: urls.painelVagas },
              { label: "Painel Geral de Usuários", link: urls.painelUsuarios },
            ]
          )}
          {renderCard(
            "unidades",
            "Unidades de Acolhimento",
            "Painéis de Confirmação e Monitoramento",
            <Home className="h-24 w-24 text-secondary" />,
            [
              { label: "Painel de Confirmação", link: urls.painelConfirmacao },
              { label: "Monitoramento de Ocupação", link: urls.monitoramento },
            ]
          )}
          {/* Alteração do botão: direto e clicável */}
          <div
            className="bg-surface rounded-md p-8 flex flex-1 items-center gap-6 h-48 cursor-pointer transition-transform hover:scale-105 border border-border shadow-sm"
            onClick={() => openExternalLink(urls.painelVagas)}
          >
            <div className="bg-surface-alt p-6 rounded-md flex items-center justify-center border border-border h-24 w-24">
              <ClipboardList className="h-24 w-24 text-secondary" />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-primary font-medium text-2xl">Painel Geral de Vagas</h3>
              <p className="text-foreground text-base">Visualização Completa</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {renderCard(
            "botao1",
            "Relação de Usuários",
            "Vagas nas U.A",
            <FileText className="h-24 w-24 text-secondary" />,
            [
              { label: "Relação de Usuários", link: urlsCriancaAdolescente.botao1A },
              { label: "Vagas nas U.A", link: urlsCriancaAdolescente.botao1B },
            ]
          )}
          {renderCard(
            "botao2",
            "Taxa de Ocupação nas U.A",
            "Acolhimento Atual",
            <FileText className="h-24 w-24 text-secondary" />,
            [
              { label: "Taxa de Ocupação", link: urlsCriancaAdolescente.botao2A },
              { label: "Acolhimento Atual", link: urlsCriancaAdolescente.botao2B },
            ]
          )}
          {renderCard(
            "botao3",
            "Perfil Geral",
            "Naturalidade e Moradia",
            <FileText className="h-24 w-24 text-secondary" />,
            [
              { label: "Perfil Geral", link: urlsCriancaAdolescente.botao3A },
              { label: "Naturalidade e Moradia", link: urlsCriancaAdolescente.botao3B },
            ]
          )}
          {renderCard(
            "botao4",
            "Documentos e Escolaridade",
            "Saúde",
            <FileText className="h-24 w-24 text-secondary" />,
            [
              { label: "Documentos e Escolaridade", link: urlsCriancaAdolescente.botao4A },
              { label: "Saúde", link: urlsCriancaAdolescente.botao4B },
            ]
          )}
          {renderCard(
            "botao5",
            "Renda",
            "Procedimentos Mensais",
            <FileText className="h-24 w-24 text-secondary" />,
            [
              { label: "Renda", link: urlsCriancaAdolescente.botao5A },
              { label: "Procedimentos Mensais", link: urlsCriancaAdolescente.botao5B },
            ]
          )}
          {renderCard(
            "botao6",
            "Resultados e Avanços",
            "Entradas e Saídas",
            <FileText className="h-24 w-24 text-secondary" />,
            [
              { label: "Resultados e Avanços", link: urlsCriancaAdolescente.botao6A },
              { label: "Entradas e Saídas", link: urlsCriancaAdolescente.botao6B },
            ]
          )}
        </div>
      )}

      {/* Linha de Documentação */}
      <div className="flex items-center justify-center">
        <div className="h-px bg-border flex-grow" />
        <h2 className="text-2xl font-bold text-primary text-center mx-6">
          Ferramentas / Documentação
        </h2>
        <div className="h-px bg-border flex-grow" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            label: "Download da Base de Dados",
            icon: <CloudDownload className="h-24 w-24 text-secondary" />,
            link: urls.downloadBase,
          },
          {
            label: "Instruções de Uso",
            icon: <BookOpen className="h-24 w-24 text-secondary" />,
            link: urls.instrucoes,
          },
          {
            label: "Instalação do Aplicativo Survey 123",
            icon: <Download className="h-24 w-24 text-secondary" />,
            link: urls.instalacao,
          },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-surface rounded-md p-8 flex flex-1 items-center gap-6 h-48 cursor-pointer transition-transform hover:scale-105 border border-border shadow-sm"
            onClick={() => openExternalLink(item.link)}
          >
            <div className="bg-surface-alt p-6 rounded-md flex items-center justify-center border border-border h-24 w-24">
              {item.icon}
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-primary font-medium text-2xl">{item.label}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
