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
    link: "https://iwannabe.nadinicoco.com",
    bgColor: "var(--color-baby-blue)"
  },
  {
    id: "3",
    title: "SNAKE ON MUSHROOMS",
    description: "A psychedelic twist on the classic Nokia phone game. Experience the snake's trippy journey through colorful landscapes.",
    tags: ["Game", "Retro", "Interactive", "Pixel Art"],
    link: "https://snakeonmushrooms.nadinicoco.com",
    bgColor: "var(--color-lavender)"
  },
  {
    id: "4",
    title: "NADI NICOCO",
    description: "An experimental portfolio showcasing a Brazilian artist's work with text, image, and sound. Explore an interactive journey through various media and artistic expressions.",
    tags: ["Art", "Portfolio", "Multimedia"],
    link: "https://nadinicoco.com",
    bgColor: "var(--color-lavender)"
  },
  {
    id: "5",
    title: "QUARTO AMBIENTE",
    description: "Archive of a Brazilian art collective's experimental films, zines, and performances from 2014-2016. Download zines and explore their artistic legacy through an interactive gallery.",
    tags: ["Art", "Archive", "Collective", "Zines"],
    link: "https://quartoambiente.com.br",
    bgColor: "var(--color-pink)"
  },
  {
    id: "6",
    title: "CYBER PLANTA",
    description: "An AI-driven platform sharing knowledge about bio-agriculture, fungi, and eco-feminism through an interactive chatbot. Featuring AI-generated content about biodiversity and sustainability.",
    tags: ["AI", "Education", "Sustainability", "Interactive"],
    link: "https://cyberplanta.com",
    bgColor: "var(--color-baby-blue)"
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