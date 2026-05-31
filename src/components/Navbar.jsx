import { useState, useEffect, useRef } from 'react'
import styles from './Navbar.module.css'

const LINKS = [
  { href: '#services', label: 'Services',  id: 'services' },
  { href: '#about',    label: 'À propos',  id: 'about'    },
  { href: '#booking',  label: 'Contact',   id: 'contact'  },
]

export default function Navbar() {
  const [active,      setActive]      = useState('')
  const [indicatorStyle, setIndicator] = useState({ left: 0, width: 0, opacity: 0 })
  const linkRefs = useRef({})
  const navRef   = useRef(null)

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = ['services', 'about', 'booking', 'contact']
    const map = {}

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { map[e.target.id] = e.isIntersecting })
        const current = sections.find(id => map[id])
        if (current) {
          // map booking/contact → 'booking' link id
          const linkId = ['booking', 'contact'].includes(current) ? 'booking' : current
          setActive(linkId)
        }
      },
      { threshold: 0.25 }
    )

    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Move indicator under the active link
  useEffect(() => {
    const el = linkRefs.current[active]
    if (!el || !navRef.current) {
      setIndicator(s => ({ ...s, opacity: 0 }))
      return
    }
    const navRect  = navRef.current.getBoundingClientRect()
    const elRect   = el.getBoundingClientRect()
    setIndicator({
      left:    elRect.left - navRect.left,
      width:   elRect.width,
      opacity: 1,
    })
  }, [active])

  return (
    <nav className={styles.navbar} ref={navRef}>
      <a href="#accueil" className={styles.logo}>
        MHC<em>.</em>
      </a>

      <div className={styles.linksWrap}>
        <ul className={styles.links}>
          {LINKS.map(l => (
            <li key={l.id}>
              <a
                href={l.href}
                ref={el => linkRefs.current[l.id] = el}
                className={`${styles.link} ${active === l.id ? styles.linkActive : ''}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* indicateur rouge glissant */}
        <span
          className={styles.indicator}
          style={{
            left:    indicatorStyle.left,
            width:   indicatorStyle.width,
            opacity: indicatorStyle.opacity,
          }}
        />
      </div>

      <a href="#booking" className={styles.cta}>
        Réserver
      </a>
    </nav>
  )
}
