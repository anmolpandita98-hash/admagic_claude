import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT, gradientTextStyle} from '../theme';

// Word-by-word kinetic reveal, each word snapping in with a spring pop,
// colored with the brand's warm orange->pink->purple gradient.
export const KineticWords: React.FC<{
  text: string;
  startFrame: number;
  perWord?: number;
  fontSize?: number;
}> = ({text, startFrame, perWord = 6, fontSize = 64}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const words = text.split(' ');

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '0 18px',
        maxWidth: 1400,
        textAlign: 'center',
      }}
    >
      {words.map((word, i) => {
        const wordStart = startFrame + i * perWord;
        const s = spring({frame: frame - wordStart, fps, config: {damping: 12}, durationInFrames: 16});
        const opacity = interpolate(s, [0, 1], [0, 1]);
        const scale = interpolate(s, [0, 1], [0.5, 1]);
        return (
          <span
            key={i}
            style={{
              fontFamily: FONT,
              fontWeight: 800,
              fontSize,
              opacity,
              transform: `scale(${scale})`,
              display: 'inline-block',
              filter: 'drop-shadow(0 3px 6px rgba(20,8,45,0.55)) drop-shadow(0 0 20px rgba(20,8,45,0.4))',
              ...gradientTextStyle,
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};
