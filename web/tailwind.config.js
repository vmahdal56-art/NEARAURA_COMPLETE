/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        aura: {
          cyan: '#22D3EE',
          violet: '#8B5CF6',
          pink: '#EC4899',
          orange: '#F97316',
          black: '#0A0A0C',
        }
      },
      backgroundImage: {
        'aura-gradient': 'linear-gradient(to right, #22D3EE, #8B5CF6, #EC4899)',
        'aura-radial': 'radial-gradient(circle, #8B5CF6 0%, #0A0A0C 70%)',
      }
    },
  },
  plugins: [],
}
