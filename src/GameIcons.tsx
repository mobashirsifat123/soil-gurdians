import React, { type CSSProperties } from 'react';

/* ================================================================ */
/*  Shared                                                            */
/* ================================================================ */

interface IconProps {
  size?: number;
  className?: string;
  style?: CSSProperties;
}

/* ================================================================ */
/*  COMPOST ICONS — Vibrant earthy tones, clearly differentiated      */
/* ================================================================ */

export function SmallCompostIcon({ size = 32, className = '', style }: IconProps) {
  const id = React.useId();
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} style={style} fill="none">
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C9A96E" />
          <stop offset="100%" stopColor="#A8885A" />
        </linearGradient>
      </defs>
      {/* Small sandy pile */}
      <ellipse cx="24" cy="36" rx="12" ry="6" fill={`url(#${id}-g)`} />
      <ellipse cx="24" cy="34" rx="9" ry="4.5" fill="#D4B87A" />
      <ellipse cx="24" cy="32" rx="6" ry="3" fill="#DFCA90" />
      {/* Highlight */}
      <ellipse cx="22" cy="31" rx="3" ry="1.5" fill="#EDD9A3" opacity="0.6" />
      {/* Leaf bits */}
      <path d="M20 33c1.5-2 3-1 2 0.8" stroke="#8BC34A" strokeWidth="1.3" fill="none" opacity="0.8" />
      {/* Particles */}
      <circle cx="19" cy="35" r="0.8" fill="#BFA668" opacity="0.7" />
      <circle cx="28" cy="35" r="0.6" fill="#C4AD72" opacity="0.6" />
    </svg>
  );
}

export function MediumCompostIcon({ size = 32, className = '', style }: IconProps) {
  const id = React.useId();
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} style={style} fill="none">
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8B6230" />
          <stop offset="100%" stopColor="#6B4420" />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#FF9800" stopOpacity="0.12" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      {/* Warm glow */}
      <ellipse cx="24" cy="32" rx="16" ry="10" fill={`url(#${id}-glow)`} />
      {/* Bigger, richer pile */}
      <ellipse cx="24" cy="37" rx="15" ry="7" fill={`url(#${id}-g)`} />
      <ellipse cx="24" cy="34" rx="12" ry="6" fill="#7A5428" />
      <ellipse cx="24" cy="31" rx="9" ry="5" fill="#8B6838" />
      {/* Highlights */}
      <ellipse cx="21" cy="30" rx="4" ry="2" fill="#A67D4A" opacity="0.5" />
      {/* Richer leaf texture */}
      <path d="M17 33c2-3 5-2 4 0.5" stroke="#66BB6A" strokeWidth="1.4" fill="none" opacity="0.8" />
      <path d="M27 31c-2-2 -4-1.5 -3 1" stroke="#81C784" strokeWidth="1.1" fill="none" opacity="0.7" />
      <path d="M22 35c1-1 2-0.5 1.5 0.5" stroke="#4CAF50" strokeWidth="1" fill="none" opacity="0.6" />
      {/* Particles */}
      <circle cx="17" cy="35" r="0.9" fill="#8B6838" opacity="0.8" />
      <circle cx="30" cy="36" r="0.7" fill="#7A5428" opacity="0.7" />
      <circle cx="26" cy="29" r="0.6" fill="#A67D4A" opacity="0.6" />
    </svg>
  );
}

