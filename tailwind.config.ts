// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  // Ensure these paths are correct for your project structure
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // If you use `pages` directory
    './components/**/*.{js,ts,jsx,tsx,mdx}', // If you use a `components` directory at root
    './app/**/*.{js,ts,jsx,tsx,mdx}', // If you use `app` directory
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Recommended catch-all if you use `src`
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9147ff',
        secondary: '#0e0e10',
        accent: '#00ff7f',
        // Social Colors
        twitter: '#1DA1F2',
        instagram: '#E1306C',
        youtube: '#FF0000',
        tiktok: '#000000', // TikTok's logo is typically black on white
        discord: '#7289DA',
        reddit: '#FF4500',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config