import { useState, useEffect, useRef } from 'react'
import styles from './Navbar.module.css'

const LINKS = [
  { href: '#services', label: 'Services',  id: 'services' },
  { href: '#about',    label: 'À propos',  id: 'about'    },
  { href: '#booking',  label: 'Contact',   id: 'contact'  },
]

export default function Navbar() {
  const [active,      setActive]      = useState('')
  const [open,        setOpen]        = useState(false)
  const [indicatorStyle, setIndicator] = useState({ left: 0, width: 0, opacity: 0 })
  const linkRefs = useRef({})
  const navRef   = useRef(null)

  // Fermer menu au resize desktop
  useEffect(() => {
    const close = () => { if (window.innerWidth > 700) setOpen(false) }
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  // Bloquer le scroll quand menu ouvert
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Fermer au clic sur un lien mobile
  function handleMobileLink() {
    setOpen(false)
  }

  // IntersectionObserver sections
  useEffect(() => {
    const sections = ['services', 'about', 'booking', 'contact']
    const map = {}
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { map[e.target.id] = e.isIntersecting })
        const current = sections.find(id => map[id])
        if (current) {
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

  // Indicateur rouge glissant
  useEffect(() => {
    const el = linkRefs.current[active]
    if (!el || !navRef.current) {
      setIndicator(s => ({ ...s, opacity: 0 }))
      return
    }
    const navRect = navRef.current.getBoundingClientRect()
    const elRect  = el.getBoundingClientRect()
    setIndicator({ left: elRect.left - navRect.left, width: elRect.width, opacity: 1 })
  }, [active])

  return (
    <>
      <nav className={styles.navbar} ref={navRef}>
        <a href="#accueil" className={styles.logo} onClick={() => setOpen(false)}>
          MHC<em>.</em>
        </a>

        {/* Desktop links */}
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
          <span className={styles.indicator} style={{ left: indicatorStyle.left, width: indicatorStyle.width, opacity: indicatorStyle.opacity }} />
        </div>

        <a href="#booking" className={styles.cta}>Réserver</a>

        {/* Hamburger — mobile only */}
        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ''}`} aria-hidden={!open}>
        <nav className={styles.mobileNav}>
          {LINKS.map(l => (
            <a
              key={l.id}
              href={l.href}
              className={styles.mobileLink}
              onClick={handleMobileLink}
            >
              {l.label}
            </a>
          ))}
          <a href="#booking" className={styles.mobileCta} onClick={handleMobileLink}>
            Prendre rendez-vous →
          </a>
        </nav>
        <div className={styles.mobileMeta}>
          <span>+221 78 539 69 96</span>
          <span>Sacré Cœur 3, Dakar</span>
        </div>
      </div>
    </>
  )
}
