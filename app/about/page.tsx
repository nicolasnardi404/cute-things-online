"use client"

import { useState, useEffect } from "react"
import Header from "@/components/Header"
import RetroLoading from "@/components/RetroLoading"
import { motion } from "framer-motion"
import styles from "../../styles/about.module.css"
import Image from "next/image"

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

export default function AboutPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState(1)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000)
  }, [])

  if (isLoading) return <RetroLoading />

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={styles.header}
        >
          <h1 className={styles.title}>About Us</h1>
          <p className={styles.subtitle}>Welcome to our pixelated wonderland!</p>
        </motion.div>

        <div className={styles.content}>
          <motion.div 
            className={styles.card}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className={styles.sections}>
              {aboutSections.map((section) => (
                <motion.div
                  key={section.id}
                  className={`${styles.section} ${
                    activeSection === section.id ? styles.active : ""
                  }`}
                  onClick={() => setActiveSection(section.id)}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={styles.sectionContent}>
                    {section.image && (
                      <Image 
                        src={section.image}
                        alt={section.title || "About section image"}
                        width={200}
                        height={200}
                        className={styles.sectionImage}
                      />
                    )}
                    <div>
                      <h2 className={styles.sectionTitle}>{section.title}</h2>
                      <p>{section.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
} 