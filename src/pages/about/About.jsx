import React from 'react'
import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import styles from './About.module.scss'
import { MascotIcon } from '../../utils/mascotIcon'
import { GithubIcon, MailIcon, PhoneIcon, LocationIcon } from '../../utils/contactIcon'
import { ArrowLeftIcon, DownloadIcon, TrophyIcon, CheckCircleIcon, GraduationCapIcon } from '../../utils/aboutIcon'
import {
  coreValues,
  careerTimeline,
  awards,
  workingStyle,
  education,
  whoIAmTags,
  whoIAmRows,
} from '../../utils/aboutData'
import { contentVariants, itemVariants } from '../../utils/variants'

const SectionHeader = ({ index, title }) => (
  <p className={styles.sectionHeader}>{index} / {title}</p>
)

const About = () => {
  return (
    <div className={styles.aboutPage}>
      {/* 01 / About Me */}
      <section className={styles.section} aria-labelledby="about-me-title">
        <div className={`inner ${styles.inner}`}>
          <div className={styles.sectionTop}>
            <SectionHeader index="01" title="About Me" />
            <Link to="/" className={styles.backLink}>
              <ArrowLeftIcon /> 포트폴리오로 돌아가기
            </Link>
          </div>

          <Motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className={styles.meGrid}
          >
            <Motion.div variants={itemVariants} className={styles.meLeft}>
              <h1 id="about-me-title" className={styles.meHeading}>
                저는 사용자의<br />
                경험을 먼저<br />
                생각합니다.
              </h1>

              <p className={styles.meRole}>홍석란 · Fullstack Developer</p>

              <p className={styles.meParagraph}>
                디자인은 단순히 보기 좋은 것이 아니라, 문제를 해결하는 도구라고 믿습니다.
                사용자가 자연스럽게 목표에 도달할 수 있도록 세심하게 설계된 경험을 만드는 것이 저의 목표입니다.
              </p>

              <p className={styles.meParagraph}>
                지금까지 스타트업부터 다양한 프로젝트를 경험하며 빠른 적응력과 협업 능력을 키워왔습니다.
                매 프로젝트마다 새로운 도전을 즐기고, 그 과정에서 배운 것들을 다음 작업에 반드시 녹여냅니다.
              </p>

              <div className={styles.meActions}>
                <a href="#" className="btn btn__primary">
                  <DownloadIcon /> 이력서 다운로드
                </a>
                <a href="https://github.com/walkingocean19924" target="_blank" rel="noopener noreferrer" className="btn btn__outline">
                  <GithubIcon /> GitHub
                </a>
                <a href="mailto:hseolgan@gmail.com" className="btn btn__outline">
                  <MailIcon /> 이메일 문의
                </a>
              </div>
            </Motion.div>

            <Motion.div variants={itemVariants} className={styles.meRight}>
              <div className={styles.profileCard}>
                <div className={styles.profileAvatar}>
                  <div className={styles.avatarCircle}>
                    <MascotIcon />
                  </div>
                </div>

                <div className={styles.profileBody}>
                  <strong className={styles.profileName}>홍석란</strong>
                  <p className={styles.profileRole}>UI/UX Designer &amp; Fullstack Developer</p>
                  <span className={styles.availableBadge}>
                    <span className={styles.availableDot} /> Available for work
                  </span>

                  <ul className={styles.profileInfo}>
                    <li>
                      <span className={styles.profileInfoIcon}><LocationIcon /></span>
                      <span className={styles.profileInfoKey}>위치</span>
                      <span className={styles.profileInfoVal}>경기도 남양주시</span>
                    </li>
                    <li>
                      <span className={styles.profileInfoIcon}><GraduationCapIcon /></span>
                      <span className={styles.profileInfoKey}>학교</span>
                      <span className={styles.profileInfoVal}>경복대학교</span>
                    </li>
                    <li>
                      <span className={styles.profileInfoIcon}><PhoneIcon /></span>
                      <span className={styles.profileInfoKey}>전화</span>
                      <span className={styles.profileInfoVal}>010-7313-7197</span>
                    </li>
                    <li>
                      <span className={styles.profileInfoIcon}><MailIcon /></span>
                      <span className={styles.profileInfoKey}>이메일</span>
                      <span className={styles.profileInfoVal}>hseolgan@gmail.com</span>
                    </li>
                  </ul>
                </div>
              </div>

              <ul className={styles.statsRow}>
                <li className={styles.statBox}>
                  <strong className={styles.statValue}>3+</strong>
                  <span className={styles.statLabel}>Years</span>
                </li>
                <li className={styles.statBox}>
                  <strong className={styles.statValue}>10+</strong>
                  <span className={styles.statLabel}>Projects</span>
                </li>
                <li className={styles.statBox}>
                  <strong className={styles.statValue}>5+</strong>
                  <span className={styles.statLabel}>Collabs</span>
                </li>
              </ul>
            </Motion.div>
          </Motion.div>
        </div>
      </section>

      {/* 02 / Core Values */}
      <section className={styles.section} aria-labelledby="core-values-title">
        <div className={`inner ${styles.inner}`}>
          <SectionHeader index="02" title="Core Values" />
          <h2 id="core-values-title" className={styles.sectionTitle}>개발자로서의 철학과 가치관</h2>
          <p className={styles.sectionLead}>저를 움직이는 핵심 가치들입니다. 이 원칙들이 모든 코드와 디자인 결정의 기준이 됩니다.</p>

          <Motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className={styles.valuesGrid}
          >
            {coreValues.map(({ icon: Icon, title, desc, tag }) => (
              <Motion.div variants={itemVariants} key={title} className={styles.valueCard}>
                <span className={styles.valueIcon}><Icon /></span>
                <strong className={styles.valueTitle}>{title}</strong>
                <p className={styles.valueDesc}>{desc}</p>
                <span className={styles.valueTag}>{tag}</span>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </section>

      {/* 03 / Career Timeline */}
      <section className={styles.section} aria-labelledby="career-title">
        <div className={`inner ${styles.inner}`}>
          <SectionHeader index="03" title="Career Timeline" />
          <h2 id="career-title" className={styles.sectionTitle}>걸어온 길</h2>

          <div className={styles.careerGrid}>
            <Motion.ol
              variants={contentVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className={styles.timeline}
            >
              {careerTimeline.map(({ period, status, dot, title, desc, tags }) => (
                <Motion.li variants={itemVariants} key={title} className={styles.timelineItem}>
                  <span className={`${styles.timelineDot} ${styles[`dot_${dot}`]}`} />
                  <div className={styles.timelineHead}>
                    <span className={styles.timelinePeriod}>{period}</span>
                    <span className={`${styles.timelineStatus} ${styles[`status_${dot}`]}`}>{status}</span>
                  </div>
                  <strong className={styles.timelineTitle}>{title}</strong>
                  <p className={styles.timelineDesc}>{desc}</p>
                  {tags.length > 0 && (
                    <div className={styles.timelineTags}>
                      {tags.map((tag) => (
                        <span key={tag} className={styles.timelineTag}>{tag}</span>
                      ))}
                    </div>
                  )}
                </Motion.li>
              ))}
            </Motion.ol>

            <div className={styles.careerSide}>
              <div className={styles.sideCard}>
                <p className={styles.sideCardTitle}>
                  <span className={styles.sideCardIcon}><TrophyIcon /></span> 수상 &amp; 성과
                </p>
                <ul className={styles.awardList}>
                  {awards.map(({ title, sub }) => (
                    <li key={title}>
                      <span className={styles.awardDot} />
                      <div>
                        <strong>{title}</strong>
                        <span>{sub}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.sideCard}>
                <p className={styles.sideCardTitle}>
                  <span className={styles.sideCardIcon}><CheckCircleIcon /></span> 일하는 방식
                </p>
                <ul className={styles.workList}>
                  {workingStyle.map((line) => (
                    <li key={line}>
                      <CheckCircleIcon className={styles.workCheck} />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 / Education */}
      <section className={styles.section} aria-labelledby="education-title">
        <div className={`inner ${styles.inner}`}>
          <SectionHeader index="04" title="Education" />
          <h2 id="education-title" className={styles.sectionTitle}>학력 &amp; 수료 과정</h2>

          <Motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className={styles.eduGrid}
          >
            {education.map(({ icon: Icon, title, badge, sub, rows, tags }) => (
              <Motion.div variants={itemVariants} key={title} className={styles.eduCard}>
                <div className={styles.eduHead}>
                  <span className={styles.eduIcon}><Icon /></span>
                  <strong className={styles.eduTitle}>{title}</strong>
                  <span className={styles.eduBadge}>{badge}</span>
                </div>
                <p className={styles.eduSub}>{sub}</p>

                <ul className={styles.eduRows}>
                  {rows.map(({ key, value }) => (
                    <li key={key}>
                      <span className={styles.eduKey}>{key}</span>
                      <span className={styles.eduVal}>{value}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.eduTags}>
                  {tags.map((tag) => (
                    <span key={tag} className={styles.eduTag}>{tag}</span>
                  ))}
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </section>

      {/* 05 / Who I Am */}
      <section className={styles.section} aria-labelledby="who-i-am-title">
        <div className={`inner ${styles.inner}`}>
          <SectionHeader index="05" title="Who I Am" />

          <Motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className={styles.whoGrid}
          >
            <Motion.div variants={itemVariants} className={styles.whoLeft}>
              <h2 id="who-i-am-title" className={styles.whoHeading}>
                코드로 세상을<br />
                더 좋게 만드는<br />
                개발자
              </h2>
              <p className={styles.whoDesc}>
                단순히 동작하는 코드가 아닌, 사람이 보고 싶은 제품을 만듭니다. 기술은 수단이고, 목적은 언제나 사람입니다.
              </p>
              <div className={styles.whoTags}>
                {whoIAmTags.map((tag, idx) => (
                  <span key={tag} className={idx === 0 ? styles.whoTagPrimary : styles.whoTag}>{tag}</span>
                ))}
              </div>
            </Motion.div>

            <Motion.div variants={itemVariants} className={styles.whoRight}>
              {whoIAmRows.map(({ icon: Icon, title, desc }) => (
                <div key={title} className={styles.whoRow}>
                  <span className={styles.whoRowIcon}><Icon /></span>
                  <div>
                    <strong>{title}</strong>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </Motion.div>
          </Motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
