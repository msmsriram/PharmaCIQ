import type { Metadata } from "next"
import MarketAnalysisHeader from "@/components/market-analysis/market-analysis-header"
import MarketOverview from "@/components/market-analysis/market-overview"
import MarketSegmentation from "@/components/market-analysis/market-segmentation"
import MarketTrends from "@/components/market-analysis/market-trends"
import RegionalAnalysis from "@/components/market-analysis/regional-analysis"

export const metadata: Metadata = {
  title: "Market Analysis | Pharma CI Dashboard",
  description: "Comprehensive market analysis for pharmaceutical industry leaders",
}

export default function MarketAnalysisPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MarketAnalysisHeader />
      <main className="flex-1 space-y-6 p-6 pt-4 md:p-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <MarketOverview className="lg:col-span-2" />
          <MarketTrends />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <MarketSegmentation />
          <RegionalAnalysis />
        </div>
      </main>
    </div>
  )
}

