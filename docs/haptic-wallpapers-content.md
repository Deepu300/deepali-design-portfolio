# Haptic Wallpapers

Haptic Wallpapers turn your idle screen into something you can *feel*. Tap water and it
ripples back under your finger. Built on a texture-to-emotion map from real lab research —
so the feedback is calming *by design*, not just another buzz.

<!-- MEDIA: UI explaining video goes here (embed) -->

- **Role:** UX Research & Concept Design
- **Method:** Lab experiment · Interviews
- **Partner:** Dept. of Psychology, Delhi University
- **Outcome:** A UI & haptics feeling-coded model

---

## THE GAP — Today's haptics notify you, then vanish.

<!-- IMAGE: assets/gap-microsoft-article.png -->
<!-- CAPTION: The gap, in Microsoft Research's own words. Read the full article → -->

Phones can render stunning visuals and rich audio. Touch got left behind. As Microsoft
Research puts it, today's tactile feedback is mostly limited to buzz — vibrations from an
internal motor that notify you and then disappear. It's touch reduced to a single, blunt
signal.

Link: https://www.microsoft.com/en-us/research/blog/touching-virtual-microsoft-research-making-virtual-reality-tangible/

---

## How I worked — a double diamond

1. Understand how feedback affects users (empathize)
2. Run the 4-minute type experiment
3. Converge on the insight: feedback turns negative
4. Frame the problem
5. Diverge again: texture-emotion mapping
6. Converge on tactile insights
7. Bridge the gap — real touch to digital haptics
8. Design the solution

---

## RESEARCH · PROBE 1 — People don't just tolerate the buzz; it wears on them.

<!-- IMAGE: assets/research-probe-1-user-perspectives.png -->

I started with how people actually feel about the haptics they already live with. Six
participants, interviewed about everyday phone feedback. The verdict was consistent:
functional, fleeting, and occasionally irritating.

### The 4-minute type experiment

<!-- IMAGE: assets/sentiment-curve-4min-experiment.png -->

Then I tracked how typing haptics felt across a four-minute session, in four phases.
Sentiment that started *neutral* drifted steadily toward *negative* — the buzz that helps
at first begins to grate.

**That negative emotional state is exactly what I set out to target.**

---

## PROBLEM STATEMENT

<!-- IMAGE: assets/problem-statement.png -->

How might we enhance haptic feedback in standard devices to create joyful, real-life,
user-friendly experiences?

---

## RESEARCH · PROBE 2 — So I studied how real textures make people feel.

<!-- IMAGE (full width, below intro): assets/research-probe-2-infographic.png -->
<!-- ALT (if building this section natively instead of the flat image, use these assets):
     assets/experiment-materials.png, assets/experiment-lab-photos.png,
     assets/dr-dinesh-chhabra.png, assets/du-faculty-of-arts.png, assets/key-insights.png
     — or embed assets/research-probe-2-infographic.html directly -->

To improve tactile feedback, I first had to understand touch in the *real* world. So I
designed an experiment — conducted under Dr. Dinesh Chhabra in the Psychology department at
Delhi University — to explore the emotions different textures evoke, without any visual or
auditory influence.

**The setup:** participants wore an eye mask and noise-cancelling headphones, touched each
material, and rated the intensity on a 0–5 Likert scale while I logged facial and behavioral
responses.

Materials: Water · Grass · Slime · Fur · Acupressure mat · Eye mask · Noise-cancelling headphones

**Conducted under:** Dr. Dinesh Chhabra, Dept. of Psychology — Faculty of Arts, University of Delhi.

**Inside the lab:** the apparatus (five textures plus the tools that stripped away sight and
sound), and participants touching each texture blindfolded and noise-cancelled — catching the
feeling before the mind could name it.

**What the textures revealed:**
- **100% — Water soothed everyone.** Universally calming across all participants — a reliable
  anchor for gentle, positive feedback.
- **95% — Disliked the acupressure mat.** Sharp, abrupt textures triggered negative emotion in
  nearly everyone — touch read as a threat.
- **2–3 min — The feeling lingered.** Unlike a fleeting phone buzz, sharp-texture discomfort
  persisted — proof touch leaves a mark.

<!-- IMAGE: assets/key-insights.png -->

Takeaways: (1) distinct emotions mapped to distinct tactile sensations; (2) abrupt contact
with sharp textures induced anxiety; (3) previous encounters with textures influenced
subsequent interactions; (4) participants experienced a heightened intensity of negative
emotions.

---

## THE PIVOTAL MOVE — Each finding became a design principle.

This was the crucial step: translating real-world touch into feedback a device can actually
produce. Haptics *is* touch in the real world — so every insight from the texture study
became a principle to design against.

| What I found | The principle it became |
|---|---|
| Sharp textures caused anxiety | Ramp vibration intensity gradually |
| Water felt universally soothing | Texture-based, soothing haptics |
| Negative feelings lingered 2–3 min | Feedback that persists for a few moments |
| Past experience colored each touch | Custom, personal haptic feedback |
| Each texture evoked a distinct emotion | Different haptics for different purposes |
| The buzz felt jarring, not gentle | Non-intrusive, comfortable feedback |

---

## THE SOLUTION — Interactive Haptic Wallpapers

<!-- IMAGE: assets/solution-haptic-wallpapers.png -->

Dynamic backgrounds that respond to touch and gesture, generating feedback that simulates
real textures — water rippling under a fingertip, grass brushing past. The idle screen
becomes a calming, multisensory surface instead of a static image.

### How the UI works
1. A new feature living inside iPhone settings.
2. Choose a texture — water, sand, concrete, or grass.
3. The texture wallpaper applies to your screen; swipe, tap, and feel it.

### I built a rough prototype to prove it wasn't just a poster.
To check feasibility, I dug into the research on texture perception and found that the
difference between textures is largely a difference in *vibration intensity*. So I coded a
rough desktop prototype that adjusts existing vibration motors — and layers in sound — to
fake the feel of concrete versus water. It worked well enough to prove the core bet.

<!-- MEDIA: Prototype demo video goes here (embed) -->

---

## IMPACT — What this concept proved, and what it leaves behind.

- **What it proved.** A rough prototype confirmed the core bet — varying vibration intensity
  alone can make one surface feel like water and another like concrete. The illusion holds.
- **What it leaves behind.** A reusable texture-emotion map — six principles pulled straight
  from tactile research — that other designers can build feedback against.
- **Where it could go.** Customizable, non-intrusive, soothing feedback has a genuine
  accessibility case for sensory-sensitive and ASD users.

### An honest caveat
Six participants is a small sample. Before I'd trust the texture-emotion map as a system, I'd
want to validate it at scale — and pressure-test whether the vibration illusion holds on
production phone hardware, not just my desktop rig.

### Next steps
Build a working mobile prototype, and go deeper into the mechanics of texture feedback itself.

> Designing feedback that resonates — touch that's joyful, not just functional.

*A heartfelt thanks to Prof. Dinesh Chhabra, my friends and participants, and the Department
of Psychology, Delhi University.*
