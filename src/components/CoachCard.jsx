export default function CoachCard({ name, selected, onSelect }) {
  return (
    <button
      type="button"
      className={`coach-card${selected ? ' coach-card--selected' : ''}`}
      onClick={onSelect}
      aria-pressed={selected}
    >
      <div className="coach-headshot">
        <span className="coach-headshot-label">Headshot Needed</span>
      </div>
      <div className="coach-info">
        <span className="coach-name">{name}</span>
      </div>
      <div className="coach-check">
        {selected && (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect width="20" height="20" fill="var(--gold)" />
            <path
              d="M6 10.5L8.5 13L14 7.5"
              stroke="var(--black)"
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
