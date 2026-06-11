import React from 'react'
import styles from './MiniProjectCard.module.scss'
import { MiniLink } from '../../utils/projectIcon'

const MiniProjectCard = ({ title, description, demoHref }) => {
  return (
    <div className={styles.card}>
      <div className={styles.meta}>
        <strong className={styles.title}>{title}</strong>
        <p className={styles.desc}>{description}</p>
      </div>

      <a
        href={demoHref}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
        aria-label={`${title} 보기`}
      >
        <MiniLink />
        보기
      </a>
    </div>
  )
}

export default MiniProjectCard
