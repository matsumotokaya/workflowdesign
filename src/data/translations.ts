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
  projects: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8",
  viewProject: "View Project",

  about: "About",
  profile: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB",
  biography: "Biography",
  bioParagraph2:
    "\u30CD\u30C3\u30C8\u5E83\u544A\u9ECE\u660E\u671F\u306BWEB\u5E83\u544A\u5236\u4F5C\u4F1A\u793E\u3067\u7D4C\u9A13\u3092\u7A4D\u307F\u3001\u30B3\u30F3\u30B7\u30E5\u30FC\u30DE\u5411\u3051EC\uFF0F\u30E1\u30C7\u30A3\u30A2\u4E8B\u696D\u3078\u8EE2\u8EAB\u3002\u305D\u306E\u5F8C\u306F\u91D1\u878D\u3001\u88FD\u9020\u696D\u3001\u4E0D\u52D5\u7523\u306A\u3069B2B\u4E8B\u696D\u3067\u30C7\u30B6\u30A4\u30F3\u3084\u958B\u767A\u3092\u52D9\u3081\u308B\u3002",
  details: "Details",
  labelLocation: "\u6240\u5728\u5730",
  labelEducation: "\u5B66\u6B74",
  labelOrigin: "\u51FA\u8EAB",
  labelLanguages: "\u8A00\u8A9E",
  langJa: "\u65E5\u672C\u8A9E",
  langEn: "English",
  labelCertifications: "\u8CC7\u683C",
  cert1: "\u8A3C\u5238\u5916\u52D9\u54E1\u7B2C\u4E00\u7A2E",
  cert2: "\u5185\u90E8\u7BA1\u7406\u8CAC\u4EFB\u8005",
  cert3: "\u640D\u5BB3\u4FDD\u967A\u52DF\u96C6\u4EBA",
  cert4: "TOEIC 800+",
  experience: "Experience",
  services: "Services",
  serviceBrandStrategy: "\u30D6\u30E9\u30F3\u30C9\u6226\u7565",
  serviceUiUx: "UI/UX\u30C7\u30B6\u30A4\u30F3",
  serviceWebDev: "\u30A6\u30A7\u30D6\u958B\u767A",
  serviceArtDirection: "\u30A2\u30FC\u30C8\u30C7\u30A3\u30EC\u30AF\u30B7\u30E7\u30F3",
  serviceGraphicDesign: "\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30C7\u30B6\u30A4\u30F3",
  serviceGenerativeAi: "\u751F\u6210AI",
  companies: "Companies",

  contact: "Contact",
  contactHeading: "\u304A\u4ED5\u4E8B\u306E\u3054\u76F8\u8AC7",
  contactDescription:
    "\u30D6\u30E9\u30F3\u30C7\u30A3\u30F3\u30B0\u3001UI/UX\u30C7\u30B6\u30A4\u30F3\u3001\u30A6\u30A7\u30D6\u958B\u767A\u306A\u3069\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u3064\u3044\u3066\u304A\u6C17\u8EFD\u306B\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\u3002",
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

