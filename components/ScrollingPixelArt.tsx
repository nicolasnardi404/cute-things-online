"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import styles from "./ScrollingPixelArt.module.css"

export default function ScrollingPixelArt() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { top } = containerRef.current.getBoundingClientRect()
        setScrollPosition(window.innerHeight - top)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={containerRef} className={styles.container}>
      <Image
        src="/pixel-character.png"
        alt="Pixel Art Character"
        width={64}
        height={64}
        className={styles.character}
        style={{ transform: `translateY(${scrollPosition * 0.5}px)` }}
      />
    </div>
  )
}

