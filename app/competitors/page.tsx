import type { Metadata } from "next"
import CompetitorAnalysis from "@/components/competitors/competitor-analysis"
import CompetitorComparison from "@/components/competitors/competitor-comparison"
import CompetitorHeader from "@/components/competitors/competitor-header"
import CompetitorList from "@/components/competitors/competitor-list"

export const metadata: Metadata = {
  title: "Competitors | Pharma CI Dashboard",
  description: "Detailed competitor analysis for pharmaceutical industry leaders",
}

export default function CompetitorsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <CompetitorHeader />
      <main className="flex-1 space-y-6 p-6 pt-4 md:p-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <CompetitorList className="lg:col-span-1" />
          <CompetitorAnalysis className="lg:col-span-2" />
        </div>
        <CompetitorComparison />
      </main>
    </div>
  )
}

