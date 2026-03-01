'use client'

import Link from 'next/link'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { useState, useMemo } from 'react'
import { Building2, TreePine, Search, Filter, LayoutGrid, List, MapPin, Home, TrendingUp, X } from 'lucide-react'

type Property = {
  id: string
  name: string
  city: string
  developer: string
  location: string
  type: string
}

type Analytics = {
  totalListings: number
  totalResidential: number
  totalFarmhouses: number
  topCities: { city: string; count: number }[]
  listingTypes: { type: string; count: number }[]
}

type Props = {
  analytics: Analytics
  residential: Property[]
  farmland: Property[]
}

export default function DashboardClient({ analytics, residential, farmland }: Props) {
  const [activeTab, setActiveTab] = useState<'residential' | 'farmland'>('residential')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const allProperties = activeTab === 'residential' ? residential : farmland

  // Get unique cities and types for filters
  const cities = useMemo(() => {
    const citySet = new Set(allProperties.map((p) => p.city).filter(Boolean))
    return Array.from(citySet).sort()
  }, [allProperties])

  const types = useMemo(() => {
    const typeSet = new Set(allProperties.map((p) => p.type).filter(Boolean))
    return Array.from(typeSet).sort()
  }, [allProperties])

  // Filter properties
  const filteredProperties = useMemo(() => {
    return allProperties.filter((property) => {
      const matchesSearch =
        searchQuery === '' ||
        property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.developer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCity = selectedCity === '' || property.city === selectedCity
      const matchesType = selectedType === '' || property.type === selectedType

      return matchesSearch && matchesCity && matchesType
    })
  }, [allProperties, searchQuery, selectedCity, selectedType])

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedCity('')
    setSelectedType('')
  }

  const hasActiveFilters = searchQuery || selectedCity || selectedType

  // Prepare items for HoverEffect
  const hoverItems = filteredProperties.map((item) => ({
    title: item.name,
    description: [
      item.type ? `${item.type} • ` : '',
      item.city,
      item.developer ? ` • ${item.developer}` : '',
      item.location ? ` • ${item.location}` : '',
    ].join('').replace(/^[• ]+|[• ]+$/g, ''),
    link: `/Admin/dashboard/${item.id}`,
  }))

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <article className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-100 text-sm font-medium">Total Listings</p>
              <p className="text-4xl font-bold mt-1">{analytics.totalListings}</p>
            </div>
            <div className="bg-white/20 p-3 rounded-xl">
              <TrendingUp className="w-8 h-8" />
            </div>
          </div>
        </article>
        <article className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm font-medium">Residential</p>
              <p className="text-4xl font-bold mt-1">{analytics.totalResidential}</p>
            </div>
            <div className="bg-white/20 p-3 rounded-xl">
              <Building2 className="w-8 h-8" />
            </div>
          </div>
        </article>
        <article className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-100 text-sm font-medium">Farmland</p>
              <p className="text-4xl font-bold mt-1">{analytics.totalFarmhouses}</p>
            </div>
            <div className="bg-white/20 p-3 rounded-xl">
              <TreePine className="w-8 h-8" />
            </div>
          </div>
        </article>
      </section>

      {/* Analytics Row */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-emerald-600" />
            <h2 className="text-lg font-bold text-slate-900">Top Cities</h2>
          </div>
          <div className="space-y-3">
            {analytics.topCities.slice(0, 5).map((item, index) => (
              <div key={item.city} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center">
                  {index + 1}
                </span>
                <div className="flex-1 flex items-center justify-between">
                  <span className="text-slate-700">{item.city}</span>
                  <span className="font-semibold text-slate-900 bg-slate-100 px-2 py-0.5 rounded-full text-sm">
                    {item.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center gap-2 mb-4">
            <Home className="w-5 h-5 text-green-600" />
            <h2 className="text-lg font-bold text-slate-900">Listing Types</h2>
          </div>
          <div className="space-y-3">
            {analytics.listingTypes.slice(0, 5).map((item, index) => (
              <div key={item.type} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-green-100 text-green-700 text-xs font-bold flex items-center justify-center">
                  {index + 1}
                </span>
                <div className="flex-1 flex items-center justify-between">
                  <span className="text-slate-700">{item.type || 'Not specified'}</span>
                  <span className="font-semibold text-slate-900 bg-slate-100 px-2 py-0.5 rounded-full text-sm">
                    {item.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Listings Section */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Tabs */}
        <div className="border-b border-slate-200">
          <div className="flex">
            <button
              onClick={() => setActiveTab('residential')}
              className={`flex items-center gap-2 px-6 py-4 font-semibold transition-colors ${
                activeTab === 'residential'
                  ? 'text-emerald-700 border-b-2 border-emerald-700 bg-emerald-50/50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Building2 className="w-5 h-5" />
              Residential ({residential.length})
            </button>
            <button
              onClick={() => setActiveTab('farmland')}
              className={`flex items-center gap-2 px-6 py-4 font-semibold transition-colors ${
                activeTab === 'farmland'
                  ? 'text-emerald-700 border-b-2 border-emerald-700 bg-emerald-50/50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <TreePine className="w-5 h-5" />
              Farmland ({farmland.length})
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="p-4 border-b border-slate-200 bg-slate-50/50">
          <div className="flex flex-col lg:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by name, location, developer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="pl-9 pr-8 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none cursor-pointer"
                >
                  <option value="">All Cities</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none cursor-pointer"
              >
                <option value="">All Types</option>
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 px-3 py-2.5 bg-red-50 text-red-700 border border-red-200 rounded-xl hover:bg-red-100 transition-colors"
                >
                  <X className="w-4 h-4" />
                  Clear
                </button>
              )}

              {/* View Toggle */}
              <div className="flex bg-white border border-slate-300 rounded-xl overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2.5 ${viewMode === 'grid' ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
                >
                  <LayoutGrid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2.5 ${viewMode === 'list' ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Results count */}
          <p className="mt-3 text-sm text-slate-600">
            Showing <span className="font-semibold text-slate-900">{filteredProperties.length}</span> of{' '}
            <span className="font-semibold text-slate-900">{allProperties.length}</span> listings
          </p>
        </div>

        {/* Property List (Card Hover Effect) */}
        <div className="p-4">
          {hoverItems.length === 0 ? (
            <div className="text-center py-12">
              <Search className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-600 font-medium">No properties found</p>
              <p className="text-slate-400 text-sm mt-1">Try adjusting your search or filters</p>
            </div>
          ) : (
            <HoverEffect items={hoverItems} />
          )}
        </div>
      </section>
    </div>
  )
}
