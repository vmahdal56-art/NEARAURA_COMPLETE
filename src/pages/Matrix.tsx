import React from 'react';
import { Check, Minus } from 'lucide-react';

const MatrixRow = ({ feature, tiers }: any) => (
  <tr className="border-b border-white/5 hover:bg-white/5 transition-all">
    <td className="p-6 text-sm font-black uppercase text-slate-400 italic">{feature}</td>
    {tiers.map((t: any, i: number) => (
      <td key={i} className="p-6 text-center font-bold text-white">
        {t === true ? <Check className="mx-auto text-[#22D3EE]" /> : t === false ? <Minus className="mx-auto text-slate-800" /> : t}
      </td>
    ))}
  </tr>
);

export default function Matrix() {
  return (
    <div className="pt-40 pb-20 px-6 bg-black min-h-screen">
      <h1 className="text-8xl font-black italic text-white uppercase text-center mb-20 tracking-tighter">
        The <span className="text-[#D4AF37]">6x15</span> Matrix
      </h1>
      <div className="max-w-7xl mx-auto overflow-x-auto rounded-[60px] border border-white/10 bg-[#080808]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white/5">
              <th className="p-8 text-[#D4AF37] uppercase italic font-black">Capability</th>
              {["Sovereign", "Pro", "Elite", "Founder", "Mega", "Director"].map(h => (
                <th key={h} className="p-8 text-center text-white uppercase italic font-black">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <MatrixRow feature="Radar Range" tiers={["100m", "200m", "300m", "400m", "500m", "Oracle"]} />
            <MatrixRow feature="Aura Multiplier" tiers={["1x", "2x", "5x", "10x", "20x", "40x"]} />
            <MatrixRow feature="Intent Lock" tiers={["48h", "48h", "48h", "48h", "48h", "Infinite"]} />
            <MatrixRow feature="Cultural Bridge" tiers={[false, true, true, true, true, true]} />
            <MatrixRow feature="Hardware Exile" tiers={[true, true, true, true, true, true]} />
          </tbody>
        </table>
      </div>
    </div>
  );
}
