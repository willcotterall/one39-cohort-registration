import { FACULTY } from '../../data/faculty'

export default function Faculty() {
  return (
    <section className="faculty" id="faculty">
      <div className="faculty-inner">
        <p className="section-label">Your Coaches</p>
        <h2 className="section-headline">
          Led by Leaders<br />Who Lead Rooms
        </h2>
        <p className="faculty-intro">
          You'll be paired with one of four coaches — each one a practitioner,
          not just an instructor. They lead worship every week.
        </p>

        <div className="faculty-grid">
          {FACULTY.map((person) => (
            <div key={person.name} className="faculty-card">
              <div className="faculty-headshot">
                <span className="faculty-headshot-label">Headshot Needed</span>
              </div>
              <h3 className="faculty-name">{person.name}</h3>
              <p className="faculty-role">{person.role}</p>
              <p className="faculty-church">{person.church}</p>
              <div className="faculty-bio-placeholder">
                Bio Needed from One39
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
