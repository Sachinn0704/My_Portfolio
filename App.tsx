
import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ExternalLink, 
  Code2, 
  Database, 
  Terminal, 
  Layout, 
  BarChart3, 
  BrainCircuit, 
  Server, 
  Globe,
  ChevronRight,
  Send,
  Sparkles,
  Award,
  Cpu,
  Shield,
  Layers,
  Zap,
  TrendingUp,
  PieChart,
  Bot
} from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import Navbar from './components/Navbar';
import SectionHeader from './components/SectionHeader';
import AIAssistant from './components/AIAssistant';
import ResumeImportModal from './components/ResumeImportModal';
import { PROJECTS, SKILLS, EXPERIENCES, CERTIFICATIONS } from './constants';

const App: React.FC = () => {
  const [portfolioData, setPortfolioData] = useState({
    name: "Sachin B",
    tagline: "Data Scientist",
    about: "I am a B.Tech Computer Science student specializing in Data Science. As a dedicated Data Scientist, I am passionate about uncovering patterns in complex datasets and building predictive models that drive strategic decisions. My expertise spans Machine Learning, Deep Learning, and statistical analysis, with a core mission to turn raw data into actionable business intelligence.",
    skills: SKILLS,
    projects: PROJECTS,
    experiences: EXPERIENCES,
    certifications: CERTIFICATIONS
  });

  const [isImportModalOpen, setIsImportModalOpen] = useState(false);

  const iconMap: Record<string, React.ReactNode> = {
    Terminal: <Terminal size={20} />,
    Database: <Database size={20} />,
    Server: <Server size={20} />,
    Layout: <Layout size={20} />,
    BarChart3: <BarChart3 size={20} />,
    BrainCircuit: <BrainCircuit size={20} />,
    Code2: <Code2 size={20} />,
    Globe: <Globe size={20} />,
  };

  const handleDataGenerated = (newData: any) => {
    setPortfolioData({
      ...portfolioData,
      ...newData,
      projects: newData.projects.map((p: any, i: number) => ({
        ...p,
        id: `gen-${i}`,
        imageUrl: `https://picsum.photos/seed/project-${i}/1200/800`,
        githubUrl: 'https://github.com/SachinBhosagi'
      }))
    });
  };

  return (
    <div className="min-h-screen selection:bg-teal/30 selection:text-teal-light">
      <Navbar />
      
      {/* Premium Hero Section */}
      <header id="home" className="relative min-h-screen flex items-center pt-24 px-6 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-teal/10 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 z-10 animate-in slide-in-from-bottom-10 duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md">
              <TrendingUp size={14} className="text-teal" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                Lead Professional Data Scientist
              </span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.9]">
              <span className="block opacity-40">SACHIN B.</span>
              <span className="text-gradient">DATA</span><br />
              <span className="block italic">SCIENTIST.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl leading-relaxed font-medium">
              Architecting <span className="text-slate-100 font-bold underline decoration-teal/40 underline-offset-8">predictive intelligence</span>. I transform chaotic datasets into strategic roadmaps using advanced ML and Statistical Engineering.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <a href="#projects" className="bg-teal text-charcoal px-10 py-5 rounded-2xl font-black text-lg hover:bg-teal-light transition-all shadow-2xl shadow-teal/20 flex items-center gap-3 group">
                Explore The Data <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={() => setIsImportModalOpen(true)}
                className="bg-white/5 text-slate-100 border border-white/10 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-3 backdrop-blur-md"
              >
                <Sparkles size={22} className="text-teal" /> AI Resume Sync
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-4 hidden lg:block relative animate-in fade-in duration-1000 delay-300">
            <div className="aspect-[3/4] rounded-[4rem] overflow-hidden border border-white/10 bg-slate-900 shadow-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal/80 z-10"></div>
              <img 
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Sachin`} 
                alt="Sachin Profile" 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <div className="glass p-6 rounded-[2rem] border border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal/20 rounded-2xl flex items-center justify-center text-teal">
                    <BarChart3 size={28} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Specialization</div>
                    <div className="text-lg font-black text-white leading-tight">Statistical AI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Narrative Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32">
                <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase">The <br /><span className="text-teal">Scientist.</span></h2>
                <div className="w-20 h-2 bg-teal rounded-full mb-8"></div>
                <p className="text-xl text-slate-400 font-medium leading-relaxed italic">
                  "I don't just observe data; I extract the truth hidden within it."
                </p>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-12">
              <div className="bento-card p-10 rounded-[3rem]">
                <p className="text-2xl md:text-3xl font-bold text-slate-100 leading-snug mb-8">
                  Specializing in <span className="text-teal">Predictive Modeling</span> and Statistical Decision Systems.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed mb-10">
                  {portfolioData.about}
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-8 bg-charcoal/50 rounded-[2.5rem] border border-white/5">
                    <div className="text-5xl font-black text-teal mb-2">95%</div>
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Model Accuracy Avg</div>
                  </div>
                  <div className="p-8 bg-charcoal/50 rounded-[2.5rem] border border-white/5">
                    <div className="text-5xl font-black text-white mb-2">10k+</div>
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Data Points Processed</div>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bento-card p-10 rounded-[3rem] flex flex-col justify-between">
                  <TrendingUp size={40} className="text-teal mb-12" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Data Strategy</h3>
                    <p className="text-slate-500 text-sm">Translating complex data metrics into high-level business strategy.</p>
                  </div>
                </div>
                <div className="bento-card p-10 rounded-[3rem] flex flex-col justify-between">
                  <Database size={40} className="text-teal mb-12" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">ETL Pipelines</h3>
                    <p className="text-slate-500 text-sm">Building robust data collection and cleaning automated systems.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="skills" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Statistical Stack." 
            subtitle="My toolkit is built for end-to-end data lifecycle management, from raw ingestion to predictive insights."
            centered
          />
          
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-8">
              <div className="bento-card p-8 rounded-[3rem]">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-8 text-center">Technical Depth</h4>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={portfolioData.skills.slice(0, 6)} layout="vertical">
                      <XAxis type="number" hide />
                      <YAxis dataKey="name" type="category" stroke="#94a3b8" fontSize={11} fontWeight={900} width={80} axisLine={false} tickLine={false} />
                      <Tooltip cursor={{fill: 'transparent'}} contentStyle={{backgroundColor: '#1e293b', border: 'none', borderRadius: '12px'}} />
                      <Bar dataKey="level" radius={[0, 8, 8, 0]} barSize={20}>
                        {portfolioData.skills.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#2dd4bf' : '#334155'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="bg-teal p-10 rounded-[3rem] text-charcoal">
                <BarChart3 size={32} className="mb-6" />
                <h3 className="text-2xl font-black mb-4">DS Core</h3>
                <p className="font-bold leading-tight opacity-80 italic">
                  "Utilizing Scikit-learn and Pandas to engineer robust analytical pipelines."
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
              {['Programming', 'Analytics & Visualization', 'Backend & Tools', 'Databases & Platforms'].map(cat => (
                <div key={cat} className="space-y-4">
                  <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-teal ml-4">{cat === 'Analytics & Visualization' ? 'Data Science & Analysis' : cat}</h5>
                  <div className="grid gap-4">
                    {portfolioData.skills.filter(s => s.category === cat).map(skill => (
                      <div key={skill.name} className="bento-card p-6 rounded-[2rem] flex items-center justify-between group">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-white/5 text-slate-400 rounded-xl flex items-center justify-center group-hover:text-teal group-hover:bg-teal/10 transition-all">
                            {iconMap[skill.icon] || <Code2 size={20} />}
                          </div>
                          <span className="font-bold text-slate-200 tracking-tight">{skill.name}</span>
                        </div>
                        <span className="text-[10px] font-black text-slate-600 uppercase tracking-tighter">{skill.level}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Showcases */}
      <section id="projects" className="py-32 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Research Lab." 
            subtitle="Deep dives into complex datasets solved with high-impact statistical engineering."
          />
          <div className="grid lg:grid-cols-2 gap-12">
            {portfolioData.projects.map((project) => (
              <div key={project.id} className="group bento-card rounded-[4rem] overflow-hidden flex flex-col h-full">
                <div className="aspect-[16/9] overflow-hidden relative">
                  <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-8 left-8 z-20">
                    <span className="px-5 py-2 glass text-teal rounded-full text-[10px] font-black uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-12 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-8">
                    <h3 className="text-3xl font-black text-white leading-tight group-hover:text-teal transition-colors">
                      {project.title}
                    </h3>
                    <a href={project.githubUrl} target="_blank" className="p-4 bg-charcoal text-slate-400 rounded-2xl border border-white/5 hover:text-teal hover:border-teal/30 transition-all shadow-xl">
                      <Github size={24} />
                    </a>
                  </div>
                  
                  {project.problemStatement && (
                    <div className="mb-8 p-6 bg-charcoal/50 rounded-[2rem] border border-white/5">
                      <div className="text-[10px] font-black uppercase text-teal tracking-widest mb-3">Goal</div>
                      <p className="text-lg font-bold text-slate-200 italic leading-snug">"{project.problemStatement}"</p>
                    </div>
                  )}

                  <p className="text-slate-400 mb-10 leading-relaxed font-medium">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-black px-4 py-2 bg-charcoal/50 rounded-xl border border-white/5 text-slate-500 uppercase tracking-widest group-hover:text-teal group-hover:border-teal/20 transition-all">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Experience." 
            subtitle="My professional journey through academia and industrial data projects."
          />
          <div className="space-y-8">
            {portfolioData.experiences.map((exp, i) => (
              <div key={i} className="bento-card p-12 rounded-[3rem] border border-white/5 flex flex-col md:flex-row md:items-center justify-between group hover:border-teal/20 transition-all">
                <div className="mb-6 md:mb-0">
                  <span className="text-teal font-black uppercase tracking-widest text-[10px] mb-2 block">{exp.period}</span>
                  <h3 className="text-3xl font-black text-white group-hover:text-teal transition-colors">{exp.role}</h3>
                  <p className="text-slate-500 font-bold">{exp.company}</p>
                </div>
                <div className="md:w-1/2">
                   <ul className="space-y-4">
                     {exp.description.map((point, j) => (
                       <li key={j} className="text-slate-400 flex items-start gap-3 italic">
                         <div className="mt-2 w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                         {point}
                       </li>
                     ))}
                   </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase">Let's <span className="text-teal">Connect.</span></h2>
            <p className="text-xl text-slate-500 font-medium italic">Available for data consulting and high-impact analytics roles.</p>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-4 flex flex-col gap-4">
              <a href="mailto:sachin@example.com" className="bento-card p-12 rounded-[3.5rem] flex flex-col items-center justify-center gap-6 group">
                <div className="w-20 h-20 bg-teal/10 rounded-3xl flex items-center justify-center text-teal group-hover:scale-110 transition-transform">
                  <Mail size={40} />
                </div>
                <div className="text-center">
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Email Channel</div>
                  <div className="text-xl font-black text-slate-100">sachin@example.com</div>
                </div>
              </a>
              <div className="bento-card p-12 rounded-[3.5rem] flex items-center justify-center gap-8">
                <a href="https://linkedin.com/in/SachinBhosagi" target="_blank" className="text-slate-500 hover:text-teal transition-all scale-150">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/SachinBhosagi" target="_blank" className="text-slate-500 hover:text-teal transition-all scale-150">
                  <Github size={24} />
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-8 bento-card p-12 md:p-20 rounded-[4rem] relative overflow-hidden">
               <form className="grid gap-10 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-slate-600 uppercase tracking-[0.4em] ml-2">Name</label>
                    <input type="text" placeholder="Identity" className="w-full p-6 rounded-3xl bg-charcoal border border-white/5 focus:outline-none focus:border-teal transition-all font-bold text-slate-100" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-slate-600 uppercase tracking-[0.4em] ml-2">Email</label>
                    <input type="email" placeholder="Access Point" className="w-full p-6 rounded-3xl bg-charcoal border border-white/5 focus:outline-none focus:border-teal transition-all font-bold text-slate-100" />
                  </div>
                </div>
                <div className="space-y-4">
                    <label className="text-[10px] font-black text-slate-600 uppercase tracking-[0.4em] ml-2">Objective</label>
                    <textarea rows={4} placeholder="What vision can we build with data?" className="w-full p-6 rounded-3xl bg-charcoal border border-white/5 focus:outline-none focus:border-teal transition-all font-bold text-slate-100 resize-none" />
                  </div>
                <button className="bg-teal text-charcoal py-6 rounded-[2rem] font-black text-2xl hover:bg-teal-light transition-all flex items-center justify-center gap-4 group shadow-2xl">
                  SEND TRANSMISSION <Send size={24} className="transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="text-center md:text-left">
            <div className="text-4xl font-black text-teal mb-4 tracking-tighter uppercase">
              Sachin B<span className="text-white">.</span>
            </div>
            <p className="text-slate-500 text-xs font-black uppercase tracking-[0.4em]">
              Lead Data Scientist
            </p>
          </div>
          
          <div className="flex gap-20">
            <div className="space-y-6">
              <h6 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">Site Links</h6>
              <nav className="flex flex-col gap-3">
                <a href="#about" className="text-sm font-bold text-slate-400 hover:text-teal transition-colors">About</a>
                <a href="#projects" className="text-sm font-bold text-slate-400 hover:text-teal transition-colors">Projects</a>
                <a href="#skills" className="text-sm font-bold text-slate-400 hover:text-teal transition-colors">Skills</a>
              </nav>
            </div>
            <div className="space-y-6 text-right md:text-left">
              <h6 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">Connect</h6>
              <nav className="flex flex-col gap-3">
                <a href="https://linkedin.com/in/SachinBhosagi" target="_blank" className="text-sm font-bold text-slate-400 hover:text-teal transition-colors">LinkedIn</a>
                <a href="https://github.com/SachinBhosagi" target="_blank" className="text-sm font-bold text-slate-400 hover:text-teal transition-colors">GitHub</a>
              </nav>
            </div>
          </div>
          
          <div className="text-right flex flex-col items-center md:items-end gap-6">
            <div className="text-[10px] font-black text-slate-700 uppercase tracking-widest leading-loose text-center md:text-right">
              © 2024 SACHIN B. <br /> ENGINEERED FOR INSIGHT.
            </div>
          </div>
        </div>
      </footer>

      <AIAssistant />
      <ResumeImportModal 
        isOpen={isImportModalOpen} 
        onClose={() => setIsImportModalOpen(false)} 
        onDataGenerated={handleDataGenerated}
      />
    </div>
  );
};

export default App;
