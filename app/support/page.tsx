"use client"

import Header from "@/components/Header"
import styles from "../../styles/suport.module.css"
import { motion } from "framer-motion"
import React from "react"

const supportOptions = [
    {
        title: "Support",
        description: "Want to support my work with a one-time donation? Every contribution helps keep the cute vibes flowing! ✨",
        link: "https://buy.stripe.com/4gwbM07UKchX77OdQS",  // Replace with your actual Stripe payment link
        icon: "/images/heart.png"
      },
  {
    title: "Hire Us",
    description: "Need a cute website or design? Let's work together to bring your vision to life! Contact me to discuss your project 🌟",
    link: "/contact",
    icon: "/images/robots-working.png"
  }
]

export default function SupportPage() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>Support This Project</h1>
          <p className={styles.subtitle}>Choose your favorite way to support! Every bit helps keep the cuteness alive ✨</p>
        </div>
        
        <div className={styles.grid}>
          {supportOptions.map((option) => (
            <motion.div
              key={option.title}
              className={styles.card}
              onClick={() => option.link && window.open(option.link, '_blank')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={styles.icon}>
                <img src={option.icon} alt={option.title} width={120} height={120} />
              </div>
              {/* <h2 className={styles.cardTitle}>{option.title}</h2> */}
              <p className={styles.description}>{option.description}</p>
              <button className={styles.button}>
                {option.title} →
              </button>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
} 