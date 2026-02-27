'use client'

import { useMemo, useState } from 'react'

type Unit = {
  bhk: string
  sqft: number
  price: string
}

type PropertyPayload = {
  id: string
  kind: 'property' | 'farmhouse'
  name: string
  developer: string
  location: string
  city: string
  state: string
  region: string
  type: string
  association?: string
  possession: string
  structure: string
  reraId?: string
  priceVisible: boolean
  units: Unit[]
  images: string[]
  farmhouseDetails?: {
    priceRange?: string
    area?: string
    bedrooms?: string
    bathrooms?: string
    description?: string
    image?: string
    features?: string[]
    highlights?: string[]
    nearbyPlaces?: string[]
  } | null
}

const parseList = (value: string) =>
  value
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)

export default function PropertyEditor({ initial }: { initial: PropertyPayload }) {
  const [form, setForm] = useState<PropertyPayload>(initial)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [message, setMessage] = useState('')

  const unitsText = useMemo(
    () => form.units.map((u) => `${u.bhk}|${u.sqft}|${u.price}`).join('\n'),
    [form.units],
  )

  const imageText = useMemo(() => form.images.join('\n'), [form.images])

  const updateField = (key: keyof PropertyPayload, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const onUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setUploading(true)
    setMessage('')

    const body = new FormData()
    body.append('file', file)

    const response = await fetch('/api/cloudinary/upload', {
      method: 'POST',
      body,
    })

    const payload = await response.json()
    if (!response.ok) {
      setUploading(false)
      setMessage(payload?.error || 'Upload failed')
      return
    }

    setForm((prev) => ({ ...prev, images: [...prev.images, payload.secure_url] }))
    setUploading(false)
    setMessage('Image uploaded successfully')
  }

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setSaving(true)
    setMessage('')

    const response = await fetch(`/api/admin/properties/${form.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    const payload = await response.json()
    if (!response.ok) {
      setSaving(false)
      setMessage(payload?.error || 'Failed to save')
      return
    }

    setForm(payload)
    setSaving(false)
    setMessage('Saved successfully')
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className="border rounded-lg px-3 py-2" value={form.name} onChange={(e) => updateField('name', e.target.value)} placeholder="Name" required />
        <input className="border rounded-lg px-3 py-2" value={form.developer} onChange={(e) => updateField('developer', e.target.value)} placeholder="Developer" />
        <input className="border rounded-lg px-3 py-2" value={form.location} onChange={(e) => updateField('location', e.target.value)} placeholder="Location" required />
        <input className="border rounded-lg px-3 py-2" value={form.city} onChange={(e) => updateField('city', e.target.value)} placeholder="City" required />
        <input className="border rounded-lg px-3 py-2" value={form.state} onChange={(e) => updateField('state', e.target.value)} placeholder="State" required />
        <input className="border rounded-lg px-3 py-2" value={form.region} onChange={(e) => updateField('region', e.target.value)} placeholder="Region" />
        <input className="border rounded-lg px-3 py-2" value={form.type} onChange={(e) => updateField('type', e.target.value)} placeholder="Type" />
        <input className="border rounded-lg px-3 py-2" value={form.association || ''} onChange={(e) => updateField('association', e.target.value)} placeholder="Association" />
        <input className="border rounded-lg px-3 py-2" value={form.possession} onChange={(e) => updateField('possession', e.target.value)} placeholder="Possession" />
        <input className="border rounded-lg px-3 py-2" value={form.structure} onChange={(e) => updateField('structure', e.target.value)} placeholder="Structure" />
        <input className="border rounded-lg px-3 py-2" value={form.reraId || ''} onChange={(e) => updateField('reraId', e.target.value)} placeholder="RERA" />
      </div>

      <label className="inline-flex items-center gap-2">
        <input type="checkbox" checked={form.priceVisible} onChange={(e) => updateField('priceVisible', e.target.checked)} />
        <span>Show price in public pages</span>
      </label>

      <div>
        <p className="font-semibold mb-2">Units (one per line: BHK|SQFT|PRICE)</p>
        <textarea
          className="w-full border rounded-lg px-3 py-2 min-h-32"
          value={unitsText}
          onChange={(e) => {
            const parsed = e.target.value
              .split('\n')
              .map((line) => line.trim())
              .filter(Boolean)
              .map((line) => {
                const [bhk, sqft, price] = line.split('|')
                return { bhk: bhk || '', sqft: Number(sqft || 0), price: price || '' }
              })
            updateField('units', parsed)
          }}
        />
      </div>

      <div>
        <p className="font-semibold mb-2">Images (one URL per line)</p>
        <textarea
          className="w-full border rounded-lg px-3 py-2 min-h-32"
          value={imageText}
          onChange={(e) => updateField('images', parseList(e.target.value))}
        />
        <div className="mt-3 flex items-center gap-3">
          <input type="file" accept="image/*" onChange={onUpload} />
          <span className="text-sm text-slate-600">{uploading ? 'Uploading to Cloudinary...' : 'Upload image'}</span>
        </div>
      </div>

      {form.kind === 'farmhouse' && (
        <div className="space-y-4 border rounded-xl p-4 bg-green-50">
          <h3 className="font-bold text-lg">Farmland Details</h3>
          <textarea
            className="w-full border rounded-lg px-3 py-2 min-h-24"
            placeholder="Description"
            value={form.farmhouseDetails?.description || ''}
            onChange={(e) =>
              updateField('farmhouseDetails', {
                ...(form.farmhouseDetails || {}),
                description: e.target.value,
              })
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input className="border rounded-lg px-3 py-2" placeholder="Price Range" value={form.farmhouseDetails?.priceRange || ''} onChange={(e) => updateField('farmhouseDetails', { ...(form.farmhouseDetails || {}), priceRange: e.target.value })} />
            <input className="border rounded-lg px-3 py-2" placeholder="Area" value={form.farmhouseDetails?.area || ''} onChange={(e) => updateField('farmhouseDetails', { ...(form.farmhouseDetails || {}), area: e.target.value })} />
            <input className="border rounded-lg px-3 py-2" placeholder="Bedrooms" value={form.farmhouseDetails?.bedrooms || ''} onChange={(e) => updateField('farmhouseDetails', { ...(form.farmhouseDetails || {}), bedrooms: e.target.value })} />
            <input className="border rounded-lg px-3 py-2" placeholder="Bathrooms" value={form.farmhouseDetails?.bathrooms || ''} onChange={(e) => updateField('farmhouseDetails', { ...(form.farmhouseDetails || {}), bathrooms: e.target.value })} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <textarea className="border rounded-lg px-3 py-2 min-h-24" placeholder="Features (one per line)" value={(form.farmhouseDetails?.features || []).join('\n')} onChange={(e) => updateField('farmhouseDetails', { ...(form.farmhouseDetails || {}), features: parseList(e.target.value) })} />
            <textarea className="border rounded-lg px-3 py-2 min-h-24" placeholder="Highlights (one per line)" value={(form.farmhouseDetails?.highlights || []).join('\n')} onChange={(e) => updateField('farmhouseDetails', { ...(form.farmhouseDetails || {}), highlights: parseList(e.target.value) })} />
            <textarea className="border rounded-lg px-3 py-2 min-h-24" placeholder="Nearby Places (one per line)" value={(form.farmhouseDetails?.nearbyPlaces || []).join('\n')} onChange={(e) => updateField('farmhouseDetails', { ...(form.farmhouseDetails || {}), nearbyPlaces: parseList(e.target.value) })} />
          </div>
        </div>
      )}

      {message && <p className="text-sm text-blue-700">{message}</p>}
      <button disabled={saving || uploading} className="rounded-lg bg-blue-700 px-5 py-2 text-white font-semibold hover:bg-blue-800 disabled:opacity-70">
        {saving ? 'Saving...' : 'Save Changes'}
      </button>
    </form>
  )
}
