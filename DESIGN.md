---
name: Edo Wijaya Portfolio
description: A developer portfolio that boots like a handheld game after dark.
colors:
  arcade-void: "#0b0a14"
  console-shell: "#17142b"
  star-dust: "#3b3766"
  moonlight: "#f1ecff"
  moonlight-dim: "#aaa3d6"
  neon-magenta: "#ff4fd8"
  magenta-chrome: "#c2168f"
  berry-ink: "#940d6e"
  bubblegum-window: "#f8b8de"
  plum-ink: "#3d0a31"
  phosphor-green: "#3df08a"
  phosphor-shadow: "#138046"
  coin-yellow: "#ffe066"
  periwinkle-band: "#4f51d4"
typography:
  display:
    fontFamily: "Silkscreen, 'Pixelify Sans Variable', monospace"
    fontSize: "64px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0"
  headline:
    fontFamily: "Silkscreen, 'Pixelify Sans Variable', monospace"
    fontSize: "40px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0"
  band:
    fontFamily: "Silkscreen, 'Pixelify Sans Variable', monospace"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.04em"
  title:
    fontFamily: "'Pixelify Sans Variable', Silkscreen, monospace"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0"
  body:
    fontFamily: "'Geist Mono Variable', ui-monospace, Menlo, monospace"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0"
  label:
    fontFamily: "'Pixelify Sans Variable', Silkscreen, monospace"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.04em"
rounded:
  none: "0px"
spacing:
  unit: "4px"
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  2xl: "64px"
  3xl: "96px"
components:
  button-start:
    backgroundColor: "{colors.phosphor-green}"
    textColor: "{colors.arcade-void}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "12px 32px"
  button-ghost:
    backgroundColor: "{colors.arcade-void}"
    textColor: "{colors.phosphor-green}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "12px 32px"
  hud-bar:
    backgroundColor: "{colors.arcade-void}"
    textColor: "{colors.neon-magenta}"
    typography: "{typography.label}"
    height: "56px"
  marquee-band:
    backgroundColor: "{colors.periwinkle-band}"
    textColor: "{colors.coin-yellow}"
    typography: "{typography.band}"
    height: "56px"
  window-panel:
    backgroundColor: "{colors.bubblegum-window}"
    textColor: "{colors.plum-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "16px"
  window-titlebar:
    backgroundColor: "{colors.magenta-chrome}"
    textColor: "{colors.moonlight}"
    typography: "{typography.label}"
    height: "28px"
    padding: "0 8px"
  window-label:
    backgroundColor: "{colors.coin-yellow}"
    textColor: "{colors.plum-ink}"
    typography: "{typography.label}"
    padding: "2px 12px"
  chip-skill:
    backgroundColor: "{colors.bubblegum-window}"
    textColor: "{colors.berry-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "4px 10px"
  mission-row:
    backgroundColor: "{colors.console-shell}"
    textColor: "{colors.moonlight}"
    typography: "{typography.title}"
    padding: "16px 24px"
  mission-row-selected:
    backgroundColor: "{colors.neon-magenta}"
    textColor: "{colors.arcade-void}"
    typography: "{typography.title}"
    padding: "16px 24px"
---

# Design System: Edo Wijaya Portfolio

## 1. Overview

**Creative North Star: "The After-Hours Arcade"**

A hiring manager opens the link late in the evening on a laptop, expecting another white résumé page, and the screen boots like a handheld game instead: a starfield, a title screen, a blinking prompt to start. That scene is why the system is dark. The portfolio is a small game world with the person as Player 01. Their work is a mission select screen, their background is a character profile, and the contact form is a save point. Every surface is built from hard pixels, flat neon color and retro desktop windows, and none of it gets in the way of a recruiter finding the work.

The fun sits in the chrome: the HUD, bands, sprites and window frames. The content itself stays readable. Pixel fonts carry headings and labels only. Paragraphs are set in a clean monospace that looks like it belongs in a retro OS window and reads comfortably at length. Color is a **full palette** with four named roles (magenta for identity, green for action, yellow for signals, periwinkle for section bands) on a violet-black void. Density is low: one idea per screen and generous space between the major scenes.

The system rejects the modern portfolio defaults it replaces: editorial serif headlines, cream-and-ink restraint, soft shadows, rounded cards and glass blur. It also rejects copying a game company. Every sprite, device and motif is original (see Do's and Don'ts). This design is inspired by a reference portfolio and takes its vocabulary, not its artwork or layout.

