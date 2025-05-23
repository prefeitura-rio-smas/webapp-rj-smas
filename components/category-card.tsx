"use client"

import { useState, useEffect } from "react"
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
  action: () => void
  internal: boolean
}

interface CategoryCardProps {
  title: string
  description: string
  buttons: Button[]
}

export function CategoryCard({ title, description, buttons }: CategoryCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  const getIcon = () => {
    switch (title) {
      case "PROTEÇÃO SOCIAL BÁSICA":
        return <Shield className="h-16 md:h-24 w-16 md:w-24 text-[#00c2f7] dark:text-sky-400" />
      case "VIGILÂNCIA SOCIOASSISTENCIAL":
        return <FileText className="h-16 md:h-24 w-16 md:w-24 text-[#00c2f7] dark:text-sky-400" />
      case "PROTEÇÃO SOCIAL ESPECIAL":
        return <Home className="h-16 md:h-24 w-16 md:w-24 text-[#00c2f7] dark:text-sky-400" />
      case "CADASTRO ÚNICO":
        return <Users className="h-16 md:h-24 w-16 md:w-24 text-[#00c2f7] dark:text-sky-400" />
      default:
        return <Shield className="h-16 md:h-24 w-16 md:w-24 text-[#00c2f7] dark:text-sky-400" />
    }
  }

  const getButtonIcon = (iconName: string) => {
    switch (iconName) {
      case "emergency":
        return <AlertCircle className="h-10 md:h-16 w-10 md:w-16 text-[#00c2f7] dark:text-sky-400" />
      case "card":
        return <CreditCard className="h-10 md:h-16 w-10 md:w-16 text-[#00c2f7] dark:text-sky-400" />
      case "home":
        return <Home className="h-10 md:h-16 w-10 md:w-16 text-[#00c2f7] dark:text-sky-400" />
      case "document":
        return <FileText2 className="h-10 md:h-16 w-10 md:w-16 text-[#00c2f7] dark:text-sky-400" />
      case "report":
        return <FileText className="h-10 md:h-16 w-10 md:w-16 text-[#00c2f7] dark:text-sky-400" />
      case "people":
        return <Users2 className="h-10 md:h-16 w-10 md:w-16 text-[#00c2f7] dark:text-sky-400" />
      case "management":
        return <ClipboardList className="h-10 md:h-16 w-10 md:w-16 text-[#00c2f7] dark:text-sky-400" />
      case "chart":
        return <BarChart2 className="h-10 md:h-16 w-10 md:w-16 text-[#00c2f7] dark:text-sky-400" />
      case "dashboard":
        return <LineChart className="h-10 md:h-16 w-10 md:w-16 text-[#00c2f7] dark:text-sky-400" />
      case "edit":
        return <Edit className="h-10 md:h-16 w-10 md:w-16 text-[#00c2f7] dark:text-sky-400" />
      case "form":
        return <ClipboardList className="h-10 md:h-16 w-10 md:w-16 text-[#00c2f7] dark:text-sky-400" />
      case "download":
        return <Download className="h-10 md:h-16 w-10 md:w-16 text-[#00c2f7] dark:text-sky-400" />
      default:
        return <FileText className="h-10 md:h-16 w-10 md:w-16 text-[#00c2f7] dark:text-sky-400" />
    }
  }

  // On mobile, clicking the card toggles the hover state
  const handleCardClick = () => {
    if (isMobile) {
      setIsHovered(!isHovered)
    }
  }

  return (
    <div
      className="bg-white dark:bg-[#1a3b6d] rounded-md overflow-hidden transition-all duration-300 cursor-pointer relative h-auto md:h-64 shadow-md border border-[#e5e7eb]"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div className="p-4 md:p-8 flex flex-col md:flex-row md:items-start gap-4 md:gap-6 h-full">
        <div className="rounded-full bg-white dark:bg-[#0a2756] p-4 transition-colors border border-[#e5e7eb] dark:border-[#1a3b6d] mx-auto md:mx-0">
          {getIcon()}
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-[#193257] dark:text-white font-bold text-xl md:text-2xl mb-2 md:mb-3">{title}</h2>
          <p className="text-[#4b5563] dark:text-gray-300 text-sm md:text-base">{description}</p>
        </div>
      </div>

      {/* Submenu que aparece no hover */}
      <div
        className={`absolute inset-0 bg-white dark:bg-[#1a3b6d] transition-opacity duration-300 flex items-center justify-center ${
          isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 p-4 md:p-6">
          {buttons.map((button) => (
            <button
              key={button.id}
              onClick={(e) => {
                e.stopPropagation()
                button.action()
                setIsHovered(false)
              }}
              className="flex flex-col items-center w-24 md:w-32 text-center group cursor-pointer"
            >
              <div className="bg-white dark:bg-[#0a2756] p-3 md:p-4 rounded-md mb-2 md:mb-3 transition-all duration-200 group-hover:border-[#00c2f7] dark:group-hover:bg-sky-700 group-active:border-[#00c2f7] dark:group-active:bg-sky-800 border border-[#e5e7eb] dark:border-[#1a3b6d]">
                {getButtonIcon(button.icon)}
              </div>
              <span className="text-[#193257] dark:text-white text-sm md:text-base group-hover:text-[#00c2f7] dark:group-hover:text-sky-300">
                {button.title}
              </span>
              {!button.internal && (
                <span className="text-[#4b5563] dark:text-gray-400 text-xs mt-1">(link externo)</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
