import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowRight,
  Bird,
  ChevronRight,
  Droplets,
  Flower2,
  Heart,
  Leaf,
  Play,
  Presentation,
  RotateCcw,
  Sparkles,
  Sprout,
  TreePine,
  Trees,
  Bug,
  type LucideIcon,
} from 'lucide-react';

/* ================================================================ */
/*  Types                                                            */
/* ================================================================ */

type Screen = 'home' | 'game' | 'sanctuary';

type CompostT = 'small-compost' | 'medium-compost' | 'rich-compost';
type WaterT = 'light-water' | 'steady-water' | 'deep-water';
type HabitatT = 'small-tree' | 'large-tree' | 'log' | 'flower' | 'pond';
type ToolId = CompostT | WaterT | HabitatT;
type ToolCat = 'compost' | 'water' | 'habitat';

interface ZoneState {
  compost: CompostT | null;
  water: WaterT | null;
  habitat: HabitatT | null;
}

interface GState {
  screen: Screen;
  zones: ZoneState[];
  toast: string;
  toastKey: number;
}

/* ================================================================ */
/*  Constants                                                        */
/* ================================================================ */

const EMPTY_ZONE: ZoneState = { compost: null, water: null, habitat: null };

const INIT: GState = {
  screen: 'home',
  zones: Array.from({ length: 5 }, () => ({ ...EMPTY_ZONE })),
  toast: '',
  toastKey: 0,
};

const clamp = (v: number) => Math.max(0, Math.min(100, Math.round(v)));

/* Tool definitions */
interface ToolDef {
  id: ToolId;
  label: string;
  emoji: string;
  icon: LucideIcon;
  cat: ToolCat;
  value: number;
}

const TOOLS: ToolDef[] = [
  { id: 'small-compost',  label: 'Small Compost',  emoji: '🪴', icon: Sprout,   cat: 'compost', value: 6 },
  { id: 'medium-compost', label: 'Medium Compost', emoji: '🧺', icon: Sprout,   cat: 'compost', value: 13 },
  { id: 'rich-compost',   label: 'Rich Compost',   emoji: '✨', icon: Sparkles, cat: 'compost', value: 20 },
  { id: 'light-water',    label: 'Light Water',    emoji: '💧', icon: Droplets, cat: 'water',   value: 6 },
  { id: 'steady-water',   label: 'Steady Water',   emoji: '🚿', icon: Droplets, cat: 'water',   value: 13 },
  { id: 'deep-water',     label: 'Deep Water',     emoji: '🌊', icon: Droplets, cat: 'water',   value: 20 },
  { id: 'small-tree',     label: 'Small Tree',     emoji: '🌱', icon: TreePine, cat: 'habitat', value: 10 },
  { id: 'large-tree',     label: 'Large Tree',     emoji: '🌳', icon: Trees,    cat: 'habitat', value: 20 },
  { id: 'log',            label: 'Log Habitat',    emoji: '🪵', icon: Trees,    cat: 'habitat', value: 15 },
  { id: 'flower',         label: 'Flower Patch',   emoji: '🌸', icon: Flower2,  cat: 'habitat', value: 16 },
  { id: 'pond',           label: 'Mini Pond',      emoji: '🌊', icon: Droplets, cat: 'habitat', value: 17 },
];

/* Zone layout */
interface ZoneDef {
  label: string;
  left: string;
  bottom: string;
}

const ZONES: ZoneDef[] = [
  { label: 'Soil Bed',    left: '7%',  bottom: '30%' },
  { label: 'Flower Bed',  left: '28%', bottom: '26%' },
  { label: 'Tree Area',   left: '52%', bottom: '32%' },
  { label: 'Log Shelter', left: '74%', bottom: '28%' },
  { label: 'Pond Zone',   left: '42%', bottom: '14%' },
];

/* ================================================================ */
/*  Helpers                                                          */
/* ================================================================ */

function toolCat(id: ToolId): ToolCat {
  if (id.endsWith('-compost')) return 'compost';
  if (id.endsWith('-water')) return 'water';
  return 'habitat';
}

function accepts(z: ZoneState, cat: ToolCat): boolean {
  if (cat === 'compost') return z.compost === null;
  if (cat === 'water') return z.compost !== null && z.water === null;
  return z.water !== null && z.habitat === null;
}

