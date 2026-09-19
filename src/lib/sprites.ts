/**
 * Pixel sprites as run-length pixel maps.
 *
 * Each row is space-separated `<key><count>` runs; `.` is transparent.
 * `h3 s10 h3` = 3 hair, 10 skin, 3 hair. Every row must sum to the
 * sprite's width or the build fails, so a mis-drawn row never ships.
 *
 * All art is original. See DESIGN.md "Pixel Sprites".
 */

export const PALETTE: Record<string, string> = {
  // UI tokens
  k: '#0b0a14', // arcade-void
  c: '#17142b', // console-shell
  t: '#3b3766', // star-dust
  w: '#f1ecff', // moonlight
  d: '#aaa3d6', // moonlight-dim
  m: '#ff4fd8', // neon-magenta
  M: '#c2168f', // magenta-chrome
  b: '#f8b8de', // bubblegum-window
  g: '#3df08a', // phosphor-green
  G: '#138046', // phosphor-shadow
  y: '#ffe066', // coin-yellow
  p: '#4f51d4', // periwinkle-band
  // sprite-only tones (The Starfield Is Not a Palette)
  s: '#e8a97e', // skin
  S: '#b97a55', // skin shadow
  h: '#3a2233', // hair
  H: '#6a3d5c', // hair highlight
  T: '#2bc4a0', // foliage
  n: '#8a5530', // wood
  N: '#5a3420', // wood shadow
};

const repeat = (row: string, times: number) => Array.from({ length: times }, () => row);

// short-haired man with rectangular glasses, broad-shouldered hoodie
const avatar = [
  '.8 h8 .8',
  '.6 h12 .6',
  '.5 h4 H3 h7 .5',
  '.5 h2 s10 h2 .5', // hairline
  '.4 S1 h1 s12 h1 S1 .4', // forehead, ears
  '.4 S1 k14 S1 .4', // glasses: top rim, bridge and arms
  '.4 S1 s1 k1 w1 k1 s1 k1 s2 k1 w1 k1 s1 k1 s1 S1 .4', // clear lenses: glint, pupil
  '.4 S1 s1 k1 s3 k1 s2 k1 s3 k1 s1 S1 .4', // clear lenses: lower half
  '.5 s1 k5 s2 k5 s1 .5', // glasses: bottom rims
  '.5 s7 S1 s6 .5', // nose
  '.5 s14 .5',
  '.6 s4 k4 s4 .6', // mouth
  '.7 S10 .7', // stubbled chin
  '.10 S4 .10',
  '.5 M14 .5',
  '.4 M1 m14 M1 .4',
  '.3 M1 m16 M1 .3',
  '.3 M1 m7 w2 m7 M1 .3',
  '.3 M1 m7 w2 m7 M1 .3',
  '.3 m18 .3',
  '.3 m4 M10 m4 .3',
  '.3 m18 .3',
  '.3 s2 m14 s2 .3',
  '.3 s2 M14 s2 .3',
  '.5 p14 .5',
  '.5 p14 .5',
  '.5 p6 .2 p6 .5',
  '.5 p6 .2 p6 .5',
  '.5 p6 .2 p6 .5',
  '.5 w6 .2 w6 .5',
  '.4 w7 .2 w7 .4',
  '.4 k7 .2 k7 .4',
];

