"use client"

import { ArrowLeft, Monitor, Map, ClipboardCheck, CloudDownload, Edit } from "lucide-react"
import Link from "next/link"

export function EmergenciaPage() {
  const openExternalLink = (url: string) => {
    window.open(url, "_blank")
  }

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
          <span className="text-2xl font-bold text-primary flex items-center h-7">Emergência Socioassistencial</span>
        </div>
        <h1 className="text-5xl font-bold text-primary text-right opacity-50">
          PROTEÇÃO SOCIAL BÁSICA
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div
          className="bg-surface rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105 border border-border shadow-sm"
          onClick={() => openExternalLink("")}
        >
          <div className="bg-surface-alt p-6 rounded-md mb-6 flex items-center justify-center border border-border">
            <Monitor className="h-24 w-24 text-secondary" />
          </div>
          <h3 className="text-primary font-medium text-xl">Painéis de Monitoramento</h3>
        </div>

        <div
          className="bg-surface rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105 border border-border shadow-sm"
          onClick={() => openExternalLink("")}
        >
          <div className="bg-surface-alt p-6 rounded-md mb-6 flex items-center justify-center border border-border">
            <Map className="h-24 w-24 text-secondary" />
          </div>
          <h3 className="text-primary font-medium text-xl">Mapa de Gestão Territorial</h3>
        </div>

        <div
          className="bg-surface rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105 border border-border shadow-sm"
          onClick={() => openExternalLink("")}
        >
          <div className="bg-surface-alt p-6 rounded-md mb-2 flex items-center justify-center border border-border">
            <ClipboardCheck className="h-24 w-24 text-secondary" />
          </div>
          <h3 className="text-primary font-medium text-xl">Ficha de Atendimento Emergência Socioassistencial</h3>
        </div>

        <div
          className="bg-surface rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105 border border-border shadow-sm"
          onClick={() => openExternalLink("")}
        >
          <div className="bg-surface-alt p-6 rounded-md mb-6 flex items-center justify-center border border-border">
            <CloudDownload className="h-24 w-24 text-secondary" />
          </div>
          <h3 className="text-primary font-medium text-xl">Consulta de Famílias e Download</h3>
        </div>
      </div>

      <div
        className="bg-surface rounded-md p-8 flex items-center gap-6 md:w-1/3 cursor-pointer transition-transform hover:scale-105 border border-border shadow-sm"
        onClick={() => openExternalLink("")}
      >
        <div className="bg-surface-alt p-6 rounded-md flex items-center justify-center border border-border">
          <Edit className="h-24 w-24 text-secondary" />
        </div>
        <div className="flex-1">
          <h3 className="text-primary font-medium text-xl">Edição de Dados</h3>
        </div>
      </div>
    </div>
  )
}
