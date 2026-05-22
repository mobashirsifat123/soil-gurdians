import React, { type CSSProperties } from 'react';

/* ================================================================ */
/*  Shared helpers                                                    */
/* ================================================================ */

interface IconProps {
  size?: number;
  className?: string;
  style?: CSSProperties;
}

/* ================================================================ */
/*  COMPOST ICONS                                                     */
/*  Visual family: layered soil pile with organic texture             */
/*  Variants differ by: volume, color richness, particle effects      */
/* ================================================================ */

export function SmallCompostIcon({ size = 32, className = '', style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} style={style} fill="none">
      <defs>
        <linearGradient id="sc-soil" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8B7355" />
          <stop offset="100%" stopColor="#6B5B45" />
        </linearGradient>
        <radialGradient id="sc-glow" cx="0.5" cy="0.6" r="0.5">
          <stop offset="0%" stopColor="#a08060" stopOpacity="0.3" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      {/* Base pile */}
      <ellipse cx="24" cy="34" rx="14" ry="8" fill="url(#sc-soil)" />
      <ellipse cx="24" cy="32" rx="12" ry="6" fill="#7A6A50" />
      {/* Top mound */}
      <ellipse cx="24" cy="30" rx="9" ry="5" fill="#8B7960" />
      {/* Subtle highlights */}
      <ellipse cx="21" cy="29" rx="3" ry="1.5" fill="#A09070" opacity="0.5" />
      {/* Leaf bits */}
      <path d="M19 28c1-2 3-1.5 2.5 0" stroke="#6B8E5A" strokeWidth="1" fill="none" opacity="0.6" />
      <path d="M27 30c-1-1.5 -2.5-1 -2 0.5" stroke="#7A9E6A" strokeWidth="0.8" fill="none" opacity="0.5" />
      {/* Tiny particles */}
      <circle cx="20" cy="31" r="0.7" fill="#9E8E70" opacity="0.6" />
      <circle cx="28" cy="33" r="0.5" fill="#8A7A60" opacity="0.5" />
    </svg>
  );
}

export function MediumCompostIcon({ size = 32, className = '', style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} style={style} fill="none">
      <defs>
        <linearGradient id="mc-soil" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6B4E30" />
          <stop offset="100%" stopColor="#4A3520" />
        </linearGradient>
        <radialGradient id="mc-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#7A5A35" stopOpacity="0.3" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      {/* Glow */}
      <ellipse cx="24" cy="32" rx="18" ry="12" fill="url(#mc-glow)" />
      {/* Base pile – larger */}
      <ellipse cx="24" cy="35" rx="16" ry="9" fill="url(#mc-soil)" />
      <ellipse cx="24" cy="33" rx="14" ry="7" fill="#5E4428" />
      {/* Top mound */}
      <ellipse cx="24" cy="30" rx="11" ry="6" fill="#6B4E30" />
      <ellipse cx="22" cy="28" rx="7" ry="4" fill="#7A5A38" />
      {/* Highlights */}
      <ellipse cx="20" cy="27" rx="3" ry="1.5" fill="#8A6A48" opacity="0.45" />
      <ellipse cx="27" cy="30" rx="2" ry="1" fill="#8A6A48" opacity="0.3" />
      {/* Leaf & organic matter */}
      <path d="M17 30c2-3 4-2 3.5 0" stroke="#5A8840" strokeWidth="1.2" fill="none" opacity="0.65" />
      <path d="M28 28c-1.5-2 -3.5-1.5 -3 0.8" stroke="#6A9850" strokeWidth="1" fill="none" opacity="0.55" />
      <path d="M21 33c1-1 2.5-0.5 2 0.5" stroke="#4A7835" strokeWidth="0.8" fill="none" opacity="0.4" />
      {/* Particles */}
      <circle cx="18" cy="32" r="0.8" fill="#7A6A50" opacity="0.7" />
      <circle cx="29" cy="34" r="0.6" fill="#6A5A40" opacity="0.6" />
      <circle cx="25" cy="26" r="0.5" fill="#8A7A58" opacity="0.5" />
      <circle cx="16" cy="34" r="0.4" fill="#6A5A40" opacity="0.4" />
    </svg>
  );
}

