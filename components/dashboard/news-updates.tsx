"use client"

import { CalendarDays, ExternalLink, Newspaper } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Sample data for news and updates
const newsData = [
  {
    id: 1,
    title: "Novartis receives FDA approval for new oncology drug",
    source: "BioPharma Dive",
    date: "2 days ago",
    url: "#",
  },
  {
    id: 2,
    title: "Pfizer announces strategic partnership with biotech startup",
    source: "FiercePharma",
    date: "3 days ago",
    url: "#",
  },
  {
    id: 3,
    title: "AstraZeneca's asthma drug shows promising results in Phase 3 trial",
    source: "Reuters",
    date: "5 days ago",
    url: "#",
  },
  {
    id: 4,
    title: "Merck expands manufacturing capacity for diabetes medications",
    source: "Endpoints News",
    date: "1 week ago",
    url: "#",
  },
]

export default function NewsAndUpdates() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>mCRPC News & Updates</CardTitle>
        <CardDescription>Latest industry news and competitor updates for mCRPC</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {newsData.map((item) => (
            <div key={item.id} className="flex items-start space-x-4">
              <div className="mt-1 rounded-md bg-muted p-2">
                <Newspaper className="h-4 w-4" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-medium leading-none">{item.title}</h4>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-flex">
                    <ExternalLink className="h-3 w-3" />
                    <span className="sr-only">Open link</span>
                  </a>
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <span>{item.source}</span>
                  <span className="mx-1">•</span>
                  <CalendarDays className="mr-1 h-3 w-3" />
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

