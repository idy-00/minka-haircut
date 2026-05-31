import styles from './Hero.module.css'
import Spotlight from './Spotlight'
import BackgroundBeams from './BackgroundBeams'

export default function Hero() {
  return (
    <section className={styles.hero} id="accueil">

      <img src="/panneau.jpg" className={styles.img} alt="" />
      <BackgroundBeams />
      <Spotlight fill="#C41E1E" />
      <div className={styles.grid} aria-hidden="true" />

      {/* ── Texte principal ── */}
      <div className={styles.content}>
        <span className={styles.eyebrow}>Salon de Coiffure — Sacré Cœur 3, Dakar</span>

        <h1 className={styles.title}>
          Minka<br />
          Hair<em>.</em><br />
          Cut<em>.</em>
        </h1>

        <span className={styles.titleLine} aria-hidden="true" />

        <div className={styles.actions}>
          <a href="#booking" className={styles.btnPrimary}>
            <span>Prendre rendez-vous</span>
          </a>
          <a href="#services" className={styles.btnGhost}>
            Nos services
            <span className={styles.btnGhostArrow} aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* ── Barre de stats ── */}
      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statNum}>08<em>+</em></span>
          <span className={styles.statLabel}>Services proposés</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum}>7j<em>/7</em></span>
          <span className={styles.statLabel}>Ouvert toute la semaine</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum}>3<em>×</em></span>
          <span className={styles.statLabel}>Clientèles · Homme · Femme · Enfant</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scroll}>
        <span className={styles.scrollLine} />
        <span>Défiler</span>
      </div>

    </section>
  )
}
