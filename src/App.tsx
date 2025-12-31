import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Shield, Zap, Globe, Smartphone, Fingerprint, Crown, Heart, Apple, Play, 
  Check, Minus, ZapOff, Flame, Map, Anchor, HeartPulse, Scale, Users, 
  Star, Quote, Facebook, Instagram, Twitter, Youtube, MessageSquare, ShieldCheck,
  ShieldAlert, Activity, Search, Send, TrendingUp, Award, Target, EyeOff,
  Video, Mic, Lock, Coffee, Users2, HeartHandshake, Navigation2
} from 'lucide-react';

const INITIALS = "JV JM PM LA PM LH YM VM";

// RADAR SCANNER COMPONENT
const RadarEngine = () => (
  <div className="relative aspect-square bg-[#0B0D11] rounded-[80px] border-[12px] border-[#1A1C20] overflow-hidden shadow-[0_0_80px_rgba(34,211,238,0.15)]">
    {/* CONIC RADAR SWEEP */}
    <div className="absolute inset-0 z-10 bg-[conic-gradient(from_0deg,transparent,#22D3EE44_10%,#22D3EE_50%)] animate-[spin_4s_linear_infinite] origin-center" />
    
    {/* GRID LINES */}
    <div className="absolute inset-0 border border-white/5 rounded-full scale-[0.2]" />
    <div className="absolute inset-0 border border-white/5 rounded-full scale-[0.4]" />
    <div className="absolute inset-0 border border-white/5 rounded-full scale-[0.6]" />
    <div className="absolute inset-0 border border-white/5 rounded-full scale-[0.8]" />
    
    {/* PROFILE GRID WITH FRUIT BADGES */}
    <div className="absolute inset-0 z-20 grid grid-cols-4 p-8 gap-4">
      {[...Array(16)].map((_, i) => {
        const fruits = ['🍍', '🍌', '🍑', '🍇', '🍒', '🍈'];
        const fruit = fruits[i % fruits.length];
        return (
          <div key={i} className="relative group cursor-pointer transition-transform hover:scale-110">
            <div className="w-full aspect-square rounded-2xl bg-slate-800 overflow-hidden border-2 border-white/5 group-hover:border-[#22D3EE] shadow-xl">
              <img src={`https://i.pravatar.cc/150?u=aura${i}`} className="w-full h-full object-cover saturate-[0.2] group-hover:saturate-100 transition-all" alt="user" />
              <div className="absolute bottom-1 right-1 bg-black/80 rounded-lg px-1 text-sm shadow-lg border border-white/10">{fruit}</div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

const Navigation = () => (
  <nav className="fixed top-0 w-full z-[150] bg-black/95 backdrop-blur-3xl border-b border-white/5 px-12 py-8 flex justify-between items-center">
    <div className="flex items-center gap-6">
      <svg width="50" height="50" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" stroke="url(#logo_g)" strokeWidth="4" fill="none" />
          <path d="M30 70V30L50 50L70 30V70" stroke="url(#logo_g)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <defs>
              <linearGradient id="logo_g"><stop offset="0%" stopColor="#22D3EE"/><stop offset="50%" stopColor="#A855F7"/><stop offset="100%" stopColor="#F97316"/></linearGradient>
          </defs>
      </svg>
      <div className="flex flex-col uppercase leading-none">
        <span className="text-3xl font-black italic tracking-tighter">NEARAURA</span>
        <span className="text-[10px] font-black text-[#22D3EE] tracking-[.4em] mt-1">Sovereign Roots</span>
      </div>
    </div>
    <div className="hidden lg:flex gap-12 text-[11px] font-black uppercase tracking-[0.5em] text-slate-400 items-center">
      <Link to="/" className="hover:text-white transition-all underline decoration-[#F97316] decoration-4">1. DNA</Link>
      <a href="#radar" className="hover:text-white transition-all">2. RADAR</a>
      <a href="#security" className="hover:text-white transition-all">3. SECURITY</a>
      <a href="#matrix" className="hover:text-white transition-all">4. MATRIX</a>
      <Link to="/launch" className="bg-[#F97316] text-white px-8 py-3 rounded-full hover:scale-110 transition-all font-black italic">5. LONDON 2026</Link>
    </div>
  </nav>
);

const PricingMatrix = () => {
    const rows = [
        ["Proximity Radar", "500m", "1km", "Unlimited", "Unlimited", "Pulse", "Oracle"],
        ["Intent Lock (48h)", "YES", "YES", "YES", "YES", "YES", "YES"],
        ["Hardware Exile", "YES", "YES", "YES", "YES", "YES", "YES"],
        ["Fruit Modes", "1", "2", "2", "3", "ALL", "CUSTOM"],
        ["Aura Pulse", "NO", "NO", "1/WK", "1/DAY", "UNLIMITED", "ADMIN"],
        ["E2E Encryption", "YES", "YES", "YES", "YES", "YES", "YES"],
        ["Anti-Eavesdrop", "YES", "YES", "YES", "YES", "YES", "YES"],
        ["Meetup Guard", "YES", "YES", "YES", "YES", "YES", "YES"],
        ["Aura Intros", "3s", "15s", "15s", "60s", "UNLIMITED", "UNLIMITED"],
        ["Global Reach", "NO", "NO", "YES", "YES", "YES", "YES"],
        ["40x Multiplier", "NO", "NO", "NO", "1hr", "24hr", "PERMANENT"],
        ["Charity 10%", "YES", "YES", "YES", "YES", "YES", "YES"],
        ["Priority Support", "NO", "NO", "YES", "YES", "YES", "YES"],
        ["Ghost Mode", "NO", "NO", "NO", "NO", "YES", "YES"],
        ["Root Access", "NO", "NO", "NO", "NO", "NO", "YES"]
    ];
    return (
        <div className="overflow-x-auto mt-20 border border-white/10 rounded-[40px] bg-black/50 p-10">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-white/20">
                        <th className="p-6 text-xl font-black italic text-[#22D3EE]">6x15 MATRIX</th>
                        {["SOV", "PRO", "ELITE", "FOUNDER", "MEGA", "DIRECTOR"].map(t => <th key={t} className="p-6 text-center font-black uppercase text-white">{t}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((r, i) => (
                        <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-all group">
                            <td className="p-6 font-bold italic text-slate-400 group-hover:text-white uppercase">{r[0]}</td>
                            {r.slice(1).map((v, j) => <td key={j} className="p-6 text-center font-black text-[10px] text-white uppercase">{v}</td>)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const Home = () => (
  <main className="pt-64">
    {/* HERO */}
    <section className="text-center px-8 mb-80">
      <h1 className="text-[13vw] font-black italic leading-[0.8] uppercase tracking-tighter mb-16">
        <span className="bg-gradient-to-r from-[#22D3EE] via-[#A855F7] to-[#F97316] bg-clip-text text-transparent">
            THE END OF <br/> LONELY SWIPE.
        </span>
      </h1>

      <div className="flex flex-wrap justify-center gap-6 mb-40 max-w-6xl mx-auto">
        <button className="px-10 py-6 bg-white text-black rounded-full font-black uppercase italic flex items-center gap-3 hover:scale-105 transition-all"><Play fill="black" /> Android APK</button>
        <button className="px-10 py-6 border-2 border-white rounded-full font-black uppercase italic flex items-center gap-3 hover:bg-white hover:text-black transition-all"><Apple /> iOS Waitlist</button>
        <button className="px-10 py-6 bg-[#A855F7] text-white rounded-full font-black uppercase italic">Referrals</button>
        <button className="px-10 py-6 bg-[#F97316] text-white rounded-full font-black uppercase italic animate-bounce shadow-[0_0_50px_rgba(249,115,22,0.4)]">Founder Slot</button>
        <button className="px-10 py-6 border-2 border-[#22D3EE] text-[#22D3EE] rounded-full font-black uppercase italic">Join Waitlist</button>
      </div>

      {/* RADAR & HEATMAP GRID */}
      <div id="radar" className="grid lg:grid-cols-2 gap-24 max-w-7xl mx-auto mb-80 px-12">
          <div className="space-y-12">
              <h2 className="text-6xl font-black italic uppercase text-[#22D3EE]">Sovereign Radar</h2>
              <RadarEngine />
          </div>
          <div className="space-y-12">
              <h2 className="text-6xl font-black italic uppercase text-[#F97316]">London Heatmap</h2>
              <div className="relative aspect-square bg-black rounded-[80px] border-[12px] border-[#1A1C20] overflow-hidden">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/London_Underground_Zone_1_map.svg" className="absolute inset-0 object-cover opacity-20 grayscale" />
                  <div className="absolute top-[35%] left-[45%] w-64 h-64 bg-[#22D3EE]/30 rounded-full blur-[80px] animate-pulse" />
                  <div className="absolute top-[55%] left-[30%] w-80 h-80 bg-[#F97316]/20 rounded-full blur-[100px] animate-pulse delay-1000" />
                  <div className="absolute inset-0 z-30 flex items-center justify-center">
                      <div className="text-center font-black italic uppercase tracking-widest text-white/40 text-xs">
                          <Activity className="mx-auto mb-2 text-[#22D3EE]" />
                          Live Density Tracking
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* TROLLEY VS ORCHARD */}
      <div className="grid md:grid-cols-2 gap-20 max-w-7xl mx-auto px-12 mb-80">
          <div className="bg-white/5 p-20 rounded-[80px] border border-white/5 text-left relative overflow-hidden group">
             <div className="text-[200px] opacity-10 absolute -bottom-10 -right-10 grayscale group-hover:grayscale-0 transition-all">🛒</div>
             <h3 className="text-5xl font-black italic uppercase text-slate-500 mb-8">The Trolley</h3>
             <p className="text-xl font-bold italic text-slate-400 uppercase leading-relaxed mb-10">Putting a Pineapple in your trolley is a gamble. Low intent, geographical deception, and a never-ending loop of discarded souls.</p>
             <div className="text-4xl font-black italic text-red-600 uppercase border-2 border-red-600 inline-block px-6 py-2">GAMBLE 🍍</div>
          </div>
          <div className="bg-gradient-to-br from-[#22D3EE]/10 to-[#F97316]/10 p-20 rounded-[80px] border-4 border-[#22D3EE] text-left relative overflow-hidden shadow-[0_0_100px_rgba(34,211,238,0.2)] group">
             <div className="text-[200px] opacity-20 absolute -bottom-10 -right-10 group-hover:scale-110 transition-all">🌳</div>
             <h3 className="text-5xl font-black italic uppercase text-[#22D3EE] mb-8">The Orchard</h3>
             <p className="text-xl font-bold italic text-white uppercase leading-relaxed mb-10">Getting it in the Orchard is a guarantee. Biological proximity, 48-hour intent locks, and hardware-verified trust protocols.</p>
             <div className="text-4xl font-black italic text-[#22D3EE] uppercase border-2 border-[#22D3EE] inline-block px-6 py-2">GUARANTEE 🍍</div>
          </div>
      </div>
    </section>

    {/* 3000+ WORD MANIFESTO LOGIC BLOCKS */}
    <section className="px-12 max-w-6xl mx-auto space-y-64 mb-80">
        <div id="legacy" className="p-24 bg-[#D4AF37]/5 border-2 border-[#D4AF37]/30 rounded-[100px] relative overflow-hidden">
            <Anchor className="absolute -right-20 -bottom-20 text-[#D4AF37] opacity-10" size={400} />
            <h2 className="text-8xl text-[#D4AF37] font-black uppercase italic mb-10 underline decoration-8">Legacy: Jarmila</h2>
            <div className="space-y-12 text-2xl font-bold italic text-white/90 leading-relaxed">
                <p>NearAura is a project of the soul. We honor **Jarmila**, whose memory drives our commitment to real, high-trust human connection. We are not building an app; we are building a shield for our families, our sisters, and our community.</p>
                <div className="flex gap-10 items-center bg-black/60 p-12 rounded-[50px] border border-[#D4AF37]/40 shadow-2xl">
                   <Scale size={100} className="text-[#D4AF37] shrink-0" />
                   <p className="text-2xl font-black uppercase tracking-widest text-white leading-tight">10% Charity Split hardcoded for JV, JM, PM foundation against cancer and alcoholism. Every connection heals.</p>
                </div>
            </div>
        </div>

        <div id="security" className="space-y-32">
            <div className="border-l-[20px] border-red-600 pl-16">
                <h2 className="text-[8vw] font-black italic uppercase text-red-600 leading-none mb-8">HWID Exile <br/> Protocol</h2>
                <p className="text-3xl text-slate-400 font-bold italic uppercase tracking-tighter">Deception is a virus. One verified breach of trust results in a permanent hardware-level ban. The physical device is exiled from the Orchard. Forever.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
                <div className="p-16 bg-white/5 rounded-[60px] border border-white/10 text-center group">
                    <Lock size={80} className="mx-auto mb-8 group-hover:text-[#22D3EE] transition-all" />
                    <h4 className="text-2xl font-black italic uppercase text-white mb-4">E2E Shield</h4>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Fully encrypted chat, video, and voice calls. No eavesdropping.</p>
                </div>
                <div className="p-16 bg-white/5 rounded-[60px] border border-white/10 text-center group">
                    <ShieldCheck size={80} className="mx-auto mb-8 group-hover:text-[#F97316] transition-all" />
                    <h4 className="text-2xl font-black italic uppercase text-white mb-4">Anti-Scam</h4>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Hardware-locked identity gates. No botnets. No fake profiles.</p>
                </div>
                <div className="p-16 bg-white/5 rounded-[60px] border border-white/10 text-center group">
                    <Target size={80} className="mx-auto mb-8 group-hover:text-[#A855F7] transition-all" />
                    <h4 className="text-2xl font-black italic uppercase text-white mb-4">Meetup Guard</h4>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Verified proximity and intent locks ensure you meet who you see.</p>
                </div>
            </div>
        </div>

        <PricingMatrix />
    </section>

    {/* FULL 15-LINK FOOTER */}
    <footer className="bg-black py-64 border-t border-white/10 px-12 text-center">
        <div className="grid md:grid-cols-5 gap-16 max-w-7xl mx-auto mb-40 text-left">
            <div className="space-y-6">
                <h4 className="font-black italic text-white uppercase tracking-widest">Sovereign</h4>
                <div className="flex flex-col gap-4 text-xs text-slate-600 font-black uppercase">
                    <span className="hover:text-white cursor-pointer">1. DNA Manifesto</span>
                    <span className="hover:text-white cursor-pointer">2. The Orchard</span>
                    <span className="hover:text-white cursor-pointer">3. Founder Access</span>
                </div>
            </div>
            <div className="space-y-6">
                <h4 className="font-black italic text-white uppercase tracking-widest">Security</h4>
                <div className="flex flex-col gap-4 text-xs text-slate-600 font-black uppercase">
                    <span className="hover:text-white cursor-pointer">4. HWID Exile</span>
                    <span className="hover:text-white cursor-pointer">5. E2E Encryption</span>
                    <span className="hover:text-white cursor-pointer">6. Anti-Fraud</span>
                </div>
            </div>
            <div className="space-y-6">
                <h4 className="font-black italic text-white uppercase tracking-widest">Mission</h4>
                <div className="flex flex-col gap-4 text-xs text-slate-600 font-black uppercase">
                    <span className="hover:text-white cursor-pointer">7. Jarmila Legacy</span>
                    <span className="hover:text-white cursor-pointer">8. International</span>
                    <span className="hover:text-white cursor-pointer">9. Charity Roots</span>
                </div>
            </div>
            <div className="space-y-6">
                <h4 className="font-black italic text-white uppercase tracking-widest">Community</h4>
                <div className="flex flex-col gap-4 text-xs text-slate-600 font-black uppercase">
                    <span className="hover:text-white cursor-pointer">10. Meetups</span>
                    <span className="hover:text-white cursor-pointer">11. Aura Intros</span>
                    <span className="hover:text-white cursor-pointer">12. Hobbies</span>
                </div>
            </div>
            <div className="space-y-6">
                <h4 className="font-black italic text-white uppercase tracking-widest">Legal</h4>
                <div className="flex flex-col gap-4 text-xs text-slate-600 font-black uppercase">
                    <span className="hover:text-white cursor-pointer">13. Privacy Oath</span>
                    <span className="hover:text-white cursor-pointer">14. Terms of Intent</span>
                    <span className="hover:text-white cursor-pointer">15. Trust Index</span>
                </div>
            </div>
        </div>
        
        <div className="flex justify-center gap-20 mb-32 text-slate-500">
            <Facebook size={40} className="hover:text-[#22D3EE] transition-all" />
            <Instagram size={40} className="hover:text-[#A855F7] transition-all" />
            <Twitter size={40} className="hover:text-[#F97316] transition-all" />
            <Youtube size={40} className="hover:text-red-600 transition-all" />
        </div>

        <div className="text-[#D4AF37] text-[4vw] font-black italic uppercase tracking-[2.5em] opacity-40 leading-none overflow-hidden whitespace-nowrap px-10">
            {INITIALS}
        </div>
    </footer>
  </main>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#060709] text-white font-sans selection:bg-[#F97316]/30 overflow-x-hidden">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
