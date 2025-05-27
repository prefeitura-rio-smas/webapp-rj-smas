"use client"

import { useState } from "react"
import { ArrowLeft, BarChart, BarChart2, FileText, CloudDownload, ClipboardList } from "lucide-react"
import { Button } from "@/components/ui/button"
import { YearSelector } from "@/components/year-selector"

interface PageProps {
  onBack: () => void
}

export function AbordagemSocialPage({ onBack }: PageProps) {
  const [selectedYear, setSelectedYear] = useState("2025")

  // Function to handle external links
  const openExternalLink = (url: string) => {
    window.open(url, "_blank")
  }

  // Define URLs based on selected year
  const getUrls = () => {
    if (selectedYear === "2024") {
      return {
        abordagemSocial: "",
        coordenadoria: "",
        creas: "",
        centroPop: "",
        preenchimento: "",
        painelGeral: "",
        documentacao: "",
        downloadBase: "",
      }
    } else {
      return {
        abordagemSocial: "https://siurb.rio/portal/apps/experiencebuilder/experience/?id=8b5372c3bcc64cdb8658ed3f994b41cc&page=2025-Painel-Geral",
        coordenadoria: "https://siurb.rio/portal/apps/experiencebuilder/experience/?id=8b5372c3bcc64cdb8658ed3f994b41cc&page=2025-Painel-CTPR",
        creas: "https://siurb.rio/portal/apps/experiencebuilder/experience/?id=8b5372c3bcc64cdb8658ed3f994b41cc&page=2025-Painel-CREAS",
        centroPop: "https://siurb.rio/portal/apps/experiencebuilder/experience/?id=8b5372c3bcc64cdb8658ed3f994b41cc&page=2025-Painel-Centro-POP",
        preenchimento: "https://siurb.rio/portal/apps/experiencebuilder/experience/?id=8b5372c3bcc64cdb8658ed3f994b41cc&page=Preenchimento-ficha-de-abordagem",
        painelGeral: "https://siurb.rio/portal/apps/experiencebuilder/experience/?id=8b5372c3bcc64cdb8658ed3f994b41cc&page=2025-Painel-Geral-de-Atendimentos",
        documentacao: "",
        downloadBase: "https://siurb.rio/portal/apps/webappviewer/index.html?id=a1029ef4c12340f38c2bae1021cbbffb",
      }
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
          <span className="text-2xl font-bold text-primary flex items-center h-7">Abordagem Social</span>
        </div>
        <h1 className="text-5xl font-bold text-primary text-right opacity-50">
          PROTEÇÃO SOCIAL ESPECIAL
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        <div
          className="bg-surface rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-102 border border-border shadow-sm"
          onClick={() => openExternalLink(urls.preenchimento)}
        >
          <div className="bg-surface-alt p-6 rounded-md mb-6 flex items-center justify-center cursor-pointer transition-transform hover:scale-102 border border-border">
            <ClipboardList className="h-24 w-24 text-sky-400" />
          </div>
          <h3 className="text-primary font-medium text-xl">
            Preenchimento Abordagem Social {selectedYear}
          </h3>
        </div>
      </div>

      <YearSelector currentYear={selectedYear} onYearChange={setSelectedYear} />

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
      {[
        {
          url: urls.abordagemSocial,
          icon: <BarChart className="h-24 w-24 text-sky-400" />,
          label: `Abordagem Social ${selectedYear}`,
        },
        {
          url: urls.painelGeral,
          icon: <BarChart2 className="h-24 w-24 text-sky-400" />,
          label: "Painel Geral de Atendimentos",
        },
        {
          url: urls.coordenadoria,
          icon: <BarChart className="h-24 w-24 text-sky-400" />,
          label: "Coordenadoria",
        },
        {
          url: urls.creas,
          icon: <BarChart className="h-24 w-24 text-sky-400" />,
          label: "CREAS",
        },
        {
          url: urls.centroPop,
          icon: <BarChart className="h-24 w-24 text-sky-400" />,
          label: "Centro Pop",
        }
      ].map(({ url, icon, label }) => (
          <div
            key={label}
            className="bg-surface rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105 border border-border shadow-sm"
            onClick={() => openExternalLink(url)}
          >
            <div className="bg-surface-alt p-6 rounded-md mb-6 flex items-center justify-center border border-border">
              {icon}
            </div>
            <h3 className="text-primary font-medium text-xl">{label}</h3>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <div className="h-px bg-border flex-grow" />
        <h2 className="text-2xl font-bold text-primary text-center mx-6">Ferramentas</h2>
        <div className="h-px bg-border flex-grow" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className="bg-surface rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105 border border-border shadow-sm"
          onClick={() => openExternalLink(urls.documentacao)}
        >
          <div className="bg-surface-alt p-6 rounded-md mb-6 flex items-center justify-center border border-border">
            <FileText className="h-24 w-24 text-sky-400" />
          </div>
          <h3 className="text-primary font-medium text-xl">Documentação</h3>
        </div>

        <div
          className="bg-surface rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105 border border-border shadow-sm"
          onClick={() => openExternalLink(urls.downloadBase)}
        >
          <div className="bg-surface-alt p-6 rounded-md mb-6 flex items-center justify-center border border-border">
            <CloudDownload className="h-24 w-24 text-sky-400" />
          </div>
          <h3 className="text-primary font-medium text-xl">Download da Base de Dados</h3>
        </div>
      </div>
    </div>
  )
}
