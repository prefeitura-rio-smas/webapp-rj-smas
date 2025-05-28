"use client"

import { ArrowLeft, ClipboardList } from "lucide-react"
import Link from "next/link"

export function FormulariosPage() {
  const urls = {
    profissionais: "https://survey123.arcgis.com/share/84560c13ce5d43098ed093054f62bfe1?portalUrl=https://siurb.rio/portal&version=3.21",
    cadastroUnico: "https://survey123.arcgis.com/share/a62ca2b5133d41afb3668507b3808911?portalUrl=https://siurb.rio/portal",
    acoes: "https://survey123.arcgis.com/share/9336d682e3ed4602a7288a14330c4065?portalUrl=https://siurb.rio/portal",
    entrevistas: "https://survey123.arcgis.com/share/dfefac75699a4479974612b5453af890?portalUrl=https://siurb.rio/portal",
  }

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
          <span className="text-2xl font-bold text-primary flex items-center h-7">Formulários</span>
        </div>
        <h1 className="text-5xl font-bold text-primary text-right opacity-50">
          CADASTRO ÚNICO
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div
          className="bg-surface rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105 border border-border shadow-sm"
          onClick={() => openExternalLink(urls.profissionais)}
        >
          <div className="bg-surface-alt p-6 rounded-md mb-6 flex items-center justify-center border border-border">
            <ClipboardList className="h-24 w-24 text-secondary" />
          </div>
          <h3 className="text-primary font-medium text-xl">Profissionais</h3>
        </div>

        <div
          className="bg-surface rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105 border border-border shadow-sm"
          onClick={() => openExternalLink(urls.cadastroUnico)}
        >
          <div className="bg-surface-alt p-6 rounded-md mb-6 flex items-center justify-center border border-border">
            <ClipboardList className="h-24 w-24 text-secondary" />
          </div>
          <h3 className="text-primary font-medium text-xl">Cadastro Único</h3>
        </div>

        <div
          className="bg-surface rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105 border border-border shadow-sm"
          onClick={() => openExternalLink(urls.acoes)}
        >
          <div className="bg-surface-alt p-6 rounded-md mb-6 flex items-center justify-center border border-border">
            <ClipboardList className="h-24 w-24 text-secondary" />
          </div>
          <h3 className="text-primary font-medium text-xl">Ações</h3>
        </div>

        <div
          className="bg-surface rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105 border border-border shadow-sm"
          onClick={() => openExternalLink(urls.entrevistas)}
        >
          <div className="bg-surface-alt p-6 rounded-md mb-6 flex items-center justify-center border border-border">
            <ClipboardList className="h-24 w-24 text-secondary" />
          </div>
          <h3 className="text-primary font-medium text-xl">Entrevistas em Domicílio</h3>
        </div>
      </div>
    </div>
  )
}
