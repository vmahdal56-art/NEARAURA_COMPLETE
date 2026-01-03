import React from 'react';
import { 
  Shield, Radio, Lock, Target, Fingerprint, ArrowDownCircle, Activity, Map as MapIcon, 
  ShieldAlert, Zap, Share2, Smartphone, Download, HelpCircle, Search, Cpu, 
  Twitter, Instagram, MessageSquare, Globe
} from 'lucide-react';
import { GENESIS_POINTS } from './manifestoData';

const SOVEREIGN_EIGHT = ["JV", "JM", "PM", "LA", "PM", "LH", "YM", "VM"];
const RADAR_USERS = [
  { id: 1, name: "Alpha", img: "https://i.pravatar.cc/150?u=1", score: 98, intent: "🍍", x: 30, y: 35 },
  { id: 2, name: "Had", img: "https://i.pravatar.cc/150?u=2", score: 12, intent: "🐍", x: 75, y: 20 },
  { id: 3, name: "Beta", img: "https://i.pravatar.cc/150?u=3", score: 94, intent: "🍌", x: 55, y: 70 },
  { id: 4, name: "Gamma", img: "https://i.pravatar.cc/150?u=4", score: 88, intent: "🍑", x: 82, y: 55 },
];

export default function App() {
  return (
    <div className="bg-[#0A0A0C] text-[#F8F9FA] min-h-screen font-['Inter'] selection:bg-[#F97316] overflow-x-hidden text-left uppercase">
      
      {/* 🔱 HEADER SYNC: 5 LINKS + SEAL */}
      <nav className="fixed top-0 w-full z-[100] bg-[#0A0A0C]/95 border-b border-white/5 px-10 py-6 flex justify-between items-center backdrop-blur-3xl">
        <div className="flex items-center gap-6">
          <div className="relative w-16 h-16 border-2 border-[#22D3EE] rounded-full flex items-center justify-center font-black italic text-[#22D3EE] text-2xl shadow-[0_0_15px_rgba(34,211,238,0.3)]">N</div>
          <div className="leading-none text-left">
            <h1 className="text-3xl font-[1000] italic tracking-tighter bg-gradient-to-r from-[#22D3EE] via-[#8B5CF6] to-[#F97316] bg-clip-text text-transparent leading-none uppercase">NearAura</h1>
            <p className="text-[10px] tracking-[0.5em] text-[#22D3EE] font-black mt-1">Sovereign Protocol 15:06</p>
          </div>
        </div>

        <div className="hidden xl:flex gap-10 text-[11px] font-[1000] tracking-[0.3em] text-slate-400 italic">
          {["How it Works", "Our Flavors", "The Radar", "Matrix", "Exile"].map(l => (
            <a key={l} href="#" className="hover:text-white transition-all cursor-pointer border-b border-transparent hover:border-[#F97316] pb-1">{l}</a>
          ))}
        </div>

        <button className="bg-[#F97316] text-black px-10 py-4 font-[1000] text-xs shadow-xl italic hover:bg-white transition-all">Trolley Exit 🍍</button>
      </nav>

      <main>
        {/* 🔱 HERO */}
        <section className="min-h-screen flex flex-col justify-center px-10 pt-40 border-b border-white/5">
          <h1 className="text-[15vw] font-[1000] leading-[0.75] tracking-tighter text-white italic">THE END OF <br/> <span className="text-transparent stroke-white">LONELY</span> <br/> SWIPING.</h1>
          <div className="flex justify-between items-end pb-20 border-t border-white/10 pt-16">
            <div className="text-6xl md:text-8xl font-[1000] leading-[0.85] text-slate-600 italic text-left">Next Generation <br/> <span className="text-white underline decoration-[#8B5CF6] decoration-8 underline-offset-[15px]">Dating Genesis</span></div>
            <ArrowDownCircle size={120} className="text-[#22D3EE] animate-bounce opacity-50" />
          </div>
        </section>

        {/* 🔱 5 BAREVNYCH TLACITEK */}
        <section className="grid grid-cols-2 md:grid-cols-5 border-b border-white/5">
          {[
            { t: "Waitlist", c: "bg-[#F97316]", i: <Zap size={32} /> },
            { t: "Referrals", c: "bg-[#22D3EE]", i: <Share2 size={32} /> },
            { t: "iOS App", c: "bg-[#8B5CF6]", i: <Smartphone size={32} /> },
            { t: "Android", c: "bg-[#EC4899]", i: <Download size={32} /> },
            { t: "FAQ", c: "bg-slate-800", i: <HelpCircle size={32} /> }
          ].map((btn) => (
            <button key={btn.t} className={`${btn.c} py-24 flex flex-col items-center justify-center gap-4 hover:invert transition-all group border-r border-black/10`}>
              <div className="text-white group-hover:scale-125 transition-transform">{btn.i}</div>
              <span className="text-2xl font-[1000] italic tracking-widest text-white uppercase">{btn.t}</span>
            </button>
          ))}
        </section>{/* 🔱 RADARY */}
        <section className="grid lg:grid-cols-2 border-b border-white/5 bg-[#08080A]">
          <div className="p-20 border-r border-white/5 relative">
            <h3 className="text-5xl font-[1000] italic mb-20 text-[#22D3EE] text-left uppercase">Radar A: Intent Sync</h3>
            <div className="relative aspect-square max-w-[600px] border border-white/10 rounded-full flex items-center justify-center mx-auto mb-12 shadow-[0_0_100px_rgba(34,211,238,0.05)]">
              <div className="absolute inset-0 border-r-4 border-[#22D3EE]/40 animate-spin rounded-full" />
              {RADAR_USERS.map((u) => (
                <div key={u.id} className="absolute group/user z-20" style={{ left: `${u.x}%`, top: `${u.y}%` }}>
                  <div className={`w-28 h-28 rounded-full border-4 p-1 bg-black shadow-2xl ${u.score > 80 ? 'border-[#22D3EE]' : 'border-red-600'}`}>
                    <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-5xl">
                      <span className="drop-shadow-lg">{u.intent}</span>
                    </div>
                  </div>
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black font-[1000] text-xs px-3 py-1 shadow-xl italic whitespace-nowrap">{u.score}% SOUL</div>
                </div>
              ))}
            </div>
            <div className="mt-12 border-t border-white/10 pt-10 text-left">
               <p className="text-[#22D3EE] font-black text-sm tracking-[0.4em] mb-4 uppercase">Integrity Scan Protocol</p>
               <p className="text-slate-400 font-bold italic text-xl leading-tight">Proximity identification within 100M. Serpent frequencies isolated by biometric sync.</p>
            </div>
          </div>

          <div className="p-20 bg-[#0A0A0C] relative overflow-hidden text-left">
            <h3 className="text-5xl font-[1000] italic mb-20 text-[#F97316] text-left uppercase">Radar B: Zonal Matrix</h3>
            <div className="relative aspect-square max-w-[600px] border border-white/10 rounded-full overflow-hidden bg-slate-900/10 mx-auto shadow-[inset_0_0_100px_rgba(0,0,0,1)] flex items-center justify-center mb-12">
               <span className="text-[18vw] font-[1000] italic text-white/5 tracking-tighter select-none absolute uppercase">LONDON</span>
               <div className="w-96 h-96 bg-[#F97316]/20 rounded-full blur-[120px] animate-pulse absolute top-1/4" />
               <div className="w-80 h-80 bg-[#8B5CF6]/20 rounded-full blur-[100px] animate-pulse absolute bottom-1/4 delay-700" />
            </div>
            <div className="mt-12 border-t border-white/10 pt-10">
               <p className="text-[#F97316] font-black text-sm tracking-[0.4em] mb-4 uppercase">Territory Alpha Mapping</p>
               <p className="text-slate-400 font-bold italic text-xl leading-tight">Strategizing density based on physical truth. Heatmap active across London sectors.</p>
            </div>
          </div>
        </section>

        {/* 🔱 MATRIX */}
        <section className="py-60 px-10 bg-white text-black text-left">
          <div className="max-w-[1500px] mx-auto">
            <h2 className="text-[12vw] font-[1000] italic tracking-tighter mb-20 leading-none uppercase">The Matrix.</h2>
            <div className="grid lg:grid-cols-12 gap-20 border-t-[16px] border-black pt-20">
              <div className="lg:col-span-5">
                <div className="bg-black text-white p-16 rounded-[40px] shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:rotate-12 transition-transform"><Cpu size={200} /></div>
                  <Lock size={80} className="text-[#22D3EE] mb-10" />
                  <h4 className="text-6xl font-[1000] italic mb-6 text-[#22D3EE] leading-none uppercase">FOUNDER <br/> STATUS 40X</h4>
                  <p className="text-slate-400 font-bold italic text-2xl leading-relaxed">Economic and moral baseline secured for the builders of the wall at 40x weight.</p>
                </div>
              </div>
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 text-5xl font-[1000] italic uppercase tracking-tighter">
                  {SOVEREIGN_EIGHT.map(s => <div key={s} className="border-[6px] border-black p-8 text-center hover:bg-black hover:text-white transition-all cursor-crosshair">{s}</div>)}
                </div>
                <p className="text-4xl font-[1000] uppercase italic leading-tight max-w-3xl border-l-[15px] border-[#F97316] pl-10">"Only those who carry the promise to Jarmila hold the keys to the Matrix."</p>
              </div>
            </div>
          </div>
        </section>

        {/* 🔱 GENESIS */}
        <section className="px-10 py-60 bg-[#0A0A0C] text-white text-left border-t border-white/5">
          <div className="max-w-[1500px] mx-auto">
            <h3 className="text-[#EC4899] font-black uppercase tracking-[0.8em] mb-16 text-sm italic">O2 Arena Incident</h3>
            <h2 className="text-[9vw] font-[1000] italic leading-[0.8] text-slate-700 uppercase">"Are you another <br/> swiping app?"</h2>
            <h2 className="text-[11vw] font-[1000] italic leading-[0.8] mb-40 text-[#22D3EE] uppercase">NO. WE ARE GENESIS.</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-32">
              {GENESIS_POINTS.map((p) => (
                <div key={p.id} className="border-l border-white/10 pl-10 group hover:border-[#22D3EE] transition-all">
                  <span className="block text-5xl font-[1000] italic text-slate-800 group-hover:text-[#22D3EE] mb-6">{p.id}</span>
                  <h4 className="text-2xl font-[1000] mb-6 tracking-tighter uppercase leading-none">{p.t}</h4>
                  <p className="text-[12px] font-bold text-slate-500 uppercase tracking-widest leading-loose text-justify">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 🔱 FOOTER: 19 LINKS + SOCIALS */}
      <footer className="bg-black py-40 px-10 border-t border-white/5 text-left">
        <div className="max-w-[1500px] mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-20 mb-40">
          <div className="lg:col-span-2">
             <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 border border-[#22D3EE] rounded-full flex items-center justify-center font-black italic text-[#22D3EE]">N</div>
                <span className="text-3xl font-[1000] italic tracking-tighter">NearAura</span>
             </div>
             <p className="text-slate-500 font-bold italic text-lg mb-10 max-w-sm leading-tight">The end of lonely swiping. Built on the promise to Jarmila. Secured by the Sovereign Eight.</p>
             <div className="flex gap-6">
                <a href="#" className="text-white hover:text-[#22D3EE] transition-all flex items-center gap-2 font-black italic text-xs tracking-widest"><Instagram size={20}/> @NEARAURA</a>
                <a href="#" className="text-white hover:text-[#F97316] transition-all flex items-center gap-2 font-black italic text-xs tracking-widest"><Twitter size={20}/> @NEARAURAAPP</a>
             </div>
          </div>
          <div>
            <h5 className="text-[#22D3EE] font-black text-xs uppercase tracking-[0.4em] mb-10">Core Protocol</h5>
            <ul className="space-y-4 text-slate-500 font-black text-[10px] tracking-widest italic uppercase">
              {["The Orchard", "London Launch", "6-Fruit Oath", "Hardware Exile"].map(l => <li key={l} className="hover:text-white cursor-pointer">{l}</li>)}
            </ul>
          </div>
          <div>
            <h5 className="text-[#8B5CF6] font-black text-xs uppercase tracking-[0.4em] mb-10">Security</h5>
            <ul className="space-y-4 text-slate-500 font-black text-[10px] tracking-widest italic uppercase">
              {["Biometric Sync", "Soul Score", "Daughter Protocol", "Serpent Detection", "Device ID Ban"].map(l => <li key={l} className="hover:text-white cursor-pointer">{l}</li>)}
            </ul>
          </div>
          <div>
            <h5 className="text-[#F97316] font-black text-xs uppercase tracking-[0.4em] mb-10">Economics</h5>
            <ul className="space-y-4 text-slate-500 font-black text-[10px] tracking-widest italic uppercase">
              {["Multiplier 40x", "Heart-Cut", "Jarmila Fund", "Founder Legacy", "Zone Equity"].map(l => <li key={l} className="hover:text-white cursor-pointer">{l}</li>)}
            </ul>
          </div>
        </div>
        <div className="text-center pt-20 border-t border-white/5 opacity-40">
           <div className="text-[#D4AF37] font-black text-6xl tracking-[2em] mb-10 select-none overflow-hidden h-20 uppercase">{SOVEREIGN_EIGHT.join(' ')}</div>
           <p className="text-[10px] uppercase tracking-[1em] font-black italic">Dedicated to Jarmila | Sovereign Logic | © 2026</p>
        </div>
      </footer>

      <style>{`
        .stroke-white { -webkit-text-stroke: 3px white; color: transparent; }
        .animate-spin-slow { animation: spin 15s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        * { font-family: 'Inter', sans-serif !important; }
      `}</style>
    </div>
  );
}