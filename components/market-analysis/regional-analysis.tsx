"use client"

import { Globe } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RegionalAnalysis() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Regional Analysis</CardTitle>
        <CardDescription>Market performance across different geographic regions</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="market-size">
          <TabsList className="grid w-full grid-cols-2 bg-secondary-lightblue/20">
            <TabsTrigger
              value="market-size"
              className="data-[state=active]:bg-primary-blue data-[state=active]:text-white"
            >
              Market Size
            </TabsTrigger>
            <TabsTrigger
              value="growth-rate"
              className="data-[state=active]:bg-primary-blue data-[state=active]:text-white"
            >
              Growth Rate
            </TabsTrigger>
          </TabsList>
          <TabsContent value="market-size" className="space-y-4">
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">North America</div>
                <div className="text-sm font-medium text-primary-amber">$580B</div>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-2 rounded-full bg-primary-amber" style={{ width: "45%" }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Europe</div>
                <div className="text-sm font-medium text-primary-amber">$410B</div>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-2 rounded-full bg-primary-amber" style={{ width: "32%" }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Asia Pacific</div>
                <div className="text-sm font-medium text-primary-amber">$320B</div>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-2 rounded-full bg-primary-amber" style={{ width: "25%" }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Latin America</div>
                <div className="text-sm font-medium text-primary-amber">$85B</div>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-2 rounded-full bg-primary-amber" style={{ width: "7%" }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Middle East & Africa</div>
                <div className="text-sm font-medium text-primary-amber">$25B</div>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-2 rounded-full bg-primary-amber" style={{ width: "2%" }} />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="growth-rate" className="h-[300px] flex items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <Globe className="h-10 w-10 text-primary-blue" />
              <p className="mt-2 text-sm text-muted-foreground">
                Regional growth rate analysis would be displayed here
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

