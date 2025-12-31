
import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation, Globe, Lock, Heart, Users, Smile, Gamepad2, Flame, Cherry, CheckCircle2, Clock, ShieldX, Sparkles, Video } from 'lucide-react';

// --- HELPER COMPONENTS ---

// 1. The Neon Fruit Icons (From our previous design)
const FruitIcon = ({ type, size = 16 }) => {
  const icons = {
    pineapple: (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#FACC15" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_3px_#FACC15]">
        <path d="M12 2v4M9 22c0-1.5 1-3 3-3s3 1.5 3 3H9zM12 6c-3.3 0-6 2.7-6 6v5h12v-5c0-3.3-2.7-6-6-6z" />
        <path d="M9 10l2 2M13 10l-2 2" />
      </svg>
    ),
    grapes: (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#A855F7" strokeWidth="2" className="drop-shadow-[0_0_3px_#A855F7]">
        <circle cx="12" cy="7" r="2" /><circle cx="10" cy="11" r="2" /><circle cx="14" cy="11" r="2" /><circle cx="8" cy="15" r="2" /><circle cx="12" cy="15" r="2" /><circle cx="16" cy="15" r="2" /><path d="M12 5V2" />
      </svg>
    ),
    orange: (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#F97316" strokeWidth="2" className="drop-shadow-[0_0_3px_#F97316]">
            <circle cx="12" cy="12" r="9" /><path d="M12 3c.5 1.5 2 2 2 2M11 3s-.5 1.5-2 1.5" />
        </svg>
    ),
    melon: (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#22C55E" strokeWidth="2" className="drop-shadow-[0_0_3px_#22C55E]">
            <ellipse cx="12" cy="12" rx="10" ry="6" /><path d="M12 6v12M7 7.5c2 1.5 8 1.5 10 0" />
        </svg>
    ),
    cherries: (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#EF4444" strokeWidth="2" className="drop-shadow-[0_0_3px_#EF4444]">
        <circle cx="7" cy="17" r="3" /><circle cx="17" cy="17" r="3" /><path d="M10 17c0-5 2-8 7-9M7 17c0-5 2-7 2-7" /><path d="M17 8l-2-4" />
      </svg>
    ),
    intimacy: (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#EC4899" strokeWidth="2.5" className="drop-shadow-[0_0_3px_#EC4899]">
         <path d="M12 21c4.5-3.5 8-7 8-11a5 5 0 1 0-10 0 5 5 0 1 0-10 0c0 4 3.5 7.5 8 11z" />
      </svg>
    )
  };
  return icons[type] || null;
};

// --- DATA & METADATA ---
const fruitMeta = {
    pineapple: { id: 'pineapple', color: "#FACC15", icon: <Heart size={14}/>, label: "Dating", desc: 'Serious romance & 1-on-1' },
    grapes:    { id: 'grapes', color: "#A855F7", icon: <Users size={14}/>, label: "Tribe", desc: 'Community & group socials' },
    orange:    { id: 'orange', color: "#F97316", icon: <Smile size={14}/>, label: "Friends", desc: 'Strictly platonic connection' },
    melon:     { id: 'melon', color: "#22C55E", icon: <Gamepad2 size={14}/>, label: "Hobbies", desc: 'Activity & gaming partners' },
    cherries:  { id: 'cherries', color: "#EF4444", icon: <Cherry size={14}/>, label: "Meetup", desc: 'Spontaneous, real-time events' },
    intimacy:  { id: 'intimacy', color: "#EC4899", icon: <Flame size={14}/>, label: "Intimacy", desc: 'Physical/adult connection' }
};

const usersData = [...Array(200)].map((_, i) => ({
      id: i,
      distance: i < 60 ? Math.floor(Math.random() * 499) + 1 : Math.floor(Math.random() * 8000 + 501),
      intents: [Object.keys(fruitMeta)[i % 6], Object.keys(fruitMeta)[(i + 2) % 6]],
      name: `Aura ${i}`,
      isMegaBoosted: i === 3, // Simulate one user with Mega Boost
      hasVideoIntro: i % 5 === 0, // Simulate some users with video intros
}));


