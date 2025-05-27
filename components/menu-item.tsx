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
      className="flex items-center text-sm text-primary py-2 px-3 rounded hover:bg-hover hover:text-primary w-full text-left transition-colors"
    >
      <span className="text-xs mr-2">•</span>
      <span>{title}</span>
      {isExternal && (
        <span className="text-xs ml-1 text-muted">(externo)</span>
      )}
    </button>
  )
}
