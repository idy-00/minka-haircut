export default function ClipperSVG({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Corps principal */}
      <rect x="30" y="40" width="100" height="240" rx="28" fill="#141414" stroke="#282828" strokeWidth="1.5"/>

      {/* Grip texture — lignes horizontales */}
      {[120,133,146,159,172,185].map((y, i) => (
        <line key={i} x1="42" y1={y} x2="118" y2={y} stroke="#222" strokeWidth="1"/>
      ))}

      {/* Bouton power */}
      <rect x="65" y="68" width="30" height="8" rx="4" fill="#1e1e1e" stroke="#2d2d2d" strokeWidth="1"/>
      <rect x="74" y="70" width="12" height="4" rx="2" fill="#CC1F1F"/>

      {/* LED indicateur */}
      <circle cx="80" cy="96" r="4" fill="#1a1a1a" stroke="#252525" strokeWidth="1"/>
      <circle cx="80" cy="96" r="2" fill="#2a4a2a"/>

      {/* Tête de la tondeuse */}
      <rect x="24" y="265" width="112" height="32" rx="6" fill="#111" stroke="#282828" strokeWidth="1.5"/>

      {/* Lame fixe */}
      <rect x="18" y="297" width="124" height="12" rx="3" fill="#1c1c1c" stroke="#333" strokeWidth="1"/>

      {/* Dents de la lame — fixes */}
      {Array.from({ length: 18 }).map((_, i) => (
        <rect
          key={i}
          x={22 + i * 6.8}
          y={309}
          width="4"
          height="14"
          rx="1.5"
          fill="#252525"
          stroke="#333"
          strokeWidth=".5"
        />
      ))}

      {/* Dents de la lame — mobiles (légèrement décalées) */}
      {Array.from({ length: 17 }).map((_, i) => (
        <rect
          key={i}
          x={25.4 + i * 6.8}
          y={310}
          width="3.5"
          height="12"
          rx="1"
          fill="#303030"
          stroke="#3a3a3a"
          strokeWidth=".5"
        />
      ))}

      {/* Câble */}
      <path
        d="M80 40 C80 28, 80 20, 80 8"
        stroke="#1e1e1e"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M80 40 C80 28, 80 20, 80 8"
        stroke="#282828"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Reflet latéral gauche */}
      <rect x="30" y="60" width="4" height="180" rx="2" fill="#1e1e1e" opacity=".6"/>

      {/* Vis de réglage */}
      <circle cx="80" cy="248" r="7" fill="#141414" stroke="#252525" strokeWidth="1"/>
      <line x1="80" y1="241" x2="80" y2="255" stroke="#2a2a2a" strokeWidth="1.5"/>
      <line x1="73" y1="248" x2="87" y2="248" stroke="#2a2a2a" strokeWidth="1.5"/>
    </svg>
  )
}
