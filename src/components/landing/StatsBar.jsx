import { useCountdown } from '../../hooks/useCountdown'
import { EARLY_BIRD_END } from '../../data/pricing'

export default function StatsBar() {
  const countdown = useCountdown(EARLY_BIRD_END)
  const earlyBirdActive = countdown !== null

  return (
    <div className="stats-bar">
      <div className="stats-bar-inner">
        <div className="stats-bar-item">
          <span className="stats-bar-label">Starts</span>
          <span className="stats-bar-value">May 1, 2026</span>
        </div>
        <div className="stats-bar-divider" />
        <div className="stats-bar-item">
          <span className="stats-bar-label">Duration</span>
          <span className="stats-bar-value">10 Months</span>
        </div>
        <div className="stats-bar-divider" />
        <div className="stats-bar-item">
          <span className="stats-bar-label">Format</span>
          <span className="stats-bar-value">Live Virtual Cohort</span>
        </div>
        <div className="stats-bar-divider" />
        <div className="stats-bar-item">
          <span className="stats-bar-label">Price</span>
          <span className="stats-bar-value">
            {earlyBirdActive ? (
              <>
                <span style={{ textDecoration: 'line-through', opacity: 0.4, marginRight: '0.35rem' }}>$399</span>
                <span style={{ color: '#FFFFFF' }}>$299/Month</span>
              </>
            ) : (
              '$399/Month'
            )}
          </span>
        </div>
      </div>
    </div>
  )
}
