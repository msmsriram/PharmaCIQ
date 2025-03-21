import type { Metadata } from "next"
import SearchHeader from "@/components/search/search-header"
import SearchInterface from "@/components/search/search-interface"
import SearchResults from "@/components/search/search-results"
import SavedSearches from "@/components/search/saved-searches"
import SearchFilters from "@/components/search/search-filters"

export const metadata: Metadata = {
  title: "Intelligence Search | Pharma CI Dashboard",
  description: "Search and analyze competitive intelligence for mCRPC treatments",
}

export default function SearchPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SearchHeader />
      <main className="flex-1 space-y-6 p-6 pt-4 md:p-8">
        <SearchInterface />
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <SearchResults />
          </div>
          <div className="space-y-6">
            <SavedSearches />
            <SearchFilters />
          </div>
        </div>
      </main>
    </div>
  )
}

