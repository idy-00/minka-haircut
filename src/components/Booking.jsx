import { useState } from 'react'
import styles from './Booking.module.css'
import useScrollReveal from '../hooks/useScrollReveal'

const SERVICES = [
  'Coupe tendance',
  'Dégradé / Fade',
  'Barbe & Rasage',
  'Soins capillaires',
  'Coloration',
  'Locks',
  'Coiffure enfant',
  'Déplacement à domicile',
]

const STEPS = ['Service', 'Date & Heure', 'Confirmer']

export default function Booking() {
  const [step,    setStep]    = useState(0)
  const [service, setService] = useState('')
  const [date,    setDate]    = useState('')
  const [time,    setTime]    = useState('')
  const [name,    setName]    = useState('')
  const [note,    setNote]    = useState('')
  const leftRef  = useScrollReveal({ threshold: 0.1 })
  const rightRef = useScrollReveal({ threshold: 0.1 })

  function next() { setStep(s => Math.min(s + 1, 2)) }
  function back() { setStep(s => Math.max(s - 1, 0)) }

  function sendWhatsApp() {
    const lines = [
      'Bonjour, je souhaite réserver chez *Minka Hair Cut*.',
      '',
      `*Nom :* ${name}`,
      `*Service :* ${service}`,
      `*Date :* ${date}`,
      time ? `*Heure :* ${time}` : null,
      note ? `*Note :* ${note}` : null,
    ].filter(l => l !== null)
    window.open(`https://wa.me/221785396996?text=${encodeURIComponent(lines.join('\n'))}`, '_blank')
  }

  const canNext0 = service !== ''
  const canNext1 = date !== '' && name !== ''

  return (
    <section className={styles.section} id="booking">

      {/* ── Left panel ── */}
      <div ref={leftRef} className={`${styles.left} reveal-left`}>
        <span className={styles.eyebrow}>Réservation</span>
        <h2 className={styles.title}>Réservez<br />votre créneau.</h2>
        <p className={styles.sub}>
          3 étapes simples. Votre message est envoyé directement
          sur WhatsApp.
        </p>
        {/* Stepper visuel (style Shadcn adapté) */}
        <div className={styles.steps}>
          {STEPS.map((s, i) => (
            <div
              key={i}
              className={`${styles.stepItem} ${i === step ? styles.stepActive : ''} ${i < step ? styles.stepDone : ''}`}
            >
              {/* Ligne de connexion */}
              {i > 0 && <span className={`${styles.stepLine} ${i <= step ? styles.stepLineDone : ''}`} />}

              <span className={styles.stepCircle}>
                {i < step
                  ? <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  : <span>{i + 1}</span>
                }
              </span>
              <span className={styles.stepName}>{s}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right panel ── */}
      <div ref={rightRef} className={`${styles.right} reveal stagger-2`}>

        {/* Step 0 — choose service */}
        {step === 0 && (
          <div className={styles.panel}>
            <span className={styles.panelLabel}>Quel service souhaitez-vous ?</span>
            <div className={styles.serviceGrid}>
              {SERVICES.map(s => (
                <button
                  key={s}
                  type="button"
                  className={`${styles.serviceBtn} ${service === s ? styles.serviceBtnActive : ''}`}
                  onClick={() => setService(s)}
                >
                  {s}
                </button>
              ))}
            </div>
            <div className={styles.nav}>
              <span />
              <button
                type="button"
                className={styles.nextBtn}
                disabled={!canNext0}
                onClick={next}
              >
                Continuer <span className={styles.arrow}>→</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 1 — date + name */}
        {step === 1 && (
          <div className={styles.panel}>
            <span className={styles.panelLabel}>Quand & qui ?</span>

            <div className={styles.fields}>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Votre prénom</label>
                <input
                  type="text"
                  placeholder="Ex : Moussa"
                  value={name}
                  required
                  onChange={e => setName(e.target.value)}
                  className={styles.input}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Date souhaitée</label>
                <input
                  type="date"
                  value={date}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  onChange={e => setDate(e.target.value)}
                  className={styles.input}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Heure (optionnel)</label>
                <input
                  type="time"
                  value={time}
                  onChange={e => setTime(e.target.value)}
                  className={styles.input}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Note (optionnel)</label>
                <textarea
                  placeholder="Une demande particulière..."
                  value={note}
                  onChange={e => setNote(e.target.value)}
                  className={styles.input}
                  rows={2}
                />
              </div>
            </div>

            <div className={styles.nav}>
              <button type="button" className={styles.backBtn} onClick={back}>← Retour</button>
              <button
                type="button"
                className={styles.nextBtn}
                disabled={!canNext1}
                onClick={next}
              >
                Continuer <span className={styles.arrow}>→</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 2 — confirm */}
        {step === 2 && (
          <div className={styles.panel}>
            <span className={styles.panelLabel}>Récapitulatif</span>

            <div className={styles.recap}>
              <div className={styles.recapRow}>
                <span className={styles.recapKey}>Service</span>
                <span className={styles.recapVal}>{service}</span>
              </div>
              <div className={styles.recapRow}>
                <span className={styles.recapKey}>Nom</span>
                <span className={styles.recapVal}>{name}</span>
              </div>
              <div className={styles.recapRow}>
                <span className={styles.recapKey}>Date</span>
                <span className={styles.recapVal}>{date}</span>
              </div>
              {time && (
                <div className={styles.recapRow}>
                  <span className={styles.recapKey}>Heure</span>
                  <span className={styles.recapVal}>{time}</span>
                </div>
              )}
              {note && (
                <div className={styles.recapRow}>
                  <span className={styles.recapKey}>Note</span>
                  <span className={styles.recapVal}>{note}</span>
                </div>
              )}
            </div>

            <p className={styles.hint}>
              Un clic — votre message s'ouvre dans WhatsApp, pré-rempli et prêt à envoyer.
            </p>

            <div className={styles.nav}>
              <button type="button" className={styles.backBtn} onClick={back}>← Retour</button>
              <button type="button" className={styles.sendBtn} onClick={sendWhatsApp}>
                Envoyer sur WhatsApp <span className={styles.arrow}>↗</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
