"use client"

import { ArrowLeft, Monitor, Map, ClipboardCheck, CloudDownload, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PageProps {
  onBack: () => void
}

export function EmergenciaPage({ onBack }: PageProps) {
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
            <span className="font-medium">Emergência Socioassistencial</span>
          </div>
        </div>
        <h1 className="text-5xl font-bold text-white text-right opacity-50">PROTEÇÃO SOCIAL BÁSICA</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div
          className="bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105"
          onClick={() => openExternalLink("")}
        >
          <div className="bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center">
            <Monitor className="h-24 w-24 text-sky-400" />
          </div>
          <h3 className="text-white font-medium text-xl">Painéis de Monitoramento</h3>
        </div>

        <div
          className="bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105"
          onClick={() => openExternalLink("")}
        >
          <div className="bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center">
            <Map className="h-24 w-24 text-sky-400" />
          </div>
          <h3 className="text-white font-medium text-xl">Mapa de Gestão Territorial</h3>
        </div>

        <div
          className="bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105"
          onClick={() => openExternalLink("")}
        >
          <div className="bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center">
            <ClipboardCheck className="h-24 w-24 text-sky-400" />
          </div>
          <h3 className="text-white font-medium text-xl">Ficha de Atendimento Emergência Socioassistencial</h3>
        </div>

        <div
          className="bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105"
          onClick={() => openExternalLink("")}
        >
          <div className="bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center">
            <CloudDownload className="h-24 w-24 text-sky-400" />
          </div>
          <h3 className="text-white font-medium text-xl">Consulta de Famílias e Download</h3>
        </div>
      </div>

      <div
        className="bg-[#1a3b6d] rounded-md p-8 flex items-start gap-6 md:w-1/3 cursor-pointer transition-transform hover:scale-105"
        onClick={() => openExternalLink("")}
      >
        <div className="bg-[#0a2756] p-6 rounded-md flex items-center justify-center">
          <Edit className="h-24 w-24 text-sky-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-white font-medium text-xl">Edição de Dados</h3>
        </div>
      </div>
    </div>
  )
}
