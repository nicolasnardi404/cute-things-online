import Image from "next/image"
import styles from "./ProjectGrid.module.css"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"


type Project = {
  id: string
  title: string
  description: string
  imageUrl: string
  tags?: string[]
}

type ProjectGridProps = {
  projects: Project[]
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className={styles.grid}>
      {projects.map((project) => (
        <HoverCard key={project.id}>
          <HoverCardTrigger asChild>
            <div className={styles.project}>
              <Image
                src={project.imageUrl || "/placeholder.svg"}
                alt={project.title}
                width={200}
                height={200}
                className={styles.image}
              />
              <h3 className={styles.title}>{project.title}</h3>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">{project.title}</h4>
              <p className="text-sm">{project.description}</p>
              <div className="flex gap-2">
                {project.tags?.map((tag) => (
                  <span key={tag} className="text-xs bg-accent px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}

