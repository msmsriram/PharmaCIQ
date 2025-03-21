"use client"

import { CalendarDays, ExternalLink, Newspaper } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Sample data for mCRPC news feed
const newsData = [
  {
    id: 1,
    title: "Novartis' 177Lu-PSMA-617 shows 38% reduction in risk of death in Phase 3 mCRPC trial",
    source: "BioPharma Dive",
    date: "2 days ago",
    url: "#",
    category: "Clinical Trial",
  },
  {
    id: 2,
    title: "Pfizer announces positive PARP inhibitor data in BRCA-mutated mCRPC patients",
    source: "FiercePharma",
    date: "3 days ago",
    url: "#",
    category: "Clinical Trial",
  },
  {
    id: 3,
    title: "AstraZeneca's next-gen PARP inhibitor shows promising safety profile in mCRPC",
    source: "Reuters",
    date: "5 days ago",
    url: "#",
    category: "Clinical Trial",
  },
  {
    id: 4,
    title: "Johnson & Johnson faces patent challenge for abiraterone acetate formulation",
    source: "Endpoints News",
    date: "1 week ago",
    url: "#",
    category: "Legal",
  },
  {
    id: 5,
    title: "Amgen's BiTE immunotherapy shows early promise in mCRPC patients",
    source: "STAT News",
    date: "1 week ago",
    url: "#",
    category: "Clinical Trial",
  },
  {
    id: 6,
    title: "FDA grants priority review to Bayer's AR antagonist for mCRPC indication",
    source: "FDA News",
    date: "2 weeks ago",
    url: "#",
    category: "Regulatory",
  },
  {
    id: 7,
    title: "New meta-analysis shows survival benefit of combined AR/PARP inhibition in mCRPC",
    source: "Journal of Clinical Oncology",
    date: "2 weeks ago",
    url: "#",
    category: "Publication",
  },
  {
    id: 8,
    title: "Merck initiates Phase 3 trial of anti-LAG3 antibody in mCRPC patients",
    source: "Clinical Trials Arena",
    date: "3 weeks ago",
    url: "#",
    category: "Clinical Trial",
  },
]

export default function NewsFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>mCRPC News Feed</CardTitle>
        <CardDescription>Latest news and updates related to mCRPC treatments</CardDescription>
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
                  <span className="mx-1">•</span>
                  <Badge variant="outline" className="text-xs border-secondary-grayblue text-primary-blue">
                    {item.category}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
          <Button variant="outline" className="w-full border-secondary-grayblue">
            View All News
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

