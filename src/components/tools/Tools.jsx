import React from "react"
import styles from './Tools.module.scss'
import { MiniMascotIcon } from '../../utils/mascotIcon'
import { MiniMascotIcon2_1, MiniMascotIcon2_2 } from '../../utils/mascotIcon'
import { categories } from "../../utils/categories"
import { motion as Motion, scale } from 'framer-motion'
import { contentVariants, itemVariants, visualVariants } from '../../utils/variants'


const Tools = () => {
  return (
    <section className={styles.tools} aria-labelledby="tools-title">
      <Motion.div
        variants={contentVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.3 }}
        className={`inner ${styles.inner}`}>
        <Motion.p variants={itemVariants} className={styles.cardHeader}>02 / 나의 능력</Motion.p>

        <div className={styles.cardTitle}>
          <Motion.p variants={itemVariants} className={styles.title} id="tools-title">기술 스택</Motion.p>
          <Motion.div variants={visualVariants} className={styles.mascotWrapper}>
            <MiniMascotIcon2_1 />
            <MiniMascotIcon2_2 />
          </Motion.div>
        </div>

        <div className={styles.grid}>
          {categories.map((cat) => (
            <Motion.div variants={itemVariants} key={cat.id} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.catIcon}>
                  <cat.icon className={styles.icon} />
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
            </Motion.div>
          ))}
        </div>
      </Motion.div>
    </section>
  )
}

export default Tools
