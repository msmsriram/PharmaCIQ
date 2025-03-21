"use client"

import { Download, Filter, Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CompetitorHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="flex flex-1 items-center gap-2 md:gap-4">
        <form className="hidden md:flex-1 md:max-w-sm lg:max-w-md lg:flex">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search mCRPC competitors..."
              className="w-full bg-background pl-8 md:w-[300px] lg:w-[320px]"
            />
          </div>
        </form>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px] border-secondary-grayblue">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All mCRPC Competitors</SelectItem>
            <SelectItem value="direct">Direct mCRPC Competitors</SelectItem>
            <SelectItem value="indirect">Indirect mCRPC Competitors</SelectItem>
            <SelectItem value="emerging">Emerging mCRPC Threats</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="h-8 border-secondary-grayblue">
          <Filter className="mr-2 h-4 w-4" />
          Advanced Filter
        </Button>
        <Button variant="outline" size="sm" className="h-8 border-secondary-grayblue">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
        <Button size="sm" className="h-8 bg-primary-amber hover:bg-primary-amber/90 text-white">
          <Plus className="mr-2 h-4 w-4" />
          Add Competitor
        </Button>
      </div>
    </header>
  )
}