export function RichCompostIcon({ size = 32, className = '', style }: IconProps) {
  const id = React.useId();
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} style={style} fill="none">
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3E2212" />
          <stop offset="100%" stopColor="#1F1008" />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="0.5" cy="0.45" r="0.5">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.25" />
          <stop offset="60%" stopColor="#FF8F00" stopOpacity="0.08" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      {/* Strong golden glow */}
      <ellipse cx="24" cy="30" rx="20" ry="14" fill={`url(#${id}-glow)`} className="animate-breathe" />
      {/* Dark, rich pile */}
      <ellipse cx="24" cy="37" rx="16" ry="8" fill={`url(#${id}-g)`} />
      <ellipse cx="24" cy="34" rx="14" ry="7" fill="#2A1808" />
      <ellipse cx="24" cy="31" rx="11" ry="6" fill="#3E2815" />
      <ellipse cx="22" cy="28" rx="7" ry="4" fill="#4A3520" />
      {/* Moist sheen */}
      <ellipse cx="20" cy="27" rx="4" ry="2" fill="#5A4530" opacity="0.5" />
      <ellipse cx="28" cy="30" rx="3" ry="1.5" fill="#5A4530" opacity="0.35" />
      {/* Dense organic texture */}
      <path d="M15 33c3-4 6-2 5 0.5" stroke="#43A047" strokeWidth="1.5" fill="none" opacity="0.8" />
      <path d="M26 28c-2-3 -5-2 -4 1" stroke="#66BB6A" strokeWidth="1.2" fill="none" opacity="0.7" />
      <path d="M20 36c2-2 4-1 3 1" stroke="#388E3C" strokeWidth="1" fill="none" opacity="0.6" />
      {/* Gold sparkle particles */}
      <circle cx="18" cy="24" r="1.4" fill="#FFD700" opacity="0.8" className="animate-float" />
      <circle cx="29" cy="26" r="1.1" fill="#FFC107" opacity="0.7" className="animate-float" style={{ animationDelay: '0.6s' }} />
      <circle cx="14" cy="30" r="1" fill="#FFEB3B" opacity="0.6" className="animate-float" style={{ animationDelay: '1.2s' }} />
      <circle cx="33" cy="32" r="0.8" fill="#FFD700" opacity="0.5" className="animate-float" style={{ animationDelay: '1.8s' }} />
      <circle cx="24" cy="23" r="0.9" fill="#FFC107" opacity="0.55" className="animate-float" style={{ animationDelay: '2.4s' }} />
    </svg>
  );
}

/* ================================================================ */
/*  WATER ICONS — Bright cyan/blue, clearly different intensities     */
/* ================================================================ */

export function LightWaterIcon({ size = 32, className = '', style }: IconProps) {
  const id = React.useId();
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} style={style} fill="none">
      <defs>
        <linearGradient id={`${id}-can`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#78C6E0" />
          <stop offset="100%" stopColor="#4BA8C8" />
        </linearGradient>
      </defs>
      {/* Can body */}
      <rect x="14" y="16" width="16" height="14" rx="3" fill={`url(#${id}-can)`} />
      <rect x="16" y="17" width="4" height="12" rx="1.5" fill="#8ED4E8" opacity="0.4" />
      {/* Rim */}
      <rect x="13" y="14" width="18" height="3" rx="1.5" fill="#5CB8D6" />
      {/* Handle */}
      <path d="M30 16c4-0.5 5 3 4 7" stroke="#5CB8D6" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Spout */}
      <path d="M14 20L8 16" stroke="#5CB8D6" strokeWidth="2.5" strokeLinecap="round" />
      {/* Single thin stream */}
      <line x1="8" y1="17" x2="8.5" y2="32" stroke="#67D8FF" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" className="water-drip-light" />
      {/* 2 small drops */}
      <circle cx="8.5" cy="35" r="1.2" fill="#67D8FF" opacity="0.6" className="water-drip-light" style={{ animationDelay: '0.4s' }} />
      <circle cx="9" cy="38" r="0.8" fill="#90E4FF" opacity="0.4" className="water-drip-light" style={{ animationDelay: '0.8s' }} />
    </svg>
  );
}

export function SteadyWaterIcon({ size = 32, className = '', style }: IconProps) {
  const id = React.useId();
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} style={style} fill="none">
      <defs>
        <linearGradient id={`${id}-can`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4DB6E0" />
          <stop offset="100%" stopColor="#2196F3" />
        </linearGradient>
        <linearGradient id={`${id}-w`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#64D8FF" />
          <stop offset="100%" stopColor="#29B6F6" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      {/* Subtle glow */}
      <ellipse cx="7" cy="30" rx="6" ry="10" fill="#29B6F6" opacity="0.08" className="animate-breathe" />
      {/* Can body */}
      <rect x="13" y="15" width="17" height="15" rx="3" fill={`url(#${id}-can)`} />
      <rect x="15" y="16" width="4" height="13" rx="1.5" fill="#64C8E8" opacity="0.35" />
      {/* Rim */}
      <rect x="12" y="13" width="19" height="3" rx="1.5" fill="#3AAED6" />
      {/* Handle */}
      <path d="M30 15c5-0.5 6 4 5 8" stroke="#3AAED6" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Spout */}
      <path d="M13 19L6 14.5" stroke="#3AAED6" strokeWidth="2.5" strokeLinecap="round" />
      {/* Medium stream */}
      <path d="M6 15.5C5.5 22 5 28 5.5 36" stroke={`url(#${id}-w)`} strokeWidth="2.5" strokeLinecap="round" className="water-drip-steady" />
      {/* More drops */}
      <circle cx="5.5" cy="38" r="1.5" fill="#64D8FF" opacity="0.7" className="water-drip-steady" style={{ animationDelay: '0.2s' }} />
      <circle cx="7" cy="40" r="1.2" fill="#64D8FF" opacity="0.55" className="water-drip-steady" style={{ animationDelay: '0.5s' }} />
      <circle cx="4" cy="41" r="0.9" fill="#90E4FF" opacity="0.4" className="water-drip-steady" style={{ animationDelay: '0.8s' }} />
      {/* Shimmer */}
      <ellipse cx="5.5" cy="26" rx="1.8" ry="0.5" fill="#B3E5FC" opacity="0.4" className="animate-breathe" />
    </svg>
  );
}

