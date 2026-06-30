import React, { useState, useEffect } from 'react'
import styles from './Project.module.scss'
import { useNavigate } from 'react-router-dom'
import { ArrowIcon, ArrowMiniIcon } from '../../utils/projectIcon'
import { mainProjectList, miniProjectList, getProjectsByCategory } from '../../utils/projectList'
import ProjectCard from '../projectCard/ProjectCard'
import MiniProjectCard from '../projectCard/MiniProjectCard'
import { motion as Motion, scale } from 'framer-motion'
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

  const handleProjectsClick = () => {
    navigate('/projects')
  }

  const handleMiniProjectsClick = () => {
    navigate('/projects') // 추후 미니프로젝트 카테고리 필터로 변경 예정
  }

  return (
    <section className={styles.project} id="project-preview" aria-labelledby="project-title">
      <Motion.div
        variants={contentVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.3 }}
        className={`inner ${styles.inner}`}>
        <Motion.p variants={itemVariants} className={styles.cardHeader}>03 / 나의 프로젝트</Motion.p>

        <div className={styles.mainSection}>
          <div className={styles.sectionHead}>
            <Motion.h2 variants={itemVariants} className={styles.title} id="project-title">주요 프로젝트</Motion.h2>
            <Motion.button
              variants={itemVariants}
              type="button"
              onClick={handleProjectsClick}
              aria-label="프로젝트 페이지 이동"
              className={styles.viewAll}
            >
              <span>전체 보기</span>
              <ArrowIcon />
            </Motion.button>
          </div>

          <div className={styles.mainGrid}>
            {mainProjects.map((p) => (
              <Motion.div variants={itemVariants}>
                <ProjectCard key={p.id} {...p} />
              </Motion.div>
            ))}
          </div>
        </div>

        <div className={styles.miniSection}>
          <div className={styles.sectionHead}>
            <Motion.div variants={itemVariants} className={styles.miniTitle}>
              <h3 className={styles.tit}>
                <span className={styles.dot}>• </span>
                미니 프로젝트
              </h3>
              <span className={styles.badge}>{totalMiniCount}개</span>
            </Motion.div>
          </div>

          <div className={styles.miniGrid}>
            {miniProjects.map((p) => (
              <Motion.div variants={itemVariants}>
                <MiniProjectCard key={p.id} {...p} />
              </Motion.div>
            ))}
            {extraCount > 0 && (
              <Motion.div variants={itemVariants} className={styles.moreCard}>
                <span>+{extraCount}</span>
                <button
                  type="button"
                  onClick={handleMiniProjectsClick}
                  aria-label="미니 프로젝트 페이지 이동"
                  className={styles.moreLabel}>
                    더 보기
                </button>
              </Motion.div>
            )}
          </div>
        </div>
      </Motion.div>
    </section>
  )
}

export default Project
