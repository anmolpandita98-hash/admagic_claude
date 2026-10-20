import React from 'react';
import {COLORS} from '../theme';

// A soft curved bezier line connecting two points in a node diagram, with a
// draw-in progress (0-1) and a glowing dot marker that appears once drawn.
export const NodeConnector: React.FC<{
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  progress: number;
  color?: string;
}> = ({x1, y1, x2, y2, progress, color = COLORS.gradC}) => {
  const midX = (x1 + x2) / 2;
  const path = `M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`;
  // Approximate path length for a gentle S-curve.
  const approxLen = Math.hypot(x2 - x1, y2 - y1) * 1.25 + 40;

  return (
    <svg
      style={{position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible', pointerEvents: 'none'}}
    >
      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth={3}
        strokeLinecap="round"
        strokeDasharray={approxLen}
        strokeDashoffset={approxLen * (1 - progress)}
        opacity={0.75}
      />
      {progress > 0.95 && (
        <>
          <circle cx={x1} cy={y1} r={6} fill={color} />
          <circle cx={x2} cy={y2} r={6} fill={color} style={{filter: `drop-shadow(0 0 6px ${color})`}} />
        </>
      )}
    </svg>
  );
};
