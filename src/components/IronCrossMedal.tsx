import React from 'react';

export interface IronCrossMedalProps {
  levelNumber: number;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showRibbon?: boolean;
  isAwarded?: boolean;
  className?: string;
  showPinBack?: boolean;
  interactive?: boolean;
  onlyCross?: boolean;
}

export const getMedalModelInfo = (levelNumber: number) => {
  switch (levelNumber) {
    case 1:
      return {
        modelCode: 'EK-II',
        title: 'Cruz de Hierro de 2da Clase',
        subtitle: 'Con Cinta Pectoral Albiceleste',
        category: 'Segunda Clase con Anilla y Cinta',
        description: 'Cruz patée con núcleo de hierro dulce pavonado y marco estriado de plata 800, suspendida de la cinta con los colores nacionales celeste y blanco.',
        slpCode: 'SLP 1111',
        hasRibbon: true,
        hasOakLeaves: false,
        hasSwords: false,
        hasStar: false,
        goldAccents: false
      };
    case 2:
      return {
        modelCode: 'EK-I',
        title: 'Cruz de Hierro de 1ra Clase',
        subtitle: 'Cruz de Pecho con Broche y Pasador',
        category: 'Primera Clase con Broche de Gala',
        description: 'Cruz convexa de pecho para uniforme de combate y gala con prendedor de seguridad posterior, acompañada por el pasador reglamentario de cinta celeste y blanca.',
        slpCode: 'SLP 2222',
        hasRibbon: true,
        hasOakLeaves: false,
        hasSwords: false,
        hasStar: false,
        goldAccents: false
      };
    case 3:
      return {
        modelCode: 'RK-EL',
        title: 'Cruz con Hojas de Roble',
        subtitle: 'Aditamento de Roble y Cinta de Honor',
        category: 'Cruz con Hojas de Roble (Eichenlaub)',
        description: 'Distinción superior con manojo tridimensional de tres hojas de roble en plata de ley sobre la anilla de suspensión, con cinta albiceleste de cuello y pecho.',
        slpCode: 'SLP 2+2+2+2',
        hasRibbon: true,
        hasOakLeaves: true,
        hasSwords: false,
        hasStar: false,
        goldAccents: false
      };
    case 4:
      return {
        modelCode: 'RK-ELS',
        title: 'Cruz con Hojas de Roble y Espadas',
        subtitle: 'Espadas Cruzadas en Plata Bruñida',
        category: 'Hojas de Roble y Espadas Cruzadas',
        description: 'Aditamento de hojas de roble con dos espadas de caballería cruzadas bajo la anilla en plata maciza, en cinta de gala celeste y blanca con vivos de honor.',
        slpCode: 'SLP 3333',
        hasRibbon: true,
        hasOakLeaves: true,
        hasSwords: true,
        hasStar: false,
        goldAccents: false
      };
    case 5:
      return {
        modelCode: 'RK-GLD',
        title: 'Cruz con Hojas de Oro, Espadas y Sol',
        subtitle: 'Hojas de Oro y Sol de Mayo Radiante',
        category: 'Hojas de Oro, Espadas y Sol de Mayo',
        description: 'Condecoración extraordinaria con hojas de roble en oro, espadas cruzadas y el Sol de Mayo radiante incrustado en el centro del aditamento.',
        slpCode: 'SLP 3+3+3+3',
        hasRibbon: true,
        hasOakLeaves: true,
        hasSwords: true,
        hasStar: false,
        goldAccents: true
      };
    case 6:
      return {
        modelCode: 'GK-STERN',
        title: 'Estrella de la Gran Cruz',
        subtitle: 'Estrella de 8 Puntas de Estado Mayor',
        category: 'Estrella Radiante de Gran Cruz (Blücherstern)',
        description: 'Suprema condecoración de Estado Mayor: Gran Cruz de Hierro montada sobre una estrella radiante dorada y plateada de ocho puntas facetadas con banda albiceleste.',
        slpCode: 'SLP 4444',
        hasRibbon: true,
        hasOakLeaves: false,
        hasSwords: true,
        hasStar: true,
        goldAccents: true
      };
    default:
      return {
        modelCode: 'EK-II',
        title: 'Cruz de Hierro de 2da Clase',
        subtitle: 'Con Cinta Pectoral Albiceleste',
        category: 'Segunda Clase',
        description: 'Cruz patée con cinta reglamentaria celeste y blanca.',
        slpCode: 'SLP 1111',
        hasRibbon: true,
        hasOakLeaves: false,
        hasSwords: false,
        hasStar: false,
        goldAccents: false
      };
  }
};

