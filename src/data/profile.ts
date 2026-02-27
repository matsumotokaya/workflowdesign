export const profile = {
  name: {
    ja: "松本 夏弥",
    en: "Kaya Matsumoto",
  },
  title: {
    ja: "デザイナー / フロントエンド開発",
    en: "Designer / Front-end Developer",
  },
  studio: "Workflow Design",
  bio: {
    ja: "上智大学哲学科在学中にデザイン事務所 WORKFLOW DESIGN を設立。大手広告代理店やレコード会社との提携を経て、スタートアップ・メガベンチャーでデザインとフロントエンド開発を手掛ける。",
    en: "Founded design studio WORKFLOW DESIGN while studying philosophy at Sophia University. After partnerships with major advertising agencies and record labels, now specializes in design and front-end development for startups and tech companies.",
  },
  location: {
    ja: "東京",
    en: "Tokyo",
  },
  education: {
    ja: "上智大学 哲学専攻",
    en: "Sophia University, Philosophy",
  },
  origin: {
    ja: "三重県出身",
    en: "From Mie, Japan",
  },
  social: {
    instagram: "https://instagram.com/whatif.ep",
    instagramHandle: "@whatif.ep",
  },
  email: "hello@workflowdesign.net",
};

export type Project = {
  id: string;
  title: { ja: string; en: string };
  category: { ja: string; en: string };
  description: { ja: string; en: string };
  thumbnail: string;
  year: string;
  client?: string;
  role?: { ja: string; en: string };
  detailImages?: string[];
};

