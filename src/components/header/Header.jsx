import React, { useCallback, useEffect, useId, useState } from "react"
import { NavLink, useLocation } from 'react-router-dom'
import { useTheme } from '../../context/useTheme'
import { navItems } from '../../utils/nav'
import styles from './Header.module.scss'
import { icons } from '../../utils/headerFooterIcon'
import { modalIcons } from "../../utils/headerFooterIcon"
import { MascotIcon } from "../../utils/mascotIcon"
import { createPortal } from "react-dom"
import { motion as Motion } from "framer-motion"

const Header = () => {
  const {theme, toggleTheme} = useTheme()
  const [hover, setHover] = React.useState(false)

  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const [mounted, setMounted] = useState(false)
  const panelId = useId()

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)")

    const handleMediaChange = () => {
      if (mq.matches) {
        closeMenu()
      }
    }

    mq.addEventListener("change", handleMediaChange)

    return () => {
      mq.removeEventListener("change", handleMediaChange)
    }
  }, [closeMenu])

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key == "Escape") {
        closeMenu()
      }
    }

    const previousOverflow = document.body.style.overflow

    window.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [menuOpen, closeMenu])

  return (
    <header className={styles.header} key={pathname}>
      <div className={`inner ${styles.inner}`}>
        <NavLink to="/" className={styles.logo} end onClick={closeMenu}>
          {icons.logo()} H.PORTFOLIO
        </NavLink>

        <div className={styles.action}>
          <nav className={styles.nav} aria-label="Main">
            {navItems.map(({to, label}) => (
              <Motion.div
                key={to}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <NavLink
                  to={to}
                  key={to}
                  className={({isActive}) =>
                    isActive
                      ? label === 'Contact'
                        ? `${styles.link} ${styles.contactLink} ${styles.linkContactActive}`
                        : `${styles.link} ${styles.linkActive}`
                      : label === 'Contact'
                        ? `${styles.link} ${styles.contactLink}`
                        : styles.link
                  }
                >
                  {label}
                </NavLink>
              </Motion.div>
            ))}
          </nav>
        
          <Motion.button
            className={styles.themeToggle}
            onClick={toggleTheme}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            aria-label={theme==='dark' ? 'switch to light mode' : 'switch to dark mode'}>
            {theme === 'dark'
              ? (hover ? <icons.sunHover /> : <icons.sun />)
              : (hover ? <icons.moonHover /> : <icons.moon />)}
          </Motion.button>

          <button
            type="button"
            className={styles.menuToggle}
            aria-expanded={menuOpen}
            aria-controls={menuOpen ? panelId : undefined}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className={styles.menuIcon} aria-hidden>
              <span className={styles.menuBar} />
              <span className={styles.menuBar} />
              <span className={styles.menuBar} />
            </span>
          </button>
        </div>
      </div>

      {mounted && menuOpen && createPortal(
      <div className={styles.mobileBackdrop} onClick={closeMenu}>
        <div className={styles.mobileheader} onClick={(e) => e.stopPropagation()}>
          <button
            className={styles.themeToggleMobile}
            onClick={toggleTheme}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            aria-label={theme === 'dark' ? 'switch to light mode' : 'switch to dark mode'}
          >
            {theme === 'dark'
              ? (hover ? <icons.sunHover /> : <icons.sun />)
              : (hover ? <icons.moonHover /> : <icons.moon />)}
          </button>
          <button className={styles.closeButton} onClick={closeMenu}>
            <modalIcons.close />
          </button>
        </div>

        <div
          id={panelId}
          className={styles.mobilePanel}
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.mobileMain}>
            <nav className={styles.mobileNav}>
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.linkMobile} ${styles.linkMobileActive}`
                    : styles.linkMobile
                }
              >
                <span className={styles.navIndex}>01</span>
                <span >Home</span>
              </NavLink>

              {navItems.filter(i => i.label !== 'Contact').map(({ to, label }, idx) => (
                <NavLink
                  to={to}
                  key={to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.linkMobile} ${styles.linkMobileActive}`
                      : styles.linkMobile
                  }
                >
                  <span className={styles.navIndex}>0{idx + 2}</span>
                  {label}
                </NavLink>
              ))}

              <div className={styles.mobileDivider} />

              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.contactLinkMobile} ${styles.linkContactActive}`
                    : styles.contactLinkMobile
                }
              >
                Contact
                <modalIcons.array/>
              </NavLink>
            </nav>

            <div className={styles.mobileMascot}>
              <MascotIcon/>
            </div>
          </div>
        </div>

        <div className={styles.mobilefooter} onClick={(e) => e.stopPropagation()}>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <modalIcons.instagram />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <modalIcons.linkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <modalIcons.twitter />
            </a>
          </div>
          <div className={styles.location}>
            <modalIcons.location />
            <p>Seoul, South Korea</p>
          </div>
        </div>
      </div>,
      document.body
    )}
    </header>
  )
}

export default Header
