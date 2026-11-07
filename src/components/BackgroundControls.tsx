import React, { useState } from 'react';
import { Sparkles, Sliders, Eye, EyeOff, RotateCw, Globe, Radio } from 'lucide-react';
import { GlobeVariant } from '../shaders/globe/GlobeCollection';

interface BackgroundControlsProps {
  currentVariant: GlobeVariant;
  onChangeVariant: (variant: GlobeVariant) => void;
  hue: number;
  onChangeHue: (hue: number) => void;
  speed: number;
  onChangeSpeed: (speed: number) => void;
  interactiveMode: boolean;
  onToggleInteractive: () => void;
}

export const BackgroundControls: React.FC<BackgroundControlsProps> = ({
  currentVariant,
  onChangeVariant,
  hue,
  onChangeHue,
  speed,
  onChangeSpeed,
  interactiveMode,
  onToggleInteractive,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const huePresets = [
    { label: 'Cosmic Violet', value: 0, color: '#8b5cf6' },
    { label: 'Emerald Neon', value: 160, color: '#10b981' },
    { label: 'Cyan Electric', value: 200, color: '#06b6d4' },
    { label: 'Solar Gold', value: 45, color: '#f59e0b' },
    { label: 'Ruby Nebula', value: 320, color: '#f43f5e' },
  ];

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start gap-2 select-none">
      {/* Control Panel Popover */}
      {isOpen && (
        <div className="w-72 p-4 rounded-2xl glass-card shadow-2xl border border-white/[0.1] text-xs space-y-4 mb-1 animate-in fade-in slide-in-from-bottom-2 duration-150">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold text-white text-xs uppercase tracking-wider font-mono">
                WebGL Globe Shaders
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded"
              aria-label="Close shader controls"
            >
              ✕
            </button>
          </div>

          {/* Variant Selector */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
              Shader Variant
            </label>
            <div className="grid grid-cols-1 gap-1">
              <button
                onClick={() => onChangeVariant('energy-orb')}
                className={`w-full py-1.5 px-2.5 rounded-lg text-left transition-all flex items-center justify-between ${
                  currentVariant === 'energy-orb'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold'
                    : 'glass-subtle text-slate-300 hover:bg-white/10'
                }`}
              >
                <span>Energy Orb (Raw WebGL)</span>
                {currentVariant === 'energy-orb' && <Sparkles className="w-3 h-3 text-emerald-400" />}
              </button>

              <button
                onClick={() => onChangeVariant('network-globe')}
                className={`w-full py-1.5 px-2.5 rounded-lg text-left transition-all flex items-center justify-between ${
                  currentVariant === 'network-globe'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                    : 'glass-subtle text-slate-300 hover:bg-white/10'
                }`}
              >
                <span>Network Globe (Land Mesh)</span>
                {currentVariant === 'network-globe' && <Globe className="w-3 h-3 text-cyan-400" />}
              </button>

              <button
                onClick={() => onChangeVariant('tangled-constellations')}
                className={`w-full py-1.5 px-2.5 rounded-lg text-left transition-all flex items-center justify-between ${
                  currentVariant === 'tangled-constellations'
                    ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 font-semibold'
                    : 'glass-subtle text-slate-300 hover:bg-white/10'
                }`}
              >
                <span>Tangled Constellations</span>
                {currentVariant === 'tangled-constellations' && <Radio className="w-3 h-3 text-indigo-400" />}
              </button>
            </div>
          </div>

          {/* Color Hue Preset (for Energy Orb) */}
          {currentVariant === 'energy-orb' && (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  Orb Plasma Color
                </label>
                <span className="text-[10px] font-mono text-slate-400">{hue}°</span>
              </div>
              <div className="flex items-center gap-1.5">
                {huePresets.map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => onChangeHue(preset.value)}
                    title={preset.label}
                    className={`w-6 h-6 rounded-full border transition-transform ${
                      hue === preset.value
                        ? 'scale-125 border-white shadow-md'
                        : 'border-transparent opacity-70 hover:opacity-100 hover:scale-110'
                    }`}
                    style={{ backgroundColor: preset.color }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Speed Slider */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                Rotation Speed
              </label>
              <span className="text-[10px] font-mono text-slate-300">{speed.toFixed(1)}x</span>
            </div>
            <input
              type="range"
              min="0.2"
              max="2.5"
              step="0.1"
              value={speed}
              onChange={(e) => onChangeSpeed(parseFloat(e.target.value))}
              className="w-full accent-emerald-400 h-1.5 bg-white/10 rounded cursor-pointer"
            />
          </div>

          {/* Direct Drag/Spin Interaction Toggle */}
          <div className="pt-1 border-t border-white/[0.08]">
            <button
              onClick={onToggleInteractive}
              className={`w-full py-2 px-3 rounded-xl transition-all flex items-center justify-center gap-2 text-xs font-medium ${
                interactiveMode
                  ? 'bg-emerald-400 text-slate-950 font-semibold shadow-lg shadow-emerald-500/20'
                  : 'glass-subtle text-slate-300 hover:bg-white/10'
              }`}
            >
              {interactiveMode ? (
                <>
                  <Eye className="w-3.5 h-3.5" />
                  <span>Interactive Mode (Draggable)</span>
                </>
              ) : (
                <>
                  <EyeOff className="w-3.5 h-3.5" />
                  <span>Ambient Mode (Click Through)</span>
                </>
              )}
            </button>
            <p className="text-[10px] text-slate-500 mt-1.5 text-center">
              {interactiveMode
                ? 'Cursor interacts directly with the 3D globe.'
                : 'Background stays ambient so links/buttons are easily clickable.'}
            </p>
          </div>
        </div>
      )}

      {/* Floating Trigger Pill */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-2 rounded-full glass-card hover:border-white/20 text-slate-200 text-xs font-medium flex items-center gap-2 shadow-lg transition-transform active:scale-95"
        title="Energy Orb & Shader Background Controls"
      >
        <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-spin" style={{ animationDuration: '6s' }} />
        <span className="hidden sm:inline">Energy Orb BG</span>
        <Sliders className="w-3 h-3 text-slate-400" />
      </button>
    </div>
  );
};