const zhTW: Record<keyof typeof en, string> = {
  navWork: "\u4F5C\u54C1",
  navAbout: "\u95DC\u65BC",
  navContact: "\u806F\u7E6B",

  scroll: "Scroll",

  selectedWork: "\u7CBE\u9078\u4F5C\u54C1",
  projects: "\u5C08\u6848",
  viewProject: "\u67E5\u770B\u5C08\u6848",

  about: "\u95DC\u65BC",
  profile: "\u500B\u4EBA\u8CC7\u6599",
  biography: "\u500B\u4EBA\u7C21\u4ECB",
  bioParagraph2:
    "\u66FE\u65BC\u7DB2\u8DEF\u5EE3\u544A\u521D\u671F\u5728\u7DB2\u8DEF\u5EE3\u544A\u4EE3\u7406\u5546\u7D2F\u7A4D\u7D93\u9A57\uFF0C\u5F8C\u8F49\u6230\u9762\u5411\u6D88\u8CBB\u8005\u7684\u96FB\u5546\u8207\u5A92\u9AD4\u9818\u57DF\u3002\u73FE\u8DE8\u8DB3\u91D1\u878D\u3001\u88FD\u9020\u3001\u4E0D\u52D5\u7522\u7B49 B2B \u7522\u696D\uFF0C\u5F9E\u4E8B\u8A2D\u8A08\u8207\u958B\u767C\u5DE5\u4F5C\u3002",
  details: "\u8A73\u7D30\u8CC7\u8A0A",
  labelLocation: "\u6240\u5728\u5730",
  labelEducation: "\u5B78\u6B77",
  labelOrigin: "\u51FA\u8EAB\u5730",
  labelLanguages: "\u8A9E\u8A00",
  langJa: "\u65E5\u8A9E",
  langEn: "\u82F1\u8A9E",
  labelCertifications: "\u8B49\u7167\u30FB\u8CC7\u683C",
  cert1: "\u8B49\u5238\u92B7\u552E\u696D\u52D9\u54E1\uFF08\u7B2C\u4E00\u7A2E\uFF09",
  cert2: "\u5167\u90E8\u63A7\u5236\u4E3B\u7BA1",
  cert3: "\u640D\u5BB3\u4FDD\u96AA\u62DB\u6500\u4EBA",
  cert4: "TOEIC 800\u5206\u4EE5\u4E0A",
  experience: "\u7D93\u6B77",
  services: "\u670D\u52D9",
  serviceBrandStrategy: "\u54C1\u724C\u7B56\u7565",
  serviceUiUx: "UI/UX \u8A2D\u8A08",
  serviceWebDev: "\u7DB2\u9801\u958B\u767C",
  serviceArtDirection: "\u85DD\u8853\u6307\u5C0E",
  serviceGraphicDesign: "\u5E73\u9762\u8A2D\u8A08",
  serviceGenerativeAi: "\u751F\u6210\u5F0F AI",
  companies: "\u5408\u4F5C\u4F01\u696D",

  contact: "\u806F\u7E6B",
  contactHeading: "\u4E00\u8D77\u5408\u4F5C\u5427",
  contactDescription:
    "\u54C1\u724C\u8A2D\u8A08\u3001UI/UX \u8A2D\u8A08\u3001\u7DB2\u9801\u958B\u767C\u2014\u2014\u6B61\u8FCE\u96A8\u6642\u8207\u6211\u806F\u7E6B\uFF0C\u8A0E\u8AD6\u60A8\u7684\u5C08\u6848\u3002",
  labelEmail: "\u96FB\u5B50\u90F5\u4EF6",
  labelFacebook: "Facebook",
  labelLinkedin: "LinkedIn",
  labelLocationContact: "\u6240\u5728\u5730",

  back: "\u8FD4\u56DE",
  client: "\u5BA2\u6236",
  role: "\u8077\u8CAC",
  year: "\u5E74\u4EFD",
  overview: "\u6982\u8FF0",
  nextProject: "\u4E0B\u4E00\u500B\u5C08\u6848",
  allProjects: "\u6240\u6709\u5C08\u6848",
};