**Page structure.** A fixed HUD, then the **Title Screen** (hero), then a band reading MISSIONS, then **Mission Select** (projects, LEVEL 01), then a band reading PLAYER, then the **Player Profile** hub (about, LEVEL 02), then a band reading CONTINUE?, then the **Save Point** (contact and footer scene). Unlike the reference, work comes before the profile so projects are one scroll from the top.

**Breakpoints.** Mobile under 640px, tablet 640 to 1023px, desktop 1024px and up. Pixel type and sprite scales change only at these breakpoints (see The Integer Pixel Rule).

**Motion.** Game motion is stepped, not smooth. UI feedback, reveals and ambient loops use `steps()` timing so they move in whole frames. Scrolling is native: no inertial smoothing, because it fights the snappy frame-stepped feel. The motion vocabulary:
- **Press** (80ms, `steps(2)`): buttons drop 4px onto their shadow.
- **Window open** (320ms, `steps(8)`): panels entering the viewport wipe open top to bottom with `clip-path: inset(0 0 100% 0)` to `inset(0)`. Runs once. Never scale pixel art during reveals, because scaling blurs pixels.
- **Blink** (1s, `steps(2)`): the PRESS START prompt only. Stops after three cycles.
- **Idle bob** (1.2s, `steps(2)`, infinite): characters move 1 art-pixel up and down.
- **Twinkle** (2 to 4s, `steps(2)`, staggered): star sprites, at most 16 on screen.
- **Cloud drift** (90 to 140s, linear): clouds cross the starfield.
- **Band scroll** (24s, linear, infinite): marquee bands translate by -50%.
- **Typewriter** (30ms per character, stepped): only the first greeting line of a window, 60 characters max. The full text sits in the DOM from the start so screen readers get it immediately.

Ambient loops (idle bob, twinkle, cloud drift, band scroll) all respond to the HUD **PAUSE** control, which sets `animation-play-state: paused` site-wide. Under `prefers-reduced-motion: reduce`, every ambient loop is off, bands are static, reveals and the typewriter finish instantly, and the blink never runs. No element flashes more than three times per second.

**Key Characteristics:**
- Violet-black starfield void, never pure black
- Four committed color roles, each with one job
- Pixel display type, monospace reading type
- Hard edges everywhere: 0px radius, zero-blur shadows
- One art-pixel size per viewport, never mixed
- Stepped `steps()` motion with a site-wide PAUSE

## 2. Colors

A full neon palette on a violet void: magenta says who, green says go, yellow says look, periwinkle says where.

