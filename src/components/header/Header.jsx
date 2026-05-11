import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../../context/useTheme'
import { navItems } from '../../utils/nav'
import styles from './Header.module.scss'
import { icons } from '../../utils/headerFooterIcon'

const Header = () => {
  const {theme, toggleTheme} = useTheme()
  const [hover, setHover] = React.useState(false)

  const logoIcon=icons.logo
  const moonIcon=icons.moon
  const moonHoverIcon=icons.moonHover
  const sunIcon=icons.sun
  const sunHoverIcon=icons.sunHover


  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logo} end>
          {logoIcon()} H.PORTFOLIO
        </NavLink>

        <div className={styles.action}>
          <nav className={styles.nav} aria-label='Main'>
            <nav className={styles.nav} aria-label="Main">
              {navItems.filter(item => item.label !== 'Contact').map(({to, label}) => (
                <NavLink to={to} key={to} className={styles.link}>
                  {label}
                </NavLink>
              ))}
              <NavLink to="/contact" className={`${styles.link} ${styles.contactLink}`}>
                Contact
              </NavLink>
            </nav>
          </nav>
        
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            aria-label={theme==='dark' ? 'switch to light mode' : 'switch to dark mode'}>
            {theme === 'dark'
              ? (hover ? <icons.sunHover /> : <icons.sun />)
              : (hover ? <icons.moonHover /> : <icons.moon />)}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
