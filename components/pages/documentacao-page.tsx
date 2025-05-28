"use client"

import { ArrowLeft, BookOpen, GitBranch, User, CloudLightning } from "lucide-react"
import Link from "next/link"

export function DocumentacaoPage() {
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
          <span className="font-medium text-2xl text-primary flex items-center h-7">Documentação</span>
        </div>
        <h1 className="text-5xl font-bold text-primary text-right opacity-50">
          PROTEÇÃO SOCIAL BÁSICA
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div
          className="bg-surface rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105 border border-border shadow-sm"
          onClick={() => openExternalLink("https://drive.google.com/drive/folders/1Ei-4Og3RWg1RIfxV_NF7kLo2h4nhdgi-")}
        >
          <div className="bg-surface-alt p-6 rounded-md mb-6 flex items-center justify-center border border-border">
            <BookOpen className="h-24 w-24 text-secondary" />
          </div>
          <h3 className="text-primary font-medium text-xl">Bibliografia Básica</h3>
        </div>

        <div
          className="bg-surface rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105 border border-border shadow-sm"
          onClick={() => openExternalLink("https://drive.google.com/drive/folders/18RX_AKcesMUrtVVHgxKEAOtClH8RQLl9")}
        >
          <div className="bg-surface-alt p-6 rounded-md mb-6 flex items-center justify-center border border-border">
            <GitBranch className="h-24 w-24 text-secondary" />
          </div>
          <h3 className="text-primary font-medium text-xl">Procedimento Operacional</h3>
        </div>

        <div
          className="bg-surface rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105 border border-border shadow-sm"
          onClick={() => openExternalLink("https://drive.google.com/drive/folders/15Q5l52k1YfC7Xl2OSueVTqP_JHMJUncM")}
        >
          <div className="bg-surface-alt p-6 rounded-md mb-6 flex items-center justify-center border border-border">
            <User className="h-24 w-24 text-secondary" />
          </div>
          <h3 className="text-primary font-medium text-xl">Matriz de Responsabilidade</h3>
        </div>

        <div
          className="bg-surface rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105 border border-border shadow-sm"
          onClick={() => openExternalLink("https://drive.google.com/drive/folders/17nrBf-QpugvHgUjXitE0vqY2Bo-6N9IB")}
        >
          <div className="bg-surface-alt p-6 rounded-md mb-6 flex items-center justify-center border border-border">
            <CloudLightning className="h-24 w-24 text-secondary" />
          </div>
          <h3 className="text-primary font-medium text-xl">Plano Verão</h3>
        </div>
      </div>
    </div>
  )
}
