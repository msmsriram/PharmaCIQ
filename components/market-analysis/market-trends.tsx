"use client"

import { LineChart, TrendingUp } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MarketTrends() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Trends</CardTitle>
        <CardDescription>Key market indicators and trends</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="therapeutic">
          <TabsList className="grid w-full grid-cols-3 bg-secondary-lightblue/20">
            <TabsTrigger
              value="therapeutic"
              className="data-[state=active]:bg-primary-blue data-[state=active]:text-white"
            >
              Therapeutic
            </TabsTrigger>
            <TabsTrigger
              value="regional"
              className="data-[state=active]:bg-primary-blue data-[state=active]:text-white"
            >
              Regional
            </TabsTrigger>
            <TabsTrigger value="pricing" className="data-[state=active]:bg-primary-blue data-[state=active]:text-white">
              Pricing
            </TabsTrigger>
          </TabsList>
          <TabsContent value="therapeutic" className="space-y-4">
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Oncology</div>
                <div className="flex items-center text-sm">
                  <TrendingUp className="mr-1 h-3 w-3 text-emerald-500" />
                  <span>12.4%</span>
                </div>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-2 rounded-full bg-primary-amber" style={{ width: "75%" }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Immunology</div>
                <div className="flex items-center text-sm">
                  <TrendingUp className="mr-1 h-3 w-3 text-emerald-500" />
                  <span>9.7%</span>
                </div>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-2 rounded-full bg-primary-amber" style={{ width: "65%" }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Neurology</div>
                <div className="flex items-center text-sm">
                  <TrendingUp className="mr-1 h-3 w-3 text-emerald-500" />
                  <span>7.2%</span>
                </div>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-2 rounded-full bg-primary-amber" style={{ width: "55%" }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Cardiology</div>
                <div className="flex items-center text-sm">
                  <TrendingUp className="mr-1 h-3 w-3 text-emerald-500" />
                  <span>5.8%</span>
                </div>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-2 rounded-full bg-primary-amber" style={{ width: "45%" }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Infectious Disease</div>
                <div className="flex items-center text-sm">
                  <TrendingUp className="mr-1 h-3 w-3 text-emerald-500" />
                  <span>4.3%</span>
                </div>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-2 rounded-full bg-primary-amber" style={{ width: "35%" }} />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="regional" className="h-[220px] flex items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <LineChart className="h-10 w-10 text-muted-foreground" />
              <p className="mt-2 text-sm text-muted-foreground">Regional market trend data would be displayed here</p>
            </div>
          </TabsContent>
          <TabsContent value="pricing" className="h-[220px] flex items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <LineChart className="h-10 w-10 text-muted-foreground" />
              <p className="mt-2 text-sm text-muted-foreground">Pricing trend data would be displayed here</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

