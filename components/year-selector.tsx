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
        className="w-full flex items-center justify-between
          bg-surface text-primary border border-border
          p-3 md:p-4 rounded-md shadow-sm
          hover:bg-hover transition
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
      >
        <span className="font-medium text-sm md:text-base">Painéis de Monitoramento {currentYear}</span>
        <ChevronDown className="h-4 w-4 md:h-5 md:w-5" />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-surface text-primary rounded-md shadow-lg border border-border">
          <div className="py-1">
            {years.map((year) => (
              <button
                key={year}
                onClick={(e) => {
                  e.stopPropagation()
                  onYearChange(year)
                  setIsOpen(false)
                }}
                className={`w-full text-left px-3 md:px-4 py-2 md:py-3 text-sm md:text-base
                  text-primary
                  hover:bg-hover hover:text-primary
                  rounded-md transition
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary
                  ${year === currentYear ? "font-bold bg-hover text-primary" : ""}
                `}
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
