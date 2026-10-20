import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {COLORS, FONT, PURPLE_BG} from '../theme';
import {Logo} from '../components/Logo';
import {Narration} from '../components/Narration';
import {Sfx} from '../components/Sfx';

const SUBHEAD = 'Predict and improve advertising impact with AI trained on decades of neuroscience data.';

export const BrandIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const logoSpring = spring({frame: frame - 10, fps, config: {damping: 11}, durationInFrames: 30});
  const logoOpacity = interpolate(frame, [10, 35], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  const typedChars = Math.floor(
    interpolate(frame, [55, 150], [0, SUBHEAD.length], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})
  );

  return (
    <AbsoluteFill style={{background: PURPLE_BG, justifyContent: 'center', alignItems: 'center'}}>
      <Narration src="audio/brand-intro.mp3" startFrame={15} />
      <Sfx file="Notification.mp3" startFrame={12} volume={0.5} />

      <div style={{transform: `scale(${0.6 + logoSpring * 0.4})`, opacity: logoOpacity}}>
        <Logo scale={1} />
      </div>

      <div
        style={{
          marginTop: 36,
          fontFamily: FONT,
          fontWeight: 600,
          fontSize: 32,
          color: COLORS.ink,
          maxWidth: 900,
          textAlign: 'center',
          minHeight: 90,
        }}
      >
        {SUBHEAD.slice(0, typedChars)}
        <span style={{opacity: frame % 20 < 10 && typedChars < SUBHEAD.length ? 1 : 0}}>|</span>
      </div>
    </AbsoluteFill>
  );
};
