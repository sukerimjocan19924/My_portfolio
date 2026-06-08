import React from 'react'
import styles from './Hero.module.scss'
import Stats from '../stats/Stats'
import { MascotIcon } from '../../../utils/mascotIcon'
import { useNavigate, useLocation } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()
  const location = useLocation()

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

        navigate('/projects#preview') // 임시 — 나중에 삭제(+ 나중에 자소서 부분 추가하기)
    }
  }

  return (
    <section className={styles.hero} aria-labelledby='hero-heading'>
        <div className={`inner ${styles.inner}`}>
            <div className={styles.content}>
                <div className={styles.texts}>
                    <span className={`${styles.badgehero}`}>
                        <div className={styles.circleHero} />
                        Available for work
                    </span>

                    <h1 className="tit" id="hero-heading">
                        <span className={styles.hello}>안녕하세요,</span><br />
                        저는 창의적인<br />
                        <span className={styles.myName}>개발자 홍석란</span>입니다
                    </h1>

                    <p className="txt">
                        사용자 경험을 중심으로 아름다운 인터페이스와<br />
                        견고한 기술 구조를 함께 만드는 UI/UX Designer<br />
                        & Fullstack Developer입니다.
                    </p>

                    <div className={styles.cta}>
                        <button
                            type="button"
                            onClick={handlePreviewClick}
                            aria-label="프로젝트 미리보기로 이동"
                            className={`${styles.btn} btn btn__primary`}>
                            <span className={styles.label}>프로젝트 보기</span>
                            <img src="/icons/icon-arrow-down.svg" alt="" className={styles.icon} aria-hidden="true"/>
                        </button>
                        <button
                            type='button'
                            className='btn btn__outline'
                        >자소서 보기</button>
                    </div>
                </div>

                <div className={styles.visual}>
                    <div className={styles.imageFrame}>
                        <MascotIcon  aria-hidden="true"/>
                    </div>

                    <p className={styles.caption}>
                        <span className={styles.circle}>
                            <span className={styles.innerCircle} />
                        </span>
                        마스코트가 여기저기 있어요 🐿️
                    </p>

                    <Stats />
                </div>
            </div>

            <div className={styles.down}>
                scroll down
            </div>
        </div>
    </section>
  )
}

export default Hero
