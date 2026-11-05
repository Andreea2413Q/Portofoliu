"use client";

import { useEffect, useRef, useState } from "react";

// --- Constants ---
const GRID_SCALE = 1 / 20;
const DEFAULT_CELL_SIZE = 10;
const HOVER_RADIUS = 7;
const ANGLE_INCREMENT = 0.1;

const INTENSITY_SMOOTHING = { current: 0.2, target: 0.8 };
const BORDER_SMOOTHING = { current: 0.2, target: 0.8 };

const BG_OPACITY_MULTIPLIER = 0.25;
const BORDER_THICKNESS_MULTIPLIER = 4;

const DEFAULT_HOVER = -999;

const BORDER_COLOR = { r: 255, g: 50, b: 153 };
const OUTLINE_OPACITY = 0.08;

// --- Types ---
type CellState = {
  intensity: number;
  borderTop: number;
  borderRight: number;
  borderBottom: number;
  borderLeft: number;
};

type GridDims = { rows: number; cols: number };
type HoverPos = { row: number; col: number };

function makeGrid(rows: number, cols: number): CellState[][] {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => ({
      intensity: 0,
      borderTop: 0,
      borderRight: 0,
      borderBottom: 0,
      borderLeft: 0,
    }))
  );
}

export default function BackgroundGrid() {
  const [cellSize, setCellSize] = useState(DEFAULT_CELL_SIZE);
  const [cols, setCols] = useState(0);
  const [rows, setRows] = useState(0);
  const [flat, setFlat] = useState<CellState[]>([]);

  // State pentru hover în loc de refs - declanșează re-render
  const [hoverPos, setHoverPos] = useState<HoverPos>({ row: DEFAULT_HOVER, col: DEFAULT_HOVER });

  const angleRef = useRef(0);
  const bufferRef = useRef<CellState[][]>([]);
  const rafRef = useRef<number>(0);
  const dimsRef = useRef({ rows: 0, cols: 0 });

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const size = Math.min(w, h) * GRID_SCALE;
      const c = Math.ceil(w / size);
      const r = Math.ceil(h / size);
      setCellSize(size);
      setCols(c);
      setRows(r);
      dimsRef.current = { rows: r, cols: c };
      bufferRef.current = makeGrid(r, c);
      setFlat(makeGrid(r, c).flat());
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Mouse move la nivel de document
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const grid = document.querySelector('[data-grid]');
      if (!grid) return;
      
      const rect = grid.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const c = Math.floor(x / cellSize);
      const r = Math.floor(y / cellSize);
      
      if (r >= 0 && r < rows && c >= 0 && c < cols) {
        setHoverPos({ row: r, col: c });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [cellSize, rows, cols]);

  useEffect(() => {
    if (!bufferRef.current.length || rows === 0) return;

    const tick = () => {
      angleRef.current += ANGLE_INCREMENT;
      const buf = bufferRef.current;
      const { rows: R, cols: C } = dimsRef.current;
      if (!buf.length || R === 0) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const hcr = hoverPos.row;
      const hcc = hoverPos.col;
      const radius = HOVER_RADIUS;

      for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
          const dr = r + 0.5 - hcr;
          const dc = c + 0.5 - hcc;
          const dist = Math.sqrt(dr * dr + dc * dc);
          const falloff = Math.max(0, 1 - dist / radius);
          const intensity = falloff * falloff;
          const angle = Math.atan2(dr, dc) + angleRef.current;
          const spin = Math.sin(angle) * falloff;
          const cos = Math.cos(angle) * falloff;

          const cell = buf[r][c];
          cell.intensity = cell.intensity * INTENSITY_SMOOTHING.current + intensity * INTENSITY_SMOOTHING.target;
          cell.borderTop = cell.borderTop * BORDER_SMOOTHING.current + (spin > 0 ? spin * intensity : 0) * BORDER_SMOOTHING.target;
          cell.borderBottom = cell.borderBottom * BORDER_SMOOTHING.current + (spin < 0 ? -spin * intensity : 0) * BORDER_SMOOTHING.target;
          cell.borderRight = cell.borderRight * BORDER_SMOOTHING.current + (cos > 0 ? cos * intensity : 0) * BORDER_SMOOTHING.target;
          cell.borderLeft = cell.borderLeft * BORDER_SMOOTHING.current + (cos < 0 ? -cos * intensity : 0) * BORDER_SMOOTHING.target;
        }
      }

      // Creăm array nou pentru a declanșa re-render
      setFlat(buf.flat().map(cell => ({ ...cell })));
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [rows, cols, hoverPos]);

  return (
    <div
      data-grid
      className="fixed inset-0 z-0 bg-[rgba(102,0,204,0.15)] overflow-hidden"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
        perspective: "1000px",
        perspectiveOrigin: "center center",
      }}
    >
      {flat.map((cell, i) => {
        const r = Math.floor(i / cols);
        const c = i % cols;
        return (
          <div
            key={`${r}-${c}`}
            style={{
              backgroundColor: `rgba(102,0,204,${cell.intensity * BG_OPACITY_MULTIPLIER})`,
              borderTop: `${cell.borderTop * BORDER_THICKNESS_MULTIPLIER}px solid rgba(${BORDER_COLOR.r},${BORDER_COLOR.g},${BORDER_COLOR.b},${cell.borderTop})`,
              borderRight: `${cell.borderRight * BORDER_THICKNESS_MULTIPLIER}px solid rgba(${BORDER_COLOR.r},${BORDER_COLOR.g},${BORDER_COLOR.b},${cell.borderRight})`,
              borderBottom: `${cell.borderBottom * BORDER_THICKNESS_MULTIPLIER}px solid rgba(${BORDER_COLOR.r},${BORDER_COLOR.g},${BORDER_COLOR.b},${cell.borderBottom})`,
              borderLeft: `${cell.borderLeft * BORDER_THICKNESS_MULTIPLIER}px solid rgba(${BORDER_COLOR.r},${BORDER_COLOR.g},${BORDER_COLOR.b},${cell.borderLeft})`,
              boxSizing: "border-box",
              outline: `0.5px solid rgba(102,0,204,${OUTLINE_OPACITY})`,
              transform: cell.intensity > 0.01 
                ? `translateZ(${cell.intensity * 20}px) scale(${1 + cell.intensity * 0.15})`
                : "none",
              transformOrigin: "center center",
              transition: "transform 0.1s ease-out",
              zIndex: Math.floor(cell.intensity * 100),
            }}
          />
        );
      })}
    </div>
  );
}