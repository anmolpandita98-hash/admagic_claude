import React from 'react';
import {Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';

export const WALL_ASSETS = [
  'brand-assets/eclipse-banner.png',
  'brand-assets/1.jpg',
  'brand-assets/competitor-ad-research.png',
  'brand-assets/2.jpg',
  'brand-assets/design-after.png',
  'brand-assets/3.jpg',
  'brand-assets/design-before.jpg',
  'brand-assets/4.jpg',
  'brand-assets/eclipse-banner.png',
  'brand-assets/1.jpg',
  'brand-assets/2.jpg',
  'brand-assets/3.jpg',
];

export const TiltedCardWall: React.FC<{
  revealStart?: number;
  blur?: number;
  opacity?: number;
  tilt?: number;
}> = ({revealStart = 0, blur = 0, opacity = 1, tilt = 8}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const cols = 4;
  const rows = 3;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        opacity,
        filter: blur ? `blur(${blur}px)` : undefined,
        perspective: 1800,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: -80,
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gap: 22,
          transform: `rotateX(8deg) rotateY(${tilt}deg) rotateZ(-2deg) scale(1.12)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {WALL_ASSETS.map((src, i) => {
          const row = Math.floor(i / cols);
          const col = i % cols;
          const delay = revealStart + (row * cols + col) * 3;
          const s = spring({frame: frame - delay, fps, config: {damping: 14}, durationInFrames: 20});
          const op = interpolate(s, [0, 1], [0, 1]);
          const scale = interpolate(s, [0, 1], [0.7, 1]);
          return (
            <div
              key={i}
              style={{
                borderRadius: 18,
                overflow: 'hidden',
                boxShadow: '0 25px 45px rgba(40,10,80,0.35)',
                opacity: op,
                transform: `scale(${scale})`,
              }}
            >
              <Img src={staticFile(src)} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
