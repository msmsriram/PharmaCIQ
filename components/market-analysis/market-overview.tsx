"use client"

import { BarChart, Download, LineChart } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MarketOverview({ className }: { className?: string }) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Market Overview</CardTitle>
            <CardDescription>Global pharmaceutical market analysis</CardDescription>
          </div>
          <Button variant="outline" size="sm" className="ml-auto h-8 border-secondary-grayblue">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="size">
          <TabsList className="grid w-full grid-cols-3 bg-secondary-lightblue/20">
            <TabsTrigger value="size" className="data-[state=active]:bg-primary-blue data-[state=active]:text-white">
              Market Size
            </TabsTrigger>
            <TabsTrigger value="growth" className="data-[state=active]:bg-primary-blue data-[state=active]:text-white">
              Growth Rate
            </TabsTrigger>
            <TabsTrigger
              value="forecast"
              className="data-[state=active]:bg-primary-blue data-[state=active]:text-white"
            >
              Forecast
            </TabsTrigger>
          </TabsList>
          <TabsContent value="size" className="space-y-4">
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-secondary-grayblue/30 p-4">
                <h3 className="text-sm font-medium text-primary-blue">Global Market Size</h3>
                <div className="mt-2 space-y-2">
                  <div className="text-3xl font-bold text-primary-amber">$1.42 Trillion</div>
                  <p className="text-sm text-muted-foreground">
                    The global pharmaceutical market reached $1.42 trillion in 2023, with a compound annual growth rate
                    (CAGR) of 5.8% over the past five years.
                  </p>
                </div>
              </div>
              <div className="rounded-lg border border-secondary-grayblue/30 p-4">
                <h3 className="text-sm font-medium text-primary-blue">Market Drivers</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-amber">•</span>
                    <span>Aging global population</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-amber">•</span>
                    <span>Rising prevalence of chronic diseases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-amber">•</span>
                    <span>Technological advancements in drug development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-amber">•</span>
                    <span>Increasing healthcare expenditure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-amber">•</span>
                    <span>Growing demand in emerging markets</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center rounded-md border border-dashed p-8">
              <div className="flex flex-col items-center justify-center text-center">
                <BarChart className="h-10 w-10 text-primary-blue" />
                <h3 className="mt-4 text-lg font-medium">Market Size Visualization</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Interactive market size charts would be displayed here
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="growth" className="h-[400px] flex items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <LineChart className="h-10 w-10 text-primary-blue" />
              <p className="mt-2 text-sm text-muted-foreground">Growth rate analysis would be displayed here</p>
            </div>
          </TabsContent>
          <TabsContent value="forecast" className="h-[400px] flex items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <LineChart className="h-10 w-10 text-primary-blue" />
              <p className="mt-2 text-sm text-muted-foreground">Market forecast data would be displayed here</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

