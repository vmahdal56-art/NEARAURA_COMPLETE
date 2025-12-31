import React from 'react';
import { SOVEREIGN_DB, ORCHARD_FRUITS } from '../ManifestoDatabase';

const SovereignHome = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <header className="mb-12">
        <h1 className="text-5xl font-bold text-yellow-500">{SOVEREIGN_DB.home.hero}</h1>
        <p className="text-xl text-gray-400 mt-4">{SOVEREIGN_DB.home.subhero}</p>
      </header>

      <section className="mb-12 max-w-3xl">
        <p className="text-lg leading-relaxed">{SOVEREIGN_DB.home.text}</p>
        <div className="mt-8 p-6 border-l-4 border-red-600 bg-gray-900">
            <h2 className="text-red-600 font-bold mb-2 text-xl">THE SHIELD OF JARMILA</h2>
            <p className="text-gray-300 italic">{SOVEREIGN_DB.home.shield_of_jarmila}</p>
        </div>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {ORCHARD_FRUITS.map((fruit, i) => (
          <div key={i} className="p-4 border border-gray-800 rounded-xl flex flex-col items-center">
            <span className="text-4xl mb-2">{fruit.icon}</span>
            <span className={`font-bold ${fruit.color}`}>{fruit.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SovereignHome;
