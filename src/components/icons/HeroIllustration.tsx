import React from 'react';
export function HeroJapanIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Sun/Flag Background */}
      <circle cx="60" cy="60" r="50" fill="url(#sunGradient)" opacity="0.15" />
      <circle cx="60" cy="60" r="40" fill="url(#sunGradient)" />
      
      {/* Glass Pane */}
      <rect x="25" y="25" width="70" height="70" rx="16" fill="rgba(255, 255, 255, 0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="2" style={{ backdropFilter: 'blur(8px)' }} />
      
      {/* Kanji 漢 */}
      <path d="M45.5 40.5H57.5 M48.5 46H54.5 M44 51.5H59" stroke="url(#textGradient)" strokeWidth="4" strokeLinecap="round" />
      <path d="M51.5 35V51.5 M40 60C45 60 50 58 53 52 M51.5 60C60 62 68 55 68 55" stroke="url(#textGradient)" strokeWidth="4" strokeLinecap="round" />
      <path d="M35 40C40 45 35 55 35 55 M38 35C45 42 38 60 45 75 M62 42C68 47 62 60 65 70" stroke="url(#textGradient)" strokeWidth="4" strokeLinecap="round" />
      <path d="M45 65H65 M50 72H60 M55 60V80" stroke="url(#textGradient)" strokeWidth="4" strokeLinecap="round" />

      <defs>
        <linearGradient id="sunGradient" x1="20" y1="20" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f43f5e" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="textGradient" x1="35" y1="35" x2="70" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#e2e8f0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
