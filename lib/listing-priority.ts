export const HOMEPAGE_LISTING_PRIORITY = ['farmhouse', 'commercial']

type PrioritizableListing = {
  type?: string
  kind?: string
}

function normalize(value?: string) {
  return String(value ?? '').trim().toLowerCase()
}

function getListingCategory(listing: PrioritizableListing) {
  if (listing.kind === 'farmhouse') return 'farmhouse'
  return normalize(listing.type) || 'property'
}

export function sortListingsByPriority<T extends PrioritizableListing>(
  listings: T[],
  priority: string[] = HOMEPAGE_LISTING_PRIORITY,
) {
  const rankMap = new Map(priority.map((key, index) => [normalize(key), index]))

  return listings
    .map((listing, index) => ({ listing, index }))
    .sort((a, b) => {
      const rankA = rankMap.get(getListingCategory(a.listing)) ?? Number.MAX_SAFE_INTEGER
      const rankB = rankMap.get(getListingCategory(b.listing)) ?? Number.MAX_SAFE_INTEGER

      if (rankA !== rankB) return rankA - rankB
      return a.index - b.index
    })
    .map((entry) => entry.listing)
}

export function sortTypeLabelsByPriority(
  typeLabels: string[],
  priority: string[] = HOMEPAGE_LISTING_PRIORITY,
) {
  const rankMap = new Map(priority.map((key, index) => [normalize(key), index]))

  return [...typeLabels].sort((a, b) => {
    const rankA = rankMap.get(normalize(a)) ?? Number.MAX_SAFE_INTEGER
    const rankB = rankMap.get(normalize(b)) ?? Number.MAX_SAFE_INTEGER

    if (rankA !== rankB) return rankA - rankB
    return a.localeCompare(b)
  })
}
