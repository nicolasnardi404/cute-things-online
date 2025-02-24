import Header from "@/components/Header"
import styles from "../../styles/contact.module.css"

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.card}>
          <h1 className={styles.title}>Contact Us</h1>
          <div className={styles.contactInfo}>
            <p>Have questions or want to work with us? 💌</p>
            <div className={styles.services}>
              <p>We specialize in creative code projects:</p>
              <ul>
                <li>✨ Custom Websites</li>
                <li>🎨 Interactive Designs</li>
                <li>🤖 Web Applications</li>
              </ul>
            </div>
            <p>Email us to discuss your project, for any doubts, or suggestions:</p>
            <a href="mailto:your-email@example.com" className={styles.email}>
              nicolasnardi404@gmail.com
            </a>
            <p className={styles.note}>
              We'll get back to you as soon as possible! ✨
            </p>
          </div>
        </div>
      </main>
    </div>
  )
} 