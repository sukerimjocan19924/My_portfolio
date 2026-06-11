import React from 'react'
import styles from './Project.module.scss'
import { useNavigate } from 'react-router-dom'
import { ArrowIcon, ArrowMiniIcon } from '../../utils/projectIcon'
import { mainProjectList, miniProjectList, getProjectsByCategory } from '../../utils/projectList'
import ProjectCard from '../projectCard/ProjectCard'
import MiniProjectCard from '../projectCard/MiniProjectCard'

const Project = () => {
  const mainProjects = mainProjectList
  const miniProjects = miniProjectList.slice(0, 4)
  const totalMiniCount = getProjectsByCategory('mini').length
  const extraCount = totalMiniCount - miniProjects.length

  const navigate = useNavigate()

  const handleProjectsClick = () => {
    navigate('/projects')
  }

  const handleMiniProjectsClick = () => {
    navigate('/projects') // 추후 미니프로젝트 카테고리 필터로 변경 예정
    // navigate('/projects?category=mini')
  }

  return (
    <section className={styles.project} aria-labelledby="project-title">
      <div className={`inner ${styles.inner}`}>
        <p className={styles.cardHeader}>03 / 나의 프로젝트</p>

        <div className={styles.mainSection}>
          <div className={styles.sectionHead}>
            <h2 className={styles.title} id="project-title">주요 프로젝트</h2>
            <button
              type="button"
              onClick={handleProjectsClick}
              aria-label="프로젝트 페이지 이동"
              className={styles.viewAll}
            >
              <span>전체 보기</span>
              <ArrowIcon />
            </button>
          </div>

          <div className={styles.mainGrid}>
            {mainProjects.map((p) => (
              <ProjectCard key={p.id} {...p} />
            ))}
          </div>
        </div>

        <div className={styles.miniSection}>
          <div className={styles.sectionHead}>
            <div className={styles.miniTitle}>
              <h3 className={styles.tit}>
                <span className={styles.dot}>• </span>
                미니 프로젝트
              </h3>
              <span className={styles.badge}>{totalMiniCount}개</span>
            </div>

            <button
              type="button"
              onClick={handleMiniProjectsClick}
              aria-label="미니 프로젝트 페이지 이동"
              className={styles.viewAllSub}>
              <ArrowMiniIcon />
              미니프로젝트 더 보기
            </button>
          </div>

          <div className={styles.miniGrid}>
            {miniProjects.map((p) => (
              <MiniProjectCard key={p.id} {...p} />
            ))}
            {extraCount > 0 && (
              <div className={styles.moreCard}>
                <span>+{extraCount}</span>
                <span className={styles.moreLabel}>더보기</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project