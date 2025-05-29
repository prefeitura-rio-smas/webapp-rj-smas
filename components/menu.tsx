"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Home, Shield, Users, FileText } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MenuItem } from "@/components/menu-item"

interface MenuProps {
  sidebarVisible: boolean
  setSidebarVisible: (visible: boolean) => void
  isMobile: boolean
}

export function Menu({ sidebarVisible, setSidebarVisible, isMobile }: MenuProps) {
  const router = useRouter()

  const handleMenuItemClick = (action: () => void) => {
    if (window.innerWidth < 768) {
      action()
      setSidebarVisible(false)
    } else {
      action()
    }
  }

  useEffect(() => {
    if (isMobile && sidebarVisible) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [sidebarVisible, isMobile])

  const menuItems = [
    {
      id: "protecao-basica",
      title: "Proteção Social Básica",
      icon: <Shield className="h-5 w-5" />,
      subItems: [
        {
          id: "psb-inicial",
          title: "Página Inicial",
          action: () => handleMenuItemClick(() => router.push("/psb")),
          isExternal: false,
        },
        {
          id: "emergencia",
          title: "Emergência Socioassistencial",
          action: () => handleMenuItemClick(() => router.push("/psb/emergencia")),
          isExternal: false,
        },
        {
          id: "cartao",
          title: "Cartão Protege SUAS",
          action: () => handleMenuItemClick(() => router.push("/psb/cartao")),
          isExternal: false,
        },
        {
          id: "demandas",
          title: "Demandas Habitacionais",
          action: () =>
            handleMenuItemClick(() =>
              window.open("https://www.gov.br/mds/pt-br/acoes-e-programas/assistencia-social", "_blank"),
            ),
          isExternal: true,
        },
        {
          id: "documentacao",
          title: "Documentação",
          action: () => handleMenuItemClick(() => router.push("/psb/docs")),
          isExternal: false,
        },
      ],
    },
    {
      id: "protecao-especial",
      title: "Proteção Social Especial",
      icon: <Shield className="h-5 w-5" />,
      subItems: [
        {
          id: "pse-inicial",
          title: "Página Inicial",
          action: () => handleMenuItemClick(() => router.push("/pse")),
          isExternal: false,
        },
        {
          id: "abordagem",
          title: "Abordagem Social",
          action: () => handleMenuItemClick(() => router.push("/pse/abordagem")),
          isExternal: false,
        },
        {
          id: "gestao",
          title: "Gestão de Vagas",
          action: () => handleMenuItemClick(() => router.push("/pse/gestao")),
          isExternal: false,
        },
        {
          id: "censo",
          title: "Censo Poprua",
          action: () =>
            handleMenuItemClick(() =>
              window.open(
                "https://censorua-pcrj.hub.arcgis.com",
                "_blank",
              ),
            ),
          isExternal: true,
        },
      ],
    },
    {
      id: "cadastro-unico",
      title: "Cadastro Único",
      icon: <Users className="h-5 w-5" />,
      subItems: [
        {
          id: "cad-inicial",
          title: "Página Inicial",
          action: () => handleMenuItemClick(() => router.push("/cad")),
          isExternal: false,
        },
        {
          id: "paineis",
          title: "Painéis de Monitoramento",
          action: () =>
            handleMenuItemClick(() =>
              window.open("https://siurb.rio/portal/apps/experiencebuilder/experience/?id=46630a95c6cf44e2b228311efabc1aad&page=Monitoramento-2025&views=PROFISSIONAIS-%28RH%29", "_blank"),
            ),
          isExternal: true,
        },
        {
          id: "edicao",
          title: "Edição de Dados CTR",
          action: () =>
            handleMenuItemClick(() =>
              window.open("https://siurb.rio/portal/apps/dashboards/c710bb4dd3a54508ba338284d4b81816", "_blank"),
            ),
          isExternal: true,
        },
        {
          id: "formularios",
          title: "Formulários",
          action: () => handleMenuItemClick(() => router.push("/cad/forms")),
          isExternal: false,
        },
        {
          id: "download",
          title: "Download Base de dados",
          action: () =>
            handleMenuItemClick(() =>
              window.open(
                "https://siurb.rio/portal/apps/webappviewer/index.html?id=7055563587a2431ab4d23d342274d189",
                "_blank",
              ),
            ),
          isExternal: true,
        },
      ],
    },
    {
      id: "vigilancia",
      title: "Vigilância Socioassistencial",
      icon: <FileText className="h-5 w-5" />,
      subItems: [
        {
          id: "edicao1",
          title: "1ª Edição Boletim Técnico",
          action: () =>
            handleMenuItemClick(() =>
              window.open(
                "https://drive.google.com/file/d/1jpae1Az5tLwIdVXZoTR_o3ydF1PVYggr/view",
                "_blank",
              ),
            ),
          isExternal: true,
        },
        {
          id: "edicao2",
          title: "2ª Edição Boletim Técnico",
          action: () =>
            handleMenuItemClick(() =>
              window.open(
                "https://drive.google.com/file/d/1ED0DnH9g_Kc7r0tUREbYHHeXUmlSMEVC/view",
                "_blank",
              ),
            ),
          isExternal: true,
        },
      ],
    },
  ]

  return (
    <aside
      className={
        isMobile
          ? "fixed left-0 right-0 top-16 bottom-0 w-full h-auto z-50 bg-surface-alt border-b border-border overflow-y-auto"
          : "relative w-64 min-h-screen bg-surface-alt border-r border-border"
      }
      style={isMobile ? { maxHeight: "calc(100vh - 64px)" } : {}}
    >
      <nav className="p-4">
        <div className="mb-6">
          <button
            onClick={() => handleMenuItemClick(() => router.push("/homepage"))}
            className="flex items-center gap-2 text-primary p-3 rounded-md hover:bg-hover active:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary w-full text-left text-base transition-colors"
          >
            <Home className="h-5 w-5" />
            <span>Início</span>
          </button>
        </div>

        <div className="space-y-1">
          <h3 className="text-muted text-sm font-medium px-2 mb-3">Serviços</h3>

          <Accordion type="multiple" className="w-full border-none">
            {menuItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border-none">
                <AccordionTrigger className="py-3 px-3 text-primary hover:bg-hover hover:no-underline rounded-md text-base transition-colors">
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span>{item.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-0 pt-1 bg-surface accordion-content">
                  <div className="space-y-1">
                    {item.subItems.map((subItem) => (
                      <MenuItem
                        key={subItem.id}
                        title={subItem.title}
                        onClick={subItem.action}
                        isExternal={subItem.isExternal}
                      />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </nav>
    </aside>
  )
}