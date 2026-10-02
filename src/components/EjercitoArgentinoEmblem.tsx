import React from 'react';

interface EjercitoArgentinoEmblemProps {
  className?: string;
}

export const EjercitoArgentinoEmblem: React.FC<EjercitoArgentinoEmblemProps> = ({ 
  className = "w-full h-full" 
}) => {
  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Escudo Oficial del Ejército Argentino"
    >
      <defs>
        {/* Gradients tailored to the app's tactical military & gold palette */}
        <radialGradient id="ea-bg-vignette" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1a2514" />
          <stop offset="70%" stopColor="#121a0d" />
          <stop offset="100%" stopColor="#0a1007" />
        </radialGradient>

        <radialGradient id="ea-sun-gold" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fae588" />
          <stop offset="45%" stopColor="#e2c24e" />
          <stop offset="85%" stopColor="#b5942b" />
          <stop offset="100%" stopColor="#806416" />
        </radialGradient>

        <linearGradient id="ea-gold-rim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f3de81" />
          <stop offset="35%" stopColor="#cca73b" />
          <stop offset="70%" stopColor="#876b1f" />
          <stop offset="100%" stopColor="#e9cb56" />
        </linearGradient>

        <linearGradient id="ea-tactical-band" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1d2a15" />
          <stop offset="50%" stopColor="#29391e" />
          <stop offset="100%" stopColor="#151e0f" />
        </linearGradient>

        {/* Text Paths on circular arcs */}
        {/* Top arc for "EJÉRCITO ARGENTINO" - Clockwise from left to right over top (R = 94, Center = 120, 120) */}
        <path
          id="ea-top-text-path"
          d="M 26 120 A 94 94 0 0 1 214 120"
          fill="none"
        />

        {/* Bottom arc for "NACIÓ CON LA PATRIA EN MAYO DE 1810" - Counter-clockwise from left to right along bottom (R = 92) */}
        <path
          id="ea-bottom-text-path"
          d="M 28 120 A 92 92 0 0 0 212 120"
          fill="none"
        />

        {/* Drop shadow for Sol de Mayo and Laurels */}
        <filter id="ea-subtle-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.75" />
        </filter>
      </defs>

      {/* 1. Outermost Base & Metallic Ring */}
      <circle cx="120" cy="120" r="118" fill="url(#ea-bg-vignette)" stroke="url(#ea-gold-rim)" strokeWidth="3" />
      <circle cx="120" cy="120" r="114" fill="none" stroke="#b8df47" strokeWidth="1" strokeOpacity="0.7" />

      {/* 2. Tactical Circular Band for Inscriptions */}
      <circle cx="120" cy="120" r="111" fill="url(#ea-tactical-band)" stroke="#3e5225" strokeWidth="1.5" />
      
      {/* Inner boundary of the inscription band */}
      <circle cx="120" cy="120" r="80" fill="#141c0e" stroke="url(#ea-gold-rim)" strokeWidth="2" />

      {/* 3. Circular Inscriptions */}
      {/* Top Text: EJÉRCITO ARGENTINO */}
      <text
        fill="#b8df47"
        fontSize="13.5"
        fontWeight="900"
        letterSpacing="2.8"
        fontFamily="'Chakra Petch', 'Arial Black', sans-serif"
        style={{ textShadow: '0 1px 3px rgba(0,0,0,0.9)' }}
      >
        <textPath href="#ea-top-text-path" startOffset="50%" textAnchor="middle">
          EJERCITO ARGENTINO
        </textPath>
      </text>

      {/* Bottom Text: NACIÓ CON LA PATRIA EN MAYO DE 1810 */}
      <text
        fill="#e5efd3"
        fontSize="8.8"
        fontWeight="800"
        letterSpacing="1.4"
        fontFamily="'Chakra Petch', sans-serif"
        style={{ textShadow: '0 1px 2px rgba(0,0,0,0.9)' }}
      >
        <textPath href="#ea-bottom-text-path" startOffset="50%" textAnchor="middle">
          NACIO CON LA PATRIA EN MAYO DE 1810
        </textPath>
      </text>

      {/* Flanking 5-point tactical separator stars */}
      <g fill="#d4af37" stroke="#795f19" strokeWidth="0.5">
        {/* Left star at 9 o'clock */}
        <polygon points="17,120 20.5,121.2 21.8,124.6 23.1,121.2 26.6,120 23.1,118.8 21.8,115.4 20.5,118.8" transform="translate(4, 0)" />
        {/* Right star at 3 o'clock */}
        <polygon points="213,120 216.5,121.2 217.8,124.6 219.1,121.2 222.6,120 219.1,118.8 217.8,115.4 216.5,118.8" transform="translate(-4, 0)" />
      </g>

      {/* 4. Central Shield Field */}
      {/* Inner background with subtle concentric target lines */}
      <circle cx="120" cy="120" r="78" fill="#162010" />
      <circle cx="120" cy="120" r="72" fill="none" stroke="#2a391a" strokeWidth="0.8" />

      {/* Central 16-Point Faceted Sol de Mayo */}
      <g transform="translate(120, 120)" filter="url(#ea-subtle-shadow)">
        {/* 16-point faceted starburst polygon: Outer R=74, Inner R=60 */}
        <path
          d="
            M 0.0 -74.0 L 12.0 -60.4 L 28.3 -68.4 L 34.2 -51.3 L 52.3 -52.3 L 51.3 -34.2 L 68.4 -28.3 L 60.4 -12.0
            L 74.0 0.0 L 60.4 12.0 L 68.4 28.3 L 51.3 34.2 L 52.3 52.3 L 34.2 51.3 L 28.3 68.4 L 12.0 60.4
            L 0.0 74.0 L -12.0 60.4 L -28.3 68.4 L -34.2 51.3 L -52.3 52.3 L -51.3 34.2 L -68.4 28.3 L -60.4 12.0
            L -74.0 0.0 L -60.4 -12.0 L -68.4 -28.3 L -51.3 -34.2 L -52.3 -52.3 L -34.2 -51.3 L -28.3 -68.4 L -12.0 -60.4 Z
          "
          fill="url(#ea-sun-gold)"
          stroke="#695116"
          strokeWidth="1.2"
        />

        {/* 16 Facet Shading triangles to give 3D beveled appearance */}
        {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((angle, idx) => {
          const rad = (angle * Math.PI) / 180;
          const nextRad = ((angle + 11.25) * Math.PI) / 180;
          const x1 = 74 * Math.sin(rad);
          const y1 = -74 * Math.cos(rad);
          const x2 = 60.4 * Math.sin(nextRad);
          const y2 = -60.4 * Math.cos(nextRad);
          return (
            <polygon
              key={`facet-${idx}`}
              points={`0,0 ${x1.toFixed(1)},${y1.toFixed(1)} ${x2.toFixed(1)},${y2.toFixed(1)}`}
              fill={idx % 2 === 0 ? "#745717" : "#fae68b"}
              fillOpacity={idx % 2 === 0 ? 0.35 : 0.22}
            />
          );
        })}

        {/* Radial Facet Division Lines */}
        {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((angle, i) => (
          <line
            key={`line-${i}`}
            x1="0"
            y1="0"
            x2={(74 * Math.sin((angle * Math.PI) / 180)).toFixed(1)}
            y2={(-74 * Math.cos((angle * Math.PI) / 180)).toFixed(1)}
            stroke="#5c4412"
            strokeWidth="0.9"
            strokeOpacity="0.8"
          />
        ))}

        {/* Intermediate rays between points and center */}
        {[11.25, 33.75, 56.25, 78.75, 101.25, 123.75, 146.25, 168.75, 191.25, 213.75, 236.25, 258.75, 281.25, 303.75, 326.25, 348.75].map((angle, i) => (
          <line
            key={`subline-${i}`}
            x1="0"
            y1="0"
            x2={(60.4 * Math.sin((angle * Math.PI) / 180)).toFixed(1)}
            y2={(-60.4 * Math.cos((angle * Math.PI) / 180)).toFixed(1)}
            stroke="#8a691e"
            strokeWidth="0.6"
            strokeOpacity="0.6"
          />
        ))}

        {/* 5. Laurel Wreath (Corona de Laureles) surrounding the central Sun */}
        {/* Left Laurel Branch */}
        <g stroke="#1a270f" strokeWidth="1" fill="#3f5922">
          {/* Main stem left */}
          <path d="M 0 45 C -24 43 -43 24 -44 -4 C -44 -24 -34 -39 -17 -50" fill="none" stroke="#253813" strokeWidth="2.2" strokeLinecap="round" />
          
          {/* Outer leaves left */}
          <path d="M -11 40 C -20 42 -26 37 -23 31 C -18 31 -13 34 -11 40 Z" />
          <path d="M -21 33 C -31 33 -35 27 -30 21 C -24 22 -20 27 -21 33 Z" />
          <path d="M -30 24 C -40 21 -43 14 -37 9 C -31 10 -28 16 -30 24 Z" />
          <path d="M -37 12 C -46 8 -47 0 -40 -5 C -35 -4 -34 4 -37 12 Z" />
          <path d="M -39 -2 C -48 -8 -47 -17 -39 -20 C -35 -17 -35 -9 -39 -2 Z" />
          <path d="M -36 -16 C -44 -23 -41 -32 -32 -35 C -29 -31 -31 -22 -36 -16 Z" />
          <path d="M -28 -29 C -35 -38 -29 -45 -22 -46 C -20 -42 -23 -35 -28 -29 Z" />
          <path d="M -18 -42 C -23 -51 -16 -57 -9 -57 C -7 -52 -12 -46 -18 -42 Z" />

          {/* Inner leaves left (highlighted) */}
          <path d="M -13 25 C -19 20 -17 13 -10 11 C -8 15 -10 21 -13 25 Z" fill="#587930" />
          <path d="M -21 10 C -27 4 -23 -4 -17 -4 C -14 0 -17 6 -21 10 Z" fill="#587930" />
          <path d="M -23 -5 C -28 -11 -23 -19 -17 -18 C -15 -14 -18 -8 -23 -5 Z" fill="#587930" />
          <path d="M -19 -20 C -23 -27 -17 -33 -11 -31 C -10 -27 -14 -22 -19 -20 Z" fill="#587930" />
        </g>

        {/* Right Laurel Branch */}
        <g stroke="#1a270f" strokeWidth="1" fill="#3f5922">
          {/* Main stem right */}
          <path d="M 0 45 C 24 43 43 24 44 -4 C 44 -24 34 -39 17 -50" fill="none" stroke="#253813" strokeWidth="2.2" strokeLinecap="round" />
          
          {/* Outer leaves right */}
          <path d="M 11 40 C 20 42 26 37 23 31 C 18 31 13 34 11 40 Z" />
          <path d="M 21 33 C 31 33 35 27 30 21 C 24 22 20 27 21 33 Z" />
          <path d="M 30 24 C 40 21 43 14 37 9 C 31 10 28 16 30 24 Z" />
          <path d="M 37 12 C 46 8 47 0 40 -5 C 35 -4 34 4 37 12 Z" />
          <path d="M 39 -2 C 48 -8 47 -17 39 -20 C 35 -17 35 -9 39 -2 Z" />
          <path d="M 36 -16 C 44 -23 41 -32 32 -35 C 29 -31 31 -22 36 -16 Z" />
          <path d="M 28 -29 C 35 -38 29 -45 22 -46 C 20 -42 23 -35 28 -29 Z" />
          <path d="M 18 -42 C 23 -51 16 -57 9 -57 C 7 -52 12 -46 18 -42 Z" />

          {/* Inner leaves right (highlighted) */}
          <path d="M 13 25 C 19 20 17 13 10 11 C 8 15 10 21 13 25 Z" fill="#587930" />
          <path d="M 21 10 C 27 4 23 -4 17 -4 C 14 0 17 6 21 10 Z" fill="#587930" />
          <path d="M 23 -5 C 28 -11 23 -19 17 -18 C 15 -14 18 -8 23 -5 Z" fill="#587930" />
          <path d="M 19 -20 C 23 -27 17 -33 11 -31 C 10 -27 14 -22 19 -20 Z" fill="#587930" />
        </g>

        {/* Ribbon / Knot at Laurel base */}
        <path d="M -8 43 C -5 40 5 40 8 43 C 11 47 5 51 0 50 C -5 51 -11 47 -8 43 Z" fill="#202e15" stroke="#b8df47" strokeWidth="1.2" />
        <circle cx="0" cy="46" r="2.5" fill="#d4af37" stroke="#68521a" strokeWidth="0.8" />

        {/* 6. Sol de Mayo Face Center Disc */}
        <circle cx="0" cy="0" r="32" fill="url(#ea-sun-gold)" stroke="#745a19" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="30" fill="none" stroke="#faea9d" strokeWidth="0.8" strokeOpacity="0.8" />

        {/* Sol de Mayo Historic Facial Features */}
        {/* Eyebrows */}
        <path d="M -16 -8 C -13 -12 -7 -12 -5 -8" stroke="#332408" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        <path d="M 5 -8 C 7 -12 13 -12 16 -8" stroke="#332408" strokeWidth="1.6" strokeLinecap="round" fill="none" />

        {/* Eyes (Historic Sol de Mayo Expression) */}
        {/* Left eye */}
        <path d="M -16 -4 C -12 -8 -7 -6 -5 -4 C -7 -1 -13 -1 -16 -4 Z" fill="#fffbe8" stroke="#332408" strokeWidth="1.2" />
        <ellipse cx="-10.5" cy="-4.5" rx="2.4" ry="2.2" fill="#281c06" />
        <circle cx="-11" cy="-5" r="0.6" fill="#ffffff" />
        <path d="M -15 0 C -12 2 -7 2 -5 0" stroke="#523c10" strokeWidth="0.8" fill="none" />

        {/* Right eye */}
        <path d="M 5 -4 C 7 -6 12 -8 16 -4 C 13 -1 7 -1 5 -4 Z" fill="#fffbe8" stroke="#332408" strokeWidth="1.2" />
        <ellipse cx="10.5" cy="-4.5" rx="2.4" ry="2.2" fill="#281c06" />
        <circle cx="10" cy="-5" r="0.6" fill="#ffffff" />
        <path d="M 5 0 C 7 2 12 2 15 0" stroke="#523c10" strokeWidth="0.8" fill="none" />

        {/* Nose */}
        <path d="M 0 -7 L -0.8 5 C -3.5 6 -4.5 9 -2.5 11 C -0.8 11.8 1.5 11.8 2.5 11 C 4.5 9 3.5 6 0.8 5" stroke="#40300a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />

        {/* Upper and Lower Lips */}
        <path d="M -8 16 C -4 18.5 4 18.5 8 16" stroke="#40300a" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M -5 16.5 C -1.5 19 1.5 19 5 16.5" stroke="#795b1b" strokeWidth="1" fill="none" />
        <path d="M -2.5 21 C 0 22.2 1.5 22.2 2.5 21" stroke="#523c10" strokeWidth="0.9" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  );
};
