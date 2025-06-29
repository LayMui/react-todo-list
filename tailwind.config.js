/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
    safelist: [
      'bg-emerald-100',
      'bg-neutral-100',
      'bg-slate-100',
      'border-emerald-500',
      'border-neutral-500',
      'border-slate-500',
    ]
    
  }