import React from 'react'
import styles from './Hero.module.scss'
import Stats from '../stats/Stats'
import { MascotIcon } from '../../utils/mascotIcon'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion as Motion, scale } from 'framer-motion'
import { 
        contentVariants,
        itemVariants,
        visualVariants,
        visualVariantsMobile,
        ctaVariantsMobile
    } from '../../utils/variants'

const Hero = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const isMobile = window.innerWidth <= 599

  const handlePreviewClick = () => {
    if (location.pathname === '/' || location.pathname === '') {
        const previewEl = document.getElementById('project-preview')
        if (previewEl) {
        if (!previewEl.hasAttribute('tabindex')) previewEl.setAttribute('tabindex', '-1')

        previewEl.scrollIntoView({ behavior: 'smooth', block: 'start' })

        setTimeout(() => {
            try { previewEl.focus({ preventScroll: true }); } catch {
            previewEl.focus()
            }
        }, 350)

            return
        }
    }
  }

  return (
    <section className={styles.hero} aria-labelledby='hero-heading'>
        <div className={`inner ${styles.inner}`}>
            <Motion.div
                variants={contentVariants}
                initial="hidden"
                whileInView="show"
                viewport={{amount: .3}}
                className={styles.content}>
                <div className={styles.texts}>
                    <Motion.span variants={itemVariants} className={styles.badgehero}>
                        <div className={styles.circleHero} />
                        Available for work
                    </Motion.span>

                    <Motion.h1 variants={itemVariants} className="tit" id="hero-heading">
                        <span className={styles.hello}>안녕하세요,</span><br />
                        저는 창의적인<br />
                        <span className={styles.myName}>개발자 홍석란</span>입니다
                    </Motion.h1>

                    <Motion.p variants={itemVariants} className="txt">
                        사용자 경험을 중심으로 아름다운 인터페이스와<br />
                        견고한 기술 구조를 함께 만드는 UI/UX Designer<br />
                        & Fullstack Developer입니다.
                    </Motion.p>

                    <Motion.div
                        variants={isMobile ? ctaVariantsMobile : itemVariants}
                        className={styles.cta}>
                        <Motion.button
                            {...(isMobile ? { variants: itemVariants } : {})}
                            type="button"
                            onClick={handlePreviewClick}
                            aria-label="프로젝트 미리보기로 이동"
                            className={`${styles.btn} btn btn__primary`}>
                            <span className={styles.label}>프로젝트 보기</span>
                            <img src="/icons/icon-arrow-down.svg" alt="" className={styles.icon} aria-hidden="true"/>
                        </Motion.button>

                        <Motion.button
                            {...(isMobile ? { variants: itemVariants } : {})}
                            type="button"
                            className="btn btn__outline"
                        >자소서 보기</Motion.button>
                    </Motion.div>
                </div>

                <div className={styles.visual}>
                    <Motion.div variants={isMobile ? visualVariantsMobile : itemVariants} className={styles.imageFrame}>
                        <MascotIcon  aria-hidden="true" className="mascot-icon"/>
                    </Motion.div>

                    <Motion.p variants={itemVariants} className={styles.caption}>
                        <span className={styles.circle}>
                            <span className={styles.innerCircle} />
                        </span>
                        마스코트가 여기저기 있어요 🐿️
                    </Motion.p>

                    <Motion.div variants={isMobile ? visualVariantsMobile : itemVariants}>
                        <Stats />
                    </Motion.div>
                </div>
            </Motion.div>

            <div className={styles.down}>
                scroll down
            </div>
        </div>
    </section>
  )
}

export default Hero