export function RichCompostIcon({ size = 32, className = '', style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} style={style} fill="none">
      <defs>
        <linearGradient id="rc-soil" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3E2A15" />
          <stop offset="100%" stopColor="#2A1A0A" />
        </linearGradient>
        <radialGradient id="rc-glow" cx="0.5" cy="0.5" r="0.55">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.12" />
          <stop offset="50%" stopColor="#8B6914" stopOpacity="0.06" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="rc-warmglow" cx="0.5" cy="0.4" r="0.4">
          <stop offset="0%" stopColor="#D4A54A" stopOpacity="0.15" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      {/* Living glow */}
      <ellipse cx="24" cy="30" rx="20" ry="14" fill="url(#rc-glow)" className="animate-breathe" />
      <ellipse cx="24" cy="28" rx="16" ry="10" fill="url(#rc-warmglow)" />
      {/* Base pile – darkest, richest */}
      <ellipse cx="24" cy="36" rx="17" ry="9" fill="url(#rc-soil)" />
      <ellipse cx="24" cy="34" rx="15" ry="8" fill="#352010" />
      {/* Top mound */}
      <ellipse cx="24" cy="30" rx="12" ry="7" fill="#3E2A15" />
      <ellipse cx="22" cy="27" rx="8" ry="5" fill="#4A3520" />
      {/* Moist highlights */}
      <ellipse cx="19" cy="26" rx="3.5" ry="1.8" fill="#5A4530" opacity="0.5" />
      <ellipse cx="28" cy="29" rx="2.5" ry="1.2" fill="#5A4530" opacity="0.35" />
      {/* Rich organic texture */}
      <path d="M16 31c2-3.5 5-2.5 4 0.5" stroke="#3A7828" strokeWidth="1.3" fill="none" opacity="0.7" />
      <path d="M27 27c-2-2.5 -4.5-1.5 -3.5 1" stroke="#4A8838" strokeWidth="1.1" fill="none" opacity="0.6" />
      <path d="M20 34c1.5-1.5 3-0.5 2.5 0.8" stroke="#3A6828" strokeWidth="0.9" fill="none" opacity="0.5" />
      <path d="M30 32c-1-1.2 -2.5-0.8 -2 0.5" stroke="#4A7A35" strokeWidth="0.8" fill="none" opacity="0.45" />
      {/* Particles */}
      <circle cx="17" cy="33" r="0.9" fill="#5A4A30" opacity="0.7" />
      <circle cx="30" cy="35" r="0.7" fill="#4A3A20" opacity="0.6" />
      <circle cx="26" cy="25" r="0.6" fill="#6A5A38" opacity="0.5" />
      <circle cx="15" cy="35" r="0.5" fill="#4A3A20" opacity="0.4" />
      {/* Sparkle particles for "living soil" */}
      <circle cx="20" cy="24" r="1" fill="#FFD700" opacity="0.6" className="animate-float" />
      <circle cx="28" cy="26" r="0.8" fill="#FFE066" opacity="0.5" className="animate-float" style={{ animationDelay: '0.8s' }} />
      <circle cx="16" cy="29" r="0.7" fill="#FFD700" opacity="0.4" className="animate-float" style={{ animationDelay: '1.6s' }} />
      <circle cx="31" cy="31" r="0.6" fill="#FFE066" opacity="0.35" className="animate-float" style={{ animationDelay: '2.4s' }} />
    </svg>
  );
}

/* ================================================================ */
/*  WATER ICONS                                                       */
/*  Visual family: watering can with stream/droplets                  */
/*  Variants differ by: stream intensity, droplet count, glow         */
/* ================================================================ */

