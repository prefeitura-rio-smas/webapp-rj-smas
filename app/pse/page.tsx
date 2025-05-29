"use client"

import Link from "next/link"
import {
    ArrowLeft,
    Users,
    ClipboardList,
    BarChart2,
    LayoutDashboard // Icone padrão
} from "lucide-react"

// CategoryCard não é usado para os actionButtons, então permanece como está.
function CategoryCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-surface rounded-md p-8 border border-border shadow-sm">
      <h1 className="text-5xl font-bold text-primary text-right opacity-50 mb-4">
        {title}
      </h1>
      <p className="text-xl text-primary text-right opacity-70">
        {description}
      </p>
    </div>
  );
}

const actionButtons = [
  {
    id: 1,
    title: "Abordagem Social",
    iconName: "people",
    href: "/pse/abordagem",
    internal: true,
  },
  {
    id: 2,
    title: "Gestão de Vagas",
    iconName: "management",
    href: "/pse/gestao",
    internal: true,
  },
  {
    id: 3,
    title: "Censo Poprua",
    iconName: "chart",
    external: true,
    href: "https://censorua-pcrj.hub.arcgis.com",
  },
];

const iconComponents: { [key: string]: React.ElementType } = {
    people: Users,
    management: ClipboardList,
    chart: BarChart2,
    default: LayoutDashboard, // Icone padrão
};

export default function PSEPage() {
  // Classes base para o card principal (Link ou a)
  const baseCardClasses = "bg-surface rounded-md p-8 pb-4 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105 border border-border shadow-sm group outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary";
  // Classes base para o container do ícone
  const baseIconContainerClasses = "bg-surface-alt p-6 rounded-md flex items-center justify-center border border-border";

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
            </div>
            <h1 className="text-5xl font-bold text-primary text-right opacity-50">
                PROTEÇÃO SOCIAL ESPECIAL
            </h1>
            <p className="text-xl text-primary text-right opacity-70">
                Acesso à Abordagem Social, Gestão de Vagas e Censo Poprua
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {actionButtons.map((button) => {
                const IconComponent = iconComponents[button.iconName] || iconComponents.default;
                
                if (button.internal) {
                    return (
                        <Link
                            key={button.id}
                            href={button.href}
                            className={`${baseCardClasses}`}
                        >
                            <div className={`${baseIconContainerClasses}`}>
                                <IconComponent className="h-24 w-24 text-secondary" />
                            </div>
                            <div className="flex flex-col items-center justify-center px-2 mt-2">
                                <h3 className="text-primary font-medium text-xl text-center leading-tight">{button.title}</h3>
                            </div>
                        </Link>
                    );
                } else {
                    return (
                        <a
                            key={button.id}
                            href={button.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${baseCardClasses}`}
                        >
                            <div className={`${baseIconContainerClasses} mb-auto`}>
                                <IconComponent className="h-24 w-24 text-secondary" />
                            </div>
                            <div className="flex flex-col items-center justify-center px-2">
                                <h3 className="text-primary font-medium text-xl text-center leading-tight">{button.title}</h3>
                                <span className="text-muted text-xs text-center mt-0.5 leading-none">(link externo)</span>
                            </div>
                        </a>
                    );
                }
            })}
        </div>
    </div>
  )
}