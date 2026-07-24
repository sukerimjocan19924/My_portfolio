import React from 'react'
import { motion as Motion } from 'framer-motion'
import styles from './Skills.module.scss'
import { skillCategories, skillStats } from '../../utils/skillsData'
import { contentVariants, itemVariants, barFillVariants } from '../../utils/variants'

const ACCENT_CLASS = {
  cyan: styles.accentCyan,
  green: styles.accentGreen,
  yellow: styles.accentYellow,
  purple: styles.accentPurple,
}

const SkillsPages = () => {
  return (
    <div className={styles.skillsPage}>
      <section className={styles.hero}>
        <div className={`inner ${styles.inner}`}>
          <div className={styles.heroTop}>
            <Motion.div
              variants={contentVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className={styles.heroText}
            >
              <Motion.p variants={itemVariants} className={styles.sectionHeader}>02 / 나의 능력</Motion.p>
              <Motion.h1 variants={itemVariants} className={styles.title}>기술 스택 상세</Motion.h1>
              <Motion.p variants={itemVariants} className={styles.lead}>
                다양한 기술들을 숙련도와 활용 능력 중심으로 정리해 한눈에 확인할 수 있도록 보여줍니다.
                프론트엔드와 백엔드, 인프라와 디자인 툴까지 폭넓은 영역을 시각적으로 보여줍니다.
              </Motion.p>
            </Motion.div>

            <ul className={styles.statsRow}>
              {skillStats.map(({ label, value }) => (
                <li key={label} className={styles.statBox}>
                  <strong className={styles.statValue}>{value}</strong>
                  <span className={styles.statLabel}>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className={styles.divider} />

      <section className={styles.body}>
        <div className={`inner ${styles.inner}`}>
          <Motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className={styles.grid}
          >
            {skillCategories.map((cat) => (
              <Motion.div
                variants={itemVariants}
                key={cat.id}
                className={`${styles.card} ${ACCENT_CLASS[cat.accent]}`}
              >
                <div className={styles.cardHead}>
                  <span className={styles.catIcon}><cat.icon /></span>
                  <div className={styles.catMeta}>
                    <strong className={styles.catTitle}>{cat.title}</strong>
                    <span className={styles.catSub}>{cat.subtitle}</span>
                  </div>
                  <span className={styles.countBadge}>{cat.countLabel}</span>
                </div>

                <Motion.ul
                  variants={contentVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className={styles.skillList}
                >
                  {cat.items.map(({ icon: Icon, name, level, percent }) => (
                    <Motion.li variants={itemVariants} key={name} className={styles.skillItem}>
                      <div className={styles.skillRow}>
                        <span className={styles.skillIcon}><Icon /></span>
                        <span className={styles.skillName}>{name}</span>
                        <span className={`${styles.levelBadge} ${level === 'Advanced' ? styles.levelAdvanced : ''}`}>
                          {level}
                        </span>
                        <span className={styles.skillPercent}>{percent}%</span>
                      </div>
                      <div className={styles.barTrack}>
                        <Motion.div
                          className={styles.barFill}
                          custom={percent}
                          variants={barFillVariants}
                        />
                      </div>
                    </Motion.li>
                  ))}
                </Motion.ul>

                <div className={styles.tagRow}>
                  {cat.items.map((item, idx) => (
                    <span key={item.name} className={idx === 0 ? styles.tagPrimary : styles.tag}>
                      {item.name}
                    </span>
                  ))}
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </section>
    </div>
  )
}

export default SkillsPages
