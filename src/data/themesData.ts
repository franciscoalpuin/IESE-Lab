export interface ColorScaleStep {
  step: number;
  hex: string;
  name: string;
  role: string;
}

export interface MilitaryTheme {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  isDefault?: boolean;
  colorScale: ColorScaleStep[];
  colors: {
    bgBase: string;
    surfaceBase: string;
    surfaceElevated: string;
    headerBg: string;
    headerSurface: string;
    headerText: string;
    textPrimary: string;
    textSecondary: string;
    textMuted: string;
    accentPrimary: string;
    accentHover: string;
    accentActive: string;
    statusSuccess: string;
    borderSubtle: string;
    borderCard: string;
    bgOverlayRgb: string;
    bgOverlayOpacity: string;
  };
  previewColors: [string, string, string, string, string];
}

export const MILITARY_THEMES: MilitaryTheme[] = [
  {
    id: 'editorial-lab',
    name: 'Editorial Lab (Modelo Prolijo)',
    subtitle: 'Gris Claro & Azul Oscuro',
    description: 'Estética limpia, prolija y académica con cuadros en gris claro, ventanas nítidas y tipografía en azul oscuro de alta legibilidad.',
    isDefault: true,
    colorScale: [
      { step: 1, hex: '#0c1a2e', name: 'Azul Mando', role: 'Barra de Navegación' },
      { step: 2, hex: '#f1f5f9', name: 'Gris Claro Base', role: 'Fondo de la Plataforma' },
      { step: 3, hex: '#f8fafc', name: 'Gris Claro Cuadros', role: 'Tarjetas y Ventanas' },
      { step: 4, hex: '#1e3a8a', name: 'Azul Oscuro', role: 'Acento y Botones' },
      { step: 5, hex: '#172554', name: 'Azul Profundo', role: 'Texto Principal' },
    ],
    colors: {
      bgBase: '#f1f5f9',
      surfaceBase: '#ffffff',
      surfaceElevated: '#f1f5f9',
      headerBg: '#0c1a2e',
      headerSurface: '#162b44',
      headerText: '#f8fafc',
      textPrimary: '#172554',
      textSecondary: '#1e3a8a',
      textMuted: '#1e40af',
      accentPrimary: '#1e3a8a',
      accentHover: '#172554',
      accentActive: '#0f172a',
      statusSuccess: '#059669',
      borderSubtle: '#cbd5e1',
      borderCard: '#cbd5e1',
      bgOverlayRgb: '241, 245, 249',
      bgOverlayOpacity: '1.0',
    },
    previewColors: ['#0c1a2e', '#f8fafc', '#f1f5f9', '#1e3a8a', '#172554']
  },
  {
    id: 'basic-iese',
    name: 'Linear Obsidian (Modern Tech)',
    subtitle: 'Obsidiana & Azul Eléctrico',
    description: 'Skin moderno en modo oscuro con fondo obsidiana neutro descansado, tarjetas con micro-bordes de 1px y tipografía de alta legibilidad.',
    colorScale: [
      { step: 1, hex: '#090d16', name: 'Obsidiana Base', role: 'Fondo de la Plataforma' },
      { step: 2, hex: '#111827', name: 'Gris Comando 900', role: 'Superficie de Tarjetas' },
      { step: 3, hex: '#1f293d', name: 'Pizarra Elevada', role: 'Bordes & Divisiones' },
      { step: 4, hex: '#3b82f6', name: 'Azul Eléctrico NATO', role: 'Acento Primario' },
      { step: 5, hex: '#f8fafc', name: 'Blanco Puro', role: 'Texto Principal' },
    ],
    colors: {
      bgBase: '#090d16',
      surfaceBase: '#111827',
      surfaceElevated: '#1e293b',
      headerBg: '#060910',
      headerSurface: '#151d2c',
      headerText: '#f8fafc',
      textPrimary: '#f8fafc',
      textSecondary: '#94a3b8',
      textMuted: '#64748b',
      accentPrimary: '#3b82f6',
      accentHover: '#60a5fa',
      accentActive: '#2563eb',
      statusSuccess: '#10b981',
      borderSubtle: '#1f293d',
      borderCard: '#27354d',
      bgOverlayRgb: '9, 13, 22',
      bgOverlayOpacity: '1.0',
    },
    previewColors: ['#090d16', '#111827', '#1f293d', '#3b82f6', '#f8fafc']
  },
  {
    id: 'desert-storm',
    name: 'Desert Operations (Arena Clara)',
    subtitle: 'Arena Clara & Khaki Desértico',
    description: 'Skin militar de despliegue en ambiente árido. Fondo en color arena clara y khaki desértico de alta claridad diurna, tarjetas nítidas, acentos en ámbar táctico y tipografía en tierra profunda de máximo contraste.',
    colorScale: [
      { step: 1, hex: '#f5eee6', name: 'Arena Clara Base', role: 'Fondo de la Plataforma' },
      { step: 2, hex: '#ffffff', name: 'Blanco Arena', role: 'Superficie de Tarjetas' },
      { step: 3, hex: '#d6c5b0', name: 'Khaki Táctico', role: 'Bordes & División' },
      { step: 4, hex: '#c25e00', name: 'Ámbar Desértico', role: 'Acento Primario' },
      { step: 5, hex: '#2b2218', name: 'Tierra Profunda', role: 'Texto Principal' },
    ],
    colors: {
      bgBase: '#f5eee6',
      surfaceBase: '#ffffff',
      surfaceElevated: '#ede3d5',
      headerBg: '#2c2219',
      headerSurface: '#403225',
      headerText: '#fef3c7',
      textPrimary: '#2b2218',
      textSecondary: '#5a4635',
      textMuted: '#8a725c',
      accentPrimary: '#c25e00',
      accentHover: '#9e4b00',
      accentActive: '#783700',
      statusSuccess: '#16a34a',
      borderSubtle: '#dfd2c2',
      borderCard: '#cfc0ad',
      bgOverlayRgb: '245, 238, 230',
      bgOverlayOpacity: '1.0',
    },
    previewColors: ['#2c2219', '#f5eee6', '#ffffff', '#c25e00', '#2b2218']
  },
  {
    id: 'whitehall-light',
    name: 'Estado Mayor (Whitehall Light)',
    subtitle: 'Blanco Papiro & Azul Royal Británico',
    description: 'Skin diurno de alta claridad y contraste editorial para estudio en aulas iluminadas. Tarjetas blancas puras sobre lienzo papiro suave.',
    colorScale: [
      { step: 1, hex: '#f8fafc', name: 'Lienzo Papiro', role: 'Fondo Base Claro' },
      { step: 2, hex: '#ffffff', name: 'Blanco Carta', role: 'Superficie de Tarjetas' },
      { step: 3, hex: '#e2e8f0', name: 'Gris Borde Suave', role: 'Bordes Delicados' },
      { step: 4, hex: '#2563eb', name: 'Azul Real Académico', role: 'Acento Primario' },
      { step: 5, hex: '#0f172a', name: 'Azul Noche Tipográfico', role: 'Texto Principal' },
    ],
    colors: {
      bgBase: '#f8fafc',
      surfaceBase: '#ffffff',
      surfaceElevated: '#f1f5f9',
      headerBg: '#1e293b',
      headerSurface: '#334155',
      headerText: '#ffffff',
      textPrimary: '#0f172a',
      textSecondary: '#334155',
      textMuted: '#64748b',
      accentPrimary: '#2563eb',
      accentHover: '#1d4ed8',
      accentActive: '#1e40af',
      statusSuccess: '#059669',
      borderSubtle: '#e2e8f0',
      borderCard: '#cbd5e1',
      bgOverlayRgb: '248, 250, 252',
      bgOverlayOpacity: '1.0',
    },
    previewColors: ['#f8fafc', '#ffffff', '#e2e8f0', '#2563eb', '#0f172a']
  },
  {
    id: 'vercel-onyx',
    name: 'Vercel Onyx (Minimalista Puro)',
    subtitle: 'Negro Carbón & Titanio Puro',
    description: 'Skin minimalista monocromático contemporáneo. Negro carbón mate con tipografía en titanio puro, eliminando cualquier distracción cromática.',
    colorScale: [
      { step: 1, hex: '#09090b', name: 'Carbón 950', role: 'Fondo Base' },
      { step: 2, hex: '#121215', name: 'Carbón 900', role: 'Superficie' },
      { step: 3, hex: '#27272a', name: 'Borde Zinc', role: 'Bordes Sutiles' },
      { step: 4, hex: '#e4e4e7', name: 'Titanio Acento', role: 'Acento Primario' },
      { step: 5, hex: '#fafafa', name: 'Blanco Titanio', role: 'Texto Principal' },
    ],
    colors: {
      bgBase: '#09090b',
      surfaceBase: '#121215',
      surfaceElevated: '#1c1c21',
      headerBg: '#050507',
      headerSurface: '#18181b',
      headerText: '#fafafa',
      textPrimary: '#fafafa',
      textSecondary: '#a1a1aa',
      textMuted: '#71717a',
      accentPrimary: '#e4e4e7',
      accentHover: '#ffffff',
      accentActive: '#a1a1aa',
      statusSuccess: '#22c55e',
      borderSubtle: '#27272a',
      borderCard: '#3f3f46',
      bgOverlayRgb: '9, 9, 11',
      bgOverlayOpacity: '1.0',
    },
    previewColors: ['#09090b', '#121215', '#27272a', '#e4e4e7', '#fafafa']
  },
  {
    id: 'tactical-stealth',
    name: 'Tactical Stealth (Pino Operativo)',
    subtitle: 'Pino Táctico & Esmeralda Militar',
    description: 'Skin militar refinado y sobrio de baja visibilidad. Verde bosque profundo y elegante con acentos en esmeralda táctico mate.',
    colorScale: [
      { step: 1, hex: '#0b120f', name: 'Pino Profundo', role: 'Fondo Base' },
      { step: 2, hex: '#121e19', name: 'Follaje Nocturno', role: 'Superficie' },
      { step: 3, hex: '#1f362c', name: 'Borde Táctico', role: 'Bordes Delicados' },
      { step: 4, hex: '#10b981', name: 'Esmeralda Ops', role: 'Acento Primario' },
      { step: 5, hex: '#f0fdf4', name: 'Blanco Menta', role: 'Texto Principal' },
    ],
    colors: {
      bgBase: '#0b120f',
      surfaceBase: '#121e19',
      surfaceElevated: '#1a2b24',
      headerBg: '#070c0a',
      headerSurface: '#162620',
      headerText: '#f0fdf4',
      textPrimary: '#f0fdf4',
      textSecondary: '#a7f3d0',
      textMuted: '#6ee7b7',
      accentPrimary: '#10b981',
      accentHover: '#34d399',
      accentActive: '#059669',
      statusSuccess: '#10b981',
      borderSubtle: '#1f362c',
      borderCard: '#274438',
      bgOverlayRgb: '11, 18, 15',
      bgOverlayOpacity: '1.0',
    },
    previewColors: ['#0b120f', '#121e19', '#1f362c', '#10b981', '#f0fdf4']
  }
];

