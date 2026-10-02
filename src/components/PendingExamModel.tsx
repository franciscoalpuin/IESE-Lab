import React from 'react';
import { Shield, FileQuestion, AlertCircle, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

interface PendingExamModelProps {
  axisTitle: string;
  axisEnglish: string;
  levelNumber: number;
  cefr: string;
}

export const PendingExamModel: React.FC<PendingExamModelProps> = ({
  axisTitle,
  axisEnglish,
  levelNumber,
  cefr
}) => {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Official Header placeholder */}
      <div className="bg-[#141d0e]/95 border-2 border-[#3b4e28] rounded-2xl p-5 sm:p-7 shadow-xl backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#314320] pb-4 mb-5">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#1d2913] border border-[#445b2a] flex items-center justify-center text-[#b8df47] shadow-inner">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[11px] font-stencil uppercase tracking-widest text-[#8ea478]">
                Escuela de Idiomas del Ejército • IESE
              </div>
              <h1 className="text-base sm:text-xl font-bold font-stencil text-[#b8df47] tracking-wider uppercase">
                Evaluación Oficial – {axisTitle}
              </h1>
              <div className="text-xs text-[#cadbb8] font-tactical">
                {axisEnglish} • Nivel {levelNumber} ({cefr}) • Estándar STANAG 6001
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-[#1a2512] border border-[#3e5326] text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="text-[#a6ba90]">Estado:</span>
            <span className="text-[#d8e874] font-semibold">Pendiente de Modelo</span>
          </div>
        </div>

        {/* Empty State Banner */}
        <div className="p-8 sm:p-12 rounded-xl bg-[#0d1409]/90 border border-[#2b3a1a] text-center flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-[#192412] border border-[#3c5026] flex items-center justify-center text-[#9eb286] mb-4">
            <FileQuestion className="w-8 h-8 text-[#b8df47]" />
          </div>

          <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider font-semibold bg-[#263717] text-[#b8df47] border border-[#49632d] mb-3">
            Espacio Reservado para Examen Oficial
          </span>

          <h2 className="text-lg sm:text-xl font-bold font-stencil text-white tracking-wide uppercase max-w-lg mb-2">
            Sin modelo de examen cargado para este eje
          </h2>

          <p className="text-xs sm:text-sm text-[#a8bc94] max-w-xl leading-relaxed mb-6 font-sans">
            De acuerdo con los lineamientos de la cátedra, este módulo de evaluación oficial permanecerá vacío hasta que proporciones los modelos de examen correspondientes para <strong>{axisTitle}</strong> (Nivel {levelNumber}).
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg w-full text-left text-xs text-[#c4d6b0] bg-[#131b0e] p-4 rounded-xl border border-[#2d3d1c]">
            <div className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#b8df47] shrink-0 mt-0.5" />
              <span><strong>Desarrollo Teórico:</strong> Plenamente activo en la pestaña teórica del eje.</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#b8df47] shrink-0 mt-0.5" />
              <span><strong>Desarrollo Práctico:</strong> Actividades y ejercicios listos para entrenamiento.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