export const IronCrossMedal: React.FC<IronCrossMedalProps> = ({
  levelNumber,
  size = 'md',
  showRibbon = true,
  isAwarded = true,
  className = '',
  showPinBack = false,
  interactive = false,
  onlyCross = false
}) => {
  const info = getMedalModelInfo(levelNumber);
  const isOnlyCross = onlyCross || !showRibbon;

  // Size scalers:
  // When isOnlyCross is true, the cross is centered at (100, 205) with diameter 108.
  // ViewBox '42 147 116 116' centers the cross with ~4px margin, allowing its arms to almost touch the frame borders.
  const dims = {
    xs: { w: 32, h: 32, viewBox: isOnlyCross ? '42 147 116 116' : (showRibbon ? '0 0 200 320' : '42 147 116 116') },
    sm: { w: 52, h: isOnlyCross ? 52 : (showRibbon ? 95 : 52), viewBox: isOnlyCross ? '42 147 116 116' : (showRibbon ? '0 0 200 320' : '42 147 116 116') },
    md: { w: 120, h: isOnlyCross ? 120 : (showRibbon ? 220 : 120), viewBox: isOnlyCross ? '42 147 116 116' : (showRibbon ? '0 0 200 320' : '42 147 116 116') },
    lg: { w: 180, h: isOnlyCross ? 180 : (showRibbon ? 310 : 180), viewBox: isOnlyCross ? '42 147 116 116' : (showRibbon ? '0 0 200 320' : '42 147 116 116') },
    xl: { w: 240, h: isOnlyCross ? 240 : (showRibbon ? 430 : 240), viewBox: isOnlyCross ? '42 147 116 116' : (showRibbon ? '0 0 200 320' : '42 147 116 116') }
  }[size];

  // Unique SVG IDs to avoid clashes if multiple medals render
  const idPrefix = `ek-${levelNumber}-${size}`;

  return (
    <div
      className={`inline-flex flex-col items-center select-none ${
        interactive ? 'hover:scale-105 transition-transform duration-300 cursor-pointer' : ''
      } ${!isAwarded ? 'grayscale opacity-45' : ''} ${className}`}
    >
      <svg
        width={dims.w}
        height={dims.h}
        viewBox={dims.viewBox}
        className="overflow-visible drop-shadow-2xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Metallic Silver Outer Rim Gradients */}
          <linearGradient id={`${idPrefix}-silver-frame`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f4f6f8" />
            <stop offset="25%" stopColor="#d5dbe1" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="75%" stopColor="#9da6b0" />
            <stop offset="100%" stopColor="#e8ecef" />
          </linearGradient>

          <linearGradient id={`${idPrefix}-silver-specular`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6e7781" />
            <stop offset="35%" stopColor="#e1e6ea" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="65%" stopColor="#cfd5dc" />
            <stop offset="100%" stopColor="#4a525d" />
          </linearGradient>

          {/* Black Iron Core Gradients */}
          <radialGradient id={`${idPrefix}-iron-core`} cx="50%" cy="50%" r="50%" fx="45%" fy="45%">
            <stop offset="0%" stopColor="#2c3035" />
            <stop offset="60%" stopColor="#181a1d" />
            <stop offset="100%" stopColor="#0b0d0f" />
          </radialGradient>

          <linearGradient id={`${idPrefix}-iron-rib`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3d4248" />
            <stop offset="50%" stopColor="#1a1c1f" />
            <stop offset="100%" stopColor="#0d0e10" />
          </linearGradient>

          {/* Gold Gradients for Levels 5 & 6 */}
          <linearGradient id={`${idPrefix}-gold`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f9e8a2" />
            <stop offset="30%" stopColor="#d8b146" />
            <stop offset="60%" stopColor="#fff3b8" />
            <stop offset="85%" stopColor="#b48821" />
            <stop offset="100%" stopColor="#f5dd82" />
          </linearGradient>

          <radialGradient id={`${idPrefix}-gold-radial`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff6ce" />
            <stop offset="50%" stopColor="#dfb84b" />
            <stop offset="100%" stopColor="#946f14" />
          </radialGradient>

          {/* Ribbon Argentine Flag Gradients */}
          <linearGradient id={`${idPrefix}-ribbon-celeste-left`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4678bb" />
            <stop offset="20%" stopColor="#629fe7" />
            <stop offset="60%" stopColor="#75b2fa" />
            <stop offset="100%" stopColor="#508bd4" />
          </linearGradient>

          <linearGradient id={`${idPrefix}-ribbon-white-center`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#dce3ea" />
            <stop offset="25%" stopColor="#ffffff" />
            <stop offset="70%" stopColor="#f7f9fa" />
            <stop offset="100%" stopColor="#ced5dd" />
          </linearGradient>

          <linearGradient id={`${idPrefix}-ribbon-celeste-right`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#508bd4" />
            <stop offset="40%" stopColor="#75b2fa" />
            <stop offset="80%" stopColor="#629fe7" />
            <stop offset="100%" stopColor="#4678bb" />
          </linearGradient>

          {/* Ribbon Grosgrain texture pattern */}
          <pattern id={`${idPrefix}-ribbon-texture`} width="10" height="4" patternUnits="userSpaceOnUse">
            <line x1="0" y1="1" x2="10" y2="1" stroke="rgba(0,0,0,0.12)" strokeWidth="0.8" />
            <line x1="0" y1="3" x2="10" y2="3" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" />
          </pattern>

          {/* Filter for realistic metal bevel & dropshadow */}
          <filter id={`${idPrefix}-drop`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#000000" floodOpacity="0.65" />
          </filter>
        </defs>

        {/* ================================================================= */}
        {/* RIBBON SECTION (CINTA CELESTE Y BLANCA DE LA BANDERA ARGENTINA) */}
        {/* ================================================================= */}
        {!isOnlyCross && showRibbon && (
          <g id="argentine-ribbon" filter={`url(#${idPrefix}-drop)`}>
            {/* Top Ribbon Suspension Bar / Broche de montaje */}
            <rect x="58" y="8" width="84" height="6" rx="2" fill={`url(#${idPrefix}-silver-frame)`} stroke="#444" strokeWidth="0.8" />
            <line x1="60" y1="11" x2="140" y2="11" stroke="#fff" strokeWidth="1" strokeOpacity="0.8" />

            {/* Main Ribbon Body (Argentine Flag Bands: Celeste - Blanco - Celeste) */}
            <g>
              {/* Left Band: Celeste (Sky Blue) */}
              <rect x="65" y="14" width="23" height="96" fill={`url(#${idPrefix}-ribbon-celeste-left)`} />
              
              {/* Center Band: White (Blanco Nacional) */}
              <rect x="88" y="14" width="24" height="96" fill={`url(#${idPrefix}-ribbon-white-center)`} />
              
              {/* Right Band: Celeste (Sky Blue) */}
              <rect x="112" y="14" width="23" height="96" fill={`url(#${idPrefix}-ribbon-celeste-right)`} />

              {/* Edge thin gold/silver borders on ribbon */}
              <rect x="63" y="14" width="2" height="96" fill={info.goldAccents ? `url(#${idPrefix}-gold)` : '#111'} />
              <rect x="135" y="14" width="2" height="96" fill={info.goldAccents ? `url(#${idPrefix}-gold)` : '#111'} />

              {/* Textured grosgrain overlay */}
              <rect x="65" y="14" width="70" height="96" fill={`url(#${idPrefix}-ribbon-texture)`} />

              {/* Ribbon fold / Triangular lower draping */}
              <polygon points="65,110 100,126 135,110 100,105" fill="rgba(0,0,0,0.22)" />
              <line x1="65" y1="110" x2="100" y2="126" stroke="#222" strokeWidth="0.8" />
              <line x1="135" y1="110" x2="100" y2="126" stroke="#222" strokeWidth="0.8" />
            </g>

            {/* Sol de Mayo on ribbon center (optional decorative miniature) */}
            {levelNumber >= 3 && (
              <g transform="translate(100, 56) scale(0.65)">
                <circle cx="0" cy="0" r="10" fill={`url(#${idPrefix}-gold)`} stroke="#855a00" strokeWidth="0.8" />
                {/* 16 rays */}
                {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((angle, i) => (
                  <polygon
                    key={i}
                    points="-1,-10 0,-16 1,-10"
                    fill={`url(#${idPrefix}-gold)`}
                    transform={`rotate(${angle})`}
                  />
                ))}
                {/* Face stylized dots */}
                <circle cx="-3" cy="-1.5" r="1" fill="#664400" />
                <circle cx="3" cy="-1.5" r="1" fill="#664400" />
                <path d="M -3 3 Q 0 5 3 3" fill="none" stroke="#664400" strokeWidth="0.8" strokeLinecap="round" />
              </g>
            )}

            {/* Suspension Ring / Anilla superior de plata */}
            <circle cx="100" cy="120" r="11" fill="none" stroke={`url(#${idPrefix}-silver-frame)`} strokeWidth="3" />
            <circle cx="100" cy="120" r="12" fill="none" stroke="#000" strokeWidth="0.5" strokeOpacity="0.4" />
          </g>
        )}

        {/* ================================================================= */}
        {/* MODEL SPECIAL ATTACHMENTS (HOJAS DE ROBLE, ESPADAS, ESTRELLA) */}
        {/* ================================================================= */}
        
        {/* LEVEL 6: 8-POINT RADIANT STAR OF THE GRAND CROSS (BLÜCHERSTERN) */}
        {!isOnlyCross && info.hasStar && (
          <g id="blucher-star-8points" transform="translate(100, 205)" filter={`url(#${idPrefix}-drop)`}>
            {/* 8 Primary faceted radiant beams */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((rot, idx) => (
              <g key={idx} transform={`rotate(${rot})`}>
                {/* Diamond faceted star rays */}
                <polygon points="0,0 -22,-45 0,-88 22,-45" fill={`url(#${idPrefix}-gold)`} stroke="#855a00" strokeWidth="0.8" />
                <polygon points="0,0 0,-88 22,-45" fill="#fff5c0" fillOpacity="0.4" />
                <polygon points="0,0 -22,-45 0,-88" fill="#7a5500" fillOpacity="0.3" />

                {/* Sub rays */}
                <polygon points="-12,-20 -28,-40 -12,-72 0,-35" fill={`url(#${idPrefix}-silver-frame)`} stroke="#555" strokeWidth="0.5" />
                <polygon points="12,-20 28,-40 12,-72 0,-35" fill={`url(#${idPrefix}-silver-specular)`} stroke="#555" strokeWidth="0.5" />
              </g>
            ))}
            {/* Star center gold ring */}
            <circle cx="0" cy="0" r="54" fill="none" stroke={`url(#${idPrefix}-gold)`} strokeWidth="4" />
          </g>
        )}

        {/* LEVEL 3, 4, 5: OAK LEAVES (EICHENLAUB) & SWORDS (SCHWERTER) */}
        {!isOnlyCross && info.hasOakLeaves && (
          <g id="oak-leaves-swords-attachment" transform="translate(100, 128)" filter={`url(#${idPrefix}-drop)`}>
            {/* Crossed Swords underneath leaves (Level 4 & 5) */}
            {info.hasSwords && (
              <g id="crossed-swords">
                {/* Sword 1 (diagonally left-up to right-down) */}
                <g transform="rotate(-36)">
                  {/* Blade */}
                  <polygon points="-1.5,-30 0,-35 1.5,-30 1.5,14 -1.5,14" fill={`url(#${idPrefix}-silver-frame)`} stroke="#333" strokeWidth="0.4" />
                  <line x1="0" y1="-34" x2="0" y2="13" stroke="#fff" strokeWidth="0.6" />
                  {/* Crossguard */}
                  <rect x="-7" y="14" width="14" height="2.5" rx="1" fill={info.goldAccents ? `url(#${idPrefix}-gold)` : `url(#${idPrefix}-silver-specular)`} />
                  {/* Hilt and Pommel */}
                  <rect x="-1.2" y="16.5" width="2.4" height="8" fill="#222" />
                  <circle cx="0" cy="26" r="2.5" fill={info.goldAccents ? `url(#${idPrefix}-gold)` : `url(#${idPrefix}-silver-specular)`} />
                </g>
                {/* Sword 2 (diagonally right-up to left-down) */}
                <g transform="rotate(36)">
                  {/* Blade */}
                  <polygon points="-1.5,-30 0,-35 1.5,-30 1.5,14 -1.5,14" fill={`url(#${idPrefix}-silver-frame)`} stroke="#333" strokeWidth="0.4" />
                  <line x1="0" y1="-34" x2="0" y2="13" stroke="#fff" strokeWidth="0.6" />
                  {/* Crossguard */}
                  <rect x="-7" y="14" width="14" height="2.5" rx="1" fill={info.goldAccents ? `url(#${idPrefix}-gold)` : `url(#${idPrefix}-silver-specular)`} />
                  {/* Hilt and Pommel */}
                  <rect x="-1.2" y="16.5" width="2.4" height="8" fill="#222" />
                  <circle cx="0" cy="26" r="2.5" fill={info.goldAccents ? `url(#${idPrefix}-gold)` : `url(#${idPrefix}-silver-specular)`} />
                </g>
              </g>
            )}

            {/* Three Sculpted Oak Leaves Cluster (Center leaf + Left + Right) */}
            <g id="oak-leaves-cluster">
              {/* Left Leaf */}
              <path
                d="M -3 6 C -9 4 -14 0 -17 -7 C -15 -10 -11 -9 -9 -8 C -14 -14 -10 -17 -5 -16 C -3 -12 -3 -8 -2 -4 Z"
                fill={info.goldAccents ? `url(#${idPrefix}-gold)` : `url(#${idPrefix}-silver-frame)`}
                stroke="#333"
                strokeWidth="0.6"
              />
              {/* Right Leaf */}
              <path
                d="M 3 6 C 9 4 14 0 17 -7 C 15 -10 11 -9 9 -8 C 14 -14 10 -17 5 -16 C 3 -12 3 -8 2 -4 Z"
                fill={info.goldAccents ? `url(#${idPrefix}-gold)` : `url(#${idPrefix}-silver-frame)`}
                stroke="#333"
                strokeWidth="0.6"
              />
              {/* Center Tall Leaf */}
              <path
                d="M 0 5 C -6 2 -7 -6 -7 -14 C -4 -16 -1 -15 0 -12 C 1 -15 4 -16 7 -14 C 7 -6 6 2 0 5 Z"
                fill={info.goldAccents ? `url(#${idPrefix}-gold)` : `url(#${idPrefix}-silver-specular)`}
                stroke="#333"
                strokeWidth="0.6"
              />
              {/* Acorns / Bellotas de roble decorativas */}
              <circle cx="-6" cy="3" r="2.2" fill={info.goldAccents ? '#ffea88' : '#e0e5eb'} stroke="#444" strokeWidth="0.5" />
              <circle cx="6" cy="3" r="2.2" fill={info.goldAccents ? '#ffea88' : '#e0e5eb'} stroke="#444" strokeWidth="0.5" />

              {/* Leaf Center Veins */}
              <path d="M 0 4 L 0 -12" stroke="#444" strokeWidth="0.8" />
              <path d="M -3 5 L -13 -6" stroke="#444" strokeWidth="0.6" />
              <path d="M 3 5 L 13 -6" stroke="#444" strokeWidth="0.6" />
            </g>

            {/* Level 5 Sol de Mayo in center of Oak Leaves */}
            {levelNumber === 5 && (
              <g transform="translate(0, -5) scale(0.6)">
                <circle cx="0" cy="0" r="6" fill={`url(#${idPrefix}-gold-radial)`} stroke="#8f6300" strokeWidth="0.8" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
                  <line key={i} x1="0" y1="-6" x2="0" y2="-10" stroke="#fce47c" strokeWidth="1.2" transform={`rotate(${a})`} />
                ))}
              </g>
            )}
          </g>
        )}

        {/* ================================================================= */}
        {/* THE IRON CROSS (CRUZ PATÉE DE HIERRO GERMANA) */}
        {/* ================================================================= */}
        <g id="the-iron-cross-medal" transform="translate(100, 205)" filter={`url(#${idPrefix}-drop)`}>
          
          {/* 1. LAYER 1: OUTER SILVER TIERED BEVELED RIM (MARCO DE PLATA ESTERLINA) */}
          {/* Flared cross patée outer contour path */}
          <path
            d="
              M -14 -14
              C -18 -32 -24 -46 -38 -54
              L 38 -54
              C 24 -46 18 -32 14 -14
              C 32 -18 46 -24 54 -38
              L 54 38
              C 46 24 32 18 14 14
              C 18 32 24 46 38 54
              L -38 54
              C -24 46 -18 32 -14 14
              C -32 18 -46 24 -54 38
              L -54 -38
              C -46 -24 -32 -18 -14 -14
              Z
            "
            fill={`url(#${idPrefix}-silver-frame)`}
            stroke="#26292d"
            strokeWidth="1.2"
          />

          {/* 2. LAYER 2: STEPPED RECESSED INNER RIM (BISELADO Y RANURADO CLÁSICO) */}
          <path
            d="
              M -12 -12
              C -16 -29 -21 -42 -34 -49
              L 34 -49
              C 21 -42 16 -29 12 -12
              C 29 -16 42 -21 49 -34
              L 49 34
              C 42 21 29 16 12 12
              C 16 29 21 42 34 49
              L -34 49
              C -21 42 -16 29 -12 12
              C -29 16 -42 21 -49 34
              L -49 -34
              C -42 -21 -29 -16 -12 -12
              Z
            "
            fill="none"
            stroke={`url(#${idPrefix}-silver-specular)`}
            strokeWidth="2.2"
          />

          {/* Fine inner border line */}
          <path
            d="
              M -10 -10
              C -14 -27 -19 -39 -31 -46
              L 31 -46
              C 19 -39 14 -27 10 -10
              C 27 -14 39 -19 46 -31
              L 46 31
              C 39 19 27 14 10 10
              C 14 27 19 39 31 46
              L -31 46
              C -19 39 -14 27 -10 10
              C -27 14 -39 19 -46 31
              L -46 -31
              C -39 -19 -27 -14 -10 -10
              Z
            "
            fill="none"
            stroke="#0d0f11"
            strokeWidth="1"
          />

          {/* 3. LAYER 3: BLACKENED MATTE IRON CORE (NÚCLEO DE HIERRO NEGRO FUNDIDO) */}
          <path
            d="
              M -9 -9
              C -13 -25 -17 -37 -29 -44
              L 29 -44
              C 17 -37 13 -25 9 -9
              C 25 -13 37 -17 44 -29
              L 44 29
              C 37 17 25 13 9 9
              C 13 25 17 37 29 44
              L -29 44
              C -17 37 -13 25 -9 9
              C -25 13 -37 17 -44 29
              L -44 -29
              C -37 -17 -25 -13 -9 -9
              Z
            "
            fill={`url(#${idPrefix}-iron-core)`}
          />

          {/* Cast iron rough texture ribs (fluting inside the iron arms) */}
          <g stroke="rgba(255,255,255,0.06)" strokeWidth="0.8">
            <line x1="0" y1="-10" x2="0" y2="-40" />
            <line x1="-5" y1="-12" x2="-14" y2="-41" />
            <line x1="5" y1="-12" x2="14" y2="-41" />

            <line x1="0" y1="10" x2="0" y2="40" />
            <line x1="-5" y1="12" x2="-14" y2="41" />
            <line x1="5" y1="12" x2="14" y2="41" />

            <line x1="-10" y1="0" x2="-40" y2="0" />
            <line x1="-12" y1="-5" x2="-41" y2="-14" />
            <line x1="-12" y1="5" x2="-41" y2="14" />

            <line x1="10" y1="0" x2="40" y2="0" />
            <line x1="12" y1="-5" x2="41" y2="-14" />
            <line x1="12" y1="5" x2="41" y2="14" />
          </g>

          {/* 4. CENTRAL RELIEF MOTIF / INSIGNIA */}
          {/* Upper Arm Motif: "IESE" or Royal Cypher style */}
          <text
            x="0"
            y="-27"
            fill={info.goldAccents ? `url(#${idPrefix}-gold)` : '#dce1e7'}
            fontFamily="monospace"
            fontSize="7"
            fontWeight="bold"
            textAnchor="middle"
            letterSpacing="1"
            className="select-none"
          >
            IESE
          </text>

          {/* Lower Arm Date Motif: 2026 / Level designation */}
          <text
            x="0"
            y="35"
            fill={info.goldAccents ? `url(#${idPrefix}-gold)` : '#dce1e7'}
            fontFamily="monospace"
            fontSize="8"
            fontWeight="bold"
            textAnchor="middle"
            letterSpacing="0.8"
            className="select-none"
          >
            2026
          </text>

          {/* Left / Right Arm Accents: "EA" (Ejército Argentino) & "NIVEL" */}
          <text
            x="-28"
            y="2.5"
            fill="rgba(215, 222, 230, 0.7)"
            fontFamily="sans-serif"
            fontSize="5.5"
            fontWeight="bold"
            textAnchor="middle"
          >
            EA
          </text>
          <text
            x="28"
            y="2.5"
            fill="rgba(215, 222, 230, 0.7)"
            fontFamily="sans-serif"
            fontSize="5.5"
            fontWeight="bold"
            textAnchor="middle"
          >
            N{levelNumber}
          </text>

          {/* CENTER DISC / SOL DE MAYO / LAUREL RELIEF */}
          <g id="center-seal">
            <circle cx="0" cy="0" r="14" fill={`url(#${idPrefix}-iron-rib)`} stroke={`url(#${idPrefix}-silver-specular)`} strokeWidth="1" />
            <circle cx="0" cy="0" r="12" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />

            {/* Central Argentine Sun of May (Sol de Mayo en relieve de plata u oro) */}
            <g transform="scale(0.8)">
              {/* Sun rays */}
              {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((deg, i) => (
                <line
                  key={i}
                  x1="0"
                  y1="-7"
                  x2="0"
                  y2={i % 2 === 0 ? '-12' : '-10'}
                  stroke={info.goldAccents ? `url(#${idPrefix}-gold)` : '#e9edf1'}
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  transform={`rotate(${deg})`}
                />
              ))}

              {/* Sun Core Disc */}
              <circle
                cx="0"
                cy="0"
                r="6.5"
                fill={info.goldAccents ? `url(#${idPrefix}-gold-radial)` : `url(#${idPrefix}-silver-specular)`}
                stroke="#222"
                strokeWidth="0.6"
              />

              {/* Stylized Sun Face in Relief */}
              <circle cx="-2" cy="-1.2" r="0.7" fill="#222" />
              <circle cx="2" cy="-1.2" r="0.7" fill="#222" />
              <path d="M -2 2 Q 0 3.5 2 2" fill="none" stroke="#222" strokeWidth="0.7" strokeLinecap="round" />
            </g>
          </g>

          {/* First Class (Level 2) Pin-Back Indicator if requested */}
          {showPinBack && (
            <g id="pin-back-attachment" opacity="0.9">
              <line x1="0" y1="-30" x2="0" y2="30" stroke="#ffd700" strokeWidth="2" strokeDasharray="3,2" />
              <circle cx="0" cy="-30" r="2.5" fill="#ffd700" />
              <circle cx="0" cy="30" r="2.5" fill="#ffd700" />
            </g>
          )}
        </g>
      </svg>

      {/* Ribbon Bar (Pasador de Gala de Diario) */}
      <div className="mt-2 flex flex-col items-center">
        <div
          className="w-16 h-4 rounded-sm border border-neutral-900 shadow-md flex overflow-hidden relative"
          title={`Pasador de Diario: ${info.title} (${info.slpCode})`}
        >
          {/* Celeste - Blanco - Celeste */}
          <div className="w-1/3 h-full bg-[#5B92E5]" />
          <div className="w-1/3 h-full bg-white flex items-center justify-center relative">
            {/* Miniature emblem on ribbon bar */}
            {levelNumber >= 3 && (
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-amber-600 shadow-xs" />
            )}
          </div>
          <div className="w-1/3 h-full bg-[#5B92E5]" />
          {/* Top gloss */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
        </div>
        <span className="text-[9px] font-mono text-[var(--text-muted)] tracking-wider mt-1 uppercase">
          {info.modelCode} • {info.slpCode}
        </span>
      </div>
    </div>
  );
};
