import React, { useState, useRef } from 'react';
import { UserProgress, LevelSyllabus, MilitaryProfile } from '../types';
import { 
  X, 
  Award, 
  CheckCircle, 
  Shield, 
  RotateCcw, 
  Clock, 
  BookOpen, 
  Calendar, 
  ChevronRight, 
  Camera, 
  Trash2, 
  Edit3, 
  User, 
  Check, 
  MapPin, 
  AlertCircle
} from 'lucide-react';
import { IronCrossMedal, getMedalModelInfo } from './IronCrossMedal';

interface ProgressModalProps {
  isOpen: boolean;
  onClose: () => void;
  progress: UserProgress;
  levels: LevelSyllabus[];
  currentLevelNumber?: number;
  onSelectLevel?: (level: LevelSyllabus) => void;
  onResetProgress: () => void;
  onSimulateInactivity?: () => void;
  onSimulateRecentActivity?: () => void;
  onOpenCalendar?: () => void;
  onNavigateToExam?: (lvlNumber: number) => void;
  onUpdateProfile?: (profile: MilitaryProfile) => void;
  onRevokeExam?: (lvlNumber: number) => void;
  onResetAllExams?: () => void;
}

const MILITARY_RANKS = [
  'Subteniente',
  'Teniente',
  'Teniente Primero',
  'Capitán',
  'Mayor',
  'Teniente Coronel',
  'Coronel',
  'Coronel Mayor',
  'General de Brigada',
  'General de División',
  'Teniente General',
  'Cabo',
  'Cabo Primero',
  'Sargento',
  'Sargento Primero',
  'Sargento Ayudante',
  'Suboficial Principal',
  'Suboficial Mayor',
  'Soldado Voluntario',
  'Cadete del CMN',
  'Aspirante de la ESSC',
  'Personal Civil'
];

