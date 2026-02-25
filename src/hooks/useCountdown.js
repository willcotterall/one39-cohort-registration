import { useState, useEffect } from 'react'

export function useCountdown(endDate) {
  function calc(end) {
    const diff = end.getTime() - Date.now()
    if (diff <= 0) return null
    const d = Math.floor(diff / 86400000)
    const h = Math.floor((diff % 86400000) / 3600000)
    const m = Math.floor((diff % 3600000) / 60000)
    const s = Math.floor((diff % 60000) / 1000)
    return { d, h, m, s, total: diff }
  }

  const [remaining, setRemaining] = useState(() => calc(endDate))

  useEffect(() => {
    const id = setInterval(() => setRemaining(calc(endDate)), 1000)
    return () => clearInterval(id)
  }, [endDate])

  return remaining
}
