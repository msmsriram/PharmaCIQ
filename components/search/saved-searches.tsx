"use client"

import { useState } from "react"
import { Clock, Plus, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Sample data for saved searches
const savedSearchesData = [
  {
    id: 1,
    query: "PARP inhibitor mCRPC clinical trial",
    date: "Jan 15, 2024",
    starred: true,
  },
  {
    id: 2,
    query: "Radioligand therapy PSMA mCRPC",
    date: "Jan 10, 2024",
    starred: true,
  },
  {
    id: 3,
    query: "AR degrader mCRPC patent",
    date: "Dec 28, 2023",
    starred: false,
  },
  {
    id: 4,
    query: "Immunotherapy combination mCRPC",
    date: "Dec 15, 2023",
    starred: false,
  },
]

export default function SavedSearches() {
  const [searches, setSearches] = useState(savedSearchesData)

  const toggleStar = (id: number) => {
    setSearches(searches.map((search) => (search.id === id ? { ...search, starred: !search.starred } : search)))
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Saved Searches</CardTitle>
            <CardDescription>Your saved mCRPC search queries</CardDescription>
          </div>
          <Button size="sm" className="h-8 bg-primary-amber hover:bg-primary-amber/90 text-white">
            <Plus className="mr-2 h-4 w-4" />
            New
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {searches.map((search) => (
            <div key={search.id} className="flex items-center justify-between rounded-md border p-2">
              <div>
                <div className="font-medium text-sm">{search.query}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock className="mr-1 h-3 w-3" />
                  <span>{search.date}</span>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => toggleStar(search.id)}>
                <Star className={search.starred ? "h-4 w-4 fill-primary-amber text-primary-amber" : "h-4 w-4"} />
                <span className="sr-only">{search.starred ? "Unstar" : "Star"}</span>
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