export const ProgressModal: React.FC<ProgressModalProps> = ({
  isOpen,
  onClose,
  progress,
  levels,
  currentLevelNumber = 1,
  onSelectLevel,
  onResetProgress,
  onSimulateInactivity,
  onSimulateRecentActivity,
  onOpenCalendar,
  onNavigateToExam,
  onUpdateProfile,
  onRevokeExam,
  onResetAllExams
}) => {
  const [activeTab, setActiveTab] = useState<'record' | 'medals'>('record');
  const [selectedMedalLevel, setSelectedMedalLevel] = useState<number>(currentLevelNumber || 1);
  const [isEditingProfile, setIsEditingProfile] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Initialize military profile from progress or localStorage
  const [profile, setProfile] = useState<MilitaryProfile>(() => {
    if (progress.profile) return progress.profile;
    try {
      const saved = localStorage.getItem('iese_military_profile');
      if (saved) return JSON.parse(saved);
    } catch {
      // Ignored
    }
    const studentNameStored = localStorage.getItem('iese_student_name') || '';
    const studentUnitStored = localStorage.getItem('iese_student_unit') || 'Ejército Argentino';

    const parts = studentNameStored.trim().split(' ').filter(Boolean);
    let rank = 'Teniente Primero';
    let firstName = '';
    let lastName = '';

    if (parts.length > 2) {
      rank = parts.slice(0, -2).join(' ') || 'Teniente Primero';
      firstName = parts[parts.length - 2];
      lastName = parts[parts.length - 1];
    } else if (parts.length === 2) {
      firstName = parts[0];
      lastName = parts[1];
    } else if (parts.length === 1) {
      lastName = parts[0];
    }

    return {
      rank,
      firstName,
      lastName,
      destination: studentUnitStored,
      photoUrl: ''
    };
  });

  // Local draft state for editing form
  const [draftRank, setDraftRank] = useState<string>(profile.rank || 'Teniente Primero');
  const [draftCustomRank, setDraftCustomRank] = useState<string>('');
  const [draftFirstName, setDraftFirstName] = useState<string>(profile.firstName || '');
  const [draftLastName, setDraftLastName] = useState<string>(profile.lastName || '');
  const [draftDestination, setDraftDestination] = useState<string>(profile.destination || '');
  const [draftPhotoUrl, setDraftPhotoUrl] = useState<string>(profile.photoUrl || '');
  const [draftFileNumber, setDraftFileNumber] = useState<string>(profile.fileNumber || '');
  const [photoError, setPhotoError] = useState<string | null>(null);

  if (!isOpen) return null;

  const totalExercisesCompleted = progress.completedExerciseIds.length;
  const passedLevelsCount = Object.values(progress.levelExamPassed).filter(Boolean).length;

  // Calculate days since last interaction
  const lastInteractionMs = progress.lastInteractionDate ? new Date(progress.lastInteractionDate).getTime() : null;
  const daysSinceInteraction = lastInteractionMs && !isNaN(lastInteractionMs)
    ? Math.floor((Date.now() - lastInteractionMs) / (1000 * 60 * 60 * 24))
    : null;

  const isInactiveOver3Days = daysSinceInteraction !== null && daysSinceInteraction >= 3;

  // Compute military student qualification badge
  let qualificationBadge = 'Cadete / Alumno IESE';
  if (passedLevelsCount >= 5) {
    qualificationBadge = 'Oficial de Estado Mayor Combinado (STANAG 6001 Proficient)';
  } else if (passedLevelsCount >= 3) {
    qualificationBadge = 'Oficial de Enlace de Misiones de Paz (UN Peacekeeper)';
  } else if (passedLevelsCount >= 1) {
    qualificationBadge = 'Operador Táctico Bilingüe IESE';
  }

  const selectedMedalInfo = getMedalModelInfo(selectedMedalLevel);
  const isSelectedMedalAwarded = Boolean(progress.levelExamPassed[selectedMedalLevel]);

  // Handle photo file selection (4x4 ratio)
  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check size limit (< 4MB)
    if (file.size > 4 * 1024 * 1024) {
      setPhotoError('La fotografía debe ser menor a 4 MB');
      setTimeout(() => setPhotoError(null), 4000);
      return;
    }
    setPhotoError(null);

    const reader = new FileReader();
    reader.onload = (loadEvent) => {
      const result = loadEvent.target?.result as string;
      setDraftPhotoUrl(result);
      if (!isEditingProfile) {
        // Direct update if not in full edit mode
        const updated: MilitaryProfile = { ...profile, photoUrl: result };
        setProfile(updated);
        if (onUpdateProfile) onUpdateProfile(updated);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDraftPhotoUrl('');
    const updated: MilitaryProfile = { ...profile, photoUrl: '' };
    setProfile(updated);
    if (onUpdateProfile) onUpdateProfile(updated);
  };

  const handleOpenEdit = () => {
    setDraftRank(MILITARY_RANKS.includes(profile.rank) ? profile.rank : 'Otro');
    setDraftCustomRank(MILITARY_RANKS.includes(profile.rank) ? '' : profile.rank);
    setDraftFirstName(profile.firstName || '');
    setDraftLastName(profile.lastName || '');
    setDraftDestination(profile.destination || '');
    setDraftPhotoUrl(profile.photoUrl || '');
    setDraftFileNumber(profile.fileNumber || '');
    setIsEditingProfile(true);
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const finalRank = draftRank === 'Otro' ? (draftCustomRank.trim() || 'Oficial') : draftRank;
    const updatedProfile: MilitaryProfile = {
      rank: finalRank,
      firstName: draftFirstName.trim(),
      lastName: draftLastName.trim(),
      destination: draftDestination.trim() || 'Ejército Argentino',
      photoUrl: draftPhotoUrl,
      fileNumber: draftFileNumber.trim()
    };

    setProfile(updatedProfile);
    setIsEditingProfile(false);

    if (onUpdateProfile) {
      onUpdateProfile(updatedProfile);
    } else {
      try {
        localStorage.setItem('iese_military_profile', JSON.stringify(updatedProfile));
        const fullName = `${finalRank} ${updatedProfile.firstName} ${updatedProfile.lastName}`.trim();
        localStorage.setItem('iese_student_name', fullName);
        localStorage.setItem('iese_student_unit', updatedProfile.destination);
      } catch {
        // Ignored
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="w-full max-w-3xl bg-[var(--surface-base)] border border-[var(--border-subtle)] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200 font-tactical">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-subtle)] bg-[var(--surface-elevated)]">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-[var(--surface-base)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-primary)] shadow-xs">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-stencil font-bold text-[var(--text-primary)] text-base sm:text-lg tracking-wide flex items-center gap-2">
                <span>Expediente Militar IESE</span>
                <span className="text-[10px] font-mono font-normal px-2 py-0.5 rounded bg-[var(--surface-base)] text-[var(--accent-primary)] border border-[var(--border-subtle)] font-semibold">
                  Foja de Servicios
                </span>
              </h2>
              <p className="text-xs text-[var(--text-muted)]">
                Ficha de personal, horas reloj reglamentarias y condecoraciones castrenses
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-base)] transition-colors cursor-pointer"
            aria-label="Cerrar expediente"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tactical Sub-Tabs inside Expediente Militar */}
        <div className="flex items-center space-x-2 px-6 pt-3 pb-2 border-b border-[var(--border-subtle)] bg-[var(--surface-base)]">
          <button
            type="button"
            onClick={() => setActiveTab('record')}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-stencil font-bold transition-all cursor-pointer ${
              activeTab === 'record'
                ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-elevated)]'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Ficha & Foja de Calificaciones ({passedLevelsCount}/6)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('medals')}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-stencil font-bold transition-all cursor-pointer ${
              activeTab === 'medals'
                ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-elevated)]'
            }`}
          >
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Medallero de Gala ({passedLevelsCount} ganadas)</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-6 overflow-y-auto max-h-[75vh] bg-[var(--surface-base)]">
          
          {/* TAB 1: FICHA DE PERSONAL & FOJA DE CALIFICACIONES */}
          {activeTab === 'record' && (
            <>
              {/* ================================================================= */}
              {/* CREDENCIAL MILITAR OFICIAL DEL ALUMNO CON FOTO 4X4 */}
              {/* ================================================================= */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#172311] via-[#1b2a13] to-[#121b0d] border-2 border-[#4b6a2e] shadow-xl relative overflow-hidden">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  
                  {/* Left: Foto 4x4 Frame */}
                  <div className="flex items-center space-x-4">
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="w-24 h-28 sm:w-28 sm:h-32 rounded-xl bg-black/70 border-2 border-[#5a8037] shadow-2xl relative overflow-hidden shrink-0 flex flex-col items-center justify-center group cursor-pointer"
                      title="Haga clic para cargar o cambiar su fotografía 4x4"
                    >
                      {draftPhotoUrl || profile.photoUrl ? (
                        <>
                          <img
                            src={draftPhotoUrl || profile.photoUrl}
                            alt="Fotografía militar 4x4"
                            className="w-full h-full object-cover object-top"
                          />
                          {/* Hover change overlay */}
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-1 text-center">
                            <Camera className="w-5 h-5 text-[#b8df47] mb-1" />
                            <span className="text-[9px] font-mono leading-tight">Cambiar 4x4</span>
                          </div>
                        </>
                      ) : (
                        <div className="flex flex-col items-center justify-center text-[#86a56e] p-2 text-center">
                          <User className="w-8 h-8 text-[#5a8037] mb-1 group-hover:text-[#b8df47] transition-colors" />
                          <span className="text-[9px] font-stencil uppercase tracking-wider text-[#b8df47]">
                            Foto 4x4
                          </span>
                          <span className="text-[8px] font-mono text-[#789660] mt-0.5">
                            Cargar carnet
                          </span>
                        </div>
                      )}

                      {/* Official 4x4 corner badge */}
                      <span className="absolute bottom-1 right-1 text-[8px] font-mono font-bold px-1 py-0.2 rounded bg-black/80 text-[#b8df47] border border-[#48632c]">
                        4x4
                      </span>
                    </div>

                    {/* Hidden File Input */}
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handlePhotoSelect}
                      accept="image/*"
                      className="hidden"
                    />

                    {/* Military Data Display */}
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                        <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-[#2a3e1b] text-[#b8df47] border border-[#50742f]">
                          {profile.rank || 'Oficial / Alumno'}
                        </span>
                        {profile.fileNumber && (
                          <span className="text-[10px] font-mono text-[#9eb486] px-1.5 py-0.5 rounded bg-black/40 border border-[#384e23]">
                            Mat: {profile.fileNumber}
                          </span>
                        )}
                      </div>

                      <h3 className="text-base sm:text-lg font-stencil font-bold text-white tracking-wide">
                        {profile.firstName || profile.lastName 
                          ? `${profile.firstName} ${profile.lastName}`.trim()
                          : 'Nombre y Apellido Sin Asignar'}
                      </h3>

                      <div className="flex items-center space-x-1.5 text-xs text-[#b6d498]">
                        <MapPin className="w-3.5 h-3.5 text-[#8db845] shrink-0" />
                        <span className="font-mono text-[11px] truncate max-w-[260px] sm:max-w-xs">
                          {profile.destination || 'Comando de Adiestramiento y Alistamiento'}
                        </span>
                      </div>

                      <div className="text-[10px] font-mono text-[#7ea064] pt-1">
                        Estado IESE: <strong className="text-[#d8f87b]">{qualificationBadge}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Actions: Edit Profile & Photo Actions */}
                  <div className="flex sm:flex-col items-center sm:items-end gap-2 w-full sm:w-auto justify-between pt-2 sm:pt-0 border-t sm:border-t-0 border-[#384e24]">
                    <button
                      type="button"
                      onClick={() => {
                        if (isEditingProfile) {
                          setIsEditingProfile(false);
                        } else {
                          handleOpenEdit();
                        }
                      }}
                      className="px-3 py-1.5 rounded-lg bg-[#273919] hover:bg-[#395325] text-xs font-mono text-[#d4f57b] border border-[#52792c] transition-colors cursor-pointer flex items-center space-x-1.5 shadow-xs"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>{isEditingProfile ? 'Cerrar Edición' : 'Editar Ficha'}</span>
                    </button>

                    {(draftPhotoUrl || profile.photoUrl) && (
                      <button
                        type="button"
                        onClick={handleRemovePhoto}
                        className="px-2.5 py-1 rounded bg-[#351919] hover:bg-[#4f2020] text-[10px] font-mono text-[#fca5a5] border border-[#772828] transition-colors cursor-pointer flex items-center space-x-1"
                        title="Eliminar foto carnet cargada"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>Quitar Foto</span>
                      </button>
                    )}
                  </div>
                </div>

                {photoError && (
                  <div className="mt-3 p-2.5 rounded-lg bg-red-950/70 border border-red-600/70 text-red-200 text-xs font-mono animate-in fade-in flex items-center justify-between">
                    <span>{photoError}</span>
                    <button 
                      type="button" 
                      onClick={() => setPhotoError(null)} 
                      className="text-red-300 hover:text-white ml-2 text-xs font-bold cursor-pointer"
                    >
                      ✕
                    </button>
                  </div>
                )}

                {/* Formulario de Edición de la Ficha Militar */}
                {isEditingProfile && (
                  <form onSubmit={handleSaveProfile} className="mt-4 pt-4 border-t border-[#3b5125] grid grid-cols-1 sm:grid-cols-2 gap-3 animate-in fade-in duration-150">
                    <div className="sm:col-span-2 text-xs font-stencil text-[#b8df47] uppercase tracking-wider flex items-center gap-1.5">
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Actualizar Datos del Expediente y Fotografía 4x4</span>
                    </div>

                    {/* Grado Militar */}
                    <div>
                      <label className="block text-[11px] font-mono text-[#9eb486] mb-1">
                        Grado Militar (Jerarquía):
                      </label>
                      <select
                        value={draftRank}
                        onChange={(e) => setDraftRank(e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-[#0e1509] border border-[#48632c] text-[#f2fcdb] font-mono text-xs focus:outline-none focus:border-[#b8df47]"
                      >
                        {MILITARY_RANKS.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                        <option value="Otro">Otro (Personalizado)...</option>
                      </select>
                      {draftRank === 'Otro' && (
                        <input
                          type="text"
                          value={draftCustomRank}
                          onChange={(e) => setDraftCustomRank(e.target.value)}
                          placeholder="Escriba su grado militar"
                          className="w-full mt-1.5 px-3 py-1.5 rounded-lg bg-[#0e1509] border border-[#48632c] text-[#f2fcdb] font-mono text-xs focus:outline-none focus:border-[#b8df47]"
                        />
                      )}
                    </div>

                    {/* Matrícula Militar / Legajo */}
                    <div>
                      <label className="block text-[11px] font-mono text-[#9eb486] mb-1">
                        Matrícula Militar / N° de Legajo:
                      </label>
                      <input
                        type="text"
                        value={draftFileNumber}
                        onChange={(e) => setDraftFileNumber(e.target.value)}
                        placeholder="Ej: EA-10928"
                        className="w-full px-3 py-1.5 rounded-lg bg-[#0e1509] border border-[#48632c] text-[#f2fcdb] font-mono text-xs focus:outline-none focus:border-[#b8df47]"
                      />
                    </div>

                    {/* Nombre */}
                    <div>
                      <label className="block text-[11px] font-mono text-[#9eb486] mb-1">
                        Nombre:
                      </label>
                      <input
                        type="text"
                        value={draftFirstName}
                        onChange={(e) => setDraftFirstName(e.target.value)}
                        placeholder="Ej: Francisco"
                        className="w-full px-3 py-1.5 rounded-lg bg-[#0e1509] border border-[#48632c] text-[#f2fcdb] font-mono text-xs focus:outline-none focus:border-[#b8df47]"
                        required
                      />
                    </div>

                    {/* Apellido */}
                    <div>
                      <label className="block text-[11px] font-mono text-[#9eb486] mb-1">
                        Apellido:
                      </label>
                      <input
                        type="text"
                        value={draftLastName}
                        onChange={(e) => setDraftLastName(e.target.value)}
                        placeholder="Ej: Alpuin"
                        className="w-full px-3 py-1.5 rounded-lg bg-[#0e1509] border border-[#48632c] text-[#f2fcdb] font-mono text-xs focus:outline-none focus:border-[#b8df47]"
                        required
                      />
                    </div>

                    {/* Destino Militar / Unidad */}
                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-mono text-[#9eb486] mb-1">
                        Destino Militar / Unidad de Pertenencia:
                      </label>
                      <input
                        type="text"
                        value={draftDestination}
                        onChange={(e) => setDraftDestination(e.target.value)}
                        placeholder="Ej: Regimiento de Infantería 1 Patricios / Ca Com 601"
                        className="w-full px-3 py-1.5 rounded-lg bg-[#0e1509] border border-[#48632c] text-[#f2fcdb] font-mono text-xs focus:outline-none focus:border-[#b8df47]"
                      />
                    </div>

                    {/* Fotografía 4x4 Selector */}
                    <div className="sm:col-span-2 p-3 rounded-xl bg-black/40 border border-[#3b5125] flex items-center justify-between">
                      <div className="flex items-center space-x-2.5">
                        <Camera className="w-4 h-4 text-[#b8df47]" />
                        <span className="text-xs text-[#c3deb0]">
                          Fotografía Oficial Carnet 4x4:
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="px-3 py-1 rounded bg-[#2b3c1d] hover:bg-[#3d5629] text-xs font-mono text-[#b8df47] border border-[#50722e] transition-colors cursor-pointer"
                      >
                        {draftPhotoUrl ? 'Cambiar Imagen' : 'Seleccionar Archivo'}
                      </button>
                    </div>

                    {/* Submit Buttons */}
                    <div className="sm:col-span-2 flex justify-end space-x-2 pt-2">
                      <button
                        type="button"
                        onClick={() => setIsEditingProfile(false)}
                        className="px-3 py-1.5 rounded-lg bg-[#1a2512] text-xs font-mono text-[#9eb486] border border-[#394f23] hover:text-white transition-colors cursor-pointer"
                      >
                        Cancelar
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#6e8f2a] to-[#9ac63b] text-black font-stencil font-bold text-xs flex items-center space-x-1.5 shadow-md cursor-pointer"
                      >
                        <Check className="w-3.5 h-3.5 text-black" />
                        <span>Guardar Credencial Militar</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Quick Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-[#172110] border border-[#374c22] text-center">
                  <span className="text-xs text-[#9eb486] font-mono block">ACTIVIDADES</span>
                  <strong className="text-xl font-bold font-stencil text-[#b8df47]">
                    {totalExercisesCompleted}
                  </strong>
                  <span className="text-[11px] text-[#9eb486] block">completadas</span>
                </div>

                <div className="p-4 rounded-xl bg-[#172110] border border-[#374c22] text-center">
                  <span className="text-xs text-[#9eb486] font-mono block">NIVELES IESE</span>
                  <strong className="text-xl font-bold font-stencil text-[#d6ee9b]">
                    6 Niveles
                  </strong>
                  <span className="text-[11px] text-[#9eb486] block">A1+ hasta B2</span>
                </div>

                <div className="p-4 rounded-xl bg-[#172110] border border-[#374c22] text-center col-span-2 sm:col-span-1">
                  <span className="text-xs text-[#9eb486] font-mono block">CARGA HORARIA</span>
                  <strong className="text-xl font-bold font-stencil text-[#b8df47]">
                    612h
                  </strong>
                  <span className="text-[11px] text-[#9eb486] block">reloj oficiales</span>
                </div>
              </div>

              {/* Medallero Quick Teaser Banner - WITH PERFECT SIZING TO NEVER OVERFLOW */}
              <div 
                onClick={() => setActiveTab('medals')}
                className="p-3 rounded-xl bg-gradient-to-r from-[#1b2611] to-[#12190d] border border-[#48632c] hover:border-[#b8df47] transition-all cursor-pointer flex items-center justify-between gap-3 shadow-md group"
              >
                <div className="flex items-center space-x-3 min-w-0">
                  {/* Cuadro táctico: cruz en el centro rozando el borde del cuadro, sin cinta argentina */}
                  <div className="w-14 h-14 rounded-xl bg-black/85 border-2 border-[#48632c] group-hover:border-[#b8df47] flex items-center justify-center shrink-0 overflow-hidden shadow-inner p-0.5 transition-colors">
                    <IronCrossMedal
                      levelNumber={currentLevelNumber}
                      size="sm"
                      showRibbon={false}
                      onlyCross={true}
                      isAwarded={Boolean(progress.levelExamPassed[currentLevelNumber])}
                      interactive={false}
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-[#b8df47] uppercase font-bold tracking-wider block">
                      Medallero de Gala del Expediente
                    </span>
                    <strong className="text-xs text-[#f2fcdb] block truncate">
                      {passedLevelsCount > 0 
                        ? `Posee ${passedLevelsCount} de 6 condecoraciones reglamentarias (Orden de la Cruz de Hierro).`
                        : 'Aún no posee condecoraciones. Rinda el examen de nivel para obtener su medalla.'}
                    </strong>
                  </div>
                </div>

                <div className="flex items-center space-x-1 text-xs font-mono text-[#b8df47] group-hover:translate-x-0.5 transition-transform shrink-0">
                  <span>Abrir Medallero</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>

              {/* Last Interaction / Inactivity Monitoring Card */}
              <div className={`p-4 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                isInactiveOver3Days
                  ? 'bg-[#291f0c] border-[#8a681c] text-[#fbe1a1]'
                  : 'bg-[#172110] border-[#374c22] text-[#dce7ce]'
              }`}>
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg mt-0.5 ${
                    isInactiveOver3Days
                      ? 'bg-[#5c4412] text-[#fcd34d] border border-[#9b721e]'
                      : 'bg-[#223016] text-[#b8df47] border border-[#435e29]'
                  }`}>
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider block text-[#9eb486]">
                      Seguimiento de Continuidad Académica
                    </span>
                    <strong className="text-sm font-semibold text-white block">
                      {daysSinceInteraction !== null
                        ? `Última lección completada: hace ${daysSinceInteraction} ${daysSinceInteraction === 1 ? 'día' : 'días'}`
                        : 'Sin registros de lección completada'}
                    </strong>
                    <div className="text-xs mt-1 text-[#9eb486]">
                      {isInactiveOver3Days ? (
                        <span className="text-[#fca5a5] flex items-center gap-1 font-semibold">
                          <AlertCircle className="w-3.5 h-3.5" />
                          Alerta de Inactividad (+3 días). Recomendado retomar el adiestramiento diario.
                        </span>
                      ) : (
                        <span className="text-[#86efac]">
                          ✓ Ritmo de adiestramiento al día (última lección en menos de 3 días).
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 self-end sm:self-center">
                  {onOpenCalendar && (
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onOpenCalendar();
                      }}
                      className="px-3 py-1.5 rounded-lg bg-[#202c16] hover:bg-[#2b3a1d] text-[#b8df47] border border-[#48632c] text-xs font-mono transition-colors flex items-center space-x-1 cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Agendar Alarma</span>
                    </button>
                  )}
                  {onSimulateInactivity && (
                    <button
                      type="button"
                      onClick={onSimulateInactivity}
                      className="px-2.5 py-1.5 rounded-lg bg-[#3d290b] hover:bg-[#52370f] text-[#fcd34d] border border-[#785416] text-xs font-mono transition-colors cursor-pointer"
                      title="Simular paso de 4 días de inactividad"
                    >
                      Simular +4 días
                    </button>
                  )}
                  {onSimulateRecentActivity && isInactiveOver3Days && (
                    <button
                      type="button"
                      onClick={onSimulateRecentActivity}
                      className="px-2.5 py-1.5 rounded-lg bg-[#1b3513] hover:bg-[#264b1b] text-[#86efac] border border-[#356d25] text-xs font-mono transition-colors cursor-pointer"
                      title="Marcar lección completada hoy para resetear contador"
                    >
                      Marcar Hoy
                    </button>
                  )}
                </div>
              </div>

              {/* Detailed Level Breakdown List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-stencil font-bold text-sm text-[#b8df47] uppercase tracking-wider">
                    Estado por Nivel Oficial IESE:
                  </h4>
                  {passedLevelsCount > 0 && onResetAllExams && (
                    <button
                      type="button"
                      onClick={() => {
                        if (window.confirm('¿Deseas restablecer todas las condecoraciones a estado pendiente?')) {
                          onResetAllExams();
                        }
                      }}
                      className="text-[10px] font-mono text-[#fca5a5] hover:text-white px-2 py-0.5 rounded bg-[#351919] border border-[#6b2626] transition-colors cursor-pointer flex items-center space-x-1"
                      title="Quitar todas las medallas otorgadas en modo prueba"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Restablecer Medallas de Prueba</span>
                    </button>
                  )}
                </div>

                <div className="space-y-2">
                  {levels.map((lvl) => {
                    const passed = Boolean(progress.levelExamPassed[lvl.levelNumber]);
                    const completedDays = progress.completedDays?.[lvl.levelNumber]?.length || 0;
                    const isQualified = completedDays >= 120;
                    const mInfo = getMedalModelInfo(lvl.levelNumber);

                    return (
                      <div
                        key={lvl.levelNumber}
                        className={`p-3.5 rounded-xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                          passed
                            ? 'bg-[#182312] border-[#48632c]'
                            : lvl.levelNumber === currentLevelNumber
                            ? 'bg-[#1a2514] border-[#b8df47]/50 shadow-md'
                            : 'bg-[#141c0e] border-[#29371a] opacity-85'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          {/* Miniature medal or check status */}
                          <div className="w-8 h-8 rounded-lg bg-black/60 border border-[#48632c] flex items-center justify-center shrink-0 overflow-hidden p-0.5">
                            <IronCrossMedal
                              levelNumber={lvl.levelNumber}
                              size="xs"
                              showRibbon={false}
                              onlyCross={true}
                              isAwarded={passed}
                              interactive={false}
                            />
                          </div>

                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="font-stencil font-bold text-white text-xs">
                                Nivel {lvl.levelNumber} ({lvl.cefr})
                              </span>
                              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#243317] text-[#b8df47] border border-[#425e27]">
                                {lvl.accumulatedClockHours}h reloj
                              </span>
                              <span className="text-[10px] font-mono text-[#8fa878]">
                                {mInfo.modelCode}
                              </span>
                            </div>
                            <div className="text-[11px] text-[#9eb486] flex items-center space-x-3 mt-0.5">
                              <span>Plan 120 días: <strong className="text-white">{completedDays}/120</strong></span>
                              <span>•</span>
                              <span>Condecoración: <strong className="text-[#b8df47]">{mInfo.title}</strong></span>
                            </div>
                          </div>
                        </div>

                        {/* Action buttons & Revocation */}
                        <div className="flex items-center space-x-2 self-end sm:self-center">
                          {passed ? (
                            <div className="flex items-center space-x-1.5">
                              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md bg-[#253916] text-[#b8df47] border border-[#52792c] text-xs font-semibold">
                                <CheckCircle className="w-3.5 h-3.5" />
                                <span>Condecorado</span>
                              </span>

                              {/* Action to revoke / reset if it was tested */}
                              {onRevokeExam && (
                                <button
                                  type="button"
                                  onClick={() => {
                                    if (window.confirm(`¿Deseas desmarcar la condecoración del Nivel ${lvl.levelNumber} y volver a estado pendiente?`)) {
                                      onRevokeExam(lvl.levelNumber);
                                    }
                                  }}
                                  className="text-[10px] font-mono px-2 py-1 rounded bg-[#351919] hover:bg-[#4d2222] text-[#fca5a5] hover:text-white border border-[#782828] transition-colors cursor-pointer flex items-center space-x-1"
                                  title="Quitar medalla obtenida en prueba y restablecer a pendiente"
                                >
                                  <RotateCcw className="w-3 h-3" />
                                  <span>Quitar de prueba</span>
                                </button>
                              )}
                            </div>
                          ) : (
                            <span className="text-xs text-[#9eb486] font-mono px-2 py-1 rounded bg-[#10160b] border border-[#2e3e1f]">
                              Pendiente
                            </span>
                          )}

                          {onNavigateToExam && (
                            <button
                              type="button"
                              onClick={() => {
                                const targetLvl = levels.find(l => l.levelNumber === lvl.levelNumber);
                                if (targetLvl && onSelectLevel) onSelectLevel(targetLvl);
                                onNavigateToExam(lvl.levelNumber);
                                onClose();
                              }}
                              className={`text-[10px] font-mono px-2.5 py-1 rounded border flex items-center space-x-1 transition-all cursor-pointer ${
                                passed
                                  ? 'bg-emerald-950/60 text-emerald-300 border-emerald-600/60 hover:bg-emerald-900/80'
                                  : isQualified
                                  ? 'bg-[#b8df47] text-black border-white font-bold font-stencil shadow-sm'
                                  : 'bg-[#182312] text-[#9eb486] border-[#374c22] hover:text-[#d3e5bf]'
                              }`}
                              title="Examen final de acreditación STANAG 6001 y Medalla de Condecoración"
                            >
                              <Award className="w-3 h-3" />
                              <span>{passed ? 'Ver Condecoración' : 'Examen Final'}</span>
                            </button>
                          )}

                          {onSelectLevel && (
                            lvl.levelNumber === currentLevelNumber ? (
                              <span className="text-[10px] font-mono font-bold text-[#b8df47] bg-[#223315] px-2.5 py-1 rounded border border-[#4d6d29]">
                                Nivel Actual
                              </span>
                            ) : (
                              <button
                                type="button"
                                onClick={() => {
                                  onSelectLevel(lvl);
                                  onClose();
                                }}
                                className="text-[10px] font-stencil uppercase tracking-wider px-2.5 py-1 rounded bg-[#2a3c1c] hover:bg-[#395225] text-[#d4f092] hover:text-white border border-[#4f722c] transition-all cursor-pointer shadow-xs active:scale-95"
                              >
                                Ir al Nivel
                              </button>
                            )
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          {/* TAB 2: MEDALLERO & CONDECORACIONES CASTRENSES */}
          {activeTab === 'medals' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {/* Medallero Presentation Banner */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#172210] via-[#213017] to-[#121a0d] border border-[#52732a] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-black/40 border border-[#b8df47]/40 flex items-center justify-center text-amber-300">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-stencil font-bold text-sm sm:text-base text-[#f2fcdb]">
                      Medallero de Condecoraciones del Expediente
                    </h3>
                    <p className="text-xs text-[#a7c091]">
                      Reglamento de Honores IESE: Cruz de Hierro Patée con Cinta Argentina Albiceleste
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  {passedLevelsCount > 0 && onResetAllExams && (
                    <button
                      type="button"
                      onClick={() => {
                        if (window.confirm('¿Deseas restablecer todas las condecoraciones a estado pendiente?')) {
                          onResetAllExams();
                        }
                      }}
                      className="px-2.5 py-1.5 rounded-lg bg-[#351919] hover:bg-[#4f2020] text-[#fca5a5] border border-[#782828] text-xs font-mono flex items-center space-x-1 cursor-pointer"
                      title="Quitar medallas ganadas durante la prueba"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Restablecer Medallas</span>
                    </button>
                  )}

                  <div className="px-3 py-1.5 rounded-lg bg-black/60 border border-[#48632c] text-right shrink-0">
                    <div className="text-[10px] font-mono text-[#9eb486]">Preseas Otorgadas</div>
                    <div className="font-stencil text-base font-bold text-[#b8df47]">
                      {passedLevelsCount} de 6 Preseas
                    </div>
                  </div>
                </div>
              </div>

              {/* 6-Medal Showcase Grid - PERFECT SIZING WITH SIZE="XS" */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                {[1, 2, 3, 4, 5, 6].map((lvlNum) => {
                  const mInfo = getMedalModelInfo(lvlNum);
                  const isEarned = Boolean(progress.levelExamPassed[lvlNum]);
                  const isSelected = selectedMedalLevel === lvlNum;
                  const isCurrent = currentLevelNumber === lvlNum;

                  return (
                    <div
                      key={lvlNum}
                      onClick={() => setSelectedMedalLevel(lvlNum)}
                      className={`p-2.5 rounded-xl border transition-all cursor-pointer flex flex-col items-center justify-between relative group ${
                        isSelected
                          ? 'bg-[#1c2913] border-[#b8df47] shadow-xl ring-2 ring-[#b8df47]/50 scale-102'
                          : isEarned
                          ? 'bg-[#15200e] border-[#48632c] hover:border-[#8cb83a]'
                          : 'bg-[#10160c] border-neutral-800/80 opacity-70 hover:opacity-100 hover:border-neutral-700'
                      }`}
                    >
                      {/* Top badge */}
                      <div className="w-full flex items-center justify-between mb-1">
                        <span className={`text-[9px] font-stencil font-bold px-1.5 py-0.2 rounded ${
                          isEarned ? 'bg-[#b8df47] text-black' : 'bg-neutral-800 text-neutral-400'
                        }`}>
                          Niv. {lvlNum}
                        </span>
                        <span className="text-[9px] font-mono text-neutral-400">
                          {mInfo.modelCode}
                        </span>
                      </div>

                      {/* Medal Visual Component - Size XS safely contained */}
                      <div className="py-1 h-20 flex items-center justify-center overflow-hidden">
                        <IronCrossMedal
                          levelNumber={lvlNum}
                          size="xs"
                          showRibbon={true}
                          isAwarded={isEarned}
                          interactive={false}
                        />
                      </div>

                      {/* Status and Title */}
                      <div className="text-center w-full mt-1 pt-1 border-t border-white/5">
                        <div className="font-stencil text-[10px] font-bold text-white truncate">
                          {mInfo.title}
                        </div>
                        <div className="text-[9px] font-mono mt-0.5">
                          {isEarned ? (
                            <span className="text-emerald-400 font-semibold">★ Otorgada</span>
                          ) : (
                            <span className="text-neutral-500">Bloqueada</span>
                          )}
                        </div>
                      </div>

                      {isCurrent && (
                        <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-amber-400 text-black text-[9px] font-bold flex items-center justify-center shadow">
                          •
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Detailed Selected Medal Inspector Box in Velvet Bed */}
              <div className="rounded-2xl border-2 border-[#52732a] bg-gradient-to-b from-[#0e160a] to-[#090f06] p-5 sm:p-6 shadow-2xl relative overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  {/* Velvet display case for the selected medal */}
                  <div className="md:col-span-5 flex flex-col items-center text-center">
                    <div className="w-full max-w-[240px] rounded-2xl bg-gradient-to-b from-[#0c1409] via-[#080d05] to-[#040603] border-4 border-[#2b3d1b] shadow-2xl p-4 flex flex-col items-center relative">
                      <div className="text-[10px] font-mono text-[#8fa878] uppercase tracking-widest mb-2 font-bold">
                        ESTUCHE DE GALA MILITAR
                      </div>

                      <div className="py-2">
                        <IronCrossMedal
                          levelNumber={selectedMedalLevel}
                          size="lg"
                          showRibbon={true}
                          isAwarded={isSelectedMedalAwarded}
                          interactive={true}
                        />
                      </div>

                      {/* Pasador de uniforme */}
                      <div className="w-full mt-3 pt-2.5 border-t border-neutral-800 flex flex-col items-center">
                        <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                          Pasador de Pecho
                        </span>
                        <div className="px-3 py-1 rounded bg-black/80 border border-neutral-700 flex items-center space-x-2">
                          <div className="w-10 h-3 rounded-xs flex overflow-hidden border border-neutral-800">
                            <div className="w-1/3 bg-[#5B92E5]" />
                            <div className="w-1/3 bg-white flex items-center justify-center">
                              {selectedMedalLevel >= 3 && <div className="w-1 h-1 rounded-full bg-amber-400" />}
                            </div>
                            <div className="w-1/3 bg-[#5B92E5]" />
                          </div>
                          <span className="text-[9px] font-mono font-bold text-amber-300">
                            {selectedMedalInfo.slpCode}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Medal Historical & Technical Details */}
                  <div className="md:col-span-7 space-y-3">
                    <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#203115] text-[#b8df47] border border-[#48632c] text-[10px] font-mono font-bold">
                        Nivel {selectedMedalLevel} • {selectedMedalInfo.slpCode}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-black/50 text-[#d8ea9c] border border-neutral-700 text-[10px] font-mono">
                        Modelo Oficial: {selectedMedalInfo.modelCode}
                      </span>
                      {isSelectedMedalAwarded ? (
                        <span className="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-600/50 text-[10px] font-bold font-mono">
                          ★ CONDECORACIÓN OTORGADA
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-600/50 text-[10px] font-mono">
                          PENDIENTE DE EXAMEN
                        </span>
                      )}
                    </div>

                    <h4 className="font-stencil text-lg sm:text-xl font-bold text-white tracking-wide">
                      {selectedMedalInfo.title}
                    </h4>

                    <div className="text-xs font-serif italic text-[#c1d9a5]">
                      "{selectedMedalInfo.subtitle}"
                    </div>

                    <p className="text-xs text-[#9eb486] leading-relaxed">
                      {selectedMedalInfo.description}
                    </p>

                    <div className="p-3 rounded-lg bg-black/40 border border-[#354822] text-[11px] font-mono space-y-1 text-[#8fa878]">
                      <div><strong>Categoría:</strong> {selectedMedalInfo.category}</div>
                      <div><strong>Material:</strong> Núcleo de hierro dulce pavonado y marco estriado en plata 800.</div>
                      <div><strong>Cinta de suspensión:</strong> Seda moaré con los colores patrios de la bandera argentina.</div>
                    </div>

                    {/* Action buttons including revocation if tested */}
                    <div className="flex flex-wrap items-center gap-2 pt-2">
                      {onNavigateToExam && (
                        <button
                          type="button"
                          onClick={() => {
                            const targetLvl = levels.find(l => l.levelNumber === selectedMedalLevel);
                            if (targetLvl && onSelectLevel) onSelectLevel(targetLvl);
                            onNavigateToExam(selectedMedalLevel);
                            onClose();
                          }}
                          className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#6e8f2a] to-[#9ac63b] hover:from-[#7ea330] hover:to-[#abd942] text-black font-stencil font-bold text-xs flex items-center space-x-1.5 shadow-md cursor-pointer"
                        >
                          <Award className="w-4 h-4 text-black" />
                          <span>{isSelectedMedalAwarded ? 'Ver Condecoración en Examen' : 'Rendir Examen para Medalla'}</span>
                        </button>
                      )}

                      {/* Button to revoke medal if awarded in test */}
                      {isSelectedMedalAwarded && onRevokeExam && (
                        <button
                          type="button"
                          onClick={() => {
                            if (window.confirm(`¿Deseas desmarcar la condecoración del Nivel ${selectedMedalLevel} y volver a estado pendiente?`)) {
                              onRevokeExam(selectedMedalLevel);
                            }
                          }}
                          className="px-3 py-2 rounded-xl bg-[#351919] hover:bg-[#4f2020] text-[#fca5a5] hover:text-white border border-[#782828] text-xs font-mono flex items-center space-x-1.5 cursor-pointer"
                          title="Restablecer este nivel a pendiente"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Quitar de Prueba (Pendiente)</span>
                        </button>
                      )}

                      {onSelectLevel && selectedMedalLevel !== currentLevelNumber && (
                        <button
                          type="button"
                          onClick={() => {
                            const targetLvl = levels.find(l => l.levelNumber === selectedMedalLevel);
                            if (targetLvl) {
                              onSelectLevel(targetLvl);
                              onClose();
                            }
                          }}
                          className="px-3.5 py-2 rounded-xl bg-[#243417] hover:bg-[#344b21] text-[#d6ee9b] hover:text-white border border-[#4d6d29] font-stencil text-xs transition-colors cursor-pointer"
                        >
                          Ir al Nivel {selectedMedalLevel}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Reset progress */}
          <div className="pt-3 border-t border-[#354822] flex justify-between items-center">
            <span className="text-xs text-[#9eb486]">
              Ficha y datos guardados localmente en tu navegador.
            </span>
            <button
              onClick={() => {
                if (window.confirm('¿Deseas reiniciar todo tu progreso, calificaciones y credencial militar del IESE?')) {
                  onResetProgress();
                }
              }}
              className="flex items-center space-x-1 text-xs text-[#f87171] hover:text-[#fca5a5] transition-colors font-semibold cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reiniciar Todo el Progreso</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
