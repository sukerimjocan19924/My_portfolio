import { EmailIcon, DiscordIcon, PhoneIcon, GithubIcon, LocationIcon } from '../utils/contactIcon'

export const contactList = [
  { id: 'email', icon: EmailIcon, label: '이메일', value: 'hseolgan@gmail.com' },
  { id: 'discord', icon: DiscordIcon, label: '디스코드', value: '홍석란#yung1214' },
  { id: 'phone', icon: PhoneIcon, label: '전화', value: '010-7313-7197' },
  { id: 'github', icon: GithubIcon, label: '깃허브', value: 'sukerimjocan19924' },
]

// contactPage
export const quickLinks = [
  { label: 'GitHub', href: 'https://github.com/walkingocean19924', icon: GithubIcon },
  { label: '이력서', href: '#', icon: EmailIcon },
  { label: '포트폴리오', href: '#', icon: EmailIcon },
]

export const contactInfoList = [
  { icon: EmailIcon, label: '이메일', value: 'hseolgan@gmail.com'},
  { icon: GithubIcon, label: 'GitHub', value: 'github.com/sukerimjocan19924'},
  { icon: PhoneIcon, label: '전화', value: '010-7313-7197'},
  { icon: LocationIcon, label: '주소', value: '경기도 남양주시 진접읍 경복대로 425'},
]
