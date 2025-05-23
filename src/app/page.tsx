"use client"

import { useState, useEffect } from "react"
import { Menu } from "@/features/layout/components/menu"
import { Header } from "@/features/layout/components/header"
import { CategoryCard } from "@/features/dashboard/components/category-card"
import { AbordagemSocialPage } from "@/features/pages/abordagem-social/abordagem-social-page"
import { GestaoVagasPage } from "@/features/pages/gestao-vagas/gestao-vagas-page"
import { FormulariosPage } from "@/features/pages/formularios/formularios-page"
import { EmergenciaPage } from "@/features/pages/emergencia/emergencia-page"
import { CartaoProtegePage } from "@/features/pages/cartao-protege/cartao-protege-page"
import { DocumentacaoPage } from "@/features/pages/documentacao/documentacao-page"

export default function Dashboard() {
  const [sidebarVisible, setSidebarVisible] = useState(false)
  const [currentPage, setCurrentPage] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
      // On desktop, sidebar should be visible by default
      if (window.innerWidth >= 768) {
        setSidebarVisible(true)
      } else {
        setSidebarVisible(false)
      }
    }

    // Initial check
    checkIfMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  // Create overlay for mobile when sidebar is open
  const Overlay = () => {
    if (isMobile && sidebarVisible) {
      return <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setSidebarVisible(false)} />
    }
    return null
  }

  const categories = [
    {
      id: 1,
      title: "PROTEÇÃO SOCIAL BÁSICA",
      description:
        "Acesso a Emergência Socioassistencial, Cartão Protege SUAS, Acompanhamento Familiar, Demandas Habitacionais e Documentação",
      buttons: [
        {
          id: 1,
          title: "Emergência Socioassistencial",
          icon: "emergency",
          action: () => setCurrentPage("emergencia"),
          internal: true,
        },
        {
          id: 2,
          title: "Cartão Protege SUAS",
          icon: "card",
          action: () => setCurrentPage("cartao-protege"),
          internal: true,
        },
        {
          id: 3,
          title: "Demandas Habitacionais",
          icon: "home",
          action: () => window.open("https://www.gov.br/mds/pt-br/acoes-e-programas/assistencia-social", "_blank"),
          internal: false,
        },
        {
          id: 4,
          title: "Documentação",
          icon: "document",
          action: () => setCurrentPage("documentacao"),
          internal: true,
        },
      ],
    },
    {
      id: 2,
      title: "VIGILÂNCIA SOCIOASSISTENCIAL",
      description: "Boletins Técnicos",
      buttons: [
        {
          id: 1,
          title: "1ª Edição Boletim Técnico",
          icon: "report",
          action: () =>
            window.open(
              "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/vigilancia-socioassistencial",
              "_blank",
            ),
          internal: false,
        },
        {
          id: 2,
          title: "2ª Edição Boletim Técnico",
          icon: "report",
          action: () =>
            window.open(
              "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/vigilancia-socioassistencial",
              "_blank",
            ),
          internal: false,
        },
      ],
    },
    {
      id: 3,
      title: "PROTEÇÃO SOCIAL ESPECIAL",
      description: "Acesso a Abordagem social, Censo Poprua e Gestão de Vagas",
      buttons: [
        {
          id: 1,
          title: "Abordagem Social",
          icon: "people",
          action: () => setCurrentPage("abordagem-social"),
          internal: true,
        },
        {
          id: 2,
          title: "Gestão de Vagas",
          icon: "management",
          action: () => setCurrentPage("gestao-vagas"),
          internal: true,
        },
        {
          id: 3,
          title: "Censo Poprua",
          icon: "chart",
          action: () =>
            window.open(
              "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/servicos-e-programas-1",
              "_blank",
            ),
          internal: false,
        },
      ],
    },
    {
      id: 4,
      title: "CADASTRO ÚNICO",
      description: "Acesso aos Painéis de Monitoramento, Edição de Dados CTR, Formulários e Download de Base de Dados",
      buttons: [
        {
          id: 1,
          title: "Painéis de Monitoramento",
          icon: "dashboard",
          action: () => window.open("https://www.gov.br/cidadania/pt-br/acoes-e-programas/cadastro-unico", "_blank"),
          internal: false,
        },
        {
          id: 2,
          title: "Edição de dados CTR",
          icon: "edit",
          action: () => window.open("https://www.gov.br/cidadania/pt-br/acoes-e-programas/cadastro-unico", "_blank"),
          internal: false,
        },
        {
          id: 3,
          title: "Formulários",
          icon: "form",
          action: () => setCurrentPage("formularios"),
          internal: true,
        },
        {
          id: 4,
          title: "Download Base de dados",
          icon: "download",
          action: () =>
            window.open(
              "https://www.gov.br/cidadania/pt-br/acoes-e-programas/cadastro-unico/gestao-do-cadastro-unico-1",
              "_blank",
            ),
          internal: false,
        },
      ],
    },
  ]

  // Renderiza a página interna correspondente
  const renderPage = () => {
    switch (currentPage) {
      case "emergencia":
        return <EmergenciaPage onBack={() => setCurrentPage(null)} />
      case "cartao-protege":
        return <CartaoProtegePage onBack={() => setCurrentPage(null)} />
      case "documentacao":
        return <DocumentacaoPage onBack={() => setCurrentPage(null)} />
      case "abordagem-social":
        return <AbordagemSocialPage onBack={() => setCurrentPage(null)} />
      case "gestao-vagas":
        return <GestaoVagasPage onBack={() => setCurrentPage(null)} />
      case "formularios":
        return <FormulariosPage onBack={() => setCurrentPage(null)} />
      default:
        return (
          <>
            <div className="bg-white dark:bg-[#1a3b6d] rounded-md p-4 md:p-8 mb-8 text-[#0d2953] dark:text-white text-center border border-[#c1cee3] dark:border-[#1a3b6d] shadow-sm">
              <h1 className="text-xl md:text-2xl font-semibold">SEJA BEM-VINDO(A)</h1>
              <p className="text-sm md:text-base">ao Sistema Integrado da Secretaria Municipal de Assistência Social</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  title={category.title}
                  description={category.description}
                  buttons={category.buttons}
                />
              ))}
            </div>
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-[#f0f4fa] dark:bg-[#0a2756]">
      <Header sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} setCurrentPage={setCurrentPage} />
      <Overlay />
      <div className="flex relative">
        <Menu setCurrentPage={setCurrentPage} sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} />
        <main
          className={`flex-1 p-4 md:p-8 transition-all duration-300 bg-[#f0f4fa] dark:bg-[#0a2756] ${
            isMobile ? "w-full" : sidebarVisible ? "" : "ml-0"
          }`}
        >
          {renderPage()}
        </main>
      </div>
    </div>
  )
}
