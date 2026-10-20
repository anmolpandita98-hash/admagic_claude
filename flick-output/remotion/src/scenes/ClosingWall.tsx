import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {COLORS, FONT, PURPLE_BG} from '../theme';
import {TiltedCardWall} from '../components/TiltedCardWall';
import {Sparkle} from '../components/Logo';
import {Narration} from '../components/Narration';
import {Sfx} from '../components/Sfx';

export const ClosingWall: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const blur = interpolate(frame, [55, 100], [0, 14], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const wallOpacity = interpolate(frame, [55, 100], [1, 0.85], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  const btnSpring = spring({frame: frame - 105, fps, config: {damping: 11}, durationInFrames: 22});
  const btnOpacity = interpolate(frame, [105, 125], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const pulse = 1 + 0.03 * Math.sin((frame - 130) / 8);
  const urlOpacity = interpolate(frame, [140, 160], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill style={{background: PURPLE_BG}}>
      <Narration src="audio/closing-wall.mp3" startFrame={20} />
      <Sfx file="Impact.mp3" startFrame={105} volume={0.5} />

      <TiltedCardWall revealStart={0} blur={blur} opacity={wallOpacity} />

      <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <div
          style={{
            opacity: btnOpacity,
            transform: `scale(${0.6 + btnSpring * 0.4 * pulse})`,
            background: `linear-gradient(90deg, ${COLORS.gradC}, ${COLORS.gradB})`,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '24px 56px',
            borderRadius: 60,
            boxShadow: `0 20px 60px ${COLORS.gradC}77`,
          }}
        >
          <Sparkle size={30} color={COLORS.white} />
          <span style={{fontFamily: FONT, fontWeight: 800, fontSize: 34, color: COLORS.white}}>
            Try It Now
          </span>
        </div>

        <div
          style={{
            marginTop: 26,
            opacity: urlOpacity,
            fontFamily: FONT,
            fontWeight: 600,
            fontSize: 22,
            color: COLORS.ink,
            background: 'rgba(255,255,255,0.85)',
            padding: '10px 24px',
            borderRadius: 30,
            boxShadow: '0 10px 30px rgba(50,20,90,0.2)',
          }}
        >
          or join the waitlist — https://www.admagic.cloud/#waitlist
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
