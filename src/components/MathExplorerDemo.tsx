import React, { useState } from 'react';
import { Calculator, Network, Sparkles, HelpCircle } from 'lucide-react';

export const MathExplorerDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'math' | 'subnet'>('math');

  // Math Quadratic state: y = ax^2 + bx + c
  const [a, setA] = useState<number>(1);
  const [b, setB] = useState<number>(-2);
  const [c, setC] = useState<number>(-3);

  // Subnet state
  const [cidr, setCidr] = useState<number>(24);
  const [baseIp] = useState<string>('192.168.10.0');

  // Quadratic calculations
  const discriminant = b * b - 4 * a * c;
  const vertexX = -b / (2 * a);
  const vertexY = a * vertexX * vertexX + b * vertexX + c;

  let rootsText = '';
  if (a === 0) {
    rootsText = 'Linear equation (a ≠ 0 required for parabola)';
  } else if (discriminant > 0) {
    const r1 = ((-b + Math.sqrt(discriminant)) / (2 * a)).toFixed(2);
    const r2 = ((-b - Math.sqrt(discriminant)) / (2 * a)).toFixed(2);
    rootsText = `Two distinct real roots: x₁ = ${r1}, x₂ = ${r2}`;
  } else if (discriminant === 0) {
    const r = (-b / (2 * a)).toFixed(2);
    rootsText = `One repeated real root: x = ${r}`;
  } else {
    rootsText = 'No real roots (Discriminant Δ < 0, complex roots)';
  }

  // Generate SVG path for y = ax^2 + bx + c
  // Graph bounds: x from -8 to 8, y from -10 to 10
  const svgWidth = 360;
  const svgHeight = 240;
  const scaleX = svgWidth / 16; // 16 units across (-8 to 8)
  const scaleY = svgHeight / 20; // 20 units tall (-10 to 10)
  const originX = svgWidth / 2;
  const originY = svgHeight / 2;

  const points: [number, number][] = [];
  for (let x = -8; x <= 8; x += 0.2) {
    const y = a * x * x + b * x + c;
    const sx = originX + x * scaleX;
    const sy = originY - y * scaleY;
    points.push([sx, sy]);
  }

  const pathString = points.reduce((acc, pt, idx) => {
    const [px, py] = pt;
    if (idx === 0) return `M ${px} ${py}`;
    return `${acc} L ${px} ${py}`;
  }, '');

  // Subnet calculation
  const totalAddresses = Math.pow(2, 32 - cidr);
  const usableHosts = Math.max(0, totalAddresses - 2);
  const subnetMask = (() => {
    let mask = '';
    let bits = cidr;
    for (let i = 0; i < 4; i++) {
      if (bits >= 8) {
        mask += '255';
        bits -= 8;
      } else if (bits > 0) {
        const val = 256 - Math.pow(2, 8 - bits);
        mask += val.toString();
        bits = 0;
      } else {
        mask += '0';
      }
      if (i < 3) mask += '.';
    }
    return mask;
  })();

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden" id="interactive-stem-lab">
      {/* Tool Header */}
      <div className="bg-slate-900 text-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Educational Sandbox</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            Mathematics & ICT Practical Demonstration Lab
          </h3>
          <p className="text-xs text-slate-400">
            Showcasing how digital tools transform abstract mathematics and network architecture.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="inline-flex p-1 bg-slate-950 rounded-xl self-start sm:self-auto border border-slate-800">
          <button
            onClick={() => setActiveTab('math')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'math'
                ? 'bg-amber-500 text-slate-950 shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Quadratic Locus Visualizer</span>
          </button>
          <button
            onClick={() => setActiveTab('subnet')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'subnet'
                ? 'bg-amber-500 text-slate-950 shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Network className="w-3.5 h-3.5" />
            <span>Cisco IP Subnet Lab</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Math Visualizer */}
      {activeTab === 'math' && (
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls */}
          <div className="lg:col-span-6 space-y-5">
            <div className="p-3.5 bg-blue-50/70 rounded-xl border border-blue-100 text-blue-900">
              <span className="text-xs font-bold uppercase tracking-wider block text-blue-700 mb-1">
                Function Formula
              </span>
              <div className="text-lg font-mono font-bold">
                f(x) = {a}x² {b >= 0 ? `+ ${b}x` : `- ${Math.abs(b)}x`} {c >= 0 ? `+ ${c}` : `- ${Math.abs(c)}`}
              </div>
            </div>

            {/* Slider a */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold text-slate-700">
                <span>Leading Coefficient (a): Curvature</span>
                <span className="font-mono text-blue-600">{a}</span>
              </div>
              <input
                type="range"
                min="-3"
                max="3"
                step="0.5"
                value={a}
                onChange={(e) => setA(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <span className="text-[11px] text-slate-500 block">
                {a > 0 ? 'Parabola opens upward (minimum vertex)' : a < 0 ? 'Parabola opens downward (maximum vertex)' : 'Degenerate straight line (a = 0)'}
              </span>
            </div>

            {/* Slider b */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold text-slate-700">
                <span>Linear Coefficient (b): Horizontal Shift</span>
                <span className="font-mono text-blue-600">{b}</span>
              </div>
              <input
                type="range"
                min="-6"
                max="6"
                step="0.5"
                value={b}
                onChange={(e) => setB(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            {/* Slider c */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold text-slate-700">
                <span>Constant Term (c): Y-intercept</span>
                <span className="font-mono text-blue-600">{c}</span>
              </div>
              <input
                type="range"
                min="-6"
                max="6"
                step="1"
                value={c}
                onChange={(e) => setC(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            {/* Analysis Box */}
            <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
              <div>
                <span className="text-slate-500 block text-[11px]">Discriminant (Δ = b² - 4ac)</span>
                <span className="font-mono font-bold text-slate-800">{discriminant.toFixed(2)}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Vertex Coordinates (h, k)</span>
                <span className="font-mono font-bold text-slate-800">
                  {a !== 0 ? `(${vertexX.toFixed(2)}, ${vertexY.toFixed(2)})` : 'N/A'}
                </span>
              </div>
              <div className="col-span-2 pt-2 border-t border-slate-200">
                <span className="text-slate-500 block text-[11px]">Root Status (x-intercepts)</span>
                <span className="font-semibold text-blue-700">{rootsText}</span>
              </div>
            </div>
          </div>

          {/* Graph Visualizer */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="w-full bg-slate-900 rounded-xl p-4 border border-slate-800 relative overflow-hidden shadow-inner">
              <div className="text-[11px] text-slate-400 font-mono flex items-center justify-between mb-2">
                <span>Cartesian Grid [-8, +8] × [-10, +10]</span>
                <span className="text-blue-400 font-semibold">y = ax² + bx + c</span>
              </div>

              <div className="relative flex justify-center">
                <svg
                  viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                  className="w-full max-w-[360px] h-[240px] bg-slate-950 rounded-lg border border-slate-800"
                >
                  {/* Grid Lines */}
                  {[-6, -4, -2, 2, 4, 6].map((xVal) => (
                    <line
                      key={`grid-x-${xVal}`}
                      x1={originX + xVal * scaleX}
                      y1="0"
                      x2={originX + xVal * scaleX}
                      y2={svgHeight}
                      stroke="#1e293b"
                      strokeWidth="1"
                      strokeDasharray="2,2"
                    />
                  ))}
                  {[-8, -4, 4, 8].map((yVal) => (
                    <line
                      key={`grid-y-${yVal}`}
                      x1="0"
                      y1={originY - yVal * scaleY}
                      x2={svgWidth}
                      y2={originY - yVal * scaleY}
                      stroke="#1e293b"
                      strokeWidth="1"
                      strokeDasharray="2,2"
                    />
                  ))}

                  {/* Axes */}
                  <line x1="0" y1={originY} x2={svgWidth} y2={originY} stroke="#475569" strokeWidth="1.5" />
                  <line x1={originX} y1="0" x2={originX} y2={svgHeight} stroke="#475569" strokeWidth="1.5" />

                  {/* Axis labels */}
                  <text x={svgWidth - 14} y={originY - 5} fill="#94a3b8" fontSize="10" fontFamily="monospace">x</text>
                  <text x={originX + 6} y={12} fill="#94a3b8" fontSize="10" fontFamily="monospace">y</text>

                  {/* Parabola Curve */}
                  <path
                    d={pathString}
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* Vertex Point */}
                  {a !== 0 && (
                    <circle
                      cx={originX + vertexX * scaleX}
                      cy={originY - vertexY * scaleY}
                      r="4.5"
                      fill="#f59e0b"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                    />
                  )}
                </svg>
              </div>

              <div className="mt-2 text-[10px] text-slate-400 text-center">
                Yellow dot indicates calculated vertex • Cyan curve plots continuous quadratic locus
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Subnet Calculator */}
      {activeTab === 'subnet' && (
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="p-3.5 bg-indigo-50/70 rounded-xl border border-indigo-100 text-indigo-950">
              <span className="text-xs font-bold uppercase tracking-wider block text-indigo-700 mb-1">
                Model Network Configuration
              </span>
              <div className="text-lg font-mono font-bold">
                {baseIp} / {cidr}
              </div>
              <p className="text-xs text-indigo-800/80 mt-1">
                Typical computer lab subnet configured for secondary school workstations in Uganda.
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold text-slate-700">
                <span>CIDR Prefix Length (/{cidr})</span>
                <span className="font-mono text-indigo-600">Mask: {subnetMask}</span>
              </div>
              <input
                type="range"
                min="24"
                max="30"
                step="1"
                value={cidr}
                onChange={(e) => setCidr(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>/24 (Class C lab)</span>
                <span>/28 (Small lab)</span>
                <span>/30 (P2P link)</span>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-600">
              <p>
                In a school environment, subnetting partitions computers so student traffic does not congest administrative computers or examination terminals.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 text-white space-y-3 font-mono text-xs shadow-inner">
              <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider border-b border-slate-800 pb-2 flex items-center justify-between">
                <span>Cisco IPv4 Subnet Breakdown</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-900 text-indigo-200 font-sans">
                  VLSM Active
                </span>
              </div>

              <div className="flex justify-between border-b border-slate-800/60 pb-1.5">
                <span className="text-slate-400">Subnet Mask:</span>
                <span className="text-emerald-400 font-bold">{subnetMask}</span>
              </div>

              <div className="flex justify-between border-b border-slate-800/60 pb-1.5">
                <span className="text-slate-400">Total IP Addresses:</span>
                <span className="text-white">{totalAddresses}</span>
              </div>

              <div className="flex justify-between border-b border-slate-800/60 pb-1.5">
                <span className="text-slate-400">Usable Workstation Hosts:</span>
                <span className="text-amber-400 font-bold">{usableHosts} PCs</span>
              </div>

              <div className="flex justify-between border-b border-slate-800/60 pb-1.5">
                <span className="text-slate-400">Network ID:</span>
                <span className="text-sky-300">{baseIp}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">Broadcast Address:</span>
                <span className="text-sky-300">192.168.10.{totalAddresses - 1}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
