import Hero from './Hero'
import Vision from './Vision'
import Curriculum from './Curriculum'
import Faculty from './Faculty'
import Faq from './Faq'
import Cta from './Cta'

export default function LandingPage() {
  return (
    <div className="landing">
      <header className="header">
        <div className="header-inner">
          <img
            src="/logo 2.png"
            alt="One39 Creative Circle"
            className="header-logo"
          />
        </div>
      </header>

      <main>
        <Hero />
        <Vision />
        <Curriculum />
        <Faculty />
        <Faq />
        <Cta />
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} One39. All rights reserved.</p>
      </footer>

      <div className="mockup-badge">&#9888; Client Mockup</div>
    </div>
  )
}
