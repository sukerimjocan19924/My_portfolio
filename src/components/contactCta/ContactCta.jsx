import React, { useState } from 'react'
import styles from './ContactCta.module.scss'
import { MiniMascotIcon2_1, MiniMascotIcon2_2 } from '../../utils/mascotIcon'
import { TriangleIcon, SendIcon, ArrowIcon } from '../../utils/contactIcon'
import { contactList } from '../../utils/contactList'
import ContactCard from '../contactCard/ContactCard'


const ContactCta = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
    <section className={styles.contact} aria-labelledby="contact-heading">
        <div className={`inner ${styles.inner}`}>
            <div className={styles.cardHeader}>
                <p className={styles.cardTitle}>04 / 마무리 &amp; 연락하기</p>

                <div className={styles.mascotWrapper}>
                    <MiniMascotIcon2_1 />
                    <MiniMascotIcon2_2 />
                </div>
            </div>

            <div className={styles.mainSection}>
                <div className={styles.headingbox}>
                    <h2 id="contact-heading" className={styles.heading}>
                    함께라면 <TriangleIcon className={styles.triangle} /> 만들 수 있습니다.
                    </h2>

                    <p className={styles.subtitle}>
                    한 줄 코드도, 하나의 디자인도 함께 완성됩니다. 언제든 편하게 연락주세요.
                    </p>
                </div>

                <div className={styles.contactList}>
                {contactList.map(({ id, icon: Icon, label, value }) => (
                    <div key={id} className={styles.contactItem}>
                    <span className={styles.iconBox}>
                        <Icon />
                    </span>
                    <strong className={styles.label}>{label}</strong>
                    <span className={styles.value}>{value}</span>
                    </div>
                ))}
                </div>

                <div className={styles.ctaButtons}>
                    <button
                        className={styles.primaryBtn} 
                        onClick={() => setIsModalOpen(true)}
                        >
                        메시지 보내기
                        <img src='/icons/icon-send-horizontal.svg' alt="send" />
                    </button>
                    <a className={styles.ghostBtn} href="/contact">
                        <ArrowIcon />
                        Contact 상세 페이지로
                    </a>
                </div>
            </div>
        </div>

        {isModalOpen && (
            <div className={styles.modalOverlay}>
                <ContactCard variant="modal" onClose={() => setIsModalOpen(false)} showClose={true} />
            </div>
        )}
    </section>
  )
}

export default ContactCta
