import React, { useState, useEffect } from 'react'
import styles from './Project.module.scss'
import { useNavigate } from 'react-router-dom'
import { ArrowIcon, ArrowMiniIcon } from '../../utils/projectIcon'
import { mainProjectList, miniProjectList, getProjectsByCategory } from '../../utils/projectList'
import ProjectCard from '../projectCard/ProjectCard'
import MiniProjectCard from '../projectCard/MiniProjectCard'
import { motion as Motion } from 'framer-motion'
import { contentVariants, itemVariants } from '../../utils/variants'

const Project = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobileOrTablet = windowWidth <= 1219
  const isDesktop = windowWidth >= 1220

  const mainProjects = mainProjectList
  const miniProjects = isDesktop
    ? miniProjectList.slice(0, 4)
    : miniProjectList.slice(0, 3)

  const totalMiniCount = getProjectsByCategory('mini').length
  const extraCount = totalMiniCount - miniProjects.length

  const navigate = useNavigate()

  return (
    <section className={styles.project} id="project-preview" aria-labelledby="project-title">
      <div className={`inner ${styles.inner}`}>
        <Motion.p
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className={styles.cardHeader}>
          03 / 나의 프로젝트
        </Motion.p>

        <div className={styles.mainSection}>
          <div className={styles.sectionHead}>
            <Motion.h2
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className={styles.title}
              id="project-title">
              주요 프로젝트
            </Motion.h2>
            <Motion.button
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              type="button"
              onClick={() => navigate('/projects')}
              aria-label="프로젝트 페이지 이동"
              className={styles.viewAll}
            >
              <span>전체 보기</span>
              <ArrowIcon />
            </Motion.button>
          </div>

          <Motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className={styles.mainGrid}>
            {mainProjects.map((p) => (
              <Motion.div variants={itemVariants} key={p.id}>
                <ProjectCard {...p} />
              </Motion.div>
            ))}
          </Motion.div>
        </div>

        <div className={styles.miniSection}>
          <Motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className={styles.sectionHead}>
            <div className={styles.miniTitle}>
              <h3 className={styles.tit}>
                <span className={styles.dot}>• </span>
                미니 프로젝트
              </h3>
              <span className={styles.badge}>{totalMiniCount}개</span>
            </div>
          </Motion.div>

          <Motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className={styles.miniGrid}>
            {miniProjects.map((p) => (
              <Motion.div variants={itemVariants} key={p.id}>
                <MiniProjectCard {...p} />
              </Motion.div>
            ))}
            {extraCount > 0 && (
              <Motion.div variants={itemVariants} className={styles.moreCard}>
                <span>+{extraCount}</span>
                <button
                  type="button"
                  onClick={() => navigate('/projects')}
                  aria-label="미니 프로젝트 페이지 이동"
                  className={styles.moreLabel}>
                    더 보기
                </button>
              </Motion.div>
            )}
          </Motion.div>
        </div>
      </div>
    </section>
  )
}

export default Project
