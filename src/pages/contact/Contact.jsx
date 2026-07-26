import React from 'react'
import styles from './Contact.module.scss'
import { MiniMascotIcon2_1, MiniMascotIcon2_2 } from '../../utils/mascotIcon'
import ContactCard from '../../components/contactCard/ContactCard'
import { InfoCardIcon } from '../../utils/contactIcon'
import { quickLinks, contactInfoList } from '../../utils/contactList'
import { motion as Motion } from 'framer-motion'
import { contentVariants, itemVariants } from '../../utils/variants'

const Contact = () => {
  return (
    <div className={styles.contactPage}>
      <div className={`inner ${styles.inner}`}>
        <div className={styles.hero}>
          <div className={`inner ${styles.heroInner}`}>
            <Motion.div
              variants={contentVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className={styles.heroContent}>
              <div className={styles.heroLeft}>
                <Motion.h1 variants={itemVariants} className={styles.heading}>
                  함께라면
                  <span className={styles.highlight}> 더 좋은 것을</span>
                  <br />
                  만들 수 있습니다.
                </Motion.h1>

                <Motion.p variants={itemVariants} className={styles.subtitle}>
                  좋은 프로젝트는 좋은 인연에서 시작됩니다.
                  언제든 편하게 연락주세요.
                </Motion.p>
              </div>

              <div className={styles.mascotWrapper}>
                <MiniMascotIcon2_1 />
                <MiniMascotIcon2_2 />
              </div>
            </Motion.div>
          </div>
        </div>
      </div>

      <div className={styles.line} />

      <div className={`inner ${styles.inner}`}>
        <div className={`inner ${styles.bodyInner}`}>
          <div className={styles.body}>
            <Motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className={styles.formWrap}>
              <ContactCard variant="page" showClose={false} />
            </Motion.div>

            <Motion.div
              variants={contentVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className={styles.infoWrap}>
              <Motion.div variants={itemVariants} className={styles.infoCard}>
                <div className={styles.infoCardHeader}>
                  <span className={styles.infoCardIcon}>
                    <InfoCardIcon />
                  </span>
                  <div>
                    <strong className={styles.infoCardTitle}>연락처 정보</strong>
                    <p className={styles.infoCardSub}>언제든지 편하게 연락하세요</p>
                  </div>
                </div>

                <ul className={styles.infoList}>
                  {contactInfoList.map(({ icon: Icon, label, value }) => (
                    <li key={label} className={styles.infoItem}>
                      <span className={styles.infoIcon}>
                        <Icon />
                      </span>

                      <div className={styles.infoMeta}>
                        <span className={styles.infoLabel}>{label}</span>
                        <span className={styles.infoValue}>{value}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </Motion.div>

              <Motion.div variants={itemVariants} className={styles.quickCard}>
                <p className={styles.quickTitle}>
                  <span className={styles.dot} /> 빠른 링크
                </p>
                <div className={styles.quickLinks}>
                  {quickLinks.map(({ label, href, icon: Icon }) => (
                    <a key={label} href={href} target="_blank" rel="noreferrer" className={styles.quickLink}>
                      <Icon />
                      {label}
                    </a>
                  ))}
                </div>
              </Motion.div>

              <Motion.div variants={itemVariants} className={styles.statusCard}>
                <div className={styles.statusHeader}>
                  <p className={styles.quickTitle}>
                    <span className={styles.dot} /> 현재 상태
                  </p>
                  <span className={styles.statusBadge}>구직 중 · Available</span>
                </div>
                <ul className={styles.statusList}>
                  <li>
                    <span className={styles.statusKey}>주요 직무</span>
                    <span className={styles.statusVal}>Frontend / Fullstack</span>
                  </li>
                  <li>
                    <span className={styles.statusKey}>근무 형태</span>
                    <span className={styles.statusVal}>경력직 · 프리랜서 모두 가능</span>
                  </li>
                  <li>
                    <span className={styles.statusKey}>평균 시간</span>
                    <span className={styles.statusVal}>평균 12시간 이내</span>
                  </li>
                </ul>
              </Motion.div>
            </Motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
