# Remotion Composition Brief: Flick

## Objective
Create the approved short-form scene animations from the timestamped transcript, restyling AdMagic's promo video to match the visual language of the reference video (https://youtu.be/i_EJUY6su58) while keeping AdMagic's own brand name and real product assets throughout.

## Output
- Remotion project: `flick-output/remotion/`
- Format: 16:9 — 1920x1080 at 30 fps
- Rendered scenes:
  - `hook-wall` → `scenes/hook-wall/hook-wall.mp4`
  - `brand-intro` → `scenes/brand-intro/brand-intro.mp4`
  - `predict` → `scenes/predict/predict.mp4`
  - `insights-generate` → `scenes/insights-generate/insights-generate.mp4`
  - `the-loop` → `scenes/the-loop/the-loop.mp4`
  - `capability-stat` → `scenes/capability-stat/capability-stat.mp4`
  - `closing-wall` → `scenes/closing-wall/closing-wall.mp4`

## Source Material
- Transcript: `transcript.json` (reference video, English, 20 segments)
- Approved plan: `flick-plan.md`
- Selected brand assets: `eclipse-banner.png`, `1.jpg`–`4.jpg` (PetPiano creatives), `heatmap-reference.png`, `design-before.jpg`, `design-after.png`, `competitor-ad-research.png`
- Available sound effects: `remotion/public/sounds/`

## Creative Direction
- User direction: "make it something like this, 1min video but just keep the brand name as AdMagic." Follow-up: real stat supplied — "100+ waitlist signups — people including D2C brand owners, agencies & marketers and business owners."
- Interpretation: adopt the reference's light purple radial-gradient background, warm gradient kinetic typography, white floating UI cards, dark prompt-input chips, node-diagram workflows with curved connector lines, red-yellow-green speedometer gauge, 3-icon circular loop diagram, and tilted 3D card-wall motif — applied to AdMagic's real product assets and copy. Do not carry over the reference's own unrelated statistics (30% uplift, 95% confidence, 500 brands); the capability-stat scene uses AdMagic's real waitlist number instead.
- Avoid: generic filler visuals, unapproved/stock assets, background music, fabricated statistics.

## Scene Compositions

### Hook Wall
- Composition ID: `hook-wall`
- Component: `HookWall`
- Transcript: "Customers see thousands of ads every day, but most of those ads get completely ignored. We're here to change that,"
- Time: 0:00–0:07.7
- Output: `scenes/hook-wall/hook-wall.mp4`
- What is on screen: Tilted 3D perspective grid of real AdMagic creative cards floating on a light purple radial gradient, slow drift.
- Text on screen: "We're here to change that," (word-by-word gradient kinetic reveal)
- Brand assets: eclipse-banner.png, 1.jpg, 2.jpg, 3.jpg, 4.jpg, design-before.jpg, design-after.png, competitor-ad-research.png
- Sequential/interaction: cards fade/settle into the tilted grid staggered top-left to bottom-right, then kinetic words pop in one at a time
- Sound effect: Popups.mp3 on card settle; Pop.mp3 per kinetic word
- Transition: cards blur/scale back as the wordmark takes over for Brand Intro

### Brand Intro
- Composition ID: `brand-intro`
- Component: `BrandIntro`
- Transcript: "introducing AdMagic — predict and improve advertising impact with AI trained on decades of neuroscience data."
- Time: 0:08.2–0:15.58
- Output: `scenes/brand-intro/brand-intro.mp4`
- What is on screen: AdMagic wordmark (white "Ad" + green "Magic" + sparkle) scale-reveals center screen on the purple field, subhead types in underneath.
- Text on screen: "Ad Magic", "Predict and improve advertising impact with AI trained on decades of neuroscience data."
- Brand assets: none (logo built in code)
- Sequential/interaction: logo spring-scales in, subhead types character by character
- Sound effect: Notification.mp3 on logo landing
- Transition: logo settles as Predict's node diagram builds in

### Predict
- Composition ID: `predict`
- Component: `Predict`
- Transcript: "First, predict how consumers respond to your ads in seconds, get predictions on attention, engagement, memory, and more."
- Time: 0:16.32–0:23.96
- Output: `scenes/predict/predict.mp4`
- What is on screen: "Upload files" white card holding eclipse-banner.png, curved connector to "AdMagic AI Predictions" node, branching to a Heatmap node and a red-yellow-green Neural Score gauge sweeping to 58.
- Text on screen: "Upload files", "AdMagic AI Predictions", "Heatmap", "Neural Score"
- Brand assets: eclipse-banner.png, heatmap-reference.png
- Sequential/interaction: upload card appears -> connector line draws -> predictions node appears -> branches to heatmap and gauge, gauge needle sweeps to 58
- Sound effect: transitions.mp3 per connector draw; Click.mp3 on gauge settle
- Transition: heatmap + gauge nodes slide left into Insights Generate's before/after layout

