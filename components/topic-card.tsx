import type { ReactNode } from "react"

interface TopicCardProps {
  title: string
  description: string
  icon: ReactNode
}

export function TopicCard({ title, description, icon }: TopicCardProps) {
  return (
    <div className="bg-[#1a3b6d] rounded-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/20 hover:translate-y-[-5px] cursor-pointer group">
      <div className="p-6 flex items-start gap-4">
        <div className="rounded-full bg-[#0a2756] p-3 group-hover:bg-sky-600/20 transition-colors">{icon}</div>
        <div>
          <h2 className="text-white font-bold text-lg mb-1">{title}</h2>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}
