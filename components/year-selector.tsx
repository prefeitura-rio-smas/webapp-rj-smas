"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"

interface YearSelectorProps {
  currentYear: string
  onYearChange: (year: string) => void
}

export function YearSelector({ currentYear, onYearChange }: YearSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const years = ["2025", "2024"]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsOpen(false)
    }

    if (isOpen) {
      document.addEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className="relative inline-block text-left w-full max-w-md mx-auto mb-4 md:mb-6">
      <button
        onClick={(e) => {
          e.stopPropagation()
          setIsOpen(!isOpen)
        }}
        className="w-full flex items-center justify-between bg-white dark:bg-[#0a2756] text-[#0d2953] dark:text-white p-3 md:p-4 rounded-md border border-[#c1cee3] dark:border-[#1a3b6d] shadow-sm hover:bg-[#f8fafc] dark:hover:bg-[#1a3b6d]"
      >
        <span className="font-medium text-sm md:text-base">Painéis de Monitoramento {currentYear}</span>
        <ChevronDown className="h-4 w-4 md:h-5 md:w-5" />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white dark:bg-[#0a2756] rounded-md shadow-lg border border-[#c1cee3] dark:border-[#1a3b6d]">
          <div className="py-1">
            {years.map((year) => (
              <button
                key={year}
                onClick={(e) => {
                  e.stopPropagation()
                  onYearChange(year)
                  setIsOpen(false)
                }}
                className={`w-full text-left px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-[#0d2953] dark:text-white hover:bg-[#f0f4fa] dark:hover:bg-[#1a3b6d] ${
                  year === currentYear ? "font-medium bg-[#f0f4fa] dark:bg-[#1a3b6d]" : ""
                }`}
              >
                Painéis de Monitoramento {year}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
