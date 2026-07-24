import {
  UserFirstIcon, LayersIcon, TargetIcon, RefreshIcon,
  GraduationCapIcon, MonitorIcon, BookOpenIcon,
  HeartIcon, BulbIcon, UsersIcon,
} from './aboutIcon'

export const coreValues = [
  {
    icon: UserFirstIcon,
    title: '사용자 중심',
    desc: '모든 결정의 시작점은 사용자입니다. 기능보다 경험을, 속도보다 완성도를 우선시합니다.',
    tag: 'User First',
  },
  {
    icon: LayersIcon,
    title: '전체를 보는 시야',
    desc: '프론트엔드부터 인프라까지, 전체 시스템을 먼저 이해하고 최적의 결정을 내립니다.',
    tag: 'Big Picture',
  },
  {
    icon: TargetIcon,
    title: '디테일에 집착',
    desc: '픽셀 하나, 여백 하나도 의미 없이 넘기지 않습니다. 디테일이 전체의 완성도를 결정합니다.',
    tag: 'Pixel Perfect',
  },
  {
    icon: RefreshIcon,
    title: '꾸준한 성장',
    desc: '기술은 끊임없이 변합니다. 새로운 것을 배우는 것을 두려워하지 않고 즐깁니다.',
    tag: 'Keep Growing',
  },
]

export const careerTimeline = [
  {
    period: '2022 — 현재',
    status: '재학 중',
    dot: 'active',
    title: '경복대학교 소프트웨어융합과',
    desc: '전공 과목과 팀 프로젝트를 병행하며 실무 감각과 협업 능력을 키우고 있습니다.',
    tags: ['팀 프로젝트', '알고리즘'],
  },
  {
    period: '2023.07 — 2023.09',
    status: '완료',
    dot: 'done',
    title: '스타트업 프론트엔드 인턴',
    desc: 'React 기반 어드민 대시보드 UI를 개발하고, 실제 서비스 배포 및 QA 경험을 쌓았습니다.',
    tags: ['React', '사용자 테스트'],
  },
  {
    period: '2024.01 — 진행 중',
    status: '진행 중',
    dot: 'done',
    title: '개인 포트폴리오 프로젝트 개발',
    desc: '풀스택 포트폴리오 웹사이트 3종을 설계 및 구현 중이며, 디자인부터 배포까지 전 과정을 직접 진행합니다.',
    tags: ['React', 'Spring Boot', 'AWS'],
  },
  {
    period: '2025 — 목표',
    status: '진행 예정',
    dot: 'goal',
    title: '풀스택 개발자 취업 목표',
    desc: '사용자 경험과 완성도를 함께 챙길 수 있는 팀에 합류하는 것이 당면 목표입니다.',
    tags: [],
  },
]

export const awards = [
  { title: '교내 해커톤 최우수상', sub: '경복대학교 소프트웨어융합과 · 2023' },
  { title: '프론트엔드 경진대회 장려상', sub: 'React 기반 서비스 개발 · 2024' },
  { title: '오픈소스 기여 10+ PR', sub: '개인 깃허브 기여 이력 · 진행 중' },
]

export const workingStyle = [
  '문서화와 커밋 컨벤션을 우선으로 합니다.',
  '새로운 기술 스택보다 안정된 프로덕션을 선호합니다.',
  '디자이너·개발자 간 원활한 소통을 지향합니다.',
  '마감 기한과 코드 품질을 함께 관리합니다.',
]

export const education = [
  {
    icon: GraduationCapIcon,
    title: '경복대학교',
    badge: '재학 중',
    sub: '소프트웨어융합학과',
    rows: [
      { key: '기간', value: '2022 — 현재 (졸업 예정)' },
      { key: '전공', value: '소프트웨어융합' },
      { key: '주요 과목', value: '자료구조 · 알고리즘 · 웹프로그래밍' },
    ],
    tags: ['자료구조', '알고리즘', '웹프로그래밍', '데이터베이스'],
  },
  {
    icon: MonitorIcon,
    title: '프론트엔드 부트캠프',
    badge: '수료 완료',
    sub: 'React 심화 과정',
    rows: [
      { key: '기간', value: '2023.03 — 2023.06' },
      { key: '수료 여부', value: '수료 완료' },
      { key: '커리큘럼', value: 'React · TypeScript · Testing' },
    ],
    tags: ['React 심화', 'TypeScript', 'Jest Testing'],
  },
  {
    icon: BookOpenIcon,
    title: '자기주도 학습',
    badge: '지속 중',
    sub: '오픈소스 & 개인 연구',
    rows: [
      { key: '기간', value: '2022 — 현재 (지속)' },
      { key: 'GitHub PR', value: '10+ Merged' },
      { key: '블로그 포스트', value: '기술 블로그 운영 중' },
    ],
    tags: ['오픈소스 기여', '기술 블로그', '사이드 프로젝트'],
  },
]

export const whoIAmTags = ['사용자 중심', '문제 해결', '협업', '완성도', '성장']

export const whoIAmRows = [
  { icon: HeartIcon, title: '진심을 담아 만듭니다', desc: '모든 프로젝트에 제 이름을 걸 수 있을 만큼 진심을 다합니다.' },
  { icon: BulbIcon, title: '생각하며 코딩합니다', desc: '왜 이 구조인지, 왜 이 기술인지 항상 고민하며 개발합니다.' },
  { icon: UsersIcon, title: '팀과 함께 성장합니다', desc: '서로 배우고 함께 성장할 수 있는 팀에서 일하고 싶습니다.' },
]
