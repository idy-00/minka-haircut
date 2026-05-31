import { useState, useRef, useEffect } from 'react'
import styles from './Services.module.css'

const SERVICES = [
  { name: 'Coupes Tendance',   tag: 'Homme · Femme · Enfant',   img: '/services/s1.jpg'     },
  { name: 'Dégradés & Fades',  tag: 'Skin Fade · Mid · High',   img: '/services/s6.jpg'     },
  { name: 'Barbe & Rasage',    tag: 'Traditionnel · Précision',  img: '/services/s5.jpg'     },
  { name: 'Soins Capillaires', tag: 'Traitement · Hydratation',  img: '/services/s8.jpg'     },
  { name: 'Coloration',        tag: 'Tendance · Sur mesure',     img: '/services/salon2.jpg' },
  { name: 'Locks',             tag: 'Pose & Entretien',          img: '/services/locks1.jpg' },
  { name: 'Coiffures Enfants', tag: 'Dès 3 ans',                 img: '/services/child_haircut.jpg' },
  { name: 'Déplacement',       tag: 'À domicile · Sur demande',  img: '/services/s12.jpg'    },
]

const isTouch = typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches

export default function Services() {
  const [active, setActive] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.dataset.visible = 'true'; observer.unobserve(el) } },
      { threshold: 0.04 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  function handleEnter(i) { if (!isTouch) setActive(i) }
  function handleLeave()  { if (!isTouch) setActive(null) }
  function handleTap(i)   { if (isTouch) setActive(p => p === i ? null : i) }

  return (
    <section ref={sectionRef} className={styles.section} id="services">

      <div className={styles.header}>
        <span className={styles.eyebrow}>Ce que nous faisons</span>
        <div className={styles.titleRow}>
          <h2 className={styles.title}>Nos <em>services</em></h2>
          <a href="#booking" className={styles.cta}>Prendre RDV →</a>
        </div>
      </div>

      <div className={styles.body}>

        {/* ── Liste éditoriale (desktop) + cartes (mobile) ── */}
        <ul className={styles.list}>
          {SERVICES.map((s, i) => (
            <li
              key={i}
              className={`${styles.row} ${active === i ? styles.rowActive : ''}`}
              style={{ '--i': i }}
              onMouseEnter={() => handleEnter(i)}
              onMouseLeave={handleLeave}
              onTouchEnd={() => handleTap(i)}
            >
              {/* Image — visible sur mobile comme fond de carte */}
              <img src={s.img} alt={s.name} className={styles.cardImg} loading="lazy" />
              <div className={styles.cardOverlay} />

              {/* Contenu */}
              <span className={styles.sweep} aria-hidden="true" />
              <span className={styles.num}>0{i + 1}</span>
              <span className={styles.name}>{s.name}</span>
              <span className={styles.tag}>{s.tag}</span>
              <span className={styles.arrow} aria-hidden="true">→</span>
            </li>
          ))}
        </ul>

        {/* ── Preview image sticky (desktop seulement) ── */}
        <div className={styles.preview} aria-hidden="true">
          {SERVICES.map((s, i) => (
            <img
              key={i}
              src={s.img}
              alt=""
              className={`${styles.previewImg} ${active === i ? styles.previewImgVisible : ''}`}
              loading="lazy"
            />
          ))}
          <div className={`${styles.previewIdle} ${active !== null ? styles.previewIdleHidden : ''}`}>
            <span className={styles.previewMono}>MHC.</span>
          </div>
        </div>

      </div>
    </section>
  )
}
