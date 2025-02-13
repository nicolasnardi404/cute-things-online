import type React from "react"
import { motion } from "framer-motion"
import styles from "./BouncyButton.module.css"

type BouncyButtonProps = {
  children: React.ReactNode
  onClick: () => void
}

export default function BouncyButton({ children, onClick }: BouncyButtonProps) {
  return (
    <motion.button className={styles.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={onClick}>
      {children}
    </motion.button>
  )
}

