import React, { useState, useEffect } from 'react';
import { chapters, Chapter } from './data';
import { Menu, X, Check, ArrowRight, Lightbulb, AlertTriangle, PlayCircle } from 'lucide-react';
import { Diagram } from './components/Diagram';

export default function App() {
  const [currentChapter, setCurrentChapter] = useState<number>(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentChapter]);

  if (currentChapter === 0) {
    return (
      <div className="min-h-screen bg-[#0a120c] flex flex-col justify-center items-center p-6 text-center relative overflow-hidden">
        {/* Subtle radial gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pool-green/10 via-pool-bg to-[#0a120c] z-0"></div>
        
        <div className="max-w-3xl flex flex-col items-center relative z-10">
          <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-pool-green border border-[#4ddd6f]/30 flex items-center justify-center shadow-[0_0_80px_rgba(45,122,58,0.2)] mb-10">
             <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-pool-text flex items-center justify-center">
                <span className="text-pool-green font-title text-2xl md:text-3xl font-bold mt-1">8</span>
             </div>
          </div>
          
          <h1 className="font-title text-7xl md:text-[10rem] leading-[0.85] tracking-tight text-white mb-6 drop-shadow-2xl opacity-95">
            DONO DA <span className="text-pool-yellow block md:inline mt-2 md:mt-0">MESA</span>
          </h1>
          
          <div className="w-24 h-1 bg-pool-border mb-10 opacity-50"></div>
          
          <p className="font-condensed text-xl md:text-3xl text-pool-muted mb-16 max-w-2xl leading-relaxed font-light tracking-wide">
            O guia definitivo de sinuca para você que deseja ganhar apostas e impressionar no bar.
          </p>
          
          <button 
            onClick={() => setCurrentChapter(1)}
            className="group relative inline-flex items-center justify-center px-12 py-5 text-xl font-condensed tracking-widest font-bold text-pool-bg bg-pool-text rounded-full overflow-hidden transition-all hover:scale-[1.02] hover:bg-white active:scale-95 shadow-xl"
          >
            <span className="mr-4">COMEÇAR O TREINO</span>
            <PlayCircle className="w-6 h-6 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    );
  }

  const chapter: Chapter = chapters[currentChapter - 1];
  const progressPercent = (currentChapter / chapters.length) * 100;

  return (
    <div className="min-h-screen bg-pool-bg flex flex-col md:flex-row">
      {/* Mobile Navbar Header */}
      <div className="md:hidden flex items-center justify-between bg-pool-card px-4 py-4 border-b border-pool-border sticky top-0 z-50">
        <div className="font-title text-2xl tracking-wide flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-pool-text flex items-center justify-center">
            <span className="text-pool-bg font-title text-xs font-bold leading-none mt-0.5">8</span>
          </div>
          DONO DA MESA
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-pool-text p-1">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <nav className={`
        fixed inset-y-0 left-0 z-40 w-72 bg-pool-card border-r border-pool-border transform transition-transform duration-300 ease-in-out flex flex-col
        ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0
      `}>
        <div className="hidden md:flex items-center p-6 border-b border-pool-border">
          <div className="w-8 h-8 rounded-full bg-pool-text flex items-center justify-center mr-3 hover:scale-110 transition-transform cursor-pointer" onClick={() => setCurrentChapter(0)}>
            <span className="text-pool-bg font-title text-base font-bold leading-none mt-0.5">8</span>
          </div>
          <h2 className="font-title text-3xl tracking-widest text-pool-text cursor-pointer hover:text-pool-light transition-colors" onClick={() => setCurrentChapter(0)}>
            DONO DA MESA
          </h2>
        </div>
        <div className="flex-1 overflow-y-auto py-4 scrollbar-thin scrollbar-thumb-pool-border">
          <ul className="space-y-1 px-3">
            {chapters.map((c) => (
              <li key={c.id}>
                <button
                  onClick={() => {
                    setCurrentChapter(c.id);
                    setMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl font-condensed text-lg transition-all duration-200 group flex items-center gap-3 ${
                    currentChapter === c.id 
                      ? 'bg-pool-green/20 text-pool-neon border border-pool-green/50 shadow-inner' 
                      : 'text-pool-muted hover:text-pool-text hover:bg-pool-border/30'
                  }`}
                >
                  <span className={`text-sm font-body font-bold w-6 text-center opacity-70 ${currentChapter === c.id ? 'text-pool-neon' : ''}`}>
                    {c.id.toString().padStart(2, '0')}
                  </span>
                  <span className="truncate flex-1 tracking-wide">{c.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative w-full max-w-[100vw]">
        {/* Progress Bar */}
        <div className="h-1.5 w-full bg-pool-card shadow-sm z-30 sticky top-0 md:top-0">
          <div 
            className="h-full bg-pool-neon transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="p-6 md:p-12 lg:p-20 max-w-4xl mx-auto w-full pb-32">
          <header className="mb-12">
            <div className="inline-block px-3 py-1 bg-pool-border/50 text-pool-muted font-condensed tracking-widest text-sm rounded-md mb-6 uppercase border border-pool-border">
              Capítulo {chapter.id.toString().padStart(2, '0')} de {chapters.length}
            </div>
            <h1 className="font-title text-5xl md:text-7xl mb-6 leading-none tracking-tight">
              {chapter.title}
            </h1>
            <h2 className="font-body text-xl md:text-2xl text-pool-yellow font-medium leading-snug">
              {chapter.subtitle}
            </h2>
          </header>

          <div className="prose prose-invert prose-lg md:prose-xl font-body text-pool-text/90 max-w-none space-y-6 md:space-y-8 mb-12 leading-relaxed">
            {chapter.text.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="my-16 shadow-2xl drop-shadow-lg">
             <Diagram chapterId={chapter.id} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {chapter.tip && (
              <div className="bg-pool-yellow/10 border-l-4 border-pool-yellow p-6 rounded-r-xl md:col-span-1 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Lightbulb className="text-pool-yellow w-6 h-6" />
                  <h3 className="font-title text-2xl text-pool-yellow tracking-wider">Dica Pro</h3>
                </div>
                <p className="font-body text-pool-text/90">{chapter.tip}</p>
              </div>
            )}
            
            {chapter.error && (
              <div className="bg-pool-red/10 border-l-4 border-pool-red p-6 rounded-r-xl md:col-span-1 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="text-pool-red w-6 h-6" />
                  <h3 className="font-title text-2xl text-pool-red tracking-wider">Erro Mortal</h3>
                </div>
                <p className="font-body text-pool-text/90">{chapter.error}</p>
              </div>
            )}
            
            {chapter.checklist && chapter.checklist.length > 0 && (
              <div className="bg-pool-card border border-pool-border p-8 rounded-2xl md:col-span-2 shadow-lg mt-6">
                 <h3 className="font-title text-3xl mb-6 text-pool-text tracking-wide border-b border-pool-border pb-4">Checklist da Tacada</h3>
                 <ul className="space-y-4">
                   {chapter.checklist.map((item, idx) => (
                     <li key={idx} className="flex items-start gap-4">
                       <div className="mt-1 bg-pool-light/20 p-1 rounded border border-pool-light/50">
                          <Check className="text-pool-neon w-5 h-5" strokeWidth={3} />
                       </div>
                       <span className="font-body text-lg text-pool-text/90 leading-snug">{item}</span>
                     </li>
                   ))}
                 </ul>
              </div>
            )}
          </div>

          {currentChapter < chapters.length ? (
            <div className="flex justify-end mt-16 pt-8 border-t border-pool-border">
              <button 
                onClick={() => setCurrentChapter(currentChapter + 1)}
                className="group inline-flex items-center justify-center p-1 font-body text-lg font-bold text-pool-text bg-transparent hover:bg-pool-card rounded-full overflow-hidden transition-all border border-pool-border hover:border-pool-light pr-6"
              >
                <div className="w-12 h-12 rounded-full bg-pool-light flex items-center justify-center mr-4 group-hover:scale-105 transition-transform">
                   <ArrowRight className="text-pool-bg w-6 h-6" />
                </div>
                Próximo Capítulo
              </button>
            </div>
          ) : (
             <div className="flex justify-end mt-16 pt-8 border-t border-pool-border">
              <div className="inline-flex items-center px-8 py-4 bg-pool-green text-pool-bg font-title text-2xl tracking-widest rounded-xl shadow-[0_0_30px_rgba(45,122,58,0.4)]">
                 VOCÊ É O DONO DA MESA!
              </div>
             </div>
          )}
        </div>
      </main>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-pool-bg/80 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </div>
  );
}

