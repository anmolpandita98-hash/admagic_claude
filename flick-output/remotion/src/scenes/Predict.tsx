import React from 'react';
import {AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {COLORS, FONT, PURPLE_BG} from '../theme';
import {WhiteCard} from '../components/WhiteCard';
import {NodeConnector} from '../components/NodeConnector';
import {GaugeStat} from '../components/Gauge';
import {Narration} from '../components/Narration';
import {Sfx} from '../components/Sfx';

const UPLOAD = {x: 250, y: 300, w: 380, h: 460};
const PREDICT_NODE = {x: 780, y: 470, w: 340, h: 120};
const HEATMAP = {x: 1280, y: 210, w: 380, h: 300};
const GAUGE_NODE = {x: 1280, y: 610, w: 380, h: 220};

const center = (b: {x: number; y: number; w: number; h: number}) => ({x: b.x + b.w / 2, y: b.y + b.h / 2});

export const Predict: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const uploadSpring = spring({frame: frame - 20, fps, config: {damping: 13}, durationInFrames: 24});
  const conn1 = interpolate(frame, [55, 78], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const predictSpring = spring({frame: frame - 78, fps, config: {damping: 13}, durationInFrames: 20});
  const conn2 = interpolate(frame, [100, 125], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const conn3 = interpolate(frame, [105, 130], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const heatmapSpring = spring({frame: frame - 125, fps, config: {damping: 13}, durationInFrames: 20});
  const gaugeSpring = spring({frame: frame - 130, fps, config: {damping: 13}, durationInFrames: 20});
  const gaugeValue = interpolate(frame, [140, 210], [0, 58], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  const u = center(UPLOAD);
  const p = center(PREDICT_NODE);
  const h = center(HEATMAP);
  const g = center(GAUGE_NODE);

  return (
    <AbsoluteFill style={{background: PURPLE_BG}}>
      <Narration src="audio/predict.mp3" startFrame={15} />
      <Sfx file="transitions.mp3" startFrame={55} volume={0.35} />
      <Sfx file="Click.mp3" startFrame={140} volume={0.4} />

      <NodeConnector x1={u.x + UPLOAD.w / 2 - 10} y1={u.y} x2={p.x - PREDICT_NODE.w / 2 + 10} y2={p.y} progress={conn1} />
      <NodeConnector x1={p.x + PREDICT_NODE.w / 2 - 10} y1={p.y} x2={h.x - HEATMAP.w / 2 + 10} y2={h.y} progress={conn2} />
      <NodeConnector x1={p.x + PREDICT_NODE.w / 2 - 10} y1={p.y} x2={g.x - GAUGE_NODE.w / 2 + 10} y2={g.y} progress={conn3} />

      <div
        style={{
          position: 'absolute',
          left: UPLOAD.x,
          top: UPLOAD.y,
          width: UPLOAD.w,
          opacity: interpolate(uploadSpring, [0, 1], [0, 1]),
          transform: `translateY(${interpolate(uploadSpring, [0, 1], [40, 0])}px)`,
        }}
      >
        <div style={{fontFamily: FONT, fontWeight: 700, fontSize: 18, color: COLORS.ink, marginBottom: 10}}>
          Upload files
        </div>
        <WhiteCard style={{padding: 14, height: UPLOAD.h - 40}}>
          <Img
            src={staticFile('brand-assets/eclipse-banner.png')}
            style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 10}}
          />
        </WhiteCard>
      </div>

      <div
        style={{
          position: 'absolute',
          left: PREDICT_NODE.x,
          top: PREDICT_NODE.y,
          width: PREDICT_NODE.w,
          opacity: interpolate(predictSpring, [0, 1], [0, 1]),
          transform: `scale(${0.7 + predictSpring * 0.3})`,
        }}
      >
        <WhiteCard style={{padding: '22px 24px', textAlign: 'center'}}>
          <div style={{fontFamily: FONT, fontWeight: 800, fontSize: 20, color: COLORS.ink}}>
            AdMagic AI Predictions
          </div>
        </WhiteCard>
      </div>

      <div
        style={{
          position: 'absolute',
          left: HEATMAP.x,
          top: HEATMAP.y,
          width: HEATMAP.w,
          opacity: interpolate(heatmapSpring, [0, 1], [0, 1]),
          transform: `translateY(${interpolate(heatmapSpring, [0, 1], [30, 0])}px)`,
        }}
      >
        <div style={{fontFamily: FONT, fontWeight: 700, fontSize: 16, color: COLORS.ink, marginBottom: 8}}>
          Heatmap
        </div>
        <WhiteCard style={{padding: 10, height: HEATMAP.h - 34}}>
          <Img
            src={staticFile('brand-assets/heatmap-reference.png')}
            style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', borderRadius: 10}}
          />
        </WhiteCard>
      </div>

      <div
        style={{
          position: 'absolute',
          left: GAUGE_NODE.x,
          top: GAUGE_NODE.y,
          width: GAUGE_NODE.w,
          opacity: interpolate(gaugeSpring, [0, 1], [0, 1]),
          transform: `translateY(${interpolate(gaugeSpring, [0, 1], [30, 0])}px)`,
        }}
      >
        <div style={{fontFamily: FONT, fontWeight: 700, fontSize: 16, color: COLORS.ink, marginBottom: 8}}>
          Neural Score
        </div>
        <WhiteCard style={{padding: 24}}>
          <GaugeStat value={gaugeValue} size={150} />
        </WhiteCard>
      </div>
    </AbsoluteFill>
  );
};
