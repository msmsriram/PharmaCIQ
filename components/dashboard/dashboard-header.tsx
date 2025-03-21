"use client"

import { useState } from "react"
import { Bell, Download, Filter, Search, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardHeader() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="flex flex-1 items-center gap-2 md:gap-4">
        <form className="hidden md:flex-1 md:max-w-sm lg:max-w-md lg:flex">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search mCRPC competitive intelligence..."
              className="w-full bg-background pl-8 md:w-[300px] lg:w-[320px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className="h-8 md:hidden">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Search</SheetTitle>
              <SheetDescription>Search for competitors, products, or market insights</SheetDescription>
            </SheetHeader>
            <div className="py-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <Tabs defaultValue="all" className="hidden md:block">
          <TabsList className="bg-secondary-lightblue/20">
            <TabsTrigger value="all" className="data-[state=active]:bg-primary-blue data-[state=active]:text-white">
              All mCRPC
            </TabsTrigger>
            <TabsTrigger
              value="competitors"
              className="data-[state=active]:bg-primary-blue data-[state=active]:text-white"
            >
              mCRPC Competitors
            </TabsTrigger>
            <TabsTrigger
              value="products"
              className="data-[state=active]:bg-primary-blue data-[state=active]:text-white"
            >
              mCRPC Products
            </TabsTrigger>
            <TabsTrigger value="market" className="data-[state=active]:bg-primary-blue data-[state=active]:text-white">
              mCRPC Market
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" className="h-8 w-8 border-secondary-grayblue">
          <Filter className="h-4 w-4" />
          <span className="sr-only">Filter</span>
        </Button>
        <Button variant="outline" size="icon" className="h-8 w-8 border-secondary-grayblue">
          <Download className="h-4 w-4" />
          <span className="sr-only">Download</span>
        </Button>
        <Button variant="outline" size="icon" className="h-8 w-8 border-secondary-grayblue">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Notifications</span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <User className="h-4 w-4" />
              <span className="sr-only">User menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Reports</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

