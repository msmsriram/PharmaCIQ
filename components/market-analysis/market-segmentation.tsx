"use client"

import { PieChart } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MarketSegmentation() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Segmentation</CardTitle>
        <CardDescription>Analysis by therapeutic area, product type, and distribution channel</CardDescription>
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
            <TabsTrigger value="product" className="data-[state=active]:bg-primary-blue data-[state=active]:text-white">
              Product
            </TabsTrigger>
            <TabsTrigger
              value="distribution"
              className="data-[state=active]:bg-primary-blue data-[state=active]:text-white"
            >
              Distribution
            </TabsTrigger>
          </TabsList>
          <TabsContent value="therapeutic" className="space-y-4">
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Oncology</div>
                <div className="text-sm font-medium text-primary-amber">23.5%</div>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-2 rounded-full bg-primary-amber" style={{ width: "23.5%" }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Immunology</div>
                <div className="text-sm font-medium text-primary-amber">18.2%</div>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-2 rounded-full bg-primary-amber" style={{ width: "18.2%" }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Cardiovascular</div>
                <div className="text-sm font-medium text-primary-amber">15.7%</div>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-2 rounded-full bg-primary-amber" style={{ width: "15.7%" }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Neurology</div>
                <div className="text-sm font-medium text-primary-amber">12.3%</div>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-2 rounded-full bg-primary-amber" style={{ width: "12.3%" }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Infectious Diseases</div>
                <div className="text-sm font-medium text-primary-amber">10.8%</div>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-2 rounded-full bg-primary-amber" style={{ width: "10.8%" }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Other</div>
                <div className="text-sm font-medium text-primary-amber">19.5%</div>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-2 rounded-full bg-primary-amber" style={{ width: "19.5%" }} />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="product" className="h-[300px] flex items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <PieChart className="h-10 w-10 text-primary-blue" />
              <p className="mt-2 text-sm text-muted-foreground">Product type segmentation would be displayed here</p>
            </div>
          </TabsContent>
          <TabsContent value="distribution" className="h-[300px] flex items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <PieChart className="h-10 w-10 text-primary-blue" />
              <p className="mt-2 text-sm text-muted-foreground">
                Distribution channel analysis would be displayed here
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

