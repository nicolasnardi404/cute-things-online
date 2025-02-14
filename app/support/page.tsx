"use client"

import Header from "@/components/Header"
import styles from "./page.module.css"
import { motion } from "framer-motion"

const supportOptions = [
  {
    title: "Buy Me a Coffee",
    description: "Support my work with a virtual coffee! Every cup helps keep the cute vibes flowing ☕",
    link: "https://buymeacoffee.com/nadinicoco",
    icon: "☕"
  },
  {
    title: "Patreon",
    description: "Join my Patreon for exclusive cute content, behind-the-scenes, and monthly digital goodies! 🎨",
    link: "https://patreon.com/nadinicoco",
    icon: "🎨"
  },
  {
    title: "Ko-fi",
    description: "Support my creative journey on Ko-fi and get access to special downloads and updates! 💖",
    link: "https://ko-fi.com/nadinicoco",
    icon: "💖"
  }
]

export default function SupportPage() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>Support My Work</h1>
          <p className={styles.subtitle}>Choose your favorite way to support! Every bit helps keep the cuteness alive ✨</p>
        </div>
        <div className={styles.grid}>
          {supportOptions.map((option) => (
            <motion.div
              key={option.title}
              className={styles.card}
              onClick={() => window.open(option.link, '_blank')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={styles.icon}>{option.icon}</div>
              <h2 className={styles.cardTitle}>{option.title}</h2>
              <p className={styles.description}>{option.description}</p>
              <button className={styles.button}>
                Support on {option.title} →
              </button>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
} 