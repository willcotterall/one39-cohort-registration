export default function CoachCard({ name, selected, onSelect }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')

  return (
    <button
      type="button"
      className={`coach-card${selected ? ' coach-card--selected' : ''}`}
      onClick={onSelect}
      aria-pressed={selected}
    >
      <div className="coach-avatar">
        <span className="coach-initials">{initials}</span>
      </div>
      <span className="coach-name">{name}</span>
      <div className="coach-check">
        {selected && (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="9" fill="var(--gold)" />
            <path
              d="M5.5 9.5L7.5 11.5L12.5 6.5"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </button>
  )
}
