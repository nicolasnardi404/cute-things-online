"use client"
import { useState, useEffect } from "react"
import Header from "../components/Header"
import RetroLoading from "../components/RetroLoading"
import styles from "./page.module.css"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, [])

  if (isLoading) {
    return <RetroLoading />
  }

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Welcome to Cute Things Online</h1>
          <p className={styles.description}>
            A cozy corner of the internet for pixel art, creative projects, and all things cute!
          </p>
        </section>
        {/* Add more sections here */}
      </main>
    </div>
  )
}

