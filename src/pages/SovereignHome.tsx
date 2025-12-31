import React from 'react';
import { Search, Users, LayoutGrid, Shield, Zap } from 'lucide-react';
import { SovereignFooter } from '../components/ui/SovereignSoul';

export default function SovereignHome() {
  return (
    <div className="pt-20 bg-black">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#22D3EE]/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="w-24 h-24 rounded-full border-4 border-[#22D3EE] flex items-center justify-center font-black italic text-[#22D3EE] text-4xl mb-12 cyan-glow">N</div>
        <h1 className="text-[12vw] font-black italic tracking-tighter leading-none mb-4 z-10 text-white text-center">NEARAURA<span className="text-[#22D3EE] animate-pulse">.</span></h1>
        <h2 className="text-[#22D3EE] text-2xl md:text-5xl font-black italic uppercase tracking-[0.4em] z-10 mb-20 text-center">THE END OF THE LONELY SWIPE</h2>
        
        {/* 5 BUTTONS */}
        <div className="flex flex-wrap justify-center gap-6 z-10 max-w-5xl">
          {['Codex', 'Bridge', 'Matrix', 'Exile', 'Soul'].map((btn) => (
            <button key={btn} className="group relative px-14 py-6 overflow-hidden bg-white/5 border border-white/10 rounded-full font-black italic uppercase text-xs tracking-[0.3em] transition-all duration-700 hover:scale-105">
              <div className="absolute inset-0 bg-[#22D3EE] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 group-hover:text-black font-black uppercase">{btn}</span>
            </button>
          ))}
        </div>
      </section>

      {/* 2 RADARS SECTION */}
      <section className="py-32 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div className="luxury-card p-20 text-center relative overflow-hidden group">
          <Search size={80} className="text-[#22D3EE] mb-12 mx-auto animate-pulse" />
          <h3 className="text-4xl font-black italic uppercase mb-6 text-white">Integrity Radar</h3>
          <p className="text-slate-500 font-bold italic uppercase text-[10px] tracking-[0.5em]">Scanning Hardware Identity Nodes...</p>
        </div>
        <div className="luxury-card p-20 text-center relative overflow-hidden group">
          <div className="grid grid-cols-10 gap-4 mb-12 opacity-20">
            {[...Array(50)].map((_, i) => <div key={i} className="w-4 h-4 rounded-full bg-[#22D3EE]" />)}
          </div>
          <h3 className="text-4xl font-black italic uppercase mb-6 text-white">Vibe Heatmap</h3>
          <p className="text-slate-500 font-bold italic uppercase text-[10px] tracking-[0.5em]">Real-Time Matrix Geometry</p>
        </div>
      </section>

      {/* MANIFESTO: THE TROLLEY LOGIC */}
      <section className="py-40 px-6 border-y border-white/5 bg-black">
        <div className="max-w-4xl mx-auto space-y-24">
          <h2 className="text-7xl font-black italic uppercase text-white leading-none">The Trolley Logic<span className="text-[#22D3EE]">.</span></h2>
          <div className="text-slate-400 text-xl font-medium leading-loose italic space-y-12">
            <p className="text-white text-3xl font-black border-l-8 border-[#22D3EE] pl-10 py-6 bg-[#22D3EE]/5">
              "THE PINEAPPLE IN THE TROLLEY WAS A CRY FOR HELP. THE ORCHARD IS THE SOVEREIGN ANSWER."
            </p>
            <p>For 1,400 hours, I have built a stand against digital ghosting. NearAura hardcodes dignity into the motherboard. If you ghost the Orchard, your hardware is Exiled. Permanently. No bots. No fakes. Only verified souls.</p>
          </div>
        </div>
      </section>

      <SovereignFooter />
    </div>
  );
}