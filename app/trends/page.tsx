import type { Metadata } from "next"
import TrendHeader from "@/components/trends/trend-header"
import TrendOverview from "@/components/trends/trend-overview"
import MarketTrendAnalysis from "@/components/trends/market-trend-analysis"
import CompetitorTrendAnalysis from "@/components/trends/competitor-trend-analysis"
import PrescriptionTrends from "@/components/trends/prescription-trends"

export const metadata: Metadata = {
  title: "Trend Analysis | Pharma CI Dashboard",
  description: "Analyze market and competitor trends for mCRPC treatments",
}

export default function TrendPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TrendHeader />
      <main className="flex-1 space-y-6 p-6 pt-4 md:p-8">
        <TrendOverview />
        <div className="grid gap-6 md:grid-cols-2">
          <MarketTrendAnalysis />
          <CompetitorTrendAnalysis />
        </div>
        <PrescriptionTrends />
      </main>
    </div>
  )
}

