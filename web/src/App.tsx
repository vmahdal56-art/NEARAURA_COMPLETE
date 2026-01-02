import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { SOVEREIGN_DB, INITIALS } from './ManifestoDatabase';
import { 
  ShieldCheck, Zap, Lock, Map, Users, Apple, Play, Heart, Globe, Search,
  Twitter, Instagram, Facebook, Youtube, Send, MessageCircle, Github, Menu, X, CheckCircle2 
} from 'lucide-react';

// Core Components (Linked from primary src)
import SovereignHome from './pages/SovereignHome';
import Matrix from './pages/Matrix';
import Mentality from './pages/Mentality';
import Orchard from './pages/Orchard';
import SecurityPortal from './pages/SecurityPortal';

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
  return (
    <Router>
      <div className="bg-[#020405] text-white min-h-screen font-['Inter'] selection:bg-orange-500 overflow-x-hidden">
        {/* NAV WITH THE SOVEREIGN EIGHT IDENTITY */}
        <nav className="fixed top-0 w-full z-[100] bg-black/90 backdrop-blur-3xl border-b border-white/5 px-12 py-8 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-6 no-underline">
            <Logo />
            <div className="text-4xl font-[1000] italic tracking-tighter uppercase leading-none bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-500 bg-clip-text text-transparent">NearAura</div>
          </Link>
          <div className="hidden lg:flex gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
            <Link to="/orchard" className="hover:text-cyan-400 transition no-underline">The Orchard</Link>
            <Link to="/matrix" className="text-yellow-500 underline underline-offset-8 no-underline">Price Matrix</Link>
            <Link to="/mentality" className="hover:text-purple-400 transition no-underline">Mentality</Link>
            <Link to="/security" className="hover:text-red-500 transition no-underline">Exile</Link>
          </div>
          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-full font-black text-xs tracking-widest uppercase shadow-[0_0_30px_rgba(34,211,238,0.3)]">
            Trolley 🍍
          </button>
        </nav>

        <main className="pt-52">
          <Routes>
            <Route path="/" element={<SovereignHome />} />
            <Route path="/matrix" element={<Matrix />} />
            <Route path="/orchard" element={<Orchard />} />
            <Route path="/security" element={<SecurityPortal />} />
            <Route path="/mentality" element={<Mentality />} />
          </Routes>
        </main>

        <footer className="bg-black pt-60 pb-20 px-20 border-t border-white/5">
          <div className="text-[#D4AF37] opacity-40 font-[1000] text-[22px] tracking-[1.8em] text-center mb-12 uppercase">{INITIALS}</div>
          <p className="text-center text-[10px] text-slate-800 tracking-[0.5em] uppercase italic">Dedicated to Jarmila | Sovereign Logic | © 2025</p>
        </footer>
      </div>
    </Router>
  );
}
