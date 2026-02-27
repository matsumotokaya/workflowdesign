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
    ja: "上智大学哲学科在学中にデザイン事務所 WORKFLOW DESIGN を設立。大手広告代理店との提携を経て、スタートアップ・メガベンチャーでデザインやアートディレクション、WEBフロントエンド開発を手掛ける。",
    en: "Founded design studio WORKFLOW DESIGN while studying philosophy at Sophia University. After partnerships with major advertising agencies, now specializes in design, art direction, and web front-end development for startups and tech companies.",
  },
  location: {
    ja: "横浜市",
    en: "Yokohama",
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
    facebook: "https://www.facebook.com/kaya.matsumoto",
    linkedin: "https://www.linkedin.com/in/kaya-matsumoto-8546481ab/",
  },
  email: "matsumotokaya@gmail.com",
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
    id: "wealthpark-branding",
    title: { ja: "WealthPark ブランディング", en: "WealthPark Branding" },
    category: { ja: "ブランディング / ウェブデザイン", en: "Branding / Web Design" },
    description: {
      ja: "不動産テック企業WealthParkのコーポレートサイトリニューアルおよびブランディング。プロダクトの世界観を伝えるキービジュアル、UI設計、モーション演出を含む包括的なデザイン。",
      en: "Corporate website redesign and branding for WealthPark, a real estate tech company. Comprehensive design including key visuals, UI design, and motion graphics.",
    },
    thumbnail: "/works/wealthpark-branding/thumbnail.jpg",
    year: "2022",
    client: "WealthPark Inc.",
    role: { ja: "ブランディング / ウェブデザイン", en: "Branding / Web Design" },
    detailImages: [
      "/works/wealthpark-branding/001.jpg",
      "/works/wealthpark-branding/002.gif",
      "/works/wealthpark-branding/003.jpg",
      "/works/wealthpark-branding/new004.png",
      "/works/wealthpark-branding/004.jpg",
      "/works/wealthpark-branding/005.jpg",
      "/works/wealthpark-branding/006.png",
      "/works/wealthpark-branding/007.jpg",
      "/works/wealthpark-branding/008.jpg",
      "/works/wealthpark-branding/009.mp4",
      "/works/wealthpark-branding/010.mp4",
    ],
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
    id: "cntl-branding",
    title: { ja: "CNTL Lab ブランディング", en: "CNTL Lab Branding" },
    category: { ja: "ブランディング / アイデンティティ", en: "Branding / Identity" },
    description: {
      ja: "霞ヶ関の不動産デベロッパー中央日本土地建物のDX推進事業部として立ち上げられたラボのブランディング及びアイデンティティデザイン。",
      en: "Branding and identity design for a DX innovation lab established by Central Nippon Land and Building, a real estate developer based in Kasumigaseki.",
    },
    thumbnail: "/works/cntl-branding/thumbnail@3x-80.jpg",
    year: "2024",
    client: "Central Nippon Land and Building",
    role: { ja: "ブランディング / アイデンティティデザイン", en: "Branding / Identity Design" },
    detailImages: Array.from({ length: 6 }, (_, i) =>
      `/works/cntl-branding/${String(i + 1).padStart(3, "0")}@3x-80.jpg`
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
    id: "wealthpark-lab",
    title: { ja: "WealthPark Lab シンボルデザイン", en: "WealthPark Lab Symbol Design" },
    category: { ja: "ブランディング / シンボルデザイン", en: "Branding / Symbol Design" },
    description: {
      ja: "WealthPark Lab のブランディングおよびシンボルデザイン。コンセプト設計からロゴマーク、パターン、各種モックアップまでの包括的なビジュアルアイデンティティ。",
      en: "Branding and symbol design for WealthPark Lab. Comprehensive visual identity from concept design to logo mark, patterns, and mockups.",
    },
    thumbnail: "/works/wealthpark-lab/thumbnail.jpg",
    year: "2023",
    client: "WealthPark Inc.",
    role: { ja: "ブランディング / シンボルデザイン", en: "Branding / Symbol Design" },
    detailImages: Array.from({ length: 11 }, (_, i) => {
      const ext = i === 3 ? "png" : i === 5 ? "jpeg" : "jpg";
      return `/works/wealthpark-lab/${String(i + 1).padStart(3, "0")}.${ext}`;
    }),
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
  { company: "キナリノ（カカクコム）", role: { ja: "PdM", en: "Product Manager" } },
  { company: "WealthPark", role: { ja: "デザイナー", en: "Designer" } },
  { company: "MiSUMi", role: { ja: "アートディレクター", en: "Art Director" } },
  { company: "Crowd Bank（日本クラウド証券）", role: { ja: "デザイナー", en: "Designer" } },
];
