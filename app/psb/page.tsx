"use client"
import { CategoryCard } from "@/components/category-card"

const buttons = [
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
]

export default function PSBPage() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <CategoryCard
        title="PROTEÇÃO SOCIAL BÁSICA"
        description="Acesso a Emergência Socioassistencial, Cartão Protege SUAS, Demandas Habitacionais e Documentação"
        buttons={buttons}
      />
    </div>
  )
}