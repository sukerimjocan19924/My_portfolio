import React, { useMemo, useState, useEffect } from "react"
import styles from "./ProjectsPages.module.scss"
import ProjectCard from "../../components/projectCard/ProjectCard"
import {
  projectFilters,
  projectsPageItems,
} from "../../utils/projectList"

const ITEMS_PER_PAGE = 12

const ProjectsPages = () => {
  const [filter, setFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)

  const filteredProjects = useMemo(() => {
    if (filter === "all") return projectsPageItems

    return projectsPageItems.filter((project) =>
      project.categories.includes(filter)
    )
  }, [filter])

  useEffect(() => {
    setCurrentPage(1)
  }, [filter])

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE)

  const visibleProjects = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    return filteredProjects.slice(start, start + ITEMS_PER_PAGE)
  }, [filteredProjects, currentPage])

  /* ---------------- Pagination ---------------- */

  const visiblePages = useMemo(() => {
    const pages = []

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
      return pages
    }

    // 시작
    if (currentPage <= 4) {
      pages.push(1, 2, 3, 4, 5, "...", totalPages)
      return pages
    }

    // 끝
    if (currentPage >= totalPages - 3) {
      pages.push(
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages
      )

      return pages
    }

    // 가운데
    pages.push(
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages
    )

    return pages
  }, [currentPage, totalPages])

  return (
    <section className={styles.projectPage}>
      <div className={`inner ${styles.inner}`}>
        <header className={styles.hero}>
          <div className={styles.heroTop}>
            <h1 className={styles.title}>프로젝트 보기</h1>

            <div className={styles.countBadge}>
              <span className={styles.dot}></span>
              전체 {projectsPageItems.length}
            </div>
          </div>
        </header>

        <div
          className={styles.filters}
          role="tablist"
          aria-label="Project Filters"
        >
          {projectFilters.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={filter === id}
              onClick={() => setFilter(id)}
              className={`${styles.filterBtn} ${
                filter === id ? styles.filterBtnActive : ""
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {visibleProjects.length === 0 ? (
          <div className={styles.empty}>
            프로젝트가 없습니다.
          </div>
        ) : (
          <>
            <div className={styles.grid}>
              {visibleProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  {...project}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <nav className={styles.pagination}>
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() =>
                    setCurrentPage((page) => Math.max(1, page - 1))
                  }
                >
                  &lt;
                </button>

                {visiblePages.map((page, index) =>
                  page === "..." ? (
                    <span
                      key={`ellipsis-${index}`}
                      className={styles.ellipsis}
                    >
                      …
                    </span>
                  ) : (
                    <button
                      key={page}
                      type="button"
                      onClick={() => setCurrentPage(page)}
                      className={
                        currentPage === page
                          ? styles.activePage
                          : ""
                      }
                    >
                      {page}
                    </button>
                  )
                )}

                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() =>
                    setCurrentPage((page) =>
                      Math.min(totalPages, page + 1)
                    )
                  }
                >
                  &gt;
                </button>
              </nav>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export default ProjectsPages