export const projects: Project[] = [
  {
    id: "glc-branding",
    title: { ja: "GLC ブランディング", en: "GLC Branding" },
    category: { ja: "企業ブランディング", en: "Corporate Branding" },
    description: {
      ja: "上場企業GLC株式会社のロゴデザインおよびブランドアイデンティティ設計。アイソメトリックグリッドを基盤とした立体的なロゴマークと、ロゴ利用ガイドラインの策定。",
      en: "Logo design and brand identity for GLC Inc., a publicly listed company. Isometric grid-based 3D logo mark and comprehensive logo usage guidelines.",
    },
    thumbnail: "/works/glc-branding/GLC_LOGO-USAGE-GUIDELINE_v1_003.jpg",
    year: "2026",
    client: "GLC Inc.",
    role: { ja: "ロゴデザイン / ブランドガイドライン", en: "Logo Design / Brand Guidelines" },
    detailImages: Array.from({ length: 19 }, (_, i) =>
      `/works/glc-branding/${String(i + 1).padStart(3, "0")}@3x-80.jpg`
    ),
  },
  {
    id: "wealthpark-factbook",
    title: { ja: "WealthPark Fact Book", en: "WealthPark Fact Book" },
    category: { ja: "プレゼンテーション / 資料デザイン", en: "Presentation / Document Design" },
    description: {
      ja: "WealthPark株式会社のファクトブック（会社紹介資料）のデザイン。資金調達・採用・メディア対応・営業活動など、あらゆるステークホルダーに向けてビジョンとトラックレコードを伝えるためのホワイトペーパー。",
      en: "Fact book design for WealthPark Inc. A white paper communicating the company's vision and track record to stakeholders across fundraising, recruitment, media relations, and business development.",
    },
    thumbnail: "/works/wealthpark-factbook/001.jpg",
    year: "2023",
    client: "WealthPark Inc.",
    role: { ja: "資料デザイン / アートディレクション", en: "Document Design / Art Direction" },
    detailImages: Array.from({ length: 22 }, (_, i) =>
      `/works/wealthpark-factbook/${String(i + 1).padStart(3, "0")}.jpg`
    ),
  },
  {
    id: "funds",
    title: { ja: "Funds デザイン", en: "Funds Design" },
    category: { ja: "グラフィック / イベントデザイン", en: "Graphic / Event Design" },
    description: {
      ja: "投資型クラウドファンディングサービス「Funds（ファンズ）」のイベントブースデザイン、販促物デザインなど。",
      en: "Event booth design and promotional materials for Funds, a lending-type crowdfunding service.",
    },
    thumbnail: "/works/funds/thumbnail.jpg",
    year: "2025",
    client: "Funds Inc.",
    role: { ja: "グラフィックデザイン / イベントデザイン", en: "Graphic Design / Event Design" },
    detailImages: [
      "/works/funds/001.jpg",
      "/works/funds/002.jpg",
      "/works/funds/003.jpg",
    ],
  },
  {
    id: "digital-platform",
    title: { ja: "デジタルプラットフォーム", en: "Digital Platform" },
    category: { ja: "UI/UXデザイン", en: "UI/UX Design" },
    description: {
      ja: "プロダクトのインターフェースデザインとUX設計",
      en: "Product interface design and UX architecture",
    },
    thumbnail: "/002.png",
    year: "2025",
  },
  {
    id: "editorial",
    title: { ja: "エディトリアルデザイン", en: "Editorial Design" },
    category: { ja: "グラフィックデザイン", en: "Graphic Design" },
    description: {
      ja: "出版物のレイアウトとビジュアルデザイン",
      en: "Publication layout and visual design",
    },
    thumbnail: "/003.jpg",
    year: "2025",
  },
  {
    id: "corporate-identity",
    title: { ja: "コーポレートアイデンティティ", en: "Corporate Identity" },
    category: { ja: "ブランド戦略", en: "Brand Strategy" },
    description: {
      ja: "企業のビジュアルアイデンティティ全体設計",
      en: "Complete visual identity system design",
    },
    thumbnail: "/004.jpg",
    year: "2024",
  },
  {
    id: "web-experience",
    title: { ja: "ウェブエクスペリエンス", en: "Web Experience" },
    category: { ja: "ウェブデザイン", en: "Web Design" },
    description: {
      ja: "インタラクティブなウェブ体験の設計・開発",
      en: "Interactive web experience design & development",
    },
    thumbnail: "/005.jpg",
    year: "2024",
  },
  {
    id: "whatif-ai",
    title: { ja: "WHATIF - 生成AI", en: "WHATIF - Generative AI" },
    category: { ja: "生成AI / ソーシャル", en: "Generative AI / Social" },
    description: {
      ja: "生成AIアカウント運営 — 12万フォロワー",
      en: "Generative AI account — 120K followers",
    },
    thumbnail: "/006.jpg",
    year: "2024",
  },
  {
    id: "logo-design",
    title: { ja: "ロゴデザイン", en: "Logo Design" },
    category: { ja: "ブランディング", en: "Branding" },
    description: {
      ja: "企業・サービスのロゴマーク制作",
      en: "Logo mark design for companies and services",
    },
    thumbnail: "/007.jpg",
    year: "2023",
  },
  {
    id: "mobile-app",
    title: { ja: "モバイルアプリ", en: "Mobile App" },
    category: { ja: "アプリデザイン", en: "App Design" },
    description: {
      ja: "モバイルアプリケーションのUI/UXデザイン",
      en: "Mobile application UI/UX design",
    },
    thumbnail: "/008.jpg",
    year: "2023",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.id === slug);
}

export type Experience = {
  company: string;
  role: { ja: string; en: string };
  period?: string;
};

export const experiences: Experience[] = [
  { company: "食べログ", role: { ja: "フロントエンドエンジニア", en: "Front-end Engineer" } },
  { company: "キナリノ", role: { ja: "PdM", en: "Product Manager" } },
  { company: "WealthPark", role: { ja: "デザイナー", en: "Designer" } },
  { company: "MiSUMi", role: { ja: "アートディレクター", en: "Art Director" } },
  { company: "CrowdBank", role: { ja: "デザイナー", en: "Designer" } },
];
