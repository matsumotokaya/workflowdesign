const en = {
  // Navigation
  navWork: "Work",
  navAbout: "About",
  navContact: "Contact",

  // Hero
  scroll: "Scroll",

  // Work
  selectedWork: "Selected Work",
  projects: "Projects",
  viewProject: "View Project",

  // About
  about: "About",
  profile: "Profile",
  biography: "Biography",
  bioParagraph2:
    "Built experience at web advertising agencies during the early days of online advertising, then transitioned to consumer-facing e-commerce and media. Now works across finance, manufacturing, real estate and other B2B sectors in design and development.",
  details: "Details",
  labelLocation: "Location",
  labelEducation: "Education",
  labelOrigin: "Origin",
  labelLanguages: "Languages",
  langJa: "Japanese",
  langEn: "English",
  labelCertifications: "Certifications",
  cert1: "Securities Sales Representative (Type 1)",
  cert2: "Internal Control Manager",
  cert3: "Non-life Insurance Solicitor",
  cert4: "TOEIC 800+",
  experience: "Experience",
  services: "Services",
  serviceBrandStrategy: "Brand Strategy",
  serviceUiUx: "UI/UX Design",
  serviceWebDev: "Web Development",
  serviceArtDirection: "Art Direction",
  serviceGraphicDesign: "Graphic Design",
  serviceGenerativeAi: "Generative AI",
  companies: "Companies",

  // Contact
  contact: "Contact",
  contactHeading: "Let\u2019s Work Together",
  contactDescription:
    "Branding, UI/UX design, web development \u2014 feel free to reach out about your project.",
  labelEmail: "Email",
  labelFacebook: "Facebook",
  labelLinkedin: "LinkedIn",
  labelLocationContact: "Location",

  // ProjectDetail
  back: "Back",
  client: "Client",
  role: "Role",
  year: "Year",
  overview: "Overview",
  nextProject: "Next Project",
  allProjects: "All Projects",
} as const;

const ja: Record<keyof typeof en, string> = {
  navWork: "Work",
  navAbout: "About",
  navContact: "Contact",

  scroll: "Scroll",

  selectedWork: "Selected Work",
  projects: "プロジェクト",
  viewProject: "View Project",

  about: "About",
  profile: "プロフィール",
  biography: "Biography",
  bioParagraph2:
    "ネット広告黎明期にWEB広告制作会社で経験を積み、コンシューマ向けEC／メディア事業へ転身。その後は金融、製造業、不動産などB2B事業でデザインや開発を務める。",
  details: "Details",
  labelLocation: "所在地",
  labelEducation: "学歴",
  labelOrigin: "出身",
  labelLanguages: "言語",
  langJa: "日本語",
  langEn: "English",
  labelCertifications: "資格",
  cert1: "証券外務員第一種",
  cert2: "内部管理責任者",
  cert3: "損害保険募集人",
  cert4: "TOEIC 800+",
  experience: "Experience",
  services: "Services",
  serviceBrandStrategy: "ブランド戦略",
  serviceUiUx: "UI/UXデザイン",
  serviceWebDev: "ウェブ開発",
  serviceArtDirection: "アートディレクション",
  serviceGraphicDesign: "グラフィックデザイン",
  serviceGenerativeAi: "生成AI",
  companies: "Companies",

  contact: "Contact",
  contactHeading: "お仕事のご相談",
  contactDescription:
    "ブランディング、UI/UXデザイン、ウェブ開発など、プロジェクトについてお気軽にご連絡ください。",
  labelEmail: "Email",
  labelFacebook: "Facebook",
  labelLinkedin: "LinkedIn",
  labelLocationContact: "Location",

  back: "Back",
  client: "Client",
  role: "Role",
  year: "Year",
  overview: "Overview",
  nextProject: "Next Project",
  allProjects: "All Projects",
};

export const translations: Record<string, Record<string, string>> = { en, ja };

export type TranslationKey = keyof typeof en;
