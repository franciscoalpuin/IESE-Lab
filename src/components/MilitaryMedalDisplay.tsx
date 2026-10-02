import React, { useState } from 'react';
import { Award, Shield, Printer, CheckCircle2, ChevronRight, Share2, Sparkles, UserCheck, Star, Layers, Eye } from 'lucide-react';
import confetti from 'canvas-confetti';
import { IronCrossMedal, getMedalModelInfo } from './IronCrossMedal';
import { LevelSyllabus } from '../types';

export interface MilitaryMedalDisplayProps {
  level: LevelSyllabus;
  studentName: string;
  studentUnit: string;
  isExamPassed: boolean;
  averageScore: number;
  scores: {
    listening?: number;
    reading?: number;
    useOfLanguage?: number;
    writing?: number;
    speaking?: number;
  };
  onSelectLevel?: (levelNumber: number) => void;
  onEditStudent?: () => void;
  onCondecorate?: () => void;
}

export const MilitaryMedalDisplay: React.FC<MilitaryMedalDisplayProps> = ({
  level,
  studentName,
  studentUnit,
  isExamPassed,
  averageScore,
  scores,
  onSelectLevel,
  onEditStudent,
  onCondecorate
}) => {
  const [selectedGalleryLevel, setSelectedGalleryLevel] = useState<number>(level.levelNumber);
  const [isCeremonyActive, setIsCeremonyActive] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const activeLevelInfo = getMedalModelInfo(selectedGalleryLevel);
  const currentLevelInfo = getMedalModelInfo(level.levelNumber);

  const handleCeremony = () => {
    setIsCeremonyActive(true);
    if (onCondecorate) onCondecorate();
    try {
      // Golden and celestial blue confetti celebration
      confetti({
        particleCount: 100,
        spread: 120,
        origin: { y: 0.6 },
        colors: ['#75AADB', '#FFFFFF', '#D4AF37', '#222222']
      });
    } catch {
      // ignored
    }
    setTimeout(() => setIsCeremonyActive(false), 3000);
  };

  const handleShare = () => {
    const text = `🎖️ Condecoración Militar: He sido condecorado con la ${currentLevelInfo.title} (${currentLevelInfo.slpCode}) de la Escuela de Idiomas del Ejército (IESE) - STANAG 6001.`;
    navigator.clipboard.writeText(text);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="space-y-8">
      {/* Top Header & Ceremony Banner */}
      <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-[#172412] via-[#213217] to-[#141e0f] border-2 border-[#8eb738]/60 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-2xl bg-[#8eb738]/20 border border-[#8eb738]/50 text-[#d4f66a] shadow-inner shrink-0">
            <Award className="w-8 h-8 text-[#d4f66a]" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#10170c] text-[#8ea775] border border-[#2f3f1e] uppercase">
                REPÚBLICA ARGENTINA • EJÉRCITO ARGENTINO
              </span>
              <span className="text-[10px] font-stencil font-bold px-2 py-0.5 rounded bg-[#b8df47] text-[#111a0c]">
                ORDEN DE LA CRUZ DE HIERRO ALBICELESTE
              </span>
              <span className="text-[10px] font-mono text-[#d4f66a] border border-[#8eb738]/40 px-2 py-0.5 rounded">
                STANAG 6001 • {currentLevelInfo.slpCode}
              </span>
            </div>
            <h2 className="font-stencil text-xl sm:text-2xl font-bold text-[#f2fcdb]">
              Condecoración Militar de {currentLevelInfo.title}
            </h2>
            <p className="text-xs text-[#a5bd8f] max-w-2xl leading-relaxed mt-1">
              Distinción oficial conferida por la Escuela de Idiomas del Ejército (IESE) con motivo de haber culminado las 120 horas de instrucción militar y superado el examen integral de las 5 áreas operacionales.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 shrink-0 w-full md:w-auto">
          <button
            type="button"
            onClick={handleCeremony}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#8cb92f] to-[#b8df47] hover:from-[#9ecc36] hover:to-[#c6ef4f] text-[#121c0b] font-stencil font-bold text-xs flex items-center justify-center space-x-1.5 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(184,223,71,0.5)] cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#121c0b]" />
            <span>{isCeremonyActive ? '¡Imponiendo Cruz!' : 'Imposición de Medalla'}</span>
          </button>

          <button
            type="button"
            onClick={() => window.print()}
            className="px-3.5 py-2.5 rounded-xl bg-[var(--surface-elevated)] hover:bg-[var(--border-subtle)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)] flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
            <span>Imprimir Pliego</span>
          </button>

          <button
            type="button"
            onClick={handleShare}
            className="px-3.5 py-2.5 rounded-xl bg-[var(--surface-elevated)] hover:bg-[var(--border-subtle)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copiedLink ? '¡Copiado!' : 'Compartir'}</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECCIÓN PRINCIPAL: ESTUCHE DE TERCIOPELO MILITAR & PLIEGO DE CONDECORACIÓN */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* ESTUCHE DE TERCIOPELO (VELVET PRESENTATION CASE) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full max-w-sm rounded-3xl bg-gradient-to-b from-[#1b1c1e] via-[#101114] to-[#08090a] p-6 border-4 border-[#33383f] shadow-[0_25px_60px_rgba(0,0,0,0.9),inset_0_2px_10px_rgba(255,255,255,0.1)] relative">
            {/* Brass case latch accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-16 h-3.5 rounded-b-md bg-gradient-to-b from-amber-200 via-amber-400 to-amber-600 border border-amber-800 shadow-md flex items-center justify-center">
              <div className="w-2 h-1 bg-amber-900 rounded-xs" />
            </div>

            {/* Inner Dark Navy Velvet Cushion */}
            <div className="rounded-2xl bg-gradient-to-b from-[#141b29] via-[#0d121c] to-[#090d15] p-6 border border-cyan-950/80 shadow-[inset_0_8px_30px_rgba(0,0,0,0.85)] flex flex-col items-center relative overflow-hidden">
              {/* Case badge header */}
              <div className="text-center mb-3 relative z-10">
                <span className="text-[10px] font-mono tracking-widest text-cyan-200/60 uppercase">
                  ESTUCHE OFICIAL DE DOTACIÓN
                </span>
                <h4 className="text-xs font-stencil font-bold tracking-wider text-neutral-200 uppercase mt-0.5">
                  {currentLevelInfo.category}
                </h4>
              </div>

              {/* THE MEDAL (Large XL Rendering) */}
              <div className="relative z-10 py-2">
                <IronCrossMedal
                  levelNumber={level.levelNumber}
                  size="xl"
                  showRibbon={true}
                  isAwarded={isExamPassed}
                  interactive={true}
                />
              </div>

              {/* Velvet Bed Ribbon Bar Slot */}
              <div className="mt-4 pt-3 border-t border-neutral-800/80 w-full text-center relative z-10">
                <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                  Pasador de Gala de Uniforme
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="px-3 py-1 rounded bg-[#06090e] border border-neutral-700/80 shadow-inner flex items-center space-x-2">
                    <div className="w-12 h-3.5 rounded-xs flex overflow-hidden border border-neutral-900">
                      <div className="w-1/3 bg-[#5B92E5]" />
                      <div className="w-1/3 bg-white flex items-center justify-center">
                        {level.levelNumber >= 3 && <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
                      </div>
                      <div className="w-1/3 bg-[#5B92E5]" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-amber-300">
                      {currentLevelInfo.modelCode}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Inscription Plate (Placa de latón grabada) */}
            <div className="mt-4 rounded-xl bg-gradient-to-r from-[#cbb16f] via-[#f7e6a7] to-[#ba9c56] p-3 text-center text-[#1c1606] shadow-md border border-[#8f7431]">
              <div className="text-[9px] font-mono font-bold uppercase tracking-widest opacity-80">
                ORDEN GENERAL DEL DÍA • IESE
              </div>
              <div className="font-stencil font-bold text-sm tracking-wider uppercase">
                {studentName || 'OFICIAL DEL EJÉRCITO'}
              </div>
              <div className="text-[10px] font-mono tracking-tight font-semibold">
                Nivel {level.levelNumber} ({level.cefr}) • {currentLevelInfo.slpCode}
              </div>
            </div>
          </div>
        </div>

        {/* ACTA & PLIEGO OFICIAL DE CONDECORACIÓN MILITAR */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-[#fcfdfa] text-[#12160f] rounded-3xl p-6 sm:p-10 border-4 border-[#2b3a1a] shadow-2xl relative overflow-hidden font-serif">
            {/* Watermark Logo */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
              <Shield className="w-96 h-96 text-[#2b3a1a]" />
            </div>

            <div className="relative z-10 space-y-5">
              {/* Header */}
              <div className="flex items-center justify-between border-b-2 border-[#384c24]/30 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-[#202c14] text-[#d4f66a] flex items-center justify-center font-stencil font-bold text-lg shadow-md shrink-0">
                    EA
                  </div>
                  <div>
                    <div className="text-[10px] tracking-widest font-mono text-[#4a5f32] uppercase font-bold">
                      República Argentina • Ejército Argentino
                    </div>
                    <div className="text-sm font-bold font-stencil uppercase tracking-wider text-[#1b2611]">
                      Escuela de Idiomas del Ejército (IESE)
                    </div>
                    <div className="text-[10px] font-mono text-[#576b3f]">
                      Comisión de Honores y Condecoraciones Militares
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-block px-2.5 py-1 rounded bg-[#202c14] text-[#d4f66a] font-stencil font-bold text-xs tracking-wider">
                    {currentLevelInfo.slpCode}
                  </span>
                  <div className="text-[9px] font-mono text-[#61744d] mt-1">
                    STANAG 6001 OTAN
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="text-center space-y-1">
                <div className="text-xs font-mono uppercase tracking-widest text-[#576b3f]">
                  Pliego Oficial de Otorgamiento
                </div>
                <h3 className="text-xl sm:text-2xl font-stencil font-bold tracking-wide text-[#1b2611]">
                  CONDECORACIÓN CON LA {currentLevelInfo.title.toUpperCase()}
                </h3>
                <div className="text-xs font-serif italic text-[#394828]">
                  "{currentLevelInfo.description}"
                </div>
              </div>

              {/* Recipient Text */}
              <div className="text-xs sm:text-sm text-[#2a351f] leading-relaxed bg-[#f6f8f0] p-4 rounded-2xl border border-[#3b4e25]/20">
                Por resolución del Comando y la Dirección de la Escuela de Idiomas del Ejército, se confiere formalmente la presente presea militar al:
                <div className="my-2 p-2.5 rounded-xl bg-white border border-[#384c24]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-[#62754c] block uppercase">Postulante Condecorado:</span>
                    <strong className="font-stencil text-base text-[#1b2611]">{studentName}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#62754c] block uppercase">Destino / Unidad:</span>
                    <strong className="font-mono text-xs text-[#2b3a1a]">{studentUnit}</strong>
                  </div>
                  {onEditStudent && (
                    <button
                      type="button"
                      onClick={onEditStudent}
                      className="text-[10px] font-mono px-2 py-1 rounded bg-[#e6eccf] hover:bg-[#d8e2be] text-[#2b3a1a] transition-colors cursor-pointer self-start sm:self-auto"
                    >
                      Modificar Datos
                    </button>
                  )}
                </div>
                Habiendo acreditado solvencia operacional en la totalidad de las competencias reglamentarias y completado el ciclo de 120 jornadas lectivas en lengua inglesa.
              </div>

              {/* Five Competencies Scores Table */}
              <div className="overflow-hidden rounded-xl border border-[#3b4e25]/30 bg-white text-xs font-mono">
                <div className="bg-[#202c14] text-[#f2fcdb] px-4 py-2 font-stencil text-xs flex justify-between">
                  <span>COMPETENCIAS MILITARES STANAG 6001</span>
                  <span>CALIFICACIÓN</span>
                </div>
                <div className="divide-y divide-[#3b4e25]/15">
                  <div className="px-4 py-1.5 flex justify-between">
                    <span>1. Comprensión Auditiva (Listening)</span>
                    <span className="font-bold text-[#202c14]">{scores.listening ?? 85}%</span>
                  </div>
                  <div className="px-4 py-1.5 flex justify-between">
                    <span>2. Comprensión Lectora (Reading)</span>
                    <span className="font-bold text-[#202c14]">{scores.reading ?? 90}%</span>
                  </div>
                  <div className="px-4 py-1.5 flex justify-between">
                    <span>3. Uso de la Lengua (Use of Language)</span>
                    <span className="font-bold text-[#202c14]">{scores.useOfLanguage ?? 80}%</span>
                  </div>
                  <div className="px-4 py-1.5 flex justify-between">
                    <span>4. Expresión Escrita (Writing)</span>
                    <span className="font-bold text-[#202c14]">{scores.writing ?? 85}%</span>
                  </div>
                  <div className="px-4 py-1.5 flex justify-between">
                    <span>5. Expresión Oral (Speaking)</span>
                    <span className="font-bold text-[#202c14]">{scores.speaking ?? 88}%</span>
                  </div>
                  <div className="px-4 py-2 bg-[#f0f4e6] flex justify-between font-bold text-sm">
                    <span className="text-[#1b2611]">PROMEDIO FINAL DE CONDECORACIÓN:</span>
                    <span className="text-[#202c14]">{averageScore > 0 ? `${averageScore}%` : '86%'} (HOMOLOGADO)</span>
                  </div>
                </div>
              </div>

              {/* Signatures & Seal */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 text-center text-[10px] font-mono text-[#384828]">
                <div className="border-t border-[#384828]/40 pt-2">
                  <div className="font-bold text-[#1b2611]">PRESIDENTE DE MESA</div>
                  <div>Tribunal Examinador IESE</div>
                </div>
                <div className="border-t border-[#384828]/40 pt-2">
                  <div className="font-bold text-[#1b2611]">FECHA DE IMPOSICIÓN</div>
                  <div>{new Date().toLocaleDateString('es-AR', { day: '2-digit', month: 'long', year: 'numeric' })}</div>
                </div>
                <div className="border-t border-[#384828]/40 pt-2 col-span-2 sm:col-span-1">
                  <div className="font-bold text-[#1b2611]">DIRECCIÓN GENERAL</div>
                  <div>Escuela de Idiomas del Ejército</div>
                </div>
              </div>

              {/* Footnote serial */}
              <div className="text-[9px] font-mono text-[#62754c] tracking-widest text-center pt-2">
                FOLIO MILITAR: MED-IESE-ST6001-L{level.levelNumber}-{Math.floor(100000 + Math.random() * 900000)} • REGISTRO HISTÓRICO DE CONDECORACIONES
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* EL MEDALLERO COMPLETO: MODELOS HISTÓRICOS DE CRUZ DE HIERRO CON CINTA ARGENTINA */}
      {/* ========================================================================= */}
      <div className="rounded-3xl bg-[var(--surface-base)] border border-[var(--border-subtle)] p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-4">
          <div>
            <div className="flex items-center space-x-2">
              <Layers className="w-5 h-5 text-[var(--accent-primary)]" />
              <h3 className="font-stencil text-lg font-bold text-[var(--text-primary)]">
                Medallero Oficial del Ejército • Modelos de Condecoración
              </h3>
            </div>
            <p className="text-xs text-[var(--text-secondary)] font-mono mt-1">
              Evolución heráldica de las 6 preseas militares: Cruz de hierro patée con marco de plata y cinta albiceleste argentina.
            </p>
          </div>

          <div className="text-xs font-mono text-[var(--text-secondary)]">
            Haga clic en cualquier medalla para examinar el modelo en detalle.
          </div>
        </div>

        {/* Gallery Grid: 6 Levels of Medals */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((lvlNum) => {
            const mInfo = getMedalModelInfo(lvlNum);
            const isSelected = selectedGalleryLevel === lvlNum;
            const isCurrentLvl = level.levelNumber === lvlNum;

            return (
              <div
                key={lvlNum}
                onClick={() => setSelectedGalleryLevel(lvlNum)}
                className={`p-3 rounded-2xl border transition-all cursor-pointer flex flex-col items-center justify-between relative group ${
                  isSelected
                    ? 'bg-[#1b2611] border-[#b8df47] shadow-xl ring-2 ring-[#b8df47]/40 scale-102'
                    : 'bg-[var(--surface-elevated)] border-[var(--border-subtle)] hover:border-[var(--accent-primary)]/50 hover:bg-[var(--surface-base)]'
                }`}
              >
                {/* Level badge */}
                <div className="w-full flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-stencil font-bold px-2 py-0.5 rounded ${
                    isCurrentLvl ? 'bg-[#b8df47] text-black' : 'bg-neutral-800 text-neutral-300'
                  }`}>
                    Nivel {lvlNum}
                  </span>
                  <span className="text-[9px] font-mono text-[var(--text-muted)]">
                    {mInfo.modelCode}
                  </span>
                </div>

                {/* Thumbnail Medal Render */}
                <div className="py-2">
                  <IronCrossMedal
                    levelNumber={lvlNum}
                    size="sm"
                    showRibbon={true}
                    isAwarded={lvlNum <= level.levelNumber && isExamPassed}
                    interactive={false}
                  />
                </div>

                {/* Metadata */}
                <div className="text-center w-full mt-2 pt-2 border-t border-[var(--border-subtle)]/60">
                  <div className="font-stencil text-xs font-bold text-[var(--text-primary)] truncate">
                    {mInfo.title}
                  </div>
                  <div className="text-[10px] font-mono text-[var(--text-muted)] truncate">
                    {mInfo.slpCode}
                  </div>
                </div>

                {isCurrentLvl && (
                  <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#b8df47] text-black flex items-center justify-center text-[10px] font-bold shadow-md">
                    ★
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Medal Detail Inspector Box */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-[#172210] to-[#121b0d] border border-[#52732a] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="shrink-0 bg-black/40 p-2 rounded-2xl border border-white/10 shadow-inner">
              <IronCrossMedal
                levelNumber={selectedGalleryLevel}
                size="md"
                showRibbon={true}
                isAwarded={true}
              />
            </div>
            <div className="space-y-1 text-left">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-stencil font-bold px-2 py-0.5 rounded bg-[#b8df47] text-black">
                  MODELO {activeLevelInfo.modelCode}
                </span>
                <span className="text-xs font-mono text-[#d4f66a]">
                  {activeLevelInfo.slpCode} • STANAG 6001
                </span>
              </div>
              <h4 className="font-stencil text-lg font-bold text-[#f2fcdb]">
                {activeLevelInfo.title}
              </h4>
              <p className="text-xs text-[#a7c091] max-w-xl leading-relaxed">
                {activeLevelInfo.description}
              </p>
              <div className="text-[11px] font-mono text-[#8ca375] pt-1">
                <strong>Composición:</strong> Marco de plata 800 con alma de hierro pavonado y cinta de muaré albiceleste con pasador reglamentario.
              </div>
            </div>
          </div>

          {onSelectLevel && selectedGalleryLevel !== level.levelNumber && (
            <button
              type="button"
              onClick={() => onSelectLevel(selectedGalleryLevel)}
              className="px-4 py-2.5 rounded-xl bg-[var(--surface-elevated)] hover:bg-[#b8df47] hover:text-black text-xs font-stencil font-bold text-[var(--text-primary)] border border-[var(--border-subtle)] transition-all cursor-pointer shrink-0"
            >
              Ir a Instrucción Nivel {selectedGalleryLevel}
            </button>
          )}
        </div>
      </div>

      {/* Next Level Progression Option */}
      {level.levelNumber < 6 && (
        <div className="p-4 rounded-2xl bg-[var(--surface-base)] border border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[var(--text-secondary)] font-mono">
            Habiendo obtenido la condecoración de Nivel {level.levelNumber}, el oficial queda habilitado para ascender al <strong>Nivel {level.levelNumber + 1}</strong> para aspirar a la siguiente presea militar.
          </div>

          {onSelectLevel && (
            <button
              type="button"
              onClick={() => onSelectLevel(level.levelNumber + 1)}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#6e8f2a] to-[#9ac63b] hover:from-[#7ea330] hover:to-[#abd942] text-black font-stencil font-bold text-xs flex items-center space-x-2 transition-all shadow-md cursor-pointer shrink-0"
            >
              <span>Avanzar al Nivel {level.levelNumber + 1}</span>
              <ChevronRight className="w-4 h-4 text-black" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};
