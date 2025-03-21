import type { Metadata } from "next"
import PipelineHeader from "@/components/pipeline/pipeline-header"
import PipelineOverview from "@/components/pipeline/pipeline-overview"
import PipelineTable from "@/components/pipeline/pipeline-table"
import PipelineTimeline from "@/components/pipeline/pipeline-timeline"
import PipelineComparison from "@/components/pipeline/pipeline-comparison"

export const metadata: Metadata = {
  title: "Pipeline Tracking | Pharma CI Dashboard",
  description: "Track and analyze competitor drug development pipelines for mCRPC",
}

export default function PipelinePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PipelineHeader />
      <main className="flex-1 space-y-6 p-6 pt-4 md:p-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <PipelineOverview className="lg:col-span-2" />
          <PipelineTimeline />
        </div>
        <PipelineTable />
        <PipelineComparison />
      </main>
    </div>
  )
}

