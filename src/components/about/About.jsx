import React from 'react'
import styles from './About.module.scss'
import { MiniMascotIcon } from '../../utils/mascotIcon'
import { motion as Motion } from 'framer-motion'
import { 
  contentVariants, 
  itemVariants, 
  visualVariantsMobile, 
  ctaVariantsMobile 
} from '../../utils/variants'

const About = () => {
  const isMobile = window.innerWidth <= 599

  return (
    <section className={styles.about} aria-labelledby="about-title">
      <div className={`inner ${styles.inner}`}>
        <Motion.p
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className={styles.cardHeader}>
          01 / 자기소개서
        </Motion.p>

        <div className={styles.content}>
          <Motion.div
            variants={isMobile ? visualVariantsMobile : contentVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className={styles.left}>
            
            <Motion.div variants={itemVariants} className={styles.card} aria-label="자기소개 카드">
              <div className={styles.quote} aria-label="quote">
                "창의성과 논리가 만나는 곳"
              </div>

              <div className={styles.identity}>
                홍석란<br />
                UI/UX Designer & Fullstack Developer
              </div>
            </Motion.div>

            <div className={styles.info}>
              <Motion.div variants={itemVariants} className={styles.infoRow}>
                <span className={styles.infoKey}>NAME</span>
                <span className={styles.infoVal}>홍석란</span>
              </Motion.div>
              <Motion.div variants={itemVariants} className={styles.infoRow}>
                <span className={styles.infoKey}>BASED IN</span>
                <span className={styles.infoVal}>Kyungbok University, South Korea</span>
              </Motion.div>
              <Motion.div variants={itemVariants} className={styles.infoRow}>
                <span className={styles.infoKey}>CONTACT</span>
                <span className={styles.infoVal}>010-7313-7197</span>
              </Motion.div>
            </div>

            <Motion.div variants={itemVariants} className={styles.mascotIcon}>
              <MiniMascotIcon />
            </Motion.div>
          </Motion.div>

          <Motion.div
            variants={isMobile ? ctaVariantsMobile : contentVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className={styles.right}
            aria-labelledby="about-title">
            
            <Motion.p variants={itemVariants} className={styles.lead}>
              저는 사용자의 경험을 최우선으로 생각하며,
              아름다운 인터페이스와 견고한 기술적 구조를 함께 추구합니다.
            </Motion.p>

            <Motion.p variants={itemVariants} className={styles.paragraph}>
              디자인은 단순히 보기 좋은 것이 아니라, 문제를 해결하는 도구라고 믿습니다. 
              사용자가 자연스럽게 목표에 도달할 수 있도록 세심하게 설계된 경험을 만드는 것이 저의 목표입니다.
            </Motion.p>

            <Motion.p variants={itemVariants} className={styles.paragraph}>
              지금까지 스타트업부터 대기업까지 다양한 규모의 프로젝트를 경험하며, 빠른 적응력과 협업 능력을 키워왔습니다.
              매 프로젝트마다 새로운 도전을 즐기고, 그 과정에서 배운 것들을 다음 작업에 반드시 녹여냅니다.
            </Motion.p>

            <Motion.div variants={itemVariants} className={styles.keywords}>
              <strong>핵심 키워드</strong>
              <ul>
                <li>사용자 중심</li>
                <li>문제 해결</li>
                <li>협업</li>
                <li>빠른 적응력</li>
                <li>완성도</li>
              </ul>
            </Motion.div>
          </Motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
