import React from 'react';
import { 
  Shield, Radio, Lock, Target, Fingerprint, ArrowDownCircle, 
  Activity, Map as MapIcon, ShieldAlert, Zap, Heart, Globe,
  Share2, Smartphone, Download, HelpCircle, Search, Cpu
} from 'lucide-react';
import { GENESIS_POINTS } from './manifestoData';

const SOVEREIGN_EIGHT = ["JV", "JM", "PM", "LA", "PM", "LH", "YM", "VM"];
const RADAR_USERS = [
  { id: 1, name: "Alpha_Admin", img: "https://i.pravatar.cc/150?u=1", score: 98, intent: "🍍", x: 30, y: 35 },
  { id: 2, name: "Had_Entity", img: "https://i.pravatar.cc/150?u=2", score: 12, intent: "🐍", x: 75, y: 20 },
  { id: 3, name: "Beta_Guardian", img: "https://i.pravatar.cc/150?u=3", score: 94, intent: "🍌", x: 55, y: 70 },
  { id: 4, name: "Gamma_User", img: "https://i.pravatar.cc/150?u=4", score: 88, intent: "🍑", x: 82, y: 55 },
];

export default function App() {
  return (
    <div className="bg-[#0A0A0C] text-[#F8F9FA] min-h-screen font-['Inter'] selection:bg-[#F97316] overflow-x-hidden text-left">
      
      <nav className="fixed top-0 w-full z-[100] bg-[#0A0A0C]/90 border-b border-white/5 px-10 py-6 flex justify-between items-center backdrop-blur-3xl">
        <div className="flex items-center gap-6">
          <div className="relative w-14 h-14 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#22D3EE]/30 animate-spin-slow"></div>
            <div className="absolute inset-2 rounded-full border-4 border-[#8B5CF6]"></div>
            <span className="text-2xl font-[1000] italic text-white z-10">N</span>
          </div>
          <h1 className="text-3xl font-[1000] uppercase italic tracking-tighter bg-gradient-to-r from-[#22D3EE] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent leading-none">NearAura</h1>
        </div>
        <button className="bg-[#F97316] text-black px-8 py-3 font-[1000] text-[11px] uppercase hover:bg-white transition-all italic shadow-xl">Trolley Exit 🍍</button>
      </nav>

      <main>
        <section className="min-h-screen flex flex-col justify-center px-10 pt-20 border-b border-white/5 relative">
          <h1 className="text-[13vw] font-[1000] leading-[0.75] uppercase italic tracking-tighter mb-16 text-white">
            THE END OF <br/> <span className="text-transparent stroke-white">LONELY</span> <br/> SWIPING.
          </h1>
          <div className="flex justify-between items-end pb-12 border-t border-white/10 pt-12">
            <p className="text-4xl md:text-6xl font-[1000] leading-[0.85] uppercase italic text-slate-500 max-w-5xl">
              Next Generation <br/> <span className="text-white">Dating Genesis</span>
            </p>
            <ArrowDownCircle size={80} className="text-[#22D3EE] animate-bounce opacity-30" />
          </div>
        </section><section className="grid lg:grid-cols-2 border-b border-white/5 bg-[#08080A]">
          <div className="p-20 border-r border-white/5 relative">
            <h3 className="text-5xl font-[1000] uppercase italic mb-20 text-[#22D3EE] tracking-tighter">Radar A: <br/> Intent Sync</h3>
            <div className="relative aspect-square max-w-[500px] border border-white/10 rounded-full flex items-center justify-center mb-16 mx-auto">
              <div className="absolute inset-0 border-r-4 border-[#22D3EE]/40 animate-spin" />
              <div className="absolute w-3/4 h-3/4 border border-white/5 rounded-full" />
              <div className="absolute w-1/2 h-1/2 border border-white/5 rounded-full" />
              {RADAR_USERS.map((u) => (
                <div key={u.id} className="absolute transition-all duration-1000 group/user" style={{ left: `${u.x}%`, top: `${u.y}%` }}>
                  <div className={`w-24 h-24 rounded-full border-4 p-1 bg-black shadow-2xl ${u.score > 80 ? 'border-[#22D3EE]' : 'border-red-600'}`}>
                    <div className="w-full h-full rounded-full overflow-hidden relative bg-slate-900 flex items-center justify-center text-4xl">
                      <span className="grayscale group-hover/user:grayscale-0 transition-all">{u.intent}</span>
                    </div>
                  </div>
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black font-black text-[10px] px-3 py-1 shadow-xl z-30 italic whitespace-nowrap">{u.score}% SOUL</div>
                </div>
              ))}
            </div>
            <div className="space-y-6 max-w-lg border-t border-white/10 pt-10">
               <div className="flex items-center gap-3">
                  <Activity size={20} className="text-[#22D3EE]" />
                  <p className="text-[#22D3EE] font-black text-sm uppercase tracking-[0.3em]">Active Scan Protocol</p>
               </div>
               <p className="text-slate-400 font-bold italic text-xl leading-tight">
                 Detecting proximity within 100M radius. Biometric validation enforces the 48-hour intent lock. Serpent frequencies are automatically quarantined by the system core.
               </p>
            </div>
          </div>

          <div className="p-20 bg-[#0A0A0C] relative overflow-hidden">
            <h3 className="text-5xl font-[1000] uppercase italic mb-20 text-[#F97316] tracking-tighter">Radar B: <br/> Zonal Matrix</h3>
            <div className="relative aspect-square max-w-[500px] border border-white/10 rounded-full overflow-hidden bg-slate-900/20 mb-16 mx-auto shadow-[inset_0_0_100px_rgba(0,0,0,1)]">
               <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <span className="text-[15vw] font-[1000] italic text-white tracking-tighter">LONDON</span>
               </div>
               <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-[#F97316]/30 rounded-full blur-[120px] animate-pulse"></div>
               <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-[#8B5CF6]/20 rounded-full blur-[100px] animate-pulse delay-700"></div>
               <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-[#EC4899]/20 rounded-full blur-[80px] animate-pulse delay-1000"></div>
            </div>
            <div className="space-y-6 max-w-lg border-t border-white/10 pt-10">
               <div className="flex items-center gap-3">
                  <MapIcon size={20} className="text-[#F97316]" />
                  <p className="text-[#F97316] font-black text-sm uppercase tracking-[0.3em]">Territory Alpha Level</p>
               </div>
               <p className="text-slate-400 font-bold italic text-xl leading-tight text-justify">
                 Mapping the strategic density of high-soul-score users across London sectors. Our heatmap represents real human movement, not digital traffic. The Orchard only activates where physical truth exists.
               </p>
            </div>
          </div>
        </section><section className="py-60 px-10 bg-white text-black">
          <div className="max-w-[1500px] mx-auto">
            <h2 className="text-[12vw] font-[1000] uppercase italic tracking-tighter mb-20 leading-none">The Matrix.</h2>
            <div className="grid lg:grid-cols-12 gap-20 border-t-[16px] border-black pt-20 text-left">
              <div className="lg:col-span-4">
                <div className="bg-black text-white p-12 rounded-[40px] shadow-2xl">
                  <Lock size={80} className="text-[#22D3EE] mb-10" />
                  <h4 className="text-5xl font-[1000] uppercase italic mb-6 leading-none text-[#22D3EE]">FOUNDER <br/> STATUS 40X</h4>
                  <p className="text-slate-400 font-bold italic text-xl leading-relaxed">
                    The economic and moral baseline of NearAura. Participation weight is secured for the builders of the wall. This multiplier reflects the legacy debt owed to the architects of Genesis.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-8 flex flex-col justify-center">
                <h3 className="text-[#22D3EE] font-black text-xs uppercase tracking-[0.5em] mb-10 italic">The Sovereign Eight Authority</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                  {SOVEREIGN_EIGHT.map(s => (
                    <div key={s} className="border-[6px] border-black p-8 text-center text-5xl font-[1000] italic hover:bg-black hover:text-white transition-all cursor-crosshair">{s}</div>
                  ))}
                </div>
                <p className="text-4xl font-[1000] uppercase italic leading-tight max-w-3xl border-l-[12px] border-[#F97316] pl-10">
                  "Only those who carry the promise to Jarmila hold the keys to the Orchard. Truth is the only currency accepted in the Matrix."
                </p>
              </div>
            </div>
          </div>
        </section><section className="px-10 py-60 bg-[#0A0A0C] text-white relative overflow-hidden border-t border-white/5">
          <div className="max-w-[1500px] mx-auto z-10 relative">
            <h3 className="text-[#EC4899] font-black uppercase tracking-[0.8em] mb-16 text-sm italic">The O2 Arena Encounter</h3>
            <h2 className="text-[9vw] font-[1000] uppercase italic leading-[0.8] mb-12 text-slate-700">"Are you another <br/> swiping app?"</h2>
            <h2 className="text-[11vw] font-[1000] uppercase italic leading-[0.8] mb-40">NO. WE ARE <span className="bg-gradient-to-r from-[#22D3EE] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent italic underline decoration-white/20">GENESIS.</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-32">
              {GENESIS_POINTS.map((p) => (
                <div key={p.id} className="border-l border-white/10 pl-10 group hover:border-[#22D3EE] transition-all">
                  <span className="block text-5xl font-[1000] italic text-slate-800 group-hover:text-[#22D3EE] transition-colors mb-6">{p.id}</span>
                  <h4 className="text-2xl font-[1000] uppercase italic mb-6 tracking-tighter leading-none">{p.t}</h4>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-loose text-justify">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black py-40 px-10 text-center italic border-t border-white/5">
        <div className="text-white/10 font-black text-6xl tracking-[1.5em] mb-12 uppercase select-none overflow-hidden h-20">{SOVEREIGN_EIGHT.join(' ')}</div>
        <p className="text-xl text-slate-700 uppercase tracking-[0.5em] font-black italic">Dedicated to Jarmila | Sovereign Logic | © 2026</p>
        <div className="mt-20 flex justify-center gap-12 text-slate-800 font-black text-[10px] uppercase tracking-widest not-italic">
           <span>NO WARNINGS</span>
           <span className="text-[#F97316]">ZERO DECEPTION</span>
           <span>HARDWARE EXILE ACTIVE</span>
         </div>
      </footer>

      <style>{`
        .stroke-white { -webkit-text-stroke: 2px white; color: transparent; }
        .animate-spin-slow { animation: spin 15s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        * { font-family: 'Inter', sans-serif !important; }
      `}</style>
    </div>
  );
}