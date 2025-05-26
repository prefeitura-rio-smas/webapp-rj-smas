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
          onClick={() => openExternalLink("https://survey123.arcgis.com/share/63405d2901e146fc9a59a4936686b6be?portalUrl=https://siurb.rio/portal")}
        >
          <div className="bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center">
            <ClipboardCheck className="h-24 w-24 text-sky-400" />
          </div>
          <h3 className="text-white font-medium text-xl">Declaração Recebimento Cartão Protege SUAS</h3>
        </div>

        <div
          className="bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105"
          onClick={() => openExternalLink("https://siurb.rio/portal/apps/experiencebuilder/experience/?id=d10c7f1251e143b58a4c5de1d1813369&page=Dados-Gerais---Protege-SUAS")}
        >
          <div className="bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center">
            <Monitor className="h-24 w-24 text-sky-400" />
          </div>
          <h3 className="text-white font-medium text-xl">Painel de Monitoramento</h3>
        </div>

        <div
          className="bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105"
          onClick={() => openExternalLink("https://siurb.rio/portal/apps/experiencebuilder/experience/?id=d10c7f1251e143b58a4c5de1d1813369&page=Edição---Protege-SUAS")}
        >
          <div className="bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center">
            <Edit className="h-24 w-24 text-sky-400" />
          </div>
          <h3 className="text-white font-medium text-xl">Edição de Dados GRR</h3>
        </div>

        <div
          className="bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105"
          onClick={() => openExternalLink("https://siurb.rio/portal/apps/experiencebuilder/experience/?id=d10c7f1251e143b58a4c5de1d1813369&page=Download---Protege-SUAS")}
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
          onClick={() => openExternalLink("https://doweb.rio.rj.gov.br/apifront/portal/edicoes/imprimir_materia/829045/5333")}
        >
          <div className="bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center">
            <Gavel className="h-24 w-24 text-sky-400" />
          </div>
          <h3 className="text-white font-medium text-xl">Decreto</h3>
          <p className="text-gray-300 text-base mt-2">Nº 50.743 DE 05 DE MAIO 2022</p>
        </div>

        <div
          className="bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105"
          onClick={() => openExternalLink("https://doweb.rio.rj.gov.br/portal/visualizacoes/pdf/5462#/p:38/e:5462?find=RESOLUÇÃO%20SMAS")}
        >
          <div className="bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center">
            <Scale className="h-24 w-24 text-sky-400" />
          </div>
          <h3 className="text-white font-medium text-xl">Resolução</h3>
          <p className="text-gray-300 text-base mt-2">Nº 134 DE 21 DE SET. 2022</p>
        </div>

        <div
          className="bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105"
          onClick={() => openExternalLink("https://docs.google.com/document/d/1zxdd58AESnsakk46Ji7KSEEBLrdQ8mxG/edit?tab=t.0")}
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
