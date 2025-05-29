"use client"

import { ArrowLeft, ClipboardCheck, Monitor, Edit, CloudDownload, Gavel, Scale, GitBranch } from "lucide-react"
import Link from "next/link"

export function CartaoProtegePage() {
  const openExternalLink = (url: string) => {
    window.open(url, "_blank")
  }

  const TITLES = {
    page: "Cartão Protege SUAS",
    main: "PROTEÇÃO SOCIAL BÁSICA",
    ferramentas: "Ferramentas",
    documentacao: "Documentação",
  };

  const TOOLS = [
    {
      url: "https://survey123.arcgis.com/share/63405d2901e146fc9a59a4936686b6be?portalUrl=https://siurb.rio/portal",
      icon: <ClipboardCheck className="h-24 w-24 text-secondary" />,
      title: "Declaração Recebimento Cartão Protege SUAS",
    },
    {
      url: "https://siurb.rio/portal/apps/experiencebuilder/experience/?id=d10c7f1251e143b58a4c5de1d1813369&page=Dados-Gerais---Protege-SUAS",
      icon: <Monitor className="h-24 w-24 text-secondary" />,
      title: "Painel de Monitoramento",
    },
    {
      url: "https://siurb.rio/portal/apps/experiencebuilder/experience/?id=d10c7f1251e143b58a4c5de1d1813369&page=Edição---Protege-SUAS",
      icon: <Edit className="h-24 w-24 text-secondary" />,
      title: "Edição de Dados GRR",
    },
    {
      url: "https://siurb.rio/portal/apps/experiencebuilder/experience/?id=d10c7f1251e143b58a4c5de1d1813369&page=Download---Protege-SUAS",
      icon: <CloudDownload className="h-24 w-24 text-secondary" />,
      title: "Consulta de Cartões e Download",
    },
  ];

  const DOCS = [
    {
      url: "https://doweb.rio.rj.gov.br/apifront/portal/edicoes/imprimir_materia/829045/5333",
      icon: <Gavel className="h-24 w-24 text-secondary" />,
      title: "Decreto",
      desc: "Nº 50.743 DE 05 DE MAIO 2022",
    },
    {
      url: "https://doweb.rio.rj.gov.br/portal/visualizacoes/pdf/5462#/p:38/e:5462?find=RESOLUÇÃO%20SMAS",
      icon: <Scale className="h-24 w-24 text-secondary" />,
      title: "Resolução",
      desc: "Nº 134 DE 21 DE SET. 2022",
    },
    {
      url: "https://docs.google.com/document/d/1zxdd58AESnsakk46Ji7KSEEBLrdQ8mxG/edit?tab=t.0",
      icon: <GitBranch className="h-24 w-24 text-secondary" />,
      title: "Procedimento Operacional",
      desc: undefined,
    },
  ];

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
          <span className="text-2xl font-bold text-primary flex items-center h-7">{TITLES.page}</span>
        </div>
        <h1 className="text-5xl font-bold text-primary text-right opacity-50">
          {TITLES.main}
        </h1>
      </div>

      <div className="flex items-center justify-center">
        <div className="h-px bg-border flex-grow" />
        <h2 className="text-2xl font-bold text-primary text-center mx-6">{TITLES.ferramentas}</h2>
        <div className="h-px bg-border flex-grow" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {TOOLS.map((tool, idx) => (
          <div
            key={idx}
            className="bg-surface rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105 border border-border shadow-sm"
            onClick={() => openExternalLink(tool.url)}
          >
            <div className="bg-surface-alt p-6 rounded-md mb-2 flex items-center justify-center border border-border">
              {tool.icon}
            </div>
            <h3 className="text-primary font-medium text-xl">{tool.title}</h3>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <div className="h-px bg-border flex-grow" />
        <h2 className="text-2xl font-bold text-primary text-center mx-6">{TITLES.documentacao}</h2>
        <div className="h-px bg-border flex-grow" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {DOCS.map((doc, idx) => (
          <div
            key={idx}
            className="bg-surface rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105 border border-border shadow-sm"
            onClick={() => openExternalLink(doc.url)}
          >
            <div className="bg-surface-alt p-6 rounded-md mb-4 flex items-center justify-center border border-border">
              {doc.icon}
            </div>
            <div>
              <h3 className="text-primary font-medium text-xl mb-0">{doc.title}</h3>
              {doc.desc && (
                <p className="text-muted text-base mt-0">{doc.desc}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
