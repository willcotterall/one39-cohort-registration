import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/landing/LandingPage'
import RegisterFlow from './components/RegisterFlow'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<RegisterFlow />} />
    </Routes>
  )
}
