"use client"

import { ArrowDown, ArrowUp, BarChart3, LineChart, PieChart, TrendingUp } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function KeyMetrics() {
  return (
    <>
      <Card className="border-secondary-grayblue/30">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-primary-blue">mCRPC Market Share</CardTitle>
          <CardDescription className="flex items-center text-xs">
            <PieChart className="mr-1 h-3 w-3" />
            Top 5 Companies in mCRPC
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-primary-amber">32.5%</div>
          <div className="flex items-center text-xs text-muted-foreground">
            <ArrowUp className="mr-1 h-3 w-3 text-emerald-500" />
            <span className="text-emerald-500">2.1%</span> from last quarter
          </div>
        </CardContent>
      </Card>
      <Card className="border-secondary-grayblue/30">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-primary-blue">mCRPC Pipeline Products</CardTitle>
          <CardDescription className="flex items-center text-xs">
            <BarChart3 className="mr-1 h-3 w-3" />
            Phase 2 & 3 mCRPC Trials
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-primary-amber">47</div>
          <div className="flex items-center text-xs text-muted-foreground">
            <ArrowUp className="mr-1 h-3 w-3 text-emerald-500" />
            <span className="text-emerald-500">5</span> new since last month
          </div>
        </CardContent>
      </Card>
      <Card className="border-secondary-grayblue/30">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-primary-blue">mCRPC Patent Expirations</CardTitle>
          <CardDescription className="flex items-center text-xs">
            <LineChart className="mr-1 h-3 w-3" />
            Next 24 Months
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-primary-amber">12</div>
          <div className="flex items-center text-xs text-muted-foreground">
            <ArrowDown className="mr-1 h-3 w-3 text-rose-500" />
            <span className="text-rose-500">3</span> critical mCRPC products
          </div>
        </CardContent>
      </Card>
      <Card className="border-secondary-grayblue/30">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-primary-blue">mCRPC Market Growth</CardTitle>
          <CardDescription className="flex items-center text-xs">
            <TrendingUp className="mr-1 h-3 w-3" />
            Annual Projection
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-primary-amber">7.8%</div>
          <div className="flex items-center text-xs text-muted-foreground">
            <ArrowUp className="mr-1 h-3 w-3 text-emerald-500" />
            <span className="text-emerald-500">1.2%</span> above forecast
          </div>
        </CardContent>
      </Card>
    </>
  )
}