// --- INTENT SELECTION SCREEN ---
const IntentSelectorScreen = ({ onIntentsLocked }) => {
  const [selected, setSelected] = useState([]);
  const [error, setError] = useState(null);

  const handleSelect = (id) => {
    setError(null);
    let newSelection = [...selected];

    if (newSelection.includes(id)) {
      newSelection = newSelection.filter(item => item !== id);
    } else {
      if (newSelection.length < 2) {
        newSelection.push(id);
      }
    }
    
    // The "Conflict of Interest" Logic
    if (newSelection.includes('pineapple') && newSelection.includes('intimacy')) {
      setError("Safety Conflict: A serious Date (Pineapple) and Intimacy cannot be selected together. Please choose one true intent.");
      // Keep only the last selected item to avoid the conflict state
      setSelected([id]);
    } else {
      setSelected(newSelection);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl p-6 text-white"
    >
      <div className="max-w-md mx-auto">
        <div className="mb-12 border-b border-white/10 pb-10 text-center"> 
          <h1 className="text-5xl font-black italic tracking-tighter text-cyan-400 mb-6 uppercase">The Sovereign Manifesto</h1> 
          <p className="text-sm leading-relaxed text-slate-300 italic">For 1,400 hours, I have built a stand against digital ghosting. NearAura hardcodes dignity into the motherboard. If you ghost the Orchard, your hardware is Exiled. Permanently. No bots. No fakes. Only verified souls.</p> 
        </div>
        <div className="text-center mb-6">
          <h2 className="text-3xl font-black tracking-tighter italic mb-2">SET YOUR AURA</h2>
          <p className="text-slate-400 text-xs uppercase tracking-widest">Select up to 2 intents for 48 hours</p>
        </div>

        <div className="grid grid-cols-1 gap-3 mb-6">
          {Object.values(fruitMeta).map((f) => (
            <button key={f.id} onClick={() => handleSelect(f.id)} className={`flex items-center text-left p-4 rounded-2xl border-2 transition-all ${selected.includes(f.id) ? 'border-cyan-500 bg-cyan-500/10' : 'border-white/10 bg-slate-900/50'}`}>
              <span className="text-3xl mr-4"><FruitIcon type={f.id} size={28} /></span>
              <div>
                <p className="font-bold text-sm uppercase">{f.label}</p>
                <p className="text-[11px] text-slate-400">{f.desc}</p>
              </div>
              {selected.includes(f.id) && <CheckCircle2 className="ml-auto text-cyan-500" size={20} />}
            </button>
          ))}
        </div>

        <AnimatePresence>
        {error && (
            <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-xl flex gap-3 text-xs text-red-300">
                <ShieldX size={24} className="shrink-0"/> {error}
            </motion.div>
        )}
        </AnimatePresence>

        <div className="mb-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-xl flex gap-3 text-xs text-yellow-300/90">
          <Clock size={20} className="shrink-0"/> Your choice is locked for 48 hours to ensure genuine connections. Choose wisely.
        </div>

        <button onClick={() => onIntentsLocked(selected)} disabled={selected.length === 0} className={`w-full py-4 rounded-2xl font-black tracking-widest transition-all ${selected.length > 0 ? 'bg-white text-black' : 'bg-slate-800 text-slate-600'}`}>
          LOCK AURA
        </button>
      </div>
    </motion.div>
  );
};


// --- MAIN APP ---
const NearAuraApp = () => {
  const [world, setWorld] = useState('near');
  const [lens, setLens] = useState('all');
  const [isPremium, setIsPremium] = useState(false);
  const [userIntents, setUserIntents] = useState(null); // null until user locks them
  
  // Memoize filtered grid for performance
  const filteredGrid = useMemo(() => {
    return usersData.filter(u => {
      const worldMatch = world === 'near' ? u.distance <= 500 : u.distance > 500;
      if (lens === 'all') return worldMatch;
      const lensMatch = u.intents.includes(lens);
      return worldMatch && lensMatch;
    }).sort((a, b) => {
        if(a.isMegaBoosted) return -1;
        if(b.isMegaBoosted) return 1;
        return a.distance - b.distance
    });
  }, [world, lens]);
  
  if (!userIntents) {
    return <IntentSelectorScreen onIntentsLocked={setUserIntents} />;
  }

  return (
    <div className="min-h-screen bg-[#020405] text-white font-sans">
      <header className="sticky top-0 z-50 bg-[#020405]/90 backdrop-blur-xl border-b border-white/5 p-4">
        {/* The Aura Switcher */}
        <div className="max-w-xs mx-auto relative flex bg-slate-900/50 rounded-full p-1 border border-white/10">
          <motion.div className={`absolute top-1 bottom-1 rounded-full shadow-lg ${world === 'near' ? 'bg-cyan-500 shadow-cyan-500/40' : 'bg-purple-600 shadow-purple-600/40'}`} layoutId="activeWorld" style={{ width: '50%' }} />
          <button onClick={() => setWorld('near')} className="relative z-10 w-1/2 py-2 text-[11px] font-black tracking-widest transition-colors flex items-center justify-center gap-2"> <Navigation size={14} /> NEAR </button>
          <button onClick={() => setWorld('far')} className="relative z-10 w-1/2 py-2 text-[11px] font-black tracking-widest transition-colors flex items-center justify-center gap-2"> <Globe size={14} /> FAR </button>
        </div>
        
        {/* The Fruit Lenses */}
        <div className="flex justify-center items-center gap-6 overflow-x-auto no-scrollbar pt-4 mt-2">
            <button onClick={() => setLens('all')} className={`transition-all ${lens === 'all' ? 'opacity-100 scale-110' : 'opacity-40'}`}><Sparkles size={20}/></button>
            {Object.values(fruitMeta).map(f => (
                <button key={f.id} onClick={() => setLens(f.id)} className={`transition-all duration-300 transform ${lens === f.id ? 'scale-125 opacity-100' : 'opacity-40 grayscale hover:grayscale-0 hover:opacity-70'}`}>
                    <FruitIcon type={f.id} size={24} />
                </button>
            ))}
        </div>
      </header>

      {/* The Orchard Grid */}
      <main className="p-0.5 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-0.5 max-w-[1400px] mx-auto">
<div className='px-6 py-20 text-center bg-aura-black'><h1 className='text-6xl font-black italic tracking-tighter uppercase text-white mb-6'>NearAura<span className='text-aura-cyan'>.</span></h1><p className='max-w-4xl mx-auto text-xl font-medium leading-relaxed italic text-slate-300'>For 1,400 hours, I have built a stand against digital ghosting. NearAura hardcodes dignity into the motherboard. If you ghost the Orchard, your hardware is Exiled. Permanently. No bots. No fakes. Only verified souls.</p></div>
        <AnimatePresence>
          {filteredGrid.map((user, i) => {
            const isLocked = world === 'far' && !isPremium && i > 11;
            
            return (
              <motion.div key={user.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="aspect-[3/4] relative bg-slate-900 border-[0.5px] border-black group">
                
                {/* Mega Boost & Rainbow Aura */}
                <div className={`absolute inset-0 z-10 rounded-lg pointer-events-none ${user.isMegaBoosted ? 'animate-pulse' : ''}`} 
                     style={{
                        background: user.isMegaBoosted ? 'linear-gradient(to right, red, orange, yellow, green, cyan, blue, violet)' : 'transparent',
                        border: user.isMegaBoosted ? '2px solid transparent' : 'none',
                        filter: user.isMegaBoosted ? 'blur(4px) brightness(2)' : 'none'
                     }}
                />

                {/* The User "Photo" */}
                <div className={`relative z-0 w-full h-full bg-slate-800 transition-all duration-500 ${isLocked ? 'blur-2xl opacity-20' : 'opacity-70 group-hover:opacity-100'}`} style={{ background: `linear-gradient(${user.id * 15}deg, #1e293b, #020617)` }} />
                
                {!isLocked ? (
                  <>
                    <div className="absolute bottom-1.5 left-1.5 bg-black/60 px-1.5 py-0.5 rounded text-[9px] font-bold border border-white/5">{user.distance}m</div>
                    
                    {/* Dual Fruit Badges */}
                    <div className="absolute top-1.5 right-1.5 flex flex-col gap-1 z-20">
                      <div className="p-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10"><FruitIcon type={user.intents[0]} size={12}/></div>
                      <div className="p-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10"><FruitIcon type={user.intents[1]} size={12}/></div>
                    </div>

                    {/* Vibe Clip / Emotion Presentation Indicator */}
                    {user.hasVideoIntro && (
                         <div className="absolute bottom-1.5 right-1.5 z-20 p-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
                            <Video size={12} className="text-cyan-400" />
                        </div>
                    )}
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center opacity-30"><Lock size={16} /></div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </main>
<div className="p-8 text-center border-t border-white/5 bg-black"><p className="max-w-2xl mx-auto text-slate-500 text-sm leading-relaxed italic">For 1,400 hours, I have built a stand against digital ghosting. NearAura hardcodes dignity into the motherboard. If you ghost the Orchard, your hardware is Exiled. Permanently. No bots. No fakes. Only verified souls.</p></div>

      {/* Premium Upsell for FarAura */}
      {!isPremium && world === 'far' && (
        <motion.div initial={{ y: 120 }} animate={{ y: 0 }} transition={{type:'spring', stiffness:100}} className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent z-[60]">
          <div className="max-w-md mx-auto bg-white rounded-2xl p-4 flex items-center justify-between shadow-2xl">
            <div>
              <p className="text-black text-sm font-black italic">UNLOCK FARAURA</p>
              <p className="text-slate-600 text-[10px]">Explore the Orchard beyond the horizon</p>
            </div>
            <button onClick={() => setIsPremium(true)} className="bg-black text-white px-5 py-2.5 rounded-xl text-[11px] font-black hover:scale-105 transition">
              UPGRADE £14.99
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default NearAuraApp;
