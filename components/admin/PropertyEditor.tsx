'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { X, GripVertical, Plus, ImageIcon, Rows3, MapPin } from 'lucide-react'
import { set } from 'mongoose'

type Unit = {
  bhk: string
  sqft: number
  price: string
}


type LandDetails = {
  isFarmland?: boolean
  priceRange?: string
  totalArea?: string
  pricePerUnit?: string
  dimensions?: string
  facing?: string
  roadWidth?: string
  boundaryWall?: string
  soilType?: string
  waterSource?: string
  electricity?: string
  approvals?: string
  surveyNumber?: string
  description?: string
  image?: string
  features?: string[]
  highlights?: string[]
  nearbyPlaces?: string[]
}

type PropertyPayload = {
  id: string
  kind: 'property' | 'farmhouse' | 'land'
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
  landDetails?: LandDetails | null
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

  const unitsText = useMemo(
    () => form.units.map((u) => `${u.bhk}|${u.sqft}|${u.price}`).join('\n'),
    [form.units],
  )
  const unitsCount = form.units.length

  const categorySuggestions = useMemo(() => {
    const normalized = availableTypes
      .map((value) => value.trim())
      .filter(Boolean)

    return Array.from(new Map(normalized.map((value) => [value.toLowerCase(), value])).values()).sort(
      (a, b) => a.localeCompare(b),
    )
  }, [availableTypes])

  const quickTypeOptions = ['Residential', 'Commercial', 'Farmhouse', 'Land']

  const updateField = (key: keyof PropertyPayload, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const selectQuickType = (nextType: string) => {
    const normalized = nextType.trim().toLowerCase()
    const kind: PropertyPayload['kind'] =
      normalized === 'farmhouse'
        ? 'farmhouse'
        : normalized === 'land' || normalized === 'farmland'
          ? 'land'
          : 'property'
    setForm((prev) => ({
      ...prev,
      kind,
      type: nextType,
    }))
  }

  const updateLandField = (key: keyof LandDetails, value: any) => {
    setForm((prev) => ({
      ...prev,
      landDetails: { ...(prev.landDetails || {}), [key]: value },
    }))
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

    const cleanedForm: PropertyPayload = {
      ...form,
      // Land/plots are sold as a whole parcel — no per-unit (BHK/SQFT) configurations.
      units: form.kind === 'land' ? [] : form.units,
      name: form.name.trim(),
      developer: form.developer.trim(),
      location: form.location.trim(),
      city: form.city.trim(),
      state: form.state.trim(),
      region: form.region.trim(),
      type: form.type.trim(),
      association: (form.association || '').trim(),
      possession: form.possession.trim(),
      structure: form.structure.trim(),
      reraId: (form.reraId || '').trim(),
    }

    const endpoint = isNew ? '/api/admin/properties' : `/api/admin/properties/${form.id}`
    const method = isNew ? 'POST' : 'PUT'

    const response = await fetch(endpoint, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cleanedForm),
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
    setTimeout(() => { 
    router.push('/Admin/dashboard')
    router.refresh()
    
  }, 1000)
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

  const inputClass = "border border-emerald-200 rounded-lg px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none"
  const textareaClass = "w-full border border-emerald-200 rounded-lg px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none"
  const labelClass = 'text-sm font-semibold text-emerald-800'
  const helperClass = 'text-xs text-emerald-600'

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      {/* Property Type Quick Selector */}
      <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-green-50 p-5 md:p-6 shadow-sm">
        <div className="mb-4">
          <h3 className="text-base font-bold text-emerald-900 mb-1">Property Type</h3>
          <p className={helperClass}>Select one quickly, or use the category field below for custom types.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {quickTypeOptions.map((option) => {
            const active = form.type.trim().toLowerCase() === option.toLowerCase()
            return (
              <button
                key={option}
                type="button"
                onClick={() => selectQuickType(option)}
                className={`rounded-xl border-2 px-5 py-2.5 text-sm font-semibold transition-all ${
                  active
                    ? 'border-emerald-600 bg-emerald-600 text-white shadow-md scale-105'
                    : 'border-emerald-200 bg-white text-emerald-700 hover:border-emerald-400 hover:bg-emerald-50'
                }`}
              >
                {option}
              </button>
            )
          })}
        </div>
      </div>

      {/* Basic Information */}
      <div className="rounded-2xl border border-emerald-100 bg-white p-5 md:p-6 shadow-sm">
        <h3 className="text-base font-bold text-emerald-900 mb-5 pb-3 border-b border-emerald-100">Basic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
          <div className="flex flex-col gap-1.5">
            <span className={labelClass}>Listing Group</span>
            <select
              className={`${inputClass} w-full`}
              value={form.kind}
              onChange={(e) => updateField('kind', e.target.value as PropertyPayload['kind'])}
            >
              <option value="property">Property (Residential / Commercial)</option>
              <option value="farmhouse">Farmhouse</option>
              <option value="land">Land / Farmland (Plots &amp; Acreage)</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className={labelClass}>Project Name <span className="text-red-500">*</span></span>
            <input
              className={`${inputClass} w-full`}
              value={form.name}
              onChange={(e) => updateField('name', e.target.value)}
              placeholder="Godrej Horizon Wadala"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <span className={labelClass}>Developer</span>
            <input
              className={`${inputClass} w-full`}
              value={form.developer}
              onChange={(e) => updateField('developer', e.target.value)}
              placeholder="Godrej Properties"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <span className={labelClass}>Location <span className="text-red-500">*</span></span>
            <input
              className={`${inputClass} w-full`}
              value={form.location}
              onChange={(e) => updateField('location', e.target.value)}
              placeholder="Sector 140A, Noida"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <span className={labelClass}>City <span className="text-red-500">*</span></span>
            <input
              className={`${inputClass} w-full`}
              value={form.city}
              onChange={(e) => updateField('city', e.target.value)}
              placeholder="Mumbai"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <span className={labelClass}>State <span className="text-red-500">*</span></span>
            <input
              className={`${inputClass} w-full`}
              value={form.state}
              onChange={(e) => updateField('state', e.target.value)}
              placeholder="Maharashtra"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <span className={labelClass}>Region</span>
            <input
              className={`${inputClass} w-full`}
              value={form.region}
              onChange={(e) => updateField('region', e.target.value)}
              placeholder="Western Suburbs"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <span className={labelClass}>Category / Type</span>
            <input
              className={`${inputClass} w-full`}
              list="property-type-options"
              value={form.type}
              onChange={(e) => updateField('type', e.target.value)}
              placeholder="Commercial, Residential, Plot, Villa"
            />
            <datalist id="property-type-options">
              {categorySuggestions.map((type) => (
                <option key={type} value={type} />
              ))}
            </datalist>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className={labelClass}>Association</span>
            <input
              className={`${inputClass} w-full`}
              value={form.association || ''}
              onChange={(e) => updateField('association', e.target.value)}
              placeholder="RERA Approved"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <span className={labelClass}>Possession</span>
            <input
              className={`${inputClass} w-full`}
              value={form.possession}
              onChange={(e) => updateField('possession', e.target.value)}
              placeholder="Dec 2028"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <span className={labelClass}>Structure</span>
            <input
              className={`${inputClass} w-full`}
              value={form.structure}
              onChange={(e) => updateField('structure', e.target.value)}
              placeholder="G+35 Floors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <span className={labelClass}>RERA ID</span>
            <input
              className={`${inputClass} w-full`}
              value={form.reraId || ''}
              onChange={(e) => updateField('reraId', e.target.value)}
              placeholder="P51800012345"
            />
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
        <h3 className="text-base font-bold text-emerald-900 mb-4 pb-3 border-b border-emerald-100">Settings</h3>
        <label className="inline-flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={form.priceVisible}
            onChange={(e) => updateField('priceVisible', e.target.checked)}
            className="w-5 h-5 rounded border-emerald-300 text-emerald-600 focus:ring-emerald-500"
          />
          <span className="text-emerald-800 font-medium">Show price in public pages</span>
        </label>
      </div>

      {/* Units Section — not applicable to land/plots */}
      {form.kind !== 'land' && (
      <div className="rounded-2xl border border-emerald-100 bg-white p-5 md:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5 pb-3 border-b border-emerald-100">
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700">
              <Rows3 className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-base font-bold text-emerald-900">Units</h3>
              <p className="text-xs text-emerald-600">Add one configuration per line</p>
            </div>
          </div>
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
            {unitsCount} {unitsCount === 1 ? 'Unit' : 'Units'}
          </span>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-3 mb-3">
          <p className="font-semibold text-slate-900 mb-2">Format: BHK|SQFT|PRICE</p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1">2 BHK|1200|1.25 Cr</span>
            <span className="rounded-full bg-violet-50 text-violet-700 border border-violet-200 px-2.5 py-1">3 BHK|1650|1.85 Cr</span>
            <span className="rounded-full bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-1">Studio|450|48 L</span>
          </div>
        </div>

        <textarea
          className={`${textareaClass} min-h-40 font-mono text-sm leading-6 border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none`}
          value={unitsText}
          placeholder={'2 BHK|1200|1.25 Cr\n3 BHK|1650|1.85 Cr'}
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

        <p className="mt-2 text-xs text-slate-500">
          Tip: Use the exact `|` separator between BHK, SQFT and PRICE.
        </p>
      </div>
      )}

      {/* Media Section */}
      <div className="rounded-2xl border border-emerald-100 bg-white p-5 md:p-6 shadow-sm">
        <h3 className="text-base font-bold text-emerald-900 mb-5 pb-3 border-b border-emerald-100">Media</h3>
        <p className="font-semibold mb-3 text-emerald-800">Project Images</p>
        
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
          <label className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-emerald-300 rounded-xl cursor-pointer hover:border-emerald-500 hover:bg-emerald-50 transition-colors">
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
        <div className="space-y-5 border rounded-2xl p-5 md:p-6 bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h3 className="font-bold text-lg text-slate-900">Farmland Details</h3>
            <span className="inline-flex items-center rounded-full border border-emerald-300 bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
              Full Details Section
            </span>
          </div>

          <div className="w-full rounded-xl border border-emerald-200 bg-white p-4 space-y-3">
            <div>
              <p className="text-sm font-semibold text-slate-800 mb-1">Description / Paragraph</p>
              <p className="text-xs text-slate-500">Write a full paragraph about the project, amenities, surroundings, and value proposition.</p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() =>
                  updateField('farmhouseDetails', {
                    ...(form.farmhouseDetails || {}),
                    description: (form.farmhouseDetails?.description || '')
                      ? `${form.farmhouseDetails?.description}\nLuxury-focused living with premium open spaces and serene privacy.`
                      : 'Luxury-focused living with premium open spaces and serene privacy.',
                  })
                }
                className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-100"
              >
                + Luxury line
              </button>
              <button
                type="button"
                onClick={() =>
                  updateField('farmhouseDetails', {
                    ...(form.farmhouseDetails || {}),
                    description: (form.farmhouseDetails?.description || '')
                      ? `${form.farmhouseDetails?.description}\nDesigned with key amenities, landscaped greens, and comfort-first planning.`
                      : 'Designed with key amenities, landscaped greens, and comfort-first planning.',
                  })
                }
                className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-100"
              >
                + Amenities line
              </button>
              <button
                type="button"
                onClick={() =>
                  updateField('farmhouseDetails', {
                    ...(form.farmhouseDetails || {}),
                    description: (form.farmhouseDetails?.description || '')
                      ? `${form.farmhouseDetails?.description}\nStrong connectivity to key roads, business hubs, and social infrastructure.`
                      : 'Strong connectivity to key roads, business hubs, and social infrastructure.',
                  })
                }
                className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-100"
              >
                + Connectivity line
              </button>
              <button
                type="button"
                onClick={() =>
                  updateField('farmhouseDetails', {
                    ...(form.farmhouseDetails || {}),
                    description: '',
                  })
                }
                className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-medium text-rose-700 hover:bg-rose-100"
              >
                Clear paragraph
              </button>
            </div>

            <textarea
              className={`${textareaClass} w-full min-h-52 text-sm leading-6 border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none`}
              placeholder="Write detailed project description here..."
              value={form.farmhouseDetails?.description || ''}
              onChange={(e) =>
                updateField('farmhouseDetails', {
                  ...(form.farmhouseDetails || {}),
                  description: e.target.value,
                })
              }
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <div className="flex flex-col gap-1.5">
              <span className={labelClass}>Price Range</span>
              <input className={`${inputClass} w-full`} placeholder="₹75L - ₹1.2Cr" value={form.farmhouseDetails?.priceRange || ''} onChange={(e) => updateField('farmhouseDetails', { ...(form.farmhouseDetails || {}), priceRange: e.target.value })} />
            </div>
            <div className="flex flex-col gap-1.5">
              <span className={labelClass}>Area</span>
              <input className={`${inputClass} w-full`} placeholder="2400 sq.ft" value={form.farmhouseDetails?.area || ''} onChange={(e) => updateField('farmhouseDetails', { ...(form.farmhouseDetails || {}), area: e.target.value })} />
            </div>
            <div className="flex flex-col gap-1.5">
              <span className={labelClass}>Bedrooms</span>
              <select
                className={`${inputClass} w-full`}
                value={form.farmhouseDetails?.bedrooms || ''}
                onChange={(e) => updateField('farmhouseDetails', { ...(form.farmhouseDetails || {}), bedrooms: e.target.value })}
              >
                <option value="">Select bedrooms</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5+">5+</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className={labelClass}>Bathrooms</span>
              <select
                className={`${inputClass} w-full`}
                value={form.farmhouseDetails?.bathrooms || ''}
                onChange={(e) => updateField('farmhouseDetails', { ...(form.farmhouseDetails || {}), bathrooms: e.target.value })}
              >
                <option value="">Select bathrooms</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5+">5+</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <div className="flex flex-col gap-1.5">
              <span className={labelClass}>Features (one per line)</span>
              <textarea className={`${textareaClass} min-h-28`} placeholder="Private Garden" value={(form.farmhouseDetails?.features || []).join('\n')} onChange={(e) => updateField('farmhouseDetails', { ...(form.farmhouseDetails || {}), features: parseList(e.target.value) })} />
            </div>
            <div className="flex flex-col gap-1.5">
              <span className={labelClass}>Highlights (one per line)</span>
              <textarea className={`${textareaClass} min-h-28`} placeholder="Gated Community" value={(form.farmhouseDetails?.highlights || []).join('\n')} onChange={(e) => updateField('farmhouseDetails', { ...(form.farmhouseDetails || {}), highlights: parseList(e.target.value) })} />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className={labelClass}>Nearby Places (one per line)</span>
            <textarea className={`${textareaClass} min-h-28`} placeholder="10 min to Jewar Airport" value={(form.farmhouseDetails?.nearbyPlaces || []).join('\n')} onChange={(e) => updateField('farmhouseDetails', { ...(form.farmhouseDetails || {}), nearbyPlaces: parseList(e.target.value) })} />
          </div>
        </div>
      )}

      {form.kind === 'land' && (
        <div className="space-y-5 border rounded-2xl p-5 md:p-6 bg-gradient-to-br from-amber-50 to-lime-50 border-amber-200 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h3 className="font-bold text-lg text-slate-900">Land Details</h3>
            <span className="inline-flex items-center rounded-full border border-amber-300 bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">
              Plot / Acreage Section
            </span>
          </div>

          <label className="inline-flex items-center gap-3 cursor-pointer rounded-xl border border-lime-300 bg-white px-4 py-3">
            <input
              type="checkbox"
              checked={Boolean(form.landDetails?.isFarmland)}
              onChange={(e) => updateLandField('isFarmland', e.target.checked)}
              className="w-5 h-5 rounded border-lime-300 text-lime-600 focus:ring-lime-500"
            />
            <span className="text-slate-800 font-medium">This land is farmland / agricultural</span>
          </label>

          <div className="w-full rounded-xl border border-amber-200 bg-white p-4 space-y-3">
            <div>
              <p className="text-sm font-semibold text-slate-800 mb-1">Description / Paragraph</p>
              <p className="text-xs text-slate-500">Describe the plot, its surroundings, connectivity, and suitability (farming, investment, construction).</p>
            </div>
            <textarea
              className={`${textareaClass} w-full min-h-44 text-sm leading-6 border-amber-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-100 outline-none`}
              placeholder="Write detailed land description here..."
              value={form.landDetails?.description || ''}
              onChange={(e) => updateLandField('description', e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <div className="flex flex-col gap-1.5">
              <span className={labelClass}>Price Range</span>
              <input className={`${inputClass} w-full`} placeholder="₹40L - ₹1.2Cr" value={form.landDetails?.priceRange || ''} onChange={(e) => updateLandField('priceRange', e.target.value)} />
            </div>
            <div className="flex flex-col gap-1.5">
              <span className={labelClass}>Price Per Unit</span>
              <input className={`${inputClass} w-full`} placeholder="₹50 Lakh / Acre" value={form.landDetails?.pricePerUnit || ''} onChange={(e) => updateLandField('pricePerUnit', e.target.value)} />
            </div>
            <div className="flex flex-col gap-1.5">
              <span className={labelClass}>Total Area</span>
              <input className={`${inputClass} w-full`} placeholder="5 Acres / 2400 sq.yd" value={form.landDetails?.totalArea || ''} onChange={(e) => updateLandField('totalArea', e.target.value)} />
            </div>
            <div className="flex flex-col gap-1.5">
              <span className={labelClass}>Dimensions</span>
              <input className={`${inputClass} w-full`} placeholder="200 ft x 300 ft" value={form.landDetails?.dimensions || ''} onChange={(e) => updateLandField('dimensions', e.target.value)} />
            </div>
            <div className="flex flex-col gap-1.5">
              <span className={labelClass}>Facing</span>
              <select className={`${inputClass} w-full`} value={form.landDetails?.facing || ''} onChange={(e) => updateLandField('facing', e.target.value)}>
                <option value="">Select facing</option>
                <option value="North">North</option>
                <option value="South">South</option>
                <option value="East">East</option>
                <option value="West">West</option>
                <option value="North-East">North-East</option>
                <option value="North-West">North-West</option>
                <option value="South-East">South-East</option>
                <option value="South-West">South-West</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className={labelClass}>Road Width / Access</span>
              <input className={`${inputClass} w-full`} placeholder="40 ft approach road" value={form.landDetails?.roadWidth || ''} onChange={(e) => updateLandField('roadWidth', e.target.value)} />
            </div>
            <div className="flex flex-col gap-1.5">
              <span className={labelClass}>Boundary</span>
              <select className={`${inputClass} w-full`} value={form.landDetails?.boundaryWall || ''} onChange={(e) => updateLandField('boundaryWall', e.target.value)}>
                <option value="">Select boundary</option>
                <option value="Compound Wall">Compound Wall</option>
                <option value="Fenced">Fenced</option>
                <option value="Partially Fenced">Partially Fenced</option>
                <option value="Open">Open</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className={labelClass}>Electricity</span>
              <select className={`${inputClass} w-full`} value={form.landDetails?.electricity || ''} onChange={(e) => updateLandField('electricity', e.target.value)}>
                <option value="">Select availability</option>
                <option value="Available">Available</option>
                <option value="Near Site">Near Site</option>
                <option value="Not Available">Not Available</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className={labelClass}>Water Source</span>
              <input className={`${inputClass} w-full`} placeholder="Borewell / Canal / River" value={form.landDetails?.waterSource || ''} onChange={(e) => updateLandField('waterSource', e.target.value)} />
            </div>
            <div className="flex flex-col gap-1.5">
              <span className={labelClass}>Soil Type</span>
              <input className={`${inputClass} w-full`} placeholder="Black cotton / Red / Alluvial" value={form.landDetails?.soilType || ''} onChange={(e) => updateLandField('soilType', e.target.value)} />
            </div>
            <div className="flex flex-col gap-1.5">
              <span className={labelClass}>Approvals / Clearances</span>
              <input className={`${inputClass} w-full`} placeholder="NA Approved / DTCP / RERA" value={form.landDetails?.approvals || ''} onChange={(e) => updateLandField('approvals', e.target.value)} />
            </div>
            <div className="flex flex-col gap-1.5">
              <span className={labelClass}>Survey / Khasra No.</span>
              <input className={`${inputClass} w-full`} placeholder="Survey No. 123/4" value={form.landDetails?.surveyNumber || ''} onChange={(e) => updateLandField('surveyNumber', e.target.value)} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <div className="flex flex-col gap-1.5">
              <span className={labelClass}>Features (one per line)</span>
              <textarea className={`${textareaClass} min-h-28`} placeholder="Clear title&#10;Drip irrigation ready" value={(form.landDetails?.features || []).join('\n')} onChange={(e) => updateLandField('features', parseList(e.target.value))} />
            </div>
            <div className="flex flex-col gap-1.5">
              <span className={labelClass}>Highlights (one per line)</span>
              <textarea className={`${textareaClass} min-h-28`} placeholder="Highway touch&#10;Gated layout" value={(form.landDetails?.highlights || []).join('\n')} onChange={(e) => updateLandField('highlights', parseList(e.target.value))} />
            </div>
          </div>

          <div className="w-full rounded-xl border border-amber-200 bg-white p-4 space-y-3">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-lg bg-amber-100 text-amber-700">
                <MapPin className="w-4 h-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-800">Nearby Locations &amp; Landmarks (for reference)</p>
                <p className="text-xs text-slate-500">Add distance to highways, town, airport, railway, schools, hospitals — one per line.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                { label: '+ Highway', text: '5 min to NH-XX Highway' },
                { label: '+ Town / City', text: '10 km to town center' },
                { label: '+ Airport', text: '45 min to nearest airport' },
                { label: '+ Railway', text: '15 km to railway station' },
                { label: '+ School', text: '3 km to school' },
                { label: '+ Hospital', text: '4 km to hospital' },
                { label: '+ Market', text: '2 km to local market' },
              ].map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() =>
                    updateLandField('nearbyPlaces', [...(form.landDetails?.nearbyPlaces || []), item.text])
                  }
                  className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 hover:bg-amber-100"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <textarea
              className={`${textareaClass} min-h-32 border-amber-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-100`}
              placeholder={'5 min to NH-48 Highway\n10 km to town center\n45 min to nearest airport'}
              value={(form.landDetails?.nearbyPlaces || []).join('\n')}
              onChange={(e) => updateLandField('nearbyPlaces', parseList(e.target.value))}
            />
            <p className="text-xs text-slate-500">
              {(form.landDetails?.nearbyPlaces || []).length} nearby reference{(form.landDetails?.nearbyPlaces || []).length !== 1 ? 's' : ''} added
            </p>
          </div>
        </div>
      )}

      {/* Submit Buttons */}
      {message && <p className="text-sm font-medium text-emerald-700 bg-emerald-50 rounded-lg px-4 py-2">{message}</p>}
      <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-emerald-100">
        <button disabled={saving || uploading || deleting} className="rounded-xl bg-emerald-600 px-8 py-3 text-white font-semibold hover:bg-emerald-700 transition-colors disabled:opacity-70 shadow-sm">
          {saving ? 'Saving...' : isNew ? 'Create Property' : 'Save Changes'}
        </button>
        {!isNew && (
          <button
            type="button"
            onClick={onDelete}
            disabled={saving || uploading || deleting}
            className="rounded-xl bg-red-600 px-8 py-3 text-white font-semibold hover:bg-red-700 transition-colors disabled:opacity-70 shadow-sm"
          >
            {deleting ? 'Deleting...' : 'Delete Property'}
          </button>
        )}
      </div>
    </form>
  )
}