export function DeepWaterIcon({ size = 32, className = '', style }: IconProps) {
  const id = React.useId();
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} style={style} fill="none">
      <defs>
        <linearGradient id={`${id}-can`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1976D2" />
          <stop offset="100%" stopColor="#0D47A1" />
        </linearGradient>
        <linearGradient id={`${id}-w`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#42A5F5" />
          <stop offset="100%" stopColor="#1565C0" stopOpacity="0.8" />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="0.2" cy="0.7" r="0.4">
          <stop offset="0%" stopColor="#42A5F5" stopOpacity="0.25" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      {/* Strong blue glow */}
      <ellipse cx="6" cy="32" rx="12" ry="14" fill={`url(#${id}-glow)`} className="animate-breathe" />
      {/* Can body – deep blue */}
      <rect x="12" y="14" width="18" height="16" rx="3.5" fill={`url(#${id}-can)`} />
      <rect x="14" y="15" width="4" height="14" rx="1.5" fill="#2196F3" opacity="0.35" />
      {/* Rim */}
      <rect x="11" y="12" width="20" height="3" rx="1.5" fill="#1565C0" />
      {/* Handle */}
      <path d="M30 14c6-1 7 5 5.5 10" stroke="#1565C0" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Spout */}
      <path d="M12 18L4 13" stroke="#1565C0" strokeWidth="3" strokeLinecap="round" />
      {/* Powerful main stream */}
      <path d="M4 14C3 21 2 30 3 40" stroke={`url(#${id}-w)`} strokeWidth="3.5" strokeLinecap="round" className="water-drip-deep" />
      {/* Secondary stream */}
      <path d="M5 14.5C5.5 22 6 30 5 39" stroke="#64B5F6" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" className="water-drip-deep" style={{ animationDelay: '0.3s' }} />
      {/* Splash cluster */}
      <circle cx="3" cy="41" r="2" fill="#42A5F5" opacity="0.7" className="water-drip-deep" style={{ animationDelay: '0.15s' }} />
      <circle cx="6" cy="42" r="1.5" fill="#64B5F6" opacity="0.6" className="water-drip-deep" style={{ animationDelay: '0.4s' }} />
      <circle cx="1" cy="43" r="1.2" fill="#90CAF9" opacity="0.5" className="water-drip-deep" style={{ animationDelay: '0.65s' }} />
      <circle cx="7.5" cy="43.5" r="1" fill="#42A5F5" opacity="0.45" className="water-drip-deep" style={{ animationDelay: '0.9s' }} />
      <circle cx="0" cy="44" r="0.8" fill="#BBDEFB" opacity="0.35" className="water-drip-deep" style={{ animationDelay: '1.1s' }} />
      {/* Bright shimmer */}
      <ellipse cx="3.5" cy="28" rx="2.5" ry="0.7" fill="#E3F2FD" opacity="0.45" className="animate-breathe" />
    </svg>
  );
}

/* ================================================================ */
/*  TREE ICONS — Vibrant greens, big visual difference                */
/* ================================================================ */

