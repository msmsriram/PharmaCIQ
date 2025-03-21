"use client"

import { CalendarDays, ExternalLink, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Sample data for competitor announcements
const announcementData = [
  {
    id: 1,
    title: "Novartis to present new 177Lu-PSMA-617 data at upcoming ASCO GU",
    date: "January 25, 2024",
    company: "Novartis",
    url: "#",
  },
  {
    id: 2,
    title: "Pfizer announces collaboration with Arvinas on AR degrader for mCRPC",
    date: "January 18, 2024",
    company: "Pfizer",
    url: "#",
  },
  {
    id: 3,
    title: "AstraZeneca initiates new combination trial of olaparib in mCRPC",
    date: "January 10, 2024",
    company: "AstraZeneca",
    url: "#",
  },
  {
    id: 4,
    title: "Bayer submits sNDA for darolutamide in mCRPC indication",
    date: "December 15, 2023",
    company: "Bayer",
    url: "#",
  },
]

export default function CompetitorAnnouncements() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Competitor Announcements</CardTitle>
        <CardDescription>Recent press releases and announcements from competitors</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {announcementData.map((announcement) => (
            <div key={announcement.id} className="flex items-start space-x-4">
              <div className="mt-1 rounded-md bg-muted p-2">
                <FileText className="h-4 w-4" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-medium leading-none">{announcement.title}</h4>
                  <a href={announcement.url} target="_blank" rel="noopener noreferrer" className="inline-flex">
                    <ExternalLink className="h-3 w-3" />
                    <span className="sr-only">Open link</span>
                  </a>
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <span className="font-medium text-primary-amber">{announcement.company}</span>
                  <span className="mx-1">•</span>
                  <CalendarDays className="mr-1 h-3 w-3" />
                  <span>{announcement.date}</span>
                </div>
              </div>
            </div>
          ))}
          <Button variant="outline" className="w-full border-secondary-grayblue">
            View All Announcements
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