function toolValue(id: ToolId): number {
  return TOOLS.find((t) => t.id === id)?.value ?? 0;
}

function computeScores(zones: ZoneState[]) {
  let soil = 0, plant = 0, habitat = 0;
  for (const z of zones) {
    if (z.compost) soil += toolValue(z.compost);
    if (z.water) plant += toolValue(z.water);
    if (z.habitat) habitat += toolValue(z.habitat);
  }
  const wildlife = Math.round((soil * 0.28 + plant * 0.34 + habitat * 0.38));
  return { soil: clamp(soil), plant: clamp(plant), habitat: clamp(habitat), wildlife: clamp(wildlife) };
}

function tier(v: number): 'Low' | 'Good' | 'Rich' {
  return v >= 60 ? 'Rich' : v >= 25 ? 'Good' : 'Low';
}
function tierPlant(v: number): 'Sparse' | 'Growing' | 'Blooming' {
  return v >= 60 ? 'Blooming' : v >= 25 ? 'Growing' : 'Sparse';
}
function tierWild(v: number): 'Few' | 'Active' | 'Thriving' {
  return v >= 55 ? 'Thriving' : v >= 25 ? 'Active' : 'Few';
}
function tierColor(t: string) {
  if (t === 'Rich' || t === 'Blooming' || t === 'Thriving') return 'bg-emerald-500/20 text-emerald-400';
  if (t === 'Good' || t === 'Growing' || t === 'Active') return 'bg-amber-500/15 text-amber-400';
  return 'bg-white/[0.06] text-white/30';
}

function toastFor(id: ToolId): string {
  const m: Record<string, string> = {
    'small-compost': 'Light soil boost',
    'medium-compost': 'Healthy soil',
    'rich-compost': 'Rich living soil ✨',
    'light-water': 'Plants moistened',
    'steady-water': 'Plants growing 🌿',
    'deep-water': 'Deep roots forming 💧',
    'small-tree': 'Small tree planted',
    'large-tree': 'Strong tree growing 🌳',
    'log': 'Log habitat placed',
    'flower': 'Flowers blooming 🌸',
    'pond': 'Pond created 🌊',
  };
  return m[id] ?? 'Placed';
}

/* Which emoji shows for the composted soil */
function compostEmoji(c: CompostT): string {
  return c === 'rich-compost' ? '🪵' : c === 'medium-compost' ? '🧱' : '🪨';
}
/* Plant emoji based on water quality */
function plantEmoji(w: WaterT, idx: number): string {
  const flowers = ['🌻', '🌺', '🌸', '🌼', '🌷'];
  if (w === 'deep-water') return flowers[idx % flowers.length];
  if (w === 'steady-water') return '🌿';
  return '🌱';
}
/* Habitat emoji */
function habitatEmoji(h: HabitatT): string {
  const m: Record<HabitatT, string> = {
    'small-tree': '🌱', 'large-tree': '🌳', log: '🪵', flower: '🌸', pond: '🌊',
  };
  return m[h];
}

/* ================================================================ */
/*  Ring                                                             */
/* ================================================================ */

function Ring({ value, size = 36, sw = 3, color = '#34d399', children }: {
  value: number; size?: number; sw?: number; color?: string; children?: React.ReactNode;
}) {
  const r = (size - sw) / 2, c = 2 * Math.PI * r;
  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={sw} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={sw}
          strokeDasharray={c} strokeDashoffset={c - (clamp(value) / 100) * c}
          strokeLinecap="round" className="ring-anim" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">{children}</div>
    </div>
  );
}

/* ================================================================ */
/*  Score Pills                                                      */
/* ================================================================ */

