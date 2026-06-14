import React from 'react'
import styles from './Footer.module.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`inner ${styles.inner}`}>
        <p className={styles.copy}>
          <img src='icons/icon-footer-sq.svg' alt='icon' width="21" height="21" />
          © {year} 홍석란 · All Rights Reserved
        </p>

        <p className={styles.credit}>
          Designed & Developed by me 🐿️
        </p>
      </div>
    </footer>
  )
}

export default Footer
