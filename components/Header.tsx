import Link from "next/link"
import styles from "./Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>CUTE THINGS ONLINE</div>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>
          Home
        </Link>
        <Link href="/about" className={styles.navLink}>
          About
        </Link>
        {/* <Link href="/projects" className={styles.navLink}>
          Projects
        </Link> */}
        <Link href="/blog" className={styles.navLink}>
          Videos
        </Link>
        <Link href="/support" className={styles.navLink}>
          Support
        </Link>
        <Link href="/contact" className={styles.navLink}>
          Contact
        </Link>
      </nav>
    </header>
  )
}

