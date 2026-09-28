import { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MapPin,
  Menu,
  X,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Phone,
  ChevronUp,
  ChevronDown,
  Video,
  Sparkles,
  Instagram,
  Play,
} from 'lucide-react';

/* ────────────────────────────────────────────
   Data
   ──────────────────────────────────────────── */

const NAV_ITEMS = ['About', 'Skills', 'Experience', 'Projects', 'Advocacy', 'Journey', 'Contact'];

const SKILL_CATEGORIES = [
  { name: 'Languages', items: ['Python', 'SQL'] },
  {
    name: 'AI / GenAI & Agentic',
    items: [
      'LLMs', 'RAG (Hybrid ANN + BM25 + RRF)', 'Agentic AI', 'Multi-Agent Systems',
      'MCP', 'Prompt Engineering', 'Model Evaluation & Guardrails', 'Voice AI',
      'Machine Learning', 'Deep Learning', 'NLP',
    ],
  },
  {
    name: 'Frameworks & Libraries',
    items: ['FastAPI', 'LangChain', 'LangGraph', 'FastMCP', 'TensorFlow', 'Keras', 'asyncio', 'Tenacity', 'REST APIs'],
  },
  {
    name: 'Cloud & MLOps',
    items: ['AWS (Lambda, SQS, S3, IAM, STS)', 'Amazon Bedrock', 'Docker', 'GitHub Actions (OIDC CI/CD)'],
  },
  { name: 'Databases & Vector', items: ['SQL', 'NoSQL', 'Vector Databases (Milvus)'] },
  {
    name: 'Automation & Integration',
    items: ['n8n', 'Zapier', 'Odoo (CRM & Calendar API)', 'Twilio', 'Retell AI', 'QuickBooks API'],
  },
  {
    name: 'Client-Facing Delivery',
    items: ['Requirements Gathering', 'Solution Scoping', 'Cross-Functional Collaboration', 'End-to-End Ownership', 'Stakeholder Communication'],
  },
  { name: 'Tools', items: ['Git', 'Postman', 'Docker'] },
];

const EXPERIENCE = [
  {
    title: 'Jr. AI/ML Developer',
    company: 'WebOsmotic Pvt Ltd',
    location: 'Surat, Gujarat',
    period: 'Jun 2025 – Present',
    current: true,
    bullets: [
      'Narad (TPRM Platform): Built 4 production, SQS-triggered AWS Lambda microservices powering core enterprise AI for TPRM/GRC, automating control question generation, recommendation, and evidence testing for SOC 2 / ISO 27001 / VAPT audits.',
      'Engineered Hybrid RAG control-evaluation engine (Amazon Bedrock + Claude, Milvus vector search, VoyageAI embeddings, hybrid ANN+BM25+RRF retrieval) delivering auditor-grade verdicts with rationale and exact page citations.',
      'Hardened production pipeline with LLM prompt guardrails, structured JSON schema outputs with tenacity backoff retries, and re-architected retrieval to eliminate cross-company result drift.',
      'Delivered end-to-end cloud infrastructure — configured async concurrent multi-control processing (asyncio + semaphores), STS assumed IAM roles, and keyless OIDC GitHub Actions CI/CD pipelines.',
      'Odoo AI Voice Agent (Client: Germany Real Estate Sector): Engaged directly with client to scope and deliver AI-driven voice automation for lead classification & appointment booking across text and voice, removing manual scheduling by 90%.',
      'Engineered Meddy — a Clinical AI Pipeline automating extraction & analysis of medical reports (DICOM, X-rays, PDFs), cutting AI hallucinations by 90% and manual interpretation time by 80%.',
      'Built an MCP server in Python (FastMCP + Next.js) unifying Notion, Slack, Gmail, and Google Calendar, wrapping official SDKs as MCP tools for Gemini dynamic tool execution.',
      'Developed QuickBooks automation workflows (Xcelerate) for client data, invoicing, and billing, cutting manual data entry by 85% via REST APIs and webhooks.',
    ],
  },
  {
    title: 'AI/ML Developer Intern',
    company: 'Appscrip (3Embed Software Technologies)',
    location: 'Surat, Gujarat',
    period: 'Feb 2025 – May 2025',
    current: false,
    bullets: [
      'Built an AI-powered lead generation workflow automating collection of ~500 prospects/day across Apollo.io filters, Apify Actor, and n8n.',
      'Used Perplexity API to enrich missing lead fields and stored deduplicated data in Google Sheets for downstream sales use.',
      'Automated cold-mail generation and sending, improving outreach campaign efficiency by 70%.',
    ],
  },
  {
    title: 'ML Intern',
    company: 'Feynn Labs',
    location: 'Assam (Remote)',
    period: 'Jul 2024 – Sept 2024',
    current: false,
    bullets: [
      'Performed EV customer segmentation using K-Means clustering and PCA, applying feature engineering to identify high-potential customer segments.',
    ],
  },
  {
    title: 'Data Scientist',
    company: 'Evify Logitech',
    location: 'Surat, Gujarat',
    period: 'Apr 2024 – Jun 2024',
    current: false,
    bullets: [
      'Built fleet analytics dashboards (Excel, DAX, Power BI) processing daily/monthly delivery data from Zomato, Swiggy, and Blinkit, lifting deliveries by 15% and cutting downtime by 25% via proactive maintenance.',
    ],
  },
  {
    title: 'Data Analyst',
    company: 'GHMC Pvt Ltd',
    location: 'Surat, Gujarat',
    period: 'Aug 2023 – Mar 2024',
    current: false,
    bullets: [
      'Processed 10,000+ records using advanced Excel techniques, improving payroll/compliance data accuracy by 25%.',
      'Implemented a time-tracking strategy that improved employee management efficiency by 20% and production output by 15%.',
    ],
  },
];

