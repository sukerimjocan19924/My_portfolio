import React from 'react'
import styles from './Stats.module.scss'

const items =[
  { label: 'Years', value: '3+' },
  { label: 'Projects', value: '10+' },
  { label: 'Collaborations', value: '5+' },
]

const Stats = () => {
  return (
    <ul className={styles.stats}>
      {items.map(({ label, value }) => (
        <li key={label} className={styles.item}>
          <span
            className={`${styles.value} ${value === '3+' ? styles.highlight : ''}`}
          >
            {value}
          </span>
          <span className={styles.label}>{label}</span>
        </li>
      ))}
    </ul>
  )
}

export default Stats
