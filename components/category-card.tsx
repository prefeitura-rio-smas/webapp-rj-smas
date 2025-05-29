"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Shield,
  FileText,
  Home,
  Users,
  AlertCircle,
  CreditCard,
  FileTextIcon as FileText2,
  Users2,
  BarChart2,
  Edit,
  ClipboardList,
  Download,
  LineChart,
} from "lucide-react"

interface Button {
  id: number
  title: string
  icon: string
  href: string
  internal?: boolean
  external?: boolean
}

interface CategoryCardProps {
  title: string
  description: string
  buttons: Button[]
}

export function CategoryCard({ title, description, buttons }: CategoryCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)
    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  const getIcon = () => {
    switch (title) {
      case "PROTEÇÃO SOCIAL BÁSICA":
        return <Shield className="h-16 md:h-24 w-16 md:w-24 text-secondary" />
      case "VIGILÂNCIA SOCIOASSISTENCIAL":
        return <FileText className="h-16 md:h-24 w-16 md:w-24 text-secondary" />
      case "PROTEÇÃO SOCIAL ESPECIAL":
        return <Home className="h-16 md:h-24 w-16 md:w-24 text-secondary" />
      case "CADASTRO ÚNICO":
        return <Users className="h-16 md:h-24 w-16 md:w-24 text-secondary" />
      default:
        return <Shield className="h-16 md:h-24 w-16 md:w-24 text-secondary" />
    }
  }

  const getButtonIcon = (iconName: string) => {
    const iconProps = "h-10 md:h-16 w-10 md:w-16 text-secondary"
    switch (iconName) {
      case "emergency":
        return <AlertCircle className={iconProps} />
      case "card":
        return <CreditCard className={iconProps} />
      case "home":
        return <Home className={iconProps} />
      case "document":
        return <FileText2 className={iconProps} />
      case "report":
        return <FileText className={iconProps} />
      case "people":
        return <Users2 className={iconProps} />
      case "management":
        return <ClipboardList className={iconProps} />
      case "chart":
        return <BarChart2 className={iconProps} />
      case "dashboard":
        return <LineChart className={iconProps} />
      case "edit":
        return <Edit className={iconProps} />
      case "form":
        return <ClipboardList className={iconProps} />
      case "download":
        return <Download className={iconProps} />
      default:
        return <FileText className={iconProps} />
    }
  }

  const handleCardClick = () => {
    if (isMobile) {
      setIsHovered(!isHovered)
    }
  }

  return (
    <div
      className="bg-surface rounded-md overflow-hidden transition-all duration-300 cursor-pointer relative h-auto md:h-64 shadow-md border border-border hover:bg-hover"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div className="p-4 md:p-8 flex flex-col md:flex-row md:items-start gap-4 md:gap-6 h-full">
        <div className="rounded-full bg-surface-alt p-4 transition-colors border border-border mx-auto md:mx-0">
          {getIcon()}
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-primary font-bold text-xl md:text-2xl mb-2 md:mb-3">{title}</h2>
          <p className="text-foreground text-sm md:text-base">{description}</p>
        </div>
      </div>

      <div
        className={`absolute inset-0 bg-surface transition-opacity duration-300 flex items-center justify-center ${
          isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 p-4 md:p-6">
          {buttons.map((button) =>
            button.internal ? (
              <Link
                key={button.id}
                href={button.href}
                className="flex flex-col items-center w-24 md:w-32 text-center group cursor-pointer
                  bg-surface border border-border rounded-lg
                  transition
                  outline-none
                  hover:bg-hover hover:border-primary hover:shadow-lg
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                onClick={() => setIsHovered(false)}
              >
                <div className="p-3 md:p-4 rounded-md mb-2 md:mb-3 flex items-center justify-center">
                  {getButtonIcon(button.icon)}
                </div>
                <span className="text-primary text-sm md:text-base group-hover:text-primary transition-colors">
                  {button.title}
                </span>
              </Link>
            ) : (
              <a
                key={button.id}
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center w-24 md:w-32 text-center group cursor-pointer
                  bg-surface border border-border rounded-lg
                  transition
                  outline-none
                  hover:bg-hover hover:border-primary hover:shadow-lg
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                onClick={() => setIsHovered(false)}
              >
                <div className="p-3 md:p-4 rounded-md mb-2 md:mb-3 flex items-center justify-center">
                  {getButtonIcon(button.icon)}
                </div>
                <span className="text-primary text-sm md:text-base group-hover:text-primary transition-colors">
                  {button.title}
                </span>
                <span className="text-muted text-xs mt-1">(link externo)</span>
              </a>
            )
          )}
        </div>
      </div>
    </div>
  )
}