const zhCN: Record<keyof typeof en, string> = {
  navWork: "\u4F5C\u54C1",
  navAbout: "\u5173\u4E8E",
  navContact: "\u8054\u7CFB",

  scroll: "Scroll",

  selectedWork: "\u7CBE\u9009\u4F5C\u54C1",
  projects: "\u9879\u76EE",
  viewProject: "\u67E5\u770B\u9879\u76EE",

  about: "\u5173\u4E8E",
  profile: "\u4E2A\u4EBA\u7B80\u4ECB",
  biography: "\u7B80\u5386",
  bioParagraph2:
    "\u5728\u7F51\u7EDC\u5E7F\u544A\u521D\u671F\u4E8E\u7F51\u7EDC\u5E7F\u544A\u4EE3\u7406\u516C\u53F8\u79EF\u7D2F\u7ECF\u9A8C\uFF0C\u540E\u8F6C\u5411\u9762\u5411\u6D88\u8D39\u8005\u7684\u7535\u5546\u4E0E\u5A92\u4F53\u9886\u57DF\u3002\u73B0\u5728\u4E3A\u91D1\u878D\u3001\u5236\u9020\u3001\u623F\u5730\u4EA7\u7B49B2B\u9886\u57DF\u63D0\u4F9B\u8BBE\u8BA1\u4E0E\u5F00\u53D1\u670D\u52A1\u3002",
  details: "\u8BE6\u7EC6\u4FE1\u606F",
  labelLocation: "\u6240\u5728\u5730",
  labelEducation: "\u5B66\u5386",
  labelOrigin: "\u51FA\u8EAB\u5730",
  labelLanguages: "\u8BED\u8A00",
  langJa: "\u65E5\u8BED",
  langEn: "\u82F1\u8BED",
  labelCertifications: "\u8D44\u683C\u8BC1\u4E66",
  cert1: "\u8BC1\u5238\u9500\u552E\u4EBA\u5458\uFF08\u7B2C\u4E00\u7C7B\uFF09",
  cert2: "\u5185\u90E8\u63A7\u5236\u7BA1\u7406\u5E08",
  cert3: "\u975E\u5BFF\u9669\u4FDD\u9669\u9500\u552E\u5458",
  cert4: "TOEIC 800\u5206\u4EE5\u4E0A",
  experience: "\u5DE5\u4F5C\u7ECF\u5386",
  services: "\u670D\u52A1\u5185\u5BB9",
  serviceBrandStrategy: "\u54C1\u724C\u6218\u7565",
  serviceUiUx: "UI/UX \u8BBE\u8BA1",
  serviceWebDev: "\u7F51\u7AD9\u5F00\u53D1",
  serviceArtDirection: "\u827A\u672F\u6307\u5BFC",
  serviceGraphicDesign: "\u5E73\u9762\u8BBE\u8BA1",
  serviceGenerativeAi: "\u751F\u6210\u5F0F AI",
  companies: "\u5408\u4F5C\u4F01\u4E1A",

  contact: "\u8054\u7CFB\u65B9\u5F0F",
  contactHeading: "\u671F\u5F85\u4E0E\u60A8\u5408\u4F5C",
  contactDescription:
    "\u54C1\u724C\u5EFA\u8BBE\u3001UI/UX \u8BBE\u8BA1\u3001\u7F51\u7AD9\u5F00\u53D1\u2014\u2014\u6B22\u8FCE\u5C31\u60A8\u7684\u9879\u76EE\u968F\u65F6\u4E0E\u6211\u8054\u7CFB\u3002",
  labelEmail: "\u90AE\u7BB1",
  labelFacebook: "Facebook",
  labelLinkedin: "LinkedIn",
  labelLocationContact: "\u6240\u5728\u5730",

  back: "\u8FD4\u56DE",
  client: "\u5BA2\u6237",
  role: "\u804C\u8D23",
  year: "\u5E74\u4EFD",
  overview: "\u9879\u76EE\u6982\u8FF0",
  nextProject: "\u4E0B\u4E00\u4E2A\u9879\u76EE",
  allProjects: "\u6240\u6709\u9879\u76EE",
};

