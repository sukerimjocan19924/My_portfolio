import React from "react"
import styles from './Tools.module.scss'
import { MiniMascotIcon } from '../../utils/mascotIcon'
import { MiniMascotIcon2_1, MiniMascotIcon2_2 } from '../../utils/mascotIcon'
import { categories } from "../../utils/categories"

const Tools = () => {
  return (
    <section className={styles.tools} aria-labelledby="tools-title">
      <div className={`inner ${styles.inner}`}>
        <p className={styles.cardHeader}>02 / 나의 능력</p>

        <div className={styles.cardTitle}>
          <p className={styles.title} id="tools-title">기술 스택</p>
          <div className={styles.mascotWrapper}>
            <MiniMascotIcon2_1 />
            <MiniMascotIcon2_2 />
          </div>
        </div>

        <div className={styles.grid}>
          {categories.map((cat) => (
            <div key={cat.id} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.catIcon}>
                  <cat.icon />
                </span>
                <div className={styles.catMeta}>
                  <strong className={styles.catTitle}>{cat.title}</strong>
                  <span className={styles.catSub}>{cat.subtitle}</span>
                </div>
              </div>

              <ul className={styles.itemList}>
                {cat.items.map((item) => (
                  <li key={item.name} className={styles.item}>
                    <span className={styles.itemIcon}>
                      <item.icon />
                    </span>
                    <div className={styles.itemMeta}>
                      <strong className={styles.itemName}>{item.name}</strong>
                      <span className={styles.itemDesc}>{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tools
