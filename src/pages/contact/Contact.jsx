import React from 'react'
import styles from './Contact.module.scss'
import { MiniMascotIcon2_1, MiniMascotIcon2_2 } from '../../utils/mascotIcon'
import ContactCard from '../../components/contactCard/ContactCard'
import { InfoCardIcon } from '../../utils/contactIcon'
import { quickLinks, contactInfoList } from '../../utils/contactList'

const Contact = () => {
  return (
    <div className={styles.contactPage}>
      <div className={`inner ${styles.inner}`}>
        <div className={styles.hero}>
          <div className={`inner ${styles.heroInner}`}>
            <div className={styles.heroHeader}>
              <p className={styles.cardHeader}>04 / 마무리 &amp; 연락하기</p>
              <div className={styles.mascotWrapper}>
                <MiniMascotIcon2_1 />
                <MiniMascotIcon2_2 />
              </div>
            </div>

            <h1 className={styles.heading}>
              함께라면 <span className={styles.highlight}>더 좋은 것을</span><br />
              만들 수 있습니다.
            </h1>
            <p className={styles.subtitle}>
              좋은 프로젝트는 좋은 인연에서 시작됩니다. 언제든 편하게 연락주세요.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.line} />

      <div className={`inner ${styles.inner}`}>
        <div className={`inner ${styles.bodyInner}`}>
          <div className={styles.body}>
            <div className={styles.formWrap}>
              <ContactCard variant="page" onClose={() => setIsModalOpen(false)} showClose={false} />
            </div>

            <div className={styles.infoWrap}>
              <div className={styles.infoCard}>
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
                  {contactInfoList.map(({ icon: Icon, label, value, href }) => (
                    <li key={label} className={styles.infoItem}>
                      <span className={styles.infoIcon}>
                        <Icon />
                      </span>
                      <div className={styles.infoMeta}>
                        {href ? (
                          <a href={href} target="_blank" rel="noreferrer" className={styles.infoValue}>
                            {value}
                          </a>
                        ) : (
                          <span className={styles.infoValue}>{value}</span>
                        )}
                        <span className={styles.infoLabel}>{label}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.quickCard}>
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
              </div>

              <div className={styles.statusCard}>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