interface Project {
  title: string;
  company: string | null;
  description: string;
  tech: string[];
  image: string | null;
  highlights: string[];
  linkedin: string | null;
  github: string | null;
  live: string | null;
  accent: string;
}

const PROJECTS: Project[] = [
  {
    title: 'Narad — AI-Powered TPRM Platform',
    company: 'WebOsmotic',
    description:
      'Enterprise AI-powered Third-Party Risk Management (TPRM/GRC) platform. Built 4 production SQS-triggered AWS Lambda microservices and a Hybrid RAG evaluation engine (Amazon Bedrock + Claude, Milvus VectorDB, VoyageAI embeddings) that evaluates vendor evidence documents against SOC 2 / ISO 27001 / VAPT audit controls with auditor-grade verdicts and exact page citations.',
    tech: [
      'Python',
      'AWS Lambda',
      'Amazon Bedrock',
      'Milvus (VectorDB)',
      'VoyageAI',
      'LangChain',
      'FastAPI',
      'Hybrid Retrieval (ANN+BM25+RRF)',
      'Webhooks',
    ],
    image: '/projects/naradprevie.png',
    highlights: [
      '4 production SQS-triggered AWS Lambda microservices powering enterprise AI',
      'Hybrid RAG engine (Bedrock + Claude, Milvus, VoyageAI) for SOC 2 / ISO 27001 / VAPT audits',
      'LLM prompt guardrails, structured JSON outputs, and tenacity backoff retries',
      'Async multi-control concurrency (asyncio + semaphores) & keyless OIDC GitHub Actions CI/CD',
    ],
    linkedin: null,
    github: null,
    live: null,
    accent: 'bg-indigo-600',
  },
  {
    title: 'Meddy — Medical Report Analysis',
    company: 'WebOsmotic',
    description:
      'Clinical AI Pipeline automating extraction and analysis of medical reports and imaging files (DICOM, X-Rays, PDFs). Uses LangChain, Google GenAI SDK, OpenCV, and SimpleITK with clinical validation rules. Responsive interface with session memory and Re-charts visualization.',
    tech: ['Python', 'FastAPI', 'Gemini', 'LangChain', 'OpenCV', 'React', 'TypeScript'],
    image: '/projects/meddy.png',
    highlights: [
      '80% reduction in report interpretation time',
      '90% fewer AI hallucinations via clinical validation',
      'Specialized cardiology view with data visualization',
    ],
    linkedin:
      'https://www.linkedin.com/posts/asad-intwala_healthtech-medtech-ai-activity-7387837250895679488-euiG',
    github: null,
    live: 'https://medical-assistant-five.vercel.app/',
    accent: 'bg-teal-500',
  },
  {
    title: 'Odoo Lead Classification & AI Voice Agent',
    company: 'WebOsmotic (Client: Germany)',
    description:
      'Engaged directly with a German real estate management client to scope & deliver AI-driven voice automation workflows using Retell AI, Twilio, and n8n for lead classification (Good/Bad Lead) and automated appointment booking within Odoo Calendar across text and voice channels.',
    tech: ['n8n', 'Gemini API', 'Odoo CRM', 'Retell AI', 'Twilio'],
    image: '/projects/odoo_automation.png',
    highlights: [
      'Direct client-facing requirement scoping & end-to-end delivery',
      '90% reduction in manual scheduling steps in Odoo Calendar',
      'Automated Good/Bad Lead classification across voice + text channels',
    ],
    linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7415713518483906560/',
    github: null,
    live: null,
    accent: 'bg-orange-500',
  },
  {
    title: 'MCP Server — Notion, Slack, Gmail, Calendar',
    company: 'WebOsmotic',
    description:
      'Unified MCP server built with FastMCP and Next.js. Wraps official Notion, Slack, Gmail, and Google Calendar SDKs as MCP tools, enabling Gemini to dynamically select and execute cross-platform actions based on natural language queries.',
    tech: ['Python', 'FastMCP', 'Gemini', 'Next.js', 'Notion SDK', 'Slack SDK', 'Google APIs'],
    image: '/projects/mcp_server.png',
    highlights: [
      'Dynamic tool selection by Gemini',
      'Cross-platform workflow automation',
      'MCP-based tool calling architecture',
    ],
    linkedin: null,
    github: 'https://github.com/asadintwala/mcp',
    live: null,
    accent: 'bg-violet-500',
  },
  {
    title: 'Lead Enrichment & Outreach Automation',
    company: 'Appscrip',
    description:
      'Auto-triggered lead scraping and cold mail pipeline. Collects ~500 leads daily using Apollo.io filters and Apify Actor, enriches missing fields with Perplexity, and automates personalized cold mail outreach with deduplication.',
    tech: ['n8n', 'Perplexity API', 'Apollo.io', 'Apify', 'JavaScript'],
    image: '/projects/lead_enrichment.png',
    highlights: [
      '~500 leads/day automated collection',
      '70% improvement in outreach efficiency',
      'Automated deduplication in Google Sheets',
    ],
    linkedin:
      'https://www.linkedin.com/posts/asad-intwala_sales-salesdevelopment-automation-activity-7322524208406650881-f4gQ',
    github: null,
    live: null,
    accent: 'bg-blue-500',
  },
  {
    title: 'AI Stock Price Predictor',
    company: null,
    description:
      'Combines AI analysis with technical parameters — candlestick charts, financial data, and news sentiment — for stock analysis and price prediction with a built-in backtesting engine.',
    tech: ['Node.js', 'HTML', 'CSS', 'AI'],
    image: '/projects/stock_analysis.png',
    highlights: [
      'Candlestick chart visualization',
      'News sentiment analysis',
      'Backtesting engine for validation',
    ],
    linkedin: null,
    github: 'https://github.com/asadintwala/ai-stock-price-predictor',
    live: null,
    accent: 'bg-red-500',
  },
  {
    title: 'QuickBooks Automation (Xcelerate)',
    company: 'WebOsmotic',
    description:
      'End-to-end QuickBooks automation for client data management, invoice creation, updates, and billing. Integrated with n8n pipelines and external business systems via REST APIs and webhook-based workflows.',
    tech: ['QuickBooks API', 'JavaScript', 'n8n', 'Xcelerate API', 'Google Drive'],
    image: '/projects/quickbooks.png',
    highlights: [
      '85% reduction in manual data entry',
      'Webhook-based data synchronization',
      'Streamlined financial operations',
    ],
    linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7463919462350483456/',
    github: null,
    live: null,
    accent: 'bg-emerald-500',
  },
  {
    title: 'WhatsApp AI Chatbot',
    company: null,
    description:
      'Hospital customer care chatbot on WhatsApp using the developer.facebook platform. Performs RAG-based Q&A, checks doctor availability, books appointments in Google Calendar, and sends confirmation emails — all via tool calling.',
    tech: ['Python', 'GenAI SDK', 'RAG', 'Google Calendar API'],
    image: '/projects/whatsapp_bot.jpg',
    highlights: [
      'Tool-calling for multi-step workflows',
      'RAG-powered medical Q&A',
      'Automated appointment booking + email confirmations',
    ],
    linkedin: null,
    github: 'https://github.com/asadintwala/Whatsapp_tool_calling',
    live: null,
    accent: 'bg-green-500',
  },
];

