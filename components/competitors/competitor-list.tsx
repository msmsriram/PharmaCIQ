"use client"

import type React from "react"

import { useState } from "react"
import { BarChart3, Building, Eye, MoreHorizontal, Star, Users, Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample data for competitors
const competitorData = [
  {
    id: 1,
    name: "Novartis",
    logo: "/placeholder.svg?height=40&width=40",
    category: "Direct",
    threat: "High",
    products: 42,
    marketShare: "18.5%",
    starred: true,
  },
  {
    id: 2,
    name: "Pfizer",
    logo: "/placeholder.svg?height=40&width=40",
    category: "Direct",
    threat: "High",
    products: 38,
    marketShare: "16.2%",
    starred: true,
  },
  {
    id: 3,
    name: "Roche",
    logo: "/placeholder.svg?height=40&width=40",
    category: "Direct",
    threat: "Medium",
    products: 35,
    marketShare: "14.8%",
    starred: false,
  },
  {
    id: 4,
    name: "Merck",
    logo: "/placeholder.svg?height=40&width=40",
    category: "Direct",
    threat: "High",
    products: 31,
    marketShare: "12.3%",
    starred: true,
  },
  {
    id: 5,
    name: "AstraZeneca",
    logo: "/placeholder.svg?height=40&width=40",
    category: "Direct",
    threat: "Medium",
    products: 29,
    marketShare: "11.7%",
    starred: false,
  },
  {
    id: 6,
    name: "Johnson & Johnson",
    logo: "/placeholder.svg?height=40&width=40",
    category: "Indirect",
    threat: "Medium",
    products: 27,
    marketShare: "10.5%",
    starred: false,
  },
  {
    id: 7,
    name: "Sanofi",
    logo: "/placeholder.svg?height=40&width=40",
    category: "Indirect",
    threat: "Low",
    products: 25,
    marketShare: "9.8%",
    starred: false,
  },
  {
    id: 8,
    name: "GlaxoSmithKline",
    logo: "/placeholder.svg?height=40&width=40",
    category: "Indirect",
    threat: "Low",
    products: 23,
    marketShare: "8.9%",
    starred: false,
  },
]

export default function CompetitorList({ className }: { className?: string }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  const [competitors, setCompetitors] = useState(competitorData)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleStarToggle = (id: number) => {
    setCompetitors(
      competitors.map((competitor) =>
        competitor.id === id ? { ...competitor, starred: !competitor.starred } : competitor,
      ),
    )
  }

  const filteredCompetitors = competitors.filter((competitor) => {
    const matchesSearch = competitor.name.toLowerCase().includes(searchQuery.toLowerCase())

    if (activeTab === "all") return matchesSearch
    if (activeTab === "starred") return matchesSearch && competitor.starred
    if (activeTab === "direct") return matchesSearch && competitor.category === "Direct"
    if (activeTab === "indirect") return matchesSearch && competitor.category === "Indirect"

    return matchesSearch
  })

  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>Competitors</CardTitle>
        <CardDescription>Monitor and analyze key competitors</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search competitors..."
              className="w-full pl-8"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-secondary-lightblue/20">
              <TabsTrigger value="all" className="data-[state=active]:bg-primary-blue data-[state=active]:text-white">
                All
              </TabsTrigger>
              <TabsTrigger
                value="starred"
                className="data-[state=active]:bg-primary-blue data-[state=active]:text-white"
              >
                Starred
              </TabsTrigger>
              <TabsTrigger
                value="direct"
                className="data-[state=active]:bg-primary-blue data-[state=active]:text-white"
              >
                Direct
              </TabsTrigger>
              <TabsTrigger
                value="indirect"
                className="data-[state=active]:bg-primary-blue data-[state=active]:text-white"
              >
                Indirect
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="space-y-2">
            {filteredCompetitors.map((competitor) => (
              <div key={competitor.id} className="flex items-center justify-between rounded-md border p-3">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={competitor.logo} alt={competitor.name} />
                    <AvatarFallback>{competitor.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center">
                      <p className="text-sm font-medium leading-none">{competitor.name}</p>
                      {competitor.threat === "High" && (
                        <Badge className="ml-2 bg-primary-amber hover:bg-primary-amber/90 text-white">
                          High Threat
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center pt-1 text-xs text-muted-foreground">
                      <Building className="mr-1 h-3 w-3" />
                      <span>{competitor.category}</span>
                      <span className="mx-1">•</span>
                      <BarChart3 className="mr-1 h-3 w-3" />
                      <span>{competitor.marketShare}</span>
                      <span className="mx-1">•</span>
                      <Users className="mr-1 h-3 w-3" />
                      <span>{competitor.products} products</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handleStarToggle(competitor.id)}
                  >
                    <Star
                      className={cn(
                        "h-4 w-4",
                        competitor.starred ? "fill-primary-amber text-primary-amber" : "text-muted-foreground",
                      )}
                    />
                    <span className="sr-only">{competitor.starred ? "Unstar" : "Star"}</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Eye className="h-4 w-4" />
                    <span className="sr-only">View</span>
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">More</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Generate Report</DropdownMenuItem>
                      <DropdownMenuItem>Set Alerts</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
            {filteredCompetitors.length === 0 && (
              <div className="flex h-32 items-center justify-center rounded-md border border-dashed">
                <div className="flex flex-col items-center text-center">
                  <Building className="h-10 w-10 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-medium">No competitors found</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Try adjusting your search or filters</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

