import React from 'react';
import {Audio, Sequence, staticFile} from 'remotion';

export const Sfx: React.FC<{file: string; startFrame: number; volume?: number}> = ({
  file,
  startFrame,
  volume = 0.55,
}) => (
  <Sequence from={Math.max(0, startFrame)} layout="none">
    <Audio src={staticFile(`sounds/${file}`)} volume={volume} />
  </Sequence>
);
