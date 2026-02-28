'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { X, GripVertical, Plus, ImageIcon } from 'lucide-react'

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

export default function PropertyEditor({
  initial,
  availableTypes,
  isNew = false,
}: {
  initial: PropertyPayload
  availableTypes: string[]
  isNew?: boolean
}) {
  const router = useRouter()
  const [form, setForm] = useState<PropertyPayload>(initial)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [message, setMessage] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [isCustomType, setIsCustomType] = useState(
    Boolean(form.type) && !availableTypes.includes(form.type),
  )

  const unitsText = useMemo(
    () => form.units.map((u) => `${u.bhk}|${u.sqft}|${u.price}`).join('\n'),
    [form.units],
  )

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

    const endpoint = isNew ? '/api/admin/properties' : `/api/admin/properties/${form.id}`
    const method = isNew ? 'POST' : 'PUT'

    const response = await fetch(endpoint, {
      method,
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
    setMessage(isNew ? 'Created successfully' : 'Saved successfully')

    if (isNew && payload?.id) {
      router.replace(`/Admin/dashboard/${payload.id}`)
      router.refresh()
    }
  }

  const onDelete = async () => {
    if (!form.id) return

    const confirmed = window.confirm(
      'Delete this property? This will also delete linked Cloudinary images and cannot be undone.',
    )
    if (!confirmed) return

    setDeleting(true)
    setMessage('')

    const response = await fetch(`/api/admin/properties/${form.id}`, {
      method: 'DELETE',
    })

    const payload = await response.json()
    if (!response.ok) {
      setDeleting(false)
      setMessage(payload?.error || 'Failed to delete property')
      return
    }

    router.push('/Admin/dashboard')
    router.refresh()
  }

  const inputClass = "border border-slate-300 rounded-lg px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400"
  const textareaClass = "w-full border border-slate-300 rounded-lg px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400"

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
        <h3 className="text-sm font-bold uppercase tracking-wide text-slate-600 mb-3">Basic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select
          className={inputClass}
          value={form.kind}
          onChange={(e) => updateField('kind', e.target.value as 'property' | 'farmhouse')}
        >
          <option value="property">Residential Property</option>
          <option value="farmhouse">Farmhouse</option>
        </select>
        <input className={inputClass} value={form.name} onChange={(e) => updateField('name', e.target.value)} placeholder="Name" required />
        <input className={inputClass} value={form.developer} onChange={(e) => updateField('developer', e.target.value)} placeholder="Developer" />
        <input className={inputClass} value={form.location} onChange={(e) => updateField('location', e.target.value)} placeholder="Location" required />
        <input className={inputClass} value={form.city} onChange={(e) => updateField('city', e.target.value)} placeholder="City" required />
        <input className={inputClass} value={form.state} onChange={(e) => updateField('state', e.target.value)} placeholder="State" required />
        <input className={inputClass} value={form.region} onChange={(e) => updateField('region', e.target.value)} placeholder="Region" />
        <select
          className={inputClass}
          value={isCustomType ? '__new__' : form.type}
          onChange={(e) => {
            const next = e.target.value
            if (next === '__new__') {
              setIsCustomType(true)
              updateField('type', '')
            } else {
              setIsCustomType(false)
              updateField('type', next)
            }
          }}
        >
          <option value="">Select type</option>
          {availableTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
          <option value="__new__">+ Create New Type</option>
        </select>
        {isCustomType && (
          <input
            className={inputClass}
            value={form.type}
            onChange={(e) => updateField('type', e.target.value)}
            placeholder="Enter new type"
          />
        )}
        <input className={inputClass} value={form.association || ''} onChange={(e) => updateField('association', e.target.value)} placeholder="Association" />
        <input className={inputClass} value={form.possession} onChange={(e) => updateField('possession', e.target.value)} placeholder="Possession" />
        <input className={inputClass} value={form.structure} onChange={(e) => updateField('structure', e.target.value)} placeholder="Structure" />
        <input className={inputClass} value={form.reraId || ''} onChange={(e) => updateField('reraId', e.target.value)} placeholder="RERA" />
        </div>
      </div>

      <label className="inline-flex items-center gap-2 text-slate-900">
        <input type="checkbox" checked={form.priceVisible} onChange={(e) => updateField('priceVisible', e.target.checked)} />
        <span>Show price in public pages</span>
      </label>

      <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
        <h3 className="text-sm font-bold uppercase tracking-wide text-slate-600 mb-3">Units</h3>
        <p className="font-semibold mb-2 text-slate-900">Units (one per line: BHK|SQFT|PRICE)</p>
        <textarea
          className={`${textareaClass} min-h-32`}
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

      <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
        <h3 className="text-sm font-bold uppercase tracking-wide text-slate-600 mb-3">Media</h3>
        <p className="font-semibold mb-2 text-slate-900">Images</p>
        
        {/* Image Gallery Preview */}
        {form.images.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-4">
            {form.images.map((url, index) => (
              <div key={index} className="relative group aspect-square rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                {url.includes('cloudinary') || url.includes('res.cloudinary') ? (
                  <Image
                    src={url}
                    alt={`Image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  />
                ) : url.startsWith('http') ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={url}
                    alt={`Image ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center">
                    <ImageIcon className="w-8 h-8 text-slate-400 mb-1" />
                    <span className="text-xs text-slate-500 truncate w-full">{url}</span>
                  </div>
                )}
                
                {/* Overlay with actions */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      const newImages = [...form.images]
                      if (index > 0) {
                        [newImages[index], newImages[index - 1]] = [newImages[index - 1], newImages[index]]
                        updateField('images', newImages)
                      }
                    }}
                    disabled={index === 0}
                    className="p-1.5 bg-white/90 rounded-lg text-slate-700 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                    title="Move left"
                  >
                    <GripVertical className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const newImages = form.images.filter((_, i) => i !== index)
                      updateField('images', newImages)
                    }}
                    className="p-1.5 bg-red-500 rounded-lg text-white hover:bg-red-600"
                    title="Remove image"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                
                {/* Index badge */}
                <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded-full">
                  {index + 1}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Upload and URL input */}
        <div className="flex flex-col sm:flex-row gap-3">
          <label className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-slate-300 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <Plus className="w-5 h-5 text-slate-500" />
            <span className="text-sm text-slate-600">{uploading ? 'Uploading...' : 'Upload Image'}</span>
            <input type="file" accept="image/*" onChange={onUpload} className="hidden" disabled={uploading} />
          </label>
          
          <button
            type="button"
            onClick={() => {
              const url = prompt('Enter image URL:')
              if (url && url.trim()) {
                updateField('images', [...form.images, url.trim()])
              }
            }}
            className="flex items-center justify-center gap-2 px-4 py-3 border border-slate-300 rounded-xl hover:bg-slate-50 transition-colors"
          >
            <ImageIcon className="w-5 h-5 text-slate-500" />
            <span className="text-sm text-slate-600">Add URL</span>
          </button>
        </div>

        {form.images.length > 0 && (
          <p className="mt-2 text-xs text-slate-500">
            {form.images.length} image{form.images.length !== 1 ? 's' : ''} • Hover to reorder or remove
          </p>
        )}
      </div>

      {form.kind === 'farmhouse' && (
        <div className="space-y-4 border rounded-2xl p-4 bg-green-50 border-green-200">
          <h3 className="font-bold text-lg text-slate-900">Farmland Details</h3>
          <textarea
            className={`${textareaClass} min-h-24`}
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
            <input className={inputClass} placeholder="Price Range" value={form.farmhouseDetails?.priceRange || ''} onChange={(e) => updateField('farmhouseDetails', { ...(form.farmhouseDetails || {}), priceRange: e.target.value })} />
            <input className={inputClass} placeholder="Area" value={form.farmhouseDetails?.area || ''} onChange={(e) => updateField('farmhouseDetails', { ...(form.farmhouseDetails || {}), area: e.target.value })} />
            <input className={inputClass} placeholder="Bedrooms" value={form.farmhouseDetails?.bedrooms || ''} onChange={(e) => updateField('farmhouseDetails', { ...(form.farmhouseDetails || {}), bedrooms: e.target.value })} />
            <input className={inputClass} placeholder="Bathrooms" value={form.farmhouseDetails?.bathrooms || ''} onChange={(e) => updateField('farmhouseDetails', { ...(form.farmhouseDetails || {}), bathrooms: e.target.value })} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <textarea className={`${textareaClass} min-h-24`} placeholder="Features (one per line)" value={(form.farmhouseDetails?.features || []).join('\n')} onChange={(e) => updateField('farmhouseDetails', { ...(form.farmhouseDetails || {}), features: parseList(e.target.value) })} />
            <textarea className={`${textareaClass} min-h-24`} placeholder="Highlights (one per line)" value={(form.farmhouseDetails?.highlights || []).join('\n')} onChange={(e) => updateField('farmhouseDetails', { ...(form.farmhouseDetails || {}), highlights: parseList(e.target.value) })} />
            <textarea className={`${textareaClass} min-h-24`} placeholder="Nearby Places (one per line)" value={(form.farmhouseDetails?.nearbyPlaces || []).join('\n')} onChange={(e) => updateField('farmhouseDetails', { ...(form.farmhouseDetails || {}), nearbyPlaces: parseList(e.target.value) })} />
          </div>
        </div>
      )}

      {message && <p className="text-sm text-blue-700">{message}</p>}
      <div className="flex flex-wrap items-center gap-3">
        <button disabled={saving || uploading || deleting} className="rounded-lg bg-blue-700 px-5 py-2 text-white font-semibold hover:bg-blue-800 disabled:opacity-70">
          {saving ? 'Saving...' : isNew ? 'Create Property' : 'Save Changes'}
        </button>
        {!isNew && (
          <button
            type="button"
            onClick={onDelete}
            disabled={saving || uploading || deleting}
            className="rounded-lg bg-red-600 px-5 py-2 text-white font-semibold hover:bg-red-700 disabled:opacity-70"
          >
            {deleting ? 'Deleting...' : 'Delete Property'}
          </button>
        )}
      </div>
    </form>
  )
}
