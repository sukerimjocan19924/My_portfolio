import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../../context/useTheme'
import { navItems } from '../../utils/nav'
import styles from './Header.module.scss'
import { icons } from '../../utils/headerFooterIcon'

const Header = () => {
  const {theme, toggleTheme} = useTheme()
  const [hover, setHover] = React.useState(false)



  return (
    <header className={styles.header}>
      <div className={`inner ${styles.inner}`}>
        <NavLink to="/" className={styles.logo} end>
          {icons.logo()} H.PORTFOLIO
        </NavLink>

        <div className={styles.action}>
          <nav className={styles.nav} aria-label="Main">
            {navItems.map(({to, label}) => (
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
            ))}
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
