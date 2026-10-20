import React from 'react';
import {AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {COLORS, FONT, PURPLE_BG} from '../theme';
import {WhiteCard, DarkChip} from '../components/WhiteCard';
import {Narration} from '../components/Narration';
import {Sfx} from '../components/Sfx';

const PROMPT_1 = 'Sharpen the hook, clarify the CTA.';
const PROMPT_2 = 'Boost contrast, add urgency.';

const scoreBadge = (value: number, color: string) => (
  <div
    style={{
      position: 'absolute',
      top: 12,
      left: 12,
      background: color,
      color: color === COLORS.white ? COLORS.ink : COLORS.white,
      fontFamily: FONT,
      fontWeight: 800,
      fontSize: 22,
      padding: '6px 14px',
      borderRadius: 10,
      boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
    }}
  >
    {value}
  </div>
);

export const InsightsGenerate: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const promptOpacity = interpolate(frame, [15, 35], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const prompt1Chars = Math.floor(
    interpolate(frame, [20, 85], [0, PROMPT_1.length], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})
  );
  const showPrompt2 = frame >= 225;
  const prompt2Chars = Math.floor(
    interpolate(frame, [225, 290], [0, PROMPT_2.length], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})
  );

  const beforeSpring = spring({frame: frame - 95, fps, config: {damping: 13}, durationInFrames: 22});
  const afterSpring = spring({frame: frame - 130, fps, config: {damping: 13}, durationInFrames: 22});
  const afterBlur = interpolate(frame, [130, 220, 300, 380], [14, 5, 5, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const scoreMid = Math.round(interpolate(frame, [140, 220], [58, 72], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}));
  const scoreFinal = Math.round(interpolate(frame, [300, 380], [72, 84], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}));
  const currentAfterScore = frame < 300 ? scoreMid : scoreFinal;

  const deltaOpacity = interpolate(frame, [380, 400], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const thumbsOpacity = interpolate(frame, [400, 430], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill style={{background: PURPLE_BG}}>
      <Narration src="audio/insights-generate.mp3" startFrame={15} />
      <Sfx file="Typing.mp3" startFrame={20} volume={0.3} />
      <Sfx file="Typing.mp3" startFrame={225} volume={0.3} />
      <Sfx file="Click.mp3" startFrame={95} volume={0.4} />
      <Sfx file="Correct.mp3" startFrame={380} volume={0.45} />

      <div style={{position: 'absolute', left: 80, top: 70, width: 620, opacity: promptOpacity}}>
        <DarkChip style={{padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 14}}>
          <div style={{fontFamily: FONT, color: COLORS.white, fontSize: 20, flex: 1, minHeight: 28}}>
            {showPrompt2 ? PROMPT_2.slice(0, prompt2Chars) : PROMPT_1.slice(0, prompt1Chars)}
            <span style={{opacity: frame % 20 < 10 ? 1 : 0}}>|</span>
          </div>
        </DarkChip>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 80,
          top: 240,
          width: 420,
          opacity: interpolate(beforeSpring, [0, 1], [0, 1]),
          transform: `translateY(${interpolate(beforeSpring, [0, 1], [40, 0])}px)`,
        }}
      >
        <div style={{position: 'relative'}}>
          <WhiteCard style={{padding: 10, height: 460}}>
            <Img
              src={staticFile('brand-assets/design-before.jpg')}
              style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 12}}
            />
          </WhiteCard>
          {scoreBadge(58, COLORS.white)}
        </div>
        <div style={{fontFamily: FONT, fontWeight: 700, fontSize: 18, color: COLORS.ink, textAlign: 'center', marginTop: 10}}>
          Before
        </div>
      </div>

      <svg style={{position: 'absolute', left: 500, top: 460, width: 130, height: 40}}>
        <line x1={0} y1={20} x2={110} y2={20} stroke={COLORS.ink} strokeWidth={3} opacity={0.5} />
        <polygon points="110,10 128,20 110,30" fill={COLORS.ink} opacity={0.5} />
      </svg>

      <div
        style={{
          position: 'absolute',
          left: 640,
          top: 240,
          width: 420,
          opacity: interpolate(afterSpring, [0, 1], [0, 1]),
          transform: `translateY(${interpolate(afterSpring, [0, 1], [40, 0])}px)`,
        }}
      >
        <div style={{position: 'relative'}}>
          <WhiteCard style={{padding: 10, height: 460}} glow={COLORS.brandGreen}>
            <Img
              src={staticFile('brand-assets/design-after.png')}
              style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 12, filter: `blur(${afterBlur}px)`}}
            />
          </WhiteCard>
          {scoreBadge(currentAfterScore, COLORS.brandGreen)}
        </div>
        <div style={{fontFamily: FONT, fontWeight: 700, fontSize: 18, color: COLORS.ink, textAlign: 'center', marginTop: 10}}>
          After
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 640,
          top: 60,
          opacity: deltaOpacity,
          background: COLORS.brandGreen,
          color: '#052012',
          fontFamily: FONT,
          fontWeight: 800,
          fontSize: 20,
          padding: '10px 22px',
          borderRadius: 30,
          boxShadow: `0 10px 30px ${COLORS.brandGreen}66`,
        }}
      >
        +26 engagement score
      </div>

      <div style={{position: 'absolute', left: 1150, top: 240, width: 300, opacity: thumbsOpacity}}>
        <div style={{fontFamily: FONT, fontWeight: 700, fontSize: 16, color: COLORS.ink, marginBottom: 10}}>
          Version History
        </div>
        {[
          {src: 'brand-assets/design-before.jpg', score: 58},
          {src: 'brand-assets/design-after.png', score: 74},
          {src: 'brand-assets/design-after.png', score: 84},
        ].map((v, i) => (
          <WhiteCard key={i} style={{padding: 8, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 12}}>
            <div style={{width: 60, height: 60, borderRadius: 8, overflow: 'hidden', flexShrink: 0}}>
              <Img src={staticFile(v.src)} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div style={{fontFamily: FONT, fontWeight: 700, fontSize: 16, color: COLORS.ink}}>Version {i + 1}</div>
            <div style={{fontFamily: FONT, fontWeight: 800, fontSize: 16, color: COLORS.gradC, marginLeft: 'auto', marginRight: 10}}>
              {v.score}
            </div>
          </WhiteCard>
        ))}
      </div>
    </AbsoluteFill>
  );
};
