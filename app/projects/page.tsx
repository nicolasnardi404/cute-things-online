"use client"

import Header from "@/components/Header"
import ProjectGrid from "@/components/ProjectGrid"
import styles from "../../styles/projects.module.css"

const projects = [
  {
    id: "1",
    title: "Random Rainbow",
    description: "A cyber art project connecting queer video art through random experiences. Click to discover diverse video art pieces from the community.",
    tags: ["Art", "Interactive", "Community", "Video"],
    link: "https://randomrainbow.art",
    bgColor: "var(--color-pink)"
  },
  {
    id: "2",
    title: "I WANNA BE NADI NICOCO",
    description: "An AI-generated poetry blog inspired by Nadi Nicoco. Daily machine-generated poems in Nicoco's style, each exploring a random topic.",
    tags: ["AI", "Poetry", "Blog", "Art"],
    link: "https://iwannabenadinicoco.com",
    bgColor: "var(--color-baby-blue)"
  },
  {
    id: "3",
    title: "SNAKE ON MUSHROOMS",
    description: "A psychedelic twist on the classic Nokia phone game. Experience the snake's trippy journey through colorful landscapes.",
    tags: ["Game", "Retro", "Interactive", "Pixel Art"],
    link: "https://snakeonmushrooms.nadinicoco.com",
    bgColor: "var(--color-lavender)"
  }
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