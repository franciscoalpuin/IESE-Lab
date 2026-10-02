import React, { useState } from 'react';
import { usePWAInstall } from './usePWAInstall';
import { Download, Smartphone, X, Shield, Check } from 'lucide-react';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // If already running as an installed PWA, hide the button
  if (isInstalled) {
    return null;
  }

  // Chromium / Android / Desktop flow
  if (isInstallable) {
    return (
      <button
        id="pwa-install-app-btn"
        type="button"
        onClick={install}
        className="flex items-center space-x-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-[#253d16] hover:bg-[#32521c] border border-[#527e2b] text-[#c9e884] hover:text-white text-xs sm:text-sm font-medium transition-all shadow-sm"
        title="Instalar App IESE en la pantalla de inicio para estudio táctico offline"
      >
        <Download className="w-3.5 h-3.5 text-[#b8df47]" />
        <span className="font-tactical hidden sm:inline">Instalar App</span>
      </button>
    );
  }

  // iOS Safari flow (beforeinstallprompt is not supported by WebKit)
  if (isIOS) {
    return (
      <>
        <button
          id="pwa-install-ios-btn"
          type="button"
          onClick={() => setShowIOSGuide(true)}
          className="flex items-center space-x-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-[#253d16] hover:bg-[#32521c] border border-[#527e2b] text-[#c9e884] hover:text-white text-xs sm:text-sm font-medium transition-all shadow-sm"
          title="Instalar en iPhone o iPad"
        >
          <Smartphone className="w-3.5 h-3.5 text-[#b8df47]" />
          <span className="font-tactical hidden sm:inline">Instalar en iOS</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
            <div className="w-full max-w-sm rounded-xl bg-[#141b0e] border border-[#48632c] p-6 shadow-2xl text-[#dbeef2]">
              <div className="flex items-center justify-between pb-3 border-b border-[#2e401b]">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-[#b8df47]" />
                  <h3 className="text-base font-bold text-[#f2fcdb] font-stencil">
                    Instalar en iPhone / iPad
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setShowIOSGuide(false)}
                  className="text-[#8e9f78] hover:text-white p-1 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 space-y-3 text-xs sm:text-sm text-[#b9cbb0]">
                <div className="flex items-start space-x-2.5 p-2 rounded-lg bg-[#1a2412] border border-[#32451f]">
                  <span className="w-5 h-5 rounded-full bg-[#2e411b] text-[#b8df47] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </span>
                  <p>
                    Toca el botón <strong className="text-[#f2fcdb]">Compartir</strong> (ícono de cuadrado con flecha hacia arriba) en la barra de Safari.
                  </p>
                </div>

                <div className="flex items-start space-x-2.5 p-2 rounded-lg bg-[#1a2412] border border-[#32451f]">
                  <span className="w-5 h-5 rounded-full bg-[#2e411b] text-[#b8df47] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </span>
                  <p>
                    Desliza hacia abajo y selecciona <strong className="text-[#b8df47]">Agregar a Inicio</strong> (Add to Home Screen).
                  </p>
                </div>

                <div className="flex items-start space-x-2.5 p-2 rounded-lg bg-[#1a2412] border border-[#32451f]">
                  <span className="w-5 h-5 rounded-full bg-[#2e411b] text-[#b8df47] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </span>
                  <p>
                    ¡Listo! Podrás abrir la aplicación a pantalla completa incluso sin conexión de red en maniobras de campaña.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowIOSGuide(false)}
                className="mt-5 w-full rounded-lg bg-[#2b3d1b] hover:bg-[#384f23] border border-[#52742d] py-2.5 text-xs font-bold text-[#d8eaad] uppercase tracking-wider transition-colors"
              >
                Entendido
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