export function LightWaterIcon({ size = 32, className = '', style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} style={style} fill="none">
      <defs>
        <linearGradient id="lw-can" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5B8A9A" />
          <stop offset="100%" stopColor="#3A6A7A" />
        </linearGradient>
        <linearGradient id="lw-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7DD3FC" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      {/* Can body */}
      <rect x="10" y="18" width="18" height="16" rx="3" fill="url(#lw-can)" />
      {/* Can highlight */}
      <rect x="12" y="19" width="5" height="14" rx="2" fill="#6A9AAA" opacity="0.35" />
      {/* Rim */}
      <rect x="9" y="16" width="20" height="3" rx="1.5" fill="#4A7A8A" />
      {/* Handle */}
      <path d="M28 18c5-1 6 4 5 8" stroke="#4A7A8A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Spout */}
      <path d="M10 22L4 18" stroke="#4A7A8A" strokeWidth="2.5" strokeLinecap="round" />
      {/* Water stream – thin */}
      <line x1="4" y1="19" x2="4" y2="30" stroke="url(#lw-water)" strokeWidth="1.2" strokeLinecap="round" className="water-drip-light" />
      {/* Few droplets */}
      <circle cx="4" cy="33" r="1" fill="#7DD3FC" opacity="0.6" className="water-drip-light" style={{ animationDelay: '0.3s' }} />
      <circle cx="5" cy="36" r="0.7" fill="#7DD3FC" opacity="0.4" className="water-drip-light" style={{ animationDelay: '0.6s' }} />
    </svg>
  );
}

export function SteadyWaterIcon({ size = 32, className = '', style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} style={style} fill="none">
      <defs>
        <linearGradient id="sw-can" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4A8A9A" />
          <stop offset="100%" stopColor="#2A6A7A" />
        </linearGradient>
        <linearGradient id="sw-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7DD3FC" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      {/* Can body */}
      <rect x="10" y="17" width="19" height="17" rx="3" fill="url(#sw-can)" />
      {/* Highlight */}
      <rect x="12" y="18" width="5" height="15" rx="2" fill="#5A9AAA" opacity="0.3" />
      {/* Rim */}
      <rect x="9" y="15" width="21" height="3" rx="1.5" fill="#3A7A8A" />
      {/* Handle */}
      <path d="M29 17c5.5-1 7 4 5.5 9" stroke="#3A7A8A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Spout */}
      <path d="M10 21L3.5 16.5" stroke="#3A7A8A" strokeWidth="2.5" strokeLinecap="round" />
      {/* Water stream – medium */}
      <path d="M3.5 17.5C3 22 2.5 28 3 34" stroke="url(#sw-water)" strokeWidth="2" strokeLinecap="round" className="water-drip-steady" />
      {/* More droplets */}
      <circle cx="3" cy="36" r="1.3" fill="#7DD3FC" opacity="0.65" className="water-drip-steady" style={{ animationDelay: '0.2s' }} />
      <circle cx="4.5" cy="38" r="1" fill="#7DD3FC" opacity="0.5" className="water-drip-steady" style={{ animationDelay: '0.5s' }} />
      <circle cx="2" cy="39" r="0.8" fill="#7DD3FC" opacity="0.4" className="water-drip-steady" style={{ animationDelay: '0.8s' }} />
      {/* Subtle shimmer */}
      <ellipse cx="3" cy="26" rx="1.5" ry="0.5" fill="#BAE6FD" opacity="0.3" className="animate-breathe" />
    </svg>
  );
}

