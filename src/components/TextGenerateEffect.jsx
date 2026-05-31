import { useEffect } from 'react'
import { motion, stagger, useAnimate } from 'motion/react'
import styles from './TextGenerateEffect.module.css'

export default function TextGenerateEffect({ words, className = '', duration = 0.6, blur = true }) {
  const [scope, animate] = useAnimate()
  const wordsArray = words.split(' ')

  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
        filter: blur ? 'blur(0px)' : 'none',
      },
      {
        duration,
        delay: stagger(0.15),
      }
    )
  }, [scope.current])

  return (
    <div className={`${styles.wrap} ${className}`}>
      <motion.div ref={scope} className={styles.inner}>
        {wordsArray.map((word, i) => (
          <motion.span
            key={word + i}
            className={styles.word}
            style={{ filter: blur ? 'blur(8px)' : 'none', opacity: 0 }}
          >
            {word}{' '}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}
