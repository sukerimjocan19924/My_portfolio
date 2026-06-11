import React from 'react'
import styles from './ProjectCard.module.scss'
import Tag from '../tag/Tag'
import { MainLink, FigmaLink } from '../../utils/projectIcon'
import { projectFilters } from '../../utils/projectList'

const ProjectCard = ({
    title,
    description,
    tags = [],
    categories = [],
    imageSrc = '',
    imageAlt = '',
    demoHref = '#',
    codeHref = '#',
    demoLabel = '사이트 보기',
    codeLabel = '디자인'
}) => {
    const getCategoryLabel = (id) => {
      const found = projectFilters.find((f) => f.id === id)
      return found ? found.label : id
    }

  return (
    <article className={styles.card}>
      <div className={styles.thumb}>
        {imageSrc && (
          <img
            src={imageSrc}
            alt={imageAlt || title}
            className={styles.image}
          />
        )}
        <span className={styles.category}>
             {categories.length > 0 && getCategoryLabel(categories[0])}
        </span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        
        <div className={styles.footer}>
          <div className={styles.tags}>
            {tags.map(({ label, variant }) => (
              <Tag key={label} variant={variant}>
                {label}
              </Tag>
            ))}
          </div>

          <div className={styles.cta}>
            {codeLabel && (
              <a
                href={codeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn__outline btn__md"
              >
                <FigmaLink />
                {codeLabel}
              </a>
            )}
            <a
              href={demoHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn__primary btn__md"
            >
              <MainLink />
              {demoLabel}
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
