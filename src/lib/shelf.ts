/**
 * Reads the hit-area SVG exported from Figma and turns each <rect> into a slot
 * the Bookshelf component can render a group around.
 *
 * Nothing is ever written back into the SVG. Per-slot <g> wrappers are built at
 * render time, so re-exporting the artwork from Figma cannot clobber them --
 * the only thing the export has to preserve is the layer ids.
 */

export type Matrix = [number, number, number, number, number, number];

export interface Slot {
  /** Layer id from Figma: "book-07", "case-02". */
  id: string;
  kind: 'book' | 'case';
  /** Rect geometry in the group's own coordinates. */
  x: number;
  y: number;
  width: number;
  height: number;
  /** The transform to hoist onto the wrapping <g>, or null for plain rects. */
  transform: string | null;
  /**
   * True when the transform flips the axes. Figma mirrors some spines, and text
   * inside a mirrored group renders backwards unless it is flipped back.
   */
  mirrored: boolean;
}

const IDENTITY: Matrix = [1, 0, 0, 1, 0, 0];

function parseTransform(value: string | undefined): Matrix {
  if (!value) return IDENTITY;

  const n = (value.match(/-?[\d.]+/g) ?? []).map(Number);

  if (value.startsWith('matrix') && n.length >= 6) {
    return n.slice(0, 6) as Matrix;
  }

  if (value.startsWith('rotate') && n.length >= 1) {
    const angle = (n[0] * Math.PI) / 180;
    const [cx, cy] = n.length > 2 ? [n[1], n[2]] : [0, 0];
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    // rotate(a, cx, cy) === translate(cx,cy) rotate(a) translate(-cx,-cy)
    return [cos, sin, -sin, cos, cx - cos * cx + sin * cy, cy - sin * cx - cos * cy];
  }

  return IDENTITY;
}

function attributes(source: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [, key, value] of source.matchAll(/([\w-]+)="([^"]*)"/g)) {
    out[key] = value;
  }
  return out;
}

export function parseHitAreas(svg: string): Slot[] {
  const slots: Slot[] = [];

  for (const [, body] of svg.matchAll(/<rect\s+([^>]*?)\/?>/g)) {
    const a = attributes(body);
    if (!a.id) continue;

    const kind = a.id.startsWith('case-') ? 'case' : a.id.startsWith('book-') ? 'book' : null;
    if (!kind) continue;

    const [m0, m1, m2, m3] = parseTransform(a.transform);
    // A negative determinant means the transform reflects rather than rotates.
    const mirrored = m0 * m3 - m1 * m2 < 0;

    slots.push({
      id: a.id,
      kind,
      x: Number(a.x ?? 0),
      y: Number(a.y ?? 0),
      width: Number(a.width ?? 0),
      height: Number(a.height ?? 0),
      transform: a.transform ?? null,
      mirrored,
    });
  }

  return slots;
}

/**
 * Spine text runs along the height of the rect once it is rotated upright, so
 * the height is the character budget. Rough advance width for Instrument Sans
 * at this size is a little over half the font size.
 */
export function fitSpineText(title: string, height: number, fontSize: number): string {
  const max = Math.floor(height / (fontSize * 0.54));
  if (title.length <= max) return title;
  return `${title.slice(0, Math.max(1, max - 1)).trimEnd()}…`;
}
