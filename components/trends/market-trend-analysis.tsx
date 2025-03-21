"use client"

import { LineChart } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MarketTrendAnalysis() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>mCRPC Market Trend Analysis</CardTitle>
        <CardDescription>Analysis of key market trends for mCRPC treatments</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="growth">
          <TabsList className="grid w-full grid-cols-3 bg-secondary-lightblue/20">
            <TabsTrigger value="growth" className="data-[state=active]:bg-primary-blue data-[state=active]:text-white">
              Growth Trends
            </TabsTrigger>
            <TabsTrigger
              value="regional"
              className="data-[state=active]:bg-primary-blue data-[state=active]:text-white"
            >
              Regional
            </TabsTrigger>
            <TabsTrigger
              value="forecast"
              className="data-[state=active]:bg-primary-blue data-[state=active]:text-white"
            >
              Forecast
            </TabsTrigger>
          </TabsList>
          <TabsContent value="growth" className="space-y-4">
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">AR Inhibitors</div>
                <div className="text-sm font-medium text-emerald-500">+8.2%</div>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-2 rounded-full bg-emerald-500" style={{ width: "82%" }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">PARP Inhibitors</div>
                <div className="text-sm font-medium text-emerald-500">+12.5%</div>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-2 rounded-full bg-emerald-500" style={{ width: "95%" }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Radioligand Therapies</div>
                <div className="text-sm font-medium text-emerald-500">+15.8%</div>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-2 rounded-full bg-emerald-500" style={{ width: "100%" }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Immunotherapies</div>
                <div className="text-sm font-medium text-emerald-500">+9.3%</div>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-2 rounded-full bg-emerald-500" style={{ width: "85%" }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Chemotherapies</div>
                <div className="text-sm font-medium text-rose-500">-3.2%</div>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-2 rounded-full bg-rose-500" style={{ width: "32%" }} />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="regional" className="h-[220px] flex items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <LineChart className="h-10 w-10 text-muted-foreground" />
              <p className="mt-2 text-sm text-muted-foreground">Regional market trend data would be displayed here</p>
            </div>
          </TabsContent>
          <TabsContent value="forecast" className="h-[220px] flex items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <LineChart className="h-10 w-10 text-muted-foreground" />
              <p className="mt-2 text-sm text-muted-foreground">Market forecast data would be displayed here</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

