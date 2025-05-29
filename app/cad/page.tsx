"use client"

import Link from "next/link"
import { 
    ArrowLeft, 

    LayoutDashboard,
    Edit3,
    FileText,
    Download
} from "lucide-react"
import { useRouter } from "next/navigation";

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
    const router = useRouter();

    const openExternalLink = (url: string) => {
        window.open(url, "_blank", "noopener,noreferrer");
    }

    const handleButtonClick = (button: typeof actionButtons[0]) => {
        if (button.external && button.href) {
            openExternalLink(button.href);
        } else if (button.internal && button.href) {
            router.push(button.href);
        } else if (button.href) {
            router.push(button.href); 
        }
    };

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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {}
                {actionButtons.map((button) => {
                    const IconComponent = iconComponents[button.iconName] || iconComponents.default;
                    return (
                        <div
                            key={button.id}
                            className="bg-surface rounded-md p-8 flex flex-col items-center text-center h-64 cursor-pointer transition-transform hover:scale-105 border border-border shadow-sm"
                            onClick={() => handleButtonClick(button)}
                            role="button"
                            tabIndex={0} 
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleButtonClick(button);}}
                        >
                            <div className="bg-surface-alt p-6 rounded-md mb-2 flex items-center justify-center border border-border">
                                <IconComponent className="h-24 w-24 text-secondary" />
                            </div>
                            <h3 className="text-primary font-medium text-xl">{button.title}</h3>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}