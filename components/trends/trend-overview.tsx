"use client"

import { LineChart, TrendingUp, TrendingDown } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TrendOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>mCRPC Market Trend Overview</CardTitle>
        <CardDescription>Key trends in the metastatic Castration-Resistant Prostate Cancer market</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-secondary-grayblue/30 p-4">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-primary-blue">Market Size</div>
              <TrendingUp className="h-4 w-4 text-emerald-500" />
            </div>
            <div className="mt-2 text-2xl font-bold text-primary-amber">$8.2B</div>
            <div className="mt-1 flex items-center text-xs text-emerald-500">
              <TrendingUp className="mr-1 h-3 w-3" />
              <span>+7.3% YoY</span>
            </div>
            <div className="mt-1 text-xs text-muted-foreground">Global mCRPC market</div>
          </div>

          <div className="rounded-lg border border-secondary-grayblue/30 p-4">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-primary-blue">Patient Population</div>
              <TrendingUp className="h-4 w-4 text-emerald-500" />
            </div>
            <div className="mt-2 text-2xl font-bold text-primary-amber">425K</div>
            <div className="mt-1 flex items-center text-xs text-emerald-500">
              <TrendingUp className="mr-1 h-3 w-3" />
              <span>+3.2% YoY</span>
            </div>
            <div className="mt-1 text-xs text-muted-foreground">Global mCRPC patients</div>
          </div>

          <div className="rounded-lg border border-secondary-grayblue/30 p-4">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-primary-blue">Treatment Rate</div>
              <TrendingUp className="h-4 w-4 text-emerald-500" />
            </div>
            <div className="mt-2 text-2xl font-bold text-primary-amber">78%</div>
            <div className="mt-1 flex items-center text-xs text-emerald-500">
              <TrendingUp className="mr-1 h-3 w-3" />
              <span>+5.1% YoY</span>
            </div>
            <div className="mt-1 text-xs text-muted-foreground">Patients receiving treatment</div>
          </div>

          <div className="rounded-lg border border-secondary-grayblue/30 p-4">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-primary-blue">Average Cost</div>
              <TrendingDown className="h-4 w-4 text-rose-500" />
            </div>
            <div className="mt-2 text-2xl font-bold text-primary-amber">$92K</div>
            <div className="mt-1 flex items-center text-xs text-rose-500">
              <TrendingDown className="mr-1 h-3 w-3" />
              <span>-2.8% YoY</span>
            </div>
            <div className="mt-1 text-xs text-muted-foreground">Annual treatment cost</div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center rounded-md border border-dashed p-8">
          <div className="flex flex-col items-center justify-center text-center">
            <LineChart className="h-10 w-10 text-primary-blue" />
            <h3 className="mt-4 text-lg font-medium">Market Trend Visualization</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Interactive market trend visualization would be displayed here
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

