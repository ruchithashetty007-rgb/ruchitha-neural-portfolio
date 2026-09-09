import React, { useEffect, useRef, useState } from 'react';

interface ParticleNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  cluster: number;
  pulsePhase: number;
  label?: string;
}

interface DataPacket {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  color: string;
}

export const DigitalMind: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeConcept, setActiveConcept] = useState<string>("Neural Lattice");
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });

  const codeSnippets = [
    "Learning → Code → Data → Intelligence",
    "def train_step(data): loss.backward()",
    "std::vector<Node*> graph;",
    "IoT_Sensor.stream(Telemetry);",
    "Bresenham::rasterize_line(p1, p2);",
    "KCET_Merit::REVA_University.init();",
    "tensor.reshape([-1, 128]);",
    "EDA::visualize_distribution(data);",
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    // Setup nodes
    const nodeCount = 38;
    const colors = [
      'rgba(56, 189, 248, ',  // Cyan
      'rgba(59, 130, 246, ',  // Blue
      'rgba(139, 92, 246, ',  // Violet
      'rgba(99, 102, 241, ',  // Indigo
    ];

    const nodes: ParticleNode[] = [];
    const labels = [
      "Python", "C++", "C", "IoT", "Data", "AI", "Metrics", 
      "Nodes", "Blynk", "Logic", "Math", "Analysis", "Neural"
    ];

    for (let i = 0; i < nodeCount; i++) {
      const cluster = i % 4;
      // Distribute somewhat organically in an abstract ellipsoid network
      const angle = (i / nodeCount) * Math.PI * 2;
      const dist = 60 + Math.random() * (Math.min(width, height) * 0.38);
      const cx = width / 2 + Math.cos(angle) * dist * (0.8 + Math.sin(angle * 3) * 0.2);
      const cy = height / 2 + Math.sin(angle) * dist * 0.75;

      nodes.push({
        x: Math.max(20, Math.min(width - 20, cx)),
        y: Math.max(20, Math.min(height - 20, cy)),
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: 2 + Math.random() * 3,
        color: colors[cluster],
        cluster,
        pulsePhase: Math.random() * Math.PI * 2,
        label: i < labels.length ? labels[i] : undefined,
      });
    }

    // Data packets travelling between nodes
    const packets: DataPacket[] = [];
    for (let i = 0; i < 8; i++) {
      packets.push({
        fromNode: Math.floor(Math.random() * nodeCount),
        toNode: Math.floor(Math.random() * nodeCount),
        progress: Math.random(),
        speed: 0.006 + Math.random() * 0.009,
        color: Math.random() > 0.5 ? '#38bdf8' : '#a78bfa',
      });
    }

    // Resize observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        width = canvas.width = entry.contentRect.width;
        height = canvas.height = entry.contentRect.height;
      }
    });
    resizeObserver.observe(container);

    let tick = 0;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // Mouse influence
      const mx = mouseRef.current.active ? mouseRef.current.x : width / 2;
      const my = mouseRef.current.active ? mouseRef.current.y : height / 2;

      // Draw subtle orbital halo around the core
      const gradient = ctx.createRadialGradient(
        width / 2 + (mx - width / 2) * 0.05,
        height / 2 + (my - height / 2) * 0.05,
        20,
        width / 2,
        height / 2,
        Math.min(width, height) * 0.45
      );
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.12)');
      gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.04)');
      gradient.addColorStop(1, 'rgba(5, 8, 17, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, Math.min(width, height) * 0.45, 0, Math.PI * 2);
      ctx.fill();

      // Update and connect nodes
      const maxDistance = 110;

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.35;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(96, 165, 250, ${alpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      // Update packets
      packets.forEach((p) => {
        p.progress += p.speed;
        if (p.progress >= 1) {
          p.progress = 0;
          p.fromNode = Math.floor(Math.random() * nodes.length);
          p.toNode = Math.floor(Math.random() * nodes.length);
        }

        const n1 = nodes[p.fromNode];
        const n2 = nodes[p.toNode];
        if (n1 && n2) {
          const px = n1.x + (n2.x - n1.x) * p.progress;
          const py = n1.y + (n2.y - n1.y) * p.progress;

          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(px, py, 2.2, 0, Math.PI * 2);
          ctx.fill();

          ctx.shadowColor = p.color;
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // Update & draw nodes
      nodes.forEach((node, idx) => {
        // Move slightly
        node.x += node.vx;
        node.y += node.vy;
        node.pulsePhase += 0.03;

        // Subtle mouse repulsion/reaction
        if (mouseRef.current.active) {
          const mdx = node.x - mouseRef.current.x;
          const mdy = node.y - mouseRef.current.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 140) {
            const force = (1 - mdist / 140) * 0.7;
            node.x += (mdx / mdist) * force;
            node.y += (mdy / mdist) * force;
          }
        }

        // Bounce within canvas limits
        const margin = 20;
        if (node.x < margin || node.x > width - margin) node.vx *= -1;
        if (node.y < margin || node.y > height - margin) node.vy *= -1;

        // Pulse size
        const currentRadius = node.radius + Math.sin(node.pulsePhase) * 0.7;

        // Glowing outer circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius * 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `${node.color}0.15)`;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `${node.color}0.95)`;
        ctx.fill();

        // If labeled node, draw tiny modern terminal label
        if (node.label && (idx % 3 === 0)) {
          ctx.font = '10px "JetBrains Mono", monospace';
          ctx.fillStyle = 'rgba(226, 232, 240, 0.7)';
          ctx.fillText(node.label, node.x + 8, node.y + 3);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      id="digital-mind-canvas-container"
      className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-950/70 shadow-2xl backdrop-blur-md flex items-center justify-center group"
      role="img"
      aria-label="Interactive Digital Mind Neural Network Visualization"
    >
      {/* Background radial accent */}
      <div className="absolute inset-0 bg-radial-vignette opacity-80 pointer-events-none" />
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Futuristic frame header bar */}
      <div className="absolute top-0 left-0 right-0 h-10 px-4 flex items-center justify-between border-b border-slate-800/60 bg-slate-900/40 text-xs font-mono text-slate-400 select-none z-10">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-400 font-semibold tracking-wider">THE DIGITAL MIND</span>
          <span className="text-slate-600">|</span>
          <span className="hidden sm:inline text-slate-400">NEURAL_LATTICE_V2</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-slate-400">
          <span className="hidden md:inline px-2 py-0.5 rounded bg-slate-800/60 text-slate-300 border border-slate-700/50">
            INTERACTIVE REACTIVE
          </span>
          <span className="text-cyan-300/80">LATENCY: 0.1ms</span>
        </div>
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-crosshair"
      />

      {/* Subtle floating code fragments */}
      <div className="absolute bottom-12 left-4 right-4 pointer-events-none flex flex-wrap gap-2 justify-between items-end z-10">
        <div className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800/80 text-[11px] font-mono text-cyan-300/90 shadow-lg backdrop-blur-md max-w-[280px]">
          <span className="text-slate-500 mr-1.5">&gt;</span>
          <span className="text-emerald-400 font-semibold">learning_pipeline:</span> Learning → Code → Data → Intelligence
        </div>
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800/80 text-[11px] font-mono text-slate-300 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
          <span>Nodes: 38</span>
          <span className="text-slate-600">•</span>
          <span>Synapses: 142</span>
        </div>
      </div>

      {/* Floating telemetry pills */}
      <div className="absolute top-14 right-4 hidden sm:flex flex-col gap-1.5 pointer-events-none z-10 text-[10px] font-mono">
        <div className="px-2.5 py-1 rounded bg-slate-900/90 border border-cyan-950/60 text-cyan-300 shadow">
          SYS::ACTIVE_LEARNING
        </div>
        <div className="px-2.5 py-1 rounded bg-slate-900/90 border border-slate-800 text-slate-400 shadow">
          TOPIC::DATA_STRUCTURES
        </div>
      </div>
    </div>
  );
};
