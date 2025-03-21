"use client"

import { BarChart, Download, LineChart } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CompetitorAnalysis({ className }: { className?: string }) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Competitor Analysis</CardTitle>
            <CardDescription>Detailed analysis of selected competitor</CardDescription>
          </div>
          <Button variant="outline" size="sm" className="ml-auto h-8 border-secondary-grayblue">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview">
          <TabsList className="grid w-full grid-cols-4 bg-secondary-lightblue/20">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-primary-blue data-[state=active]:text-white"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="products"
              className="data-[state=active]:bg-primary-blue data-[state=active]:text-white"
            >
              Products
            </TabsTrigger>
            <TabsTrigger
              value="pipeline"
              className="data-[state=active]:bg-primary-blue data-[state=active]:text-white"
            >
              Pipeline
            </TabsTrigger>
            <TabsTrigger
              value="financials"
              className="data-[state=active]:bg-primary-blue data-[state=active]:text-white"
            >
              Financials
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-secondary-grayblue/30 p-4">
                <h3 className="text-sm font-medium text-primary-blue">Company Profile</h3>
                <div className="mt-2 space-y-2 text-sm">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="font-medium">Headquarters</div>
                    <div className="col-span-2">Basel, Switzerland</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="font-medium">Founded</div>
                    <div className="col-span-2">1996</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="font-medium">Employees</div>
                    <div className="col-span-2">~105,000</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="font-medium">Revenue</div>
                    <div className="col-span-2">$51.9 billion (2022)</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="font-medium">CEO</div>
                    <div className="col-span-2">Vasant Narasimhan</div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-secondary-grayblue/30 p-4">
                <h3 className="text-sm font-medium text-primary-blue">Key Strengths</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Strong oncology and immunology portfolio</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Robust R&D pipeline with 150+ projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Advanced gene and cell therapy capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Strategic focus on high-growth markets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Strong presence in emerging markets</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-secondary-grayblue/30 p-4">
                <h3 className="text-sm font-medium text-primary-blue">Key Weaknesses</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Patent expirations for key products</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Pricing pressure in established markets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Regulatory challenges in certain regions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Limited presence in consumer health</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border border-secondary-grayblue/30 p-4">
                <h3 className="text-sm font-medium text-primary-blue">Strategic Initiatives</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Digital transformation across R&D and operations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Expansion in cell and gene therapies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Strategic acquisitions in emerging biotech</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Focus on high-value therapeutic areas</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center rounded-md border border-dashed p-8">
              <div className="flex flex-col items-center justify-center text-center">
                <BarChart className="h-10 w-10 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">Competitor Visualization</h3>
                <p className="mt-2 text-sm text-muted-foreground">Interactive charts would be displayed here</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="products" className="h-[400px] flex items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <LineChart className="h-10 w-10 text-muted-foreground" />
              <p className="mt-2 text-sm text-muted-foreground">Product portfolio analysis would be displayed here</p>
            </div>
          </TabsContent>
          <TabsContent value="pipeline" className="h-[400px] flex items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <LineChart className="h-10 w-10 text-muted-foreground" />
              <p className="mt-2 text-sm text-muted-foreground">Pipeline analysis would be displayed here</p>
            </div>
          </TabsContent>
          <TabsContent value="financials" className="h-[400px] flex items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <LineChart className="h-10 w-10 text-muted-foreground" />
              <p className="mt-2 text-sm text-muted-foreground">Financial analysis would be displayed here</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