export function SmallTreeIcon({ size = 32, className = '', style }: IconProps) {
  const id = React.useId();
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} style={style} fill="none">
      <defs>
        <linearGradient id={`${id}-t`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#795548" />
          <stop offset="50%" stopColor="#8D6E63" />
          <stop offset="100%" stopColor="#795548" />
        </linearGradient>
        <radialGradient id={`${id}-c`} cx="0.4" cy="0.5" r="0.55">
          <stop offset="0%" stopColor="#81C784" />
          <stop offset="50%" stopColor="#4CAF50" />
          <stop offset="100%" stopColor="#388E3C" />
        </radialGradient>
      </defs>
      {/* Shadow */}
      <ellipse cx="24" cy="44" rx="5" ry="1.2" fill="#000" opacity="0.1" />
      {/* Slim trunk */}
      <rect x="22" y="30" width="4" height="13" rx="1.5" fill={`url(#${id}-t)`} />
      <rect x="23.5" y="30" width="1.5" height="13" rx="0.75" fill="#5D4037" opacity="0.25" />
      {/* Small roots */}
      <path d="M22 42c-2 1-3 1.5-4 1" stroke="#795548" strokeWidth="1.2" fill="none" opacity="0.45" />
      <path d="M26 42c1.5 0.8 3 1 3.5 0.5" stroke="#795548" strokeWidth="1" fill="none" opacity="0.35" />
      {/* Bright green canopy */}
      <ellipse cx="24" cy="23" rx="10" ry="13" fill={`url(#${id}-c)`} />
      {/* Highlights */}
      <ellipse cx="21" cy="19" rx="5" ry="6" fill="#A5D6A7" opacity="0.4" />
      <circle cx="19" cy="17" r="1.3" fill="#C8E6C9" opacity="0.5" />
      <circle cx="26" cy="21" r="1" fill="#E8F5E9" opacity="0.4" />
      <circle cx="22" cy="26" r="0.8" fill="#A5D6A7" opacity="0.35" />
    </svg>
  );
}

export function LargeTreeIcon({ size = 32, className = '', style }: IconProps) {
  const id = React.useId();
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} style={style} fill="none">
      <defs>
        <linearGradient id={`${id}-t`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5D4037" />
          <stop offset="50%" stopColor="#795548" />
          <stop offset="100%" stopColor="#5D4037" />
        </linearGradient>
        <radialGradient id={`${id}-c1`} cx="0.45" cy="0.5" r="0.55">
          <stop offset="0%" stopColor="#66BB6A" />
          <stop offset="50%" stopColor="#43A047" />
          <stop offset="100%" stopColor="#2E7D32" />
        </radialGradient>
        <radialGradient id={`${id}-c2`} cx="0.55" cy="0.4" r="0.5">
          <stop offset="0%" stopColor="#81C784" />
          <stop offset="100%" stopColor="#388E3C" />
        </radialGradient>
        <radialGradient id={`${id}-glow`} cx="0.5" cy="0.4" r="0.5">
          <stop offset="0%" stopColor="#4CAF50" stopOpacity="0.12" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      {/* Green aura */}
      <ellipse cx="24" cy="20" rx="20" ry="18" fill={`url(#${id}-glow)`} className="animate-breathe" />
      {/* Shadow */}
      <ellipse cx="24" cy="45" rx="8" ry="1.8" fill="#000" opacity="0.12" />
      {/* Thick trunk */}
      <rect x="20" y="30" width="8" height="14" rx="2.5" fill={`url(#${id}-t)`} />
      {/* Bark */}
      <line x1="22" y1="32" x2="22" y2="39" stroke="#4E342E" strokeWidth="0.6" opacity="0.3" />
      <line x1="26" y1="31" x2="26" y2="41" stroke="#4E342E" strokeWidth="0.5" opacity="0.25" />
      {/* Root flare */}
      <path d="M20 43c-3 1.5-5 2-7 1.5" stroke="#5D4037" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.55" />
      <path d="M28 43c3 1 5 1.5 6.5 1" stroke="#5D4037" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.45" />
      {/* Multi-layer canopy */}
      <ellipse cx="24" cy="19" rx="17" ry="17" fill={`url(#${id}-c1)`} />
      <ellipse cx="20" cy="16" rx="11" ry="12" fill={`url(#${id}-c2)`} opacity="0.7" />
      <ellipse cx="30" cy="19" rx="9" ry="10" fill="#388E3C" opacity="0.55" />
      {/* Bright highlights */}
      <ellipse cx="17" cy="13" rx="7" ry="8" fill="#A5D6A7" opacity="0.35" />
      <circle cx="15" cy="12" r="1.5" fill="#C8E6C9" opacity="0.5" />
      <circle cx="23" cy="10" r="1.2" fill="#E8F5E9" opacity="0.4" />
      <circle cx="30" cy="15" r="1.1" fill="#C8E6C9" opacity="0.35" />
      <circle cx="19" cy="22" r="1" fill="#A5D6A7" opacity="0.3" />
      <circle cx="32" cy="22" r="1.2" fill="#81C784" opacity="0.3" />
      {/* Branch hints */}
      <path d="M22 30c-4-2-9-5-11-4" stroke="#6D4C41" strokeWidth="1" fill="none" opacity="0.2" />
      <path d="M26 30c3-3 8-5 10-4" stroke="#6D4C41" strokeWidth="0.8" fill="none" opacity="0.18" />
    </svg>
  );
}

