import { useState, useRef, useEffect } from 'react'
import styles from './Services.module.css'

const SERVICES = [
  { name: 'Coupes Tendance',   tag: 'Homme · Femme · Enfant',    img: '/services/s1.jpg'     },
  { name: 'Dégradés & Fades',  tag: 'Skin Fade · Mid · High',    img: '/services/s6.jpg'     },
  { name: 'Barbe & Rasage',    tag: 'Traditionnel · Précision',   img: '/services/s5.jpg'     },
  { name: 'Soins Capillaires', tag: 'Traitement · Hydratation',   img: '/services/s8.jpg'     },
  { name: 'Coloration',        tag: 'Tendance · Sur mesure',      img: '/services/salon2.jpg' },
  { name: 'Locks',             tag: 'Pose & Entretien',           img: '/services/locks1.jpg' },
  { name: 'Coiffures Enfants', tag: 'Dès 3 ans',                  img: '/services/s11.jpg'    },
  { name: 'Déplacement',       tag: 'À domicile · Sur demande',   img: '/services/s12.jpg'    },
]

export default function Services() {
  const [hovered, setHovered] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.visible = 'true'
          observer.unobserve(el)
        }
      },
      { threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

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

        {/* ── Liste éditoriale ── */}
        <ul className={styles.list}>
          {SERVICES.map((s, i) => (
            <li
              key={i}
              className={`${styles.row} ${hovered === i ? styles.rowActive : ''}`}
              style={{ '--i': i }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Sweep background */}
              <span className={styles.sweep} aria-hidden="true" />

              <span className={styles.num}>0{i + 1}</span>
              <span className={styles.name}>{s.name}</span>
              <span className={styles.tag}>{s.tag}</span>
              <span className={styles.arrow} aria-hidden="true">→</span>
            </li>
          ))}
        </ul>

        {/* ── Preview image panel ── */}
        <div className={styles.preview} aria-hidden="true">
          {SERVICES.map((s, i) => (
            <img
              key={i}
              src={s.img}
              alt=""
              className={`${styles.previewImg} ${hovered === i ? styles.previewImgVisible : ''}`}
              loading="lazy"
            />
          ))}
          <div className={styles.previewIdle}>
            <span className={styles.previewMono}>MHC.</span>
          </div>
        </div>

      </div>
    </section>
  )
}
