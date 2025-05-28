"use client"

import { CategoryCard } from "@/components/category-card"
import Link from "next/link"

const buttons = [
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
]

export default function PSEPage() {
  return (
    
    <div className="max-w-4xl mx-auto py-8">
      <CategoryCard
        title="PROTEÇÃO SOCIAL ESPECIAL"
        description="Acesso a Abordagem social, Censo Poprua e Gestão de Vagas"
        buttons={buttons}
        ButtonComponent={({ button }) =>
          button.internal ? (
            <Link href={button.href} className="btn">
              {button.title}
            </Link>
          ) : (
            <a
              href={button.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              {button.title}
            </a>
          )
        }
      />
    </div>
  )
}