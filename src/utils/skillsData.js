import { categories } from './categories'

const levels = {
  'Figma': { level: 'Advanced', percent: 92 },
  'Git / GitHub': { level: 'Advanced', percent: 88 },
  'Notion': { level: 'Intermediate', percent: 78 },
  'React': { level: 'Advanced', percent: 90 },
  'JavaScript': { level: 'Advanced', percent: 85 },
  'HTML / CSS': { level: 'Advanced', percent: 95 },
  'TailwindCSS / SCSS': { level: 'Advanced', percent: 85 },
  'Vercel / AWS': { level: 'Intermediate', percent: 72 },
  'AWS S3 Bucket': { level: 'Intermediate', percent: 68 },
  'Docker': { level: 'Beginner', percent: 52 },
  'H2 / DBeaver': { level: 'Intermediate', percent: 65 },
  'Postman': { level: 'Advanced', percent: 80 },
  'Spring Boot': { level: 'Intermediate', percent: 65 },
  'Java / JSP': { level: 'Intermediate', percent: 70 },
  'Python': { level: 'Intermediate', percent: 62 },
  'MySQL': { level: 'Intermediate', percent: 68 },
}

const accents = {
  design: 'cyan',
  frontend: 'green',
  devops: 'yellow',
  backend: 'purple',
}

export const skillCategories = categories.map((cat) => ({
  ...cat,
  accent: accents[cat.id],
  countLabel: `${cat.items.length}개 기술`,
  items: cat.items.map((item) => ({ ...item, ...levels[item.name] })),
}))

export const skillStats = [
  { label: '기술 스택', value: '15+' },
  { label: '개발 경력', value: '3년' },
  { label: '프로젝트', value: '10+' },
]
