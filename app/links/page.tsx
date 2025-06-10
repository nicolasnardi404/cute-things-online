"use client"
import { motion } from "framer-motion"
import styles from "./page.module.css"
import { useState, useEffect } from "react"
import RetroLoading from "../../components/RetroLoading"

const websites = [
  {
    id: "0",
    title: "CUTE THINGS ONLINE",
    description: "A cozy corner of the internet for pixel art, creative projects, and all things cute!",
    link: "https://cutethingsonline.com",
    bgColor: "var(--color-pink)"
  },
  {
    id: "1",
    title: "Random Rainbow",
    description: "A cyber art project connecting queer video art through random experiences.",
    link: "https://randomrainbow.art",
    bgColor: "var(--color-baby-blue)"
  },
  {
    id: "2",
    title: "I WANNA BE NADI NICOCO",
    description: "An AI-generated poetry blog inspired by Nadi Nicoco.",
    link: "https://iwannabe.nadinicoco.com",
    bgColor: "var(--color-lavender)"
  },
  {
    id: "4",
    title: "NADI NICOCO",
    description: "Art Portfolio.",
    link: "https://nadinicoco.com",
    bgColor: "var(--color-pink)"
  },
  {
    id: "5",
    title: "QUARTO AMBIENTE",
    description: "Archive of artworks of the collective Quarto Ambiente",
    link: "https://quartoambiente.com.br",
    bgColor: "var(--color-baby-blue)"
  },
]

const games = [
  {
    id: "3",
    title: "SNAKE ON MUSHROOMS",
    description: "A psychedelic twist on the classic Nokia phone game.",
    link: "https://snakeonmushrooms.nadinicoco.com",
    bgColor: "var(--color-lavender)"
  },
  {
    id: "7",
    title: "EAT THE RICH",
    description: "Arcade game about wealth inequality and resource distribution. Control a robot eating billionaires.",
    link: "https://eat-the-rich.nadinicoco.com",
    bgColor: "var(--color-pink)"
  }
]

export default function Links() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 300)
  }, [])

  const renderLinkCard = (item: any, index: number, totalPrevItems: number = 0) => (
    <motion.a
      key={item.id}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.linkCard}
      style={{ backgroundColor: item.bgColor }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { delay: (index + totalPrevItems) * 0.1 } 
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </motion.a>
  )

  return (
    <div className={styles.container}>
      {isLoading && <RetroLoading />}
      
      <div className={`${!isLoading ? styles.visible : styles.hidden}`}>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={styles.header}
        >
          <h1 className={styles.title}>Cute Things Online</h1>
          <p className={styles.subtitle}>code projects by nadi nicoco ♥</p>
        </motion.div>

        <div className={styles.linksContainer}>
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2>Websites</h2>
          </motion.div>

          {websites.map((website, index) => renderLinkCard(website, index))}

          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: websites.length * 0.1 } }}
          >
            <h2>Games</h2>
          </motion.div>

          {games.map((game, index) => renderLinkCard(game, index, websites.length + 1))}
        </div>
      </div>
    </div>
  )
} 