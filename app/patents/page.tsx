import type { Metadata } from "next"
import PatentHeader from "@/components/patents/patent-header"
import PatentOverview from "@/components/patents/patent-overview"
import PatentTable from "@/components/patents/patent-table"
import PatentExpiryTimeline from "@/components/patents/patent-expiry-timeline"
import PatentLandscape from "@/components/patents/patent-landscape"

export const metadata: Metadata = {
  title: "Patent Monitor | Pharma CI Dashboard",
  description: "Monitor and analyze patents related to mCRPC treatments",
}

export default function PatentPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PatentHeader />
      <main className="flex-1 space-y-6 p-6 pt-4 md:p-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <PatentOverview className="lg:col-span-2" />
          <PatentExpiryTimeline />
        </div>
        <PatentTable />
        <PatentLandscape />
      </main>
    </div>
  )
}

