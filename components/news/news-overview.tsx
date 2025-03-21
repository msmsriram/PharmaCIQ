"use client"

import { BarChart, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NewsOverview() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>mCRPC News Overview</CardTitle>
            <CardDescription>
              News and event trends related to metastatic Castration-Resistant Prostate Cancer
            </CardDescription>
          </div>
          <Button variant="outline" size="sm" className="ml-auto h-8 border-secondary-grayblue">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="sentiment">
          <TabsList className="grid w-full grid-cols-3 bg-secondary-lightblue/20">
            <TabsTrigger
              value="sentiment"
              className="data-[state=active]:bg-primary-blue data-[state=active]:text-white"
            >
              Sentiment Analysis
            </TabsTrigger>
            <TabsTrigger value="volume" className="data-[state=active]:bg-primary-blue data-[state=active]:text-white">
              News Volume
            </TabsTrigger>
            <TabsTrigger value="topics" className="data-[state=active]:bg-primary-blue data-[state=active]:text-white">
              Hot Topics
            </TabsTrigger>
          </TabsList>
          <TabsContent value="sentiment" className="space-y-4">
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-secondary-grayblue/30 p-4 text-center">
                <div className="text-3xl font-bold text-emerald-500">62%</div>
                <div className="mt-1 text-sm font-medium text-primary-blue">Positive</div>
              </div>
              <div className="rounded-lg border border-secondary-grayblue/30 p-4 text-center">
                <div className="text-3xl font-bold text-gray-500">28%</div>
                <div className="mt-1 text-sm font-medium text-primary-blue">Neutral</div>
              </div>
              <div className="rounded-lg border border-secondary-grayblue/30 p-4 text-center">
                <div className="text-3xl font-bold text-rose-500">10%</div>
                <div className="mt-1 text-sm font-medium text-primary-blue">Negative</div>
              </div>
            </div>

            <div className="rounded-lg border border-secondary-grayblue/30 p-4">
              <h3 className="mb-3 text-sm font-medium text-primary-blue">Sentiment by Company</h3>
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>Pfizer/Astellas</span>
                    <span className="font-medium text-emerald-500">+72%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-emerald-500" style={{ width: "72%" }} />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>Novartis</span>
                    <span className="font-medium text-emerald-500">+68%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-emerald-500" style={{ width: "68%" }} />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>AstraZeneca</span>
                    <span className="font-medium text-emerald-500">+65%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-emerald-500" style={{ width: "65%" }} />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>Johnson & Johnson</span>
                    <span className="font-medium text-gray-500">+52%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-gray-500" style={{ width: "52%" }} />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>Bayer</span>
                    <span className="font-medium text-rose-500">+45%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-rose-500" style={{ width: "45%" }} />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="volume" className="h-[300px] flex items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <BarChart className="h-10 w-10 text-primary-blue" />
              <p className="mt-2 text-sm text-muted-foreground">News volume analysis would be displayed here</p>
            </div>
          </TabsContent>
          <TabsContent value="topics" className="h-[300px] flex items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <BarChart className="h-10 w-10 text-primary-blue" />
              <p className="mt-2 text-sm text-muted-foreground">Hot topics analysis would be displayed here</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

