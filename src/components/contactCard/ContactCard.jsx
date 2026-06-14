import React, { useState, useEffect } from 'react'
import styles from './ContactCard.module.scss'
import { useForm } from '@formspree/react'
import { UserIcon, MailIcon, FileTextIcon, MessageIcon, ShieldCheckIcon } from '../../utils/contactIcon'

const EMAIL_OK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_MESSAGE = 1000

const ContactCard = ({ onClose, showClose = true, variant = "modal" }) => {
  const [formState, handleFormspreeSubmit] = useForm('xwvybybd')
  const [nameValue, setNameValue] = useState("")
  const [emailValue, setEmailValue] = useState("")
  const [messageValue, setMessageValue] = useState("")
  const [selected, setSelected] = useState("프로젝트 협업")

  useEffect(() => {
    if (formState.succeeded) {
      setNameValue("")
      setEmailValue("")
      setMessageValue("")
      setSelected("프로젝트 협업")
    }
  }, [formState.succeeded])

  const handleSend = async (e) => {
    e.preventDefault()
    if (!nameValue.trim()) return alert("이름을 입력해 주세요.")
    if (!emailValue.trim()) return alert("이메일 주소를 입력해 주세요.")
    if (!EMAIL_OK.test(emailValue)) return alert("올바른 이메일 주소를 입력하세요.")
    if (!messageValue.trim()) return alert("내용을 입력하세요.")
    if (messageValue.length > MAX_MESSAGE) return alert(`내용은 ${MAX_MESSAGE}자 이내로 입력하세요.`)

    const formData = new FormData()
    formData.set("이름", nameValue)
    formData.set("이메일", emailValue)
    formData.set("문의 유형", selected)
    formData.set("문의내용", messageValue)

    await handleFormspreeSubmit(formData)
  }

  return (
    <div className={`${styles.contact} ${variant === "modal" ? styles.contactModal : ""}`}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h3>메시지 보내기</h3>
          {showClose && (
            <button 
              type="button" 
              className={styles.closeBtn} 
              onClick={onClose} 
              aria-label="닫기"
            >
              ✕
            </button>
          )}
        </div>
        <p>24시간 이내로 답변드리겠습니다.</p>
      </div>

      <form onSubmit={handleSend}>
        <div className={styles.row}>
          <div className={styles.field}>
            <div className={styles.label}>
              <UserIcon/> <span>이름</span>
            </div>
            <input 
              type="text" 
              placeholder="홍길동" 
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <div className={styles.label}>
              <MailIcon/> <span>이메일</span>
            </div>
            <input 
              type="email" 
              placeholder="example@email.com" 
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.field}>
          <div className={styles.label}>
            <FileTextIcon/> <span>문의 유형</span>
          </div>
          <div className={styles.typeButtons}>
            {["프로젝트 협업", "채용 문의", "기타"].map(type => (
              <button
                type="button"
                key={type}
                className={`${styles.typeBtn} ${selected === type ? styles.active : ""}`}
                onClick={() => setSelected(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.field}>
          <div className={styles.label}>
            <MessageIcon/> <span>문의 내용</span>
          </div>
          <textarea 
            placeholder="문의하실 내용을 자세히 적어주세요. 어떤 내용이든 환영합니다." 
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
          />
        </div>

        <div className={styles.modalActions}>
          <div className={styles.noticeWrap}>
            <ShieldCheckIcon/>
            <p className={styles.notice}>개인정보는 안전하게 보호됩니다.</p>
          </div>
          
          <button type="submit">
            {formState.submitting ? "전송 중..." : "메시지 보내기"}
            <img src='/icons/icon-send-horizontal.svg' alt="send" />
          </button>
        </div>
      </form>

      {formState.succeeded && (
        <p style={{ color: "green" }}>✅ 메시지가 성공적으로 전송되었습니다!</p>
      )}
      {formState.errors?.length > 0 && (
        <p style={{ color: "red" }}>❌ 전송 중 오류가 발생했습니다. 다시 시도해 주세요.</p>
      )}
    </div>
  )
}

export default ContactCard
