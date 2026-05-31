import styles from './Footer.module.css'
import { FaInstagram, FaTiktok, FaWhatsapp, FaSnapchat } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.left}>MHC<em>.</em></span>
      <div className={styles.socials}>
        <a href="https://www.instagram.com/minkahaircut/" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="Instagram">
          <FaInstagram size={18} color="#E1306C" />
        </a>
        <a href="https://www.tiktok.com/@minkahaircut" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="TikTok">
          <FaTiktok size={18} color="#ffffff" />
        </a>
        <a href="https://wa.me/221785396996" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="WhatsApp">
          <FaWhatsapp size={18} color="#25D366" />
        </a>
        <a href="#" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="Snapchat">
          <FaSnapchat size={18} color="#FFFC00" />
        </a>
      </div>
      <span className={styles.right}>&copy; 2026 Minka Hair Cut — Dakar, Sénégal</span>
    </footer>
  )
}
