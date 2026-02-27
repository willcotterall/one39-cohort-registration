import { useState } from 'react'
import { FACULTY } from '../../data/faculty'

export default function Faculty() {
  const [activeBio, setActiveBio] = useState(null)

  return (
    <section className="faculty" id="faculty">
      <div className="faculty-inner">
        <p className="section-label">Your Coaches</p>
        <h2 className="section-headline">
          Led by Leaders<br />Who Lead Rooms
        </h2>
        <p className="faculty-intro">
          You'll be paired with one of five coaches — each one a practitioner,
          not just an instructor. They lead worship every week.
        </p>

        <div className="faculty-grid">
          {FACULTY.map((person) => (
            <div key={person.name} className="faculty-card">
              <div className="faculty-headshot">
                {person.headshot ? (
                  <img
                    src={person.headshot}
                    alt={person.name}
                    className="faculty-headshot-img"
                  />
                ) : (
                  <span className="faculty-headshot-placeholder">Coming Soon</span>
                )}
              </div>
              <h3 className="faculty-name">{person.name}</h3>
              {person.title && <p className="faculty-title">{person.title}</p>}
              {person.summary && <p className="faculty-summary">{person.summary}</p>}
              {person.bio && (
                <button
                  type="button"
                  className="faculty-read-more"
                  onClick={() => setActiveBio(person)}
                >
                  Read Full Bio
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {activeBio && (
        <div className="bio-modal-overlay" onClick={() => setActiveBio(null)}>
          <div className="bio-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="bio-modal-close"
              onClick={() => setActiveBio(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="bio-modal-header">
              <img
                src={activeBio.headshot}
                alt={activeBio.name}
                className="bio-modal-headshot"
              />
              <div>
                <h3 className="bio-modal-name">{activeBio.name}</h3>
                <p className="bio-modal-title">{activeBio.title}</p>
              </div>
            </div>
            <div className="bio-modal-body">
              {activeBio.bio.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
