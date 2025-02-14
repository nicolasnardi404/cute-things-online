"use client"
import { useState, useEffect } from "react"
import Header from "../components/Header"
import RetroLoading from "../components/RetroLoading"
import styles from "./page.module.css"


export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Very brief loading time - just enough to show the animation
    setTimeout(() => setIsLoading(false), 300)
  }, [])

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        {isLoading && <RetroLoading />}
        <section className={`${styles.hero} ${!isLoading ? styles.visible : styles.hidden}`}>
          <h1 className={styles.title}>Welcome to Cute Things Online</h1>
          <p className={styles.description}>
            A cozy corner of the internet for pixel art, creative projects, and all things cute!
          </p>
        </section>
      </main>
    </div>
  )
}

