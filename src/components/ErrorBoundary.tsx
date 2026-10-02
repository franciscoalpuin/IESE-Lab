import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, RotateCcw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallbackDayReset?: () => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    if (this.props.fallbackDayReset) {
      this.props.fallbackDayReset();
    }
  };

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0d120a] text-[#d6ec99] flex items-center justify-center p-4">
          <div className="max-w-md w-full p-6 rounded-2xl bg-[#141d0f] border border-[#ff4444]/40 shadow-2xl space-y-5 text-center">
            <div className="w-14 h-14 mx-auto rounded-xl bg-red-950/60 border border-red-500/50 flex items-center justify-center text-red-400">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div>
              <h2 className="text-xl font-stencil font-bold tracking-wider text-red-400">
                INCIDENCIA TÁCTICA DETECTADA
              </h2>
              <p className="text-xs font-mono text-[#9bb084] mt-1.5 leading-relaxed">
                Se ha aislado un error en la carga de la misión o ejercicio. Sus datos y progreso general se encuentran protegidos.
              </p>
            </div>

            {this.state.error?.message && (
              <div className="p-3 rounded-lg bg-black/60 border border-[#233116] text-[11px] font-mono text-amber-300 text-left overflow-x-auto">
                <span className="font-bold text-red-400">Detalle: </span>
                {this.state.error.message}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <button
                type="button"
                onClick={this.handleReset}
                className="flex-1 px-4 py-2.5 rounded-xl bg-[#202e15] hover:bg-[#2c3f1d] border border-[#446127] text-xs font-mono text-[#d6ec99] font-bold flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <RotateCcw className="w-4 h-4 text-emerald-400" />
                <span>Reintentar Sesión</span>
              </button>
              <button
                type="button"
                onClick={this.handleReload}
                className="flex-1 px-4 py-2.5 rounded-xl bg-[#6e8f2a] hover:bg-[#7ea330] text-black text-xs font-mono font-bold flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Recargar App</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
