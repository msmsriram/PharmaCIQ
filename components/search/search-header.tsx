"use client"

import { Calendar, Download, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SearchHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="flex flex-1 items-center gap-2 md:gap-4">
        <form className="hidden md:flex-1 md:max-w-sm lg:max-w-md lg:flex">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Quick search..."
              className="w-full bg-background pl-8 md:w-[300px] lg:w-[320px]"
            />
          </div>
        </form>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px] border-secondary-grayblue">
            <SelectValue placeholder="Filter by source" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Sources</SelectItem>
            <SelectItem value="clinical">Clinical Trials</SelectItem>
            <SelectItem value="patents">Patents</SelectItem>
            <SelectItem value="publications">Publications</SelectItem>
            <SelectItem value="news">News</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="h-8 border-secondary-grayblue">
              <Calendar className="mr-2 h-4 w-4" />
              Date Range
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="end">
            <CalendarComponent mode="range" numberOfMonths={2} />
          </PopoverContent>
        </Popover>
        <Button variant="outline" size="sm" className="h-8 border-secondary-grayblue">
          <Filter className="mr-2 h-4 w-4" />
          Advanced
        </Button>
        <Button variant="outline" size="sm" className="h-8 border-secondary-grayblue">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>
    </header>
  )
}

