const root = document.documentElement;
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---- PAUSE: freezes every .ambient loop site-wide (WCAG 2.2.2) ---- */
const PAUSE_KEY = 'portfolio:paused';

function setPaused(paused: boolean) {
  root.toggleAttribute('data-paused', paused);
  document.querySelectorAll('[data-pause]').forEach((b) => b.setAttribute('aria-pressed', String(paused)));
  try {
    localStorage.setItem(PAUSE_KEY, paused ? '1' : '0');
  } catch {
    // storage blocked: the toggle still works for this page view
  }
}

setPaused(root.hasAttribute('data-paused'));
document.querySelectorAll('[data-pause]').forEach((button) =>
  button.addEventListener('click', () => setPaused(!root.hasAttribute('data-paused')))
);

/* ---- window open wipe ---- */
const windows = document.querySelectorAll<HTMLElement>('[data-window]');

if (!reduced && 'IntersectionObserver' in window) {
  root.classList.add('wipe');
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-open');
      io.unobserve(entry.target);
    }
  });
  windows.forEach((w) => io.observe(w));
}

/* ---- mission select: hover or focus a row to preview it ---- */
document.querySelectorAll<HTMLElement>('[data-missions]').forEach((menu) => {
  const rows = menu.querySelectorAll<HTMLElement>('[data-mission-row]');
  const panes = menu.querySelectorAll<HTMLElement>('[data-mission-pane]');

  const select = (id: string) => {
    rows.forEach((r) => r.classList.toggle('is-selected', r.dataset.missionRow === id));
    panes.forEach((p) => {
      const active = p.dataset.missionPane === id;
      p.classList.toggle('is-active', active);
      // a pane hidden until now was never seen by the observer
      if (active) p.classList.add('is-open');
    });
  };

  rows.forEach((row) => {
    const id = row.dataset.missionRow!;
    row.addEventListener('mouseenter', () => select(id));
    row.addEventListener('focus', () => select(id));
  });
});

/* ---- profile hub: dashed connectors from the console to each window ---- */
document.querySelectorAll<HTMLElement>('[data-hub]').forEach((hub) => {
  const svg = hub.querySelector<SVGSVGElement>('[data-connectors]');
  const center = hub.querySelector<HTMLElement>('[data-hub-center]');
  const nodes = hub.querySelectorAll<HTMLElement>('[data-hub-node]');
  if (!svg || !center) return;

  const NS = 'http://www.w3.org/2000/svg';
  const mid = (el: Element, origin: DOMRect) => {
    const r = el.getBoundingClientRect();
    return [r.left + r.width / 2 - origin.left, r.top + r.height / 2 - origin.top];
  };

  const draw = () => {
    const box = hub.getBoundingClientRect();
    const [cx, cy] = mid(center, box);
    svg.setAttribute('viewBox', `0 0 ${box.width} ${box.height}`);
    svg.replaceChildren(
      ...Array.from(nodes, (node) => {
        const [x, y] = mid(node, box);
        const line = document.createElementNS(NS, 'line');
        line.setAttribute('x1', String(cx));
        line.setAttribute('y1', String(cy));
        line.setAttribute('x2', String(x));
        line.setAttribute('y2', String(y));
        line.setAttribute('stroke', '#f8b8de');
        line.setAttribute('stroke-width', '2');
        line.setAttribute('stroke-dasharray', '4 4');
        return line;
      })
    );
  };

  new ResizeObserver(draw).observe(hub);
});