/* ================================================================ */
/*  Lookup map                                                        */
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
/*  Garden scene components (larger, placed state)                    */
/* ================================================================ */

export function GardenCompostSVG({ variant }: { variant: 'small-compost' | 'medium-compost' | 'rich-compost' }) {
  const colors = {
    'small-compost': { base: '#C9A96E', mid: '#D4B87A', top: '#DFCA90' },
    'medium-compost': { base: '#8B6230', mid: '#7A5428', top: '#A67D4A' },
    'rich-compost': { base: '#3E2212', mid: '#2A1808', top: '#4A3520' },
  };
  const c = colors[variant];
  const isRich = variant === 'rich-compost';

  return (
    <svg width="44" height="38" viewBox="0 0 44 38" fill="none" className="inline-block">
      {isRich && <ellipse cx="22" cy="20" rx="18" ry="14" fill="#FFD700" opacity="0.08" className="animate-breathe" />}
      <ellipse cx="22" cy="30" rx="16" ry="7" fill={c.base} />
      <ellipse cx="22" cy="28" rx="13" ry="5.5" fill={c.mid} />
      <ellipse cx="22" cy="26" rx="10" ry="4" fill={c.top} opacity="0.5" />
      <path d="M16 27c2-3 4-2 3 0.5" stroke="#66BB6A" strokeWidth="1.2" fill="none" opacity="0.7" />
      <path d="M26 26c-1.5-2 -3-1 -2.5 0.8" stroke="#81C784" strokeWidth="1" fill="none" opacity="0.6" />
      {isRich && (
        <>
          <circle cx="16" cy="22" r="1.2" fill="#FFD700" opacity="0.7" className="animate-float" />
          <circle cx="28" cy="23" r="1" fill="#FFC107" opacity="0.6" className="animate-float" style={{ animationDelay: '0.8s' }} />
          <circle cx="22" cy="20" r="0.8" fill="#FFEB3B" opacity="0.5" className="animate-float" style={{ animationDelay: '1.6s' }} />
        </>
      )}
    </svg>
  );
}

export function GardenPlantSVG({ variant, idx }: { variant: 'light-water' | 'steady-water' | 'deep-water'; idx: number }) {
  if (variant === 'light-water') {
    return (
      <svg width="36" height="38" viewBox="0 0 36 38" fill="none" className="inline-block">
        <path d="M18 36V24" stroke="#66BB6A" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="18" cy="22" rx="6" ry="5" fill="#81C784" />
        <ellipse cx="16" cy="20.5" rx="3" ry="2.5" fill="#A5D6A7" opacity="0.5" />
        <circle cx="15" cy="19" r="0.8" fill="#C8E6C9" opacity="0.5" />
      </svg>
    );
  }
  if (variant === 'steady-water') {
    return (
      <svg width="40" height="42" viewBox="0 0 40 42" fill="none" className="inline-block">
        <path d="M20 40V22" stroke="#43A047" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M14 32c-3-2-5-5-3.5-8" stroke="#66BB6A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M26 30c2.5-2 4-5 3-7.5" stroke="#66BB6A" strokeWidth="1.3" fill="none" strokeLinecap="round" />
        <ellipse cx="20" cy="18" rx="9" ry="8" fill="#4CAF50" />
        <ellipse cx="17" cy="16" rx="5" ry="4" fill="#81C784" opacity="0.5" />
        <ellipse cx="24" cy="19" rx="3.5" ry="3" fill="#388E3C" opacity="0.45" />
        <circle cx="16" cy="14" r="1" fill="#C8E6C9" opacity="0.45" />
        <circle cx="23" cy="15" r="0.8" fill="#A5D6A7" opacity="0.35" />
      </svg>
    );
  }
  // deep-water: vibrant blooming flower
  const flowerColors = ['#E91E63', '#FF5722', '#FF9800', '#AB47BC', '#EF5350'];
  const fc = flowerColors[idx % flowerColors.length];
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" className="inline-block">
      <path d="M22 42V20" stroke="#2E7D32" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M15 34c-4-2-6-6-4.5-10" stroke="#43A047" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M29 30c3.5-2 5-5 4-9" stroke="#43A047" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      {/* Leaves */}
      <ellipse cx="12" cy="26" rx="5" ry="2.5" fill="#43A047" transform="rotate(-30 12 26)" />
      <ellipse cx="32" cy="24" rx="4.5" ry="2.2" fill="#388E3C" transform="rotate(25 32 24)" />
      {/* Flower petals - bright and vibrant */}
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <ellipse
          key={angle}
          cx="22" cy="12"
          rx="4" ry="6"
          fill={fc}
          opacity="0.85"
          transform={`rotate(${angle} 22 15)`}
        />
      ))}
      <circle cx="22" cy="15" r="3.5" fill="#FFEB3B" />
      <circle cx="22" cy="15" r="1.8" fill="#FF9800" opacity="0.7" />
    </svg>
  );
}