export function DeepWaterIcon({ size = 32, className = '', style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} style={style} fill="none">
      <defs>
        <linearGradient id="dw-can" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3A7A8A" />
          <stop offset="100%" stopColor="#1A5A6A" />
        </linearGradient>
        <linearGradient id="dw-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7DD3FC" />
          <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.7" />
        </linearGradient>
        <radialGradient id="dw-glow" cx="0.15" cy="0.7" r="0.4">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.2" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      {/* Glow behind */}
      <ellipse cx="6" cy="32" rx="10" ry="12" fill="url(#dw-glow)" className="animate-breathe" />
      {/* Can body */}
      <rect x="10" y="16" width="20" height="18" rx="3.5" fill="url(#dw-can)" />
      {/* Highlight */}
      <rect x="12" y="17" width="5" height="16" rx="2" fill="#4A8A9A" opacity="0.3" />
      {/* Rim */}
      <rect x="9" y="14" width="22" height="3" rx="1.5" fill="#2A6A7A" />
      {/* Handle */}
      <path d="M30 16c6-1 7.5 5 6 10" stroke="#2A6A7A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Spout */}
      <path d="M10 20L3 15" stroke="#2A6A7A" strokeWidth="3" strokeLinecap="round" />
      {/* Water stream – powerful */}
      <path d="M3 16C2 22 1.5 30 2.5 38" stroke="url(#dw-water)" strokeWidth="3" strokeLinecap="round" className="water-drip-deep" />
      <path d="M3.5 16.5C4 23 5 30 4 37" stroke="#7DD3FC" strokeWidth="1" strokeLinecap="round" opacity="0.4" className="water-drip-deep" style={{ animationDelay: '0.3s' }} />
      {/* Splash droplets */}
      <circle cx="2" cy="39" r="1.8" fill="#7DD3FC" opacity="0.6" className="water-drip-deep" style={{ animationDelay: '0.15s' }} />
      <circle cx="5" cy="40" r="1.3" fill="#7DD3FC" opacity="0.5" className="water-drip-deep" style={{ animationDelay: '0.4s' }} />
      <circle cx="0.5" cy="41" r="1" fill="#7DD3FC" opacity="0.4" className="water-drip-deep" style={{ animationDelay: '0.65s' }} />
      <circle cx="6" cy="42" r="0.8" fill="#38BDF8" opacity="0.35" className="water-drip-deep" style={{ animationDelay: '0.9s' }} />
      <circle cx="1" cy="43" r="0.6" fill="#38BDF8" opacity="0.3" className="water-drip-deep" style={{ animationDelay: '1.1s' }} />
      {/* Shimmer */}
      <ellipse cx="2.5" cy="28" rx="2" ry="0.6" fill="#BAE6FD" opacity="0.35" className="animate-breathe" />
    </svg>
  );
}

/* ================================================================ */
/*  TREE ICONS                                                        */
/*  Visual family: realistic broadleaf tree with trunk + canopy       */
/*  Variants: sapling (small) vs mature (large)                       */
/* ================================================================ */

export function SmallTreeIcon({ size = 32, className = '', style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} style={style} fill="none">
      <defs>
        <linearGradient id="st-trunk" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5C4030" />
          <stop offset="50%" stopColor="#7A5A42" />
          <stop offset="100%" stopColor="#5C4030" />
        </linearGradient>
        <radialGradient id="st-canopy" cx="0.45" cy="0.55" r="0.55">
          <stop offset="0%" stopColor="#4CAF50" />
          <stop offset="60%" stopColor="#388E3C" />
          <stop offset="100%" stopColor="#2E7D32" />
        </radialGradient>
        <radialGradient id="st-highlight" cx="0.35" cy="0.35" r="0.4">
          <stop offset="0%" stopColor="#66BB6A" stopOpacity="0.5" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      {/* Trunk – slender sapling */}
      <rect x="22" y="28" width="4" height="14" rx="1.5" fill="url(#st-trunk)" />
      {/* Trunk shadow */}
      <rect x="23.5" y="28" width="1.5" height="14" rx="0.75" fill="#4A3020" opacity="0.3" />
      {/* Small root */}
      <path d="M22 41c-2 1-3 1.5-4 1" stroke="#5C4030" strokeWidth="1.2" fill="none" opacity="0.5" />
      <path d="M26 41c2 0.8 3 1.2 3.5 0.8" stroke="#5C4030" strokeWidth="1" fill="none" opacity="0.4" />
      {/* Canopy – compact */}
      <ellipse cx="24" cy="22" rx="10" ry="12" fill="url(#st-canopy)" />
      {/* Light highlights */}
      <ellipse cx="21" cy="18" rx="5" ry="6" fill="url(#st-highlight)" />
      {/* Leaf texture dots */}
      <circle cx="19" cy="17" r="1" fill="#81C784" opacity="0.5" />
      <circle cx="26" cy="20" r="0.8" fill="#A5D6A7" opacity="0.4" />
      <circle cx="22" cy="24" r="0.7" fill="#66BB6A" opacity="0.35" />
      {/* Slight shadow underneath */}
      <ellipse cx="24" cy="43" rx="6" ry="1.5" fill="#000" opacity="0.12" />
    </svg>
  );
}

