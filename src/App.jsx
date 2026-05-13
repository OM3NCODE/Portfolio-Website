import React from 'react';
import { 
  Terminal, Rocket, Bot, CodeXml, 
  BrainCircuit, Database, Cpu, 
  Video, Box, Gamepad2, Image, Grid,
  ArrowRight, Award, ExternalLink
} from 'lucide-react';

const Badge = ({ children }) => (
  <span className="px-2 py-1 text-xs font-mono text-primary bg-primary/10 border border-primary/30 rounded">
    {children}
  </span>
);

const SpecContainer = ({ title, children, className = "" }) => (
  <div className={`spec-border p-6 sm:p-8 ${className}`}>
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 to-transparent opacity-50"></div>
    {title && (
      <div className="mb-6 flex items-center gap-4">
        <div className="h-px bg-primary/30 flex-grow"></div>
        <h2 className="font-mono text-primary uppercase tracking-widest text-sm font-semibold">{title}</h2>
        <div className="h-px bg-primary/30 w-12"></div>
      </div>
    )}
    {children}
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-background bg-grid text-gray-light font-sans selection:bg-primary/30 selection:text-white">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-primary/20 bg-background/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-mono text-primary font-bold text-xl tracking-tighter">ADHISH<span className="animate-pulse">_</span></div>
          <div className="hidden md:flex gap-8 font-mono text-xs uppercase tracking-widest">
            <a href="#about" className="hover:text-primary transition-colors">INIT_ABOUT</a>
            <a href="#toolkit" className="hover:text-primary transition-colors">SYS_TOOLS</a>
            <a href="#projects" className="hover:text-primary transition-colors">EXEC_WORKS</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24 space-y-24">
        
        {/* Achievement Banner */}
        <div className="bg-primary/5 border border-primary/30 rounded-lg p-4 flex flex-col sm:flex-row items-center gap-4 glow-border animate-fade-in">
          <div className="bg-primary/20 p-2 rounded-full text-primary shrink-0">
            <Award size={24} />
          </div>
          <div>
            <h3 className="font-mono text-primary text-sm font-semibold">National Youth Leader</h3>
            <p className="text-sm text-gray-light/80 mt-1">Winner of the Indian Sustainable Stratthon and Represented India at the ASEAN-China-India Youth Leadership Summit in Singapore 2024.</p>
          </div>
        </div>

        {/* Hero & Bio */}
        <section id="about" className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-6">
            <Badge>SYS.STATUS: ONLINE</Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-white glow-text">
              Adhish Bharadwaj<br/>
              <span className="text-2xl sm:text-3xl font-mono text-primary mt-2 block font-normal">AI-Native Creator & Systems Architect.</span>
            </h1>
            <p className="text-lg text-gray-dim leading-relaxed max-w-2xl border-l-2 border-primary/30 pl-4">
              Bridging the gap between creative intent and technical execution through rapid prototyping, agentic workflows, and AI-enabled production.
            </p>
          </div>
          
          <SpecContainer title="BIO_DATA" className="lg:col-span-2">
            <p className="text-sm leading-relaxed text-gray-light/80">
              I am a final-year B.Tech CSE graduate specializing in AI/ML. As a 'Vibe Coder,' I operate at the intersection of Design Thinking and technical development. 
              <br/><br/>
              For the past two years, I have been a core contributor to <span className="text-primary">High As Unicorn (HAU)</span>, a Solana/Rune project, evolving from a content creator to a secondary developer on standby. My specialty is closing the gap between ideas and output by building the systems that make AI-generated content consistent and repeatable.
            </p>
          </SpecContainer>
        </section>

        {/* Technical Toolkit */}
        <section id="toolkit">
          <SpecContainer title="TECHNICAL_TOOLKIT">
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Category 1 */}
              <div className="space-y-4">
                <h3 className="font-mono text-white text-sm border-b border-primary/20 pb-2">AI Systems</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm"><BrainCircuit size={16} className="text-primary"/> LangGraph</li>
                  <li className="flex items-center gap-3 text-sm"><Database size={16} className="text-primary"/> Chroma DB</li>
                  <li className="flex items-center gap-3 text-sm"><Cpu size={16} className="text-primary"/> SLM Fine-tuning</li>
                  <li className="flex items-center gap-3 text-sm"><Bot size={16} className="text-primary"/> SAP GenAI Cert.</li>
                </ul>
              </div>

              {/* Category 2 */}
              <div className="space-y-4">
                <h3 className="font-mono text-white text-sm border-b border-primary/20 pb-2">Vibe Coding</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm"><Terminal size={16} className="text-primary"/> Cursor</li>
                  <li className="flex items-center gap-3 text-sm"><Rocket size={16} className="text-primary"/> Antigravity</li>
                  <li className="flex items-center gap-3 text-sm"><Bot size={16} className="text-primary"/> GitHub Co-Pilot</li>
                  <li className="flex items-center gap-3 text-sm"><CodeXml size={16} className="text-primary"/> v0.dev</li>
                </ul>
              </div>

              {/* Category 3 */}
              <div className="space-y-4">
                <h3 className="font-mono text-white text-sm border-b border-primary/20 pb-2">Creative Production</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm"><Video size={16} className="text-primary"/> DaVinci Resolve</li>
                  <li className="flex items-center gap-3 text-sm"><Box size={16} className="text-primary"/> Blender</li>
                  <li className="flex items-center gap-3 text-sm"><Gamepad2 size={16} className="text-primary"/> Unity (WebGL)</li>
                  <li className="flex items-center gap-3 text-sm"><Image size={16} className="text-primary"/> Photoshop</li>
                  <li className="flex items-center gap-3 text-sm"><Grid size={16} className="text-primary"/> Aseprite</li>
                </ul>
              </div>

            </div>
          </SpecContainer>
        </section>

        {/* Project Journeys */}
        <section id="projects">
          <SpecContainer title="PROJECT_JOURNEYS">
            <div className="space-y-6">
              
              {/* Journey 1 */}
              <div className="group relative p-6 border border-gray-dim/20 bg-background/50 hover:border-primary/50 transition-colors rounded-lg overflow-hidden">
                <div className="absolute left-0 top-0 w-1 h-full bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">HAU Generative Series</h3>
                    <p className="text-sm text-gray-dim">End-to-end AI video production pipeline focusing on character consistency and marketing assets.</p>
                  </div>
                  <button className="flex items-center gap-2 text-xs font-mono uppercase text-primary bg-primary/10 hover:bg-primary/20 px-4 py-2 rounded transition-colors self-start md:self-center shrink-0 border border-primary/20">
                    View Details <ArrowRight size={14} />
                  </button>
                </div>
              </div>

              {/* Journey 2 */}
              <div className="group relative p-6 border border-gray-dim/20 bg-background/50 hover:border-primary/50 transition-colors rounded-lg overflow-hidden">
                <div className="absolute left-0 top-0 w-1 h-full bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">HAUWEE'S Lava Run</h3>
                    <p className="text-sm text-gray-dim">A fast-paced 2D pixel-art WebGL game built with Unity and Aseprite.</p>
                  </div>
                  <button className="flex items-center gap-2 text-xs font-mono uppercase text-primary bg-primary/10 hover:bg-primary/20 px-4 py-2 rounded transition-colors self-start md:self-center shrink-0 border border-primary/20">
                    View Details <ArrowRight size={14} />
                  </button>
                </div>
              </div>

              {/* Journey 3 */}
              <div className="group relative p-6 border border-gray-dim/20 bg-background/50 hover:border-primary/50 transition-colors rounded-lg overflow-hidden">
                <div className="absolute left-0 top-0 w-1 h-full bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">Retail Saarthi</h3>
                      <Badge>Final Year Project</Badge>
                    </div>
                    <p className="text-sm text-gray-dim">A multilingual AI agent built with LangGraph and fine-tuned SLMs to solve inventory overhang for Indian kirana stores.</p>
                  </div>
                  <button className="flex items-center gap-2 text-xs font-mono uppercase text-primary bg-primary/10 hover:bg-primary/20 px-4 py-2 rounded transition-colors self-start md:self-center shrink-0 border border-primary/20">
                    View Details <ArrowRight size={14} />
                  </button>
                </div>
              </div>

            </div>
          </SpecContainer>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-primary/20 bg-background/80 mt-12 py-8 text-center text-xs font-mono text-gray-dim">
        <p>SYSTEM.HALT // © 2026 Adhish Bharadwaj</p>
      </footer>
    </div>
  );
};

export default App;