export function GardenTreeSVG({ variant }: { variant: 'small-tree' | 'large-tree' }) {
  if (variant === 'small-tree') {
    return (
      <svg width="44" height="50" viewBox="0 0 44 50" fill="none" className="inline-block">
        <ellipse cx="22" cy="48" rx="5" ry="1.3" fill="#000" opacity="0.1" />
        <rect x="20" y="32" width="4" height="14" rx="1.5" fill="#8D6E63" />
        <rect x="21.5" y="32" width="1.5" height="14" rx="0.75" fill="#5D4037" opacity="0.25" />
        <path d="M20 44c-2 1-3 1.5-4 1" stroke="#795548" strokeWidth="1" fill="none" opacity="0.4" />
        <ellipse cx="22" cy="23" rx="13" ry="15" fill="#4CAF50" />
        <ellipse cx="19" cy="19" rx="7" ry="8" fill="#81C784" opacity="0.5" />
        <circle cx="17" cy="17" r="1.3" fill="#C8E6C9" opacity="0.5" />
        <circle cx="25" cy="21" r="1" fill="#A5D6A7" opacity="0.4" />
        <circle cx="20" cy="26" r="0.8" fill="#E8F5E9" opacity="0.3" />
      </svg>
    );
  }
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="inline-block">
      {/* Green aura */}
      <ellipse cx="28" cy="22" rx="22" ry="20" fill="#4CAF50" opacity="0.06" className="animate-breathe" />
      <ellipse cx="28" cy="52" rx="9" ry="1.8" fill="#000" opacity="0.12" />
      <rect x="24" y="36" width="8" height="14" rx="2.5" fill="#6D4C41" />
      <line x1="26" y1="38" x2="26" y2="44" stroke="#4E342E" strokeWidth="0.6" opacity="0.3" />
      <line x1="30" y1="37" x2="30" y2="46" stroke="#4E342E" strokeWidth="0.5" opacity="0.25" />
      <path d="M24 48c-3 1.5-5 2-7 1.5" stroke="#5D4037" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.5" />
      <path d="M32 48c3 1 5 1.5 6.5 1" stroke="#5D4037" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.4" />
      {/* Full canopy */}
      <ellipse cx="28" cy="22" rx="20" ry="19" fill="#388E3C" />
      <ellipse cx="23" cy="18" rx="12" ry="13" fill="#4CAF50" opacity="0.65" />
      <ellipse cx="34" cy="21" rx="10" ry="11" fill="#2E7D32" opacity="0.5" />
      <ellipse cx="20" cy="14" rx="8" ry="9" fill="#66BB6A" opacity="0.35" />
      {/* Bright leaf highlights */}
      <circle cx="17" cy="13" r="1.6" fill="#C8E6C9" opacity="0.5" />
      <circle cx="26" cy="10" r="1.3" fill="#E8F5E9" opacity="0.4" />
      <circle cx="34" cy="16" r="1.2" fill="#C8E6C9" opacity="0.35" />
      <circle cx="20" cy="24" r="1" fill="#A5D6A7" opacity="0.3" />
      <circle cx="36" cy="24" r="1.3" fill="#81C784" opacity="0.3" />
    </svg>
  );
}
