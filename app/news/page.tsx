import type { Metadata } from "next"
import NewsHeader from "@/components/news/news-header"
import NewsOverview from "@/components/news/news-overview"
import NewsFeed from "@/components/news/news-feed"
import ConferenceCalendar from "@/components/news/conference-calendar"
import CompetitorAnnouncements from "@/components/news/competitor-announcements"

export const metadata: Metadata = {
  title: "News & Events | Pharma CI Dashboard",
  description: "Latest news, events, and announcements related to mCRPC treatments",
}

export default function NewsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <NewsHeader />
      <main className="flex-1 space-y-6 p-6 pt-4 md:p-8">
        <NewsOverview />
        <div className="grid gap-6 md:grid-cols-2">
          <NewsFeed />
          <div className="space-y-6">
            <ConferenceCalendar />
            <CompetitorAnnouncements />
          </div>
        </div>
      </main>
    </div>
  )
}