export function LargeTreeIcon({ size = 32, className = '', style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} style={style} fill="none">
      <defs>
        <linearGradient id="lt-trunk" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4A3020" />
          <stop offset="50%" stopColor="#6A4A32" />
          <stop offset="100%" stopColor="#4A3020" />
        </linearGradient>
        <radialGradient id="lt-canopy1" cx="0.45" cy="0.55" r="0.55">
          <stop offset="0%" stopColor="#388E3C" />
          <stop offset="60%" stopColor="#2E7D32" />
          <stop offset="100%" stopColor="#1B5E20" />
        </radialGradient>
        <radialGradient id="lt-canopy2" cx="0.55" cy="0.45" r="0.5">
          <stop offset="0%" stopColor="#43A047" />
          <stop offset="100%" stopColor="#2E7D32" />
        </radialGradient>
        <radialGradient id="lt-highlight" cx="0.35" cy="0.35" r="0.45">
          <stop offset="0%" stopColor="#66BB6A" stopOpacity="0.45" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      {/* Shadow */}
      <ellipse cx="24" cy="44" rx="9" ry="2" fill="#000" opacity="0.15" />
      {/* Thick trunk */}
      <rect x="20" y="30" width="8" height="14" rx="2.5" fill="url(#lt-trunk)" />
      {/* Bark texture */}
      <line x1="22" y1="32" x2="22" y2="38" stroke="#3A2015" strokeWidth="0.5" opacity="0.3" />
      <line x1="25" y1="31" x2="25" y2="40" stroke="#3A2015" strokeWidth="0.5" opacity="0.25" />
      {/* Root flare */}
      <path d="M20 42c-3 1.5-5 2-7 1.5" stroke="#4A3020" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
      <path d="M28 42c3 1 5 1.5 6.5 1" stroke="#4A3020" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.5" />
      {/* Main canopy – layered for fullness */}
      <ellipse cx="24" cy="20" rx="16" ry="16" fill="url(#lt-canopy1)" />
      <ellipse cx="20" cy="17" rx="10" ry="11" fill="url(#lt-canopy2)" />
      <ellipse cx="29" cy="19" rx="9" ry="10" fill="#2E7D32" opacity="0.7" />
      {/* Highlights */}
      <ellipse cx="18" cy="14" rx="6" ry="7" fill="url(#lt-highlight)" />
      {/* Leaf texture */}
      <circle cx="16" cy="14" r="1.2" fill="#81C784" opacity="0.45" />
      <circle cx="22" cy="11" r="1" fill="#A5D6A7" opacity="0.35" />
      <circle cx="28" cy="16" r="0.9" fill="#66BB6A" opacity="0.3" />
      <circle cx="18" cy="22" r="0.8" fill="#81C784" opacity="0.25" />
      <circle cx="30" cy="22" r="1" fill="#4CAF50" opacity="0.3" />
      {/* Branch hints */}
      <path d="M22 30c-4-2-8-5-10-4" stroke="#5C4030" strokeWidth="1" fill="none" opacity="0.25" />
      <path d="M26 30c3-3 7-4 9-3" stroke="#5C4030" strokeWidth="0.8" fill="none" opacity="0.2" />
    </svg>
  );
}

