import React from 'react';
import { Shield, Radio, MapPin, Zap, ChevronRight } from 'lucide-react';
import { manifestoContent } from '../manifestoData';

const SovereignHome = () => {
  return (
    <div className="min-h-screen bg-[#020405] text-white">
      {/* RADAR VISUALIZATION SECTION */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              <Radio size={14} className="animate-pulse" /> Radar Technology Active
            </div>
            <h2 className="text-7xl md:text-8xl font-black italic uppercase leading-none mb-8 tracking-tighter">
              100M <br/> <span className="text-orange-500">PROXIMITY</span> <br/> TRUTH.
            </h2>
            <p className="text-slate-400 text-xl max-w-lg leading-relaxed mb-10">
              {manifestoContent.orchard.text}
            </p>
            <div className="flex gap-6">
               <button className="bg-white text-black px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-cyan-400 transition-all flex items-center gap-3">
                 Start Radar <ChevronRight size={18} />
               </button>
            </div>
          </div>

          {/* THE RADAR SIMULATOR */}
          <div className="relative flex justify-center items-center">
            <div className="absolute w-[500px] h-[500px] border border-white/5 rounded-full animate-[ping_5s_linear_infinite]" />
            <div className="absolute w-[400px] h-[400px] border border-white/10 rounded-full animate-[ping_4s_linear_infinite]" />
            <div className="absolute w-[300px] h-[300px] border border-cyan-500/20 rounded-full" />
            
            <div className="relative w-72 h-72 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 backdrop-blur-3xl rounded-full border border-white/10 flex justify-center items-center overflow-hidden shadow-[0_0_100px_rgba(34,211,238,0.1)]">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.2)_0%,transparent_70%)]" />
               <MapPin size={64} className="text-cyan-400 relative z-10 animate-bounce" />
               {/* Scan Line */}
               <div className="absolute inset-0 border-r-2 border-cyan-500/40 origin-center animate-[spin_3s_linear_infinite]" />
            </div>

            {/* Floatings Tags */}
            <div className="absolute top-10 right-10 p-4 bg-black/80 border border-white/10 rounded-2xl backdrop-blur-xl">
               <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Founders Proof</div>
               <div className="text-sm font-black text-orange-500 italic">JV JM PM LA...</div>
            </div>
          </div>

        </div>
      </section>

      {/* MISSION STATEMENT FROM DNA */}
      <section className="py-32 border-t border-white/5 bg-gradient-to-b from-black to-[#050505]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Shield className="mx-auto text-purple-500 mb-8" size={60} />
          <h3 className="text-4xl font-black uppercase italic mb-8 tracking-tight">
            {manifestoContent.director.title}
          </h3>
          <blockquote className="text-2xl md:text-3xl text-slate-300 font-medium italic leading-relaxed">
            "{manifestoContent.director.text}"
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default SovereignHome;