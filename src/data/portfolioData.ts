export interface Certification {
  id: string;
  title: string;
  issuer: string;
  organization: string;
  date: string;
  coursesCount: number;
  courses: string[];
  description: string;
  badgeAccent: 'emerald' | 'cyan' | 'blue';
  verifyUrl: string;
  credentialId?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  icon: string;
  accent: 'emerald' | 'cyan' | 'indigo' | 'amber';
}

export const PERSONAL_INFO = {
  name: 'Zain Ahmed Patel',
  title: 'Front-End Developer | SEO Specialist | Vibe Coder & Prompt Engineer',
  tagline:
    'Combining modern SEO, AI-assisted development, and prompt engineering to build fast, search-friendly, and user-centered web experiences.',
  email: 'zaim98269@gmail.com',
  phone: '+92 321 1798561',
  location: 'Karachi, Pakistan (Open to Remote Worldwide)',
  summary:
    'Front-end focused developer who combines modern SEO, AI-assisted (vibe) coding and prompt engineering to build fast, search-friendly and user-centered web experiences. Skilled in keyword research, structured content strategy, on-page optimization and schema markup, and in turning ideas into working apps with tools such as Claude Code, Cursor and GitHub Copilot. Certified across SEO, GenAI/GEO, vibe coding and Google prompting, with a data-driven mindset focused on visibility, engagement and polished UI.',
  strengths: [
    {
      title: 'Data-Informed Decision Making',
      desc: 'Grounding UX and technical architecture in measurable search impressions, Core Web Vitals, and user engagement analytics.',
    },
    {
      title: 'Fast Learner of New AI Tools',
      desc: 'Rapidly integrating state-of-the-art developer tooling—from Cursor AI rules and Claude Code workflows to Model Context Protocol (MCP) servers.',
    },
    {
      title: 'Clean, User-Focused Design',
      desc: 'Crafting accessible (WCAG AA), responsive interfaces with zero visual fluff, high readability, and fluid micro-interactions.',
    },
  ],
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'ibm-seo-geo',
    title: 'SEO Mastery: From Fundamentals to GenAI and GEO Strategies',
    issuer: 'IBM & SkillUp',
    organization: 'Coursera Specialization',
    date: 'Jul 2026',
    coursesCount: 4,
    courses: [
      'Course 1: SEO & Content Marketing Fundamentals',
      'Course 2: GenAI for SEO & Structured Workflows',
      'Course 3: AI SEO [GEO] & Generative Engine Optimization',
      'Course 4: Applied Capstone Optimization Project',
    ],
    description:
      'Comprehensive specialization covering technical on-page architecture, semantic keyword mapping, structured data schemas, and modern Generative Engine Optimization (GEO) to dominate both traditional search engines and AI perceptual answer engines.',
    badgeAccent: 'emerald',
    credentialId: 'H1IQA7MEYI32',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/specialization/certificate/H1IQA7MEYI32',
  },
  {
    id: 'scrimba-vibe-coding',
    title: 'Vibe Coding Essentials - Build Apps with AI',
    issuer: 'Scrimba',
    organization: 'Coursera Specialization',
    date: 'Jul 2026',
    coursesCount: 5,
    courses: [
      'Course 1: Cursor AI Workflow Mastery',
      'Course 2: GitHub Copilot Deep Dive',
      'Course 3: Claude Code Terminal & Agentic Loops',
      'Course 4: Model Context Protocol (MCP) Integrations',
      'Course 5: Learn to Code with AI & Rapid Prototyping',
    ],
    description:
      'Rigorous mastery of AI-accelerated software creation. Focuses on architecting applications with modern LLM tooling, orchestrating autonomous agent loops, configuring MCP servers, and writing clean, scalable frontend code at 10x velocity.',
    badgeAccent: 'cyan',
    credentialId: '30VMIC0OYY7Y',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/specialization/certificate/30VMIC0OYY7Y',
  },
  {
    id: 'google-prompting',
    title: 'Google Prompting Essentials',
    issuer: 'Google',
    organization: 'Coursera Specialization',
    date: 'Jul 2026',
    coursesCount: 4,
    courses: [
      'Course 1: Writing Prompts Like a Pro',
      'Course 2: Everyday Work Tasks & Productivity Automation',
      'Course 3: Data Analysis, Metrics & Executive Presentations',
      'Course 4: AI as a Creative & Technical Expert Partner',
    ],
    description:
      'Official Google specialization mastering structured prompt architectures, chain-of-thought methodologies, few-shot prompting, data synthesis, and employing AI models as high-bandwidth creative and engineering partners.',
    badgeAccent: 'blue',
    credentialId: '2R1AR3VF2AOQ',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/specialization/certificate/2R1AR3VF2AOQ',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'seo-marketing',
    title: 'SEO & Content Marketing',
    shortDesc: 'Search architecture, keyword strategy, and technical on-page dominance.',
    fullDesc:
      'Comprehensive keyword research, high-intent content strategy, technical on-page elements (canonicalization, open graph, meta structures), JSON-LD schema markup, and end-to-end SEO campaign planning that drives organic discovery.',
    tags: [
      'Keyword Research',
      'Content Strategy',
      'On-Page Optimization',
      'Schema Markup (JSON-LD)',
      'Technical SEO',
      'Campaign Planning',
    ],
    icon: 'Search',
    accent: 'emerald',
  },
  {
    id: 'geo-optimization',
    title: 'Generative Engine Optimization (GEO)',
    shortDesc: 'Optimizing digital presence for modern AI answer engines and LLM crawlers.',
    fullDesc:
      'Tailoring brand information, structured data, entity relationships, and authoritative citation architecture to secure inclusion in Perplexity, ChatGPT Search, Claude, and Google AI Overviews.',
    tags: [
      'Generative Engine Optimization',
      'AI Search Visibility',
      'GenAI Workflows',
      'Entity Extraction',
      'Direct Answer Optimization',
      'Citation Engineering',
    ],
    icon: 'Sparkles',
    accent: 'cyan',
  },
  {
    id: 'frontend-dev',
    title: 'Front-End Development',
    shortDesc: 'Building responsive, accessible, high-performance web applications.',
    fullDesc:
      'Translating design vision into production code with modern HTML5, responsive CSS/Tailwind, and JavaScript/TypeScript. Leveraging AI coding assistants (Claude Code, Cursor, GitHub Copilot) for rapid and rigorous delivery.',
    tags: [
      'HTML5 & Modern CSS',
      'Tailwind CSS',
      'JavaScript / TypeScript',
      'Responsive Web Design',
      'WCAG AA Accessibility',
      'AI-Assisted (Vibe) Coding',
    ],
    icon: 'Code2',
    accent: 'emerald',
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering',
    shortDesc: 'Designing high-precision prompts for complex workflows and data analysis.',
    fullDesc:
      'Constructing few-shot system prompts, multi-turn reasoning scaffolds, structured JSON extraction directives, automated data analysis workflows, executive summarization, and presentation generation.',
    tags: [
      'Few-Shot Prompting',
      'Chain-of-Thought',
      'Data Analysis Prompts',
      'Automated Summarization',
      'Presentation Scripting',
      'Evaluation & Guardrails',
    ],
    icon: 'Terminal',
    accent: 'cyan',
  },
  {
    id: 'technical-stack',
    title: 'Technical Stack & Tooling',
    shortDesc: 'End-to-end developer ecosystem, MCP servers, and modern tools.',
    fullDesc:
      'Specialized hands-on experience across HTML/CSS/JavaScript, Responsive UI Design, AI-Assisted Development, Data Analysis Prompts, and Model Context Protocol (MCP) integrations connecting LLMs to live tools and filesystems.',
    tags: [
      'Claude Code',
      'Cursor AI',
      'GitHub Copilot',
      'Model Context Protocol (MCP)',
      'Git & GitHub',
      'Chrome DevTools',
    ],
    icon: 'Cpu',
    accent: 'indigo',
  },
];
