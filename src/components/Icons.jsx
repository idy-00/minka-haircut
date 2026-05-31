export function Scissors({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="22" r="4.5" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="8" cy="10" r="4.5" stroke="currentColor" strokeWidth="1.4"/>
      <line x1="12" y1="20.5" x2="26" y2="8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="12" y1="11.5" x2="26" y2="24" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="8" cy="22" r="1.5" fill="currentColor"/>
      <circle cx="8" cy="10" r="1.5" fill="currentColor"/>
    </svg>
  )
}

export function Clipper({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="4" width="16" height="20" rx="5" stroke="currentColor" strokeWidth="1.4"/>
      <rect x="6" y="22" width="20" height="4" rx="2" stroke="currentColor" strokeWidth="1.2"/>
      {[0,1,2,3,4,5,6].map(i => (
        <rect key={i} x={7.5 + i * 2.6} y={26} width="1.6" height="3" rx=".7" fill="currentColor"/>
      ))}
      <rect x="13" y="8" width="6" height="2" rx="1" fill="currentColor" opacity=".4"/>
      <circle cx="16" cy="14" r="1.2" fill="currentColor" opacity=".4"/>
    </svg>
  )
}

export function Razor({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="11" y="2" width="10" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
      <rect x="9" y="8" width="14" height="16" rx="3" stroke="currentColor" strokeWidth="1.4"/>
      <line x1="16" y1="24" x2="16" y2="30" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="12" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="1" opacity=".4"/>
      <line x1="12" y1="15" x2="20" y2="15" stroke="currentColor" strokeWidth="1" opacity=".4"/>
    </svg>
  )
}

export function Drop({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 4 C16 4, 8 14, 8 20 a8 8 0 0 0 16 0 C24 14 16 4 16 4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M12 22 C12 22, 13 25, 16 25" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity=".5"/>
    </svg>
  )
}

export function Palette({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 4 C9.4 4 4 9.4 4 16 C4 22.6 9.4 28 16 28 C17.7 28 18 26.5 18 25.5 C18 25 18 24.5 18 24 C18 22.9 18.9 22 20 22 L22 22 C25.3 22 28 19.3 28 16 C28 9.4 22.6 4 16 4Z" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="10" cy="13" r="1.5" fill="currentColor"/>
      <circle cx="16" cy="9" r="1.5" fill="currentColor"/>
      <circle cx="22" cy="13" r="1.5" fill="currentColor"/>
      <circle cx="20" cy="19" r="1.5" fill="currentColor"/>
    </svg>
  )
}

export function Locks({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 4 C10 4 9 10 10 16 C11 22 10 28 10 28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M16 2 C16 2 14 9 15 16 C16 23 15 28 15 28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M22 4 C22 4 21 10 22 16 C23 22 22 28 22 28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M8 8 C10 9 14 8 16 9 C18 10 22 9 24 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity=".4"/>
      <path d="M9 16 C11 17 14 16 16 17 C18 18 21 17 23 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity=".4"/>
    </svg>
  )
}

export function Child({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="8" r="4" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M10 28 L10 18 C10 15.8 12.7 14 16 14 C19.3 14 22 15.8 22 18 L22 28" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="10" y1="22" x2="7" y2="28" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="22" y1="22" x2="25" y2="28" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  )
}

export function Home({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 14 L16 4 L28 14 L28 28 L4 28 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <rect x="12" y="20" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M10 14 L16 9 L22 14" stroke="currentColor" strokeWidth="1" opacity=".4"/>
    </svg>
  )
}

export function BarberPole({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="0" width="8" height="80" rx="4" fill="#141414" stroke="#222" strokeWidth="1"/>
      <path d="M8 0 L16 12 L16 24 L8 12 Z" fill="#C41E1E" opacity=".8"/>
      <path d="M8 24 L16 36 L16 48 L8 36 Z" fill="#C41E1E" opacity=".8"/>
      <path d="M8 48 L16 60 L16 72 L8 60 Z" fill="#C41E1E" opacity=".8"/>
      <path d="M8 12 L16 24 L16 36 L8 24 Z" fill="#1560BB" opacity=".7"/>
      <path d="M8 36 L16 48 L16 60 L8 48 Z" fill="#1560BB" opacity=".7"/>
      <rect x="6" y="0" width="12" height="5" rx="2" fill="#222" stroke="#333" strokeWidth=".8"/>
      <rect x="6" y="75" width="12" height="5" rx="2" fill="#222" stroke="#333" strokeWidth=".8"/>
    </svg>
  )
}
