import { useState } from 'react'
import RegistrationForm from './components/RegistrationForm'
import PricingPage from './components/PricingPage'
import PaymentPage from './components/PaymentPage'

export default function App() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    churchName: '',
    position: '',
    coach: '',
    termsAccepted: false,
  })
  const [selectedPlan, setSelectedPlan] = useState(null)

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {step === 1 && (
          <RegistrationForm
            formData={formData}
            setFormData={setFormData}
            onNext={() => setStep(2)}
          />
        )}
        {step === 2 && (
          <PricingPage
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
            onNext={() => setStep(3)}
            onBack={() => setStep(1)}
          />
        )}
        {step === 3 && (
          <PaymentPage
            formData={formData}
            selectedPlan={selectedPlan}
            onBack={() => setStep(2)}
          />
        )}
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <img src="/logo.png" alt="One39 Creative Circle" className="header-logo" />
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} One39. All rights reserved.</p>
    </footer>
  )
}
