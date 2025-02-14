"use client"

import Header from "@/components/Header"
import ProjectGrid from "@/components/ProjectGrid"
import styles from "../../styles/projects.module.css"

const projects = [
  {
    id: "1",
    title: "Pixel Pet",
    description: "A virtual pet game with cute pixel graphics",
    imageUrl: "/projects/pixel-pet.png",
    tags: ["Game", "Pixel Art", "Interactive"]
  },
  // Add more projects...
]

export default function ProjectsPage() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>Cute Projects</h1>
        </div>
        <ProjectGrid projects={projects} />
      </main>
    </div>
  )
} 