import React, { useState, useEffect } from 'react';
import { Activity, AlertTriangle, BellRing, Cpu, Droplets, Grid, HeartPulse, Layers, Radio, SunMedium, Thermometer, Wifi } from 'lucide-react';

export const HealthcareVisual: React.FC = () => {
  const [pulsePhase, setPulsePhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulsePhase((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-48 sm:h-56 rounded-xl bg-slate-950/90 border border-rose-500/20 overflow-hidden flex flex-col justify-between p-4 group-hover:border-rose-500/40 transition-colors">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(244,63,94,0.15),transparent_60%)]" />
      
      {/* Header bar */}
      <div className="flex items-center justify-between z-10 text-[11px] font-mono">
        <div className="flex items-center gap-2">
          <HeartPulse className="w-4 h-4 text-rose-400 animate-pulse" />
          <span className="text-rose-300 font-semibold">INNOVEXA :: EMERGENCY DISPATCH</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
          ALERT STATUS: STANDBY
        </span>
      </div>

      {/* Simulated ECG / Pulse Line */}
      <div className="relative h-20 w-full flex items-center justify-center my-2 z-10">
        <svg className="w-full h-full" viewBox="0 0 300 80" preserveAspectRatio="none">
          <path
            d="M 0 40 L 50 40 L 60 20 L 70 60 L 80 15 L 90 40 L 140 40 L 150 25 L 160 55 L 170 10 L 180 40 L 230 40 L 240 22 L 250 58 L 260 40 L 300 40"
            fill="none"
            stroke="rgba(244, 63, 94, 0.3)"
            strokeWidth="2"
          />
          <path
            d="M 0 40 L 50 40 L 60 20 L 70 60 L 80 15 L 90 40 L 140 40 L 150 25 L 160 55 L 170 10 L 180 40 L 230 40 L 240 22 L 250 58 L 260 40 L 300 40"
            fill="none"
            stroke="#f43f5e"
            strokeWidth="2"
            strokeDasharray="60 240"
            strokeDashoffset={-pulsePhase * 3}
          />
        </svg>
      </div>

      {/* Telemetry data pills */}
      <div className="grid grid-cols-3 gap-2 z-10 text-[11px] font-mono">
        <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
          <span className="text-slate-400 block text-[9px]">HEART RATE</span>
          <span className="text-rose-400 font-bold">78 BPM</span>
        </div>
        <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
          <span className="text-slate-400 block text-[9px]">SPO2</span>
          <span className="text-cyan-400 font-bold">98%</span>
        </div>
        <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
          <span className="text-slate-400 block text-[9px]">ALERT PROTOCOL</span>
          <span className="text-emerald-400 font-bold">READY</span>
        </div>
      </div>
    </div>
  );
};

export const SmartFarmingVisual: React.FC = () => {
  return (
    <div className="relative w-full h-48 sm:h-56 rounded-xl bg-slate-950/90 border border-emerald-500/20 overflow-hidden flex flex-col justify-between p-4 group-hover:border-emerald-500/40 transition-colors">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.15),transparent_60%)]" />

      {/* Header bar */}
      <div className="flex items-center justify-between z-10 text-[11px] font-mono">
        <div className="flex items-center gap-2">
          <Wifi className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span className="text-emerald-300 font-semibold">BLYNK IOT :: CROP TELEMETRY</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
          LIVE SENSORS
        </span>
      </div>

      {/* IoT metrics visual gauges */}
      <div className="grid grid-cols-3 gap-2 my-auto z-10">
        <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex flex-col items-center justify-center text-center">
          <Droplets className="w-5 h-5 text-cyan-400 mb-1" />
          <div className="text-[10px] text-slate-400 font-mono">SOIL MOISTURE</div>
          <div className="text-base font-bold text-white font-mono mt-0.5">64%</div>
          <div className="w-full bg-slate-800 h-1 rounded-full mt-1.5 overflow-hidden">
            <div className="bg-cyan-400 h-full w-[64%]" />
          </div>
        </div>

        <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex flex-col items-center justify-center text-center">
          <Thermometer className="w-5 h-5 text-amber-400 mb-1" />
          <div className="text-[10px] text-slate-400 font-mono">AMBIENT TEMP</div>
          <div className="text-base font-bold text-white font-mono mt-0.5">27.4°C</div>
          <div className="w-full bg-slate-800 h-1 rounded-full mt-1.5 overflow-hidden">
            <div className="bg-amber-400 h-full w-[55%]" />
          </div>
        </div>

        <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex flex-col items-center justify-center text-center">
          <SunMedium className="w-5 h-5 text-emerald-400 mb-1" />
          <div className="text-[10px] text-slate-400 font-mono">HUMIDITY</div>
          <div className="text-base font-bold text-white font-mono mt-0.5">78%</div>
          <div className="w-full bg-slate-800 h-1 rounded-full mt-1.5 overflow-hidden">
            <div className="bg-emerald-400 h-full w-[78%]" />
          </div>
        </div>
      </div>

      {/* Footer trigger */}
      <div className="flex items-center justify-between text-[11px] font-mono z-10 text-slate-400 border-t border-slate-800/80 pt-2">
        <span>RELAY STATE: AUTOMATIC</span>
        <span className="text-emerald-400">PUMP STANDBY</span>
      </div>
    </div>
  );
};

export const GraphicsEditorVisual: React.FC = () => {
  return (
    <div className="relative w-full h-48 sm:h-56 rounded-xl bg-slate-950/90 border border-violet-500/20 overflow-hidden flex flex-col justify-between p-4 group-hover:border-violet-500/40 transition-colors">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.15),transparent_60%)]" />

      {/* Header bar */}
      <div className="flex items-center justify-between z-10 text-[11px] font-mono">
        <div className="flex items-center gap-2">
          <Grid className="w-4 h-4 text-violet-400" />
          <span className="text-violet-300 font-semibold">2D_CANVAS.C :: FRAMEBUFFER</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
          C GRAPHICS
        </span>
      </div>

      {/* Coordinate Canvas Grid Visual */}
      <div className="relative h-24 w-full my-auto z-10 rounded-lg bg-slate-900/90 border border-slate-800 p-2 overflow-hidden flex items-center justify-center">
        {/* Raster grid dots */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#a78bfa_1px,transparent_1px)] [background-size:12px_12px]" />
        
        {/* Visual geometric primitive drawn */}
        <svg className="w-full h-full" viewBox="0 0 200 70">
          {/* Axis */}
          <line x1="10" y1="60" x2="190" y2="60" stroke="#334155" strokeWidth="1" />
          <line x1="10" y1="10" x2="10" y2="60" stroke="#334155" strokeWidth="1" />
          {/* Raster line */}
          <line x1="20" y1="50" x2="80" y2="15" stroke="#a78bfa" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx="20" cy="50" r="3" fill="#38bdf8" />
          <circle cx="80" cy="15" r="3" fill="#38bdf8" />
          {/* Circle primitive */}
          <circle cx="140" cy="35" r="22" stroke="#22d3ee" strokeWidth="1.5" fill="rgba(34,211,238,0.1)" />
          <rect x="130" y="25" width="20" height="20" stroke="#818cf8" strokeWidth="1" fill="none" />
        </svg>

        <div className="absolute bottom-1 right-2 text-[9px] font-mono text-cyan-400">
          Bresenham(x0, y0, x1, y1)
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex items-center justify-between text-[11px] font-mono z-10 text-slate-400 border-t border-slate-800/80 pt-2">
        <span className="text-slate-300">std_graphics.h</span>
        <span className="text-violet-300">INTERACTIVE 2D CANVAS</span>
      </div>
    </div>
  );
};
