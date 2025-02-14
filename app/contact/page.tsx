"use client"

import Header from "@/components/Header"
import styles from "../../styles/contact.module.css"
import { useToast } from "@/components/ui/use-toast"
import { Progress } from "@/components/ui/progress"
import { useState } from "react"

export default function ContactPage() {
  const { toast } = useToast()
  const [progress, setProgress] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setProgress(0)
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          toast({
            title: "Message Sent! 💌",
            description: "We'll get back to you soon with lots of cute energy! ✨",
          })
          return 100
        }
        return prev + 10
      })
    }, 100)
  }

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.card}>
          <h1 className={styles.title}>Send us a Message</h1>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              placeholder="Your Email"
              className={styles.input}
              required
            />
            <textarea
              placeholder="Your Message"
              className={styles.textarea}
              rows={4}
              required
            />
            <button type="submit" className={styles.button}>
              Send Message ✨
            </button>
            {progress > 0 && <Progress value={progress} className={styles.progress} />}
          </form>
        </div>
      </main>
    </div>
  )
} 