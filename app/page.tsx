"use client"

import { useState, useEffect } from "react"
import { Menu } from "@/components/menu"
import { Header } from "@/components/header"
import { CategoryCard } from "@/components/category-card"
import Link from "next/link"

export default function HomePage() {
  const [sidebarVisible, setSidebarVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [currentPage, setCurrentPage] = useState<string | null>(null)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

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
          href: "/psb/emergencia",
          internal: true,
        },
        {
          id: 2,
          title: "Cartão Protege SUAS",
          icon: "card",
          href: "/psb/cartao",
          internal: true,
        },
        {
          id: 3,
          title: "Demandas Habitacionais",
          icon: "home",
          external: true,
          href: "https://www.gov.br/mds/pt-br/acoes-e-programas/assistencia-social",
        },
        {
          id: 4,
          title: "Documentação",
          icon: "document",
          href: "/psb/docs",
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
          external: true,
          href: "https://drive.google.com/file/d/1jpae1Az5tLwIdVXZoTR_o3ydF1PVYggr/view",
        },
        {
          id: 2,
          title: "2ª Edição Boletim Técnico",
          icon: "report",
          external: true,
          href: "https://drive.google.com/file/d/1ED0DnH9g_Kc7r0tUREbYHHeXUmlSMEVC/view",
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
          href: "/pse/abordagem",
          internal: true,
        },
        {
          id: 2,
          title: "Gestão de Vagas",
          icon: "management",
          href: "/pse/gestao",
          internal: true,
        },
        {
          id: 3,
          title: "Censo Poprua",
          icon: "chart",
          external: true,
          href: "https://censorua-pcrj.hub.arcgis.com",
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
          external: true,
          href: "https://siurb.rio/portal/apps/experiencebuilder/experience/?id=46630a95c6cf44e2b228311efabc1aad&page=Monitoramento-2025&views=PROFISSIONAIS-%28RH%29",
        },
        {
          id: 2,
          title: "Edição de dados CTR",
          icon: "edit",
          external: true,
          href: "https://siurb.rio/portal/apps/dashboards/c710bb4dd3a54508ba338284d4b81816",
        },
        {
          id: 3,
          title: "Formulários",
          icon: "form",
          href: "/cad/forms",
          internal: true,
        },
        {
          id: 4,
          title: "Download Base de dados",
          icon: "download",
          external: true,
          href: "https://siurb.rio/portal/apps/webappviewer/index.html?id=7055563587a2431ab4d23d342274d189",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header
        sidebarVisible={sidebarVisible}
        setSidebarVisible={setSidebarVisible}
        setCurrentPage={setCurrentPage} 
      />
      <Overlay />
      <div className="flex relative">
        {sidebarVisible && (
          <Menu 
            sidebarVisible={sidebarVisible}
            setSidebarVisible={setSidebarVisible}
            isMobile={isMobile}
          />
        )}
        <main
          className={`flex-1 p-4 md:p-8 transition-all duration-300 ${sidebarVisible && isMobile ? "hidden" : ""}`}
        >
          {currentPage === null ? ( 
            <>
              <div className="bg-surface rounded-md p-4 md:p-8 mb-8 text-primary text-center border border-muted shadow-sm">
                <h1 className="text-xl md:text-2xl font-semibold">SEJA BEM-VINDO(A)</h1>
                <p className="text-sm md:text-base">ao Sistema Integrado da Secretaria Municipal de Assistência Social</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full">
                {categories.map((category) => (
                  <CategoryCard
                    key={category.id}
                    title={category.title}
                    description={category.description}
                    buttons={category.buttons}
                    ButtonComponent={({ button }: { button: { href: string; internal?: boolean; external?: boolean; title: string } }) =>
                      button.internal ? (
                        <Link href={button.href} className="btn">
                          {button.title}
                        </Link>
                      ) : (
                        <a href={button.href} target="_blank" rel="noopener noreferrer" className="btn">
                          {button.title}
                        </a>
                      )
                    }
                  />
                ))}
              </div>
            </>
          ) : (
            <div>Conteúdo para a página: {currentPage}</div>
          )}
        </main>
      </div>
    </div>
  )
}