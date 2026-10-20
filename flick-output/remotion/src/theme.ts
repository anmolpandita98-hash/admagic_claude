import type React from 'react';

export const COLORS = {
  // Light purple radial-gradient field, matching the reference video
  bgCenter: '#F4EEFF',
  bgEdge: '#8B6AE8',
  bgEdgeDeep: '#6D3FCB',
  white: '#FFFFFF',
  ink: '#221B3B',
  inkSoft: '#5B5470',
  dark: '#1A1626',
  darkSoft: '#2A2438',
  // Warm kinetic-type gradient
  gradA: '#F6A93B', // orange
  gradB: '#F0668E', // coral/pink
  gradC: '#9B6BF2', // purple
  // AdMagic brand accent (kept from the existing identity)
  brandGreen: '#3CFF9A',
  // Gauge stops
  gaugeRed: '#F0475A',
  gaugeYellow: '#FFC94A',
  gaugeGreen: '#3CFF9A',
} as const;

export const FONT = "'Poppins', 'Segoe UI', -apple-system, sans-serif";

export const PURPLE_BG = `radial-gradient(ellipse 80% 65% at 50% 45%, ${COLORS.bgCenter} 0%, ${COLORS.bgEdge} 65%, ${COLORS.bgEdgeDeep} 100%)`;

export const gradientTextStyle: React.CSSProperties = {
  backgroundImage: `linear-gradient(90deg, ${COLORS.gradA}, ${COLORS.gradB}, ${COLORS.gradC})`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
};
