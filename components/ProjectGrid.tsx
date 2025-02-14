import Image from "next/image"
import styles from "./ProjectGrid.module.css"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"
import { motion } from "framer-motion"


type Project = {
  id: string
  title: string
  description: string
  tags?: string[]
  link?: string
  bgColor?: string
}

type ProjectGridProps = {
  projects: Project[]
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className={styles.grid}>
      {projects.map((project) => (
        <motion.div 
          key={project.id}
          className={`${styles.project} ${project.bgColor === 'var(--color-baby-blue)' ? styles.blueCard : ''}`}
          onClick={() => project.link && window.open(project.link, '_blank')}
          style={{ 
            cursor: project.link ? 'pointer' : 'default',
            backgroundColor: project.bgColor || 'var(--color-white)'
          }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
          }}
          whileTap={{ scale: 0.95 }}
        >
          <div className={styles.content}>
            <div className={styles.defaultContent}>
              <h3 className={styles.title}>{project.title}</h3>
              <div className={styles.mobileDescription}>{project.description}</div>
              <div className={styles.tags}>
                {project.tags?.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.hoverContent}>
              <p className={styles.description}>{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.visitLink}
              >
                Visit →
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

