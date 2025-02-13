import styles from "./RetroLoading.module.css"

export default function RetroLoading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingText}>Loading...</div>
      <div className={styles.loadingBar}>
        <div className={styles.loadingProgress}></div>
      </div>
    </div>
  )
}

