import React from 'react';

const INITIALS = "JV JM PM LA PM LH YM VM";

function App() {
  return (
    <div className="min-h-screen bg-black selection:bg-orange-500 selection:text-white">
      {/* HERO SECTION */}
      <header className="relative h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="absolute top-10 initials-shield text-xs uppercase">{INITIALS}</div>
        
        <h1 className="text-[12vw] font-black leading-[0.85] uppercase aura-gradient mb-8">
          THE END OF <br/> LONELY <br/> SWIPING.
        </h1>
        
        <p className="max-w-2xl text-slate-400 text-lg mb-12 font-medium tracking-tight">
          NearAura is not a dating app. It is a sovereign life-saving sanctuary connecting high-integrity people.
        </p>

        <div className="flex gap-6">
          <button className="bg-white text-black px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all">
            Get the APK
          </button>
          <button className="border border-white/20 px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-white/10 transition-all">
            The Manifesto
          </button>
        </div>
      </header>

      {/* THE 6-FRUIT SAFETY PROTOCOL SECTION */}
      <section className="py-32 bg-[#050505] border-y border-white/5 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
          {['Pineapple', 'Orange', 'Grape', 'Melon', 'Cherry', 'Peach'].map((fruit) => (
            <div key={fruit} className="p-8 border border-white/5 rounded-3xl hover:border-orange-500/50 transition-colors group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {fruit === 'Pineapple' ? '🍍' : fruit === 'Peach' ? '🍑' : '🍒'}
              </div>
              <h3 className="text-xl font-bold uppercase mb-2">{fruit}</h3>
              <p className="text-slate-500 text-sm">Locked intent for 48 hours. No mixed signals. Pure integrity.</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOVEREIGN FOOTER (THE 19 LINKS) */}
      <footer className="py-20 border-t border-white/5 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div>
            <h4 className="text-gold font-black uppercase text-xs mb-6">The Orchard</h4>
            <ul className="text-slate-500 text-xs space-y-3 uppercase font-bold tracking-tighter">
              <li>Mission</li><li>Life Saving</li><li>IZS Gateway</li><li>Jarmila Legacy</li><li>Successors</li>
            </ul>
          </div>
          <div>
            <h4 className="text-cyan-400 font-black uppercase text-xs mb-6">Director Say</h4>
            <ul className="text-slate-500 text-xs space-y-3 uppercase font-bold tracking-tighter">
              <li>Manifesto</li><li>London Launch</li><li>The Vacuum</li><li>Sovereign Logic</li><li>Iron Fortress</li>
            </ul>
          </div>
          <div>
            <h4 className="text-purple-500 font-black uppercase text-xs mb-6">Security</h4>
            <ul className="text-slate-500 text-xs space-y-3 uppercase font-bold tracking-tighter">
              <li>HWID Purge</li><li>Biometric Sync</li><li>Anti-Ghosting</li><li>Trust Index</li><li>Verified Souls</li>
            </ul>
          </div>
          <div>
            <h4 className="text-orange-500 font-black uppercase text-xs mb-6">Legal</h4>
            <ul className="text-slate-500 text-xs space-y-3 uppercase font-bold tracking-tighter">
              <li>Terms</li><li>Privacy</li><li>Prague Arbitration</li><li>Liability</li>
            </ul>
          </div>
        </div>
        <div className="text-center initials-shield text-[10px] opacity-20">{INITIALS}</div>
      </footer>
    </div>
  );
}

export default App;
