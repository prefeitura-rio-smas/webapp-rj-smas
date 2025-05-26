"use client"

import { useState } from "react"
import { ArrowLeft, ClipboardList } from "lucide-react"
import { Button } from "@/components/ui/button"
import { YearSelector } from "@/components/year-selector"

interface PageProps {
  onBack: () => void
}

export function FormulariosPage({ onBack }: PageProps) {
  const [selectedYear, setSelectedYear] = useState("2025")

  // Function to handle external links
  const openExternalLink = (url: string) => {
    window.open(url, "_blank")
  }

  // Define URLs based on selected year
  const getUrls = () => {
    if (selectedYear === "2024") {
      return {
        profissionais: "https://survey123.arcgis.com/share/84560c13ce5d43098ed093054f62bfe1?portalUrl=https://siurb.rio/portal&version=3.21",
        cadastroUnico: "https://survey123.arcgis.com/share/a62ca2b5133d41afb3668507b3808911?portalUrl=https://siurb.rio/portal",
        acoes: "https://survey123.arcgis.com/share/9336d682e3ed4602a7288a14330c4065?portalUrl=https://siurb.rio/portal",
        entrevistas: "https://survey123.arcgis.com/share/dfefac75699a4479974612b5453af890?portalUrl=https://siurb.rio/portal",
      }
    } else {
      return {
        profissionais: "https://survey123.arcgis.com/share/84560c13ce5d43098ed093054f62bfe1?portalUrl=https://siurb.rio/portal&version=3.21",
        cadastroUnico: "https://survey123.arcgis.com/share/a62ca2b5133d41afb3668507b3808911?portalUrl=https://siurb.rio/portal",
        acoes: "https://survey123.arcgis.com/share/9336d682e3ed4602a7288a14330c4065?portalUrl=https://siurb.rio/portal",
        entrevistas: "https://survey123.arcgis.com/share/dfefac75699a4479974612b5453af890?portalUrl=https://siurb.rio/portal",
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
            <span className="font-medium">Formulários</span>
          </div>
        </div>
        <h1 className="text-5xl font-bold text-[#193257] dark:text-white text-right opacity-50">CADASTRO ÚNICO</h1>
      </div>



      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div
          className="bg-white dark:bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105 border border-[#e5e7eb] dark:border-[#1a3b6d] shadow-sm"
          onClick={() => openExternalLink(urls.profissionais)}
        >
          <div className="bg-white dark:bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center border border-[#e5e7eb] dark:border-[#1a3b6d]">
            <ClipboardList className="h-24 w-24 text-[#00c2f7] dark:text-sky-400" />
          </div>
          <h3 className="text-[#193257] dark:text-white font-medium text-xl">Profissionais</h3>
        </div>

        <div
          className="bg-white dark:bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105 border border-[#e5e7eb] dark:border-[#1a3b6d] shadow-sm"
          onClick={() => openExternalLink(urls.cadastroUnico)}
        >
          <div className="bg-white dark:bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center border border-[#e5e7eb] dark:border-[#1a3b6d]">
            <ClipboardList className="h-24 w-24 text-[#00c2f7] dark:text-sky-400" />
          </div>
          <h3 className="text-[#193257] dark:text-white font-medium text-xl">Cadastro Único</h3>
        </div>

        <div
          className="bg-white dark:bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105 border border-[#e5e7eb] dark:border-[#1a3b6d] shadow-sm"
          onClick={() => openExternalLink(urls.acoes)}
        >
          <div className="bg-white dark:bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center border border-[#e5e7eb] dark:border-[#1a3b6d]">
            <ClipboardList className="h-24 w-24 text-[#00c2f7] dark:text-sky-400" />
          </div>
          <h3 className="text-[#193257] dark:text-white font-medium text-xl">Ações</h3>
        </div>

        <div
          className="bg-white dark:bg-[#1a3b6d] rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105 border border-[#e5e7eb] dark:border-[#1a3b6d] shadow-sm"
          onClick={() => openExternalLink(urls.entrevistas)}
        >
          <div className="bg-white dark:bg-[#0a2756] p-6 rounded-md mb-6 flex items-center justify-center border border-[#e5e7eb] dark:border-[#1a3b6d]">
            <ClipboardList className="h-24 w-24 text-[#00c2f7] dark:text-sky-400" />
          </div>
          <h3 className="text-[#193257] dark:text-white font-medium text-xl">Entrevistas em Domicílio</h3>
        </div>
      </div>
    </div>
  )
}
