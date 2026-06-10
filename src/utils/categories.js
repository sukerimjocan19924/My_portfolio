import {
  DesignIcon, FigmaIcon, GitIcon, NotionIcon,
  FrontendIcon, ReactIcon, JsIcon, HtmlCssIcon, TailwindIcon,
  DevopsIcon, VercelIcon, S3Icon, DockerIcon, DbIcon, PostmanIcon,
  BackendIcon, SpringIcon, JavaIcon, PythonIcon, MysqlIcon,
} from "./toolsIcon"

export const categories = [
  {
    id: "design",
    icon: DesignIcon,
    title: "Design & Tools",
    subtitle: "디자인 & 협업 도구",
    items: [
      { icon: FigmaIcon, name: "Figma", desc: "UI/UX 설계 · 프로토타이핑" },
      { icon: GitIcon, name: "Git / GitHub", desc: "버전 관리 · 브랜치 전략" },
      { icon: NotionIcon, name: "Notion", desc: "문서화 · 프로젝트 관리" },
    ],
  },
  {
    id: "frontend",
    icon: FrontendIcon,
    title: "Frontend",
    subtitle: "프론트엔드 개발 역량",
    items: [
      { icon: ReactIcon, name: "React", desc: "컴포넌트 설계 · 상태 관리" },
      { icon: JsIcon, name: "JavaScript", desc: "ES6+ · 비동기 처리" },
      { icon: HtmlCssIcon, name: "HTML / CSS", desc: "시맨틱 마크업 · 웹 접근성" },
      { icon: TailwindIcon, name: "TailwindCSS / SCSS", desc: "유틸리티 UI · 반응형" },
    ],
  },
  {
    id: "devops",
    icon: DevopsIcon,
    title: "DevOps & Infra",
    subtitle: "배포 & 인프라 관리",
    items: [
      { icon: VercelIcon, name: "Vercel / AWS", desc: "CI/CD · 클라우드 배포" },
      { icon: S3Icon, name: "AWS S3 Bucket", desc: "파일 스토리지 · 에셋 관리" },
      { icon: DockerIcon, name: "Docker", desc: "컨테이너 빌드 · 배포" },
      { icon: DbIcon, name: "H2 / DBeaver", desc: "DB 관리 · 쿼리 검증" },
      { icon: PostmanIcon, name: "Postman", desc: "API 테스트 · 검증" },
    ],
  },
  {
    id: "backend",
    icon: BackendIcon,
    title: "Backend",
    subtitle: "서버 & 데이터 처리",
    items: [
      { icon: SpringIcon, name: "Spring Boot", desc: "REST API · MVC 패턴" },
      { icon: JavaIcon, name: "Java / JSP", desc: "객체지향 · 서블릿" },
      { icon: PythonIcon, name: "Python", desc: "데이터 처리 · 자동화" },
      { icon: MysqlIcon, name: "MySQL", desc: "쿼리 최적화 · 인덱싱" },
    ],
  },
]