/* ================================================================ */
/*  Lookup map for easy integration                                   */
/* ================================================================ */

const ICON_MAP: Record<string, (props: IconProps) => React.ReactElement> = {
  'small-compost': SmallCompostIcon,
  'medium-compost': MediumCompostIcon,
  'rich-compost': RichCompostIcon,
  'light-water': LightWaterIcon,
  'steady-water': SteadyWaterIcon,
  'deep-water': DeepWaterIcon,
  'small-tree': SmallTreeIcon,
  'large-tree': LargeTreeIcon,
};

export function GameIcon({ id, size = 32, className = '', style }: IconProps & { id: string }) {
  const Comp = ICON_MAP[id];
  if (!Comp) return null;
  return <Comp size={size} className={className} style={style} />;
}

/* ================================================================ */
/*  Garden scene SVG components (larger, for placed state)            */
/* ================================================================ */

export function GardenCompostSVG({ variant }: { variant: 'small-compost' | 'medium-compost' | 'rich-compost' }) {
  const colors = {
    'small-compost': { base: '#8B7355', top: '#7A6A50', highlight: '#A09070' },
    'medium-compost': { base: '#6B4E30', top: '#5E4428', highlight: '#8A6A48' },
    'rich-compost': { base: '#3E2A15', top: '#352010', highlight: '#5A4530' },
  };
  const c = colors[variant];
  const isRich = variant === 'rich-compost';

  return (
    <svg width="42" height="36" viewBox="0 0 42 36" fill="none" className="inline-block">
      {isRich && <ellipse cx="21" cy="20" rx="18" ry="14" fill="#FFD700" opacity="0.06" className="animate-breathe" />}
      <ellipse cx="21" cy="28" rx="16" ry="7" fill={c.base} />
      <ellipse cx="21" cy="26" rx="13" ry="5.5" fill={c.top} />
      <ellipse cx="21" cy="24" rx="10" ry="4.5" fill={c.highlight} opacity="0.35" />
      <path d="M15 25c2-3 4-2 3 0.5" stroke="#5A8840" strokeWidth="1.1" fill="none" opacity="0.6" />
      <path d="M25 24c-1.5-2 -3-1 -2.5 0.8" stroke="#4A7835" strokeWidth="0.9" fill="none" opacity="0.5" />
      {isRich && (
        <>
          <circle cx="16" cy="21" r="0.9" fill="#FFD700" opacity="0.55" className="animate-float" />
          <circle cx="26" cy="22" r="0.7" fill="#FFE066" opacity="0.45" className="animate-float" style={{ animationDelay: '1s' }} />
          <circle cx="21" cy="19" r="0.6" fill="#FFD700" opacity="0.35" className="animate-float" style={{ animationDelay: '2s' }} />
        </>
      )}
    </svg>
  );
}

