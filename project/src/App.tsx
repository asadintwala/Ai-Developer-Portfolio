import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Sparkles, Brain, Code2, Rocket, ChevronDown } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: "Meddy - Ai Medical Report Anlyzer",
      description: "Healthcare-focused AI application providing intelligent medical reports and imaging analysis.",
      tech: ["TypeScript", "AI", "Healthcare"],
      github: "https://www.linkedin.com/posts/asad-intwala_healthtech-medtech-ai-activity-7387837250895679488-euiG?utm_source=share&utm_medium=member_desktop&rcm=ACoAABSc2GYBqHoM_kIdm-OW55tt6b8yu5M04tQ",
      gradient: "from-emerald-500 to-teal-500",
      linkType: "linkedin"
    },
    {
      title: "Data Enrichment and Automation Mail Tool",
      description: "AI-powered auto triggered Lead scrapping, cold mail automation and data enrichment flow that requires minimal supervision.",
      tech: ["n8n","Reasoning", "Logic", "Prompting"],
      github: "https://www.linkedin.com/posts/asad-intwala_sales-salesdevelopment-automation-activity-7322524208406650881-f4gQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAABSc2GYBqHoM_kIdm-OW55tt6b8yu5M04tQ",
      gradient: "from-violet-500 to-fuchsia-500",
      linkType: "linkedin"
    },
    {
      title: "Odoo-n8n-retell Voice agent and automation system",
      description: "AI-powered voice agent and automation system for Odoo using n8n, twilio and Retell.",
      tech: ["JavaScript", "AI", "Odoo", "n8n", "Twilio", "Retell"],
      github: "https://www.linkedin.com/feed/update/urn:li:activity:7415713518483906560/",
      gradient: "from-emerald-500 to-teal-500",
      linkType: "linkedin"
    },
    {
      title: "Google Calendar AI Assistant",
      description: "Intelligent calendar management system using LangGraph and MCP(Model Context Protocol) for contextual scheduling and memory",
      tech: ["Python", "LangGraph", "AI", "MCP"],
      github: "https://github.com/asadwebosmotic/google_calendar_assistant_mcp_langgraph_langmem",
      gradient: "from-blue-500 to-cyan-500",
      linkType: "github"
    },
    {
      title: "Whatsapp AI Chatbot with tool calling",
      description: "Intelligent Whatsapp chatbot that wor as hosiptal customer care using developer.facebbook platform to complete tool calling and perform actions of RAG, check availability, book appointment with doctors in google calendar and send confirmation mails.",
      tech: ["Python", "AI", "GenAI SDK"],
      github: "https://github.com/asadintwala/Whatsapp_tool_calling",
      gradient: "from-blue-500 to-cyan-500",
      linkType: "github"
    },
    {
      title: "Ai Stock Price Predictor",
      description: "Combining AI and technical parameter for stock analysis(candle chart, financials, news) and price prediction with backtesting.",
      tech: ["node.js", "html", "css"],
      github: "https://github.com/asadintwala/ai-stock-price-predictor",
      gradient: "from-yellow-500 to-orange-500",
      linkType: "github"
    }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen relative overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Brain className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Asad Intwala
              </span>
            </div>

            <div className="hidden md:flex gap-8">
              {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors hover:text-cyan-400 ${
                    activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-slate-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/asadintwala" target="_blank" rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/asad-intwala" target="_blank" rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div
            className="inline-block mb-6 animate-float"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <Sparkles className="w-16 h-16 text-cyan-400 mx-auto" />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent animate-gradient">
              AI Developer
            </span>
            <br />
            <span className="text-slate-300">Crafting Intelligence</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Automating Tasks & Delivering Impactful AI Projects with Python, FastAPI, n8n and makeai.
            Transforming ideas into intelligent solutions that make a difference.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105 flex items-center gap-2"
            >
              View My Work <Rocket className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-slate-700 rounded-full font-semibold hover:border-cyan-500 transition-all hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-slate-500 hover:text-cyan-400 transition-colors"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              The Journey
            </h2>
            <p className="text-slate-400 text-lg">From Concept to Real World AI Solutions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10 group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">AI Innovator</h3>
              <p className="text-slate-400 leading-relaxed">
                Specializing in cutting-edge AI solutions, from RAG systems to personalized AI advisors.
                Passionate about pushing the boundaries of what's possible with machine learning.
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all hover:shadow-xl hover:shadow-emerald-500/10 group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">AI Full-Stack Developer</h3>
              <p className="text-slate-400 leading-relaxed">
                Proficient in Python, React, Node.js, and modern AI frameworks. Building scalable applications
                that seamlessly integrate intelligent features with beautiful user experiences.
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/10 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-violet-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Rocket className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Problem Solver</h3>
              <p className="text-slate-400 leading-relaxed">
                From healthcare to finance, creating AI solutions that address real-world challenges.
                Turning complex problems into elegant, intelligent systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-slate-400 text-lg">Professional milestones</p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-emerald-500"></div>

            <div className="space-y-12">
              <div className="relative pl-20">
                <div className="absolute left-5 top-0 w-7 h-7 bg-cyan-500 rounded-full border-4 border-slate-950"></div>
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-cyan-400">Webosmotic</h3>
                    <span className="text-emerald-400 text-sm font-semibold px-3 py-1 bg-emerald-500/10 rounded-full">Current</span>
                  </div>
                  <p className="text-slate-300 font-semibold mb-2">AI Developer</p>
                  <p className="text-slate-400">
                    Developing advanced AI solutions and intelligent applications, working with cutting-edge
                    technologies including LangGraph, MCP, n8n, make ai, Voice Agents, RAG systems and personalized AI advisors.
                  </p>
                </div>
              </div>

              <div className="relative pl-20">
                <div className="absolute left-5 top-0 w-7 h-7 bg-blue-500 rounded-full border-4 border-slate-950"></div>
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all">
                  <h3 className="text-2xl font-bold text-blue-400 mb-3">Appscrip</h3>
                  <p className="text-slate-300 font-semibold mb-2">AI Developer Intern</p>
                  <p className="text-slate-400">
                    Gained hands-on experience in Text based AI development, RAG, Chatbots, n8n learning projects
                    and learning industry best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-lg">Innovation in action</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all hover:shadow-xl group"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-800/50 text-slate-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="https://www.linkedin.com/posts/asad-intwala_sales-salesdevelopment-automation-activity-7322524208406650881-f4gQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAABSc2GYBqHoM_kIdm-OW55tt6b8yu5M04tQ"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    {project.linkType === "linkedin" ? (
                      <>
                        <Linkedin className="w-4 h-4" />
                        View on LinkedIn
                      </>
                    ) : (
                      <>
                        <Github className="w-4 h-4" />
                        View on GitHub
                      </>
                    )}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-20 relative">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="mb-12">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Let's Create Together
            </h2>
            <p className="text-slate-400 text-lg">
              Ready to build something extraordinary? Let's connect.
            </p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-12 hover:border-cyan-500/50 transition-all">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="https://github.com/asadintwala"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all hover:scale-105 group"
              >
                <Github className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                <span className="font-semibold">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/asad-intwala"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
              >
                <Linkedin className="w-6 h-6" />
                <span className="font-semibold">LinkedIn</span>
              </a>

              <a
                href="mailto:asadintwala@gmail.com"
                className="flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all hover:scale-105 group"
              >
                <Mail className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                <span className="font-semibold">asadintwala@gmail.com</span>
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-800">
              <p className="text-slate-500 text-sm">
                Open to collaborations, AI projects, and innovative opportunities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-500">
          <p>&copy; 2025 Asad Intwala.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
