'use client'

import { useEffect, useState } from 'react'
import LeadPopup from '@/components/UX/LeadPopup'

type Props = {
  propertyName: string
  storageKey: string
}

export default function VisitLeadPopup({ propertyName, storageKey }: Props) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const key = `lead-popup:${storageKey}`
    const alreadyShown = sessionStorage.getItem(key)
    if (alreadyShown) return

    const timer = window.setTimeout(() => {
      setOpen(true)
      sessionStorage.setItem(key, '1')
    }, 1200)

    return () => window.clearTimeout(timer)
  }, [storageKey])

  return <LeadPopup open={open} onClose={() => setOpen(false)} propertyName={propertyName} />
}
