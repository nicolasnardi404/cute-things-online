"use client"

import Header from "@/components/Header"
import styles from "../../styles/blog.module.css"
import { motion } from "framer-motion"

const blogPosts = [
  {
    id: "1",
    title: "Making Cute Things with AI",
    date: "2024-03-15",
    summary: "Exploring how AI can help create adorable digital art and experiences ✨",
    tags: ["AI", "Art", "Tutorial"],
    bgColor: "var(--color-pink)"
  },
  {
    id: "2",
    title: "The Power of Pixel Art",
    date: "2024-03-10",
    summary: "Why pixel art continues to capture hearts in the digital age 👾",
    tags: ["Pixel Art", "Design", "Retro"],
    bgColor: "var(--color-baby-blue)"
  },
  {
    id: "3",
    title: "Cute Code: Making Tech Adorable",
    date: "2024-03-05",
    summary: "How to infuse cuteness into your programming projects 💖",
    tags: ["Code", "Design", "Tutorial"],
    bgColor: "var(--color-lavender)"
  }
]

export default function BlogPage() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>Cute Blog</h1>
          <p className={styles.subtitle}>Exploring the intersection of cuteness and technology ✨</p>
        </div>
        <div className={styles.grid}>
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              className={styles.post}
              style={{ backgroundColor: post.bgColor }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h2 className={styles.postTitle}>{post.title}</h2>
              <time className={styles.date}>{post.date}</time>
              <p className={styles.summary}>{post.summary}</p>
              <div className={styles.tags}>
                {post.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <button className={styles.readMore}>Read More →</button>
            </motion.article>
          ))}
        </div>
      </main>
    </div>
  )
} 