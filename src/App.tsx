import React, { useState } from 'react';
import { SOVEREIGN_DB, INITIALS } from './ManifestoDatabase';
import { 
  ShieldCheck, Zap, Lock, Map, Users, Apple, Play, Heart, Globe, Search,
  Twitter, Instagram, Facebook, Youtube, Send, MessageCircle, Github, Menu, X, CheckCircle2, ShieldAlert
} from 'lucide-react';

const Logo = () => (
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" className="cyan-glow">
    <circle cx="50" cy="50" r="42" stroke="url(#g)" strokeWidth="2" strokeDasharray="6 6" opacity="0.4" />
    <circle cx="50" cy="50" r="35" stroke="url(#g)" strokeWidth="4" />
    <path d="M38 62V38L62 62V38" stroke="url(#g)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22D3EE"/><stop offset="50%" stopColor="#A855F7"/><stop offset="100%" stopColor="#F97316"/>
      </linearGradient>
    </defs>
  </svg>
);

export default function App() {
  const [view, setView] = useState('home');
  const [isEmergencyActive, setIsEmergencyActive] = useState(false);
  const d = SOVEREIGN_DB[view] || SOVEREIGN_DB.home;

  const nav = (v) => { setView(v); window.scrollTo(0,0); };

  const triggerAuraShield = (category) => {
    console.log(`🔱 AURA SHIELD: Global Dispatch Initiated for ${category}`);
    alert(`AURA SHIELD: Emergency ${category} dispatch has been notified of your coordinates.`);
    setIsEmergencyActive(false);
  };

  return (
    <div className="bg-[#020202] text-white min-h-screen font-['Inter'] selection:bg-[#22D3EE] selection:text-black overflow-x-hidden">
      
      {/* 🔱 SOVEREIGN HEADER */}
      <nav className="fixed top-0 w-full z-[100] bg-black/90 backdrop-blur-3xl border-b border-white/5 px-12 py-8 flex justify-between items-center">
        <div className="flex items-center gap-6 cursor-pointer" onClick={() => nav('home')}>
          <Logo />
          <div className="text-4xl font-[1000] italic tracking-tighter uppercase leading-none bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-500 bg-clip-text text-transparent">NearAura</div>
        </div>
        <div className="hidden lg:flex gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <button onClick={() => nav('orchard')} className="hover:text-cyan-400 transition">The Orchard</button>
          <button onClick={() => nav('pricing')} className="text-yellow-500 underline underline-offset-8">Price Matrix</button>
          <button onClick={() => nav('home')} className="hover:text-purple-400 transition">Director Say</button>
          <button 
            onClick={() => setIsEmergencyActive(true)}
            className="text-red-500 hover:text-white flex items-center gap-2 border border-red-500/30 px-4 py-1 rounded-full animate-pulse transition-all"
          >
            <ShieldAlert size={12} /> AURA SHIELD
          </button>
        </div>
        <button className="flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-full font-black text-xs tracking-widest uppercase shadow-[0_0_30px_rgba(34,211,238,0.3)]">
          Trolley 🍍
        </button>
      </nav>

      {/* 🔱 AURA SHIELD OVERLAY */}
      {isEmergencyActive && (
        <div className="fixed inset-0 z-[200] bg-black/98 flex items-center justify-center p-10 animate-in fade-in zoom-in duration-300">
            <div className="max-w-2xl w-full text-center space-y-12">
                <h2 className="text-6xl font-[1000] text-red-600 uppercase italic tracking-tighter">Aura Shield: Global Dispatch</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <button onClick={() => triggerAuraShield('POLICE')} className="bg-blue-900/40 py-12 rounded-3xl font-black uppercase border-2 border-blue-500/30 hover:border-blue-500 transition-all">🚨 Police</button>
                    <button onClick={() => triggerAuraShield('MEDICAL')} className="bg-red-900/40 py-12 rounded-3xl font-black uppercase border-2 border-red-500/30 hover:border-red-500 transition-all">🚑 Medical</button>
                    <button onClick={() => triggerAuraShield('FIRE')} className="bg-orange-900/40 py-12 rounded-3xl font-black uppercase border-2 border-orange-500/30 hover:border-orange-500 transition-all">🚒 Fire</button>
                </div>
                <button onClick={() => setIsEmergencyActive(false)} className="text-slate-600 uppercase font-black tracking-widest">Cancel</button>
            </div>
        </div>
      )}

      <main className="pt-52 px-10 max-w-7xl mx-auto pb-40">
        {view === 'home' && (
          <div className="animate-in fade-in duration-1000">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center mb-60">
              <div className="space-y-16">
                <h1 className="text-[120px] font-[1000] italic leading-[0.75] uppercase tracking-tighter bg-gradient-to-b from-white via-slate-400 to-slate-800 bg-clip-text text-transparent">{d.h1}</h1>
                <div className="flex flex-wrap gap-4">
                  {['Get APK', 'Enter Matrix', 'Waitlist', 'Elite Access', 'The Orchard'].map((b, i) => (
                    <button key={i} className={`px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest border-2 border-white/10 hover:border-cyan-400 transition-all ${i === 0 ? 'bg-white text-black' : ''}`}>{b}</button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                {/* RADAR 1: NEARWORLD */}
                <div className="relative aspect-[9/19] luxury-card overflow-hidden shadow-2xl">
                   <div className="absolute top-5 left-5 z-20 text-cyan-400 font-black text-[8px] uppercase italic">NearWorld Radar {"(<500M)"}</div>
                   <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,#22D3EE22,transparent)] animate-[spin_4s_linear_infinite] cyan-glow" />
                   <div className="absolute top-[20%] left-[30%] w-12 h-12 rounded-full border-2 border-cyan-400 p-0.5 shadow-[0_0_15px_cyan]">
                      <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop" className="rounded-full w-full h-full object-cover"/>
                      <span className="absolute -top-1 -right-1 text-lg">🍍</span>
                   </div>
                   <div className="absolute bottom-[25%] right-[20%] w-12 h-12 rounded-full border-2 border-orange-500 p-0.5 shadow-[0_0_15px_orange]">
                      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" className="rounded-full w-full h-full object-cover"/>
                      <span className="absolute -top-1 -left-1 text-lg">🍒</span>
                   </div>
                </div>
                {/* RADAR 2: HEATMAP */}
                <div className="relative aspect-[9/19] luxury-card overflow-hidden shadow-2xl opacity-40">
                   <img src="https://www.maproom.co.uk/wp-content/uploads/London-Zone-1-Map.png" className="w-full h-full object-cover grayscale opacity-30 scale-150" />
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#22D3EE11_0%,_transparent_70%)] animate-pulse" />
                </div>
              </div>
            </div>

            {/* 7-FRUIT GRID */}
            <div className="grid grid-cols-2 md:grid-cols-7 gap-4 mb-60">
              {['🍍 Dating', '🍊 Friends', '🍇 Groups', '🍈 Melon', '🍌 Intimacy M', '🍑 Intimacy F', '🍒 Meetups'].map((f, i) => (
                <div key={i} className="p-8 luxury-card text-center group cursor-pointer relative">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{f.split(' ')[0]}</div>
                  <div className="text-[9px] font-black uppercase text-slate-500 tracking-widest">{f.split(' ')[1]}</div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"><Lock size={12} className="text-cyan-400/40" /></div>
                </div>
              ))}
            </div>

            <section className="space-y-40">
               <div className="border-l-4 border-cyan-400 pl-12"><h2 className="text-8xl font-[1000] italic uppercase text-cyan-400 mb-10 tracking-tighter">{d.h2}</h2><p className="text-3xl text-slate-400 leading-relaxed font-light italic">{d.text}</p></div>
               <div className="border-l-4 border-purple-500 pl-12"><h2 className="text-8xl font-[1000] italic uppercase text-purple-500 mb-10 tracking-tighter">{d.h3}</h2><p className="text-3xl text-slate-400 leading-relaxed font-light italic">{SOVEREIGN_DB.home.text}</p></div>
            </section>
          </div>
        )}

        {view === 'pricing' && <PricingMatrix />}
        {view === 'orchard' && <ManifestoView title="The Orchard Protocol" content={SOVEREIGN_DB.orchard.text} color="text-orange-500" />}
      </main>

      {/* FOOTER */}
      <footer className="bg-black pt-60 pb-20 px-20 border-t border-white/5">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-20 mb-40 text-left">
          <div className="col-span-2">
            <div className="text-6xl font-[1000] italic bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-500 bg-clip-text text-transparent mb-12 uppercase">NearAura</div>
            <div className="flex flex-wrap gap-8 text-slate-600 mb-10">
               <Facebook size={24}/> <Twitter size={24}/> <Youtube size={24}/> <Instagram size={24}/> <Send size={24}/> <MessageCircle size={24}/> <Github size={24}/>
            </div>
          </div>
          <div className="space-y-6"><h4 className="font-black text-[10px] uppercase text-white underline underline-offset-8">Orchard</h4><ul className="text-slate-600 text-[10px] space-y-4 uppercase font-bold italic">
            <li onClick={()=>nav('orchard')} className="cursor-pointer">Fruit Logic</li><li>London Launch</li><li>Vault</li></ul></div>
          <div className="space-y-6"><h4 className="font-black text-[10px] uppercase text-white underline underline-offset-8">Security</h4><ul className="text-slate-600 text-[10px] space-y-4 uppercase font-bold italic">
            <li>Hardware Exile</li><li>Aura Shield</li><li>IDVS Verified</li></ul></div>
          <div className="space-y-6"><h4 className="font-black text-[10px] uppercase text-white underline underline-offset-8">Empire</h4><ul className="text-slate-600 text-[10px] space-y-4 uppercase font-bold italic">
            <li onClick={()=>nav('pricing')} className="cursor-pointer">Founder Tiers</li><li>The Matrix</li></ul></div>
        </div>
        <div className="text-[#D4AF37] opacity-40 font-[1000] text-[22px] tracking-[1.8em] text-center mb-12 uppercase">{INITIALS}</div>
        <p className="text-center text-[10px] text-slate-800 tracking-[0.5em] uppercase italic">Dedicated to Jarmila | © 2026</p>
      </footer>
    </div>
  );
}

const PricingMatrix = () => (
  <div className="py-20 animate-in slide-in-from-bottom-20 duration-1000">
    <h2 className="text-[10vw] font-[1000] italic leading-none bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-500 bg-clip-text text-transparent mb-40 uppercase">15-Row Matrix</h2>
    <div className="grid grid-cols-4 gap-8 mb-40">
      {['Essential £9', 'Pro £19', 'Elite £29', 'MEGA £39'].map((p, i) => (
        <div key={i} className={`p-16 luxury-card text-center group ${i===3?'border-[#D4AF37]/40 shadow-[0_0_50px_rgba(212,175,55,0.1)]':''}`}>
           <h4 className="text-xs font-black uppercase text-slate-500 mb-10">Tier {i+1}</h4>
           <div className="text-5xl font-black italic mb-16">{p}</div>
           <button className="w-full py-6 bg-white text-black font-black uppercase text-[10px] tracking-[0.3em] rounded-3xl group-hover:bg-orange-500 group-hover:text-white transition-colors">Enter Matrix</button>
        </div>
      ))}
    </div>
    <div className="overflow-x-auto p-12 luxury-card">
      <table className="w-full text-left text-[10px] font-black uppercase tracking-widest text-slate-400">
        <thead><tr className="border-b border-white/10 text-white"><th className="pb-10">Protocol</th><th className="pb-10">Basic</th><th className="pb-10">Elite</th><th className="pb-10">MEGA</th></tr></thead>
        <tbody>
          <tr className="border-b border-white/10 h-16 text-cyan-400"><td>IDVS Verification</td><td>-</td><td>Level 1</td><td>Verified</td></tr>
          <tr className="border-b border-white/10 h-16 text-red-500"><td>Aura Shield Dispatch</td><td>Passive</td><td>Priority</td><td>Instant</td></tr>
          {Array.from({length: 13}).map((_, i) => (
            <tr key={i} className="border-b border-white/5 h-16"><td>Sovereign Protocol-{100+i}</td><td>✔</td><td>40x</td><td className="text-cyan-400">Rainbow</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ManifestoView = ({title, content, color}) => (
  <div className="max-w-4xl mx-auto py-20 space-y-12 animate-in slide-in-from-bottom-10">
    <h1 className={`text-8xl font-[1000] italic uppercase leading-none ${color}`}>{title}</h1>
    <div className="text-slate-400 text-xl leading-loose font-medium whitespace-pre-wrap italic border-l-4 border-white/5 pl-10">{content}</div>
  </div>
);