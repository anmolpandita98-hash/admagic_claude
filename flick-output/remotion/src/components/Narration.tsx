import React from 'react';
import {Audio, Sequence, staticFile} from 'remotion';

export const Narration: React.FC<{src: string; startFrame: number}> = ({src, startFrame}) => (
  <Sequence from={startFrame} layout="none">
    <Audio src={staticFile(src)} />
  </Sequence>
);
