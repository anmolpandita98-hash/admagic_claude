import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {PURPLE_BG} from '../theme';
import {TiltedCardWall} from '../components/TiltedCardWall';
import {KineticWords} from '../components/KineticWords';
import {Narration} from '../components/Narration';
import {Sfx} from '../components/Sfx';

export const HookWall: React.FC = () => {
  const frame = useCurrentFrame();

  // Wall shows fully, then clears out of the way well before the kinetic
  // text starts so the gradient words never have to compete with the busy
  // card art behind them.
  const wallOpacity = interpolate(frame, [0, 38, 66], [1, 1, 0.05], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const scrimOpacity = interpolate(frame, [40, 68], [0, 0.35], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{background: PURPLE_BG}}>
      <Narration src="audio/hook-wall.mp3" startFrame={15} />
      <Sfx file="Popups.mp3" startFrame={5} volume={0.4} />

      <TiltedCardWall revealStart={0} opacity={wallOpacity} />
      <AbsoluteFill style={{background: `radial-gradient(ellipse 70% 55% at 50% 50%, rgba(30,10,60,${scrimOpacity}) 0%, rgba(30,10,60,0) 70%)`}} />

      <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', padding: '0 120px'}}>
        <KineticWords
          text="Customers see thousands of ads every day, but most of those ads get completely ignored. We're here to change that."
          startFrame={70}
          perWord={9}
          fontSize={56}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
