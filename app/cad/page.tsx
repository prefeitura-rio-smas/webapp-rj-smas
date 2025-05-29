"use client"

import Link from "next/link"
import {
    ArrowLeft,
    LayoutDashboard,
    Edit3,
    FileText,
    Download
} from "lucide-react"

const actionButtons = [
    {
        id: 1,
        title: "Painéis de Monitoramento",
        iconName: "dashboard",
        external: true,
        href: "https://siurb.rio/portal/apps/experiencebuilder/experience/?id=46630a95c6cf44e2b228311efabc1aad&page=Monitoramento-2025&views=PROFISSIONAIS-%28RH%29",
    },
    {
        id: 2,
        title: "Edição de dados CTR",
        iconName: "edit",
        external: true,
        href: "https://siurb.rio/portal/apps/dashboards/c710bb4dd3a54508ba338284d4b81816",
    },
    {
        id: 3,
        title: "Formulários",
        iconName: "form",
        href: "/cad/forms",
        internal: true,
    },
    {
        id: 4,
        title: "Download Base de dados",
        iconName: "download",
        external: true,
        href: "https://siurb.rio/portal/apps/webappviewer/index.html?id=7055563587a2431ab4d23d342274d189",
    },
];

const iconComponents: { [key: string]: React.ElementType } = {
    dashboard: LayoutDashboard,
    edit: Edit3,
    form: FileText,
    download: Download,
};

export default function CadPage() {
    // Defina as classes base do card sem a propriedade de justificação que varia
    const baseCardClasses = "bg-surface rounded-md p-8 pb-4 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105 border border-border shadow-sm group outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary";

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
                    CADASTRO ÚNICO
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {actionButtons.map((button) => {
                    const IconComponent = iconComponents[button.iconName] || iconComponents.default;
                    
                    if (button.internal) {
                        return (
                            <Link
                                key={button.id}
                                href={button.href}
                                // Aplicar justify-start para links internos
                                className={`${baseCardClasses} justify-start`}
                            >
                                <div className="bg-surface-alt p-6 rounded-md flex items-center justify-center border border-border">
                                    <IconComponent className="h-24 w-24 text-secondary" />
                                </div>
                                {/* Adicionar uma margem superior ao container do título para espaçamento */}
                                <div className="flex flex-col items-center justify-center px-2 mt-6"> {/* Aumentado para mt-6 como exemplo */}
                                    <h3 className="text-primary font-medium text-xl text-center leading-tight">{button.title}</h3>
                                </div>
                            </Link>
                        );
                    } else { // external link
                        return (
                            <a
                                key={button.id}
                                href={button.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                // Manter justify-between para links externos
                                className={`${baseCardClasses} justify-between`}
                            >
                                <div className="bg-surface-alt p-6 rounded-md flex items-center justify-center border border-border">
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