"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import styles from "../../styles/poster-generator.module.css"
import { useState } from "react"
import { motion } from "framer-motion"
import html2canvas from 'html2canvas';

type PosterSize = 'youtube' | 'tiktok' | 'instagram'

const SIZES = {
  youtube: { width: 1280, height: 720 },
  tiktok: { width: 1080, height: 1920 },
  instagram: { width: 1080, height: 1080 }
}

const COLORS = [
  { name: "Pink", value: "var(--color-pink)" },
  { name: "Baby Blue", value: "var(--color-baby-blue)" },
  { name: "Lavender", value: "var(--color-lavender)" }
]

export default function SecretPosterGenerator() {
  const [title, setTitle] = useState("")
  const [bgColor, setBgColor] = useState(COLORS[0].value)
  const [textPosition, setTextPosition] = useState<'center' | 'top' | 'bottom'>('center')
  const [selectedSize, setSelectedSize] = useState<PosterSize>('youtube')
  
  const handleDownload = () => {
    const poster = document.getElementById('poster')
    if (poster) {
      html2canvas(poster).then(canvas => {
        const link = document.createElement('a')
        link.download = 'cute-poster.png'
        link.href = canvas.toDataURL()
        link.click()
      })
    }
  }

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.controls}>
          <h1 className={styles.title}>✨ Cute Poster Generator ✨</h1>
          
          <div className={styles.inputGroup}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your title"
              className={styles.input}
            />

            <div className={styles.colorPicker}>
              {COLORS.map((color) => (
                <button
                  key={color.name}
                  className={`${styles.colorButton} ${bgColor === color.value ? styles.active : ''}`}
                  style={{ backgroundColor: color.value }}
                  onClick={() => setBgColor(color.value)}
                />
              ))}
            </div>

            <div className={styles.options}>
              <select 
                value={selectedSize} 
                onChange={(e) => setSelectedSize(e.target.value as PosterSize)}
                className={styles.select}
              >
                <option value="youtube">YouTube (1280x720)</option>
                <option value="tiktok">TikTok (1080x1920)</option>
                <option value="instagram">Instagram (1080x1080)</option>
              </select>

              <select
                value={textPosition}
                onChange={(e) => setTextPosition(e.target.value as 'center' | 'top' | 'bottom')}
                className={styles.select}
              >
                <option value="top">Text Top</option>
                <option value="center">Text Center</option>
                <option value="bottom">Text Bottom</option>
              </select>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={styles.button}
              onClick={handleDownload}
            >
              Download Poster ✨
            </motion.button>
          </div>
        </div>

        <div 
          id="poster"
          className={styles.posterPreview}
          style={{ 
            backgroundColor: bgColor,
            aspectRatio: `${SIZES[selectedSize].width}/${SIZES[selectedSize].height}`
          }}
        >
          <div className={styles.posterContent}>
            <h2 className={`${styles.posterTitle} ${styles[textPosition]}`}>
              {title || "Your Title Here"}
            </h2>
            <div className={styles.posterFooter}>
              <p>Made with ♥ by Cute Things Online</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 