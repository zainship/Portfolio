/**
 * Standalone Single-File Portfolio HTML + Tailwind CDN + Vanilla JS
 * Ready to copy, save as index.html, and host anywhere (GitHub Pages, Netlify, Vercel, etc.)
 */
export const STANDALONE_HTML_CODE = `<!DOCTYPE html>
<html lang="en" class="dark scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Zain Ahmed Patel – Front-End Developer | SEO & GEO Specialist | Vibe Coder</title>
  <meta name="description" content="Front-end focused developer who combines modern SEO, AI-assisted (vibe) coding and prompt engineering to build fast, search-friendly and user-centered web experiences.">
  
  <!-- OpenGraph / Social Cards -->
  <meta property="og:type" content="profile">
  <meta property="og:title" content="Zain Ahmed Patel – Front-End Developer | SEO Specialist">
  <meta property="og:description" content="Combining modern SEO, AI-assisted development, and prompt engineering to build fast, search-friendly web experiences.">
  <meta name="twitter:card" content="summary_large_image">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: {
              emerald: '#10b981',
              cyan: '#06b6d4',
            }
          },
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
          }
        }
      }
    }
  </script>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

  <!-- Schema.org JSON-LD Structured Data for SEO / GEO -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Zain Ahmed Patel",
    "jobTitle": "Front-End Developer & SEO/GEO Specialist",
    "email": "zaim98269@gmail.com",
    "telephone": "+923211798561",
    "url": "https://zainahmedpatel.dev",
    "knowsAbout": ["Front-End Development", "SEO", "GEO", "Vibe Coding", "Prompt Engineering", "Claude Code", "Cursor", "GitHub Copilot", "Model Context Protocol (MCP)"]
  }
  </script>

  <style>
    /* Custom Scrollbar & Selection */
    ::selection {
      background: rgba(16, 185, 129, 0.25);
      color: #34d399;
    }
    .glass-card {
      background: rgba(15, 23, 42, 0.75);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
    .light .glass-card {
      background: rgba(255, 255, 255, 0.85);
      border: 1px solid rgba(15, 23, 42, 0.08);
    }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 transition-colors duration-300 antialiased font-sans">

  <!-- TOP BAR / NAVIGATION -->
  <header class="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 transition-colors">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
      <!-- Zone 1: Single Brand Wordmark -->
      <a href="#top" class="text-base font-bold tracking-tight text-white hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
        Zain Ahmed Patel
      </a>

      <!-- Zone 2: Navigation Links -->
      <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300" aria-label="Main Navigation">
        <a href="#about" class="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">About</a>
        <a href="#skills" class="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">Expertise</a>
        <a href="#certifications" class="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">Certifications</a>
        <a href="#interactive-geo" class="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">GEO / Vibe Lab</a>
        <a href="#contact" class="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">Contact</a>
      </nav>

      <!-- Zone 3: Actions (Theme Toggle & Primary CTA) -->
      <div class="flex items-center gap-3 shrink-0">
        <button id="themeToggle" class="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors" aria-label="Toggle theme">
          <svg id="sunIcon" class="w-4 h-4 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
          <svg id="moonIcon" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
        </button>
        <a href="#contact" class="px-4 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0">
          Get in Touch
        </a>
      </div>
    </div>
  </header>

  <!-- HERO SECTION -->
  <main id="top">
    <section class="max-w-6xl mx-auto px-6 pt-16 pb-20">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Hero Left Column -->
        <div class="lg:col-span-7 space-y-6">
          <div class="text-xs font-mono text-emerald-400 uppercase tracking-widest">
            Portfolio · 2026 Edition
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Zain Ahmed Patel
          </h1>
          <p class="text-lg sm:text-xl font-medium text-slate-300">
            Front-End Developer <span class="text-slate-600">|</span> SEO Specialist <span class="text-slate-600">|</span> Vibe Coder &amp; Prompt Engineer
          </p>
          <p class="text-base text-slate-400 leading-relaxed max-w-xl">
            "Combining modern SEO, AI-assisted development, and prompt engineering to build fast, search-friendly, and user-centered web experiences."
          </p>

          <!-- Contact Quick-Bar -->
          <div class="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-slate-300 pt-2 font-mono">
            <a href="mailto:zaim98269@gmail.com" class="hover:text-emerald-400 transition-colors flex items-center gap-2">
              <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              zaim98269@gmail.com
            </a>
            <span class="text-slate-700 hidden sm:inline">·</span>
            <a href="tel:+923211798561" class="hover:text-cyan-400 transition-colors flex items-center gap-2">
              <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              +92 321 1798561
            </a>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap items-center gap-4 pt-4">
            <a href="#contact" class="px-6 py-3 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-all shadow-lg shadow-emerald-500/20 whitespace-nowrap">
              Get in Touch
            </a>
            <a href="#certifications" class="px-6 py-3 text-sm font-medium text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500 rounded-lg transition-colors whitespace-nowrap">
              View Certifications
            </a>
          </div>
        </div>

        <!-- Hero Right Column: Verified Profile Card -->
        <div class="lg:col-span-5 flex justify-center">
          <div class="w-full max-w-sm glass-card rounded-2xl p-6 border border-slate-800 shadow-2xl relative">
            <div class="relative mb-6 rounded-xl overflow-hidden border border-slate-700/80 bg-slate-900 aspect-[4/5]">
              <img src="/src/assets/images/zain-ahmed-founder.png" alt="Zain Ahmed Patel" class="w-full h-full object-cover object-top" onerror="this.src='https://www.shadowtalk-ai.com/zain-ahmed-founder.png'">
            </div>
            <div class="space-y-3">
              <div class="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>VERIFIED CREDENTIALS</span>
                <span class="text-emerald-400 font-semibold">COURSERA SPECIALIZATIONS</span>
              </div>
              <div class="text-sm text-slate-300 font-medium leading-relaxed">
                IBM · Scrimba · Google certified in Search Architecture, GEO, and Agentic Prompting.
              </div>
              <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Availability</span>
                <span class="text-emerald-400 font-medium">Available for Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 3 Key Metric / High-Value Proof Strip -->
      <div class="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
          <div class="text-xl font-bold text-emerald-400 font-mono tabular-nums">3x Specializations</div>
          <div class="text-xs font-semibold text-slate-300 mt-1">IBM, Scrimba &amp; Google Verified</div>
          <div class="text-xs text-slate-400 mt-1">SEO Mastery, Vibe Coding, and Google Prompting Essentials.</div>
        </div>
        <div class="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
          <div class="text-xl font-bold text-cyan-400 font-mono tabular-nums">GEO &amp; SEO 2.0</div>
          <div class="text-xs font-semibold text-slate-300 mt-1">AI Engine &amp; Search Visibility</div>
          <div class="text-xs text-slate-400 mt-1">Optimizing for LLM search engines, Perplexity, and Google AI Overviews.</div>
        </div>
        <div class="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
          <div class="text-xl font-bold text-slate-100 font-mono tabular-nums">10x Vibe Workflow</div>
          <div class="text-xs font-semibold text-slate-300 mt-1">Claude Code, Cursor &amp; MCP</div>
          <div class="text-xs text-slate-400 mt-1">Agentic tool use, Model Context Protocol, and rapid frontend delivery.</div>
        </div>
      </div>
    </section>

    <!-- PROFESSIONAL SUMMARY & STRENGTHS -->
    <section id="about" class="py-20 border-t border-slate-800/80 bg-slate-900/20">
      <div class="max-w-6xl mx-auto px-6">
        <div class="max-w-3xl space-y-4 mb-12">
          <div class="text-xs font-mono text-emerald-400 uppercase tracking-widest">Background &amp; Philosophy</div>
          <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">Professional Summary</h2>
          <p class="text-base sm:text-lg text-slate-300 leading-relaxed pt-2">
            "Front-end focused developer who combines modern SEO, AI-assisted (vibe) coding and prompt engineering to build fast, search-friendly and user-centered web experiences. Skilled in keyword research, structured content strategy, on-page optimization and schema markup, and in turning ideas into working apps with tools such as Claude Code, Cursor and GitHub Copilot. Certified across SEO, GenAI/GEO, vibe coding and Google prompting, with a data-driven mindset focused on visibility, engagement and polished UI."
          </p>
        </div>

        <!-- 3 Core Strengths Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-6 rounded-2xl glass-card border border-slate-800">
            <div class="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 font-mono font-bold text-sm">01</div>
            <h3 class="text-lg font-semibold text-white mb-2">Data-informed decision making</h3>
            <p class="text-sm text-slate-400 leading-relaxed">
              Every interface choice and technical decision is validated with organic search performance, Core Web Vitals, and analytical data.
            </p>
          </div>
          <div class="p-6 rounded-2xl glass-card border border-slate-800">
            <div class="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4 font-mono font-bold text-sm">02</div>
            <h3 class="text-lg font-semibold text-white mb-2">Fast learner of new AI tools</h3>
            <p class="text-sm text-slate-400 leading-relaxed">
              Proactively mastering cutting-edge paradigms: Claude Code terminal workflows, Cursor AI rules, MCP server integrations, and next-gen LLMs.
            </p>
          </div>
          <div class="p-6 rounded-2xl glass-card border border-slate-800">
            <div class="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 font-mono font-bold text-sm">03</div>
            <h3 class="text-lg font-semibold text-white mb-2">Clean, user-focused design</h3>
            <p class="text-sm text-slate-400 leading-relaxed">
              Creating uncluttered, accessible (WCAG AA compliant) user journeys with sharp typography, purposeful spacing, and high usability.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CORE SKILLS & AREAS OF EXPERTISE -->
    <section id="skills" class="py-20 border-t border-slate-800/80">
      <div class="max-w-6xl mx-auto px-6">
        <div class="max-w-2xl mb-12">
          <div class="text-xs font-mono text-cyan-400 uppercase tracking-widest">Capabilities &amp; Stack</div>
          <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">Core Skills &amp; Areas of Expertise</h2>
          <p class="text-sm text-slate-400 mt-2">Specialized disciplines bridging front-end engineering, search algorithms, and generative AI systems.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Card 1 -->
          <div class="p-6 rounded-2xl glass-card border border-slate-800 hover:border-emerald-500/40 transition-all group">
            <div class="text-xs font-mono text-emerald-400 mb-2">DISCIPLINE 01</div>
            <h3 class="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">SEO &amp; Content Marketing</h3>
            <p class="text-sm text-slate-300 mt-3 leading-relaxed">
              Keyword research, content strategy, on-page elements, schema markup, and full SEO campaign planning.
            </p>
            <div class="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400 space-y-1">
              <div>• Keyword Intent Mapping</div>
              <div>• Schema.org JSON-LD Architecture</div>
              <div>• On-Page Technical Auditing</div>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="p-6 rounded-2xl glass-card border border-slate-800 hover:border-cyan-500/40 transition-all group">
            <div class="text-xs font-mono text-cyan-400 mb-2">DISCIPLINE 02</div>
            <h3 class="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">Generative Engine Optimization (GEO)</h3>
            <p class="text-sm text-slate-300 mt-3 leading-relaxed">
              Optimizing content for AI-driven search with GenAI workflows and GEO strategies.
            </p>
            <div class="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400 space-y-1">
              <div>• LLM Entity Attribution &amp; Citations</div>
              <div>• Perplexity &amp; ChatGPT Search Targeting</div>
              <div>• Structured Data for AI Crawlers</div>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="p-6 rounded-2xl glass-card border border-slate-800 hover:border-emerald-500/40 transition-all group">
            <div class="text-xs font-mono text-emerald-400 mb-2">DISCIPLINE 03</div>
            <h3 class="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">Front-End Development</h3>
            <p class="text-sm text-slate-300 mt-3 leading-relaxed">
              Building responsive, accessible interfaces and full apps using AI coding assistants (Claude Code, Cursor, GitHub Copilot).
            </p>
            <div class="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400 space-y-1">
              <div>• Modern Semantic HTML5 &amp; CSS</div>
              <div>• Tailwind CSS &amp; Modern Frameworks</div>
              <div>• Accessible (WCAG AA) Systems</div>
            </div>
          </div>

          <!-- Card 4 -->
          <div class="p-6 rounded-2xl glass-card border border-slate-800 hover:border-cyan-500/40 transition-all group">
            <div class="text-xs font-mono text-cyan-400 mb-2">DISCIPLINE 04</div>
            <h3 class="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">Prompt Engineering</h3>
            <p class="text-sm text-slate-300 mt-3 leading-relaxed">
              Designing effective prompts and advanced techniques for work tasks, data analysis, summarization, and presentations.
            </p>
            <div class="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400 space-y-1">
              <div>• Chain-of-Thought &amp; Few-Shot Prompts</div>
              <div>• Structured JSON &amp; Schema Extraction</div>
              <div>• Data Synthesis &amp; Deck Generation</div>
            </div>
          </div>

          <!-- Card 5 -->
          <div class="p-6 rounded-2xl glass-card border border-slate-800 hover:border-indigo-500/40 transition-all group md:col-span-2 lg:col-span-2">
            <div class="text-xs font-mono text-indigo-400 mb-2">DISCIPLINE 05</div>
            <h3 class="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">Technical Stack &amp; Tooling</h3>
            <p class="text-sm text-slate-300 mt-3 leading-relaxed">
              HTML/CSS/JavaScript, Responsive UI Design, AI-Assisted Development, Data Analysis Prompts, Model Context Protocol (MCP).
            </p>
            <div class="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap gap-2 text-xs">
              <span class="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">HTML5/CSS3</span>
              <span class="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">Tailwind CSS</span>
              <span class="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">Vanilla JavaScript</span>
              <span class="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">Claude Code</span>
              <span class="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">Cursor AI</span>
              <span class="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">GitHub Copilot</span>
              <span class="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">Model Context Protocol (MCP)</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- VERIFIED CERTIFICATIONS -->
    <section id="certifications" class="py-20 border-t border-slate-800/80 bg-slate-900/20">
      <div class="max-w-6xl mx-auto px-6">
        <div class="max-w-2xl mb-12">
          <div class="text-xs font-mono text-emerald-400 uppercase tracking-widest">Industry Credentials</div>
          <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">Verified Certifications</h2>
          <p class="text-sm text-slate-400 mt-2">Specializations completed with verified badges on Coursera.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Cert 1 -->
          <div class="p-6 rounded-2xl glass-card border border-emerald-500/30 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between text-xs text-slate-400 font-mono mb-3">
                <span class="text-emerald-400 font-semibold">IBM &amp; SkillUp</span>
                <span>Jul 2026</span>
              </div>
              <h3 class="text-lg font-bold text-white">SEO Mastery: From Fundamentals to GenAI and GEO Strategies</h3>
              <div class="text-xs text-slate-400 mt-1 font-mono">
                Coursera Specialization · 4 Courses · <span class="text-emerald-400 font-semibold">ID: H1IQA7MEYI32</span>
              </div>
              <ul class="mt-4 space-y-2 text-xs text-slate-300">
                <li class="flex items-start gap-2">
                  <span class="text-emerald-400">✓</span> SEO &amp; Content Marketing
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-400">✓</span> GenAI for SEO
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-400">✓</span> AI SEO [GEO]
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-400">✓</span> Capstone Project
                </li>
              </ul>
            </div>
            <div class="mt-6 pt-4 border-t border-slate-800">
              <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/H1IQA7MEYI32" target="_blank" rel="noopener noreferrer" class="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center justify-between">
                <span>Verify Credential (ID: H1IQA7MEYI32)</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          <!-- Cert 2 -->
          <div class="p-6 rounded-2xl glass-card border border-cyan-500/30 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between text-xs text-slate-400 font-mono mb-3">
                <span class="text-cyan-400 font-semibold">Scrimba</span>
                <span>Jul 2026</span>
              </div>
              <h3 class="text-lg font-bold text-white">Vibe Coding Essentials - Build Apps with AI</h3>
              <div class="text-xs text-slate-400 mt-1 font-mono">
                Coursera Specialization · 5 Courses · <span class="text-cyan-400 font-semibold">ID: 30VMIC0OYY7Y</span>
              </div>
              <ul class="mt-4 space-y-2 text-xs text-slate-300">
                <li class="flex items-start gap-2">
                  <span class="text-cyan-400">✓</span> Cursor AI
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-cyan-400">✓</span> GitHub Copilot
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-cyan-400">✓</span> Claude Code
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-cyan-400">✓</span> Model Context Protocol (MCP)
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-cyan-400">✓</span> Learn to Code with AI
                </li>
              </ul>
            </div>
            <div class="mt-6 pt-4 border-t border-slate-800">
              <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/30VMIC0OYY7Y" target="_blank" rel="noopener noreferrer" class="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center justify-between">
                <span>Verify Credential (ID: 30VMIC0OYY7Y)</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          <!-- Cert 3 -->
          <div class="p-6 rounded-2xl glass-card border border-blue-500/30 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between text-xs text-slate-400 font-mono mb-3">
                <span class="text-blue-400 font-semibold">Google</span>
                <span>Jul 2026</span>
              </div>
              <h3 class="text-lg font-bold text-white">Google Prompting Essentials</h3>
              <div class="text-xs text-slate-400 mt-1 font-mono">
                Coursera Specialization · 4 Courses · <span class="text-blue-400 font-semibold">ID: 2R1AR3VF2AOQ</span>
              </div>
              <ul class="mt-4 space-y-2 text-xs text-slate-300">
                <li class="flex items-start gap-2">
                  <span class="text-blue-400">✓</span> Writing prompts like a pro
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-400">✓</span> Everyday work tasks
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-400">✓</span> Data analysis &amp; presentations
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-400">✓</span> AI as creative/expert partner
                </li>
              </ul>
            </div>
            <div class="mt-6 pt-4 border-t border-slate-800">
              <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/2R1AR3VF2AOQ" target="_blank" rel="noopener noreferrer" class="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center justify-between">
                <span>Verify Credential (ID: 2R1AR3VF2AOQ)</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT SECTION -->
    <section id="contact" class="py-20 border-t border-slate-800/80">
      <div class="max-w-4xl mx-auto px-6 text-center space-y-8">
        <div class="space-y-3">
          <div class="text-xs font-mono text-emerald-400 uppercase tracking-widest">Connect &amp; Collaborate</div>
          <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">Let's Build Something Exceptional</h2>
          <p class="text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Open to front-end engineering, SEO/GEO architecture, and AI-assisted application opportunities worldwide.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a href="mailto:zaim98269@gmail.com" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold transition-all shadow-lg shadow-emerald-500/20 text-sm">
            Email: zaim98269@gmail.com
          </a>
          <a href="tel:+923211798561" class="w-full sm:w-auto px-8 py-4 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold transition-colors text-sm">
            Call: +92 321 1798561
          </a>
        </div>
      </div>
    </section>
  </main>

  <!-- FOOTER -->
  <footer class="py-12 border-t border-slate-800/80 text-center text-xs text-slate-500">
    <div class="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>© 2026 Zain Ahmed Patel. All rights reserved.</div>
      <div class="flex items-center gap-4">
        <span>Front-End</span>
        <span>·</span>
        <span>SEO / GEO</span>
        <span>·</span>
        <span>Vibe Coder</span>
      </div>
    </div>
  </footer>

  <!-- VANILLA JS INTERACTION SCRIPT -->
  <script>
    // Dark/Light Mode Toggle
    const themeBtn = document.getElementById('themeToggle');
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');
    const html = document.documentElement;

    function updateIcons(isDark) {
      if (isDark) {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
      } else {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
      }
    }

    if (localStorage.theme === 'light') {
      html.classList.remove('dark');
      updateIcons(false);
    } else {
      html.classList.add('dark');
      updateIcons(true);
    }

    themeBtn.addEventListener('click', () => {
      const isDark = html.classList.toggle('dark');
      localStorage.theme = isDark ? 'dark' : 'light';
      updateIcons(isDark);
    });

    // Custom Animated Neon Cursor Trail (performant, touch-aware, reduced-motion compliant)
    (function initCursorTrail() {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

      const canvas = document.createElement('canvas');
      canvas.className = 'fixed inset-0 pointer-events-none z-50';
      canvas.style.pointerEvents = 'none';
      canvas.setAttribute('aria-hidden', 'true');
      document.body.appendChild(canvas);

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      let width = (canvas.width = window.innerWidth);
      let height = (canvas.height = window.innerHeight);

      window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }, { passive: true });

      const mouse = { x: -100, y: -100, targetX: -100, targetY: -100, isHovering: false, isVisible: false };
      const trail = [];
      const particles = [];
      const neonColors = ['rgba(16, 185, 129,', 'rgba(6, 182, 212,', 'rgba(52, 211, 153,'];

      window.addEventListener('mousemove', (e) => {
        mouse.isVisible = true;
        mouse.targetX = e.clientX;
        mouse.targetY = e.clientY;

        const target = e.target;
        mouse.isHovering = !!(target && target.closest('a, button, input, textarea, [role="button"]'));

        if (particles.length < 35 && Math.random() > 0.4) {
          particles.push({
            x: e.clientX,
            y: e.clientY,
            vx: (Math.random() - 0.5) * 0.8,
            vy: (Math.random() - 0.5) * 0.8,
            size: Math.random() * 2 + 1,
            color: neonColors[Math.floor(Math.random() * neonColors.length)],
            alpha: 0.7,
            decay: 0.03,
          });
        }
      }, { passive: true });

      document.addEventListener('mouseleave', () => { mouse.isVisible = false; });
      document.addEventListener('mouseenter', () => { mouse.isVisible = true; });

      function render() {
        ctx.clearRect(0, 0, width, height);

        mouse.x += (mouse.targetX - mouse.x) * 0.32;
        mouse.y += (mouse.targetY - mouse.y) * 0.32;

        if (mouse.isVisible && mouse.x > 0 && mouse.y > 0) {
          trail.unshift({ x: mouse.x, y: mouse.y });
          if (trail.length > 16) trail.pop();

          if (trail.length > 2) {
            ctx.beginPath();
            ctx.moveTo(trail[0].x, trail[0].y);
            for (let i = 1; i < trail.length - 1; i++) {
              const xc = (trail[i].x + trail[i + 1].x) / 2;
              const yc = (trail[i].y + trail[i + 1].y) / 2;
              ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
            }
            const grad = ctx.createLinearGradient(trail[0].x, trail[0].y, trail[trail.length - 1].x, trail[trail.length - 1].y);
            grad.addColorStop(0, 'rgba(16, 185, 129, 0.45)');
            grad.addColorStop(1, 'rgba(6, 182, 212, 0)');
            ctx.strokeStyle = grad;
            ctx.lineWidth = mouse.isHovering ? 4.5 : 2.5;
            ctx.lineCap = 'round';
            ctx.stroke();
          }

          for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.alpha -= p.decay;
            if (p.alpha <= 0) {
              particles.splice(i, 1);
              continue;
            }
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color + ' ' + p.alpha + ')';
            ctx.fill();
          }

          // Central neon follower dot
          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, mouse.isHovering ? 5 : 3.5, 0, Math.PI * 2);
          ctx.fillStyle = mouse.isHovering ? '#34d399' : '#10b981';
          ctx.shadowColor = '#06b6d4';
          ctx.shadowBlur = 8;
          ctx.fill();
        }

        requestAnimationFrame(render);
      }
      requestAnimationFrame(render);
    })();
  </script>
</body>
</html>`;
