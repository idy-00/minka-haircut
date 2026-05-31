export default function WaveDivider({ flip = false, color = '#0d0d0d', bg = '#080808' }) {
  return (
    <div
      aria-hidden="true"
      style={{
        background: bg,
        lineHeight: 0,
        transform: flip ? 'rotate(180deg)' : 'none',
        marginBottom: flip ? '-1px' : 0,
        marginTop: flip ? 0 : '-1px',
      }}
    >
      <svg
        viewBox="0 0 1440 60"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: '60px' }}
      >
        <path
          fill={color}
          d="M0,30 C180,60 360,0 540,30 C720,60 900,0 1080,30 C1260,60 1440,15 1440,30 L1440,60 L0,60 Z"
        />
      </svg>
    </div>
  )
}