const ko: Record<keyof typeof en, string> = {
  navWork: "\uC791\uC5C5",
  navAbout: "\uC18C\uAC1C",
  navContact: "\uC5F0\uB77D",

  scroll: "Scroll",

  selectedWork: "\uC120\uBCC4\uB41C \uC791\uC5C5",
  projects: "\uD504\uB85C\uC81D\uD2B8",
  viewProject: "\uD504\uB85C\uC81D\uD2B8 \uBCF4\uAE30",

  about: "\uC18C\uAC1C",
  profile: "\uD504\uB85C\uD544",
  biography: "\uC57D\uB825",
  bioParagraph2:
    "\uC628\uB77C\uC778 \uAD11\uACE0 \uCD08\uCC3D\uAE30 \uC2DC\uC808 \uC6F9 \uAD11\uACE0 \uB300\uD589\uC0AC\uC5D0\uC11C \uACBD\uD5D8\uC744 \uC313\uC740 \uD6C4, \uC18C\uBE44\uC790 \uB300\uC0C1 \uC774\uCEE4\uBA38\uC2A4 \uBC0F \uBBF8\uB514\uC5B4 \uBD84\uC57C\uB85C \uC804\uD658\uD588\uC2B5\uB2C8\uB2E4. \uD604\uC7AC\uB294 \uAE08\uC735, \uC81C\uC870, \uBD80\uB3D9\uC0B0 \uB4F1 \uB2E4\uC591\uD55C B2B \uBD84\uC57C\uC5D0\uC11C \uB514\uC790\uC778 \uBC0F \uAC1C\uBC1C \uC5C5\uBB34\uB97C \uB2F4\uB2F9\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.",
  details: "\uC0C1\uC138 \uC815\uBCF4",
  labelLocation: "\uC704\uCE58",
  labelEducation: "\uD559\uB825",
  labelOrigin: "\uCD9C\uC2E0",
  labelLanguages: "\uC5B8\uC5B4",
  langJa: "\uC77C\uBCF8\uC5B4",
  langEn: "\uC601\uC5B4",
  labelCertifications: "\uC790\uACA9\uC99D",
  cert1: "\uC720\uAC00\uC99D\uAD8C \uC678\uBB34\uC6D0 (1\uC885)",
  cert2: "\uB0B4\uBD80\uD1B5\uC81C \uAD00\uB9AC\uC790",
  cert3: "\uC190\uD574\uBCF4\uD5D8 \uBAA8\uC9D1\uC778",
  cert4: "TOEIC 800\uC810 \uC774\uC0C1",
  experience: "\uACBD\uB825",
  services: "\uC11C\uBE44\uC2A4",
  serviceBrandStrategy: "\uBE0C\uB79C\uB4DC \uC804\uB7B5",
  serviceUiUx: "UI/UX \uB514\uC790\uC778",
  serviceWebDev: "\uC6F9 \uAC1C\uBC1C",
  serviceArtDirection: "\uC544\uD2B8 \uB514\uB809\uC158",
  serviceGraphicDesign: "\uADF8\uB798\uD53D \uB514\uC790\uC778",
  serviceGenerativeAi: "\uC0DD\uC131\uD615 AI",
  companies: "\uD68C\uC0AC",

  contact: "\uC5F0\uB77D",
  contactHeading: "\uD568\uAED8 \uC77C\uD574\uC694",
  contactDescription:
    "\uBE0C\uB79C\uB529, UI/UX \uB514\uC790\uC778, \uC6F9 \uAC1C\uBC1C \u2014 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uB300\uD574 \uD3B8\uD558\uAC8C \uC5F0\uB77D\uD574 \uC8FC\uC138\uC694.",
  labelEmail: "\uC774\uBA54\uC77C",
  labelFacebook: "Facebook",
  labelLinkedin: "LinkedIn",
  labelLocationContact: "\uC704\uCE58",

  back: "\uB4A4\uB85C",
  client: "\uD074\uB77C\uC774\uC5B8\uD2B8",
  role: "\uC5ED\uD560",
  year: "\uC5F0\uB3C4",
  overview: "\uAC1C\uC694",
  nextProject: "\uB2E4\uC74C \uD504\uB85C\uC81D\uD2B8",
  allProjects: "\uC804\uCCB4 \uD504\uB85C\uC81D\uD2B8",
};

export const translations: Record<string, Record<string, string>> = {
  en,
  ja,
  "zh-TW": zhTW,
  "zh-CN": zhCN,
  ko,
};

export type TranslationKey = keyof typeof en;
