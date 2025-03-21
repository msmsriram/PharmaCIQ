import type { Metadata } from "next"
import DashboardHeader from "@/components/dashboard/dashboard-header"
import CompetitorOverview from "@/components/dashboard/competitor-overview"
import MarketTrends from "@/components/dashboard/market-trends"
import PipelineTracker from "@/components/dashboard/pipeline-tracker"
import NewsAndUpdates from "@/components/dashboard/news-updates"
import RecentReports from "@/components/dashboard/recent-reports"
import KeyMetrics from "@/components/dashboard/key-metrics"

export const metadata: Metadata = {
  title: "Pharma CI Dashboard",
  description: "Comprehensive competitive intelligence dashboard for pharmaceutical industry leaders",
}

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 space-y-6 p-6 pt-4 md:p-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <KeyMetrics />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <CompetitorOverview className="lg:col-span-2" />
          <MarketTrends />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <PipelineTracker />
          <div className="space-y-6">
            <NewsAndUpdates />
            <RecentReports />
          </div>
        </div>
      </main>
    </div>
  )
}

