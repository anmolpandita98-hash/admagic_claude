import type {FC} from 'react';
import {Composition} from 'remotion';
import {HookWall} from './scenes/HookWall';
import {BrandIntro} from './scenes/BrandIntro';
import {Predict} from './scenes/Predict';
import {InsightsGenerate} from './scenes/InsightsGenerate';
import {TheLoop} from './scenes/TheLoop';
import {CapabilityStat} from './scenes/CapabilityStat';
import {ClosingWall} from './scenes/ClosingWall';

const FPS = 30;
const WIDTH = 1920;
const HEIGHT = 1080;

export const RemotionRoot: FC = () => (
  <>
    <Composition id="hook-wall" component={HookWall} durationInFrames={295} fps={FPS} width={WIDTH} height={HEIGHT} />
    <Composition id="brand-intro" component={BrandIntro} durationInFrames={300} fps={FPS} width={WIDTH} height={HEIGHT} />
    <Composition id="predict" component={Predict} durationInFrames={305} fps={FPS} width={WIDTH} height={HEIGHT} />
    <Composition id="insights-generate" component={InsightsGenerate} durationInFrames={545} fps={FPS} width={WIDTH} height={HEIGHT} />
    <Composition id="the-loop" component={TheLoop} durationInFrames={120} fps={FPS} width={WIDTH} height={HEIGHT} />
    <Composition id="capability-stat" component={CapabilityStat} durationInFrames={220} fps={FPS} width={WIDTH} height={HEIGHT} />
    <Composition id="closing-wall" component={ClosingWall} durationInFrames={240} fps={FPS} width={WIDTH} height={HEIGHT} />
  </>
);