export const THEME_STORAGE_KEY = 'iese_military_theme_id_v5';

export function getActiveThemeId(): string {
  if (typeof window === 'undefined') return 'editorial-lab';
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === 'nato-command') return 'desert-storm';
    if (saved && MILITARY_THEMES.some(t => t.id === saved)) {
      return saved;
    }
  } catch {
    // fallback
  }
  return 'editorial-lab';
}

export function applyTheme(themeId: string): MilitaryTheme {
  const targetId = themeId === 'nato-command' ? 'desert-storm' : themeId;
  const theme = MILITARY_THEMES.find(t => t.id === targetId) || MILITARY_THEMES[0];
  
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme.id);
    } catch {
      // ignore
    }

    const root = document.documentElement;
    root.style.setProperty('--bg-base', theme.colors.bgBase);
    root.style.setProperty('--surface-base', theme.colors.surfaceBase);
    root.style.setProperty('--surface-elevated', theme.colors.surfaceElevated);
    root.style.setProperty('--header-bg', theme.colors.headerBg);
    root.style.setProperty('--header-surface', theme.colors.headerSurface);
    root.style.setProperty('--header-text', theme.colors.headerText);
    root.style.setProperty('--text-primary', theme.colors.textPrimary);
    root.style.setProperty('--text-secondary', theme.colors.textSecondary);
    root.style.setProperty('--text-muted', theme.colors.textMuted);
    root.style.setProperty('--accent-primary', theme.colors.accentPrimary);
    root.style.setProperty('--accent-hover', theme.colors.accentHover);
    root.style.setProperty('--accent-active', theme.colors.accentActive);
    root.style.setProperty('--status-success', theme.colors.statusSuccess);
    root.style.setProperty('--border-subtle', theme.colors.borderSubtle);
    root.style.setProperty('--border-card', theme.colors.borderCard);
    root.style.setProperty('--bg-overlay-rgb', theme.colors.bgOverlayRgb);
    root.style.setProperty('--bg-overlay-opacity', theme.colors.bgOverlayOpacity);

    // Titular palette variables sync
    root.style.setProperty('--titular-blue-dark', theme.colorScale[0]?.hex || '#0c1a2e');
    root.style.setProperty('--titular-blue-mid', theme.colorScale[1]?.hex || '#ffffff');
    root.style.setProperty('--titular-celeste', theme.colorScale[2]?.hex || '#f0f4f8');
    root.style.setProperty('--titular-pale', theme.colorScale[3]?.hex || '#0284c7');
    root.style.setProperty('--titular-white', theme.colorScale[4]?.hex || '#0f172a');

    // Legacy tokens sync
    root.style.setProperty('--camo-dark', theme.colors.bgBase);
    root.style.setProperty('--camo-olive', theme.colors.surfaceBase);
    root.style.setProperty('--camo-mid', theme.colors.surfaceElevated);
    root.style.setProperty('--stencil-lime', theme.colors.accentPrimary);
    root.style.setProperty('--military-sand', theme.colors.textPrimary);

    root.setAttribute('data-theme', theme.id);
  }

  return theme;
}
