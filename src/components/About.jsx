import styles from './About.module.css'
import useScrollReveal from '../hooks/useScrollReveal'

export default function About() {
  const imgRef  = useScrollReveal({ threshold: 0.1 })
  const textRef = useScrollReveal({ threshold: 0.1 })

  return (
    <section className={styles.section} id="about">

      {/* ── Col gauche — photo ── */}
      <div ref={imgRef} className={`${styles.imageCol} reveal-left`}>
        <img src="/services/salon1.jpg" alt="Intérieur Minka Hair Cut" className={styles.photo} />
        <div className={styles.photoOverlay} />
        <div className={styles.photoCaption}>
          <span className={styles.photoCaptionLabel}>Minka Hair Cut</span>
          <span className={styles.photoCaptionSub}>Sacré Cœur 3, Dakar</span>
        </div>
        {/* Tag flottant */}
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          <span>Ouvert 7j / 7</span>
        </div>
      </div>

      {/* ── Col droite — texte ── */}
      <div ref={textRef} className={`${styles.textCol} reveal`}>

        <span className={styles.eyebrow}>Notre histoire</span>

        <h2 className={styles.statement}>
          Le style<br />
          n'est pas<br />
          un <em>luxe.</em>
        </h2>

        <p className={styles.body}>
          Chez Minka Hair Cut, on croit que chaque personne mérite
          d'être soignée — peu importe l'âge, le style ou le budget.
          Notre équipe passionnée vous accueille dans un espace chaleureux,
          avec des outils de qualité et des mains expertes.
        </p>

        <div className={styles.pillars}>
          <div className={styles.pillar}>
            <span className={styles.pillarNum}>08</span>
            <span className={styles.pillarLabel}>Services</span>
          </div>
          <div className={styles.pillar}>
            <span className={styles.pillarNum}>7j</span>
            <span className={styles.pillarLabel}>Sur 7</span>
          </div>
          <div className={styles.pillar}>
            <span className={styles.pillarNum}>3</span>
            <span className={styles.pillarLabel}>Clientèles</span>
          </div>
        </div>

        <a href="#booking" className={styles.link}>
          Réserver une séance
          <span className={styles.linkArrow} aria-hidden="true" />
        </a>

      </div>

    </section>
  )
}