export function GardenPlantSVG({ variant, idx }: { variant: 'light-water' | 'steady-water' | 'deep-water'; idx: number }) {
  if (variant === 'light-water') {
    return (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="inline-block">
        <path d="M18 34V22" stroke="#5A8840" strokeWidth="1.8" strokeLinecap="round" />
        <ellipse cx="18" cy="20" rx="5" ry="4" fill="#66BB6A" />
        <ellipse cx="16.5" cy="19" rx="2" ry="2" fill="#81C784" opacity="0.5" />
      </svg>
    );
  }
  if (variant === 'steady-water') {
    return (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" className="inline-block">
        <path d="M19 36V20" stroke="#4A7835" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 28c-3-2-4-5-3-7" stroke="#5A8840" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M24 26c2-2 3-4 2.5-6" stroke="#5A8840" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <ellipse cx="19" cy="17" rx="8" ry="7" fill="#43A047" />
        <ellipse cx="17" cy="15" rx="4" ry="3.5" fill="#66BB6A" opacity="0.5" />
        <ellipse cx="22" cy="18" rx="3" ry="2.5" fill="#388E3C" opacity="0.4" />
      </svg>
    );
  }
  // deep-water: full blooming flower
  const flowerColors = ['#E91E63', '#FF5722', '#FF9800', '#9C27B0', '#F44336'];
  const fc = flowerColors[idx % flowerColors.length];
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="inline-block">
      <path d="M20 38V18" stroke="#2E7D32" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M14 30c-4-2-5-6-4-9" stroke="#388E3C" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M26 28c3-2 4-5 3.5-8" stroke="#388E3C" strokeWidth="1.3" fill="none" strokeLinecap="round" />
      {/* Leaves */}
      <ellipse cx="12" cy="24" rx="4" ry="2" fill="#43A047" transform="rotate(-30 12 24)" />
      <ellipse cx="28" cy="22" rx="3.5" ry="1.8" fill="#388E3C" transform="rotate(25 28 22)" />
      {/* Flower petals */}
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <ellipse
          key={angle}
          cx="20" cy="11"
          rx="3.5" ry="5.5"
          fill={fc}
          opacity="0.8"
          transform={`rotate(${angle} 20 14)`}
        />
      ))}
      <circle cx="20" cy="14" r="3" fill="#FFEB3B" />
      <circle cx="20" cy="14" r="1.5" fill="#FF9800" opacity="0.6" />
    </svg>
  );
}

export function GardenTreeSVG({ variant }: { variant: 'small-tree' | 'large-tree' }) {
  if (variant === 'small-tree') {
    return (
      <svg width="42" height="48" viewBox="0 0 42 48" fill="none" className="inline-block">
        <ellipse cx="21" cy="46" rx="5" ry="1.2" fill="#000" opacity="0.1" />
        <rect x="19" y="30" width="4" height="14" rx="1.5" fill="#6A4A32" />
        <rect x="20.5" y="30" width="1.5" height="14" rx="0.75" fill="#4A3020" opacity="0.25" />
        <ellipse cx="21" cy="22" rx="12" ry="14" fill="#388E3C" />
        <ellipse cx="18" cy="18" rx="6" ry="7" fill="#43A047" opacity="0.5" />
        <circle cx="16" cy="16" r="1" fill="#81C784" opacity="0.4" />
        <circle cx="24" cy="20" r="0.8" fill="#A5D6A7" opacity="0.3" />
      </svg>
    );
  }
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" className="inline-block">
      <ellipse cx="26" cy="50" rx="8" ry="1.5" fill="#000" opacity="0.12" />
      <rect x="22" y="34" width="8" height="14" rx="2.5" fill="#5C4030" />
      <line x1="24" y1="36" x2="24" y2="42" stroke="#3A2015" strokeWidth="0.5" opacity="0.3" />
      <line x1="28" y1="35" x2="28" y2="44" stroke="#3A2015" strokeWidth="0.5" opacity="0.25" />
      <path d="M22 46c-3 1.5-5 2-7 1.5" stroke="#4A3020" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.5" />
      <path d="M30 46c3 1 5 1.5 6.5 1" stroke="#4A3020" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.4" />
      <ellipse cx="26" cy="22" rx="18" ry="18" fill="#2E7D32" />
      <ellipse cx="22" cy="18" rx="11" ry="12" fill="#388E3C" opacity="0.7" />
      <ellipse cx="31" cy="21" rx="10" ry="11" fill="#1B5E20" opacity="0.5" />
      <ellipse cx="20" cy="15" rx="7" ry="8" fill="#43A047" opacity="0.35" />
      <circle cx="18" cy="14" r="1.2" fill="#81C784" opacity="0.4" />
      <circle cx="25" cy="12" r="1" fill="#A5D6A7" opacity="0.3" />
      <circle cx="32" cy="18" r="0.9" fill="#66BB6A" opacity="0.25" />
      <circle cx="20" cy="24" r="0.8" fill="#81C784" opacity="0.2" />
    </svg>
  );
}
