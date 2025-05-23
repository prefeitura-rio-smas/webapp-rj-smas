"use client"

interface MenuItemProps {
  title: string
  onClick: () => void
  isExternal?: boolean
}

export function MenuItem({ title, onClick, isExternal = false }: MenuItemProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center text-sm text-[#193257] dark:text-gray-300 py-2 px-3 rounded hover:bg-[#f3f4f6] dark:hover:bg-[#1a3b6d] hover:text-[#193257] dark:hover:text-white w-full text-left"
    >
      <span className="text-xs mr-2">•</span>
      <span>{title}</span>
      {isExternal && <span className="text-xs ml-1 text-[#4b5563] dark:text-gray-400">(externo)</span>}
    </button>
  )
}