const MAPS = {
  avatar,
  // head and shoulders, shown on the pocket console screen
  portrait: avatar.slice(0, 24),

  cat: [
    '.1 w1 .3 w1 .10',
    '.1 w2 .1 w2 .10',
    '.1 w5 .10',
    '.1 w1 k1 w1 k1 w1 .10',
    '.1 w2 m1 w2 .10',
    '.1 w5 .7 w1 .2',
    '.2 w10 .1 w1 .2',
    '.2 w11 d1 .2',
    '.2 w11 .3',
    '.2 d11 .3',
    '.2 w2 .3 w2 .2 w2 .3',
    '.2 d2 .3 d2 .2 d2 .3',
  ],

  star: ['.2 y1 .2', '.1 y3 .1', 'y5', '.1 y3 .1', '.2 y1 .2'],

  arrow: ['y1 .4', 'y2 .3', 'y3 .2', 'y4 .1', 'y3 .2', 'y2 .3', 'y1 .4'],

  cloud: [
    '.8 w5 .11',
    '.6 w4 b3 .4 w3 .4',
    '.3 w3 b8 w4 b2 .4',
    '.1 w3 b16 .4',
    'w2 b20 .2',
    'M2 b18 M2 .2',
    '.1 M20 .3',
    '.3 M14 .7',
  ],

  lamp: [
    '.2 d8 .2',
    '.1 d1 y8 d1 .1',
    '.1 d1 y8 d1 .1',
    '.2 d8 .2',
    '.5 p2 .5',
    ...repeat('.5 p1 d1 .5', 39),
    '.4 p4 .4',
    '.3 p6 .3',
    '.2 p8 .2',
    '.2 p8 .2',
  ],

  tree: [
    '.12 g8 .12',
    '.9 g4 T6 g4 .9',
    '.7 g2 T14 g2 .7',
    '.5 g3 T6 g2 T8 g3 .5',
    '.4 g2 T10 G2 T8 g2 .4',
    '.3 g2 T8 g4 T6 G2 g3 .4',
    '.2 g2 T24 g2 .2',
    '.1 g2 T6 G4 T10 g4 T2 g2 .1',
    '.1 g1 T28 g1 .1',
    'g2 T12 g3 T13 g2',
    'g1 T5 G3 T22 g1',
    'g1 T30 g1',
    'g2 T9 g4 T15 g2',
    '.1 g1 T13 G3 T12 g1 .1',
    '.1 g2 T26 g2 .1',
    '.2 g2 T5 g3 T12 G2 g4 .2',
    '.3 G2 T10 G2 T10 G2 .3',
    '.4 G3 T18 G3 .4',
    '.6 G4 T5 G2 T5 G4 .6',
    '.8 G16 .8',
    '.11 G4 .2 G4 .11',
    '.14 p4 .14',
    '.14 p4 .14',
    '.13 p5 .14',
    '.13 p2 d1 p2 .14',
    '.13 p2 d1 p2 .14',
    '.12 p3 d1 p2 .14',
    '.12 p3 d1 p2 .14',
    '.12 p6 .14',
    '.11 p7 .14',
    '.11 p3 d1 p3 .14',
    '.10 p4 d1 p3 .14',
    '.10 p8 .14',
    '.9 p10 .13',
    '.8 p5 .2 p5 .12',
    '.7 p4 .5 p4 .12',
  ],

  door: [
    '.4 d8 .4',
    '.2 d2 t8 d2 .2',
    '.1 d1 t2 n8 t2 d1 .1',
    'd1 t2 n10 t2 d1',
    ...repeat('d1 t1 n3 N1 n4 N1 n3 t1 d1', 6),
    'd1 t1 N12 t1 d1',
    ...repeat('d1 t1 n3 N1 n4 N1 n3 t1 d1', 2),
    'd1 t1 n3 N1 n4 N1 n1 y1 n1 t1 d1',
    ...repeat('d1 t1 n3 N1 n4 N1 n3 t1 d1', 3),
    'd1 t1 N12 t1 d1',
    ...repeat('d1 t1 n3 N1 n4 N1 n3 t1 d1', 5),
    'd16',
  ],

  flag: ['d1 g6 .1', 'd1 g7', 'd1 g5 .2', 'd1 g3 .4', ...repeat('d1 .7', 10), 't3 .5', 't4 .4'],

  gem: ['.1 m4 .1', 'm1 w1 m4', 'm6', '.1 M4 .1', '.2 M2 .2'],

  dpad: [...repeat('.4 M3 .4', 4), ...repeat('M11', 3), ...repeat('.4 M3 .4', 4)],

  button: ['.1 M4 .1', 'M1 b1 M4', 'M6', 'M6', 'M6', '.1 M4 .1'],

  ground: ['g8', 'g3 G1 g4', 'G1 g2 G2 g2 G1', 'G8', 'p3 c1 p4', 'p3 c1 p4', 'c8', 'p7 c1'],
} satisfies Record<string, string[]>;

export type SpriteName = keyof typeof MAPS;

export interface Rect {
  x: number;
  y: number;
  w: number;
  fill: string;
}

export interface Sprite {
  w: number;
  h: number;
  rects: Rect[];
}

function parse(name: string, rows: string[]): Sprite {
  const parsed = rows.map((row) =>
    row.split(' ').map((run) => ({ key: run[0], count: Number(run.slice(1)) }))
  );
  const widths = parsed.map((runs) => runs.reduce((sum, r) => sum + r.count, 0));
  const w = widths[0];
  widths.forEach((width, i) => {
    if (width !== w) throw new Error(`sprite "${name}" row ${i} is ${width} wide, expected ${w}`);
  });

  const rects: Rect[] = [];
  parsed.forEach((runs, y) => {
    let x = 0;
    for (const { key, count } of runs) {
      if (Number.isNaN(count)) throw new Error(`sprite "${name}" row ${y} has a bad run`);
      if (key !== '.') {
        const fill = PALETTE[key];
        if (!fill) throw new Error(`sprite "${name}" row ${y} uses unknown color "${key}"`);
        rects.push({ x, y, w: count, fill: key });
      }
      x += count;
    }
  });
  return { w, h: rows.length, rects };
}

const PARSED = Object.fromEntries(
  Object.entries(MAPS).map(([name, rows]) => [name, parse(name, rows)])
) as Record<SpriteName, Sprite>;

/** Resolve a sprite, optionally swapping palette keys for other colors. */
export function sprite(name: SpriteName, recolor: Record<string, string> = {}): Sprite {
  const base = PARSED[name];
  return {
    ...base,
    rects: base.rects.map((r) => ({ ...r, fill: recolor[r.fill] ?? PALETTE[r.fill] })),
  };
}

/** A sprite as a CSS `url()` value, for tiled backgrounds. */
export function spriteUrl(name: SpriteName): string {
  const { w, h, rects } = sprite(name);
  const body = rects
    .map((r) => `<rect x="${r.x}" y="${r.y}" width="${r.w}" height="1" fill="${r.fill}"/>`)
    .join('');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" shape-rendering="crispEdges">${body}</svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}