### Primary
- **Neon Magenta** (#ff4fd8): the identity color. Display type on the title screen, LEVEL headlines, HUD labels, the selected mission row fill, and the player device shell. Reads 6.89:1 on Arcade Void.
- **Magenta Chrome** (#c2168f): window frames and title bars only. Moonlight text on it reads 4.78:1. Against Bubblegum Window it measures 3.39:1, enough for a frame edge but never for text.

### Secondary
- **Phosphor Green** (#3df08a): action and life. The START button fill, the title screen frame, the player name in the profile, and the HP/XP bar fill. Arcade Void text on it reads 13.14:1.
- **Phosphor Shadow** (#138046): the hard drop shadow under green buttons and the dark edge of green pixel art. It is never used for text.

### Tertiary
- **Coin Yellow** (#ffe066): signal color. Marquee band text, window label pills, focus rings, star sprites and the year line on the title screen. Plum Ink on it reads 12.52:1.
- **Periwinkle Band** (#4f51d4): marquee band backgrounds only. Coin Yellow text on it reads 4.65:1.

### Neutral
- **Arcade Void** (#0b0a14): the page background and the text color on green and magenta fills.
- **Console Shell** (#17142b): raised dark surfaces such as unselected mission rows, the HUD bar on scroll and the device screen bezel.
- **Star Dust** (#3b3766): starfield dots and inactive HUD bar frames. Decorative only (1.80:1). It is never text.
- **Moonlight** (#f1ecff): primary text on dark surfaces (17.03:1 on Arcade Void).
- **Moonlight Dim** (#aaa3d6): secondary text on dark surfaces such as years, metadata and footer copy (8.35:1).
- **Bubblegum Window** (#f8b8de): retro window bodies.
- **Plum Ink** (#3d0a31): body text inside windows (10.03:1 on Bubblegum Window).
- **Berry Ink** (#940d6e): field labels and skill chips inside windows (5.08:1 on Bubblegum Window).

### Named Rules
**The One Job Rule.** Each accent has exactly one role. Green means "you can press this or it is alive". Yellow means "look here". If a green element cannot be clicked and is not the name or health bar, recolor it.

**The Pink-on-Pink Ban.** Neon Magenta text on Bubblegum Window measures 1.75:1 and is prohibited. The reference does this; this system does not. Labels inside windows use Berry Ink.

**The Starfield Is Not a Palette.** Sprites may use extra colors (skin, wood, foliage), but UI surfaces, text and borders use only the tokens above.

## 3. Typography

**Display Font:** Silkscreen 700 (with Pixelify Sans, monospace)
**Body Font:** Geist Mono (with ui-monospace, Menlo, monospace)
**Label/Mono Font:** Pixelify Sans, variable 400 to 700 (with Silkscreen, monospace)

**Character:** Silkscreen is a blocky 8-bit title-card face that shouts from across a room. Pixelify Sans keeps the bitmap flavor but stays legible in mixed case. Geist Mono is the quiet in-world terminal voice that makes long copy readable.

### Hierarchy
- **Display** (700, 64px desktop / 48px tablet / 32px mobile, 1.1): the player name on the title screen. One line only. If a name runs past 12 characters, drop a step. Hard offset shadow of 4px 4px in Phosphor Green, no blur.
- **Headline** (700, 40px / 32px / 24px, 1.1): LEVEL 01 and LEVEL 02 section headlines, and the CONTINUE? heading.
- **Band** (700, 32px / 24px / 24px, 1, 0.04em): marquee band text, uppercase.
- **Title** (600, 24px / 24px / 20px, 1.25): mission names, button labels, window headings and the player subtitle.
- **Body** (400, 16px all breakpoints, 1.7): summaries, profile copy and project write-ups. Max 65ch.
- **Label** (500, 16px desktop and tablet / 14px mobile, 1.2, 0.04em): HUD text, window titles, chip text, field labels and years.

### Named Rules
**The Integer Pixel Rule.** Pixel fonts render only at the fixed sizes above: Silkscreen at multiples of 8px, Pixelify Sans at 14, 16, 20 or 24px. `clamp()`, `vw` units and fractional sizes are prohibited for them, because fractional sizes smear pixel edges. Set `-webkit-font-smoothing: none` on pixel-font elements. Body text in Geist Mono is exempt.

**The Two-Line Pixel Limit.** A pixel font never sets more than two lines of running text. Anything longer is body copy in Geist Mono. If a pixel-font paragraph wraps to a third line, it is in the wrong font.

**The Reflex Pixel Font Ban.** Press Start 2P and VT323 are prohibited. They are the default "retro" picks and Press Start 2P becomes unreadable below 24px.

## 4. Elevation

This system is flat. Depth comes from hard offset shadows with zero blur, chunky pixel borders and layering against the starfield, never from soft light. A shadow here is a solid block of color sitting a few art-pixels away from its object, like a sprite's shadow on a game floor.

### Shadow Vocabulary
Values are in art-pixels (`u` = `--px`: 4px desktop, 3px below 1024px).
- **Button rest** (drop `0 2u 0 0 #138046`): START and other green buttons at rest.
- **Button hover** (drop `0 3u 0 0 #138046`, `translateY(-1u)`): lifted, ready to press.
- **Button pressed** (drop `0 1u 0 0 #138046`, `translateY(1u)`): the drop hides behind the frame, flush with the ground.
- **Display drop** (`text-shadow: 1u 1u 0 #3df08a`): the title-screen display name only.
- **Sprite ground shadow**: a solid Arcade Void block 1 art-pixel tall under standing characters, 60% of their width. Drawn into the sprite, not added in CSS.

### Named Rules
**The Zero Blur Rule.** Every shadow has a blur radius of 0. If a shadow's edge fades, it is wrong. `backdrop-filter`, `filter: blur()` and soft `box-shadow` values are prohibited.

**The Square Corner Rule.** `border-radius` is always 0. Rounded silhouettes come from stepped pixel corners, built with the pixel-frame technique described in Components.

## 5. Components

Chunky, flat and pressable. Everything looks like it could be clicked with a D-pad.

### Pixel Frame (technique used by several components)
Stepped corners are built without `border-radius` or `clip-path` (which would also clip the shadows). Small elements use layered solid box-shadows, one per side, offset by one art-pixel, which leaves a notch at each corner: `box-shadow: 0 -4px 0 0 C, 0 4px 0 0 C, -4px 0 0 0 C, 4px 0 0 0 C` plus any drop shadow as an extra layer. Large frames (the title screen) use a 9-slice pixel SVG through `border-image` with `border-image-slice` set to the notch size and `image-rendering: pixelated`.

### Buttons
- **Shape:** square with 1-art-pixel stepped corners (0px radius, pixel-frame notch 4px).
- **Primary (START):** Phosphor Green fill, Arcade Void text in Title type, uppercase, padding 12px 32px, Phosphor Shadow hard shadow. Minimum hit area 48px tall. Labels are one or two words and never wrap.
- **Hover / Focus:** lifts 2px with a 6px shadow. Press drops 4px to a zero shadow with the 80ms `steps(2)` press motion. Focus adds the yellow focus ring.
- **Ghost:** Arcade Void fill, Phosphor Green text and a 4px Phosphor Green pixel frame. Used for the second action in a pair only.
- **Labels:** one label per intent across the whole page. The hero action is PRESS START (goes to Mission Select). The contact action is SAY HELLO everywhere it appears.

### Focus Ring
- 4px solid Coin Yellow outline, 4px offset, square. It is applied to every interactive element and never removed.

### HUD Bar (navigation)
- **Style:** fixed to the top, 56px tall, Arcade Void, bottom border 1u Star Dust.
- **Left:** player tag, PLAYER 01 (P1 below 640px) in Neon Magenta Label type, linking to the top.
- **Center / right:** plain-word nav links in Moonlight Label type (WORK, ABOUT, CONTACT). Game names stay in section headlines, while nav uses words a recruiter recognizes instantly. Hover and current state switch the text to Coin Yellow and show the pixel arrow cursor sprite before the link.
- **XP bar:** 96 x 12px, 2px Moonlight Dim pixel frame, Phosphor Green fill that grows with page scroll progress. Decorative and hidden from assistive tech.
- **PAUSE control:** a 44px square Console Shell button with a pixel pause/play icon (inline SVG) that freezes all ambient motion and remembers the choice across visits. `aria-pressed` reflects its state. Required, not optional.
- **Mobile:** the XP bar hides, and the nav links and PAUSE stay on one row at 14px (verified at 375px wide). The hover arrow sprites drop below 400px.

### Title Screen (signature hero)
- A 4px Phosphor Green stepped-corner frame (9-slice) on Arcade Void, centered in the viewport with 32px side gutters on desktop.
- Inside the frame: a Coin Yellow year line (Headline type, e.g. 2026 PORTFOLIO), the player name in Display type with the green display drop, and one PRESS START button. That makes three elements, with no subtitle paragraph.
- **Scene:** the frame sits above a ground strip. Standing on the ground and overlapping the frame's lower edge: the player avatar at left, a street lamp, a companion pet at right and a pixel tree bleeding off the right edge. Clouds drift across the top. HUD-level twinkle stars are scattered in the gutters.
- **Actors** are positioned against a 1040px-wide lane centered on the frame, so they overlap its corners at any width. The frame sits 20u above the ground.
- **Mobile:** the frame spans the full width minus 16px gutters. The tree and lamp are removed and only the avatar and pet stay. Everything fits within the first viewport.

### Ground Strip
- A repeating 16 x 16 art-pixel tile (grass top over brick), scaled to the viewport's sprite scale, `image-rendering: pixelated`, full bleed. It appears under the Title Screen and the Save Point scene only.

### Marquee Band (section divider)
- Full-bleed strip, 56px tall (48px mobile), Periwinkle Band background, 4px Phosphor Green top edge.
- A single repeated label, the name of the section that follows (MISSIONS, PLAYER, CONTINUE?), in Coin Yellow Band type, separated by 16px pixel-star sprites.
- Scrolls with Band scroll motion. Pauses on hover and under PAUSE. Static under reduced motion.
- The whole band is `aria-hidden="true"`: it is decoration, and the section headline that follows carries the name for assistive tech.

### Window Panel (signature container)
Retro desktop windows are this system's only container. Nothing else gets a box.
- **Frame:** 4px Magenta Chrome border, square corners, no shadow.
- **Title bar:** 28px tall, Magenta Chrome fill, three 12px pixel control squares at the right (decorative, `aria-hidden`), and window title in Moonlight Label type at the left.
- **Rails:** an optional 16px left rail and right scrollbar rail in Magenta Chrome with pixel arrow caps, decorative only. Rails drop below 640px.
- **Body:** Bubblegum Window fill, 16px padding (24px desktop), Plum Ink Body text.
- **Label pill:** the window's heading (e.g. HELLO, LOADOUT, TRAINING LOG) sits as a Coin Yellow pill with Plum Ink Label text, centered at the top of the body.
- **Fields:** a Berry Ink label in Label type followed by a Plum Ink value in Body type (e.g. ROLE: then the role).
- **Enter:** window-open wipe once when scrolled into view.

### Chips (skills and stack)
- **Style:** Bubblegum Window fill, Berry Ink Label text and a 2px Berry Ink pixel frame, flowing in a wrapped flex row with 8px gaps.
- **State:** static and not interactive. They replace long bullet lists: any list over five items becomes chips.

### Mission Select (projects)
A game menu, not a card grid.
- **Featured only:** the homepage shows at most five missions, the ones flagged `featured: true` (the first five by order if none are flagged). When more exist, a ghost **VIEW ALL MISSIONS (N)** button sits under the menu and links to the Mission Log.
- **Desktop:** two columns. At left is the vertical menu of mission rows. At right is one Window Panel preview.
- **Mission row:** Console Shell fill, Moonlight Title text for the mission name, Moonlight Dim Label for the meta (year on the homepage), padding 16px 24px (14px 16px on phones), 4px gap between rows. Each row is a link to `/projects/[slug]`.
- **Selected row** (hover or focus at any width, plus the default first row on desktop): Neon Magenta fill, Arcade Void text and the pixel arrow cursor sprite at the left edge. Selection follows keyboard focus, and Enter opens the mission. Phones drop the arrow and its indent.
- **Preview window:** titled MISSION 0N. It holds the cover image at 16:10, then the summary in Body, stack chips (max four) and an ENTER MISSION button.
- **Cover images are real screenshots and stay sharp:** `image-rendering: auto`, never pixelated or posterized. They sit inside a 1u Console Shell inner frame, at 16:10 (2:1 in the sticky desktop preview so it fits under the HUD on a laptop).
- **Tablet and mobile:** rows only, no preview windows. Stacked cover windows ran about 560px each, which buried everything below the section once a portfolio passed a handful of projects.
- **Without JavaScript:** rows are plain links and the preview shows the first mission.

### Mission Log (`/missions`)
- The complete project archive, reached from VIEW ALL MISSIONS.
- MISSION LOG headline and an "All N missions" subtitle, then one group per year, newest first, each titled in Coin Yellow Title type.
- Each group reuses the mission row, with the first two stack items as meta. Phones hide that meta, since it wraps badly at 375px.
- Groups cap at 880px wide so rows stay scannable on large screens. There is no preview window on this page.

### Admin (`/keystatic`)
- The owner's content admin is Keystatic's own interface and sits **outside** this design system: none of these tokens, fonts or rules apply there, and it must never be restyled to look like part of the game.
- It edits the content this system renders: projects (`src/content/projects/*.md`) and the profile (`src/data/profile.json`). Profile strings flow into the title screen, HELLO and Training Log windows, Loadout, Skill Tree and the Save Point.
- Copy rules still apply to what gets typed there: no em dashes, and the greeting stays at 30 characters or fewer so the typewriter line fits on a phone (the admin enforces the limit).

### Player Profile Hub (about)
- **Desktop:** LEVEL 02 headline plus a Title subtitle (MEET THE PLAYER) and the name in Phosphor Green Headline type, top left. A central **pocket console** (original design, see below) shows the player portrait sprite on its screen. Three to four Window Panels orbit it: HELLO (greeting and short bio fields), LOADOUT (tool icons), TRAINING LOG (education or experience) and SKILL TREE (chips).
- **Connectors:** 2px dashed Bubblegum Window lines (4px dash, 4px gap) drawn in one absolutely positioned SVG from the console edge to each window. Decorative and `aria-hidden`.
- **Pocket console:** an original single-screen handheld, 72 x 82u, built from CSS blocks plus sprites. Neon Magenta shell with a 1u Magenta Chrome pixel frame, Console Shell screen bezel, a Phosphor Shadow screen backing behind the portrait (full Phosphor Green was too loud behind a face), two round action buttons, a four-way pad and a speaker grille of four slots. It is never a dual-screen clamshell.
- **Tablet:** the console is on top, windows sit in a two-column grid below and connectors are hidden.
- **Mobile:** the console at 2x scale, then windows stacked in one column (HELLO, TRAINING LOG, LOADOUT, SKILL TREE).

### Save Point (contact and footer)
- CONTINUE? headline, one line of Body copy, and the SAY HELLO button plus the email address as a Moonlight link.
- **Scene:** a closing ground strip with an original pixel door sprite at right (the button's visual destination), a checkpoint flag, and scattered gems. No sprite is interactive except through the button.
- **Footer row:** Moonlight Dim Label text for copyright and social links in Moonlight, on Arcade Void below the ground.

### Starfield Background
- Painted once on a fixed, `pointer-events: none` pseudo-element behind the page: Arcade Void plus two offset repeating dot grids of 2px Star Dust squares (24px and 40px spacing).
- Twinkling Coin Yellow star sprites (at most 16) sit in page gutters, never behind body text.

### Pixel Sprites (asset spec)
All art is original and authored as run-length pixel maps in `src/lib/sprites.ts`: each row is a list of color-key runs, and the build fails if any row's width is wrong. The `Sprite` component renders a map as inline SVG with `shape-rendering: crispEdges`, so edges stay hard at any scale and every color comes from the palette (plus the sprite-only skin, hair, foliage and wood tones). A commissioned PNG can replace any map later at the same native size, with `image-rendering: pixelated`.
- **Scale per viewport:** 4px per art-pixel at 1024px and up, 3px below. Sizes are `native x --px`, always integers.
- **Current set (native art-pixels):** player avatar 24 x 32, portrait 24 x 24 (the avatar's top rows), cat 16 x 12, street lamp 12 x 48, tree 32 x 36, cloud 24 x 8, star 5 x 5, arrow cursor 5 x 7, ground tile 8 x 8, door 16 x 24, checkpoint flag 8 x 16, gem 6 x 5, console d-pad 11 x 11, console button 6 x 6.
- **Tool icons in LOADOUT:** real product logos from Simple Icons, served tinted Bubblegum Window at 28px on 48px Plum Ink tiles. Never redraw another company's logo as pixel art.
- Sprites are decorative and get `alt=""`, except the player portrait, which gets alt text describing the person.

## 6. Do's and Don'ts

### Do:
- **Do** keep every UI color on the token list. Sprites alone may add skin, wood and foliage tones.
- **Do** use one art-pixel size per viewport: 4px from 1024px up, 3px below. If two sprites side by side have different pixel sizes, one of them is wrong.
- **Do** set paragraphs in Geist Mono Body type at 16px, max 65ch.
- **Do** ship the HUD PAUSE control and honor `prefers-reduced-motion` for every loop, wipe and typewriter.
- **Do** keep nav labels plain (WORK, ABOUT, CONTACT) and put game vocabulary in section headlines.
- **Do** use Berry Ink (#940d6e) for labels and Plum Ink (#3d0a31) for text inside Bubblegum windows.
- **Do** keep project screenshots crisp and unpixelated inside pixel frames.
- **Do** put the person's real name in the title screen display line.

### Don't:
- **Don't** use Nintendo or any other game company's property: no 3DS or dual-screen clamshell consoles, no Super Star with eyes, no piranha plants, no warp pipes, no Mario-style coins or question blocks. Use the original pocket console, plain pixel stars, gems and doors.
- **Don't** copy the reference portfolio's character, sprites or composition pixel for pixel. Take its vocabulary (title screen, HUD, windows, bands), not its artwork.
- **Don't** set Neon Magenta text on Bubblegum Window (1.75:1) or Magenta Chrome text on Bubblegum Window (3.39:1).
- **Don't** use `border-radius`, blurred shadows, `backdrop-filter`, gradients or glassmorphism.
- **Don't** scale pixel fonts with `clamp()` or `vw`, or let a pixel font run past two lines.
- **Don't** use Press Start 2P, VT323, Fraunces, Newsreader, Bricolage Grotesque or Inter.
- **Don't** use emoji or Unicode dingbats (★ ▶ ♥) as UI. Stars, arrows and hearts are sprites or inline SVG.
- **Don't** add skill percentage bars, fake XP numbers or level stats that read as claims. The HUD XP bar tracks scroll only.
- **Don't** use combat copy like "Weapons Mastery". Tools are a LOADOUT.
- **Don't** add smooth inertial scrolling or eased tweens to pixel art. Motion is stepped.
- **Don't** let any element flash more than three times per second, or blink for longer than three cycles.
- **Don't** write em dashes in any visible copy.
