"use client"

import { CategoryCard } from "@/components/category-card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const buttons = [
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
]

export default function CadPage() {
	return (
		<div className="w-full flex justify-center">
			<div className="w-full space-y-8">
				<div className="bg-surface rounded-md p-8 border border-border shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
					<Link
						href="/homepage"
						className="flex items-center gap-2 text-primary text-lg group p-0 h-auto"
						style={{ WebkitTapHighlightColor: "transparent" }}
					>
						<ArrowLeft className="h-7 w-7" />
						<span className="group-hover:underline transition">
							Página inicial
						</span>
					</Link>
					<h1 className="text-5xl font-bold text-primary opacity-50 md:text-right md:w-auto w-full text-center md:text-5xl text-3xl">
						CADASTRO ÚNICO
					</h1>
				</div>
				<div className="w-full">
					<CategoryCard
						title="CADASTRO ÚNICO"
						description="Acesso aos Painéis de Monitoramento, Edição de Dados CTR, Formulários e Download de Base de Dados"
						buttons={buttons}
					/>
				</div>
			</div>
		</div>
	)
}