const JOURNEY_PHASES = [
  {
    period: '2016 – 2022',
    title: 'Pathology Lab Owner',
    description:
      'Ran a clinical pathology lab — performing hematology, biochemistry, and microbiology tests. Developed precision, data accuracy, and process optimization skills that I carry into every AI system I build today.',
    education: 'Diploma in Medical Lab Technology',
    institution: 'Gujarat Institute of Technical Education, Surat',
    image: '/photos/lab_microscope.jpeg',
    imageAlt: 'Working at the pathology lab — analyzing samples under the microscope',
    color: 'amber',
    imagePosition: 'center 15%',
  },
  {
    period: '2022 – 2024',
    title: 'Pivoting to Data Science',
    description:
      'Made the leap from healthcare to tech. Studied Python, machine learning, deep learning, and NLP — building projects that bridged my medical background with data-driven problem solving.',
    education: 'Data Science',
    institution: 'Govardhan Institute, Surat',
    image: '/photos/lab_portrait.png',
    imageAlt: 'The pivot — deciding to transition from lab coat to code',
    color: 'blue',
    projects: [
      {
        name: 'Laptop Price Prediction (ML)',
        url: 'https://www.linkedin.com/posts/asad-intwala_machine-learning-project-for-laptop-price-activity-7203049846990188544-Li0F',
      },
      {
        name: 'Atliq Amazon Power BI Report',
        url: 'https://www.linkedin.com/posts/asad-intwala_atliq-amazon-power-bi-report-activity-7127665561701933057-azzY',
      },
    ],
    imagePosition: 'center 15%',
  },
  {
    period: '2024 – Present',
    title: 'AI/ML Engineering',
    description:
      'Now building production AI systems — from clinical report analyzers to voice agents and MCP servers. The analytical rigor from the lab shapes every system I design.',
    companies: 'WebOsmotic · Appscrip · Evify · GHMC',
    image: '/photos/profile.png',
    imageAlt: 'Today — building AI solutions for real-world problems',
    color: 'emerald',
    imagePosition: 'center 20%',
  },
];

