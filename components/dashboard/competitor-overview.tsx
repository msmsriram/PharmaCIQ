"use client"

import { useState } from "react"
import { BarChart, Download, Info } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample data for competitor overview
const competitorData = [
  { name: "Novartis", marketShare: 18.5, pipelineProducts: 32, patentExpiry: 4, revenueGrowth: 5.2 },
  { name: "Pfizer", marketShare: 16.2, pipelineProducts: 28, patentExpiry: 3, revenueGrowth: 4.8 },
  { name: "Roche", marketShare: 14.8, pipelineProducts: 25, patentExpiry: 2, revenueGrowth: 6.1 },
  { name: "Merck", marketShare: 12.3, pipelineProducts: 22, patentExpiry: 5, revenueGrowth: 3.9 },
  { name: "AstraZeneca", marketShare: 11.7, pipelineProducts: 27, patentExpiry: 1, revenueGrowth: 7.3 },
  { name: "Johnson & Johnson", marketShare: 10.5, pipelineProducts: 19, patentExpiry: 2, revenueGrowth: 4.2 },
  { name: "Sanofi", marketShare: 9.8, pipelineProducts: 21, patentExpiry: 3, revenueGrowth: 3.5 },
  { name: "GlaxoSmithKline", marketShare: 8.9, pipelineProducts: 18, patentExpiry: 4, revenueGrowth: 2.8 },
]

export default function CompetitorOverview({ className }: { className?: string }) {
  const [activeTab, setActiveTab] = useState("market-share")

  return (
    <Card className={cn("col-span-2", className)}>
      <CardHeader className="flex flex-row items-center">
        <div className="flex flex-col space-y-1.5">
          <CardTitle>mCRPC Competitor Overview</CardTitle>
          <CardDescription>Analysis of top pharmaceutical competitors in mCRPC market</CardDescription>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="hidden md:block">
            <TabsList className="bg-secondary-lightblue/20">
              <TabsTrigger
                value="market-share"
                className="data-[state=active]:bg-primary-blue data-[state=active]:text-white"
              >
                mCRPC Market Share
              </TabsTrigger>
              <TabsTrigger
                value="pipeline"
                className="data-[state=active]:bg-primary-blue data-[state=active]:text-white"
              >
                mCRPC Pipeline
              </TabsTrigger>
              <TabsTrigger
                value="growth"
                className="data-[state=active]:bg-primary-blue data-[state=active]:text-white"
              >
                mCRPC Growth
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="ml-auto h-8 lg:flex border-secondary-grayblue">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Export as CSV</DropdownMenuItem>
              <DropdownMenuItem>Export as PDF</DropdownMenuItem>
              <DropdownMenuItem>Export as Image</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="md:hidden">
          <TabsList className="grid w-full grid-cols-3 bg-secondary-lightblue/20">
            <TabsTrigger
              value="market-share"
              className="data-[state=active]:bg-primary-blue data-[state=active]:text-white"
            >
              Market
            </TabsTrigger>
            <TabsTrigger
              value="pipeline"
              className="data-[state=active]:bg-primary-blue data-[state=active]:text-white"
            >
              Pipeline
            </TabsTrigger>
            <TabsTrigger value="growth" className="data-[state=active]:bg-primary-blue data-[state=active]:text-white">
              Growth
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="mt-4 space-y-4">
          <div className="rounded-md border">
            <div className="grid grid-cols-5 gap-4 p-4 text-sm font-medium">
              <div>Company</div>
              <div className="text-right">Market Share</div>
              <div className="text-right">Pipeline Products</div>
              <div className="text-right">
                <div className="flex items-center justify-end">
                  Patent Expirations
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-4 w-4">
                        <Info className="h-3 w-3" />
                        <span className="sr-only">Info</span>
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">Patent Expirations</h4>
                        <p className="text-xs">Number of patents expiring in the next 24 months for key products</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
              <div className="text-right">Revenue Growth</div>
            </div>
            {competitorData.map((competitor) => (
              <div key={competitor.name} className="grid grid-cols-5 gap-4 border-t p-4 text-sm">
                <div className="font-medium">{competitor.name}</div>
                <div className="text-right">{competitor.marketShare}%</div>
                <div className="text-right">{competitor.pipelineProducts}</div>
                <div className="text-right">{competitor.patentExpiry}</div>
                <div className="text-right">{competitor.revenueGrowth}%</div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center rounded-md border border-dashed p-8">
            <div className="flex flex-col items-center justify-center text-center">
              <BarChart className="h-10 w-10 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-medium">Competitor Visualization</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Interactive charts would be displayed here based on the selected tab
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

