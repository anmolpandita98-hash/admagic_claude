import React from 'react';
import {COLORS, FONT} from '../theme';

export const Sparkle: React.FC<{size?: number; color?: string}> = ({size = 28, color = COLORS.brandGreen}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 0 L14.2 9.8 L24 12 L14.2 14.2 L12 24 L9.8 14.2 L0 12 L9.8 9.8 Z"
      fill={color}
      style={{filter: `drop-shadow(0 0 8px ${color})`}}
    />
  </svg>
);

export const Logo: React.FC<{scale?: number; opacity?: number; dark?: boolean}> = ({
  scale = 1,
  opacity = 1,
  dark = false,
}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 14, transform: `scale(${scale})`, opacity}}>
    <span
      style={{
        fontFamily: FONT,
        fontWeight: 800,
        fontSize: 88,
        color: dark ? COLORS.ink : COLORS.white,
        letterSpacing: -2,
      }}
    >
      Ad <span style={{color: COLORS.brandGreen}}>Magic</span>
    </span>
    <Sparkle size={44} />
  </div>
);
