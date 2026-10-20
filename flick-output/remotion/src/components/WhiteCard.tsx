import React from 'react';
import {COLORS} from '../theme';

export const WhiteCard: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
  glow?: string;
}> = ({children, style, glow}) => (
  <div
    style={{
      background: COLORS.white,
      borderRadius: 20,
      boxShadow: glow
        ? `0 0 40px ${glow}66, 0 20px 50px rgba(50,20,90,0.25)`
        : '0 20px 50px rgba(50,20,90,0.22)',
      ...style,
    }}
  >
    {children}
  </div>
);

export const DarkChip: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({children, style}) => (
  <div
    style={{
      background: COLORS.dark,
      borderRadius: 16,
      boxShadow: '0 16px 40px rgba(30,10,60,0.35)',
      ...style,
    }}
  >
    {children}
  </div>
);
