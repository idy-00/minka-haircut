import styles from './Statement.module.css'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Statement() {
  const leftRef  = useScrollReveal({ threshold: 0.2 })
  const rightRef = useScrollReveal({ threshold: 0.2 })

  return (
    <section className={styles.section}>

      {/* Photo de fond */}
      <img src="/services/salon3.jpg" className={styles.bg} alt="" aria-hidden="true" />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.inner}>
        <div ref={leftRef} className={`${styles.left} reveal-left`}>
          <p className={styles.text}>
            <em>Votre style,</em><br />
            notre métier.
          </p>
        </div>

        <div ref={rightRef} className={`${styles.right} reveal`}>
          <p className={styles.sub}>
            Depuis l'ouverture, Minka Hair Cut s'est imposé comme
            le salon de référence à Sacré Cœur 3. Précision,
            élégance, et accueil chaleureux — à chaque visite.
          </p>
          <a href="#booking" className={styles.btn}>
            Réserver maintenant
            <span className={styles.btnArrow} aria-hidden="true" />
          </a>
        </div>
      </div>

    </section>
  )
}