function Pills({ scores, prevScores }: {
  scores: ReturnType<typeof computeScores>;
  prevScores: ReturnType<typeof computeScores>;
}) {
  const pills = [
    { l: 'Soil', v: scores.soil, pv: prevScores.soil, c: '#b45309' },
    { l: 'Plants', v: scores.plant, pv: prevScores.plant, c: '#10b981' },
    { l: 'Wildlife', v: scores.wildlife, pv: prevScores.wildlife, c: '#14b8a6' },
  ];
  return (
    <div className="flex gap-1.5">
      {pills.map((p) => (
        <div key={p.l} className="flex items-center gap-1.5 rounded-xl bg-white/[0.05] border border-white/[0.06] px-2.5 py-1">
          <Ring value={p.v} size={26} sw={2} color={p.c} />
          <div>
            <p className="text-[8px] font-bold uppercase tracking-widest text-white/25">{p.l}</p>
            <p className={`text-xs font-extrabold tabular-nums leading-none text-white/85 ${p.v !== p.pv ? 'score-bump' : ''}`}>
              {clamp(p.v)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ================================================================ */
/*  Tool Dock                                                        */
/* ================================================================ */

function ToolDock({ zones, onGrab }: {
  zones: ZoneState[];
  onGrab: (tool: ToolId, e: React.PointerEvent) => void;
}) {
  const hasTarget = (cat: ToolCat) => zones.some((z) => accepts(z, cat));

  const sections: { title: string; cat: ToolCat }[] = [
    { title: 'Compost', cat: 'compost' },
    { title: 'Water', cat: 'water' },
    { title: 'Habitat', cat: 'habitat' },
  ];

  return (
    <aside className="flex overflow-x-auto lg:flex-col lg:overflow-y-auto lg:overflow-x-hidden gap-4 lg:gap-1 py-1 lg:py-0.5 pr-1 pb-3 lg:pb-0.5 scrollbar-hide">
      {sections.map((sec) => {
        const sectionTools = TOOLS.filter((t) => t.cat === sec.cat);
        const available = hasTarget(sec.cat);
        return (
          <div key={sec.cat} className="flex-shrink-0">
            <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/20 px-1 py-1.5">{sec.title}</p>
            <div className="flex lg:flex-col gap-2 lg:gap-1">
              {sectionTools.map((t) => (
                <div
                  key={t.id}
                  className={`tool-card glass flex-shrink-0 w-36 lg:w-auto ${available ? 'on' : 'off'}`}
                  onPointerDown={available ? (e) => { e.preventDefault(); onGrab(t.id, e); } : undefined}
                >
                  <span className="text-xl shrink-0">{t.emoji}</span>
                  <div className="min-w-0">
                    <p className={`text-xs font-bold leading-tight ${available ? 'text-white/80' : 'text-white/25'}`}>{t.label}</p>
                    <p className="text-[10px] text-white/25">
                      {available ? `+${t.value}` : hasTarget('compost') && sec.cat === 'water' ? 'Needs compost' : sec.cat === 'habitat' && !hasTarget('habitat') ? 'Needs water' : '—'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </aside>
  );
}

/* ================================================================ */
/*  Garden Scene                                                     */
/* ================================================================ */

function Garden({ zones, scores, dragging, hoverIdx, setHover }: {
  zones: ZoneState[];
  scores: ReturnType<typeof computeScores>;
  dragging: ToolId | null;
  hoverIdx: number | null;
  setHover: (i: number | null) => void;
}) {
  const w = scores.wildlife;
  const stage = w >= 55 ? 3 : w >= 30 ? 2 : w >= 12 ? 1 : 0;
  const soilCls = scores.soil >= 50 ? 'soil-2' : scores.soil >= 20 ? 'soil-1' : 'soil-0';
  const dragCat = dragging ? toolCat(dragging) : null;
  const hasPond = zones.some((z) => z.habitat === 'pond');
  const hasFlower = zones.some((z) => z.habitat === 'flower');

  return (
    <div className={`garden s${stage}`}>
      {/* Ambient */}
      <div className="amb" style={{ width: 200, height: 200, top: '2%', left: '6%', background: 'radial-gradient(circle,rgba(52,211,153,0.08),transparent 70%)' }} />
      <div className="amb" style={{ width: 160, height: 160, top: '10%', right: '4%', background: 'radial-gradient(circle,rgba(20,184,166,0.07),transparent 70%)', animationDelay: '4s' }} />

      {/* Leaves */}
      {stage >= 1 && (
        <>
          <div className="fleaf text-lg" style={{ left: '10%', animationDuration: '11s' }}>🍃</div>
          <div className="fleaf text-base" style={{ left: '58%', animationDuration: '14s', animationDelay: '3s' }}>🌿</div>
          {stage >= 2 && <div className="fleaf text-sm" style={{ left: '82%', animationDuration: '10s', animationDelay: '7s' }}>🍂</div>}
        </>
      )}

      {/* Sun */}
      <div className="absolute top-4 right-5 z-[5]">
        <span className={`text-2xl inline-block transition-all duration-1000 ${stage >= 2 ? 'drop-shadow-[0_0_12px_rgba(250,204,21,0.3)]' : ''}`}>
          {stage >= 2 ? '☀️' : stage >= 1 ? '🌤️' : '🌙'}
        </span>
      </div>

      {/* Soil */}
      <div className={`soil-layer ${soilCls}`} />

      {/* ── Zones ── */}
      {ZONES.map((zd, i) => {
        const z = zones[i];
        const canAcceptDrag = dragCat !== null && accepts(z, dragCat);
        const isHover = hoverIdx === i && canAcceptDrag;
        const hasAny = z.compost || z.water || z.habitat;

        return (
          <div
            key={zd.label}
            data-zone="zone"
            data-idx={i}
            className={`zone-spot ${canAcceptDrag ? 'accept' : ''} ${isHover ? 'drag-over' : ''} ${hasAny ? 'has-item' : ''}`}
            style={{ left: zd.left, bottom: zd.bottom }}
            onPointerEnter={canAcceptDrag ? () => setHover(i) : undefined}
            onPointerLeave={() => setHover(null)}
          >
            {/* Stacked content */}
            <div className="flex flex-col items-center gap-0.5">
              {z.habitat && <span className="text-3xl zone-pop">{habitatEmoji(z.habitat)}</span>}
              {z.water && !z.habitat && <span className="text-3xl zone-pop">{plantEmoji(z.water, i)}</span>}
              {z.compost && !z.water && <span className="text-2xl zone-pop">{compostEmoji(z.compost)}</span>}
              {!hasAny && canAcceptDrag && <span className="text-xl text-emerald-400/40">＋</span>}
              {!hasAny && !canAcceptDrag && <span className="text-lg text-white/10">·</span>}
            </div>

            {/* Soil glow underneath for composted zones */}
            {z.compost && (
              <div className={`absolute inset-0 rounded-[1.25rem] ${
                z.compost === 'rich-compost' ? 'bg-amber-900/25 shadow-inner' : z.compost === 'medium-compost' ? 'bg-amber-900/15' : 'bg-stone-700/15'
              }`} style={{ zIndex: -1 }} />
            )}

            <span className="zone-label">{zd.label}</span>
          </div>
        );
      })}

      {/* Sparkles on rich-composted zones */}
      {zones.map((z, i) =>
        z.compost === 'rich-compost' ? (
          <div key={`sp${i}`} className="absolute z-[3] pointer-events-none" style={{ left: ZONES[i].left, bottom: ZONES[i].bottom }}>
            <span className="text-xs animate-pulse absolute -top-2 -left-1">✨</span>
            <span className="text-xs animate-pulse absolute -top-1 left-6" style={{ animationDelay: '0.4s' }}>✨</span>
          </div>
        ) : null,
      )}

      {/* ── Creatures ── */}
      <div className={`critter ${w >= 10 ? 'vis' : ''}`} style={{ top: '14%', left: '18%' }}>
        <div className="af1"><span className="text-2xl">🦋</span></div>
      </div>
      {w >= 20 && (
        <div className={`critter vis`} style={{ top: '22%', left: '60%' }}>
          <div className="af3"><span className="text-xl">🦋</span></div>
        </div>
      )}
      <div className={`critter ${w >= 25 && hasFlower ? 'vis' : ''}`} style={{ top: '20%', right: '16%' }}>
        <div className="af2"><span className="text-xl">🐝</span></div>
      </div>
      {w >= 40 && hasFlower && (
        <div className={`critter vis`} style={{ top: '32%', left: '40%' }}>
          <div className="af2" style={{ animationDelay: '1s' }}><span className="text-lg">🐝</span></div>
        </div>
      )}
      <div className={`critter ${w >= 35 ? 'vis' : ''}`} style={{ top: '28%', left: '35%' }}>
        <div className="af2"><span className="text-lg">🐞</span></div>
      </div>
      <div className={`critter ${w >= 50 ? 'vis' : ''}`} style={{ top: '6%', left: '45%' }}>
        <div className="ag"><span className="text-2xl">🐦</span></div>
      </div>
      {w >= 70 && (
        <div className={`critter vis`} style={{ top: '10%', right: '20%' }}>
          <div className="ag2"><span className="text-xl">🕊️</span></div>
        </div>
      )}
      <div className={`critter ${w >= 60 && hasPond ? 'vis' : ''}`} style={{ bottom: '16%', left: '48%' }}>
        <div className="ah"><span className="text-xl">🐸</span></div>
      </div>

      {/* Sanctuary glow */}
      {w >= 80 && (
        <div className="absolute inset-0 rounded-[1.25rem] bg-gradient-to-t from-emerald-400/12 to-transparent pointer-events-none animate-pulse" />
      )}

      {/* Hint */}
      <div className="absolute z-20 bottom-2 left-1/2 -translate-x-1/2">
        <div className="rounded-full bg-black/40 backdrop-blur-md px-3 py-1 text-[10px] font-bold text-emerald-200/70 shadow whitespace-nowrap">
          {dragging
            ? 'Release over a glowing zone'
            : `Drag tools from the dock · Wildlife ${w}%`}
        </div>
      </div>
    </div>
  );
}

/* ================================================================ */
/*  Mission Panel                                                    */
/* ================================================================ */

function MissionPanel({ zones, scores, toast, toastKey, onRestart, onPoster, poster, onSanctuary }: {
  zones: ZoneState[];
  scores: ReturnType<typeof computeScores>;
  toast: string;
  toastKey: number;
  onRestart: () => void;
  onPoster: () => void;
  poster: boolean;
  onSanctuary: () => void;
}) {
  const filled = zones.filter((z) => z.habitat !== null).length;
  const composted = zones.filter((z) => z.compost !== null).length;
  const watered = zones.filter((z) => z.water !== null).length;
  const st = tier(scores.soil);
  const pt = tierPlant(scores.plant);
  const wt = tierWild(scores.wildlife);

  const hint = composted === 0
    ? 'Drag compost to a zone'
    : watered < composted
      ? 'Drag water to composted zones'
      : filled < watered
        ? 'Drag habitat items'
        : scores.wildlife >= 50
          ? 'View your sanctuary!'
          : 'Add more to boost wildlife';

  return (
    <aside className="flex flex-col gap-2.5 overflow-y-auto py-0.5 pl-1">
      <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/20 px-1">Mission</p>

      {/* Summary tags */}
      <div className="glass rounded-xl p-3 flex flex-wrap gap-1.5">
        <span className={`tag ${tierColor(st)}`}>Soil: {st}</span>
        <span className={`tag ${tierColor(pt)}`}>Plants: {pt}</span>
        <span className={`tag ${tierColor(wt)}`}>Wildlife: {wt}</span>
      </div>

      {/* Progress */}
      <div className="glass rounded-xl p-3 space-y-2">
        <p className="text-[9px] font-bold uppercase tracking-widest text-white/20">Zones</p>
        {[
          { label: 'Composted', count: composted, icon: Sprout },
          { label: 'Watered', count: watered, icon: Droplets },
          { label: 'Habitat', count: filled, icon: Trees },
        ].map((r) => (
          <div key={r.label} className="flex items-center gap-2">
            <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${r.count > 0 ? 'bg-emerald-500/15 text-emerald-400' : 'bg-white/[0.04] text-white/15'}`}>
              <r.icon className="h-3 w-3" />
            </div>
            <span className={`text-xs font-semibold ${r.count > 0 ? 'text-white/60' : 'text-white/20'}`}>{r.label}</span>
            <span className="text-[11px] font-bold text-white/30 ml-auto">{r.count}/5</span>
          </div>
        ))}
      </div>

      {/* Hint */}
      <div className="glass rounded-xl p-3">
        <p className="text-[10px] text-white/30">{hint}</p>
      </div>

      {/* Toast */}
      {toast && (
        <div key={toastKey} className="toast-msg flex items-center gap-2 rounded-xl bg-emerald-500/12 border border-emerald-500/15 px-3 py-2.5">
          <Sparkles className="h-3 w-3 text-emerald-400 shrink-0" />
          <p className="text-[11px] font-bold text-emerald-300">{toast}</p>
        </div>
      )}

      {/* Science flow */}
      <div className="glass rounded-xl p-3">
        <div className="flex items-center gap-1 text-[9px] font-semibold text-white/20 flex-wrap">
          <span>Compost</span><ChevronRight className="h-2.5 w-2.5" />
          <span>Living Soil</span><ChevronRight className="h-2.5 w-2.5" />
          <span>Plants</span><ChevronRight className="h-2.5 w-2.5" />
          <span>Wildlife</span>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-auto flex flex-col gap-1.5 poster-hide">
        {scores.wildlife >= 40 && (
          <button type="button" onClick={onSanctuary}
            className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 px-3 py-2 text-xs font-bold text-white shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-0.5">
            <Heart className="h-3 w-3" /> View Sanctuary
          </button>
        )}
        <button type="button" onClick={onPoster}
          className={`flex items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-[11px] font-bold transition-all ${
            poster ? 'bg-emerald-500 text-white' : 'glass text-white/35 hover:text-white/50'
          }`}>
          <Presentation className="h-3 w-3" /> {poster ? 'Exit Poster' : 'Poster Mode'}
        </button>
        <button type="button" onClick={onRestart}
          className="flex items-center justify-center gap-1.5 rounded-xl glass text-white/25 hover:text-white/40 px-3 py-2 text-[11px] font-bold transition-all">
          <RotateCcw className="h-3 w-3" /> Restart
        </button>
      </div>
    </aside>
  );
}

/* ================================================================ */
/*  Home Screen                                                      */
/* ================================================================ */

function HomeScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="screen-fade flex min-h-[calc(100vh-40px)] flex-col items-center justify-center text-center">
      <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-[2rem] bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-2xl shadow-emerald-500/25">
        <Leaf className="h-12 w-12" />
      </div>
      <h1 className="text-5xl font-extrabold tracking-tight text-white lg:text-6xl">Soil Guardians</h1>
      <p className="mt-2 text-2xl font-bold text-emerald-400">Restore the Hidden Wildlife</p>
      <p className="mx-auto mt-4 max-w-md text-base text-white/35">
        Restore soil. Grow habitats. Bring wildlife back.
      </p>
      <button type="button" onClick={onStart}
        className="mt-12 inline-flex items-center gap-3 rounded-3xl bg-gradient-to-r from-emerald-600 to-emerald-500 px-12 py-5 text-lg font-bold text-white shadow-2xl shadow-emerald-600/30 transition-all hover:-translate-y-1 hover:shadow-emerald-500/40 active:scale-[0.97]">
        <Play className="h-6 w-6" /> Start Mission
      </button>

      <div className="mt-16 flex items-center gap-5">
        {[
          { emoji: '🧺', label: 'Compost' },
          { emoji: '💧', label: 'Water' },
          { emoji: '🌳', label: 'Habitat' },
          { emoji: '🦋', label: 'Wildlife' },
        ].map((s, i) => (
          <div key={s.label} className="flex items-center gap-5">
            <div className="flex flex-col items-center gap-2 group cursor-pointer hover:-translate-y-2 transition-transform duration-300">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/[0.05] border border-white/[0.07] animate-float" style={{ animationDelay: `${i * 0.4}s` }}>
                <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{s.emoji}</span>
              </div>
              <span className="text-xs font-bold text-white/40 group-hover:text-emerald-400 transition-colors">{s.label}</span>
            </div>
            {i < 3 && <ArrowRight className="h-4 w-4 text-white/15" />}
          </div>
        ))}
      </div>

      <p className="mt-16 text-sm font-semibold text-emerald-500/25">
        Different choices create different ecosystems.
      </p>
    </div>
  );
}

/* ================================================================ */
/*  Sanctuary Screen                                                 */
/* ================================================================ */

function SanctuaryScreen({ zones, scores, onRestart, onBack }: {
  zones: ZoneState[];
  scores: ReturnType<typeof computeScores>;
  onRestart: () => void;
  onBack: () => void;
}) {
  const cc = ['#fbbf24','#34d399','#60a5fa','#f472b6','#a78bfa','#fb923c','#22d3ee','#4ade80','#e879f9','#facc15'];
  const quality = scores.wildlife >= 70 ? 'Thriving' : scores.wildlife >= 45 ? 'Healthy' : 'Emerging';

  return (
    <div className="screen-fade mx-auto max-w-3xl space-y-6 py-6 text-center">
      <div className="cele relative rounded-[2rem] bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-500 p-8 text-white shadow-2xl overflow-hidden">
        {cc.map((c, i) => (
          <div key={i} className="conf" style={{ left: `${4 + i * 10}%`, top: '-5%', backgroundColor: c, animationDelay: `${i * 0.32}s`, animationDuration: `${2.6 + Math.random() * 0.8}s` }} />
        ))}
        <div className="relative z-10">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
            <Heart className="h-7 w-7" />
          </div>
          <h2 className="text-3xl font-extrabold">{quality} Sanctuary</h2>
          <p className="mt-1 text-sm text-white/60">Wildlife Level: {scores.wildlife}%</p>
        </div>
      </div>

      <div className="rounded-[1.25rem] overflow-hidden h-[320px]">
        <Garden zones={zones} scores={scores} dragging={null} hoverIdx={null} setHover={() => {}} />
      </div>

      <div className="grid grid-cols-4 gap-3">
        {[
          { l: 'Soil', v: scores.soil, c: '#b45309' },
          { l: 'Plants', v: scores.plant, c: '#10b981' },
          { l: 'Habitat', v: scores.habitat, c: '#0d9488' },
          { l: 'Wildlife', v: scores.wildlife, c: '#14b8a6' },
        ].map((s) => (
          <div key={s.l} className="rounded-2xl bg-white/[0.04] border border-white/[0.06] p-4">
            <Ring value={s.v} size={44} sw={3} color={s.c} />
            <p className="mt-2 text-xl font-extrabold text-white">{clamp(s.v)}</p>
            <p className="text-[9px] font-bold uppercase tracking-widest text-emerald-400/35">{s.l}</p>
          </div>
        ))}
      </div>

      {/* Summary tags */}
      <div className="flex justify-center gap-2">
        <span className={`tag ${tierColor(tier(scores.soil))}`}>Soil: {tier(scores.soil)}</span>
        <span className={`tag ${tierColor(tierPlant(scores.plant))}`}>Plants: {tierPlant(scores.plant)}</span>
        <span className={`tag ${tierColor(tierWild(scores.wildlife))}`}>Wildlife: {tierWild(scores.wildlife)}</span>
      </div>

      <p className="text-sm font-semibold text-emerald-400/30">Healthy soil brings wildlife back.</p>

      <div className="flex justify-center gap-3 poster-hide">
        <button type="button" onClick={onBack} className="inline-flex items-center gap-2 rounded-2xl bg-white/[0.05] border border-white/[0.06] px-5 py-2.5 text-sm font-bold text-white/45 transition-all hover:bg-white/[0.08]">
          Back
        </button>
        <button type="button" onClick={onRestart} className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-1">
          <RotateCcw className="h-4 w-4" /> Play Again
        </button>
      </div>
    </div>
  );
}

/* ================================================================ */
/*  App                                                              */
/* ================================================================ */

export default function App() {
  const [g, setG] = useState<GState>(INIT);
  const [prevZones, setPrevZones] = useState<ZoneState[]>(INIT.zones);
  const [poster, setPoster] = useState(false);
  const [dragging, setDragging] = useState<ToolId | null>(null);
  const [ghostPos, setGhostPos] = useState({ x: 0, y: 0 });
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const draggingRef = useRef<ToolId | null>(null);

  const scores = useMemo(() => computeScores(g.zones), [g.zones]);
  const prevScores = useMemo(() => computeScores(prevZones), [prevZones]);

  const go = (s: Screen) => setG((p) => ({ ...p, screen: s }));

  const showToast = useCallback((msg: string) => {
    setG((p) => ({ ...p, toast: msg, toastKey: p.toastKey + 1 }));
    setTimeout(() => setG((p) => ({ ...p, toast: '' })), 2400);
  }, []);

  /* ── Drop ── */
  const handleDrop = useCallback(
    (zoneIdx: number) => {
      const tool = draggingRef.current;
      if (!tool) return;
      const cat = toolCat(tool);

      setG((prev) => {
        const z = prev.zones[zoneIdx];
        if (!accepts(z, cat)) return prev;

        setPrevZones(prev.zones);
        const newZones = prev.zones.map((zn, i) => {
          if (i !== zoneIdx) return zn;
          if (cat === 'compost') return { ...zn, compost: tool as CompostT };
          if (cat === 'water') return { ...zn, water: tool as WaterT };
          return { ...zn, habitat: tool as HabitatT };
        });

        setTimeout(() => showToast(toastFor(tool)), 80);
        return { ...prev, zones: newZones };
      });
    },
    [showToast],
  );

  /* ── Pointer Tracking ── */
  useEffect(() => {
    if (!dragging) return;
    draggingRef.current = dragging;

    const onMove = (e: PointerEvent) => setGhostPos({ x: e.clientX, y: e.clientY });

    const onUp = (e: PointerEvent) => {
      const els = document.elementsFromPoint(e.clientX, e.clientY);
      for (const el of els) {
        if (el instanceof HTMLElement && el.dataset.zone === 'zone') {
          handleDrop(Number(el.dataset.idx));
          break;
        }
      }
      draggingRef.current = null;
      setDragging(null);
      setHoverIdx(null);
      document.body.style.cursor = '';
    };

    document.body.style.cursor = 'grabbing';
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      document.body.style.cursor = '';
    };
  }, [dragging, handleDrop]);

  const startDrag = useCallback((tool: ToolId, e: React.PointerEvent) => {
    setDragging(tool);
    setGhostPos({ x: e.clientX, y: e.clientY });
  }, []);

  const reset = useCallback(() => {
    setPrevZones(INIT.zones);
    setG(INIT);
  }, []);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [g.screen]);

  const dragTool = TOOLS.find((t) => t.id === dragging);

  return (
    <>
      <div className={`app-bg ${poster ? 'poster-mode' : ''}`}>
        {g.screen === 'home' && <HomeScreen onStart={() => go('game')} />}

        {g.screen === 'game' && (
          <>
            <header className="flex items-center justify-between gap-4 px-5 py-2 border-b border-white/[0.04] bg-[#061711]/70 backdrop-blur-xl">
              <button type="button" onClick={() => go('home')} className="flex items-center gap-2 text-left hover:opacity-80 transition-opacity">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/15">
                  <Leaf className="h-3.5 w-3.5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/80 leading-none">Soil Guardians</p>
                  <p className="text-[9px] text-emerald-400/30">Restore the Hidden Wildlife</p>
                </div>
              </button>
              <p className="text-xs font-semibold text-white/20 poster-hide">Choose tools and restore the garden</p>
              <Pills scores={scores} prevScores={prevScores} />
            </header>

            <div className="game-grid">
              <ToolDock zones={g.zones} onGrab={startDrag} />
              <Garden zones={g.zones} scores={scores} dragging={dragging} hoverIdx={hoverIdx} setHover={setHoverIdx} />
              <MissionPanel
                zones={g.zones} scores={scores} toast={g.toast} toastKey={g.toastKey}
                onRestart={reset} onPoster={() => setPoster((p) => !p)} poster={poster}
                onSanctuary={() => go('sanctuary')}
              />
            </div>
          </>
        )}

        {g.screen === 'sanctuary' && (
          <SanctuaryScreen zones={g.zones} scores={scores} onRestart={reset} onBack={() => go('game')} />
        )}

        <footer className="border-t border-white/[0.03] py-3 text-center text-[10px] text-white/12 font-medium">
          Soil Guardians — A public science game for wildlife conservation education.
        </footer>
      </div>

      {/* Ghost */}
      {dragging && dragTool && (
        <div className="drag-ghost" style={{ left: ghostPos.x - 28, top: ghostPos.y - 28 }}>
          <span className="text-5xl">{dragTool.emoji}</span>
        </div>
      )}
    </>
  );
}
