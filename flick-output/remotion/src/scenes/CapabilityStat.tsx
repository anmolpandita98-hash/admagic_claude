import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {COLORS, FONT, gradientTextStyle} from '../theme';
import {Narration} from '../components/Narration';
import {Sfx} from '../components/Sfx';

const CHIPS = ['D2C Brand Owners', 'Agencies', 'Marketers & Founders'];

export const CapabilityStat: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const countSpring = spring({frame: frame - 15, fps, config: {damping: 12}, durationInFrames: 40});
  const count = Math.round(interpolate(countSpring, [0, 1], [0, 100]));
  const numOpacity = interpolate(frame, [15, 30], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  const subOpacity = interpolate(frame, [70, 92], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const lineOpacity = interpolate(frame, [65, 85], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse 90% 70% at 50% 40%, #FFFFFF 0%, #F1E9FF 60%, #E4D4FF 100%)`,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Narration src="audio/capability-stat.mp3" startFrame={12} />
      <Sfx file="riser.mp3" startFrame={10} volume={0.35} />
      <Sfx file="Pop.mp3" startFrame={100} volume={0.4} />
      <Sfx file="Pop.mp3" startFrame={112} volume={0.4} />
      <Sfx file="Pop.mp3" startFrame={124} volume={0.4} />

      <div
        style={{
          fontFamily: FONT,
          fontWeight: 800,
          fontSize: 200,
          opacity: numOpacity,
          ...gradientTextStyle,
        }}
      >
        {count}+
      </div>

      <div style={{width: 340, height: 2, background: COLORS.gradC, opacity: lineOpacity * 0.4, margin: '10px 0 24px'}} />

      <div
        style={{
          fontFamily: FONT,
          fontWeight: 700,
          fontSize: 30,
          color: COLORS.ink,
          opacity: subOpacity,
          textAlign: 'center',
        }}
      >
        already on the AdMagic waitlist
      </div>

      <div style={{display: 'flex', gap: 16, marginTop: 44}}>
        {CHIPS.map((chip, i) => {
          const s = spring({frame: frame - 100 - i * 12, fps, config: {damping: 12}, durationInFrames: 18});
          return (
            <div
              key={chip}
              style={{
                opacity: interpolate(s, [0, 1], [0, 1]),
                transform: `translateY(${interpolate(s, [0, 1], [24, 0])}px) scale(${interpolate(s, [0, 1], [0.8, 1])})`,
                background: COLORS.white,
                border: `1.5px solid ${COLORS.gradC}44`,
                borderRadius: 30,
                padding: '12px 26px',
                fontFamily: FONT,
                fontWeight: 700,
                fontSize: 18,
                color: COLORS.ink,
                boxShadow: '0 10px 25px rgba(80,40,140,0.15)',
              }}
            >
              {chip}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
