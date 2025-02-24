"use client"
import { useState, useEffect } from "react"
import Header from "../components/Header"
import RetroLoading from "../components/RetroLoading"
import { motion } from "framer-motion"
import Image from "next/image"
import styles from "./page.module.css"
import ProjectGrid from "@/components/ProjectGrid"

const aboutSections = [
  {
    id: 1,
    title: "",
    content: "This project is a love letter to the creative possibilities of technology. Whether you're an artist curious about AI, a coder exploring creativity, or just someone who loves cute little weird things.",
    image: "/images/cute-things-online.png"
  },
  {
    id: 2,
    title: "What We Do",
    content: "Here we share beautiful internet landscapes - aka cute websites - mixing a bit of art and a bit of code to play around the fields of the cyber world.",
  },
  {
    id: 3,
    title: "Join Our Journey",
    content: "So grab a cup of tea, cozy up, and let's dive into the wonderful world of art, code, and AI—one cute thing at a time. 💖",
  }
]

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

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState(1)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 300)
  }, [])

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        {isLoading && <RetroLoading />}
        
        <div className={`${!isLoading ? styles.visible : styles.hidden}`}>
          {/* Welcome Section */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={styles.hero}
          >
            <h1 className={styles.title}>Welcome to Cute Things Online</h1>
            <p className={styles.description}>
              A cozy corner of the internet for pixel art, creative projects, and all things cute!
            </p>
          </motion.div>

   
           

          {/* Projects Section */}
          <section className={styles.projects}>
            <div className={styles.hero}>
              <h4 className={styles.titleContent}>WEBSITES DEVELOPED BY US</h4>
              <ProjectGrid projects={projects} />
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}

