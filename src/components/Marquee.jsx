import styles from './Marquee.module.css'

const ITEMS = ['Coupes', 'Dégradés', 'Barbe', 'Soins', 'Locks', 'Coloration', 'Enfants', 'Domicile']

export default function Marquee() {
  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {[...ITEMS, ...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className={styles.item}>
            <span className={styles.dot} />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
