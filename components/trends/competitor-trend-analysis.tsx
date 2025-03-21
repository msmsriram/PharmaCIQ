"use client"

import { LineChart } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CompetitorTrendAnalysis() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Competitor Trend Analysis</CardTitle>
        <CardDescription>Analysis of competitor trends in the mCRPC market</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="market-share">
          <TabsList className="grid w-full grid-cols-3 bg-secondary-lightblue/20">
            <TabsTrigger
              value="market-share"
              className="data-[state=active]:bg-primary-blue data-[state=active]:text-white"
            >
              Market Share
            </TabsTrigger>
            <TabsTrigger value="growth" className="data-[state=active]:bg-primary-blue data-[state=active]:text-white">
              Growth
            </TabsTrigger>
            <TabsTrigger value="pricing" className="data-[state=active]:bg-primary-blue data-[state=active]:text-white">
              Pricing
            </TabsTrigger>
          </TabsList>
          <TabsContent value="market-share" className="space-y-4">
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Pfizer/Astellas</div>
                <div className="text-sm font-medium text-primary-amber">24.5%</div>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-2 rounded-full bg-primary-amber" style={{ width: "24.5%" }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Johnson & Johnson</div>
                <div className="text-sm font-medium text-primary-amber">18.3%</div>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-2 rounded-full bg-primary-amber" style={{ width: "18.3%" }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">AstraZeneca</div>
                <div className="text-sm font-medium text-primary-amber">15.7%</div>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-2 rounded-full bg-primary-amber" style={{ width: "15.7%" }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Novartis</div>
                <div className="text-sm font-medium text-primary-amber">12.8%</div>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-2 rounded-full bg-primary-amber" style={{ width: "12.8%" }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Bayer</div>
                <div className="text-sm font-medium text-primary-amber">9.5%</div>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-2 rounded-full bg-primary-amber" style={{ width: "9.5%" }} />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="growth" className="h-[220px] flex items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <LineChart className="h-10 w-10 text-muted-foreground" />
              <p className="mt-2 text-sm text-muted-foreground">Competitor growth trend data would be displayed here</p>
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

