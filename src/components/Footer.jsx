import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.left}>MHC<em>.</em></span>
      <span className={styles.right}>&copy; 2026 Minka Hair Cut — Dakar, Sénégal</span>
    </footer>
  )
}
