"use client"

import { useEffect } from "react"
import { Home, Shield, Users, FileText } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MenuItem } from "@/components/menu-item"

interface MenuProps {
  setCurrentPage: (page: string | null) => void
  sidebarVisible: boolean
  setSidebarVisible: (visible: boolean) => void
  isMobile: boolean
}

export function Menu({ setCurrentPage, sidebarVisible, setSidebarVisible, isMobile }: MenuProps) {
  // Close sidebar when clicking on a menu item on mobile
  const handleMenuItemClick = (action: () => void) => {
    const isMobile = window.innerWidth < 768
    if (isMobile) {
      action()
      setSidebarVisible(false)
    } else {
      action()
    }
  }

  // Add body overflow hidden when sidebar is open on mobile
  useEffect(() => {
    const isMobile = window.innerWidth < 768
    if (isMobile && sidebarVisible) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [sidebarVisible])

  const menuItems = [
    {
      id: "protecao-basica",
      title: "Proteção Social Básica",
      icon: <Shield className="h-5 w-5" />,
      subItems: [
        {
          id: "emergencia",
          title: "Emergência Socioassistencial",
          action: () => handleMenuItemClick(() => setCurrentPage("emergencia")),
          isExternal: false,
        },
        {
          id: "cartao",
          title: "Cartão Protege SUAS",
          action: () => handleMenuItemClick(() => setCurrentPage("cartao-protege")),
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
          action: () => handleMenuItemClick(() => setCurrentPage("documentacao")),
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
          id: "abordagem",
          title: "Abordagem Social",
          action: () => handleMenuItemClick(() => setCurrentPage("abordagem-social")),
          isExternal: false,
        },
        {
          id: "gestao",
          title: "Gestão de Vagas",
          action: () => handleMenuItemClick(() => setCurrentPage("gestao-vagas")),
          isExternal: false,
        },
        {
          id: "censo",
          title: "Censo Poprua",
          action: () =>
            handleMenuItemClick(() =>
              window.open(
                "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/servicos-e-programas-1",
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
          id: "paineis",
          title: "Painéis de Monitoramento",
          action: () =>
            handleMenuItemClick(() =>
              window.open("https://www.gov.br/cidadania/pt-br/acoes-e-programas/cadastro-unico", "_blank"),
            ),
          isExternal: true,
        },
        {
          id: "edicao",
          title: "Edição de Dados CTR",
          action: () =>
            handleMenuItemClick(() =>
              window.open("https://www.gov.br/cidadania/pt-br/acoes-e-programas/cadastro-unico", "_blank"),
            ),
          isExternal: true,
        },
        {
          id: "formularios",
          title: "Formulários",
          action: () => handleMenuItemClick(() => setCurrentPage("formularios")),
          isExternal: false,
        },
        {
          id: "download",
          title: "Download Base de dados",
          action: () =>
            handleMenuItemClick(() =>
              window.open(
                "https://www.gov.br/cidadania/pt-br/acoes-e-programas/cadastro-unico/gestao-do-cadastro-unico-1",
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
                "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/vigilancia-socioassistencial",
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
                "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/vigilancia-socioassistencial",
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
          ? "fixed left-0 right-0 top-16 bottom-0 w-full h-auto z-50 bg-surface-alt border-b border-border"
          : "relative w-64 min-h-screen bg-surface-alt border-r border-border"
      }
      style={isMobile ? { maxHeight: "calc(100vh - 64px)" } : {}}
    >
      <nav className="p-4">
        <div className="mb-6">
          <button
            onClick={() => handleMenuItemClick(() => setCurrentPage(null))}
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
