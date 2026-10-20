import React from 'react';
import {AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {COLORS, FONT, PURPLE_BG} from '../theme';
import {WhiteCard} from '../components/WhiteCard';
import {Logo} from '../components/Logo';
import {Narration} from '../components/Narration';
import {Sfx} from '../components/Sfx';

const ICONS = [
  {emoji: '🧠', label: 'Neuroscience Research', angle: -90},
  {emoji: '💡', label: 'Insights & Recommendations', angle: 30},
  {emoji: '✨', label: 'Expert Design Iterations', angle: 150},
];

const RING_R = 170;
const CX = 960;
const CY = 540;

export const TheLoop: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const ringProgress = interpolate(frame, [8, 35], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const ringLen = 2 * Math.PI * RING_R;

  const assetInSpring = spring({frame: frame - 25, fps, config: {damping: 13}, durationInFrames: 20});
  const assetOutSpring = spring({frame: frame - 68, fps, config: {damping: 13}, durationInFrames: 20});
  const checkOpacity = interpolate(frame, [88, 100], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill style={{background: PURPLE_BG}}>
      <Narration src="audio/the-loop.mp3" startFrame={10} />
      <Sfx file="energy.MP3" startFrame={8} volume={0.3} />
      <Sfx file="Correct.mp3" startFrame={88} volume={0.4} />

      <svg style={{position: 'absolute', inset: 0}}>
        <circle
          cx={CX}
          cy={CY}
          r={RING_R}
          fill="none"
          stroke={COLORS.white}
          strokeWidth={4}
          strokeDasharray={ringLen}
          strokeDashoffset={ringLen * (1 - ringProgress)}
          opacity={0.75}
        />
      </svg>

      <div
        style={{
          position: 'absolute',
          left: CX - 70,
          top: CY - 70,
          width: 140,
          height: 140,
          borderRadius: '50%',
          background: COLORS.white,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 20px 40px rgba(50,20,90,0.3)',
          opacity: ringProgress,
        }}
      >
        <Logo scale={0.32} dark />
      </div>

      {ICONS.map((icon, i) => {
        const rad = (icon.angle * Math.PI) / 180;
        const x = CX + RING_R * Math.cos(rad);
        const y = CY + RING_R * Math.sin(rad);
        const s = spring({frame: frame - 15 - i * 6, fps, config: {damping: 12}, durationInFrames: 18});
        return (
          <div
            key={icon.label}
            style={{
              position: 'absolute',
              left: x - 55,
              top: y - 55,
              width: 110,
              height: 110,
              opacity: interpolate(s, [0, 1], [0, 1]),
              transform: `scale(${interpolate(s, [0, 1], [0.5, 1])})`,
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: COLORS.white,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 44,
                boxShadow: '0 16px 30px rgba(50,20,90,0.28)',
              }}
            >
              {icon.emoji}
            </div>
            <div
              style={{
                position: 'absolute',
                top: 118,
                left: -45,
                width: 200,
                textAlign: 'center',
                fontFamily: FONT,
                fontWeight: 700,
                fontSize: 14,
                color: COLORS.ink,
              }}
            >
              {icon.label}
            </div>
          </div>
        );
      })}

      <div
        style={{
          position: 'absolute',
          left: CX - RING_R - 260,
          top: CY - 70,
          width: 140,
          opacity: interpolate(assetInSpring, [0, 1], [0, 1]),
          transform: `translateX(${interpolate(assetInSpring, [0, 1], [-60, 0])}px)`,
        }}
      >
        <WhiteCard style={{padding: 6, height: 140}}>
          <Img src={staticFile('brand-assets/design-before.jpg')} style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8}} />
        </WhiteCard>
        <div style={{fontFamily: FONT, fontWeight: 700, fontSize: 13, color: COLORS.ink, textAlign: 'center', marginTop: 6}}>
          Asset
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: CX + RING_R + 120,
          top: CY - 70,
          width: 140,
          opacity: interpolate(assetOutSpring, [0, 1], [0, 1]),
          transform: `translateX(${interpolate(assetOutSpring, [0, 1], [60, 0])}px)`,
        }}
      >
        <div style={{position: 'relative'}}>
          <WhiteCard style={{padding: 6, height: 140}} glow={COLORS.brandGreen}>
            <Img src={staticFile('brand-assets/design-after.png')} style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8}} />
          </WhiteCard>
          <div
            style={{
              position: 'absolute',
              top: -10,
              right: -10,
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: COLORS.brandGreen,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: checkOpacity,
              fontSize: 18,
              color: '#052012',
              fontWeight: 800,
            }}
          >
            ✓
          </div>
        </div>
        <div style={{fontFamily: FONT, fontWeight: 700, fontSize: 13, color: COLORS.ink, textAlign: 'center', marginTop: 6}}>
          Optimized Asset
        </div>
      </div>
    </AbsoluteFill>
  );
};
