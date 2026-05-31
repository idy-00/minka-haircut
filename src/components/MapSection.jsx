import { useState } from 'react'
import styles from './MapSection.module.css'

const LAT = 14.7229463
const LNG  = -17.4684669
const EMBED_URL = `https://maps.google.com/maps?q=${LAT},${LNG}&z=17&output=embed&hl=fr`
const GMAPS_URL  = 'https://maps.app.goo.gl/C43wBkMnzRLQMCmA7'

function CarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 11.5L7 6h10l2 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="2" y="11" width="20" height="6" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="7"  cy="20" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="17" cy="20" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9 20h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function WalkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="4.5" r="1.8" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8.5 20.5l2-5.5-2.5-3 2.5-5 3 3 2.5-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.5 20.5l-1-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function BikeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="5.5"  cy="16.5" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="18.5" cy="16.5" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M5.5 16.5l4.5-9h3.5l2 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.5 7.5l5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 7.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

const MODES = [
  { id: 'driving',   Icon: CarIcon,  label: 'Voiture' },
  { id: 'walking',   Icon: WalkIcon, label: 'À pied'  },
  { id: 'bicycling', Icon: BikeIcon, label: 'Vélo'    },
]

export default function MapSection() {
  const [mode, setMode] = useState('driving')
  const dirUrl = `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}&travelmode=${mode}`

  return (
    <section className={styles.section}>
      <div className={styles.mapWrap}>
        <iframe
          title="Minka Hair Cut — localisation"
          src={EMBED_URL}
          className={styles.map}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className={styles.vignette} />
      </div>

      <div className={styles.panel}>
        <div className={styles.panelTop}>
          <span className={styles.label}>Où nous trouver</span>
          <p className={styles.address}>
            Sacré Cœur 3<br />
            En face de la mosquée<br />
            Dakar, Sénégal
          </p>
          <a href={GMAPS_URL} target="_blank" rel="noreferrer" className={styles.openLink}>
            Ouvrir dans Maps <span>↗</span>
          </a>
        </div>

        <div className={styles.itinerary}>
          <span className={styles.itinLabel}>Itinéraire</span>
          <div className={styles.modes}>
            {MODES.map(({ id, Icon, label }) => (
              <button
                key={id}
                type="button"
                className={`${styles.modeBtn} ${mode === id ? styles.modeBtnActive : ''}`}
                onClick={() => setMode(id)}
              >
                <Icon />
                <span>{label}</span>
              </button>
            ))}
          </div>
          <a href={dirUrl} target="_blank" rel="noreferrer" className={styles.dirBtn}>
            Lancer l'itinéraire <span className={styles.arrow}>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
