import React from 'react';
import {COLORS, FONT} from '../theme';

// Semi-circle speedometer: value 0-100, needle sweeps from -90deg (left) to +90deg (right).
export const Gauge: React.FC<{value: number; size?: number}> = ({value, size = 120}) => {
  const angle = -90 + (Math.min(100, Math.max(0, value)) / 100) * 180;
  const r = size / 2;
  const cx = r;
  const cy = r;
  const strokeW = size * 0.14;

  const arcPoint = (deg: number) => {
    const rad = (deg * Math.PI) / 180;
    return {x: cx + (r - strokeW / 2) * Math.cos(rad), y: cy + (r - strokeW / 2) * Math.sin(rad)};
  };
  const start = arcPoint(180);
  const end = arcPoint(0);

  const needleRad = (angle * Math.PI) / 180;
  const needleLen = r - strokeW * 1.4;
  const nx = cx + needleLen * Math.cos(needleRad);
  const ny = cy + needleLen * Math.sin(needleRad);

  return (
    <svg width={size} height={size * 0.62} viewBox={`0 0 ${size} ${size * 0.62}`}>
      <defs>
        <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={COLORS.gaugeRed} />
          <stop offset="50%" stopColor={COLORS.gaugeYellow} />
          <stop offset="100%" stopColor={COLORS.gaugeGreen} />
        </linearGradient>
      </defs>
      <path
        d={`M ${start.x} ${start.y} A ${r - strokeW / 2} ${r - strokeW / 2} 0 0 1 ${end.x} ${end.y}`}
        fill="none"
        stroke="url(#gaugeGrad)"
        strokeWidth={strokeW}
        strokeLinecap="round"
      />
      <line x1={cx} y1={cy} x2={nx} y2={ny} stroke={COLORS.ink} strokeWidth={4} strokeLinecap="round" />
      <circle cx={cx} cy={cy} r={7} fill={COLORS.ink} />
    </svg>
  );
};

export const GaugeStat: React.FC<{value: number; size?: number}> = ({value, size = 140}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 18}}>
    <div style={{fontFamily: FONT, fontWeight: 800, fontSize: size * 0.42, color: COLORS.gradA}}>
      {Math.round(value)}
    </div>
    <Gauge value={value} size={size} />
  </div>
);
