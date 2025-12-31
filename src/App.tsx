import React, { useState } from 'react';
import { SOVEREIGN_DB, INITIALS } from './ManifestoDatabase';
import { 
  ShieldCheck, Zap, Lock, Map, Users, Apple, Play, Heart, Globe, Search,
  Twitter, Instagram, Facebook, Youtube, Send, MessageCircle, Github, Menu, X, CheckCircle2
} from 'lucide-react';

const Logo = () => (
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
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
  const d = SOVEREIGN_DB[view] || SOVEREIGN_DB.home;

  const nav = (v) => { setView(v); window.scrollTo(0,0); };

  return (
    <div className="bg-[#020405] text-white min-h-screen font-['Inter'] selection:bg-orange-500 overflow-x-hidden">
      {/* 🔱 HEADER WITH 5 LINKS */}
      <nav className="fixed top-0 w-full z-[100] bg-black/90 backdrop-blur-3xl border-b border-white/5 px-12 py-8 flex justify-between items-center">
        <div className="flex items-center gap-6 cursor-pointer" onClick={() => nav('home')}>
          <Logo />
          <div className="text-4xl font-[1000] italic tracking-tighter uppercase leading-none bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-500 bg-clip-text text-transparent">NearAura</div>
        </div>
        <div className="hidden lg:flex gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          <button onClick={() => nav('orchard')} className="hover:text-cyan-400 transition">The Orchard</button>
          <button onClick={() => nav('pricing')} className="text-yellow-500 underline underline-offset-8">Price Matrix</button>
          <button onClick={() => nav('home')} className="hover:text-purple-400 transition">Director Say</button>
          <button onClick={() => nav('home')} className="hover:text-orange-500 transition">Waitlist</button>
          <button onClick={() => nav('home')} className="hover:text-white transition">Referrals</button>
        </div>
        <button className="flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-full font-black text-xs tracking-widest uppercase shadow-[0_0_30px_rgba(34,211,238,0.3)]">
          Trolley 🍍
        </button>
      </nav>

      <main className="pt-52 px-10 max-w-7xl mx-auto pb-40">
        {view === 'home' && (
          <div className="animate-in fade-in duration-1000">
            {/* 🔱 HERO SECTION & DUAL PHONE RADARS */}
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
                {/* PHONE 1: NEARWORLD (PEOPLE + FRUITS) */}
                <div className="relative aspect-[9/19] rounded-[40px] border-4 border-white/10 bg-black overflow-hidden shadow-2xl">
                   <div className="absolute top-5 left-5 z-20 text-cyan-400 font-black text-[8px] uppercase italic">NearWorld Radar {"(<500M)"}</div>
                   <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,#22D3EE22,transparent)] animate-[spin_4s_linear_infinite]" />
                   <div className="absolute top-[20%] left-[30%] w-12 h-12 rounded-full border-2 border-cyan-400 p-0.5 shadow-[0_0_15px_cyan]">
                      <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop" className="rounded-full w-full h-full object-cover"/>
                      <span className="absolute -top-1 -right-1 text-lg">🍍</span>
                   </div>
                   <div className="absolute bottom-[25%] right-[20%] w-12 h-12 rounded-full border-2 border-orange-500 p-0.5 shadow-[0_0_15px_orange]">
                      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" className="rounded-full w-full h-full object-cover"/>
                      <span className="absolute -top-1 -left-1 text-lg">🍒</span>
                   </div>
                </div>
                {/* PHONE 2: HEATMAP (LONDON MAP) */}
                <div className="relative aspect-[9/19] rounded-[40px] border-4 border-white/10 bg-black overflow-hidden shadow-2xl">
                   <img src="https://www.maproom.co.uk/wp-content/uploads/London-Zone-1-Map.png" className="w-full h-full object-cover grayscale opacity-30 scale-150" />
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#22D3EE11_0%,_transparent_70%)] animate-pulse" />
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full animate-ping shadow-[0_0_40px_#F97316]" />
                </div>
              </div>
            </div>

            {/* 🔱 7-FRUIT GRID */}
            <div className="grid grid-cols-2 md:grid-cols-7 gap-4 mb-60">
              {['�� Dating', '🍊 Friends', '🍇 Groups', '🍈 Melon', '🍌 Intimacy M', '🍑 Intimacy F', '🍒 Meetups'].map((f, i) => (
                <div key={i} className="p-8 border border-white/5 bg-white/5 rounded-[32px] text-center hover:border-cyan-400 transition-all group cursor-pointer">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{f.split(' ')[0]}</div>
                  <div className="text-[9px] font-black uppercase text-slate-500">{f.split(' ')[1]}</div>
                </div>
              ))}
            </div>

            {/* 🔱 MANIFESTO BLOCKS */}
            <section className="space-y-40">
               <div className="border-l-4 border-cyan-400 pl-12"><h2 className="text-8xl font-[1000] italic uppercase text-cyan-400 mb-10 tracking-tighter">{d.h2}</h2><p className="text-3xl text-slate-400 leading-relaxed font-light italic">{d.text}</p></div>
               <div className="border-l-4 border-purple-500 pl-12"><h2 className="text-8xl font-[1000] italic uppercase text-purple-500 mb-10 tracking-tighter">{d.h3}</h2><p className="text-3xl text-slate-400 leading-relaxed font-light italic">{SOVEREIGN_DB.home.text}</p></div>
            </section>
          </div>
        )}

        {view === 'pricing' && <PricingMatrix />}
        {view === 'orchard' && <ManifestoView title="The Orchard Protocol" content={SOVEREIGN_DB.orchard.text} color="text-orange-500" />}
      </main>

      {/* 🔱 19-LINK MASTER FOOTER (7 SOCIALS) */}
      <footer className="bg-black pt-60 pb-20 px-20 border-t border-white/5">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-20 mb-40 text-left">
          <div className="col-span-2">
            <div className="text-6xl font-[1000] italic hero-gradient mb-12 uppercase italic">NearAura</div>
            <div className="flex flex-wrap gap-8 text-slate-600 mb-10">
               <Facebook size={24}/> <Twitter size={24}/> <Youtube size={24}/> <Instagram size={24}/> <Send size={24}/> <MessageCircle size={24}/> <Github size={24}/>
            </div>
            <p className="text-slate-600 text-[10px] uppercase font-black italic tracking-widest max-w-sm">"Reclaiming the Orchard. Dedicated to Jarmila. Under the watch of the Eight."</p>
          </div>
          <div className="space-y-6"><h4 className="font-black text-[10px] uppercase text-white underline underline-offset-8">Orchard</h4><ul className="text-slate-600 text-[10px] space-y-4 uppercase font-bold italic">
            <li onClick={()=>nav('orchard')} className="cursor-pointer">Fruit Logic</li><li>London Launch</li><li>Ban Policy</li><li>Vault</li></ul></div>
          <div className="space-y-6"><h4 className="font-black text-[10px] uppercase text-white underline underline-offset-8">Security</h4><ul className="text-slate-600 text-[10px] space-y-4 uppercase font-bold italic">
            <li>Hardware Exile</li><li>E2EE Matrix</li><li>Scam Shield</li><li>Fraud</li></ul></div>
          <div className="space-y-6"><h4 className="font-black text-[10px] uppercase text-white underline underline-offset-8">Empire</h4><ul className="text-slate-600 text-[10px] space-y-4 uppercase font-bold italic">
            <li>Waitlist</li><li>Referrals</li><li onClick={()=>nav('pricing')} className="cursor-pointer">Founder Tiers</li><li>The Matrix</li></ul></div>
        </div>
        <div className="text-[#D4AF37] opacity-40 font-[1000] text-[22px] tracking-[1.8em] text-center mb-12 uppercase">{INITIALS}</div>
        <p className="text-center text-[10px] text-slate-800 tracking-[0.5em] uppercase italic">Dedicated to Jarmila | Sovereign Logic | © 2025</p>
      </footer>
    </div>
  );
}

const PricingMatrix = () => (
  <div className="py-20 animate-in slide-in-from-bottom-20 duration-1000">
    <h2 className="text-[10vw] font-[1000] italic leading-none hero-gradient mb-40 uppercase italic">15-Row Matrix</h2>
    <div className="grid grid-cols-4 gap-8 mb-40">
      {['Essential £9', 'Pro £19', 'Elite £29', 'MEGA £39'].map((p, i) => (
        <div key={i} className={`p-16 rounded-[60px] bg-white/5 border ${i===3?'border-yellow-500':'border-white/10'} text-center group hover:scale-105 transition-all`}>
           <h4 className="text-xs font-black uppercase text-slate-500 mb-10">Tier {i+1}</h4>
           <div className="text-5xl font-black italic mb-16">{p}</div>
           <button className="w-full py-6 bg-white text-black font-black uppercase text-[10px] tracking-[0.3em] rounded-3xl group-hover:bg-orange-500 group-hover:text-white transition-colors">Enter Matrix</button>
        </div>
      ))}
    </div>
    <div className="overflow-x-auto glass-card p-12">
      <table className="w-full text-left text-[10px] font-black uppercase tracking-widest text-slate-400">
        <thead><tr className="border-b border-white/10 text-white"><th className="pb-10">Feature Protocol</th><th className="pb-10">Basic</th><th className="pb-10">Elite</th><th className="pb-10">MEGA</th></tr></thead>
        <tbody>
          {Array.from({length: 15}).map((_, i) => (
            <tr key={i} className="border-b border-white/5 h-16">
              <td>Sovereign Protocol-{100+i}</td><td>✔</td><td>40x</td><td className="text-cyan-400">Rainbow</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ManifestoView = ({title, content, color}) => (
  <div className="max-w-4xl mx-auto py-20 space-y-12 animate-in slide-in-from-bottom-10">
    <h1 className={`text-8xl font-[1000] italic uppercase leading-none ${color}`}>{title}</h1>
    <div className="text-slate-400 text-xl leading-loose font-medium whitespace-pre-wrap italic border-l-4 border-white/5 pl-10">
      {content}
    </div>
  </div>
);