### Insights Generate
- Composition ID: `insights-generate`
- Component: `InsightsGenerate`
- Transcript: "Then, get guided insights into what works and what doesn't to help you make them more compelling in a few clicks. Finally, generate visual recommendations that automatically maximize attention, engagement, and memorability."
- Time: 0:24.6–0:37.82
- Output: `scenes/insights-generate/insights-generate.mp4`
- What is on screen: dark prompt card types a live edit instruction, arrow feeds into design-before.jpg then design-after.png, each stamped with a score badge (58 -> 84, +26 pill), version-history thumbnails stack on the side.
- Text on screen: prompt text (typed live), "58", "84", "+26"
- Brand assets: design-before.jpg, design-after.png
- Sequential/interaction: prompt types out -> before card appears -> arrow -> after card appears with score badge -> thumbnails stack in
- Sound effect: Typing.mp3 during prompt typing; Click.mp3 on new version; Correct.mp3 on score tick
- Transition: hero cards pull back and orbit into The Loop

### The Loop
- Composition ID: `the-loop`
- Component: `TheLoop`
- Transcript: "Using this creative AI loop,"
- Time: 0:38.52–0:40.6
- Output: `scenes/the-loop/the-loop.mp4`
- What is on screen: circular diagram, 3 icon nodes (brain / lightbulb / sparkle) orbiting the AdMagic mark; design-before.jpg flows in left as "Asset", design-after.png flows out right as "Optimized Asset" with a green checkmark.
- Text on screen: "Neuroscience Research (AI)", "Insights and Recommendations (AI)", "Expert Design Iterations (AI)", "Asset", "Optimized Asset"
- Brand assets: design-before.jpg, design-after.png
- Sequential/interaction: loop ring draws, icons pop in, asset flows in/out
- Sound effect: energy.MP3 orbital whoosh; Correct.mp3 on checkmark
- Transition: optimized asset scales up and dissolves into Capability Stat

### Capability Stat
- Composition ID: `capability-stat`
- Component: `CapabilityStat`
- Transcript: "100+ brands, agencies, and marketers are already on the waitlist" (rewritten with real AdMagic data — see Creative Direction)
- Time: 0:41.04–0:48.3
- Output: `scenes/capability-stat/capability-stat.mp4`
- What is on screen: billboard stat card, light background, giant gradient "100+", subtitle "already on the AdMagic waitlist", three pill chips fan in underneath.
- Text on screen: "100+", "already on the AdMagic waitlist", "D2C Brand Owners", "Agencies", "Marketers & Founders"
- Brand assets: none (typography-led)
- Sequential/interaction: number counts up and lands, subtitle fades in, three chips fan in staggered
- Sound effect: riser.mp3 into number landing; Pop.mp3 per chip
- Transition: card fades as the closing wall builds behind it

### Closing Wall
- Composition ID: `closing-wall`
- Component: `ClosingWall`
- Transcript: "reduce wasted ad spend with confidence. Start improving your ads today." (CTA rewritten — no fabricated brand count, see Creative Direction)
- Time: 0:49.3–0:57.1
- Output: `scenes/closing-wall/closing-wall.mp4`
- What is on screen: the same tilted card wall from Hook Wall returns, blurs, centered pill button "Start Your Trial" fades up.
- Text on screen: "Start Your Trial"
- Brand assets: eclipse-banner.png, 1.jpg, 2.jpg, 3.jpg, 4.jpg, design-before.jpg, design-after.png, competitor-ad-research.png
- Sequential/interaction: wall re-forms, blurs, button pops in center
- Sound effect: Impact.mp3 on button pop
- Transition: n/a (final scene)

## Remotion Instructions
- Build one dedicated React component for each approved scene under `src/scenes/`.
- Register each scene as its own `<Composition>` in `src/Root.tsx`.
- Do not create a combined or all-scenes composition.
- Derive frame timing from the approved transcript timestamps and `scene-spec.json`.
- Use frame-driven Remotion motion. Build the approved visual idea; do not fall back to generic title-card layouts.
- Use only selected brand assets from `public/brand-assets/` and bundled SFX from `public/sounds/`.
- Do not add background music. Use an SFX only when it supports the visible action in the approved scene.
- Keep on-screen text readable and render each scene before review.
