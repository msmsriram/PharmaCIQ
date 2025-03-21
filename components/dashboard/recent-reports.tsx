"use client"

import { FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Sample data for recent reports
const reportsData = [
  {
    id: 1,
    title: "Q2 2023 mCRPC Competitive Landscape Analysis",
    date: "July 15, 2023",
    type: "Quarterly Report",
  },
  {
    id: 2,
    title: "mCRPC Market Trends and Opportunities",
    date: "June 28, 2023",
    type: "Market Analysis",
  },
  {
    id: 3,
    title: "mCRPC Competitor Pipeline Assessment",
    date: "June 10, 2023",
    type: "Strategic Analysis",
  },
]

export default function RecentReports() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent mCRPC Reports</CardTitle>
        <CardDescription>Recently generated competitive intelligence reports for mCRPC</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reportsData.map((report) => (
            <div key={report.id} className="flex items-center justify-between space-x-4 rounded-md border p-3">
              <div className="flex items-start space-x-3">
                <div className="rounded-md bg-muted p-2">
                  <FileText className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium leading-none">{report.title}</p>
                  <div className="flex items-center pt-1 text-xs text-muted-foreground">
                    <span>{report.type}</span>
                    <span className="mx-1">•</span>
                    <span>{report.date}</span>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                View
              </Button>
            </div>
          ))}
          <Button variant="outline" className="w-full">
            View All Reports
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