/* ────────────────────────────────────────────
   Component
   ──────────────────────────────────────────── */

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  const [expandedExps, setExpandedExps] = useState<Record<number, boolean>>({});
  const [expandedProjs, setExpandedProjs] = useState<Record<number, boolean>>({});
  const [activeStep, setActiveStep] = useState(4); // Default to newest (WebOsmotic)

  const toggleExp = (idx: number) => {
    setExpandedExps(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const toggleProj = (idx: number) => {
    setExpandedProjs(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  /* ── scroll tracking ── */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const ids = ['contact', 'journey', 'advocacy', 'projects', 'experience', 'skills', 'about', 'hero'];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── intersection observer for fade-up ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    );
    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  /* ── image error fallback ── */
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    target.style.display = 'none';
    const fallback = target.nextElementSibling as HTMLElement | null;
    if (fallback) fallback.style.display = 'flex';
  };

  const activeExp = [...EXPERIENCE].reverse()[activeStep];

  return (
    <div className="min-h-screen font-sans">

      {/* ═══════════════════════════════════════
          IMAGE LIGHTBOX MODAL
          ═══════════════════════════════════════ */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] animate-[fadeScale_0.25s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-slate-900 hover:scale-110 transition-all z-10"
              aria-label="Close image"
            >
              <X size={16} />
            </button>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl bg-white"
            />
            <p className="text-center text-white/70 text-sm mt-3 font-medium">
              {lightboxImage.alt}
            </p>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════
          NAVIGATION
          ═══════════════════════════════════════ */}
      <nav
        id="nav"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Brand */}
            <button
              onClick={() => scrollTo('hero')}
              className="text-lg font-bold text-slate-900 tracking-tight hover:text-slate-700 transition-colors"
            >
              Asad Intwala
            </button>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className={`nav-link text-[13px] font-medium tracking-wide uppercase transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-slate-900 active'
                      : 'text-slate-400 hover:text-slate-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-3">
                <a
                  href="https://github.com/asadintwala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-700 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/asad-intwala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-slate-700 p-1"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 shadow-lg">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="block w-full text-left py-3 text-slate-600 hover:text-slate-900 text-sm font-medium border-b border-slate-50 last:border-0 transition-colors"
              >
                {item}
              </button>
            ))}
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/asadintwala" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-700">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/asad-intwala" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-700">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ═══════════════════════════════════════
          HERO
          ═══════════════════════════════════════ */}
      <section id="hero" className="min-h-[92vh] flex items-center pt-20">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text content */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 text-slate-400 text-sm mb-5">
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-slate-400" />
                  <span>Surat, Gujarat, India</span>
                </div>
                <span className="text-slate-300">•</span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                  Open to Relocation
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-4 leading-[1.08]">
                Asad Intwala
              </h1>

              <p className="text-xl md:text-2xl font-semibold text-blue-600 mb-6">
                AI / ML Engineer — LLM Systems, RAG & Agentic Automation
              </p>

              <p className="text-base md:text-lg text-slate-500 mb-10 leading-relaxed max-w-2xl">
                2+ years shipping production Generative AI systems: hybrid RAG pipelines, multi-agent & MCP-based agentic workflows, and cloud-deployed LLM microservices on AWS Bedrock & Lambda. Experienced embedding directly with clients for requirement scoping and end-to-end delivery.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollTo('projects')}
                  className="px-6 py-3 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2"
                >
                  View Projects <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="hidden lg:block flex-shrink-0">
              <div
                className="w-64 h-80 rounded-2xl overflow-hidden shadow-xl ring-4 ring-white rotate-2 cursor-pointer hover:rotate-0 transition-transform duration-500 group"
                onClick={() => setLightboxImage({ src: '/photos/profile.png', alt: 'Asad Intwala' })}
              >
                <img
                  src="/photos/profile.png"
                  alt="Asad Intwala"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ objectPosition: 'center 20%' }}
                  onError={(e) => {
                    (e.currentTarget.closest('.rounded-2xl') as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ABOUT
          ═══════════════════════════════════════ */}
      <section id="about" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="fade-up">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              From Pathology Lab to AI Engineering
            </h2>
          </div>

          <div className="fade-up fade-up-delay-1 max-w-3xl mb-14">
            <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-4">
              I started my career running a Pathology Medical Lab, where I developed a deep
              appreciation for data accuracy and process optimization. That analytical background
              naturally led me into AI/ML engineering, where I now build production-grade Generative AI systems,
              hybrid RAG pipelines, multi-agent workflows, and MCP-based agentic architectures.
            </p>
            <p className="text-slate-600 leading-relaxed text-base md:text-lg">
              Beyond core algorithm & model engineering, I am comfortable embedding directly with international clients for gathering requirements, solution scoping, and owning delivery end-to-end from initial prototype to cloud production deployment.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="fade-up fade-up-delay-1 bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <p className="text-3xl font-bold text-slate-900 mb-1">80%</p>
              <p className="text-sm text-slate-500">
                Reduction in manual report interpretation at Meddy
              </p>
            </div>
            <div className="fade-up fade-up-delay-2 bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <p className="text-3xl font-bold text-slate-900 mb-1">500+</p>
              <p className="text-sm text-slate-500">
                Leads enriched and processed daily via automation
              </p>
            </div>
            <div className="fade-up fade-up-delay-3 bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <p className="text-3xl font-bold text-slate-900 mb-1">70%</p>
              <p className="text-sm text-slate-500">
                Improvement in outreach campaign efficiency
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SKILLS
          ═══════════════════════════════════════ */}
      <section id="skills" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="fade-up">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
              Technical Skills
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
              What I Work With
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILL_CATEGORIES.map((cat, i) => (
              <div
                key={cat.name}
                className={`fade-up fade-up-delay-${Math.min(i + 1, 4)}`}
              >
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          EXPERIENCE — Career Roadmap
          ═══════════════════════════════════════ */}
      <section id="experience" className="py-20 md:py-28 bg-stone-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="fade-up text-center mb-16">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
              Career Path
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              My Professional Roadmap
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base">
              A chronological journey highlighting my transition from analyzing laboratory data to engineering production AI applications.
            </p>
          </div>

          {/* Stepped Timeline Track */}
          <div className="fade-up max-w-4xl mx-auto mb-16 relative">
            {/* Horizontal timeline track line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 rounded-full" />
            
            {/* Active filled line */}
            <div 
              className="absolute top-1/2 left-0 h-1 bg-blue-600 -translate-y-1/2 rounded-full roadmap-line-transition" 
              style={{ width: `${(activeStep / 4) * 100}%` }}
            />

            {/* Stepped track scroll wrapper */}
            <div className="relative flex justify-between items-center overflow-x-auto scrollbar-none gap-8 md:gap-4 py-6 px-4">
              {[...EXPERIENCE].reverse().map((exp, stepIdx) => {
                const isActive = stepIdx === activeStep;
                const isPassed = stepIdx < activeStep;
                return (
                  <button
                    key={stepIdx}
                    onClick={() => setActiveStep(stepIdx)}
                    className="flex flex-col items-center min-w-[120px] md:min-w-0 md:flex-1 group focus:outline-none transition-all duration-300 relative"
                  >
                    {/* Period above step circle */}
                    <span className={`text-[11px] font-bold mb-3 tracking-wider uppercase transition-colors duration-200 ${
                      isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'
                    }`}>
                      {exp.period.split(' – ')[0] || exp.period}
                    </span>

                    {/* Step circle */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs border-2 transition-all duration-300 relative z-10 ${
                      isActive 
                        ? 'border-blue-600 bg-blue-50 text-blue-600 shadow-sm shadow-blue-100 ring-4 ring-blue-50 timeline-step-pulse scale-110' 
                        : isPassed
                          ? 'border-blue-600 bg-blue-600 text-white'
                          : 'border-slate-200 bg-white text-slate-400 hover:border-slate-300'
                    }`}>
                      {isActive ? <Briefcase size={14} /> : String(stepIdx + 1).padStart(2, '0')}
                    </div>

                    {/* Company and location below step circle */}
                    <span className={`text-xs font-semibold mt-3 text-center transition-colors duration-200 truncate max-w-[120px] ${
                      isActive ? 'text-slate-900 font-bold' : 'text-slate-500 group-hover:text-slate-700'
                    }`}>
                      {exp.company.replace(' Pvt Ltd', '').replace(' Logitech', '')}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Roadmap Detail Card */}
          <div key={activeStep} className="animate-slide-fade max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm relative overflow-hidden group hover:border-slate-200 transition-all duration-300">
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full mb-3 inline-block">
                    Milestone {String(activeStep + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">
                    {activeExp.title}
                  </h3>
                  <p className="text-base text-slate-600 font-medium mb-1">
                    {activeExp.company} · {activeExp.location}
                  </p>
                  <p className="text-sm text-slate-400 flex items-center gap-1.5 mt-2">
                    <Briefcase size={14} className="text-slate-400" />
                    <span>{activeExp.period}</span>
                  </p>
                </div>

                {/* Action Button/Badge showing toggle status */}
                <button 
                  onClick={() => toggleExp(activeStep)}
                  className="flex items-center gap-2 px-4 py-2 border border-slate-200 hover:border-slate-400 text-xs font-semibold text-slate-600 hover:text-slate-800 rounded-xl bg-slate-50/50 hover:bg-slate-100 transition-all duration-300 self-start group/btn"
                >
                  {expandedExps[activeStep] ? <ChevronUp size={14} /> : <ChevronDown size={14} className="group-hover/btn:translate-y-0.5 transition-transform" />}
                  <span>{expandedExps[activeStep] ? 'Collapse Details' : 'Reveal Insights & Impact'}</span>
                </button>
              </div>

              {/* Expandable Insight Bullet Points */}
              <div className={`insights-wrapper ${expandedExps[activeStep] ? 'expanded' : ''}`}>
                <div className="insights-inner">
                  <div className="pt-6 border-t border-slate-100">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4">
                      Key Contributions & Technical Impact
                    </p>
                    <ul className="space-y-3">
                      {activeExp.bullets.map((bullet, idx) => (
                        <li 
                          key={idx} 
                          className="text-sm text-slate-600 leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-blue-500 hover:text-slate-900 transition-colors"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Toggle Hint Footer */}
              {!expandedExps[activeStep] && (
                <div 
                  onClick={() => toggleExp(activeStep)}
                  className="mt-6 pt-4 border-t border-slate-50 flex items-center gap-2 text-xs text-slate-500 hover:text-slate-700 cursor-pointer font-medium transition-colors"
                >
                  <ChevronDown size={14} className="animate-bounce" />
                  <span>Click to view achievements, metrics, and technology details</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROJECTS
          ═══════════════════════════════════════ */}
      <section id="projects" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="fade-up">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
              Projects
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Things I've Built
            </h2>
            <p className="text-slate-500 mb-12 max-w-2xl">
              A selection of projects spanning healthcare AI, workflow automation,
              voice agents, and developer tooling.
            </p>
          </div>

          <div className="fade-up grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {PROJECTS.map((project, idx) => {
              const isExpanded = !!expandedProjs[idx];
              return (
                <div
                  key={idx}
                  className={`group project-card rounded-xl border overflow-hidden transition-all duration-300 flex flex-col ${
                    isExpanded 
                      ? 'bg-white border-slate-200 shadow-sm' 
                      : 'bg-stone-50 border-slate-100 hover:border-slate-200 hover:bg-white hover:shadow-sm'
                  }`}
                >
                  {/* Image / Placeholder */}
                  {project.image ? (
                    <div
                      className="aspect-video overflow-hidden relative bg-slate-100 cursor-pointer group/img"
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxImage({ src: project.image!, alt: project.title });
                      }}
                      title="Click to enlarge"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        onError={handleImgError}
                        className="project-image w-full h-full object-cover"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover/img:opacity-100 transition-opacity text-white text-xs font-medium bg-black/50 px-3 py-1.5 rounded-full">
                          Click to view
                        </span>
                      </div>
                      {/* Fallback if image fails */}
                      <div
                        className={`absolute inset-0 ${project.accent} items-center justify-center hidden`}
                      >
                        <span className="text-white/25 text-7xl font-black select-none">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`aspect-[21/9] ${project.accent} flex items-center justify-center`}
                    >
                      <span className="text-white/20 text-6xl font-black select-none">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Clickable header area for expand/collapse */}
                    <div 
                      className="flex items-start justify-between gap-4 mb-2 cursor-pointer select-none"
                      onClick={() => toggleProj(idx)}
                    >
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                          {project.title}
                        </h3>
                        {project.company && (
                          <p className="text-xs font-medium text-blue-600 mt-0.5">{project.company}</p>
                        )}
                      </div>

                      {/* Interactive Toggle Icon */}
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                        isExpanded 
                          ? 'bg-slate-800 text-white rotate-180' 
                          : 'bg-slate-100/80 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-800 group-hover:scale-110'
                      }`}>
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />}
                      </div>
                    </div>

                    <p className="text-sm text-slate-500 leading-relaxed mb-4 select-text">
                      {project.description}
                    </p>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] px-2.5 py-1 bg-white text-slate-500 rounded-md border border-slate-100 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Expandable Project Highlights */}
                    <div className={`insights-wrapper ${isExpanded ? 'expanded' : ''}`}>
                      <div className="insights-inner">
                        <div className="mt-2 pt-4 border-t border-slate-100 mb-4">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                            Key Accomplishments & Impact
                          </p>
                          <ul className="space-y-1.5">
                            {project.highlights.map((h, i) => (
                              <li
                                key={i}
                                className="text-xs text-slate-500 flex items-start gap-2"
                              >
                                <span className="text-blue-400 mt-0.5">▸</span>
                                {h}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Toggle Prompt */}
                    {!isExpanded && (
                      <div 
                        onClick={() => toggleProj(idx)}
                        className="mb-4 text-[11px] text-slate-500 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer select-none"
                      >
                        <ChevronDown size={12} className="text-slate-400" />
                        <span>Click card to view accomplishments & impact</span>
                      </div>
                    )}

                    {/* Links */}
                    <div 
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-4 pt-4 border-t border-slate-100"
                    >
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-slate-400 hover:text-slate-700 flex items-center gap-1.5 transition-colors"
                        >
                          <Github size={14} />
                          Code
                        </a>
                      )}
                      {project.linkedin && (
                        <a
                          href={project.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-slate-400 hover:text-slate-700 flex items-center gap-1.5 transition-colors"
                        >
                          <Linkedin size={14} />
                          Post
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1.5 font-medium transition-colors"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                      )}
                      {!project.github && !project.linkedin && !project.live && (
                        <span className="text-xs text-slate-300 italic">Internal project</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TECHNICAL ADVOCACY & COMMUNITY
          ═══════════════════════════════════════ */}
      <section id="advocacy" className="py-20 md:py-28 bg-stone-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="fade-up">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
              Technical Advocacy & Community
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              AI Content Creation & Technical Education
            </h2>
            <p className="text-slate-500 mb-12 max-w-2xl">
              Demystifying complex artificial intelligence architectures through engaging technical content and video reels.
            </p>
          </div>

          <div className="fade-up bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 rounded-2xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden group">
            {/* Background glowing ambient light */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-700 pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-700 pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="flex-1 max-w-2xl">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-pink-300 border border-pink-500/30">
                    <Video size={13} className="text-pink-400" />
                    AI Content Creator @ WebOsmotic
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 text-slate-300">
                    <Instagram size={13} className="text-pink-400" />
                    Instagram Reels
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-white">
                  Empowering Developers & Stakeholders with AI Technical Reels
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Produced educational technical reels explaining advanced Generative AI architectures, RAG systems, and Multi-Agent workflows to demystify complex AI concepts for non-technical stakeholders and developers alike.
                </p>

                <div className="flex flex-wrap gap-2">
                  {['GenAI Architectures', 'RAG Systems', 'Multi-Agent Workflows', 'Vector Databases', 'Voice AI Agents', 'MCP Tool Calling'].map((topic) => (
                    <span
                      key={topic}
                      className="text-xs px-3 py-1 bg-white/10 text-slate-200 rounded-lg backdrop-blur-sm border border-white/10 font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Reel Card Component */}
              <div className="flex-shrink-0 w-full lg:w-80 bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md flex flex-col items-center justify-center text-center group/card hover:border-pink-500/40 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-600 via-pink-600 to-amber-500 flex items-center justify-center mb-4 shadow-lg shadow-pink-500/20 group-hover/card:scale-110 transition-transform duration-300">
                  <Play size={28} className="text-white fill-white ml-1" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">Technical Reel Series</h4>
                <p className="text-xs text-slate-400 mb-4">
                  Visual breakdowns of LLMs, agentic patterns & production workflows
                </p>
                <div className="w-full pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300 font-medium">
                  <span className="flex items-center gap-1.5 text-pink-300">
                    <Sparkles size={13} /> WebOsmotic Presenter
                  </span>
                  <span className="text-slate-400">Short-Form Content</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MY JOURNEY — Transition Story
          ═══════════════════════════════════════ */}
      <section id="journey" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="fade-up">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
              My Journey
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              The Path That Brought Me Here
            </h2>
            <p className="text-slate-500 mb-12 max-w-2xl">
              From analyzing blood samples under a microscope to building AI systems
              that analyze medical reports — every step shaped how I approach problems today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {JOURNEY_PHASES.map((phase, idx) => (
              <div key={idx} className="fade-up group" style={{ transitionDelay: `${idx * 0.15}s` }}>
                {/* Photo */}
                <div
                  className="aspect-[4/3] rounded-xl overflow-hidden mb-5 cursor-pointer relative ring-1 ring-slate-200 hover:ring-blue-300 transition-all shadow-sm hover:shadow-md"
                  onClick={() => setLightboxImage({ src: phase.image, alt: phase.imageAlt })}
                >
                  <img
                    src={phase.image}
                    alt={phase.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: phase.imagePosition || 'center' }}
                    onError={handleImgError}
                  />
                  <div className={`absolute inset-0 bg-slate-200 items-center justify-center hidden`}>
                    <span className="text-slate-400 text-sm">Photo</span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-medium bg-black/50 px-3 py-1.5 rounded-full">
                      Click to view
                    </span>
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
                  <span
                    className={`inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full mb-3 ${
                      phase.color === 'amber'
                        ? 'text-amber-700 bg-amber-50'
                        : phase.color === 'blue'
                          ? 'text-blue-700 bg-blue-50'
                          : 'text-emerald-700 bg-emerald-50'
                    }`}
                  >
                    {phase.period}
                  </span>

                  <h3 className="text-base font-semibold text-slate-900 mb-2">{phase.title}</h3>

                  <p className="text-sm text-slate-500 leading-relaxed mb-4">
                    {phase.description}
                  </p>

                  {/* Education info */}
                  {phase.education && (
                    <div className="text-xs text-slate-400 mb-3 border-t border-slate-100 pt-3">
                      <div className="flex items-start gap-2">
                        <GraduationCap size={13} className="mt-0.5 flex-shrink-0 text-slate-400" />
                        <div>
                          <p className="font-medium text-slate-600">{phase.education}</p>
                          <p>{phase.institution}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Companies */}
                  {phase.companies && (
                    <div className="text-xs text-slate-400 border-t border-slate-100 pt-3">
                      <p className="font-medium text-slate-600 mb-1">Companies</p>
                      <p>{phase.companies}</p>
                    </div>
                  )}

                  {/* Projects during this phase */}
                  {phase.projects && (
                    <div className="border-t border-slate-100 pt-3">
                      <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">Projects</p>
                      <div className="space-y-1.5">
                        {phase.projects.map((proj, i) => (
                          <a
                            key={i}
                            href={proj.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-blue-600 hover:text-blue-700 flex items-center gap-1.5 transition-colors"
                          >
                            <Linkedin size={12} className="flex-shrink-0" />
                            {proj.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT
          ═══════════════════════════════════════ */}
      <section id="contact" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="fade-up">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Let's Talk
            </h2>
            <p className="text-slate-500 mb-10 max-w-xl">
              Open to AI/ML roles, freelance projects, and collaborations.
              Drop me a message — I'd love to hear about what you're building.
            </p>
          </div>

          <div className="fade-up flex flex-col sm:flex-row flex-wrap gap-4">
            <a
              href="mailto:asadintwala@gmail.com"
              className="flex items-center gap-3 px-6 py-4 bg-stone-50 border border-slate-150 rounded-xl hover:bg-slate-100 transition-colors group"
            >
              <Mail size={18} className="text-slate-400 group-hover:text-slate-600 transition-colors" />
              <div>
                <p className="text-sm font-medium text-slate-800">Email</p>
                <p className="text-xs text-slate-400">asadintwala@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+919558336489"
              className="flex items-center gap-3 px-6 py-4 bg-stone-50 border border-slate-150 rounded-xl hover:bg-slate-100 transition-colors group"
            >
              <Phone size={18} className="text-slate-400 group-hover:text-slate-600 transition-colors" />
              <div>
                <p className="text-sm font-medium text-slate-800">Phone</p>
                <p className="text-xs text-slate-400">+91 9558336489</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/asad-intwala"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-stone-50 border border-slate-150 rounded-xl hover:bg-slate-100 transition-colors group"
            >
              <Linkedin size={18} className="text-slate-400 group-hover:text-slate-600 transition-colors" />
              <div>
                <p className="text-sm font-medium text-slate-800">LinkedIn</p>
                <p className="text-xs text-slate-400">asad-intwala</p>
              </div>
            </a>

            <a
              href="https://github.com/asadintwala"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-stone-50 border border-slate-150 rounded-xl hover:bg-slate-100 transition-colors group"
            >
              <Github size={18} className="text-slate-400 group-hover:text-slate-600 transition-colors" />
              <div>
                <p className="text-sm font-medium text-slate-800">GitHub</p>
                <p className="text-xs text-slate-400">asadintwala</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════ */}
      <footer className="py-8 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Asad Intwala · Surat, Gujarat
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/asadintwala"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-slate-500 transition-colors"
            >
              <Github size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/asad-intwala"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-slate-500 transition-colors"
            >
              <Linkedin size={15} />
            </a>
            <a
              href="mailto:asadintwala@gmail.com"
              className="text-slate-300 hover:text-slate-500 transition-colors"
            >
              <Mail size={15} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
