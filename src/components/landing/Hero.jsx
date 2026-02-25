import { Link } from 'react-router-dom'
import { useCountdown } from '../../hooks/useCountdown'
import { EARLY_BIRD_END } from '../../data/pricing'

export default function Hero() {
  const countdown = useCountdown(EARLY_BIRD_END)
  const earlyBirdActive = countdown !== null

  return (
    <section className="hero">
      <div className="hero-inner">
        <p className="hero-label">One39 Presents</p>
        <h1 className="hero-headline">Creative<br />Circle</h1>

        <div className="hero-tagline-placeholder">
          Tagline Needed
        </div>

        <p className="hero-sub">
          A 10-month coaching cohort for worship leaders who are done guessing
          and ready to build systems that move rooms.
        </p>

        {earlyBirdActive && (
          <div className="hero-countdown">
            <span className="hero-countdown-label">
              Early bird closes in
            </span>
            <span className="hero-countdown-time">
              {countdown.d}d {String(countdown.h).padStart(2, '0')}h{' '}
              {String(countdown.m).padStart(2, '0')}m{' '}
              {String(countdown.s).padStart(2, '0')}s
            </span>
          </div>
        )}

        <div className="hero-actions">
          <Link to="/register" className="btn-primary hero-cta">
            Register Now
          </Link>
          <a href="#vision" className="hero-learn-more">
            Learn More
          </a>
        </div>

        <div className="hero-details">
          <div className="hero-detail">
            <span className="hero-detail-label">Starts</span>
            <span className="hero-detail-value">April 1, 2026</span>
          </div>
          <div className="hero-detail-divider" />
          <div className="hero-detail">
            <span className="hero-detail-label">Duration</span>
            <span className="hero-detail-value">10 Months</span>
          </div>
          <div className="hero-detail-divider" />
          <div className="hero-detail">
            <span className="hero-detail-label">Format</span>
            <span className="hero-detail-value">Virtual Cohort</span>
          </div>
        </div>
      </div>
    </section>
  )
}
