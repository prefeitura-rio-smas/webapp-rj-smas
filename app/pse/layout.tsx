"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Menu } from "@/components/menu"

export default function PseLayout({ children }: { children: React.ReactNode }) {
  const [sidebarVisible, setSidebarVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [currentPage, setCurrentPage] = useState<string | null>(null)

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768)
    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  const Overlay = () =>
    isMobile && sidebarVisible ? (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={() => setSidebarVisible(false)}
      />
    ) : null

  return (
    <>
      <Header
        sidebarVisible={sidebarVisible}
        setSidebarVisible={setSidebarVisible}
        setCurrentPage={setCurrentPage}
      />
      <Overlay />
      <div className="flex relative">
        {sidebarVisible && (
          <Menu
            sidebarVisible={sidebarVisible}
            setSidebarVisible={setSidebarVisible}
            setCurrentPage={setCurrentPage}
            isMobile={isMobile}
          />
        )}
        <main
          className={`flex-1 p-4 md:p-8 transition-all duration-300 ${
            sidebarVisible && isMobile ? "hidden" : ""
          }`}
        >
          {children}
        </main>
      </div>
    </>
  )
}