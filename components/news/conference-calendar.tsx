"use client"

import { Calendar, MapPin } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Sample data for mCRPC conferences
const conferenceData = [
  {
    id: 1,
    name: "ASCO Genitourinary Cancers Symposium",
    date: "February 15-17, 2024",
    location: "San Francisco, CA",
    focus: "Latest advances in GU cancers including mCRPC",
  },
  {
    id: 2,
    name: "European Association of Urology (EAU) Congress",
    date: "March 8-11, 2024",
    location: "Paris, France",
    focus: "Urological diseases including prostate cancer",
  },
  {
    id: 3,
    name: "AACR Annual Meeting",
    date: "April 5-10, 2024",
    location: "San Diego, CA",
    focus: "Cancer research including mCRPC mechanisms",
  },
  {
    id: 4,
    name: "ASCO Annual Meeting",
    date: "May 31-June 4, 2024",
    location: "Chicago, IL",
    focus: "Clinical oncology including mCRPC treatments",
  },
]

export default function ConferenceCalendar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Conferences</CardTitle>
        <CardDescription>Key scientific and medical conferences for mCRPC</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {conferenceData.map((conference) => (
            <div key={conference.id} className="rounded-lg border border-secondary-grayblue/30 p-3">
              <div className="font-medium text-primary-blue">{conference.name}</div>
              <div className="mt-2 flex items-center text-xs text-muted-foreground">
                <Calendar className="mr-1 h-3 w-3" />
                <span>{conference.date}</span>
              </div>
              <div className="mt-1 flex items-center text-xs text-muted-foreground">
                <MapPin className="mr-1 h-3 w-3" />
                <span>{conference.location}</span>
              </div>
              <div className="mt-2 text-xs">{conference.focus}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

