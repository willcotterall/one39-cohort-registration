import { useState } from 'react'
import { Link } from 'react-router-dom'
import RegistrationForm from './RegistrationForm'
import PricingPage from './PricingPage'
import PaymentPage from './PaymentPage'

export default function RegisterFlow() {
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
    noRecordingAccepted: false,
  })
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [mondayItemId, setMondayItemId] = useState(null)

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <header className="header header--solid">
        <div className="header-inner">
          <Link to="/" className="header-logo-link">
            <img src="/creativecirclelogo.png" alt="CreativeCircle" className="header-logo" />
          </Link>
        </div>
      </header>
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {step === 1 && (
          <RegistrationForm
            formData={formData}
            setFormData={setFormData}
            setMondayItemId={setMondayItemId}
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
            mondayItemId={mondayItemId}
            onBack={() => setStep(2)}
          />
        )}
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} One39. All rights reserved.</p>
      </footer>
    </div>
  )
}
