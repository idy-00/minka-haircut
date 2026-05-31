import styles from './Contact.module.css'
import useScrollReveal from '../hooks/useScrollReveal'
import { FaInstagram, FaTiktok, FaWhatsapp, FaSnapchat } from 'react-icons/fa6'

export default function Contact() {
  const topRef  = useScrollReveal({ threshold: 0.15 })
  const col1Ref = useScrollReveal({ threshold: 0.1 })
  const col2Ref = useScrollReveal({ threshold: 0.1 })
  const col3Ref = useScrollReveal({ threshold: 0.1 })
  const col4Ref = useScrollReveal({ threshold: 0.1 })

  return (
    <section className={styles.section} id="contact">

      <div ref={topRef} className={`${styles.top} reveal`}>
        <span className={styles.eyebrow}>Contact</span>
        <h2 className={styles.title}>Passez nous<br />voir.</h2>
      </div>

      <div className={styles.grid}>

        <div ref={col1Ref} className={`${styles.col} reveal stagger-1`}>
          <span className={styles.colLabel}>Adresse</span>
          <p className={styles.colText}>
            Sacré Cœur 3<br />
            En face de la mosquée<br />
            Dakar, Sénégal
          </p>
          <a
            href="https://maps.app.goo.gl/C43wBkMnzRLQMCmA7"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            Voir sur la carte <span>→</span>
          </a>
        </div>

        <div ref={col2Ref} className={`${styles.col} reveal stagger-2`}>
          <span className={styles.colLabel}>Téléphone</span>
          <a href="tel:+221785396996" className={styles.bigLink}>+221 78 539 69 96</a>
          <a href="tel:+221338316568" className={styles.bigLink}>+221 338 316 568</a>
        </div>

        <div ref={col3Ref} className={`${styles.col} reveal stagger-3`}>
          <span className={styles.colLabel}>Réseaux</span>
          <div className={styles.socialGrid}>
            <a href="https://www.instagram.com/minkahaircut/" target="_blank" rel="noreferrer" className={`${styles.socialCard} ${styles.socialIg}`}>
              <FaInstagram size={28} color="#E1306C" />
              <span className={styles.socialName}>Instagram</span>
              <span className={styles.socialHandle}>@minkahaircut</span>
            </a>
            <a href="https://www.tiktok.com/@minkahaircut" target="_blank" rel="noreferrer" className={`${styles.socialCard} ${styles.socialTt}`}>
              <FaTiktok size={28} color="#ffffff" />
              <span className={styles.socialName}>TikTok</span>
              <span className={styles.socialHandle}>@minkahaircut</span>
            </a>
            <a href="https://wa.me/221785396996" target="_blank" rel="noreferrer" className={`${styles.socialCard} ${styles.socialWa}`}>
              <FaWhatsapp size={28} color="#25D366" />
              <span className={styles.socialName}>WhatsApp</span>
              <span className={styles.socialHandle}>+221 78 539 69 96</span>
            </a>
            <a href="#" target="_blank" rel="noreferrer" className={`${styles.socialCard} ${styles.socialSn}`}>
              <FaSnapchat size={28} color="#FFFC00" />
              <span className={styles.socialName}>Snapchat</span>
              <span className={styles.socialHandle}>minkahaircut</span>
            </a>
          </div>
        </div>

        <div ref={col4Ref} className={`${styles.col} reveal stagger-4`}>
          <span className={styles.colLabel}>Horaires</span>
          {[
            { day: 'Lun — Ven', time: '08h — 20h' },
            { day: 'Samedi',    time: '08h — 22h' },
            { day: 'Dimanche',  time: '10h — 18h' },
          ].map((h, i) => (
            <div key={i} className={styles.hour}>
              <span className={styles.day}>{h.day}</span>
              <span className={styles.time}>{h.time}</span>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}
